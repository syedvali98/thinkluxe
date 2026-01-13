"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useMenu } from "@/context/MenuContext";

export default function AnimatedLogo() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { scrollY } = useScroll();
  const { isMenuOpen } = useMenu();

  // Responsive logo sizing based on screen width
  const getLogoSize = (width: number) => {
    if (width < 480) return 200; // Mobile
    if (width < 768) return 280; // Small tablet
    if (width < 1024) return 340; // Tablet
    return 400; // Desktop
  };

  // Responsive animation thresholds
  const getScrollThreshold = (width: number) => {
    if (width < 768) return 250; // Faster animation on mobile
    return 400; // Desktop
  };

  const logoSize = getLogoSize(windowSize.width);
  const scrollThreshold = getScrollThreshold(windowSize.width);

  // Get window dimensions for calculating positions
  useEffect(() => {
    const updateSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Hide/show with header once logo is in navbar position (after scroll threshold)
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      if (latest > scrollThreshold) {
        // Logo is in navbar - follow header hide/show behavior
        if (latest > lastScrollY && latest > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        // Logo still animating to navbar - always visible
        setIsVisible(true);
      }
      setLastScrollY(latest);
    });

    return () => unsubscribe();
  }, [scrollY, lastScrollY, scrollThreshold]);

  // Calculate center position
  const centerX = windowSize.width / 2;
  const centerY = windowSize.height / 2;

  // Navbar logo position (center of navbar)
  const navbarX = windowSize.width / 2;
  const navbarY = windowSize.width < 768 ? 36 : 44; // Smaller navbar position on mobile

  // Final navbar logo size (responsive)
  const finalLogoSize = windowSize.width < 768 ? 150 : 200;
  const finalScale = finalLogoSize / logoSize;
  const midScale = (1 + finalScale) / 2;
  const midThreshold = scrollThreshold / 2;

  // Scale: 1 -> finalScale (responsive logo to navbar logo)
  const scale = useTransform(scrollY, [0, midThreshold, scrollThreshold], [1, midScale, finalScale]);

  // X position: center -> navbar center
  const x = useTransform(
    scrollY,
    [0, midThreshold, scrollThreshold],
    [centerX, centerX, navbarX]
  );

  // Y position: center -> navbar top
  const y = useTransform(
    scrollY,
    [0, midThreshold, scrollThreshold],
    [centerY, centerY - 50, navbarY]
  );

  if (windowSize.width === 0) return null;

  // Hide when menu is open
  if (isMenuOpen) return null;

  return (
    <motion.div
      className="fixed z-50 pointer-events-none"
      style={{
        x,
        y,
        scale,
        translateX: "-50%",
        translateY: "-50%",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
    >
      {/* Logo Image - responsive sizing */}
      <div
        className="relative rounded-full overflow-hidden"
        style={{
          width: logoSize,
          height: logoSize,
        }}
      >
        <Image
          src="/images/logo.png"
          alt="ThinkLuxe"
          fill
          className="object-contain"
          priority
        />
      </div>
    </motion.div>
  );
}

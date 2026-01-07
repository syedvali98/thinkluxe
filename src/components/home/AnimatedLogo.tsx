"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useMenu } from "@/context/MenuContext";

export default function AnimatedLogo() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const { scrollY } = useScroll();
  const { isMenuOpen } = useMenu();

  // Get window dimensions for calculating positions
  useEffect(() => {
    const updateSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Calculate center position
  const centerX = windowSize.width / 2;
  const centerY = windowSize.height / 2;

  // Navbar logo position (center of navbar)
  const navbarX = windowSize.width / 2;
  const navbarY = 44;

  // Scale: 1 -> 0.5 (400px logo to 200px navbar logo)
  const scale = useTransform(scrollY, [0, 200, 400], [1, 0.7, 0.5]);

  // X position: center -> navbar center
  const x = useTransform(
    scrollY,
    [0, 200, 400],
    [centerX, centerX, navbarX]
  );

  // Y position: center -> navbar top
  const y = useTransform(
    scrollY,
    [0, 200, 400],
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
      }}
    >
      {/* Logo Image */}
      <div
        className="relative rounded-full overflow-hidden"
        style={{
          width: 400,
          height: 400,
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

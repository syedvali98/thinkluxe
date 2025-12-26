"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, animate } from "framer-motion";
import Image from "next/image";
import { useMenu } from "@/context/MenuContext";

export default function AnimatedLogo() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const { scrollY } = useScroll();
  const { isMenuOpen } = useMenu();

  // Motion values for animated position when menu opens
  const animatedX = useMotionValue(0);
  const animatedY = useMotionValue(0);
  const animatedScale = useMotionValue(1);

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
  const navbarX = windowSize.width / 2; // Center horizontally
  const navbarY = 44; // Center vertically in header (header height ~88px)
  const navbarScale = 0.5; // 400px * 0.5 = 200px in navbar

  // Animation keyframes based on scroll
  // Phase 1 (0-200px): Scale down while staying centered
  // Phase 2 (200-400px): Move to navbar position

  // Scale: 1 -> 0.5 (400px logo to 200px navbar logo)
  const scrollScale = useTransform(scrollY, [0, 200, 400], [1, 0.7, 0.5]);

  // X position: center -> navbar center
  const scrollX = useTransform(
    scrollY,
    [0, 200, 400],
    [centerX, centerX, navbarX]
  );

  // Y position: center -> navbar top
  const scrollY_pos = useTransform(
    scrollY,
    [0, 200, 400],
    [centerY, centerY - 50, navbarY]
  );

  // Opacity for initial appearance
  const opacity = useTransform(scrollY, [0, 50], [1, 1]);

  // Animate to navbar position when menu opens
  useEffect(() => {
    if (isMenuOpen) {
      // Animate to navbar position
      animate(animatedX, navbarX, { duration: 0.4, ease: "easeOut" });
      animate(animatedY, navbarY, { duration: 0.4, ease: "easeOut" });
      animate(animatedScale, navbarScale, { duration: 0.4, ease: "easeOut" });
    } else {
      // Return to scroll-based position
      const currentScroll = scrollY.get();
      const targetX = currentScroll < 200 ? centerX : (currentScroll < 400 ? centerX : navbarX);
      const targetY = currentScroll < 200 ? centerY : (currentScroll < 400 ? centerY - 50 : navbarY);
      const targetScale = currentScroll < 200 ? 1 : (currentScroll < 400 ? 0.7 : 0.5);

      animate(animatedX, targetX, { duration: 0.4, ease: "easeOut" });
      animate(animatedY, targetY, { duration: 0.4, ease: "easeOut" });
      animate(animatedScale, targetScale, { duration: 0.4, ease: "easeOut" });
    }
  }, [isMenuOpen, centerX, centerY, navbarX, navbarY, scrollY, animatedX, animatedY, animatedScale]);

  // Sync animated values with scroll when menu is closed
  useEffect(() => {
    if (!isMenuOpen) {
      const unsubX = scrollX.on("change", (v) => animatedX.set(v));
      const unsubY = scrollY_pos.on("change", (v) => animatedY.set(v));
      const unsubScale = scrollScale.on("change", (v) => animatedScale.set(v));

      // Initialize values
      animatedX.set(scrollX.get());
      animatedY.set(scrollY_pos.get());
      animatedScale.set(scrollScale.get());

      return () => {
        unsubX();
        unsubY();
        unsubScale();
      };
    }
  }, [isMenuOpen, scrollX, scrollY_pos, scrollScale, animatedX, animatedY, animatedScale]);

  if (windowSize.width === 0) return null;

  return (
    <motion.div
      className="fixed z-50 pointer-events-none"
      style={{
        x: animatedX,
        y: animatedY,
        scale: animatedScale,
        opacity,
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

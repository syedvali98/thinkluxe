"use client";

import { useEffect } from "react";
import { motion, useMotionValue, animate, useMotionTemplate } from "framer-motion";

interface AnimatedPillProps {
  children: React.ReactNode;
  lightMode?: boolean;
}

export default function AnimatedPill({ children, lightMode = false }: AnimatedPillProps) {
  const angle = useMotionValue(0);

  // Always animate rotation
  useEffect(() => {
    const controls = animate(angle, angle.get() + 360, {
      duration: 3,
      repeat: Infinity,
      ease: "linear",
    });
    return () => controls.stop();
  }, [angle]);

  // Colors based on mode
  const bgColor = lightMode ? "#dcdcdc" : "#303030";
  const textColor = lightMode ? "text-black" : "text-white";

  const gradientBackground = useMotionTemplate`conic-gradient(from ${angle}deg, ${bgColor} 0%, #C9A962 50%, ${bgColor} 100%)`;

  return (
    <span
      className={`relative inline-block px-4 py-1.5 sm:px-6 sm:py-2 rounded-full ${textColor} text-xs tracking-wider`}
    >
      {/* Rotating gradient - always visible */}
      <motion.span
        className="absolute inset-0 rounded-full p-[1px]"
        style={{ background: gradientBackground }}
      >
        <span className="block w-full h-full rounded-full" style={{ background: bgColor }} />
      </motion.span>

      <span className="relative">{children}</span>
    </span>
  );
}

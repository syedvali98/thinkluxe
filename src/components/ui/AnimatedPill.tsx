"use client";

import { useEffect, useState, useRef, memo } from "react";
import { motion, useMotionValue, animate, useMotionTemplate } from "framer-motion";

interface AnimatedPillProps {
  children: React.ReactNode;
  lightMode?: boolean;
}

function AnimatedPill({ children, lightMode = false }: AnimatedPillProps) {
  const angle = useMotionValue(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  // Only animate when visible in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Animate rotation only when visible
  useEffect(() => {
    if (!isVisible) return;

    const controls = animate(angle, angle.get() + 360, {
      duration: 3,
      repeat: Infinity,
      ease: "linear",
    });
    return () => controls.stop();
  }, [angle, isVisible]);

  // Colors based on mode
  const bgColor = lightMode ? "#dcdcdc" : "#303030";
  const textColor = lightMode ? "text-black" : "text-white";

  const gradientBackground = useMotionTemplate`conic-gradient(from ${angle}deg, ${bgColor} 0%, #C9A962 50%, ${bgColor} 100%)`;

  return (
    <span
      ref={ref}
      className={`relative inline-block px-4 py-1.5 sm:px-6 sm:py-2 rounded-full ${textColor} text-xs tracking-wider`}
    >
      {/* Rotating gradient - only animates when visible */}
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

export default memo(AnimatedPill);

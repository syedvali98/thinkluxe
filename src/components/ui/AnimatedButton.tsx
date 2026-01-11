"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, animate, useMotionTemplate } from "framer-motion";
import Link from "next/link";

interface AnimatedButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function AnimatedButton({
  children,
  href,
  onClick,
  className = "",
}: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const angle = useMotionValue(0);

  // Animate rotation on hover
  useEffect(() => {
    let controls: ReturnType<typeof animate> | undefined;
    if (isHovered) {
      controls = animate(angle, angle.get() + 360, {
        duration: 1.5,
        repeat: Infinity,
        ease: "linear",
      });
    } else {
      // Reset angle smoothly when not hovered
      angle.set(0);
    }
    return () => controls?.stop();
  }, [isHovered, angle]);

  // Create the rotating gradient background
  const gradientBackground = useMotionTemplate`conic-gradient(from ${angle}deg, #1a1a1a 0%, #C9A962 50%, #1a1a1a 100%)`;

  const buttonContent = (
    <div
      className={`relative w-2/5 p-[1.5px] rounded-r-full rounded-l-none overflow-hidden cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Static gradient border - visible when not hovered */}
      <div
        className="absolute inset-0 rounded-r-full rounded-l-none transition-opacity duration-300"
        style={{
          background: "linear-gradient(to right, #1a1a1a 0%, #C9A962 100%)",
          opacity: isHovered ? 0 : 1,
        }}
      />

      {/* Rotating gradient border - visible when hovered */}
      <motion.div
        className="absolute inset-0 rounded-r-full rounded-l-none transition-opacity duration-300"
        style={{
          background: gradientBackground,
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Inner content */}
      <div className="relative bg-black rounded-r-full rounded-l-none px-2 py-5 flex items-center justify-center">
        <span
          className="text-xs font-medium uppercase tracking-wider transition-colors duration-300 whitespace-nowrap"
          style={{ color: isHovered ? "#C9A962" : "white" }}
        >
          {children}
        </span>
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{buttonContent}</Link>;
  }

  return (
    <button type="button" onClick={onClick}>
      {buttonContent}
    </button>
  );
}

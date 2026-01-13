"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, animate, useMotionTemplate } from "framer-motion";
import Link from "next/link";

interface AnimatedButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  fullRounded?: boolean;
  isExternal?: boolean;
  lightMode?: boolean;
  fullWidthMobile?: boolean;
}

export default function AnimatedButton({
  children,
  href,
  onClick,
  className = "",
  fullRounded = false,
  isExternal = false,
  lightMode = false,
  fullWidthMobile = false,
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

  // Colors based on mode
  const baseColor = lightMode ? "#d7cda9" : "#1a1a1a";
  const textColor = lightMode ? "#d7cda9" : "white";
  const bgClass = lightMode ? "bg-white" : "bg-black";

  // Create the rotating gradient background
  const gradientBackground = useMotionTemplate`conic-gradient(from ${angle}deg, ${baseColor} 0%, #C9A962 50%, ${baseColor} 100%)`;

  const roundedClass = fullRounded ? "rounded-full" : "rounded-r-full rounded-l-none";
  const getWidthClass = () => {
    if (fullWidthMobile) return "w-full md:inline-block";
    if (fullRounded) return "inline-block";
    return "w-2/5";
  };
  const widthClass = getWidthClass();

  const buttonContent = (
    <div
      className={`relative ${widthClass} p-[1.5px] ${roundedClass} overflow-hidden cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Static gradient border - visible when not hovered */}
      <div
        className={`absolute inset-0 ${roundedClass} transition-opacity duration-300`}
        style={{
          background: `linear-gradient(to right, ${baseColor} 0%, #C9A962 100%)`,
          opacity: isHovered ? 0 : 1,
        }}
      />

      {/* Rotating gradient border - visible when hovered */}
      <motion.div
        className={`absolute inset-0 ${roundedClass} transition-opacity duration-300`}
        style={{
          background: gradientBackground,
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Inner content */}
      <div className={`relative ${bgClass} ${roundedClass} ${fullRounded ? "px-10 py-4" : "px-2 py-5"} flex items-center justify-center`}>
        <span
          className={`${fullRounded ? "text-sm" : "text-xs"} font-medium uppercase tracking-wider transition-colors duration-300 whitespace-nowrap`}
          style={{ color: isHovered ? "#C9A962" : textColor }}
        >
          {children}
        </span>
      </div>
    </div>
  );

  if (href) {
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {buttonContent}
        </a>
      );
    }
    return <Link href={href}>{buttonContent}</Link>;
  }

  return (
    <button type="button" onClick={onClick}>
      {buttonContent}
    </button>
  );
}

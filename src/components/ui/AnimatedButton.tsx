"use client";

import { useEffect } from "react";
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
  const baseColor = lightMode ? "#d7cda9" : "#1a1a1a";
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
    >
      {/* Rotating gradient border - always visible */}
      <motion.div
        className={`absolute inset-0 ${roundedClass}`}
        style={{
          background: gradientBackground,
        }}
      />

      {/* Inner content */}
      <div className={`relative ${bgClass} ${roundedClass} ${fullRounded ? "px-10 py-4" : "px-2 py-5"} flex items-center justify-center`}>
        <span
          className={`${fullRounded ? "text-sm" : "text-xs"} font-medium uppercase tracking-wider whitespace-nowrap`}
          style={{ color: "#C9A962" }}
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

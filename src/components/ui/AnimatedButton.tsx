"use client";

import { useEffect, useState, useRef, memo } from "react";
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
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
}

function AnimatedButton({
  children,
  href,
  onClick,
  className = "",
  fullRounded = false,
  isExternal = false,
  lightMode = false,
  fullWidthMobile = false,
  fullWidth = false,
  type = "button",
}: AnimatedButtonProps) {
  const angle = useMotionValue(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
  const baseColor = lightMode ? "#d7cda9" : "#1a1a1a";
  const bgClass = lightMode ? "bg-white" : "bg-black";

  // Create the rotating gradient background
  const gradientBackground = useMotionTemplate`conic-gradient(from ${angle}deg, ${baseColor} 0%, #C9A962 50%, ${baseColor} 100%)`;

  const roundedClass = fullRounded ? "rounded-full" : "rounded-r-full rounded-l-none";
  const getWidthClass = () => {
    if (fullWidth) return "w-full";
    if (fullWidthMobile) return "w-full md:inline-block";
    if (fullRounded) return "inline-block";
    return "w-2/5";
  };
  const widthClass = getWidthClass();

  const buttonContent = (
    <div
      ref={ref}
      className={`relative ${widthClass} p-[1.5px] ${roundedClass} overflow-hidden cursor-pointer ${className}`}
    >
      {/* Rotating gradient border - only animates when visible */}
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

  const wrapperClass = fullWidth ? "w-full block" : "";

  if (href) {
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={wrapperClass}>
          {buttonContent}
        </a>
      );
    }
    return <Link href={href} className={wrapperClass}>{buttonContent}</Link>;
  }

  return (
    <button type={type} onClick={onClick} className={wrapperClass}>
      {buttonContent}
    </button>
  );
}

export default memo(AnimatedButton);

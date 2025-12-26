"use client";

import { useRef, useEffect, useState, useId } from "react";
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
  const uniqueId = useId();
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);
    }
  }, []);

  // Path starts just below top-left corner on the left edge to avoid corner artifacts
  // Traces: left edge → bottom → arc around right → top edge → back down to start
  const borderPath = "M 1,2 L 1,49 L 176,49 A 24,24 0 0 0 176,1 L 1,1 L 1,3";

  // Unique gradient IDs to avoid conflicts with multiple buttons
  const whiteGradientId = `whiteShineGradient-${uniqueId}`;
  const goldGradientId = `goldShineGradient-${uniqueId}`;

  const buttonContent = (
    <>
      {/* SVG Border with animation */}
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
        viewBox="-1 -1 202 52"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Shiny white/silver gradient for default state */}
          <linearGradient id={whiteGradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9CA3AF" />
            <stop offset="20%" stopColor="#D1D5DB" />
            <stop offset="40%" stopColor="#F3F4F6" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#F3F4F6" />
            <stop offset="80%" stopColor="#D1D5DB" />
            <stop offset="100%" stopColor="#9CA3AF" />
          </linearGradient>

          {/* Animated gradient with shine effect */}
          <linearGradient id={goldGradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A8893D" />
            <stop offset="20%" stopColor="#C9A962" />
            <stop offset="40%" stopColor="#F5E6BA" />
            <stop offset="50%" stopColor="#FFFAED" />
            <stop offset="60%" stopColor="#F5E6BA" />
            <stop offset="80%" stopColor="#C9A962" />
            <stop offset="100%" stopColor="#A8893D" />
          </linearGradient>
        </defs>

        {/* White/silver base border - always visible, fades on hover */}
        <path
          d={borderPath}
          fill="none"
          stroke={`url(#${whiteGradientId})`}
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            opacity: isHovered ? 0 : 1,
            transition: "opacity 0.3s ease",
          }}
        />

        {/* Gold animated border with gradient */}
        <path
          ref={pathRef}
          d={borderPath}
          fill="none"
          stroke={`url(#${goldGradientId})`}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: pathLength || 500,
            strokeDashoffset: isHovered ? 0 : (pathLength || 500),
            transition: "stroke-dashoffset 0.3s ease-out",
          }}
        />
      </svg>

      {/* Button Text */}
      <span
        className="relative z-10 text-sm font-medium uppercase tracking-wider transition-colors duration-500"
        style={{
          color: isHovered ? "#C9A962" : "white",
        }}
      >
        {children}
      </span>
    </>
  );

  const baseClasses = `
    relative inline-flex items-center justify-center
    px-8 py-4 min-w-[200px] h-[50px]
    rounded-r-full rounded-l-none
    bg-transparent
    overflow-visible
    ${className}
  `.trim();

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  if (href) {
    return (
      <Link
        href={href}
        className={baseClasses}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={baseClasses}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {buttonContent}
    </button>
  );
}

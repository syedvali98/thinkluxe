"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import CustomCursor from "@/components/ui/CustomCursor";

export default function HeroSection() {
  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [leftPaused, setLeftPaused] = useState(false);
  const [rightPaused, setRightPaused] = useState(false);
  const [leftVideoStarted, setLeftVideoStarted] = useState(true);
  const [rightVideoStarted, setRightVideoStarted] = useState(true);
  const leftVideoRef = useRef<HTMLVideoElement>(null);
  const rightVideoRef = useRef<HTMLVideoElement>(null);

  // Autoplay videos on mount
  useEffect(() => {
    if (leftVideoRef.current) {
      leftVideoRef.current.play().catch(() => {});
    }
    if (rightVideoRef.current) {
      rightVideoRef.current.play().catch(() => {});
    }
  }, []);

  const handleMouseEnter = (side: "left" | "right") => {
    setHoveredSide(side);
    setCursorVisible(true);
  };

  const handleMouseLeave = () => {
    setHoveredSide(null);
    setCursorVisible(false);
  };

  const toggleLeftVideo = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (leftVideoRef.current) {
      if (leftPaused) {
        leftVideoRef.current.play().catch(() => {});
      } else {
        leftVideoRef.current.pause();
      }
      setLeftPaused(!leftPaused);
    }
  };

  const toggleRightVideo = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (rightVideoRef.current) {
      if (rightPaused) {
        rightVideoRef.current.play().catch(() => {});
      } else {
        rightVideoRef.current.pause();
      }
      setRightPaused(!rightPaused);
    }
  };

  return (
    <>
      <CustomCursor isVisible={cursorVisible} />

      <section className="relative h-screen w-full overflow-hidden">
        {/* Two Column Layout */}
        <div className="flex h-full">
          {/* Left Column - Aluminum Doors & Windows */}
          <Link
            href="/aluminum-doors-windows"
            className="relative flex-1 group"
            onMouseEnter={() => handleMouseEnter("left")}
            onMouseLeave={handleMouseLeave}
          >
            {/* Background Image - hides once video has started */}
            <div className="absolute inset-0 bg-[#0a0a0a]">
              {/* Placeholder gradient - replace with actual image */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-[#2a2a2a] via-[#1a1a1a] to-[#0a0a0a] transition-opacity duration-700 ${
                  leftVideoStarted ? "opacity-0" : "opacity-100"
                }`}
              />
              {/* Background image layer */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
                  leftVideoStarted ? "opacity-0" : "opacity-100"
                }`}
                style={{
                  backgroundImage: "url('/images/aluminum-bg.jpg')",
                }}
              />
            </div>

            {/* Video - stays visible once started */}
            <video
              ref={leftVideoRef}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                leftVideoStarted ? "opacity-100" : "opacity-0"
              }`}
              muted
              loop
              playsInline
              autoPlay
              preload="auto"
            >
              <source src="/videos/aluminium-hero.mp4" type="video/mp4" />
            </video>

            {/* Dark overlay - visible when not hovering */}
            <div
              className={`absolute inset-0 bg-black/60 transition-opacity duration-700 ${
                hoveredSide === "left" ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* Content - Bottom center */}
            <div className="relative z-10 h-full flex items-end justify-center pb-24 px-8 md:px-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-serif text-xl md:text-2xl lg:text-3xl text-white leading-tight text-center"
              >
                Aluminum Doors & Windows
              </motion.h2>
            </div>

            {/* Play/Pause button - visible when video is playing */}
            <motion.button
              className="absolute bottom-8 left-8 z-30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: hoveredSide === "left" ? 1 : 0,
                scale: hoveredSide === "left" ? 1 : 0.8,
              }}
              transition={{ duration: 0.3 }}
              onClick={toggleLeftVideo}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-colors">
                {leftPaused ? (
                  <svg className="w-4 h-4 text-[#C9A962]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-[#C9A962]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                )}
              </div>
            </motion.button>

          </Link>

          {/* Center Divider */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 z-20" />

          {/* Right Column - Custom Kitchen & Millwork */}
          <Link
            href="/kitchen"
            className="relative flex-1 group"
            onMouseEnter={() => handleMouseEnter("right")}
            onMouseLeave={handleMouseLeave}
          >
            {/* Background Image - hides once video has started */}
            <div className="absolute inset-0 bg-[#0a0a0a]">
              {/* Placeholder gradient - replace with actual image */}
              <div
                className={`absolute inset-0 bg-gradient-to-bl from-[#2a2a2a] via-[#1a1a1a] to-[#0a0a0a] transition-opacity duration-700 ${
                  rightVideoStarted ? "opacity-0" : "opacity-100"
                }`}
              />
              {/* Background image layer */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
                  rightVideoStarted ? "opacity-0" : "opacity-100"
                }`}
                style={{
                  backgroundImage: "url('/images/kitchen-bg.jpg')",
                }}
              />
            </div>

            {/* Video - stays visible once started */}
            <video
              ref={rightVideoRef}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                rightVideoStarted ? "opacity-100" : "opacity-0"
              }`}
              muted
              loop
              playsInline
              autoPlay
              preload="auto"
            >
              <source src="/videos/kitchen-video.mp4" type="video/mp4" />
            </video>

            {/* Dark overlay - visible when not hovering */}
            <div
              className={`absolute inset-0 bg-black/60 transition-opacity duration-700 ${
                hoveredSide === "right" ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* Content - Bottom center */}
            <div className="relative z-10 h-full flex items-end justify-center pb-24 px-8 md:px-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="font-serif text-xl md:text-2xl lg:text-3xl text-white leading-tight text-center"
              >
                Custom Kitchen & Millwork
              </motion.h2>
            </div>

            {/* Play/Pause button - visible when video is playing */}
            <motion.button
              className="absolute bottom-8 right-8 z-30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: hoveredSide === "right" ? 1 : 0,
                scale: hoveredSide === "right" ? 1 : 0.8,
              }}
              transition={{ duration: 0.3 }}
              onClick={toggleRightVideo}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-colors">
                {rightPaused ? (
                  <svg className="w-4 h-4 text-[#C9A962]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-[#C9A962]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                )}
              </div>
            </motion.button>

          </Link>
        </div>

      </section>
    </>
  );
}

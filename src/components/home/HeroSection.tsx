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
  const leftVideoRef = useRef<HTMLVideoElement>(null);
  const rightVideoRef = useRef<HTMLVideoElement>(null);

  // Handle video playback on hover
  useEffect(() => {
    if (hoveredSide === "left" && leftVideoRef.current && !leftPaused) {
      leftVideoRef.current.play().catch(() => {});
    } else if (leftVideoRef.current && hoveredSide !== "left") {
      leftVideoRef.current.pause();
      leftVideoRef.current.currentTime = 0;
      setLeftPaused(false);
    }

    if (hoveredSide === "right" && rightVideoRef.current && !rightPaused) {
      rightVideoRef.current.play().catch(() => {});
    } else if (rightVideoRef.current && hoveredSide !== "right") {
      rightVideoRef.current.pause();
      rightVideoRef.current.currentTime = 0;
      setRightPaused(false);
    }
  }, [hoveredSide, leftPaused, rightPaused]);

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
            href="/services#aluminum"
            className="relative flex-1 group"
            onMouseEnter={() => handleMouseEnter("left")}
            onMouseLeave={handleMouseLeave}
          >
            {/* Background Image */}
            <div className="absolute inset-0 bg-[#0a0a0a]">
              {/* Placeholder gradient - replace with actual image */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-[#2a2a2a] via-[#1a1a1a] to-[#0a0a0a] transition-opacity duration-700 ${
                  hoveredSide === "left" ? "opacity-0" : "opacity-100"
                }`}
              />
              {/* Background image layer */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
                  hoveredSide === "left" ? "opacity-0" : "opacity-100"
                }`}
                style={{
                  backgroundImage: "url('/images/aluminum-bg.png')",
                }}
              />
            </div>

            {/* Video (hidden until hover) */}
            <video
              ref={leftVideoRef}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                hoveredSide === "left" ? "opacity-100" : "opacity-0"
              }`}
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="/videos/aluminum-video.mp4" type="video/mp4" />
            </video>

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />

            {/* Content */}
            <div className="relative z-10 h-full flex items-end pb-24 px-8 md:px-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-serif text-xl md:text-2xl lg:text-3xl text-white leading-tight whitespace-nowrap"
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
            href="/services#kitchen"
            className="relative flex-1 group"
            onMouseEnter={() => handleMouseEnter("right")}
            onMouseLeave={handleMouseLeave}
          >
            {/* Background Image */}
            <div className="absolute inset-0 bg-[#0a0a0a]">
              {/* Placeholder gradient - replace with actual image */}
              <div
                className={`absolute inset-0 bg-gradient-to-bl from-[#2a2a2a] via-[#1a1a1a] to-[#0a0a0a] transition-opacity duration-700 ${
                  hoveredSide === "right" ? "opacity-0" : "opacity-100"
                }`}
              />
              {/* Background image layer */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
                  hoveredSide === "right" ? "opacity-0" : "opacity-100"
                }`}
                style={{
                  backgroundImage: "url('/images/kitchen-bg.png')",
                }}
              />
            </div>

            {/* Video (hidden until hover) */}
            <video
              ref={rightVideoRef}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                hoveredSide === "right" ? "opacity-100" : "opacity-0"
              }`}
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="/videos/kitchen-video.mp4" type="video/mp4" />
            </video>

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />

            {/* Content */}
            <div className="relative z-10 h-full flex items-end justify-end pb-24 px-8 md:px-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="font-serif text-xl md:text-2xl lg:text-3xl text-white leading-tight text-right whitespace-nowrap"
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

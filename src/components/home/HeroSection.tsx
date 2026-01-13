"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import CustomCursor from "@/components/ui/CustomCursor";
import { useMenu } from "@/context/MenuContext";

export default function HeroSection() {
  const { isMenuOpen } = useMenu();
  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [leftPaused, setLeftPaused] = useState(false);
  const [rightPaused, setRightPaused] = useState(false);
  const [leftVideoLoaded, setLeftVideoLoaded] = useState(false);
  const [rightVideoLoaded, setRightVideoLoaded] = useState(false);
  const leftVideoRef = useRef<HTMLVideoElement>(null);
  const rightVideoRef = useRef<HTMLVideoElement>(null);
  const leftSectionRef = useRef<HTMLAnchorElement>(null);
  const rightSectionRef = useRef<HTMLAnchorElement>(null);

  // Lazy load videos using IntersectionObserver
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "100px",
      threshold: 0.1,
    };

    const leftObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && leftVideoRef.current && !leftVideoLoaded) {
          leftVideoRef.current.load();
          leftVideoRef.current.play().catch(() => {});
          setLeftVideoLoaded(true);
          leftObserver.disconnect();
        }
      });
    }, options);

    const rightObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && rightVideoRef.current && !rightVideoLoaded) {
          rightVideoRef.current.load();
          rightVideoRef.current.play().catch(() => {});
          setRightVideoLoaded(true);
          rightObserver.disconnect();
        }
      });
    }, options);

    if (leftSectionRef.current) {
      leftObserver.observe(leftSectionRef.current);
    }
    if (rightSectionRef.current) {
      rightObserver.observe(rightSectionRef.current);
    }

    return () => {
      leftObserver.disconnect();
      rightObserver.disconnect();
    };
  }, [leftVideoLoaded, rightVideoLoaded]);

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

      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Mobile Logo - positioned at boundary between sections, scrolls naturally */}
        {!isMenuOpen && (
          <div className="md:hidden absolute left-1/2 top-[calc(50vh+8px)] -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
            <div className="relative w-[150px] h-[150px] rounded-full overflow-hidden">
              <Image
                src="/images/logo.png"
                alt="ThinkLuxe"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        )}

        {/* Two Column Layout - stacks on mobile, side-by-side on md+ */}
        <div className="flex flex-col md:flex-row h-full min-h-screen">
          {/* Left Column - Aluminum Doors & Windows */}
          <Link
            ref={leftSectionRef}
            href="/aluminum-doors-windows"
            className="relative min-h-[50vh] md:min-h-0 flex-1 group"
            onMouseEnter={() => handleMouseEnter("left")}
            onMouseLeave={handleMouseLeave}
          >
            {/* Background Image - shows until video loads */}
            <div className="absolute inset-0 bg-[#0a0a0a]">
              {/* Placeholder gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-[#2a2a2a] via-[#1a1a1a] to-[#0a0a0a] transition-opacity duration-700 ${
                  leftVideoLoaded ? "opacity-0" : "opacity-100"
                }`}
              />
              {/* Background image layer */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
                  leftVideoLoaded ? "opacity-0" : "opacity-100"
                }`}
                style={{
                  backgroundImage: "url('/images/aluminum-bg.jpg')",
                }}
              />
            </div>

            {/* Video - lazy loaded, visible once loaded */}
            <video
              ref={leftVideoRef}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                leftVideoLoaded ? "opacity-100" : "opacity-0"
              }`}
              muted
              loop
              playsInline
              preload="none"
            >
              <source src="/videos/aluminium-hero.mp4" type="video/mp4" />
            </video>

            {/* Dark overlay - visible when not hovering */}
            <div
              className={`absolute inset-0 bg-black/60 transition-opacity duration-700 ${
                hoveredSide === "left" ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* Content - Center on mobile, bottom on desktop */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center md:justify-end pb-0 md:pb-24 px-4 sm:px-8 md:px-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl text-white leading-tight text-center"
              >
                Aluminum Doors & Windows
              </motion.h2>

              {/* Mobile tap indicator */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="md:hidden flex flex-col items-center mt-4 text-white/70"
              >
                <span className="text-xs uppercase tracking-widest mb-2">Tap to explore</span>
                <motion.svg
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </motion.svg>
              </motion.div>
            </div>

            {/* Play/Pause button - visible when video is playing */}
            <motion.button
              className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-30"
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

          {/* Center Divider - hidden on mobile since columns stack */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 z-20" />

          {/* Right Column - Custom Kitchen & Millwork */}
          <Link
            ref={rightSectionRef}
            href="/kitchen"
            className="relative min-h-[50vh] md:min-h-0 flex-1 group"
            onMouseEnter={() => handleMouseEnter("right")}
            onMouseLeave={handleMouseLeave}
          >
            {/* Background Image - shows until video loads */}
            <div className="absolute inset-0 bg-[#0a0a0a]">
              {/* Placeholder gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-bl from-[#2a2a2a] via-[#1a1a1a] to-[#0a0a0a] transition-opacity duration-700 ${
                  rightVideoLoaded ? "opacity-0" : "opacity-100"
                }`}
              />
              {/* Background image layer */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
                  rightVideoLoaded ? "opacity-0" : "opacity-100"
                }`}
                style={{
                  backgroundImage: "url('/images/kitchen-bg.jpg')",
                }}
              />
            </div>

            {/* Video - lazy loaded, visible once loaded */}
            <video
              ref={rightVideoRef}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                rightVideoLoaded ? "opacity-100" : "opacity-0"
              }`}
              muted
              loop
              playsInline
              preload="none"
            >
              <source src="/videos/kitchen-video.mp4" type="video/mp4" />
            </video>

            {/* Dark overlay - visible when not hovering */}
            <div
              className={`absolute inset-0 bg-black/60 transition-opacity duration-700 ${
                hoveredSide === "right" ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* Content - Center on mobile, bottom on desktop */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center md:justify-end pb-0 md:pb-24 px-4 sm:px-8 md:px-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl text-white leading-tight text-center"
              >
                Custom Kitchen & Millwork
              </motion.h2>

              {/* Mobile tap indicator */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="md:hidden flex flex-col items-center mt-4 text-white/70"
              >
                <span className="text-xs uppercase tracking-widest mb-2">Tap to explore</span>
                <motion.svg
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </motion.svg>
              </motion.div>
            </div>

            {/* Play/Pause button - visible when video is playing */}
            <motion.button
              className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-30"
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

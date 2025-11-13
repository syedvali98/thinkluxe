'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
  className = '',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;

    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleStart = () => {
    setIsDragging(true);
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleEnd);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full select-none overflow-hidden rounded-2xl shadow-2xl ${className}`}
      style={{ aspectRatio: '16/9' }}
    >
      {/* Before Image (full width) */}
      <div className="absolute inset-0">
        <Image
          src={beforeImage}
          alt={beforeLabel}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
          priority
        />
        {/* Before Label */}
        <div className="absolute top-6 left-6 px-4 py-2 bg-black/60 backdrop-blur-sm border border-white/20 rounded-full">
          <span className="text-white text-sm font-medium tracking-wide uppercase">
            {beforeLabel}
          </span>
        </div>
      </div>

      {/* After Image (clipped by slider) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={afterImage}
          alt={afterLabel}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
          priority
        />
        {/* After Label */}
        <div className="absolute top-6 right-6 px-4 py-2 bg-black/60 backdrop-blur-sm border border-white/20 rounded-full">
          <span className="text-white text-sm font-medium tracking-wide uppercase">
            {afterLabel}
          </span>
        </div>
      </div>

      {/* Slider Control */}
      <div
        className="absolute inset-y-0 cursor-ew-resize group"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        onMouseDown={handleStart}
        onTouchStart={handleStart}
      >
        {/* Divider Line */}
        <div className="absolute inset-y-0 w-0.5 bg-white shadow-lg" />

        {/* Slider Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="relative w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center border-2 border-brand-bronze-400"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: isDragging
                ? '0 0 0 8px rgba(212, 167, 80, 0.2)'
                : '0 10px 25px rgba(0, 0, 0, 0.3)',
            }}
            transition={{ duration: 0.2 }}
          >
            {/* Left Arrow */}
            <svg
              className="w-3 h-3 text-brand-charcoal-600 absolute left-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M15 19l-7-7 7-7"
              />
            </svg>

            {/* Right Arrow */}
            <svg
              className="w-3 h-3 text-brand-charcoal-600 absolute right-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.div>
        </div>

        {/* Top and Bottom Line Extensions */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-transparent to-white" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-8 bg-gradient-to-t from-transparent to-white" />
      </div>

      {/* Instruction hint (fades after first interaction) */}
      {sliderPosition === 50 && !isDragging && (
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 backdrop-blur-sm border border-white/20 rounded-full pointer-events-none"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <span className="text-white text-xs font-light tracking-wide flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Drag to compare
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </motion.div>
      )}
    </div>
  );
};

export default BeforeAfterSlider;

"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ShowroomSection } from "@/components/home";

// Gallery videos data - using existing video for testing
const galleryVideos = [
  {
    id: 1,
    src: "/videos/aluminum-video.mp4",
    title: "Luxury Kitchen"
  },
  {
    id: 2,
    src: "/videos/aluminum-video.mp4",
    title: "Custom Millwork"
  },
  {
    id: 3,
    src: "/videos/aluminum-video.mp4",
    title: "Aluminum Windows"
  },
  {
    id: 4,
    src: "/videos/aluminum-video.mp4",
    title: "Modern Interiors"
  }
];

// Animation variants for horizontal slide
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0
  })
};

// Gallery categories data - 4 rows x 2 images each
const galleryCategories = [
  {
    id: "kitchen-millwork",
    tabName: "Custom Kitchen & Millwork",
    rows: [
      [
        { src: "/images/showroom-1.jpg", alt: "Modern living room with built-in TV unit" },
        { src: "/images/showroom-2.jpeg", alt: "Luxury bathroom with golden tiles" },
      ],
      [
        { src: "/images/showroom-3.jpeg", alt: "Custom kitchen design" },
        { src: "/images/showroom-4.jpeg", alt: "Millwork details" },
      ],
      [
        { src: "/images/showroom-5.jpeg", alt: "Kitchen island" },
        { src: "/images/showroom-6.jpeg", alt: "Cabinet details" },
      ],
      [
        { src: "/images/showroom-1.jpg", alt: "Pantry design" },
        { src: "/images/showroom-2.jpeg", alt: "Custom shelving" },
      ],
    ]
  },
  {
    id: "aluminum",
    tabName: "Aluminum Doors & Windows",
    rows: [
      [
        { src: "/images/showroom-5.jpeg", alt: "Aluminum sliding doors" },
        { src: "/images/showroom-6.jpeg", alt: "Modern windows" },
      ],
      [
        { src: "/images/showroom-1.jpg", alt: "Aluminum frames" },
        { src: "/images/showroom-2.jpeg", alt: "Window installation" },
      ],
      [
        { src: "/images/showroom-3.jpeg", alt: "Folding doors" },
        { src: "/images/showroom-4.jpeg", alt: "Bay windows" },
      ],
      [
        { src: "/images/showroom-5.jpeg", alt: "Entry doors" },
        { src: "/images/showroom-6.jpeg", alt: "Skylight windows" },
      ],
    ]
  }
];

export default function GalleryPage() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Navigate to previous video
  const goToPrevious = () => {
    setDirection(-1);
    setCurrentVideo((prev) => (prev - 1 + galleryVideos.length) % galleryVideos.length);
  };

  // Navigate to next video
  const goToNext = () => {
    setDirection(1);
    setCurrentVideo((prev) => (prev + 1) % galleryVideos.length);
  };

  // Toggle play/pause
  const togglePause = () => {
    const video = videoRefs.current[currentVideo];
    if (video) {
      if (isPaused) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
      setIsPaused(!isPaused);
    }
  };

  // Scroll-based transformations
  const { scrollY } = useScroll();

  // Border radius: 40px -> 0px over 300px scroll
  const borderRadius = useTransform(scrollY, [0, 300], [40, 0]);

  // Horizontal padding: 32px -> 0px over 300px scroll
  const horizontalPadding = useTransform(scrollY, [0, 300], [32, 0]);

  // Handle video end - auto-advance to next
  const handleVideoEnd = () => {
    setDirection(1);
    setCurrentVideo((prev) => (prev + 1) % galleryVideos.length);
  };

  // Play current video and pause others
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentVideo) {
          video.currentTime = 0;
          if (!isPaused) {
            video.play().catch(() => {});
          }
        } else {
          video.pause();
        }
      }
    });
    // Reset pause state when changing videos
    setIsPaused(false);
  }, [currentVideo]);

  return (
    <main className="bg-black">
      {/* Hero Section with Video Carousel */}
      <section ref={containerRef} className="relative min-h-screen pt-24 pb-12">
        {/* Video Container with scroll-based styling */}
        <motion.div
          className="relative overflow-hidden mx-auto"
          style={{
            borderRadius,
            paddingLeft: horizontalPadding,
            paddingRight: horizontalPadding,
          }}
        >
          {/* Video Carousel */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[inherit]">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={currentVideo}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <video
                  ref={(el) => { videoRefs.current[currentVideo] = el; }}
                  className="w-full h-full object-cover"
                  muted
                  playsInline
                  onEnded={handleVideoEnd}
                >
                  <source src={galleryVideos[currentVideo].src} type="video/mp4" />
                </video>
              </motion.div>
            </AnimatePresence>

            {/* Gradient overlay at bottom for controls */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

            {/* Left Arrow */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#C9A962] bg-black/30 backdrop-blur-sm flex items-center justify-center text-[#C9A962] hover:bg-[#C9A962] hover:text-black transition-all duration-300 cursor-pointer group"
              aria-label="Previous video"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6 transform group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              onClick={goToNext}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#C9A962] bg-black/30 backdrop-blur-sm flex items-center justify-center text-[#C9A962] hover:bg-[#C9A962] hover:text-black transition-all duration-300 cursor-pointer group"
              aria-label="Next video"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6 transform group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Pause/Play Button - Bottom Left */}
            <button
              onClick={togglePause}
              className="absolute bottom-6 left-6 md:left-8 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#C9A962] bg-black/30 backdrop-blur-sm flex items-center justify-center text-[#C9A962] hover:bg-[#C9A962] hover:text-black transition-all duration-300 cursor-pointer group"
              aria-label={isPaused ? "Play video" : "Pause video"}
            >
              {isPaused ? (
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 transform group-hover:scale-110 transition-transform ml-0.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 transform group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              )}
            </button>

            {/* Video Indicators (dots) - Center */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
              {galleryVideos.map((video, index) => (
                <button
                  key={video.id}
                  onClick={() => {
                    setDirection(index > currentVideo ? 1 : -1);
                    setCurrentVideo(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentVideo
                      ? "bg-[#C9A962] w-8"
                      : "bg-white/40 hover:bg-white/60 w-2"
                  }`}
                  aria-label={`Play ${video.title}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Gallery Grid Section */}
      <section className="bg-[#f5f5f0] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-12">
            {/* Pill Badge - Gold gradient border style */}
            <div className="flex justify-center mb-6">
              <span className="relative px-6 py-2 rounded-full text-[#C9A962] text-sm uppercase tracking-wider">
                <span className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-br from-[#C9A962] to-[#a8935a]">
                  <span className="block w-full h-full rounded-full bg-white" />
                </span>
                <span className="relative">Gallery</span>
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif italic text-3xl md:text-4xl lg:text-5xl text-[#C9A962] mb-4">
              Experience Luxury in Every Detail
            </h2>

            {/* Subtext */}
            <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
              A showcase of bespoke creations designed to inspire modern luxury living.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-2 p-1.5 rounded-full bg-[#e8e5dc]">
              {galleryCategories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(index)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                    selectedCategory === index
                      ? "bg-[#f5f5f0] text-gray-900 border border-[#C9A962]"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {category.tabName}
                </button>
              ))}
            </div>
          </div>

          {/* Image Grid - 4 rows, 70%/30% split */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-4"
            >
              {galleryCategories[selectedCategory].rows.map((row, rowIndex) => {
                const totalRows = galleryCategories[selectedCategory].rows.length;
                const isFirstRow = rowIndex === 0;
                const isLastRow = rowIndex === totalRows - 1;

                return (
                  <motion.div
                    key={rowIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: rowIndex * 0.1 }}
                    className="flex gap-4"
                  >
                    {/* First image - 70% width */}
                    <div
                      className={`relative aspect-[4/3] w-[70%] overflow-hidden group ${
                        isFirstRow ? "rounded-tl-[30px]" : ""
                      } ${isLastRow ? "rounded-bl-[30px]" : ""}`}
                    >
                      <Image
                        src={row[0].src}
                        alt={row[0].alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Second image - 30% width */}
                    <div
                      className={`relative aspect-[4/3] w-[30%] overflow-hidden group ${
                        isFirstRow ? "rounded-tr-[30px]" : ""
                      } ${isLastRow ? "rounded-br-[30px]" : ""}`}
                    >
                      <Image
                        src={row[1].src}
                        alt={row[1].alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* Showroom Visit Section */}
      <ShowroomSection />
    </main>
  );
}

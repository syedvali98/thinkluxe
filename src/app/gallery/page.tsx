"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { ShowroomSection } from "@/components/home";
import AnimatedButton from "@/components/ui/AnimatedButton";
import AnimatedPill from "@/components/ui/AnimatedPill";
import ImageViewer from "@/components/ui/ImageViewer";

// Gallery videos data
const galleryVideos = [
  {
    id: 1,
    src: "/videos/gallery-hero-1.mp4",
    title: "Luxury Kitchen",
  },
  {
    id: 2,
    src: "/videos/gallery-hero-2.mp4",
    title: "Custom Millwork",
  },
  {
    id: 3,
    src: "/videos/gallery-hero-3.mp4",
    title: "Aluminum Windows",
  },
];

// Animation variants for horizontal slide
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

// Gallery categories data - 4 rows x 2 images each
const galleryCategories = [
  {
    id: "kitchen-millwork",
    tabName: "Custom Kitchen & Millwork",
    rows: [
      [
        { src: "/images/gallery-kitchen-1.jpeg", alt: "Custom kitchen design" },
        { src: "/images/gallery-kitchen-2.jpeg", alt: "Luxury kitchen" },
      ],
      [
        { src: "/images/gallery-kitchen-3.jpeg", alt: "Modern kitchen" },
        { src: "/images/gallery-kitchen-4.jpeg", alt: "Kitchen millwork" },
      ],
      [
        { src: "/images/gallery-kitchen-5.jpeg", alt: "Kitchen island" },
        { src: "/images/gallery-kitchen-6.jpeg", alt: "Cabinet details" },
      ],
      [
        { src: "/images/gallery-kitchen-7.jpeg", alt: "Pantry design" },
        { src: "/images/gallery-kitchen-8.jpeg", alt: "Custom shelving" },
      ],
    ],
  },
  {
    id: "aluminum",
    tabName: "Aluminum Doors & Windows",
    rows: [
      [
        { src: "/images/gallery-aluminum-1.jpg", alt: "Aluminum doors" },
        { src: "/images/gallery-aluminum-2.jpg", alt: "Modern windows" },
      ],
      [
        { src: "/images/gallery-aluminum-3.jpg", alt: "Aluminum frames" },
        { src: "/images/gallery-aluminum-4.jpg", alt: "Window installation" },
      ],
      [
        { src: "/images/gallery-aluminum-5.jpg", alt: "Folding doors" },
        { src: "/images/gallery-aluminum-6.jpeg", alt: "Bay windows" },
      ],
      [
        { src: "/images/gallery-aluminum-7.jpg", alt: "Entry doors" },
        { src: "/images/gallery-aluminum-8.jpg", alt: "Skylight windows" },
      ],
    ],
  },
];

// Get all images from current category
const getAllImagesFromCategory = (categoryIndex: number) => {
  return galleryCategories[categoryIndex].rows.flat().map(img => img.src);
};

export default function GalleryPage() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Get all images for current category
  const allImages = getAllImagesFromCategory(selectedCategory);

  // Image viewer handlers
  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const handleNext = () => {
    if (selectedImage) {
      const currentIndex = allImages.indexOf(selectedImage);
      const nextIndex = (currentIndex + 1) % allImages.length;
      setSelectedImage(allImages[nextIndex]);
    }
  };

  const handlePrev = () => {
    if (selectedImage) {
      const currentIndex = allImages.indexOf(selectedImage);
      const prevIndex = (currentIndex - 1 + allImages.length) % allImages.length;
      setSelectedImage(allImages[prevIndex]);
    }
  };

  // Navigate to previous video
  const goToPrevious = () => {
    setDirection(-1);
    setCurrentVideo(
      (prev) => (prev - 1 + galleryVideos.length) % galleryVideos.length
    );
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

  // Border radius: 40px -> 0px over 150px scroll
  const borderRadius = useTransform(scrollY, [0, 150], [40, 0]);

  // Horizontal padding: 8px -> 0px over 150px scroll
  const horizontalPadding = useTransform(scrollY, [0, 150], [8, 0]);

  // Scale: 1 -> 1.15 over 150px scroll (zoom in effect)
  const videoScale = useTransform(scrollY, [0, 150], [1, 1.15]);

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
      <section ref={containerRef} className="relative pt-20 sm:pt-22 md:pt-24">
        {/* Video Container with scroll-based styling */}
        <motion.div
          className="relative overflow-hidden mx-auto"
          style={{
            borderRadius,
            paddingLeft: horizontalPadding,
            paddingRight: horizontalPadding,
          }}
        >
          {/* Video Carousel - Remaining viewport height after header */}
          <div className="relative h-[calc(100vh-80px)] sm:h-[calc(100vh-88px)] md:h-[calc(100vh-96px)] w-full overflow-hidden rounded-[inherit]">
            <AnimatePresence
              initial={false}
              custom={direction}
              mode="popLayout"
            >
              <motion.div
                key={currentVideo}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
                style={{ scale: videoScale }}
              >
                <video
                  ref={(el) => {
                    videoRefs.current[currentVideo] = el;
                  }}
                  className="absolute inset-0 w-full h-full object-cover"
                  muted
                  playsInline
                  onEnded={handleVideoEnd}
                >
                  <source
                    src={galleryVideos[currentVideo].src}
                    type="video/mp4"
                  />
                </video>
              </motion.div>
            </AnimatePresence>

            {/* Left Arrow */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#C9A962] bg-white/10 backdrop-blur-sm flex items-center justify-center text-[#C9A962] hover:bg-[#C9A962] hover:text-black transition-all duration-300 cursor-pointer group"
              aria-label="Previous video"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6 transform group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              onClick={goToNext}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#C9A962] bg-white/10 backdrop-blur-sm flex items-center justify-center text-[#C9A962] hover:bg-[#C9A962] hover:text-black transition-all duration-300 cursor-pointer group"
              aria-label="Next video"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6 transform group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
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
      <section className="bg-[#ffffff] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            {/* Pill Badge - Gold gradient border style */}
            <div className="flex justify-center mb-4 md:mb-6">
              <AnimatedPill lightMode>Gallery</AnimatedPill>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-medium text-[#C9A962] mb-3 md:mb-4">
              Experience Luxury in Every Detail
            </h2>

            {/* Subtext */}
            <p className="text-[#555555] font-medium text-sm sm:text-base md:text-lg max-w-md mx-auto px-4 sm:px-0">
              A showcase of bespoke creations designed to inspire modern luxury
              living.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex justify-center mb-8 md:mb-12 px-4 sm:px-0">
            <div className="inline-flex items-center gap-1 sm:gap-2 p-1.5 rounded-full border border-[#C9A962] bg-[#ffffff]">
              {galleryCategories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(index)}
                  className={`px-3 md:px-6 py-2 md:py-2 rounded-full font-medium transition-all duration-300 cursor-pointer text-[11px] sm:text-xs md:text-base whitespace-nowrap ${
                    selectedCategory === index
                      ? "bg-[#efefef] text-[#C9A962]"
                      : "text-[#c5bca6] hover:text-[#ac945d]"
                  }`}
                >
                  {category.tabName}
                </button>
              ))}
            </div>
          </div>

          {/* Image Grid - stacked on mobile, 70%/30% split on desktop */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-3 md:gap-4"
            >
              {galleryCategories[selectedCategory].rows.map((row, rowIndex) => {
                const totalRows =
                  galleryCategories[selectedCategory].rows.length;
                const isFirstRow = rowIndex === 0;
                const isLastRow = rowIndex === totalRows - 1;

                return (
                  <motion.div
                    key={rowIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: rowIndex * 0.1 }}
                    className="flex flex-col md:flex-row gap-3 md:gap-4"
                  >
                    {/* First image - full width on mobile, 70% on desktop */}
                    <div
                      className={`relative aspect-[4/3] w-full md:w-[70%] overflow-hidden group cursor-pointer rounded-[20px] md:rounded-none ${
                        isFirstRow ? "md:rounded-tl-[30px]" : ""
                      } ${isLastRow ? "md:rounded-bl-[30px]" : ""}`}
                      onClick={() => handleImageClick(row[0].src)}
                    >
                      <Image
                        src={row[0].src}
                        alt={row[0].alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                    {/* Second image - full width on mobile, 30% on desktop */}
                    <div
                      className={`relative aspect-[4/3] w-full md:w-[30%] overflow-hidden group cursor-pointer rounded-[20px] md:rounded-none ${
                        isFirstRow ? "md:rounded-tr-[30px]" : ""
                      } ${isLastRow ? "md:rounded-br-[30px]" : ""}`}
                      onClick={() => handleImageClick(row[1].src)}
                    >
                      <Image
                        src={row[1].src}
                        alt={row[1].alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* View More on Instagram Button */}
          <div className="flex justify-center mt-8 md:mt-12">
            <AnimatedButton
              href="https://www.instagram.com/thinkluxe.ca?igsh=MWx0aTI4aXpueHRxMQ=="
              fullRounded
              isExternal
              lightMode
            >
              <span className="flex items-center gap-2 font-medium">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                View more on Instagram
              </span>
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* Showroom Visit Section */}
      <ShowroomSection />

      {/* Image Viewer Modal */}
      <AnimatePresence>
        {selectedImage && (
          <ImageViewer
            src={selectedImage}
            onClose={() => setSelectedImage(null)}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

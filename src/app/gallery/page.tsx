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

// Image Viewer Component
function ImageViewer({
  src,
  onClose,
  onNext,
  onPrev,
}: {
  src: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.5, 4));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 0.5, 1));
  const handleReset = () => setZoom(1);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-20 p-2 text-white/70 hover:text-white transition-colors"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4 bg-black/60 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
        <button
          onClick={(e) => { e.stopPropagation(); handleZoomOut(); }}
          className="p-2 text-white/70 hover:text-white transition-colors disabled:opacity-30"
          title="Zoom out"
          disabled={zoom <= 1}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
          </svg>
        </button>
        <span className="text-white/70 text-sm min-w-[60px] text-center">{Math.round(zoom * 100)}%</span>
        <button
          onClick={(e) => { e.stopPropagation(); handleZoomIn(); }}
          className="p-2 text-white/70 hover:text-white transition-colors disabled:opacity-30"
          title="Zoom in"
          disabled={zoom >= 4}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
          </svg>
        </button>
        <div className="w-px h-5 bg-white/20" />
        <button
          onClick={(e) => { e.stopPropagation(); handleReset(); }}
          className="p-2 text-white/70 hover:text-white transition-colors"
          title="Reset zoom"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>

      {/* Previous button */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 text-white/70 hover:text-white transition-colors bg-black/40 rounded-full"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next button */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 text-white/70 hover:text-white transition-colors bg-black/40 rounded-full"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Scrollable Image Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute inset-0 overflow-auto flex items-center justify-center"
        style={{ cursor: zoom > 1 ? "grab" : "default" }}
      >
        <img
          src={src}
          alt="Gallery image"
          className="transition-transform duration-200 ease-out"
          style={{
            transform: `scale(${zoom})`,
            transformOrigin: "center center",
            maxWidth: "90vw",
            maxHeight: "85vh",
            objectFit: "contain",
          }}
        />
      </div>
    </motion.div>
  );
}

// Gallery categories data - 4 rows x 2 images each
const galleryCategories = [
  {
    id: "kitchen-millwork",
    tabName: "Custom Kitchen & Millwork",
    rows: [
      [
        { src: "/images/gallery-kitchen-1.png", alt: "Custom kitchen design" },
        { src: "/images/gallery-kitchen-2.png", alt: "Luxury kitchen" },
      ],
      [
        { src: "/images/gallery-kitchen-3.png", alt: "Modern kitchen" },
        { src: "/images/gallery-kitchen-4.png", alt: "Kitchen millwork" },
      ],
      [
        { src: "/images/gallery-kitchen-5.png", alt: "Kitchen island" },
        { src: "/images/gallery-kitchen-6.png", alt: "Cabinet details" },
      ],
      [
        { src: "/images/gallery-kitchen-7.png", alt: "Pantry design" },
        { src: "/images/gallery-kitchen-8.png", alt: "Custom shelving" },
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
        { src: "/images/gallery-aluminum-6.png", alt: "Bay windows" },
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

  // Horizontal padding: 32px -> 0px over 150px scroll
  const horizontalPadding = useTransform(scrollY, [0, 150], [32, 0]);

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
      <section ref={containerRef} className="relative pt-24">
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
          <div className="relative aspect-video w-full overflow-hidden rounded-[inherit]">
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
                  className="w-full h-full object-cover"
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
      <section className="bg-[#ffffff] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            {/* Pill Badge - Gold gradient border style */}
            <div className="flex justify-center mb-6">
              <span className="relative px-6 py-2 rounded-full text-black text-xs tracking-wider">
                <span className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-[#C9A962] to-[#eccd84]">
                  <span className="block w-full h-full rounded-full bg-[#dcdcdc]" />
                </span>
                <span className="relative">Gallery</span>
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#C9A962] mb-4">
              Experience Luxury in Every Detail
            </h2>

            {/* Subtext */}
            <p className="text-[#555555] font-medium md:text-lg max-w-md mx-auto">
              A showcase of bespoke creations designed to inspire modern luxury
              living.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-2 p-3 rounded-full border border-[#C9A962] bg-[#ffffff]">
              {galleryCategories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(index)}
                  className={`px-10 py-6 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                    selectedCategory === index
                      ? " bg-[#efefef] text-[#C9A962]"
                      : " text-[#c5bca6] hover:text-[#ac945d]"
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
                    className="flex gap-4"
                  >
                    {/* First image - 70% width */}
                    <div
                      className={`relative aspect-[4/3] w-[70%] overflow-hidden group cursor-pointer ${
                        isFirstRow ? "rounded-tl-[30px]" : ""
                      } ${isLastRow ? "rounded-bl-[30px]" : ""}`}
                      onClick={() => handleImageClick(row[0].src)}
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
                      className={`relative aspect-[4/3] w-[30%] overflow-hidden group cursor-pointer ${
                        isFirstRow ? "rounded-tr-[30px]" : ""
                      } ${isLastRow ? "rounded-br-[30px]" : ""}`}
                      onClick={() => handleImageClick(row[1].src)}
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

          {/* View More on Instagram Button */}
          <div className="flex justify-center mt-12">
            <AnimatedButton
              href="https://instagram.com"
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

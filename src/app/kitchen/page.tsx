"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Section, AnimatedButton } from "@/components/ui";
import PDFModal from "@/components/ui/PDFModal";
import AnimatedPill from "@/components/ui/AnimatedPill";

// Service cards data
const serviceCards = [
  {
    title: "Custom Kitchens",
    description: "Transform your kitchen into a masterpiece of form and function with bespoke cabinetry and premium finishes.",
    image: "/images/kitchen-1.jpg",
    pdf: "/pdfs/kitchen-1.pdf",
  },
  {
    title: "Closets and Wardrobes",
    description: "Maximize storage with smart closet systems, lighting and accessories tailored to your space.",
    image: "/images/kitchen-2.jpg",
    pdf: "/pdfs/kitchen-2.pdf",
  },
  {
    title: "Media Unit, Dining,\nEntrance & Office Sections",
    description: "Elegant solutions for every room in your home, designed with precision and style.",
    image: "/images/kitchen-3.jpg",
    pdf: "/pdfs/kitchen-3.pdf",
  },
  {
    title: "Bathroom Vanities & Laundry",
    description: "Luxurious bathroom designs with premium finishes that elevate your daily routine.",
    image: "/images/kitchen-4.jpeg",
    pdf: "/pdfs/kitchen-4.pdf",
  },
  {
    title: "Feature Walls & Interior Doors",
    description: "Add depth and character with custom wall and door designs, crafted with textures and finishes.",
    image: "/images/kitchen-5.jpeg",
    pdf: "/pdfs/kitchen-5.pdf",
  },
  {
    title: "Whole House Customization",
    description: "Complete home transformation with cohesive design language throughout every space.",
    image: "/images/kitchen-6.jpeg",
    pdf: "/pdfs/kitchen-6.pdf",
  },
  {
    title: "Wardrobe Accessories",
    description: "Maximize storage with smart wardrobe systems, lighting and accessories tailored to your space.",
    image: "/images/kitchen-7.png",
    pdf: "/pdfs/kitchen-7.pdf",
  },
  {
    title: "Kitchen Accessories",
    description: "Maximize functionality with smart kitchen systems, storage and accessories tailored to your space.",
    image: "/images/kitchen-8.png",
    pdf: "/pdfs/kitchen-8.pdf",
  },
];

// Gallery images for kitchen
const galleryRow1 = [
  "/images/kitchen-gallery-1.jpeg",
  "/images/kitchen-gallery-2.jpeg",
  "/images/kitchen-gallery-3.jpeg",
  "/images/kitchen-gallery-4.jpeg",
  "/images/kitchen-gallery-5.jpeg",
  "/images/kitchen-gallery-6.jpeg",
];

const galleryRow2 = [
  "/images/kitchen-gallery-7.jpeg",
  "/images/kitchen-gallery-8.jpeg",
  "/images/kitchen-gallery-9.jpeg",
  "/images/kitchen-gallery-10.jpeg",
  "/images/kitchen-gallery-11.jpeg",
  "/images/kitchen-gallery-12.jpeg",
];

const allGalleryImages = [...galleryRow1, ...galleryRow2];

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
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Reset zoom and position when image changes
  useEffect(() => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  }, [src]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "+" || e.key === "=") setZoom((z) => Math.min(z + 0.25, 3));
      if (e.key === "-") setZoom((z) => Math.max(z - 0.25, 1));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrev]);

  // Handle wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setZoom((z) => Math.min(Math.max(z + delta, 1), 3));
  };

  // Handle drag for panning when zoomed
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Navigation arrows */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Zoom controls */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
        <button
          onClick={(e) => { e.stopPropagation(); setZoom((z) => Math.max(z - 0.25, 1)); }}
          className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
        >
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        </button>
        <span className="text-white text-sm min-w-[3rem] text-center">{Math.round(zoom * 100)}%</span>
        <button
          onClick={(e) => { e.stopPropagation(); setZoom((z) => Math.min(z + 0.25, 3)); }}
          className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
        >
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>

      {/* Image container */}
      <div
        ref={containerRef}
        className="relative max-w-[90vw] max-h-[85vh] overflow-hidden cursor-move"
        onClick={(e) => e.stopPropagation()}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <img
          src={src}
          alt="Gallery image"
          className="transition-transform duration-200 ease-out"
          style={{
            transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
            maxWidth: "90vw",
            maxHeight: "85vh",
            objectFit: "contain",
          }}
          draggable={false}
        />
      </div>
    </motion.div>
  );
}

// Helper function for main grid card border radius (first 6 cards) - only top corners
// Mobile (1 col): 0=top only
// Small (2 cols): 0=tl, 1=tr
// Desktop (3 cols): 0=tl, 2=tr
const getCardRadius = (index: number) => {
  switch (index) {
    case 0:
      return "rounded-t-[20px] sm:rounded-t-none sm:rounded-tl-[20px] md:rounded-tl-[30px] lg:rounded-tl-[40px]";
    case 1:
      return "sm:rounded-tr-[20px] md:rounded-tr-none";
    case 2:
      return "md:rounded-tr-[30px] lg:rounded-tr-[40px]";
    default:
      return "";
  }
};

// Helper function for bottom row card border radius (last 2 cards at 50% width)
// Mobile (1 col): 0=none, 1=bottom
// SM+ (2 cols): 0=bl, 1=br
const getBottomCardRadius = (index: number) => {
  switch (index) {
    case 0:
      return "sm:rounded-bl-[20px] md:rounded-bl-[30px] lg:rounded-bl-[40px]";
    case 1:
      return "rounded-b-[20px] sm:rounded-b-none sm:rounded-br-[20px] md:rounded-br-[30px] lg:rounded-br-[40px]";
    default:
      return "";
  }
};

// Process steps data
const processSteps = [
  {
    title: "Discovery and Consultation",
    description:
      "We begin with an in-depth consultation to understand your vision, needs, and preferences. Our team listens carefully to your ideas, assesses your space, and discusses your lifestyle to ensure every detail aligns with your expectations.",
  },
  {
    title: "Design Development",
    description:
      "Our design team creates detailed plans and 3D visualizations, bringing your vision to life before construction begins. We refine every element until the design perfectly captures your aesthetic and functional requirements.",
  },
  {
    title: "Material and Finishes Selection",
    description:
      "Choose from our curated selection of premium materials, finishes, and hardware. Our experts guide you through the finest options, ensuring each choice reflects luxury and durability.",
  },
  {
    title: "Procurement and Installation",
    description:
      "We handle all procurement and expert installation with meticulous attention to detail. Our skilled craftsmen bring the design to life, ensuring flawless execution and a stunning final result.",
  },
];

export default function KitchenPage() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [hoveredStep, setHoveredStep] = useState(0);
  const [selectedStep, setSelectedStep] = useState(0); // Persisted/clicked step
  const [ballAngle, setBallAngle] = useState(-90); // Start at top (-90 degrees)
  const [isHovering, setIsHovering] = useState(false);
  const [circleScale, setCircleScale] = useState(1); // Scale factor for ball orbit
  const circleRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  // Handle responsive circle scale
  useEffect(() => {
    const updateScale = () => {
      if (window.innerWidth < 640) {
        setCircleScale(0.44); // Ball at 62px, inside 70px radius circle
      } else if (window.innerWidth < 768) {
        setCircleScale(0.69); // Ball at 97px, inside 110px radius circle
      } else {
        setCircleScale(1); // Ball at 140px, inside 160px radius circle
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  // Lazy load video when hero section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // The displayed step: hovered step when hovering, otherwise selected step
  const displayedStep = isHovering ? hoveredStep : selectedStep;

  // PDF Modal state
  const [pdfModal, setPdfModal] = useState<{ isOpen: boolean; pdf: string; title: string }>({
    isOpen: false,
    pdf: "",
    title: "",
  });

  const openPdfModal = (pdf: string, title: string) => {
    setPdfModal({ isOpen: true, pdf, title });
  };

  const closePdfModal = () => {
    setPdfModal({ isOpen: false, pdf: "", title: "" });
  };

  // Gallery state
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isGalleryVisible, setIsGalleryVisible] = useState(false);
  const gallerySectionRef = useRef<HTMLDivElement>(null);

  // Gallery navigation
  const handleNext = () => {
    if (selectedImage) {
      const currentIndex = allGalleryImages.indexOf(selectedImage);
      const nextIndex = (currentIndex + 1) % allGalleryImages.length;
      setSelectedImage(allGalleryImages[nextIndex]);
    }
  };

  const handlePrev = () => {
    if (selectedImage) {
      const currentIndex = allGalleryImages.indexOf(selectedImage);
      const prevIndex = (currentIndex - 1 + allGalleryImages.length) % allGalleryImages.length;
      setSelectedImage(allGalleryImages[prevIndex]);
    }
  };

  // Gallery visibility observer
  useEffect(() => {
    const galleryObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsGalleryVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (gallerySectionRef.current) {
      galleryObserver.observe(gallerySectionRef.current);
    }

    return () => {
      galleryObserver.disconnect();
    };
  }, []);

  // Get angle for a step (center of each quadrant)
  const getStepAngle = (step: number) => {
    switch (step) {
      case 0: return -90;  // Top
      case 1: return 0;    // Right
      case 2: return 90;   // Bottom
      case 3: return 180;  // Left
      default: return -90;
    }
  };

  // Mouse tracking for the interactive circle
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!circleRef.current) return;

    const rect = circleRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate angle from center
    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
    const degrees = angle * (180 / Math.PI);

    setBallAngle(degrees);

    // Determine step based on angle quadrant
    // Top: -135 to -45 (Step 1 - Discovery)
    // Right: -45 to 45 (Step 2 - Design)
    // Bottom: 45 to 135 (Step 3 - Materials)
    // Left: 135 to -135 (Step 4 - Installation)
    if (degrees >= -135 && degrees < -45) setHoveredStep(0);
    else if (degrees >= -45 && degrees < 45) setHoveredStep(1);
    else if (degrees >= 45 && degrees < 135) setHoveredStep(2);
    else setHoveredStep(3);
  };

  // Handle click to store the selected step
  const handleClick = () => {
    setSelectedStep(hoveredStep);
  };

  // When mouse leaves, reset ball to selected step position
  const handleMouseLeave = () => {
    setIsHovering(false);
    setBallAngle(getStepAngle(selectedStep));
  };

  // Navigate to previous step (mobile)
  const goToPrevStep = () => {
    const newStep = (selectedStep - 1 + processSteps.length) % processSteps.length;
    setSelectedStep(newStep);
    setBallAngle(getStepAngle(newStep));
  };

  // Navigate to next step (mobile)
  const goToNextStep = () => {
    const newStep = (selectedStep + 1) % processSteps.length;
    setSelectedStep(newStep);
    setBallAngle(getStepAngle(newStep));
  };

  // Calculate ball position on the circle orbit
  const circleRadius = 140; // Radius for ball orbit
  const ballX = Math.cos((ballAngle * Math.PI) / 180) * circleRadius;
  const ballY = Math.sin((ballAngle * Math.PI) / 180) * circleRadius;

  return (
    <main className="bg-black">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with video and image fallback */}
        <div className="absolute inset-0">
          {/* Video background - lazy loaded */}
          {shouldLoadVideo && (
            <video
              autoPlay
              muted
              loop
              playsInline
              onCanPlayThrough={() => setVideoLoaded(true)}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                videoLoaded ? "opacity-100" : "opacity-0"
              }`}
            >
              <source src="/videos/kitchen-video.mp4" type="video/mp4" />
            </video>
          )}

          {/* Image fallback - shown until video loads */}
          <Image
            src="/images/kitchen-hero.jpg"
            alt="Custom Kitchen"
            fill
            className={`object-cover transition-opacity duration-1000 ${
              videoLoaded ? "opacity-0" : "opacity-100"
            }`}
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <Container className="relative z-10 px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto text-center"
          >
            <h1 className="mt-22 font-serif font-medium text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-[#C9A962] leading-tight">
              Luxury Kitchens. Signature Millwork.
            </h1>
            <p className="mt-3 text-base sm:text-lg md:text-xl text-[#c9c9c9] font-medium">
              Beautifully crafted spaces designed with intention, thoughtful detail, and enduring quality, bringing a heightened sense of elegance and comfort to your home.
            </p>
            <div className="mt-10 sm:mt-14 md:mt-18">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 sm:gap-4 px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-5 rounded-full border border-white text-white backdrop-blur-md bg-white/10 hover:bg-white/20 hover:border-[#C9A962] hover:text-[#C9A962] transition-all uppercase tracking-wider text-xs sm:text-sm md:text-lg"
              >
                Book a Consultation
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Our Process Section */}
      <section className="bg-black py-12 md:py-16">
        <Container className="px-4 sm:px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-16"
          >
            {/* Pill Title */}
            <div className="inline-block mb-4 md:mb-6">
              <AnimatedPill>Our Process</AnimatedPill>
            </div>
            <h2 className="font-serif font-medium text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-[#C9A962]">
              A Seamless Journey from Vision to Reality
            </h2>
          </motion.div>

          {/* Interactive Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Card with gradient border - gold on left fading to grey on right */}
            <div className="relative p-[1px] rounded-[20px] md:rounded-[30px] lg:rounded-[40px] bg-gradient-to-r from-[#C9A962] via-[#C9A962]/50 to-[#333333]">
              <div className="bg-[#0a0a0a] rounded-[20px] md:rounded-[30px] lg:rounded-[40px] overflow-hidden">
                <div className="flex flex-col md:grid md:grid-cols-2 min-h-[500px] md:min-h-[500px]">
                  {/* Interactive Circle - Shows first on mobile, second on desktop */}
                  <div
                    className="order-1 md:order-2 relative flex items-center justify-center p-6 sm:p-8 md:p-12 md:mr-6 min-h-[280px] sm:min-h-[380px] md:min-h-0"
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleClick}
                  >
                    {/* Step Labels positioned around the circle */}
                    <div className="absolute inset-0 flex items-center justify-center font-medium">
                      {/* Top Label - Discovery */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedStep(0);
                          setBallAngle(getStepAngle(0));
                        }}
                        className={`absolute top-4 sm:top-6 md:top-8 left-1/2 -translate-x-1/2 text-[9px] sm:text-xs md:text-sm uppercase tracking-widest transition-colors duration-300 text-center flex items-center justify-center cursor-pointer max-w-[80px] sm:max-w-[120px] md:max-w-[140px] ${
                          displayedStep === 0 ? "text-[#C9A962]" : "text-[#574927]"
                        }`}
                      >
                        Discovery and Consultation
                      </button>

                      {/* Right Label - Design */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedStep(1);
                          setBallAngle(getStepAngle(1));
                        }}
                        className={`absolute right-6 sm:right-3 md:right-4 top-1/2 -translate-y-1/2 text-[9px] sm:text-xs md:text-sm uppercase tracking-widest transition-colors duration-300 cursor-pointer text-center flex items-center justify-center max-w-[55px] sm:max-w-[85px] md:max-w-[100px] ${
                          displayedStep === 1 ? "text-[#C9A962]" : "text-[#574927]"
                        }`}
                      >
                        Design Development
                      </button>

                      {/* Bottom Label - Materials */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedStep(2);
                          setBallAngle(getStepAngle(2));
                        }}
                        className={`absolute bottom-2 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 text-[9px] sm:text-xs md:text-sm uppercase tracking-widest transition-colors duration-300 cursor-pointer text-center flex items-center justify-center max-w-[100px] sm:max-w-[150px] md:max-w-[190px] ${
                          displayedStep === 2 ? "text-[#C9A962]" : "text-[#574927]"
                        }`}
                      >
                        Material and Finishes Selection
                      </button>

                      {/* Left Label - Installation */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedStep(3);
                          setBallAngle(getStepAngle(3));
                        }}
                        className={`absolute left-6 sm:left-3 md:-left-8 top-1/2 -translate-y-1/2 text-[9px] sm:text-xs md:text-sm uppercase tracking-widest transition-colors duration-300 cursor-pointer text-center flex items-center justify-center max-w-[55px] sm:max-w-[100px] md:max-w-[160px] ${
                          displayedStep === 3 ? "text-[#C9A962]" : "text-[#574927]"
                        }`}
                      >
                        Procurement and Installation
                      </button>
                    </div>

                    {/* Interactive Circle Container */}
                    <div
                      ref={circleRef}
                      className="relative w-[140px] h-[140px] sm:w-[220px] sm:h-[220px] md:w-[320px] md:h-[320px]"
                    >
                      {/* Circle Border with smooth gradient following the ball - sun rising effect */}
                      <div
                        className="absolute inset-0 rounded-full transition-all duration-100"
                        style={{
                          background: `conic-gradient(
                            from ${ballAngle + 90}deg,
                            #C9A962 0deg,
                            #C9A962 30deg,
                            #8B7A3D 60deg,
                            #282316 120deg,
                            #0b0b0b 180deg,
                            #282316 240deg,
                            #8B7A3D 300deg,
                            #C9A962 330deg,
                            #C9A962 360deg
                          )`,
                          padding: "2px",
                        }}
                      >
                        <div className="w-full h-full rounded-full bg-[#0a0a0a]" />
                      </div>

                      {/* Center Logo */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <Image
                            src="/images/logo.png"
                            alt="ThinkLuxe"
                            width={180}
                            height={180}
                            className="w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] md:w-[180px] md:h-[180px] object-contain opacity-80"
                          />
                        </div>
                      </div>

                      {/* Following Ball */}
                      <motion.div
                        className="absolute w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                        style={{
                          left: "50%",
                          top: "50%",
                          marginLeft: "-6px",
                          marginTop: "-6px",
                        }}
                        animate={{
                          x: ballX * circleScale,
                          y: ballY * circleScale,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    </div>
                  </div>

                  {/* Left Content - Step Details - Shows second on mobile, first on desktop */}
                  <div className="order-2 md:order-1 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={displayedStep}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="min-h-[180px] sm:min-h-[200px] md:min-h-[220px]"
                      >
                        <h3 className="text-[#C9A962] text-lg sm:text-xl md:text-2xl lg:text-3xl uppercase tracking-wider font-medium mb-4 md:mb-6 max-w-lg min-h-[56px] sm:min-h-[60px] md:min-h-[72px]">
                          {processSteps[displayedStep].title}
                        </h3>
                        <p className="text-[#b5b5b5] text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-sm min-h-[170px] sm:min-h-[180px] md:min-h-[190px]">
                          {processSteps[displayedStep].description}
                        </p>
                      </motion.div>
                    </AnimatePresence>

                    {/* Step Counter with Mobile Togglers */}
                    <div className="mt-auto flex items-center justify-center md:justify-start gap-12 px-4 md:px-0">
                      {/* Left Arrow - Mobile Only */}
                      <button
                        onClick={goToPrevStep}
                        className="md:hidden flex items-center justify-center text-[#C9A962] hover:text-[#C9A962]/70 transition-colors"
                        aria-label="Previous step"
                      >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                      </button>

                      <span className="text-[#C9A962] font-medium uppercase tracking-[0.2em] md:tracking-[0.3em] text-sm md:text-base">
                        Step {displayedStep + 1}
                      </span>

                      {/* Right Arrow - Mobile Only */}
                      <button
                        onClick={goToNextStep}
                        className="md:hidden flex items-center justify-center text-[#C9A962] hover:text-[#C9A962]/70 transition-colors"
                        aria-label="Next step"
                      >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Services Grid Section */}
      <section className="bg-black py-12 md:py-16">
        <Container className="px-4 sm:px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-8"
          >
            {/* Pill Title */}
            <div className="inline-block mb-4 md:mb-6">
              <AnimatedPill>Custom Kitchen & Millwork</AnimatedPill>
            </div>
            <h2 className="font-serif font-medium text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-[#C9A962]">
              Where Functional Spaces Become Luxury Statements
            </h2>
          </motion.div>

          {/* Main 3x2 Grid - first 6 cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3"
          >
            {serviceCards.slice(0, 6).map((card, index) => (
              <div
                key={index}
                className={`group relative aspect-[4/3] md:aspect-[4/3] overflow-hidden ${getCardRadius(index)}`}
              >
                {/* Background Image */}
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Glassy Overlay - always expanded on mobile, hover on desktop */}
                <div className="absolute bottom-0 left-0 right-0 h-full md:h-[80px] md:group-hover:h-[70%] transition-all duration-500 ease-out bg-gradient-to-t from-black/80 via-black/50 to-transparent md:bg-black/30 md:backdrop-blur-md p-4 sm:p-5 flex flex-col justify-end md:justify-center md:group-hover:justify-start md:group-hover:pt-8 text-left md:text-center md:group-hover:text-left">
                  {/* Title - always visible */}
                  <h3 className="!font-sans text-white font-medium text-lg sm:text-xl md:text-xl leading-tight transition-all duration-300 whitespace-pre-line md:min-h-[56px] md:flex md:items-center md:justify-center md:group-hover:items-start md:group-hover:justify-start">
                    {card.title}
                  </h3>

                  {/* Description & Link - always visible on mobile, hover on desktop */}
                  <div className="flex flex-col md:hidden md:group-hover:flex md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <p className="text-[#c9c9c9] text-sm md:text-base leading-relaxed mb-3 md:mb-4 line-clamp-3 md:line-clamp-none">
                      {card.description}
                    </p>
                    <button
                      onClick={() => openPdfModal(card.pdf, card.title)}
                      className="text-sm underline underline-offset-4 hover:text-[#C9A962] text-white transition-colors text-left"
                    >
                      View catalog
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Bottom Row - 2 cards at 50% each */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3"
          >
            {serviceCards.slice(6).map((card, index) => (
              <div
                key={index}
                className={`relative aspect-[4/3] md:aspect-[4/3] ${getBottomCardRadius(index)}`}
              >
                {/* Wrapper to handle overflow clipping properly */}
                <div className={`group absolute inset-0 overflow-hidden ${getBottomCardRadius(index)}`}>
                  {/* Background Image */}
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Glassy Overlay - always expanded on mobile, hover on desktop */}
                  <div className="absolute bottom-0 left-0 right-0 h-full md:h-[80px] md:group-hover:h-[45%] transition-all duration-500 ease-out bg-gradient-to-t from-black/80 via-black/50 to-transparent md:bg-black/30 md:backdrop-blur-md p-4 sm:p-5 flex flex-col justify-end md:justify-center md:group-hover:justify-start md:group-hover:pt-6 text-left md:text-center md:group-hover:text-left">
                    {/* Title - always visible */}
                    <h3 className="!font-sans text-white font-medium text-lg sm:text-xl md:text-xl leading-tight transition-all duration-300 whitespace-pre-line md:min-h-[56px] md:flex md:items-center md:justify-center md:group-hover:items-start md:group-hover:justify-start">
                      {card.title}
                    </h3>

                    {/* Description & Link - always visible on mobile, hover on desktop */}
                    <div className="flex flex-col md:hidden md:group-hover:flex md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <p className="text-[#c9c9c9] text-sm md:text-base leading-relaxed mb-3 md:mb-4 line-clamp-3 md:line-clamp-2">
                        {card.description}
                      </p>
                      <button
                        onClick={() => openPdfModal(card.pdf, card.title)}
                        className="text-sm underline underline-offset-4 hover:text-[#C9A962] text-white transition-colors text-left"
                      >
                        View catalog
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Gallery Section - Horizontal filmstrip */}
      <Section className="bg-black overflow-hidden pt-8 md:pt-16">
        <Container className="px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            <div className="mb-4">
              <AnimatedPill>Our Gallery</AnimatedPill>
            </div>
            <h2 className="font-serif font-medium text-2xl sm:text-2xl md:text-3xl text-[#C9A962]">
              Craftsmanship in Every Detail
            </h2>
          </motion.div>
        </Container>

        {/* Infinite scrolling gallery strips - full width, pauses when not visible */}
        <div
          ref={gallerySectionRef}
          className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden space-y-4 sm:space-y-6"
        >
          {/* First row - scrolling left */}
          <motion.div
            className="flex gap-4 sm:gap-6"
            animate={isGalleryVisible ? { x: [0, -2020] } : {}}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 70,
                ease: "linear",
              },
            }}
          >
            {galleryRow1.map((src, i) => (
              <div
                key={i}
                className="relative w-[280px] sm:w-[320px] md:w-[380px] aspect-[4/3] rounded-lg overflow-hidden flex-shrink-0 cursor-pointer"
                onClick={() => setSelectedImage(src)}
              >
                <Image
                  src={src}
                  alt={`Kitchen gallery ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
            {galleryRow1.map((src, i) => (
              <div
                key={`dup-${i}`}
                className="relative w-[280px] sm:w-[320px] md:w-[380px] aspect-[4/3] rounded-lg overflow-hidden flex-shrink-0 cursor-pointer"
                onClick={() => setSelectedImage(src)}
              >
                <Image
                  src={src}
                  alt={`Kitchen gallery ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>

          {/* Second row - scrolling right */}
          <motion.div
            className="flex gap-4 sm:gap-6"
            initial={{ x: -2020 }}
            animate={isGalleryVisible ? { x: [-2020, 0] } : {}}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 70,
                ease: "linear",
              },
            }}
          >
            {galleryRow2.map((src, i) => (
              <div
                key={i}
                className="relative w-[280px] sm:w-[320px] md:w-[380px] aspect-[4/3] rounded-lg overflow-hidden flex-shrink-0 cursor-pointer"
                onClick={() => setSelectedImage(src)}
              >
                <Image
                  src={src}
                  alt={`Kitchen gallery ${i + 6}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
            {galleryRow2.map((src, i) => (
              <div
                key={`dup-${i}`}
                className="relative w-[280px] sm:w-[320px] md:w-[380px] aspect-[4/3] rounded-lg overflow-hidden flex-shrink-0 cursor-pointer"
                onClick={() => setSelectedImage(src)}
              >
                <Image
                  src={src}
                  alt={`Kitchen gallery ${i + 6}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* View More Button */}
        <Container className="px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8"
          >
            <AnimatedButton href="/gallery" fullRounded>
              View More
            </AnimatedButton>
          </motion.div>
        </Container>
      </Section>

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

      {/* PDF Modal */}
      <PDFModal
        isOpen={pdfModal.isOpen}
        onClose={closePdfModal}
        pdfUrl={pdfModal.pdf}
        title={pdfModal.title}
      />
    </main>
  );
}

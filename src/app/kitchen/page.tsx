"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Section } from "@/components/ui";
import PDFModal from "@/components/ui/PDFModal";

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
    title: "Media Unit, Dinning, Entrance & Office",
    description: "Elegant solutions for every room in your home, designed with precision and style.",
    image: "/images/kitchen-3.jpg",
    pdf: "/pdfs/kitchen-3.pdf",
  },
  {
    title: "Bathroom Vanities & Laundry",
    description: "Luxurious bathroom designs with premium finishes that elevate your daily routine.",
    image: "/images/kitchen-4.png",
    pdf: "/pdfs/kitchen-4.pdf",
  },
  {
    title: "Feature Walls & Interior Doors",
    description: "Add depth and character with custom wall and door designs, crafted with textures and finishes.",
    image: "/images/kitchen-5.png",
    pdf: "/pdfs/kitchen-5.pdf",
  },
  {
    title: "Whole House Customization",
    description: "Complete home transformation with cohesive design language throughout every space.",
    image: "/images/kitchen-6.png",
    pdf: "/pdfs/kitchen-6.pdf",
  },
];

// Helper function for card border radius
const getCardRadius = (index: number) => {
  switch (index) {
    case 0: return "rounded-tl-[40px]";
    case 2: return "rounded-tr-[40px]";
    case 3: return "rounded-bl-[40px]";
    case 5: return "rounded-br-[40px]";
    default: return "";
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
  const [hoveredStep, setHoveredStep] = useState(0);
  const [selectedStep, setSelectedStep] = useState(0); // Persisted/clicked step
  const [ballAngle, setBallAngle] = useState(-90); // Start at top (-90 degrees)
  const [isHovering, setIsHovering] = useState(false);
  const circleRef = useRef<HTMLDivElement>(null);

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

  // Calculate ball position on the circle orbit
  const circleRadius = 140; // Radius for ball orbit
  const ballX = Math.cos((ballAngle * Math.PI) / 180) * circleRadius;
  const ballY = Math.sin((ballAngle * Math.PI) / 180) * circleRadius;

  return (
    <main className="bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with video and image fallback */}
        <div className="absolute inset-0">
          {/* Video background */}
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

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-serif text-3xl md:text-5xl lg:text-5xl text-[#C9A962] leading-tight">
              Luxury Kitchens. Signature Millwork.
            </h1>
            <p className="mt-6 text-lg md:text-xl lg:text-2xl text-gray-300">
              Beautifully crafted spaces designed with intention, thoughtful detail, and enduring quality, bringing a heightened sense of elegance and comfort to your home.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 px-12 py-5 rounded-full border border-[#C9A962]/60 text-white backdrop-blur-md bg-white/10 hover:bg-white/20 hover:border-[#C9A962] transition-all uppercase tracking-wider text-lg md:text-xl shadow-[0_0_15px_rgba(201,169,98,0.3)]"
              >
                Book a Consultation
                <svg
                  className="w-4 h-4"
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
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Our Process Section */}
      <section className="bg-black py-24 md:py-32">
        <Container>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {/* Pill Title */}
            <div className="inline-block mb-6">
              <span className="relative px-6 py-2 rounded-full text-white text-xs tracking-wider">
                <span className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-[#C9A962] to-[#715A23]">
                  <span className="block w-full h-full rounded-full bg-[#303030]" />
                </span>
                <span className="relative">Our Process</span>
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#C9A962] italic">
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
            <div className="relative p-[1px] rounded-[40px] bg-gradient-to-r from-[#C9A962] via-[#C9A962]/50 to-[#333333]">
              <div className="bg-[#0a0a0a] rounded-[40px] overflow-hidden">
                <div className="grid md:grid-cols-2 min-h-[500px]">
                  {/* Left Content - Step Details */}
                  <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={displayedStep}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-[#C9A962] text-xl md:text-2xl uppercase tracking-wider font-medium mb-6">
                          {processSteps[displayedStep].title}
                        </h3>
                        <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-12">
                          {processSteps[displayedStep].description}
                        </p>
                      </motion.div>
                    </AnimatePresence>

                    {/* Step Counter */}
                    <div className="mt-auto">
                      <span className="text-gray-600 text-sm uppercase tracking-[0.3em]">
                        Step {displayedStep + 1}
                      </span>
                    </div>
                  </div>

                  {/* Right Side - Interactive Circle */}
                  <div
                    className="relative flex items-center justify-center p-8 md:p-12"
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleClick}
                  >
                    {/* Step Labels positioned around the circle */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Top Label - Discovery */}
                      <span
                        className={`absolute top-8 left-1/2 -translate-x-1/2 text-xs md:text-sm uppercase tracking-wider transition-colors duration-300 text-center max-w-[140px] ${
                          displayedStep === 0 ? "text-[#C9A962]" : "text-gray-600"
                        }`}
                      >
                        Discovery and Consultation
                      </span>

                      {/* Right Label - Design */}
                      <span
                        className={`absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-xs md:text-sm uppercase tracking-wider transition-colors duration-300 text-center max-w-[100px] ${
                          displayedStep === 1 ? "text-[#C9A962]" : "text-gray-600"
                        }`}
                      >
                        Design Development
                      </span>

                      {/* Bottom Label - Materials */}
                      <span
                        className={`absolute bottom-8 left-1/2 -translate-x-1/2 text-xs md:text-sm uppercase tracking-wider transition-colors duration-300 text-center max-w-[140px] ${
                          displayedStep === 2 ? "text-[#C9A962]" : "text-gray-600"
                        }`}
                      >
                        Material and Finishes Selection
                      </span>

                      {/* Left Label - Installation */}
                      <span
                        className={`absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-xs md:text-sm uppercase tracking-wider transition-colors duration-300 text-center max-w-[100px] ${
                          displayedStep === 3 ? "text-[#C9A962]" : "text-gray-600"
                        }`}
                      >
                        Procurement and Installation
                      </span>
                    </div>

                    {/* Interactive Circle Container */}
                    <div
                      ref={circleRef}
                      className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px]"
                    >
                      {/* Circle Border with smooth gradient following the ball - sun rising effect */}
                      <div
                        className="absolute inset-0 rounded-full transition-all duration-100"
                        style={{
                          background: `conic-gradient(
                            from ${ballAngle + 80}deg,
                            #C9A962 0deg,
                            #C9A962 30deg,
                            #8B7A3D 60deg,
                            #4a4a4a 120deg,
                            #333333 180deg,
                            #4a4a4a 240deg,
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
                            width={120}
                            height={120}
                            className="object-contain opacity-80"
                          />
                        </div>
                      </div>

                      {/* Following Ball */}
                      <motion.div
                        className="absolute w-4 h-4 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                        style={{
                          left: "50%",
                          top: "50%",
                          marginLeft: "-8px",
                          marginTop: "-8px",
                        }}
                        animate={{
                          x: ballX,
                          y: ballY,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Services Grid Section */}
      <section className="bg-black py-24 md:py-32">
        <Container>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {/* Pill Title */}
            <div className="inline-block mb-6">
              <span className="relative px-6 py-2 rounded-full text-white text-xs tracking-wider">
                <span className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-[#C9A962] to-[#715A23]">
                  <span className="block w-full h-full rounded-full bg-[#303030]" />
                </span>
                <span className="relative">Custom Kitchen & Millwork</span>
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#C9A962] italic">
              Where Functional Spaces Become Luxury Statements
            </h2>
          </motion.div>

          {/* 3x2 Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-3"
          >
            {serviceCards.map((card, index) => (
              <div
                key={index}
                className={`group relative aspect-square overflow-hidden ${getCardRadius(index)}`}
              >
                {/* Background Image */}
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Glassy Overlay - solid frosted bar, expands on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[70px] group-hover:h-[55%] transition-all duration-500 ease-out bg-black/60 backdrop-blur-md p-5 flex flex-col justify-center group-hover:justify-start group-hover:pt-8 text-center group-hover:text-left">
                  {/* Title - always visible */}
                  <h3 className="font-serif text-white group-hover:text-[#C9A962] text-xl md:text-2xl leading-tight transition-all duration-300">
                    {card.title}
                  </h3>

                  {/* Description & Link - visible on hover */}
                  <div className="hidden group-hover:flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mt-4">
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {card.description}
                    </p>
                    <button
                      onClick={() => openPdfModal(card.pdf, card.title)}
                      className="text-[#C9A962] text-sm underline underline-offset-4 hover:text-white transition-colors text-left"
                    >
                      View catalog
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </Container>
      </section>

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

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Section, AnimatedButton } from "@/components/ui";

// Gallery images
const galleryRow1 = [
  "/images/about-us-gallery-1.jpg",
  "/images/about-us-gallery-2.jpg",
  "/images/about-us-gallery-3.jpg",
  "/images/about-us-gallery-4.jpg",
  "/images/about-us-gallery-5.jpg",
];

const galleryRow2 = [
  "/images/about-us-gallery-6.png",
  "/images/about-us-gallery-7.png",
  "/images/about-us-gallery-8.png",
  "/images/about-us-gallery-9.png",
  "/images/about-us-gallery-10.png",
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

const stats = [
  { value: "45M+", label: "Family's Trusted Choice" },
  { value: "30+", label: "Years of Experience" },
  { value: "100K+", label: "Projects Completed Globally" },
];

const testimonials = [
  {
    name: "Samantha T.",
    project: "Kitchen Transformation",
    quote:
      "ThinkLuxe delivered exceptional service throughout the project. Their team transformed my space with precise craftsmanship, seamless coordination, and premium finishes. A highly professional experience with impressive results.",
    featured: true,
  },
  {
    name: "Emily R.",
    project: "Bedroom Transformation",
    quote:
      "ThinkLuxe transformed my bedroom with excellent craftsmanship and organized project management. The team delivered premium results and a smooth, professional experience throughout.",
  },
  {
    name: "David L.",
    project: "Full House Transformation",
    quote:
      "Our home renovation was handled flawlessly. ThinkLuxe provided expert guidance, quality finishes, and reliable communication, creating a beautifully elevated space we truly love.",
  },
  {
    name: "John M.",
    project: "Millwork",
    quote:
      "ThinkLuxe created stunning custom millwork with precise detailing and exceptional professionalism. Their team ensured a seamless process and truly impressive final results.",
  },
  {
    name: "Sarah K.",
    project: "Bathroom Renovation",
    quote:
      "The attention to detail was remarkable. ThinkLuxe transformed our outdated bathroom into a spa-like retreat. Professional, punctual, and the results exceeded our expectations.",
  },
  {
    name: "Michael P.",
    project: "Living Room Design",
    quote:
      "Working with ThinkLuxe was a pleasure from start to finish. They listened to our vision and delivered beyond what we imagined. Truly exceptional craftsmanship.",
  },
];

const values = [
  {
    number: "01",
    title: "Professionalism",
    description:
      "At Think Luxe, professionalism is woven into every interaction. Our team brings refined expertise, meticulous coordination, and an unwavering commitment to delivering a seamless, elevated experience from concept to completion.",
  },
  {
    number: "02",
    title: "Quality",
    description:
      "We believe luxury begins with exceptional quality. Every material, finish, and detail is thoughtfully curated to meet the highest standards ensuring enduring beauty, precision craftsmanship, and a level of excellence worthy of your home.",
  },
  {
    number: "03",
    title: "Progress",
    description:
      "Innovation drives our craft. At Think Luxe, we continually refine our processes, explore new materials, and elevate our capabilities ensuring each project surpasses the last in sophistication, performance, and design integrity.",
  },
];

// Star rating component
function StarRating({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-1 ${className}`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-[#C9A962]"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// Avatar component with initials
function Avatar({ name, size = "md" }: { name: string; size?: "sm" | "md" }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");
  const sizeClasses = size === "sm" ? "w-10 h-10 text-xs" : "w-12 h-12 text-sm";
  return (
    <div
      className={`${sizeClasses} rounded-full bg-[#C9A962]/10 border border-[#C9A962]/40 flex items-center justify-center`}
    >
      <span className="text-[#C9A962] font-medium">{initials}</span>
    </div>
  );
}

export default function AboutPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(5); // Start from middle set
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const otherTestimonials = testimonials.slice(1);
  // Duplicate testimonials for infinite scroll effect
  const infiniteTestimonials = [...otherTestimonials, ...otherTestimonials, ...otherTestimonials];
  const handleTestimonialPrev = () => {
    setTestimonialIndex((prev) => prev - 1);
  };
  const handleTestimonialNext = () => {
    setTestimonialIndex((prev) => prev + 1);
  };

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

  return (
    <main className="bg-black">
      {/* Hero Section - full height with transparent header */}
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
            <source src="/videos/about-us-hero.mp4" type="video/mp4" />
          </video>

          {/* Image fallback - shown until video loads */}
          <Image
            src="/images/about-us-hero-bg.jpg"
            alt="Luxury interior"
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
              We create bespoke spaces with refined materials, master
              craftsmanship, and elevated design.
            </h1>
            <p className="mt-6 text-lg md:text-xl lg:text-2xl text-gray-300">
              Every project is guided by intention, expertise, and impeccable
              taste.
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

      {/* Stats Section - Horizontal layout */}
      <Section className="bg-white py-12">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-8"
          >
            <p className="text-[#C9A962] font-serif text-2xl md:text-3xl italic">
              Luxury, Thoughtfully Crafted
            </p>
            <div className="flex flex-wrap gap-8 md:gap-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-4xl md:text-5xl font-serif text-black">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-gray-600 text-xs uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Our Philosophy Section - Black background with 2x2 grid */}
      <section className="bg-black py-16 md:py-24">
        <Container>
          {/* Centered tag with gold border */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-12"
          >
            <span className="relative px-6 py-2 rounded-full text-[#C9A962] text-sm uppercase tracking-wider shadow-[0_0_15px_rgba(201,169,98,0.3)] bg-black">
              <span className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-br from-[#C9A962] to-gray-600">
                <span className="block w-full h-full rounded-full bg-black" />
              </span>
              <span className="relative">Our Philosophy</span>
            </span>
          </motion.div>

          {/* 2x2 Grid with golden border */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[3rem] overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Top Left - Image (no borders) */}
              <div className="aspect-square overflow-hidden relative rounded-tl-[3rem]">
                <Image
                  src="/images/phil-2.png"
                  alt="Luxury interior"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Top Right - Text (borders on top, right, left) */}
              <div className="aspect-square p-8 md:p-12 flex items-center border-t border-r border-l border-[#C9A962] rounded-tr-[3rem]">
                <p className="text-gray-300 leading-relaxed text-xl">
                  At{" "}
                  <span className="text-[#C9A962] font-semibold">Think Luxe</span>, our
                  mission is to elevate living through exceptional design and
                  flawless craftsmanship. We transform spaces into refined
                  expressions of style, curating bespoke kitchens, millwork,
                  windows, and doors that embody elegance, innovation, and
                  timeless beauty. With a dedication to impeccable detail and a
                  seamless client experience, we bring luxury to life — one
                  perfectly crafted home at a time.
                </p>
              </div>

              {/* Bottom Left - Text (borders on bottom, left, top) */}
              <div className="aspect-square p-8 md:p-12 flex flex-col justify-center border-b border-l border-t border-[#C9A962] rounded-bl-[3rem]">
                <p className="text-gray-300 leading-relaxed text-xl">
                  Each project is custom tailored to the client&apos;s requirements
                  and budgets, ensuring a seamless experience for our clients.
                  Building your dream home is a journey of excellence, where every
                  detail is crafted with exceptional service and unbeatable
                  prices. With our in-house experienced designer, transform your
                  dreams into cherished realities.
                </p>
                <div className="mt-6">
                  <AnimatedButton href="/gallery">
                    View Gallery
                  </AnimatedButton>
                </div>
              </div>

              {/* Bottom Right - Image (no outer borders, only dividers) */}
              <div className="aspect-square overflow-hidden relative rounded-br-[3rem]">
                <Image
                  src="/images/phil-1.jpg"
                  alt="Modern kitchen"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Gallery Section - Horizontal filmstrip */}
      <Section className="bg-black overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="relative inline-block px-6 py-2 rounded-full text-[#C9A962] text-sm uppercase tracking-wider shadow-[0_0_15px_rgba(201,169,98,0.3)] bg-black mb-4">
              <span className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-br from-[#C9A962] to-gray-600">
                <span className="block w-full h-full rounded-full bg-black" />
              </span>
              <span className="relative">Our Gallery</span>
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#C9A962] italic">
              Where our vision meets exceptional results.
            </h2>
          </motion.div>
        </Container>

        {/* Infinite scrolling gallery strips - full width */}
        <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden space-y-6">
          {/* First row - scrolling left */}
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -2020],
            }}
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
                className="relative w-[320px] md:w-[380px] aspect-[4/3] rounded-lg overflow-hidden flex-shrink-0 cursor-pointer"
                onClick={() => handleImageClick(src)}
              >
                <Image
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
            {galleryRow1.map((src, i) => (
              <div
                key={`dup-${i}`}
                className="relative w-[320px] md:w-[380px] aspect-[4/3] rounded-lg overflow-hidden flex-shrink-0 cursor-pointer"
                onClick={() => handleImageClick(src)}
              >
                <Image
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </motion.div>

          {/* Second row - scrolling right */}
          <motion.div
            className="flex gap-6"
            initial={{ x: -2020 }}
            animate={{
              x: [-2020, 0],
            }}
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
                className="relative w-[320px] md:w-[380px] aspect-[4/3] rounded-lg overflow-hidden flex-shrink-0 cursor-pointer"
                onClick={() => handleImageClick(src)}
              >
                <Image
                  src={src}
                  alt={`Gallery image ${i + 6}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
            {galleryRow2.map((src, i) => (
              <div
                key={`dup-${i}`}
                className="relative w-[320px] md:w-[380px] aspect-[4/3] rounded-lg overflow-hidden flex-shrink-0 cursor-pointer"
                onClick={() => handleImageClick(src)}
              >
                <Image
                  src={src}
                  alt={`Gallery image ${i + 6}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8"
          >
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-[#C9A962] text-[#C9A962] hover:bg-[#C9A962]/10 transition-colors uppercase tracking-wider text-sm font-medium"
            >
              View More
            </Link>
          </motion.div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section className="bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-[#C9A962]">
              Testimonials:{" "}
              <span className="text-gray-600">
                Hear from those we&apos;ve served
              </span>
            </h2>
          </motion.div>

          {/* Featured Testimonial - Text LEFT, Image RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid lg:grid-cols-2 gap-8 mb-12"
          >
            {/* Text card on LEFT */}
            <div className="bg-transparent rounded-lg p-8 flex flex-col justify-between">
              <div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  &ldquo;{testimonials[0].quote}&rdquo;
                </p>
                {/* Golden divider line */}
                <div className="w-full h-0.5 bg-[#C9A962] my-6" />
              </div>
              <div>
                <div className="flex items-center gap-4">
                  <Avatar name={testimonials[0].name} />
                  <div>
                    <p className="text-black font-medium">
                      {testimonials[0].name}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {testimonials[0].project}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image on RIGHT */}
            <div className="flex items-center justify-center">
              <div className="relative aspect-square w-[250px] md:w-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/images/testimonials.jpg"
                  alt="Kitchen transformation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Other Testimonials - Infinite Carousel */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${testimonialIndex * (100 / 3)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {infiniteTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.name}-${index}`}
                  className="bg-transparent rounded-lg p-6 flex-shrink-0 w-full md:w-1/3"
                >
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar name={testimonial.name} size="sm" />
                    <div>
                      <p className="text-black text-sm font-medium">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-500 text-xs">{testimonial.project}</p>
                    </div>
                  </div>
                  <StarRating />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons - Centered at bottom */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handleTestimonialPrev}
              className="p-3 bg-[#C9A962] text-white rounded-full hover:bg-[#B8983D] transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleTestimonialNext}
              className="p-3 bg-[#C9A962] text-white rounded-full hover:bg-[#B8983D] transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </Container>
      </Section>

      {/* Values Section - with card borders */}
      <Section className="bg-black">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="relative inline-block px-6 py-2 rounded-full text-[#C9A962] text-sm uppercase tracking-wider shadow-[0_0_15px_rgba(201,169,98,0.3)] bg-black mb-4">
              <span className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-br from-[#C9A962] to-gray-600">
                <span className="block w-full h-full rounded-full bg-black" />
              </span>
              <span className="relative">Values</span>
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#C9A962] mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Excellence is at the heart of everything we do, and it is
              supported by these core values.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-[1px] bg-gradient-to-b from-[#C9A962] to-black ${
                  index === 0 ? 'rounded-tl-3xl' :
                  index === 2 ? 'rounded-tr-3xl' : ''
                }`}
              >
                <div className={`p-8 bg-black h-full ${
                  index === 0 ? 'rounded-tl-3xl' :
                  index === 2 ? 'rounded-tr-3xl' : ''
                }`}>
                  {/* Number badge */}
                  <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center mb-8">
                    <span className="text-white font-serif text-lg">{value.number}</span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#C9A962] mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {value.description.split('Think Luxe').map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && <span className="text-[#C9A962]">Think Luxe</span>}
                      </span>
                    ))}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section - Connected to Values with rounded bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-b-3xl border border-[#C9A962] border-t-0 p-8 md:p-12 mt-12"
          >
            <div className="grid lg:grid-cols-[70%_30%] gap-8 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-[#C9A962] italic mb-4">
                  Begin Your Journey With Think Luxe
                </h2>
                <p className="text-gray-600 mb-8">
                  Share your email to take the first step toward a refined,
                  tailor-made living experience crafted with precision and
                  elegance.
                </p>
                <form className="flex max-w-xl">
                  <div className="relative w-full rounded-full p-[1px] bg-gradient-to-r from-[#C9A962] to-white">
                    <div className="flex items-center w-full rounded-full bg-white">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-6 py-3 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none rounded-l-full min-w-0"
                      />
                      <button
                        type="submit"
                        className="px-6 py-3 m-1 rounded-full bg-[#C9A962] text-white font-medium hover:bg-[#B8984F] transition-colors uppercase tracking-wider text-sm whitespace-nowrap"
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              {/* Bento Image Grid on RIGHT */}
              <div className="hidden lg:grid grid-cols-2 gap-2 h-full min-h-[280px]">
                {/* Left column - 40% top, 60% bottom */}
                <div className="grid grid-rows-[40%_60%] gap-2">
                  <div className="relative overflow-hidden rounded-tl-2xl">
                    <Image
                      src="/images/cta-1.png"
                      alt="Interior design"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-bl-2xl">
                    <Image
                      src="/images/cta-3.png"
                      alt="Modern kitchen"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                {/* Right column - 60% top, 40% bottom */}
                <div className="grid grid-rows-[60%_40%] gap-2">
                  <div className="relative overflow-hidden rounded-tr-2xl">
                    <Image
                      src="/images/cta-2.jpg"
                      alt="Luxury space"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-br-2xl">
                    <Image
                      src="/images/cta-4.png"
                      alt="Bathroom design"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
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
    </main>
  );
}

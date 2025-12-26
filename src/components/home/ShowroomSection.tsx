"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui";
import AnimatedButton from "@/components/ui/AnimatedButton";

const showroomImages = [
  "/images/showroom-1.jpg",
  "/images/showroom-2.jpg",
  "/images/showroom-3.jpg",
  "/images/showroom-4.jpg",
  "/images/showroom-5.jpg",
];

export default function ShowroomSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % showroomImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + showroomImages.length) % showroomImages.length);
  };

  return (
    <section className="bg-black py-16 md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-black rounded-[60px] overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            {/* Left Content Column - with golden border on top, left, bottom */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center border-t border-l border-b border-[#C9A962]/30 rounded-l-[60px]">
              <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#C9A962] mb-6">
                Visit Our Showroom
              </h3>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                Step into our exclusive showroom, a curated design environment where every
                finish, texture, and detail has been hand-selected to inspire elevated living.
                Experience artisanal millwork, architectural-grade materials, and bespoke
                interior concepts presented within a luxury design lounge.
              </p>

              {/* Address */}
              <div className="flex items-start gap-3 mb-4">
                <svg
                  className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <span className="text-gray-400 text-sm">
                  Unit 15 - 80 Clementine Dr, Brampton,<br />
                  ON, L6Y 0L8, Canada.
                </span>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3 mb-8">
                <svg
                  className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div className="text-gray-400 text-sm">
                  <p>Mon - Fri : 10am - 5pm (By Appointment Only)</p>
                  <p>Weekends : By Appointment Only</p>
                </div>
              </div>

              {/* Animated CTA Button */}
              <div>
                <AnimatedButton href="/contact">
                  Schedule a Visit
                </AnimatedButton>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="relative min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
              {/* Image Carousel */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  {/* Placeholder gradient - replace with actual images */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a2a] via-[#252525] to-[#1f1f1f]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-600 text-sm">Showroom Image {currentSlide + 1}</span>
                  </div>

                  {/* Uncomment when images are ready */}
                  {/* <Image
                    src={showroomImages[currentSlide]}
                    alt={`Showroom image ${currentSlide + 1}`}
                    fill
                    className="object-cover"
                  /> */}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:border-white hover:text-white transition-colors z-10"
                aria-label="Previous image"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:border-white hover:text-white transition-colors z-10"
                aria-label="Next image"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>

              {/* Carousel Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {showroomImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-white"
                        : "bg-white/40 hover:bg-white/60"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

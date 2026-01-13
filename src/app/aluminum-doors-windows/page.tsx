"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import AnimatedPill from "@/components/ui/AnimatedPill";

export default function AluminumDoorsWindowsPage() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

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

  return (
    <main className="bg-black">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
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
              <source src="/videos/aluminium-hero.mp4" type="video/mp4" />
            </video>
          )}

          {/* Image fallback - shown until video loads */}
          <Image
            src="/images/aluminum-hero-bg.jpg"
            alt="Aluminum Doors & Windows"
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
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="mt-20 font-serif font-medium text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-[#C9A962] leading-tight">
              Aluminum Doors & Windows
            </h1>
            <p className="mt-3 text-base sm:text-lg md:text-xl text-[#c9c9c9] font-medium">
              Elegant European Style Windows and Doors Crafted for Beauty,
              Function, and Quality
            </p>
            <div className="mt-10 sm:mt-14 md:mt-16">
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

      {/* Our Products Section */}
      <section className="bg-black py-16">
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
              <AnimatedPill>Our Products</AnimatedPill>
            </div>
            <h2 className="font-serif font-medium text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-[#C9A962] mb-4 md:mb-6">
              Aluminum Windows and Doors
            </h2>
            <p className="text-[#b5b5b5] font-medium text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
              Our aluminum windows and doors span every architectural style and configuration, offering refined customization and exceptional energy performance.
            </p>
          </motion.div>

          {/* Product Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          >
            {/* Aluminum Windows Card */}
            <Link href="/aluminum-doors-windows/windows" className="group">
              <div className="relative aspect-[4/3] rounded-[20px] md:rounded-l-[30px] md:rounded-r-none lg:rounded-l-[40px] overflow-hidden">
                <Image
                  src="/images/aluminium-windows-card.jpg"
                  alt="Aluminum Windows"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 group-active:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Card Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-center">
                  <h3 className="font-serif font-medium text-xl sm:text-2xl md:text-3xl text-[#C9A962] mb-3 md:mb-4">
                    Aluminum Windows
                  </h3>
                  <span className="inline-block text-white text-sm underline underline-offset-4 group-hover:text-[#C9A962] group-active:text-[#C9A962] transition-colors">
                    Explore more
                  </span>
                </div>
              </div>
            </Link>

            {/* Aluminum Doors Card */}
            <Link href="/aluminum-doors-windows/doors" className="group">
              <div className="relative aspect-[4/3] rounded-[20px] md:rounded-r-[30px] md:rounded-l-none lg:rounded-r-[40px] overflow-hidden">
                <Image
                  src="/images/aluminium-doors-card.jpg"
                  alt="Aluminum Doors"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 group-active:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Card Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-center">
                  <h3 className="font-serif font-medium text-xl sm:text-2xl md:text-3xl text-[#C9A962] mb-3 md:mb-4">
                    Aluminum Doors
                  </h3>
                  <span className="inline-block text-white text-sm underline underline-offset-4 group-hover:text-[#C9A962] group-active:text-[#C9A962] transition-colors">
                    Explore more
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        </Container>
      </section>

      {/* Divider */}
      <Container className="px-4 sm:px-6">
        <div className="h-[1px] bg-[#686868]" />
      </Container>

      {/* Certifications Section */}
      <section className="bg-black py-16">
        <Container className="px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block mb-4 md:mb-6">
              <AnimatedPill>Certifications</AnimatedPill>
            </div>
            <h2 className="font-serif font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#C9A962] leading-relaxed max-w-4xl mx-auto">
              Our certifications provide assurance to clients regarding the
              performance, safety, and environmental impact of the product.
            </h2>
          </motion.div>

          {/* Certification Details Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16"
          >
            {/* NFRC */}
            <div>
              <h3 className="font-medium text-[#C9A962] text-lg md:text-xl mb-4">
                NFRC (National Fenestration Rating Council)
              </h3>
              <p className="text-[#b5b5b5] font-medium text-sm md:text-base leading-relaxed">
                NFRC is North American certification that provides standardized
                ratings for the energy performance of windows, doors, and
                skylights, helping consumers make informed decisions about
                energy efficiency and performance.
              </p>
            </div>

            {/* ENERGY STAR */}
            <div>
              <h3 className="font-medium text-[#C9A962] text-lg md:text-xl mb-4">
                ENERGY STAR
              </h3>
              <p className="text-[#b5b5b5] font-medium text-sm md:text-base leading-relaxed">
                ENERGY STAR identifies and promotes energy-efficient products,
                including windows, which meet strict energy efficiency criteria
                set by the U.S. Environmental Protection Agency (EPA) and the
                U.S. Department of Energy (DOE).
              </p>
            </div>

            {/* CSA */}
            <div>
              <h3 className="font-medium text-[#C9A962] text-lg md:text-xl mb-4">
                CSA (Canadian Standards Association)
              </h3>
              <p className="text-[#b5b5b5] font-medium text-sm md:text-base leading-relaxed">
                CSA Certification validates windows' compliance with Canadian
                safety and performance standards set by the Canadian Standards
                Association. It guarantees structural integrity, thermal
                performance, and durability, instilling confidence in consumers
                regarding the windows' safety and reliability in Canadian
                settings.
              </p>
            </div>

            {/* ISO */}
            <div>
              <h3 className="font-medium text-[#C9A962] text-lg md:text-xl mb-4">
                ISO (International Organization for Standardization)
              </h3>
              <p className="text-[#b5b5b5] font-medium text-sm md:text-base leading-relaxed">
                ISO certification indicates adherence to internationally
                recognized standards for product quality, performance, and
                environmental management, ensuring consistency and reliability
                in windows production.
              </p>
            </div>
          </motion.div>

          {/* Certifications Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 md:mt-16"
          >
            <div className="relative w-full rounded-[20px] md:rounded-[30px] lg:rounded-[40px] overflow-hidden">
              <Image
                src="/images/certifications.png"
                alt="Our Certifications"
                width={1920}
                height={600}
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}

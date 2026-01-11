"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui";

export default function AluminumDoorsWindowsPage() {
  const [videoLoaded, setVideoLoaded] = useState(false);

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
            <source src="/videos/aluminium-hero.mp4" type="video/mp4" />
          </video>

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

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-serif text-3xl md:text-5xl lg:text-5xl text-[#C9A962] leading-tight">
              Aluminum Doors & Windows
            </h1>
            <p className="mt-6 text-lg md:text-xl lg:text-2xl text-gray-300">
              Elegant European Style Windows and Doors Crafted for Beauty, Function, and Quality
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

      {/* Our Products Section */}
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
                <span className="relative">Our Products</span>
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#C9A962] italic mb-6">
              Aluminum Windows and Doors
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Our Product offerings include all types and operating styles of windows and doors, transforming your spaces with endless customization options and best-in-class energy efficiency performance.
            </p>
          </motion.div>

          {/* Product Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Aluminum Windows Card */}
            <Link href="/aluminum-doors-windows/windows" className="group">
              <div className="relative aspect-[4/3] rounded-l-[40px] overflow-hidden">
                <Image
                  src="/images/aluminium-windows-card.jpg"
                  alt="Aluminum Windows"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Card Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                  <h3 className="font-serif text-2xl md:text-3xl text-[#C9A962] italic mb-4">
                    Aluminum Windows
                  </h3>
                  <span className="inline-block text-white text-sm underline underline-offset-4 group-hover:text-[#C9A962] transition-colors">
                    Explore more
                  </span>
                </div>
              </div>
            </Link>

            {/* Aluminum Doors Card */}
            <Link href="/aluminum-doors-windows/doors" className="group">
              <div className="relative aspect-[4/3] rounded-r-[40px] overflow-hidden">
                <Image
                  src="/images/aluminium-doors-card.jpg"
                  alt="Aluminum Doors"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Card Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                  <h3 className="font-serif text-2xl md:text-3xl text-[#C9A962] italic mb-4">
                    Aluminum Doors
                  </h3>
                  <span className="inline-block text-white text-sm underline underline-offset-4 group-hover:text-[#C9A962] transition-colors">
                    Explore more
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        </Container>
      </section>

      {/* Golden Divider */}
      <Container>
        <div className="h-[1px] bg-[#C9A962]" />
      </Container>

      {/* Certifications Section */}
      <section className="bg-black py-24 md:py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#C9A962] italic leading-relaxed max-w-4xl mx-auto">
              Our certifications provide assurance to clients regarding the performance, safety, and environmental impact of the product.
            </h2>
          </motion.div>

          {/* Certifications Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16"
          >
            <div className="relative w-full rounded-[40px] overflow-hidden">
              <Image
                src="/images/certifications.jpg"
                alt="Our Certifications"
                width={1920}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Certification Details Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
          >
            {/* NFRC */}
            <div>
              <h3 className="text-[#C9A962] text-lg md:text-xl mb-4">
                NFRC (National Fenestration Rating Council)
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                NFRC is North American certification that provides standardized ratings for the energy performance of windows, doors, and skylights, helping consumers make informed decisions about energy efficiency and performance.
              </p>
            </div>

            {/* ENERGY STAR */}
            <div>
              <h3 className="text-[#C9A962] text-lg md:text-xl mb-4">
                ENERGY STAR
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                ENERGY STAR identifies and promotes energy-efficient products, including windows, which meet strict energy efficiency criteria set by the U.S. Environmental Protection Agency (EPA) and the U.S. Department of Energy (DOE).
              </p>
            </div>

            {/* CSA */}
            <div>
              <h3 className="text-[#C9A962] text-lg md:text-xl mb-4">
                CSA (Canadian Standards Association)
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                CSA Certification validates windows' compliance with Canadian safety and performance standards set by the Canadian Standards Association. It guarantees structural integrity, thermal performance, and durability, instilling confidence in consumers regarding the windows' safety and reliability in Canadian settings.
              </p>
            </div>

            {/* ISO */}
            <div>
              <h3 className="text-[#C9A962] text-lg md:text-xl mb-4">
                ISO (International Organization for Standardization)
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                ISO certification indicates adherence to internationally recognized standards for product quality, performance, and environmental management, ensuring consistency and reliability in windows production.
              </p>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}

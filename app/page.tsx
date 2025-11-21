'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import PortfolioGrid from '@/components/PortfolioGrid';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <>
      {/* CINEMATIC HERO - With video background */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&q=90"
          >
            <source src="/videos/hero-background.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Multi-layer Gradient Overlay - darker to ensure text readability over video */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-brand-charcoal-900/50 to-black/70" />

        {/* Floating decorative element */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-brand-bronze-500/5 rounded-full blur-3xl float-slow" />

        {/* Content */}
        <motion.div
          className="relative h-full flex items-center container-luxury"
          style={{ opacity: heroOpacity }}
        >
          <div>
            {/* Animated line above subtitle */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-px bg-gradient-to-r from-brand-bronze-400 to-transparent mb-8 -mt-12 md:mt-8"
            />

            {/* Subtitle with reveal */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-subtitle text-brand-bronze-400 mb-8 reveal-line"
            >
              Toronto's Premier Custom Cabinetry
            </motion.p>

            {/* Main Headline - Letter by letter reveal */}
            <div className="mb-8 overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-display text-5xl md:text-6xl lg:text-7xl text-white max-w-4xl"
              >
                Complete Luxurious
                <br />
                <span className="text-brand-bronze-400 inline-block">
                  Customisation
                </span>
                <br />
                Solutions
              </motion.h1>
            </div>

              {/* Description with stagger */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-xl md:text-2xl text-brand-cream-200 font-light mb-12 max-w-3xl leading-relaxed"
              >
                Specializing in bespoke custom kitchens, sophisticated millwork, and elegant aluminum doors & windows
              </motion.p>

              {/* CTA with magnetic effect */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <Link
                  href="/portfolio"
                  className="btn-luxury btn-magnetic shine-effect group px-10 py-5 bg-brand-bronze-500 border-2 border-brand-bronze-400 text-white text-lg font-medium rounded-sm hover:bg-brand-bronze-600 hover:border-brand-bronze-500 transition-all duration-500 relative overflow-hidden"
                >
                  <span className="relative z-10">Explore Our Work</span>
                </Link>
                <Link
                  href="/contact"
                  className="btn-luxury border-draw group px-10 py-5 backdrop-blur-md bg-white/10 text-white text-lg font-medium rounded-sm border border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-500"
                >
                  <span className="relative z-10">Schedule Consultation</span>
                </Link>
              </motion.div>
          </div>
        </motion.div>

        {/* Animated scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
          className="absolute bottom-6 sm:bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <span className="text-white/50 text-xs uppercase tracking-widest mb-4">Scroll</span>
            <div className="w-px h-12 sm:h-16 bg-gradient-to-b from-white/50 to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* SERVICES - Asymmetric with reveal animations */}
      <ServiceSection />

      {/* PHILOSOPHY - Full Width with parallax */}
      <PhilosophySection />

      {/* PROCESS - Trust through transparency */}
      <ProcessSection />

      {/* FEATURED PORTFOLIO */}
      <FeaturedPortfolioSection />

      {/* SHOWROOM CTA */}
      <ShowroomSection />
    </>
  );
}

// Service Section with scroll-triggered animations
function ServiceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-luxury bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-cream-300/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container-luxury relative z-10">
        {/* Section Header with reveal */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-24"
        >
          <p className="text-subtitle mb-6">Our Expertise</p>
          <h2 className="text-5xl md:text-6xl font-serif font-light text-brand-charcoal-700 tracking-tight leading-tight">
            Transforming spaces through
            <br />
            <span className="text-brand-bronze-600 relative inline-block">
              exceptional craftsmanship
              <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-brand-bronze-400 via-brand-bronze-500 to-transparent" />
            </span>
          </h2>
        </motion.div>

        {/* Two Card Layout - Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1 - Custom Kitchens, Cabinetry & Millwork */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link href="/services/custom-kitchens" className="card-glow group block overflow-hidden rounded-2xl h-full">
              <div className="relative h-[450px] md:h-[600px] lg:h-[700px] overflow-hidden">
                <div className="absolute inset-0 image-reveal">
                  <Image
                    src="/images/services/custom-kitchen-hero.webp"
                    alt="Custom Kitchen & Millwork"
                    fill
                    className="object-cover hover-scale-luxury"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
                <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-10 lg:p-12">
                  <motion.p
                    className="text-subtitle text-brand-bronze-400 mb-2 md:mb-3 lg:mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    01
                  </motion.p>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-white mb-2 md:mb-3 lg:mb-6 tracking-tight leading-tight">
                    Custom Kitchen & Millwork
                  </h3>
                  <p className="text-white/90 text-sm md:text-base lg:text-lg xl:text-xl font-light mb-3 md:mb-5 lg:mb-8 leading-relaxed">
                    Bespoke design and craftsmanship for kitchens, wardrobes, vanities, built-ins, and architectural millwork that transforms every space into a masterpiece
                  </p>

                  {/* Feature list */}
                  <div className="space-y-1.5 md:space-y-2 lg:space-y-3 mb-3 md:mb-5 lg:mb-8">
                    <div className="flex items-center text-white/80 text-sm md:text-base">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-bronze-400 mr-3" />
                      <span className="font-light">Custom Kitchen Design</span>
                    </div>
                    <div className="flex items-center text-white/80 text-sm md:text-base">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-bronze-400 mr-3" />
                      <span className="font-light">Elegant Cabinetry Solutions</span>
                    </div>
                    <div className="flex items-center text-white/80 text-sm md:text-base">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-bronze-400 mr-3" />
                      <span className="font-light">Architectural Millwork</span>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <span className="inline-flex items-center text-brand-bronze-400 font-medium text-base md:text-lg mt-4 md:mt-6">
                      Explore Our Work
                      <svg className="w-5 h-5 md:w-6 md:h-6 ml-2 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Card 2 - Aluminum Doors & Windows */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link href="/services/aluminum-doors-windows" className="card-glow group block overflow-hidden rounded-2xl h-full">
              <div className="relative h-[450px] md:h-[600px] lg:h-[700px] overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    src="/images/services/aluminum-doors-windows-hero.jpg"
                    alt="Custom Aluminum Doors & Windows"
                    fill
                    className="object-cover hover-scale-luxury"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
                <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-10 lg:p-12">
                  <motion.p
                    className="text-subtitle text-brand-bronze-400 mb-2 md:mb-3 lg:mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    02
                  </motion.p>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-white mb-2 md:mb-3 lg:mb-6 tracking-tight leading-tight">
                    Custom Aluminum Doors & Windows
                  </h3>
                  <p className="text-white/90 text-sm md:text-base lg:text-lg xl:text-xl font-light mb-3 md:mb-5 lg:mb-8 leading-relaxed">
                    Sleek, modern systems that seamlessly blend aesthetics with superior performance and energy efficiency
                  </p>

                  {/* Feature list */}
                  <div className="space-y-1.5 md:space-y-2 lg:space-y-3 mb-3 md:mb-5 lg:mb-8">
                    <div className="flex items-center text-white/80 text-sm md:text-base">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-bronze-400 mr-3" />
                      <span className="font-light">Sliding Door Systems</span>
                    </div>
                    <div className="flex items-center text-white/80 text-sm md:text-base">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-bronze-400 mr-3" />
                      <span className="font-light">Contemporary Window Design</span>
                    </div>
                    <div className="flex items-center text-white/80 text-sm md:text-base">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-bronze-400 mr-3" />
                      <span className="font-light">Premium Finishes</span>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <span className="inline-flex items-center text-brand-bronze-400 font-medium text-base md:text-lg mt-4 md:mt-6">
                      Learn More
                      <svg className="w-5 h-5 md:w-6 md:h-6 ml-2 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Philosophy Section with split layout
function PhilosophySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="section-luxury bg-brand-charcoal-900 overflow-hidden">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-subtitle text-brand-bronze-400 mb-6">Our Philosophy</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white mb-8 leading-tight tracking-tight">
              Excellence through{" "}
              <span className="text-brand-bronze-400">unwavering dedication</span>
            </h2>
            <p className="text-lg md:text-xl text-brand-cream-200 font-light leading-relaxed">
              Every project reflects our commitment to exceptional craftsmanship, attention to detail, and the pursuit of timeless luxury. We don't just build spaces—we create experiences that elevate everyday living.
            </p>
          </motion.div>

          {/* Right - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {/* Large image top left */}
              <div className="col-span-2 relative h-[300px] md:h-[400px] overflow-hidden rounded-2xl">
                <Image
                  src="/images/philosophy/craftsmanship-1.webp"
                  alt="Luxury Craftsmanship"
                  fill
                  className="object-cover hover-scale-luxury"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Two smaller images bottom */}
              <div className="relative h-[200px] md:h-[250px] overflow-hidden rounded-2xl">
                <Image
                  src="/images/philosophy/kitchen.jpeg"
                  alt="Custom Kitchen"
                  fill
                  className="object-cover hover-scale-luxury"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <div className="relative h-[200px] md:h-[250px] overflow-hidden rounded-2xl">
                <Image
                  src="/images/philosophy/detail-work.webp"
                  alt="Detail Work"
                  fill
                  className="object-cover hover-scale-luxury"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-8 -right-8 w-32 h-32 border-2 border-brand-bronze-500/20 rounded-full -z-10" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 border-2 border-brand-bronze-500/20 rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Process Section - New addition for sophistication
function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const steps = [
    {
      number: "01",
      title: "Discovery & Consultation",
      tag: "Listen & Understand",
      description: "We begin with an in-depth consultation to understand your vision, lifestyle, and aesthetic preferences. Our experts evaluate your space, discuss functional requirements, and explore design possibilities that align with your unique needs.",
      highlights: ["Space assessment", "Vision alignment", "Budget discussion"]
    },
    {
      number: "02",
      title: "Design Development",
      tag: "Create & Collaborate",
      description: "Our designers create detailed plans and stunning 3D renderings that bring your vision to life. We collaborate closely with you, refining every detail until the design perfectly captures your dream space.",
      highlights: ["Custom 3D renderings", "Detailed floor plans", "Design refinement"]
    },
    {
      number: "03",
      title: "Material Selection",
      tag: "Curate & Refine",
      description: "Choose from our curated collection of premium materials, finishes, and fixtures. From exquisite cabinetry to elegant countertops, hardware, and lighting—every element is selected to complement your lifestyle and design vision.",
      highlights: ["Premium materials", "Finish selection", "Hardware & fixtures"]
    },
    {
      number: "04",
      title: "Fabrication & Installation",
      tag: "Craft & Perfect",
      description: "Our master craftsmen bring your design to life with precision manufacturing and meticulous installation. Using time-honored techniques and modern technology, we ensure every detail meets our exacting standards of excellence.",
      highlights: ["Expert craftsmanship", "Quality assurance", "Professional installation"]
    }
  ];

  return (
    <section ref={ref} className="section-luxury bg-brand-cream-50 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-bronze-400/10 rounded-full blur-3xl translate-x-1/2" />

      <div className="container-luxury relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-subtitle mb-6">Our Process</p>
          <h2 className="text-4xl md:text-6xl font-serif font-light text-brand-charcoal-700 mb-6 leading-tight">
            From vision to reality
          </h2>
          <p className="text-xl text-brand-charcoal-500 font-light">
            A transparent, collaborative journey ensuring exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="card-luxury p-8 md:p-10 h-full hover:shadow-2xl transition-shadow duration-500 border border-brand-cream-300 hover:border-brand-bronze-400/30 rounded-2xl overflow-hidden">
                {/* Number and Tag */}
                <div className="flex flex-col sm:flex-row items-start sm:items-start justify-between mb-6 gap-3 sm:gap-0">
                  <div className="text-6xl md:text-7xl font-light text-brand-bronze-500/40 font-serif leading-none">
                    {step.number}
                  </div>
                  <span className="text-xs uppercase tracking-widest text-brand-bronze-500 font-medium bg-brand-bronze-400/10 px-3 py-1.5 rounded-full whitespace-nowrap">
                    {step.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-serif font-light text-brand-charcoal-700 mb-4 leading-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-brand-charcoal-500 leading-relaxed mb-6 text-sm md:text-base">
                  {step.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2">
                  {step.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-brand-charcoal-600 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-bronze-500 mr-3 flex-shrink-0" />
                      <span className="font-light">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Decorative element on viewport entry */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-brand-bronze-500 to-brand-bronze-400 rounded-bl-2xl"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '100%' } : { width: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Featured Portfolio Section
function FeaturedPortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const portfolioItems = [
    {
      id: '1',
      title: 'Modern Minimalist Kitchen',
      category: 'Custom Kitchens',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1920&q=85',
      href: '/portfolio/modern-minimalist-kitchen',
      span: 'large' as const,
    },
    {
      id: '2',
      title: 'Walk-In Wardrobe',
      category: 'Custom Cabinetry',
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1200&q=85',
      href: '/portfolio/walk-in-wardrobe',
      span: 'medium' as const,
    },
    {
      id: '3',
      title: 'Contemporary Millwork',
      category: 'Custom Millwork',
      image: 'https://images.unsplash.com/photo-1600210492486-724d48b2b9f8?w=1200&q=85',
      href: '/portfolio/contemporary-millwork',
      span: 'small' as const,
    },
    {
      id: '4',
      title: 'Luxury Bathroom Vanity',
      category: 'Custom Cabinetry',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1200&q=85',
      href: '/portfolio/luxury-bathroom',
      span: 'small' as const,
    },
    {
      id: '5',
      title: 'Floor-to-Ceiling Windows',
      category: 'Aluminum Doors & Windows',
      image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1920&q=85',
      href: '/portfolio/floor-to-ceiling-windows',
      span: 'large' as const,
    },
    {
      id: '6',
      title: 'Custom Home Office',
      category: 'Custom Millwork',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=85',
      href: '/portfolio/home-office',
      span: 'medium' as const,
    },
  ];

  return (
    <section ref={ref} className="section-luxury bg-brand-cream-50">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-subtitle mb-6">Recent Work</p>
          <h2 className="text-4xl md:text-6xl font-serif font-light text-brand-charcoal-700 mb-6 leading-tight">
            Featured projects
          </h2>
          <p className="text-xl text-brand-charcoal-500 font-light leading-relaxed">
            A showcase of our finest work across custom kitchens, cabinetry, millwork, and aluminum installations
          </p>
        </motion.div>

        <PortfolioGrid items={portfolioItems} showCategories={true} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link
            href="/portfolio"
            className="btn-magnetic shine-effect inline-flex items-center gap-3 px-10 py-5 bg-brand-charcoal-700 text-white text-lg font-medium rounded-sm hover:bg-brand-charcoal-800 transition-all duration-500"
          >
            <span>View All Projects</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// Showroom Section - Luxury Mobile-First Design
function ShowroomSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative bg-brand-cream-50 overflow-hidden">
      {/* Decorative floating element - desktop only */}
      <div className="hidden lg:block absolute top-1/4 right-1/4 w-64 h-64 bg-brand-bronze-500/5 rounded-full blur-3xl -z-0" />

      <div className="relative z-10 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-0 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16 xl:gap-20 items-center">

            {/* Image - First on mobile, Second on desktop */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 relative"
            >
              {/* Mobile/Tablet: Full bleed with aspect ratio */}
              <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[600px] overflow-hidden lg:rounded-2xl lg:card-glow">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&q=85"
                  alt="Think LUXE Showroom"
                  fill
                  className="object-cover lg:hover-scale-luxury"
                />
              </div>
            </motion.div>

            {/* Content - Second on mobile (overlaps image), First on desktop */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              {/* Elevated Card Container */}
              <div className="mx-6 md:mx-8 lg:mx-0 -mt-12 lg:mt-0 bg-white lg:bg-transparent rounded-2xl lg:rounded-none shadow-2xl lg:shadow-none p-6 md:p-8 lg:p-0 border border-brand-cream-300 lg:border-0">

                {/* Bronze Accent Line */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: 64 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="h-0.5 bg-gradient-to-r from-brand-bronze-400 via-brand-bronze-500 to-transparent mb-16 lg:mb-4"
                />

                {/* Eyebrow */}
                <p className="text-xs uppercase tracking-widest text-brand-bronze-500 font-medium mb-3">
                  Experience in Person
                </p>

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-brand-charcoal-700 mb-4 leading-tight tracking-tight">
                  Visit Our Toronto Showroom
                </h2>

                {/* Description */}
                <p className="text-base md:text-lg font-light text-brand-charcoal-500 leading-relaxed mb-6 max-w-prose">
                  Explore our premium material selections, completed installations, and consult with our design experts to bring your vision to life.
                </p>

                {/* Feature List with Icons */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-brand-bronze-500/10 p-2 rounded-lg flex-shrink-0">
                      <svg className="w-5 h-5 text-brand-bronze-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm md:text-base font-light text-brand-charcoal-600">Greater Toronto Area, Ontario</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-brand-bronze-500/10 p-2 rounded-lg flex-shrink-0">
                      <svg className="w-5 h-5 text-brand-bronze-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm md:text-base font-light text-brand-charcoal-600">Mon-Sat: 10AM-6PM</p>
                      <p className="text-xs md:text-sm font-light text-brand-charcoal-500">Sunday: By Appointment</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="btn-magnetic shine-effect btn-luxury w-full sm:w-auto inline-block text-center px-8 py-4 md:px-10 md:py-5 bg-brand-bronze-500 text-white text-base md:text-lg font-medium rounded-sm hover:bg-brand-bronze-600 transition-all duration-500 shadow-lg hover:shadow-xl border-2 border-brand-bronze-400"
                >
                  Schedule a Visit
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

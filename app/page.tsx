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
            className="absolute inset-0 w-full h-full object-cover scale-110"
            poster="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&q=90"
          >
            {/* Add your video source here - for now using a placeholder */}
            <source src="/videos/hero-background.mp4" type="video/mp4" />
            <source src="/videos/hero-background.webm" type="video/webm" />
            {/* Fallback image if video doesn't load */}
          </video>

          {/* Fallback image for when video is loading or not supported */}
          <Image
            src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&q=90"
            alt="Luxury Kitchen Design"
            fill
            className="object-cover scale-110 -z-10"
            priority
            quality={90}
          />
        </div>

        {/* Multi-layer Gradient Overlay - darker to ensure text readability over video */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-brand-charcoal-900/60 to-black/80" />

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
              className="h-px bg-gradient-to-r from-brand-bronze-400 to-transparent mb-8"
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
                  className="btn-luxury btn-magnetic shine-effect group px-10 py-5 bg-brand-bronze-500 text-white text-lg font-medium rounded-sm hover:bg-brand-bronze-600 transition-all duration-500 relative overflow-hidden"
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
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <span className="text-white/50 text-xs uppercase tracking-widest mb-4">Scroll</span>
            <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* SERVICES - Asymmetric with reveal animations */}
      <ServiceSection />

      {/* PHILOSOPHY - Full Width with parallax */}
      <PhilosophySection />

      {/* PROCESS - Trust through transparency */}
      <ProcessSection />

      {/* TRANSFORMATION SHOWCASE - Before/After */}
      <TransformationSection />

      {/* FEATURED PORTFOLIO */}
      <FeaturedPortfolioSection />

      {/* SHOWROOM CTA */}
      <ShowroomSection />

      {/* FINAL CTA */}
      <FinalCTA />
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

        {/* Asymmetric Grid with staggered reveals */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Card 1 - Large */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-7"
          >
            <Link href="/services/custom-kitchens" className="card-glow group block overflow-hidden rounded-2xl">
              <div className="relative h-[600px] overflow-hidden">
                <div className="absolute inset-0 image-reveal">
                  <Image
                    src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&q=80"
                    alt="Custom Kitchens"
                    fill
                    className="object-cover hover-scale-luxury"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-12">
                  <motion.p
                    className="text-subtitle text-white/70 mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    01
                  </motion.p>
                  <h3 className="text-4xl md:text-5xl font-serif font-light text-white mb-4 tracking-tight">
                    Custom Kitchens
                  </h3>
                  <p className="text-white/80 text-lg font-light mb-6 leading-relaxed">
                    Bespoke cabinetry and design that transforms your kitchen into a masterpiece
                  </p>
                  <span className="inline-flex items-center text-brand-bronze-400 font-medium">
                    Explore Kitchens
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Card 2 - Small */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-5"
          >
            <Link href="/services/custom-cabinetry" className="card-glow group block overflow-hidden rounded-2xl">
              <div className="relative h-[600px] overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80"
                    alt="Custom Cabinetry"
                    fill
                    className="object-cover hover-scale-luxury"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <p className="text-subtitle text-white/70 mb-3">02</p>
                  <h3 className="text-3xl md:text-4xl font-serif font-light text-white mb-3 tracking-tight">
                    Custom Cabinetry
                  </h3>
                  <p className="text-white/80 text-base font-light mb-4 leading-relaxed">
                    Elegant wardrobes, vanities, and built-in solutions
                  </p>
                  <span className="inline-flex items-center text-brand-bronze-400 font-medium text-sm">
                    View Details
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-5"
          >
            <Link href="/services/custom-millwork" className="card-glow group block overflow-hidden rounded-2xl">
              <div className="relative h-[500px] overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    src="https://images.unsplash.com/photo-1600210492486-724d48b2b9f8?w=800&q=80"
                    alt="Custom Millwork"
                    fill
                    className="object-cover hover-scale-luxury"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <p className="text-subtitle text-white/70 mb-3">03</p>
                  <h3 className="text-3xl md:text-4xl font-serif font-light text-white mb-3 tracking-tight">
                    Custom Millwork
                  </h3>
                  <p className="text-white/80 text-base font-light mb-4 leading-relaxed">
                    Architectural details that elevate interiors
                  </p>
                  <span className="inline-flex items-center text-brand-bronze-400 font-medium text-sm">
                    Discover More
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Card 4 - Large */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="md:col-span-7"
          >
            <Link href="/services/aluminum-doors-windows" className="card-glow group block overflow-hidden rounded-2xl">
              <div className="relative h-[500px] overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1200&q=80"
                    alt="Aluminum Doors & Windows"
                    fill
                    className="object-cover hover-scale-luxury"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-12">
                  <p className="text-subtitle text-white/70 mb-4">04</p>
                  <h3 className="text-4xl md:text-5xl font-serif font-light text-white mb-4 tracking-tight">
                    Aluminum Doors & Windows
                  </h3>
                  <p className="text-white/80 text-lg font-light mb-6 leading-relaxed">
                    Sleek systems combining modern aesthetics with superior performance
                  </p>
                  <span className="inline-flex items-center text-brand-bronze-400 font-medium">
                    Learn More
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Philosophy Section with parallax
function PhilosophySection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 2000], [0, -100]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image
          src="https://images.unsplash.com/photo-1600210492486-724d48b2b9f8?w=1920&q=85"
          alt="Craftsmanship"
          fill
          className="object-cover scale-110"
          quality={85}
        />
      </motion.div>
      <div className="absolute inset-0 bg-brand-charcoal-900/60 backdrop-blur-sm" />

      <div className="relative h-full flex items-center">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <p className="text-subtitle text-brand-cream-300 mb-8">Our Philosophy</p>
            <h2 className="text-5xl md:text-7xl font-serif font-light text-white mb-12 leading-tight tracking-tight">
              Excellence through
              <br />
              <span className="text-brand-bronze-400">unwavering dedication</span>
            </h2>
            <p className="text-xl md:text-2xl text-brand-cream-200 font-light leading-relaxed max-w-2xl">
              Every project reflects our commitment to exceptional craftsmanship, attention to detail, and the pursuit of timeless luxury.
            </p>
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
      title: "Discovery",
      description: "Understanding your vision, space, and requirements through detailed consultation"
    },
    {
      number: "02",
      title: "Design",
      description: "Creating bespoke designs with 3D renderings and material selections"
    },
    {
      number: "03",
      title: "Craftsmanship",
      description: "Precision manufacturing with premium materials and expert techniques"
    },
    {
      number: "04",
      title: "Installation",
      description: "Meticulous installation ensuring perfection in every detail"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="card-luxury p-8 h-full">
                <div className="text-6xl font-light text-brand-bronze-400/20 mb-6 font-serif">
                  {step.number}
                </div>
                <h3 className="text-2xl font-serif font-light text-brand-charcoal-700 mb-4">
                  {step.title}
                </h3>
                <p className="text-brand-charcoal-500 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connecting line (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-brand-bronze-400/50 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Transformation Showcase Section - Before/After slider
function TransformationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-luxury bg-white">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-subtitle mb-6">Transformation Stories</p>
          <h2 className="text-4xl md:text-6xl font-serif font-light text-brand-charcoal-700 mb-6 leading-tight">
            Witness the transformation
          </h2>
          <p className="text-xl text-brand-charcoal-500 font-light leading-relaxed">
            See how our craftsmanship elevates spaces from ordinary to extraordinary
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <BeforeAfterSlider
            beforeImage="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=85"
            afterImage="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1920&q=85"
            beforeLabel="Before"
            afterLabel="After"
          />
        </motion.div>

        {/* Stats below slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 max-w-5xl mx-auto"
        >
          {[
            { number: '15+', label: 'Years of Excellence' },
            { number: '500+', label: 'Projects Completed' },
            { number: '100%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-light text-brand-bronze-500 mb-4 font-serif">
                {stat.number}
              </div>
              <p className="text-brand-charcoal-500 text-lg font-light tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
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

// Showroom Section
function ShowroomSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="section-luxury bg-white">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-subtitle mb-6">Experience in Person</p>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-brand-charcoal-700 mb-8 leading-tight tracking-tight">
              Visit Our Toronto Showroom
            </h2>
            <p className="text-xl text-brand-charcoal-500 font-light mb-12 leading-relaxed">
              Explore our premium material selections, completed installations, and consult with our design experts to bring your vision to life.
            </p>
            <Link
              href="/contact"
              className="btn-magnetic shine-effect inline-block px-10 py-5 bg-brand-charcoal-700 text-white text-lg font-medium rounded-sm hover:bg-brand-charcoal-800 transition-all duration-500"
            >
              Schedule a Visit
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-2xl overflow-hidden card-glow"
          >
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&q=85"
              alt="Think LUXE Showroom"
              fill
              className="object-cover hover-scale-luxury"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Final CTA
function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="section-luxury bg-brand-cream-50">
      <div className="container-luxury text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-light text-brand-charcoal-700 mb-12 leading-tight tracking-tight">
            Ready to transform your space?
          </h2>
          <p className="text-xl text-brand-charcoal-500 font-light mb-12 leading-relaxed">
            Let's discuss how we can bring your luxury vision to life.
          </p>
          <Link
            href="/contact"
            className="btn-magnetic shine-effect inline-block px-12 py-6 bg-brand-bronze-500 text-white text-lg font-medium rounded-sm hover:bg-brand-bronze-600 transition-all duration-500"
          >
            Start a Conversation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import Section from '@/components/Section';
import GoldenSeparator from '@/components/GoldenSeparator';
import { motion } from 'framer-motion';

export default function AluminumDoorsWindows() {
  const products = [
    'Sliding Doors',
    'Folding/Bi-fold Systems',
    'Pivot Doors',
    'Fixed Windows',
    'Casement Windows',
    'Awning Windows',
  ];

  const features = [
    {
      title: 'Slim Sightlines',
      description: 'Maximize glass area for unobstructed views',
      icon: (
        <svg className="w-12 h-12 text-brand-bronze-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
        </svg>
      ),
    },
    {
      title: 'Energy Efficient',
      description: 'Superior thermal performance and insulation',
      icon: (
        <svg className="w-12 h-12 text-brand-bronze-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
    },
    {
      title: 'Low Maintenance',
      description: 'Durable aluminum requires minimal upkeep',
      icon: (
        <svg className="w-12 h-12 text-brand-bronze-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
    },
    {
      title: 'Custom Configurations',
      description: 'Tailored solutions for any opening size',
      icon: (
        <svg className="w-12 h-12 text-brand-bronze-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"/>
        </svg>
      ),
    },
  ];

  return (
    <>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1920&q=80"
            alt="Aluminum Doors and Windows"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-serif font-light mb-6"
          >
            Aluminum Doors & <span className="text-brand-bronze-500">Windows</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-brand-cream-200 font-light"
          >
            Sleek, modern systems that combine beauty with performance
          </motion.p>
        </div>
      </section>

      <Section background="white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-brand-charcoal-900 mb-6">
            The Think LUXE Aluminum Advantage
          </h2>
          <p className="text-xl text-brand-charcoal-500 font-light leading-relaxed">
            Our premium aluminum door and window systems offer the perfect combination of contemporary aesthetics, energy efficiency, and durability. Experience seamless indoor-outdoor living with our custom aluminum solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-light text-brand-charcoal-900 mb-2">{feature.title}</h3>
              <p className="text-brand-charcoal-500 font-light">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="card-luxury rounded-lg p-8">
          <h3 className="text-3xl font-serif font-light text-brand-charcoal-900 mb-6 text-center">Product Range</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product) => (
              <div key={product} className="flex items-center">
                <svg className="w-5 h-5 text-brand-bronze-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span className="text-brand-charcoal-600 font-light">{product}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <div className="py-16 bg-white">
        <div className="container-luxury">
          <GoldenSeparator variant="glow" />
        </div>
      </div>

      <Section background="gradient">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
            Request Aluminum Solutions Quote
          </h2>
          <p className="text-xl text-brand-cream-200 font-light mb-8">
            Discover how our aluminum systems can enhance your home. Contact us for a custom quote.
          </p>
          <Button href="/contact" variant="primary">
            Get a Quote
          </Button>
        </div>
      </Section>
    </>
  );
}

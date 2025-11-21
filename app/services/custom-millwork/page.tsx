'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import Section from '@/components/Section';
import GoldenSeparator from '@/components/GoldenSeparator';
import { motion } from 'framer-motion';

export default function CustomMillwork() {
  const services = [
    'Crown Molding & Trim',
    'Wainscoting & Paneling',
    'Custom Shelving',
    'Coffered Ceilings',
    'Feature Walls',
    'Decorative Columns',
    'Window Casings & Surrounds',
    'Custom Mantels',
  ];

  return (
    <>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600210492486-724d48b2b9f8?w=1920&q=80"
            alt="Custom Millwork"
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
            Custom <span className="text-brand-bronze-500">Millwork Excellence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-brand-cream-200 font-light"
          >
            Sophisticated architectural details that elevate your interiors
          </motion.p>
        </div>
      </section>

      <Section background="white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-brand-charcoal-900 mb-6">
            Transform Your Space with Millwork
          </h2>
          <p className="text-xl text-brand-charcoal-500 font-light leading-relaxed">
            Custom millwork adds character, elegance, and timeless beauty to any space. Our expert craftsmen create bespoke architectural details that transform ordinary rooms into extraordinary spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="card-luxury p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start">
                <svg className="w-6 h-6 text-brand-bronze-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span className="text-brand-charcoal-600 font-light">{service}</span>
              </div>
            </motion.div>
          ))}
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
            Add Architectural Beauty to Your Home
          </h2>
          <p className="text-xl text-brand-cream-200 font-light mb-8">
            Discover how custom millwork can transform your living spaces. Schedule a consultation today.
          </p>
          <Button href="/contact" variant="primary">
            Schedule Consultation
          </Button>
        </div>
      </Section>
    </>
  );
}

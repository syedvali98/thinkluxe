'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import Section from '@/components/Section';
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
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-20">
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
            className="text-5xl md:text-6xl font-serif font-bold mb-6"
          >
            Custom <span className="text-luxury-gold-500">Millwork Excellence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200"
          >
            Sophisticated architectural details that elevate your interiors
          </motion.p>
        </div>
      </section>

      <Section background="white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-luxury-charcoal-900 mb-6">
            Transform Your Space with Millwork
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
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
              className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start">
                <svg className="w-6 h-6 text-luxury-gold-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span className="text-gray-700 font-medium">{service}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section background="gradient">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Add Architectural Beauty to Your Home
          </h2>
          <p className="text-xl text-gray-200 mb-8">
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

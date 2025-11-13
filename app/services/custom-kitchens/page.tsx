'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import Section from '@/components/Section';
import { motion } from 'framer-motion';

export default function CustomKitchens() {
  const designStyles = [
    {
      name: 'Contemporary',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80',
      description: 'Clean lines, minimalist design, and modern finishes',
    },
    {
      name: 'Traditional',
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80',
      description: 'Classic elegance with ornate details and rich wood',
    },
    {
      name: 'Transitional',
      image: 'https://images.unsplash.com/photo-1600210492486-724d48b2b9f8?w=800&q=80',
      description: 'Perfect blend of traditional warmth and modern simplicity',
    },
    {
      name: 'Modern Minimalist',
      image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800&q=80',
      description: 'Sleek, uncluttered spaces with premium materials',
    },
  ];

  const materials = [
    {
      category: 'Cabinet Materials',
      options: ['Solid Wood', 'High-Grade Plywood', 'MDF with Premium Veneer', 'Lacquered Finishes'],
    },
    {
      category: 'Countertops',
      options: ['Quartz', 'Granite', 'Marble', 'Quartzite', 'Porcelain Slabs'],
    },
    {
      category: 'Hardware',
      options: ['Brushed Gold', 'Matte Black', 'Polished Chrome', 'Brass', 'Custom Handles'],
    },
    {
      category: 'Finishes',
      options: ['Painted', 'Stained', 'High-Gloss Lacquer', 'Matte', 'Two-Tone Combinations'],
    },
  ];

  const features = [
    'Custom cabinet design and configuration',
    'Premium material selection',
    'Professional 3D rendering',
    'Expert installation',
    'Soft-close drawer systems',
    'Custom storage solutions',
    'Integrated lighting options',
    'Quality hardware and accessories',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&q=80"
            alt="Custom Luxury Kitchen"
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
            Transform Your Kitchen into a <span className="text-luxury-gold-500">Luxury Masterpiece</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200"
          >
            Bespoke custom kitchens designed and crafted to perfection
          </motion.p>
        </div>
      </section>

      {/* What We Offer */}
      <Section background="white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-luxury-charcoal-900 mb-6">
            Comprehensive Kitchen Customization
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            At Think LUXE, we transform kitchens into stunning spaces that combine luxury, functionality, and your personal style. From concept to completion, our expert team handles every detail of your custom kitchen project with precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex items-start"
            >
              <svg className="w-6 h-6 text-luxury-gold-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span className="text-gray-700">{feature}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Design Styles */}
      <Section background="gray">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-luxury-charcoal-900 mb-4">
            Design Possibilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our range of kitchen design styles to find the perfect aesthetic for your home
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {designStyles.map((style, index) => (
            <motion.div
              key={style.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-64 mb-4 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={style.image}
                  alt={style.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-serif font-bold text-luxury-charcoal-900 mb-2">{style.name}</h3>
              <p className="text-gray-600">{style.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Materials & Finishes */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-luxury-charcoal-900 mb-4">
            Premium Materials & Finishes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We use only the highest quality materials to ensure your kitchen is both beautiful and durable
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {materials.map((material, index) => (
            <motion.div
              key={material.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-luxury-gold-600 mb-4">{material.category}</h3>
              <ul className="space-y-2">
                {material.options.map((option) => (
                  <li key={option} className="flex items-start text-gray-700">
                    <span className="text-luxury-gold-500 mr-2">•</span>
                    {option}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Featured Gallery Teaser */}
      <Section background="gradient">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Explore Our Kitchen Portfolio
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            View our stunning collection of completed custom kitchen projects and get inspired for your own transformation
          </p>
          <Button href="/portfolio" variant="primary">
            View Portfolio
          </Button>
        </div>
      </Section>

      {/* Investment & Timeline */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-luxury-charcoal-900 mb-8 text-center">
            Investment & Timeline
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-luxury-gold-600 mb-4">Transparent Pricing</h3>
              <p className="text-gray-700 mb-4">
                Every kitchen is unique, and pricing depends on factors including:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-luxury-gold-500 mr-2">•</span>
                  Kitchen size and layout complexity
                </li>
                <li className="flex items-start">
                  <span className="text-luxury-gold-500 mr-2">•</span>
                  Material selections and finishes
                </li>
                <li className="flex items-start">
                  <span className="text-luxury-gold-500 mr-2">•</span>
                  Hardware and accessory choices
                </li>
                <li className="flex items-start">
                  <span className="text-luxury-gold-500 mr-2">•</span>
                  Custom features and special requirements
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-luxury-gold-600 mb-4">Project Timeline</h3>
              <p className="text-gray-700 mb-4">
                Typical custom kitchen project phases:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-luxury-gold-500 mr-2">•</span>
                  Design consultation: 1-2 weeks
                </li>
                <li className="flex items-start">
                  <span className="text-luxury-gold-500 mr-2">•</span>
                  Manufacturing: 6-10 weeks
                </li>
                <li className="flex items-start">
                  <span className="text-luxury-gold-500 mr-2">•</span>
                  Installation: 1-2 weeks
                </li>
                <li className="flex items-start">
                  <span className="text-luxury-gold-500 mr-2">•</span>
                  Total: 8-14 weeks from approval to completion
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Start Your Kitchen Journey
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Ready to create your dream kitchen? Schedule a consultation with our expert design team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary">
              Schedule Consultation
            </Button>
            <Button href="/about" variant="outline">
              Visit Our Showroom
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import Section from '@/components/Section';
import { motion } from 'framer-motion';

export default function CustomCabinetry() {
  const services = [
    {
      title: 'Custom Wardrobes & Closets',
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80',
      description: 'Walk-in closets and reach-in wardrobes designed to maximize storage and showcase your personal style.',
    },
    {
      title: 'Bathroom Vanities',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
      description: 'Elegant custom vanities that combine beauty, functionality, and premium craftsmanship.',
    },
    {
      title: 'Built-in Units',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      description: 'Entertainment centers, bookshelves, and custom built-ins tailored to your space.',
    },
    {
      title: 'Home Office Solutions',
      image: 'https://images.unsplash.com/photo-1564415315949-7a5956b1f7f7?w=800&q=80',
      description: 'Productive and stylish home office cabinetry with smart storage solutions.',
    },
  ];

  return (
    <>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1920&q=80"
            alt="Custom Cabinetry"
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
            Custom <span className="text-luxury-gold-500">Cabinetry Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200"
          >
            Elegant storage solutions tailored to every room in your home
          </motion.p>
        </div>
      </section>

      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-luxury-charcoal-900 mb-4">
            Our Cabinetry Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From wardrobes to vanities, we create custom cabinetry that maximizes space and reflects your personal style
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-80">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-serif font-bold text-luxury-charcoal-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section background="gradient">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Design Your Dream Storage
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let us create custom cabinetry solutions that perfectly fit your space and lifestyle.
          </p>
          <Button href="/contact" variant="primary">
            Schedule Consultation
          </Button>
        </div>
      </Section>
    </>
  );
}

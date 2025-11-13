'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import Section from '@/components/Section';
import { motion } from 'framer-motion';

export default function About() {
  const values = [
    {
      title: 'Excellence',
      description: 'We maintain unwavering commitment to quality in every project we undertake.',
      icon: (
        <svg className="w-12 h-12 text-luxury-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
        </svg>
      ),
    },
    {
      title: 'Craftsmanship',
      description: 'Our skilled artisans bring decades of expertise to every detail of your project.',
      icon: (
        <svg className="w-12 h-12 text-luxury-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
        </svg>
      ),
    },
    {
      title: 'Innovation',
      description: 'We combine traditional techniques with modern design to create timeless spaces.',
      icon: (
        <svg className="w-12 h-12 text-luxury-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>
      ),
    },
    {
      title: 'Client Focus',
      description: 'Your vision guides every decision we make throughout the design and build process.',
      icon: (
        <svg className="w-12 h-12 text-luxury-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      ),
    },
  ];

  return (
    <>
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Think LUXE Story"
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
            About <span className="text-luxury-gold-500">Think LUXE</span>
          </motion.h1>
        </div>
      </section>

      <Section background="white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-luxury-charcoal-900 mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Think LUXE is dedicated to transforming spaces through complete luxurious customisation solutions. As a premier luxury custom cabinetry company, we specialize in exquisite custom kitchens, sophisticated millwork, and elegant aluminum doors and windows. Our unwavering commitment to excellence, attention to detail, and passion for craftsmanship ensure that every project reflects the luxury and quality our clients deserve.
          </p>
        </div>
      </Section>

      <Section background="gray">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-luxury-charcoal-900 mb-4">
            Our Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-2xl font-semibold text-luxury-charcoal-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
              alt="Think LUXE Showroom"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-luxury-charcoal-900 mb-6">
              Visit Our Toronto Showroom
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Experience our craftsmanship firsthand at our Toronto showroom. See premium materials, completed installations, and meet with our expert design team to discuss your project.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-start text-gray-700">
                <svg className="w-6 h-6 mr-3 text-luxury-gold-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>Greater Toronto Area, Ontario</span>
              </div>
              <div className="flex items-start text-gray-700">
                <svg className="w-6 h-6 mr-3 text-luxury-gold-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Monday - Saturday: 10:00 AM - 6:00 PM<br/>Sunday: By Appointment</span>
              </div>
            </div>
            <Button href="/contact" variant="primary">
              Schedule a Visit
            </Button>
          </div>
        </div>
      </Section>

      <Section background="gradient">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let's discuss how we can transform your space with our luxury customization solutions.
          </p>
          <Button href="/contact" variant="primary">
            Get in Touch
          </Button>
        </div>
      </Section>
    </>
  );
}

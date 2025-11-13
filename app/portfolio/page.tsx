'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Section from '@/components/Section';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Modern Luxury Kitchen',
      category: 'kitchens',
      style: 'modern',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80',
      description: 'Contemporary kitchen with high-gloss cabinetry and premium finishes',
    },
    {
      id: 2,
      title: 'Walk-in Closet Oasis',
      category: 'cabinetry',
      style: 'contemporary',
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80',
      description: 'Custom walk-in closet with integrated lighting and elegant storage',
    },
    {
      id: 3,
      title: 'Traditional Kitchen Elegance',
      category: 'kitchens',
      style: 'traditional',
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80',
      description: 'Classic kitchen design with rich wood tones and ornate details',
    },
    {
      id: 4,
      title: 'Feature Wall Millwork',
      category: 'millwork',
      style: 'modern',
      image: 'https://images.unsplash.com/photo-1600210492486-724d48b2b9f8?w=800&q=80',
      description: 'Sophisticated wall paneling with custom shelving',
    },
    {
      id: 5,
      title: 'Aluminum Sliding Doors',
      category: 'aluminum',
      style: 'contemporary',
      image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80',
      description: 'Sleek aluminum doors creating seamless indoor-outdoor living',
    },
    {
      id: 6,
      title: 'Luxury Bathroom Vanity',
      category: 'cabinetry',
      style: 'modern',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
      description: 'Custom vanity with premium materials and elegant design',
    },
    {
      id: 7,
      title: 'Transitional Kitchen',
      category: 'kitchens',
      style: 'transitional',
      image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800&q=80',
      description: 'Perfect blend of traditional and contemporary elements',
    },
    {
      id: 8,
      title: 'Home Office Built-ins',
      category: 'cabinetry',
      style: 'modern',
      image: 'https://images.unsplash.com/photo-1564415315949-7a5956b1f7f7?w=800&q=80',
      description: 'Custom built-in desk and storage for productive workspace',
    },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <>
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden mt-20 bg-luxury-charcoal-900">
        <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-6"
          >
            Our <span className="text-luxury-gold-500">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200"
          >
            Luxury in every detail - explore our completed projects
          </motion.p>
        </div>
      </section>

      <Section background="white">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { label: 'All Projects', value: 'all' },
            { label: 'Kitchens', value: 'kitchens' },
            { label: 'Cabinetry', value: 'cabinetry' },
            { label: 'Millwork', value: 'millwork' },
            { label: 'Aluminum', value: 'aluminum' },
          ].map((btn) => (
            <button
              key={btn.value}
              onClick={() => setFilter(btn.value)}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                filter === btn.value
                  ? 'bg-luxury-gold-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover-lift"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-serif font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-200 text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">No projects found in this category.</p>
          </div>
        )}
      </Section>

      <Section background="gradient">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            See Your Space Transformed
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Ready to create your own luxury transformation? Let's discuss your project.
          </p>
          <button
            onClick={() => window.location.href = '/contact'}
            className="bg-luxury-gold-500 hover:bg-luxury-gold-600 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Project
          </button>
        </div>
      </Section>
    </>
  );
}

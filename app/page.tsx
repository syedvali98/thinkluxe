'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Section from '@/components/Section';
import { motion } from 'framer-motion';

export default function Home() {
  const services = [
    {
      title: 'Custom Kitchens',
      description: 'Transform your kitchen into a luxury masterpiece with our bespoke cabinetry, premium materials, and expert craftsmanship.',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80',
      href: '/services/custom-kitchens',
      icon: (
        <svg className="w-8 h-8 text-luxury-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
        </svg>
      ),
    },
    {
      title: 'Custom Cabinetry',
      description: 'Elegant wardrobes, vanities, and built-in solutions designed to maximize space and reflect your personal style.',
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80',
      href: '/services/custom-cabinetry',
      icon: (
        <svg className="w-8 h-8 text-luxury-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>
        </svg>
      ),
    },
    {
      title: 'Custom Millwork',
      description: 'Sophisticated millwork details including crown molding, wainscoting, and custom paneling to elevate your interiors.',
      image: 'https://images.unsplash.com/photo-1600210492486-724d48b2b9f8?w=800&q=80',
      href: '/services/custom-millwork',
      icon: (
        <svg className="w-8 h-8 text-luxury-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
        </svg>
      ),
    },
    {
      title: 'Aluminum Doors & Windows',
      description: 'Sleek aluminum systems offering slim sightlines, energy efficiency, and modern aesthetics for contemporary living.',
      image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80',
      href: '/services/aluminum-doors-windows',
      icon: (
        <svg className="w-8 h-8 text-luxury-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"/>
        </svg>
      ),
    },
  ];

  const features = [
    {
      title: 'Complete Solutions',
      description: 'From concept to completion, we handle every aspect of your luxury customization project.',
      icon: (
        <svg className="w-12 h-12 text-luxury-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
    },
    {
      title: 'Premium Quality',
      description: 'We use only the finest materials and work with skilled craftsmen to ensure exceptional results.',
      icon: (
        <svg className="w-12 h-12 text-luxury-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
        </svg>
      ),
    },
    {
      title: 'Expert Design',
      description: 'Our experienced design team brings your vision to life with attention to every detail.',
      icon: (
        <svg className="w-12 h-12 text-luxury-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
        </svg>
      ),
    },
    {
      title: 'Toronto Showroom',
      description: 'Visit our showroom to experience our craftsmanship firsthand and explore design possibilities.',
      icon: (
        <svg className="w-12 h-12 text-luxury-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
        </svg>
      ),
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Toronto, ON',
      text: 'Think LUXE transformed our kitchen into a stunning masterpiece. The quality and attention to detail exceeded our expectations.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      location: 'Mississauga, ON',
      text: 'Outstanding craftsmanship and professional service. Our custom wardrobes are both beautiful and functional.',
      rating: 5,
    },
    {
      name: 'Jennifer Williams',
      location: 'Oakville, ON',
      text: 'From design to installation, the entire process was seamless. We absolutely love our new custom millwork!',
      rating: 5,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&q=80"
            alt="Luxury Kitchen"
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
            className="text-5xl md:text-7xl font-serif font-bold mb-6"
          >
            Complete Luxurious <span className="text-luxury-gold-500">Customisation Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-200"
          >
            Premier luxury custom cabinetry specializing in high-end kitchens, sophisticated millwork, and elegant aluminum doors & windows
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button href="/services" variant="primary">
              Explore Our Services
            </Button>
            <Button href="/contact" variant="outline">
              Book Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-luxury-charcoal-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming spaces through premium custom solutions tailored to your unique vision
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card {...service} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why Think LUXE */}
      <Section background="gray">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-luxury-charcoal-900 mb-4">
            Why Choose Think LUXE
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unwavering commitment to excellence in every detail
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <h3 className="text-2xl font-semibold text-luxury-charcoal-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Showroom Highlight */}
      <Section background="gradient">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Visit Our Toronto Showroom
            </h2>
            <p className="text-xl text-gray-200 mb-6">
              Experience our craftsmanship firsthand and explore the possibilities for your luxury customization project. Our expert team is ready to help bring your vision to life.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-lg">
                <svg className="w-6 h-6 mr-3 text-luxury-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
                View our premium material selections
              </li>
              <li className="flex items-center text-lg">
                <svg className="w-6 h-6 mr-3 text-luxury-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
                See completed installations
              </li>
              <li className="flex items-center text-lg">
                <svg className="w-6 h-6 mr-3 text-luxury-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
                Consult with our design experts
              </li>
            </ul>
            <Button href="/contact" variant="primary">
              Schedule a Visit
            </Button>
          </div>
          <div className="relative h-96 lg:h-full min-h-[400px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
              alt="Think LUXE Showroom"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-luxury-charcoal-900 mb-4">
            Client Experiences
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear what our clients say about their luxury transformations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-luxury-gold-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
              <div>
                <p className="font-semibold text-luxury-charcoal-900">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section background="gradient">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Schedule a consultation with our expert team and discover how we can bring your luxury vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary">
              Schedule Consultation
            </Button>
            <Button href="/portfolio" variant="outline">
              View Our Portfolio
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

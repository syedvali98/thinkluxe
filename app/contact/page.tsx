'use client';

import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/Button';
import GoldenSeparator from '@/components/GoldenSeparator';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  timeline: string;
};

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // TODO: Implement email sending functionality
    console.log('Form data:', data);
    alert('Thank you for your inquiry! We will contact you within 24-48 hours.');
    reset();
  };

  return (
    <>
      <section className="relative bg-brand-charcoal-900 text-white py-20">
        <div className="container-custom px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-light mb-6">
              Begin Your Luxury <span className="text-brand-bronze-500">Transformation</span>
            </h1>
            <p className="text-xl text-brand-cream-200 font-light">
              Schedule a consultation with our expert team and discover how we can bring your vision to life
            </p>
          </motion.div>
        </div>
      </section>

      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-serif font-light text-brand-charcoal-900 mb-6">
              Schedule a Consultation
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-charcoal-600 font-light mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-3 border border-brand-cream-300 rounded-md focus:ring-2 focus:ring-brand-bronze-500 focus:border-transparent"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-charcoal-600 font-light mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className="w-full px-4 py-3 border border-brand-cream-300 rounded-md focus:ring-2 focus:ring-brand-bronze-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-brand-charcoal-600 font-light mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone')}
                  className="w-full px-4 py-3 border border-brand-cream-300 rounded-md focus:ring-2 focus:ring-brand-bronze-500 focus:border-transparent"
                  placeholder="(416) 555-1234"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-brand-charcoal-600 font-light mb-2">
                  Service Interest *
                </label>
                <select
                  id="service"
                  {...register('service', { required: 'Please select a service' })}
                  className="w-full px-4 py-3 border border-brand-cream-300 rounded-md focus:ring-2 focus:ring-brand-bronze-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="kitchen">Custom Kitchens</option>
                  <option value="cabinetry">Custom Cabinetry</option>
                  <option value="millwork">Custom Millwork</option>
                  <option value="aluminum">Aluminum Doors & Windows</option>
                  <option value="multiple">Multiple Services</option>
                </select>
                {errors.service && (
                  <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-brand-charcoal-600 font-light mb-2">
                  Project Timeline
                </label>
                <select
                  id="timeline"
                  {...register('timeline')}
                  className="w-full px-4 py-3 border border-brand-cream-300 rounded-md focus:ring-2 focus:ring-brand-bronze-500 focus:border-transparent"
                >
                  <option value="">Select timeline</option>
                  <option value="immediate">Immediate (1-2 months)</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="6-12-months">6-12 months</option>
                  <option value="planning">Just planning</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-charcoal-600 font-light mb-2">
                  Project Description *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message', { required: 'Please describe your project' })}
                  className="w-full px-4 py-3 border border-brand-cream-300 rounded-md focus:ring-2 focus:ring-brand-bronze-500 focus:border-transparent"
                  placeholder="Tell us about your project..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full"
              >
                Schedule Consultation
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-serif font-light text-brand-charcoal-900 mb-6">
              Get in Touch
            </h2>

            <div className="space-y-8">
              {/* Call Us */}
              <div className="flex items-start">
                <div className="bg-brand-bronze-400/10 p-4 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-brand-bronze-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-charcoal-900 mb-2">Call Us</h3>
                  <a href="tel:+14165551234" className="text-brand-bronze-600 hover:text-brand-bronze-700 text-lg">
                    (416) 555-1234
                  </a>
                  <p className="text-brand-charcoal-500 font-light mt-1">Monday - Saturday: 10 AM - 6 PM</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="bg-brand-bronze-400/10 p-4 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-brand-bronze-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-charcoal-900 mb-2">Email Us</h3>
                  <a href="mailto:info@thinkluxe.com" className="text-brand-bronze-600 hover:text-brand-bronze-700 text-lg">
                    info@thinkluxe.com
                  </a>
                  <p className="text-brand-charcoal-500 font-light mt-1">We'll respond within 24-48 hours</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start">
                <div className="bg-brand-bronze-400/10 p-4 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-brand-bronze-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-charcoal-900 mb-2">WhatsApp Chat</h3>
                  <a href="https://wa.me/14165551234" target="_blank" rel="noopener noreferrer" className="text-brand-bronze-600 hover:text-brand-bronze-700 text-lg">
                    Chat with us
                  </a>
                  <p className="text-brand-charcoal-500 font-light mt-1">Quick response for immediate questions</p>
                </div>
              </div>

              {/* Showroom */}
              <div className="flex items-start">
                <div className="bg-brand-bronze-400/10 p-4 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-brand-bronze-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-charcoal-900 mb-2">Visit Our Showroom</h3>
                  <p className="text-brand-charcoal-600 font-light">Greater Toronto Area<br/>Ontario, Canada</p>
                  <p className="text-brand-charcoal-500 font-light mt-2">
                    Monday - Saturday: 10 AM - 6 PM<br/>
                    Sunday: By Appointment
                  </p>
                </div>
              </div>
            </div>

            {/* What Happens Next */}
            <div className="mt-12 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-brand-charcoal-900 mb-4">What Happens Next?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-brand-bronze-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold">1</span>
                  <span className="text-brand-charcoal-600 font-light">We'll review your inquiry and respond within 24-48 hours</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-brand-bronze-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold">2</span>
                  <span className="text-brand-charcoal-600 font-light">Schedule an initial consultation to discuss your project</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-brand-bronze-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold">3</span>
                  <span className="text-brand-charcoal-600 font-light">Visit our showroom or arrange an on-site assessment</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-brand-bronze-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold">4</span>
                  <span className="text-brand-charcoal-600 font-light">Receive a detailed proposal and begin your transformation</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </Section>

      <div className="py-16 bg-white">
        <div className="container-luxury">
          <GoldenSeparator variant="glow" />
        </div>
      </div>
    </>
  );
}

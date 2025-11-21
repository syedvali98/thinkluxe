'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import GoldenSeparator from './GoldenSeparator';

const Footer = () => {
  return (
    <>
      {/* CTA Bar Above Footer */}
      <div className="bg-gradient-to-r from-brand-charcoal-900 via-brand-charcoal-800 to-brand-charcoal-900 py-8 md:py-12 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-bronze-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-bronze-500/5 rounded-full blur-3xl" />

        <div className="container-luxury relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-serif font-light text-white mb-2">
                Ready to Transform Your Space?
              </h3>
              <p className="text-brand-cream-200 font-light text-lg">
                Let's discuss your luxury customization project
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+14165551234"
                className="btn-magnetic px-8 py-4 bg-brand-bronze-500 hover:bg-brand-bronze-600 text-white rounded-sm font-medium transition-all duration-300 inline-flex items-center justify-center gap-2 border-2 border-brand-bronze-400"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                Call Now
              </a>
              <Link
                href="/contact"
                className="btn-magnetic px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-sm font-medium transition-all duration-300 inline-flex items-center justify-center border-2 border-white/20 hover:border-brand-bronze-400"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-brand-charcoal-900 text-white relative overflow-hidden">
        {/* Decorative golden separator with glow */}
        <GoldenSeparator variant="glow" />

        {/* Floating decorative circles */}
        <div className="absolute top-20 left-10 w-40 h-40 border border-brand-bronze-500/10 rounded-full" />
        <div className="absolute bottom-20 right-10 w-56 h-56 border border-brand-bronze-500/10 rounded-full" />

        <div className="container-luxury py-16 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 text-center sm:text-left"
            >
              <div className="relative w-40 h-10 mb-6 mx-auto sm:mx-0">
                <Image
                  src="/images/logo/logo-white.png"
                  alt="Think LUXE"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-brand-cream-200 font-light mb-6 leading-relaxed">
                Complete luxurious customisation solutions for your home.
              </p>

              {/* Trust Badges */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 justify-center sm:justify-start text-brand-cream-200 font-light text-sm">
                  <svg className="w-5 h-5 text-brand-bronze-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2 justify-center sm:justify-start text-brand-cream-200 font-light text-sm">
                  <svg className="w-5 h-5 text-brand-bronze-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                  </svg>
                  <span>20+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 justify-center sm:justify-start text-brand-cream-200 font-light text-sm">
                  <svg className="w-5 h-5 text-brand-bronze-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
                  </svg>
                  <span>100% Satisfaction</span>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-4 justify-center sm:justify-start">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="btn-magnetic group">
                  <div className="w-10 h-10 rounded-full bg-brand-bronze-500/10 flex items-center justify-center hover:bg-brand-bronze-500 transition-all duration-300">
                    <svg className="w-5 h-5 text-brand-bronze-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn-magnetic group">
                  <div className="w-10 h-10 rounded-full bg-brand-bronze-500/10 flex items-center justify-center hover:bg-brand-bronze-500 transition-all duration-300">
                    <svg className="w-5 h-5 text-brand-bronze-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                      <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Services Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center sm:text-left"
            >
              <h4 className="text-xl font-serif font-light mb-6 text-brand-bronze-500">Services</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/services/custom-millwork" className="text-brand-cream-200 font-light hover:text-brand-bronze-400 transition-colors">
                    Custom Kitchen & Millwork
                  </Link>
                </li>
                <li>
                  <Link href="/services/aluminum-doors-windows" className="text-brand-cream-200 font-light hover:text-brand-bronze-400 transition-colors">
                    Custom Aluminum Doors & Windows
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Quick Links Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center sm:text-left"
            >
              <h4 className="text-xl font-serif font-light mb-6 text-brand-bronze-500">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-brand-cream-200 font-light hover:text-brand-bronze-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="text-brand-cream-200 font-light hover:text-brand-bronze-400 transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-brand-cream-200 font-light hover:text-brand-bronze-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-brand-cream-200 font-light hover:text-brand-bronze-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Contact Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center sm:text-left"
            >
              <h4 className="text-xl font-serif font-light mb-6 text-brand-bronze-500">Contact Us</h4>
              <ul className="space-y-4 text-brand-cream-200 font-light">
                <li className="flex items-start justify-center sm:justify-start group cursor-pointer">
                  <svg className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-brand-bronze-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span>Greater Toronto Area<br/>Ontario, Canada</span>
                </li>
                <li className="flex items-center justify-center sm:justify-start group">
                  <svg className="w-5 h-5 mr-3 flex-shrink-0 text-brand-bronze-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <a href="tel:+14165551234" className="hover:text-brand-bronze-400 transition-colors">
                    (416) 555-1234
                  </a>
                </li>
                <li className="flex items-center justify-center sm:justify-start group">
                  <svg className="w-5 h-5 mr-3 flex-shrink-0 text-brand-bronze-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <a href="mailto:info@thinkluxe.com" className="hover:text-brand-bronze-400 transition-colors">
                    info@thinkluxe.com
                  </a>
                </li>
              </ul>

              {/* Business Hours Callout */}
              <div className="mt-6 p-4 bg-brand-bronze-500/10 rounded-lg border border-brand-bronze-500/20">
                <div className="flex items-center gap-2 mb-2 justify-center sm:justify-start">
                  <svg className="w-5 h-5 text-brand-bronze-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <h5 className="font-medium text-brand-bronze-400">Business Hours</h5>
                </div>
                <p className="text-sm text-brand-cream-200 font-light leading-relaxed">
                  Mon-Sat: 10 AM - 6 PM<br/>
                  Sunday: By Appointment
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="border-t border-brand-bronze-500/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="text-brand-cream-200 font-light text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Think LUXE. All rights reserved. Crafted with excellence.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-brand-cream-200 font-light hover:text-brand-bronze-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-brand-cream-200 font-light hover:text-brand-bronze-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

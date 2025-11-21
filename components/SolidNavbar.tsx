'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const SolidNavbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services', submenu: [
      { name: 'Custom Kitchen & Millwork', href: '/services/custom-millwork' },
      { name: 'Custom Aluminum Doors & Windows', href: '/services/aluminum-doors-windows' },
    ]},
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg py-4">
      <div className="container-luxury">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-24 h-6 sm:w-32 sm:h-8 md:w-40 md:h-10">
              <Image
                src="/images/logo/logo-white.png"
                alt="Think LUXE"
                fill
                className="object-contain logo-scrolled"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className={`transition-colors font-light relative ${
                    pathname === link.href
                      ? 'text-brand-bronze-500'
                      : 'text-brand-charcoal-600 hover:text-brand-bronze-500'
                  }`}
                >
                  {link.name}
                  {pathname === link.href && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-bronze-500" />
                  )}
                </Link>

                {/* Submenu */}
                {link.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="py-2">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.name}
                          href={sublink.href}
                          className="block px-6 py-3 text-brand-charcoal-700 hover:bg-brand-cream-100 hover:text-brand-bronze-600 transition-colors"
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="btn-luxury btn-magnetic shine-effect group px-6 py-2.5 bg-brand-bronze-500 text-white text-sm font-medium rounded-sm hover:bg-brand-bronze-600 transition-all duration-500 relative overflow-hidden"
            >
              <span className="relative z-10">Book Consultation</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden focus:outline-none text-brand-charcoal-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 bg-white rounded-lg p-2">
            {navLinks.map((link) => (
              <div key={link.name} className="py-2">
                <Link
                  href={link.href}
                  className={`block transition-colors font-light ${
                    pathname === link.href
                      ? 'text-brand-bronze-500'
                      : 'text-brand-charcoal-600 hover:text-brand-bronze-500'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
                {link.submenu && (
                  <div className="pl-4 mt-2 space-y-2">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.name}
                        href={sublink.href}
                        className="block text-sm text-brand-charcoal-500 hover:text-brand-bronze-500 transition-colors font-light"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="block mt-4 bg-brand-bronze-500 hover:bg-brand-bronze-600 text-white px-6 py-3 rounded-sm transition-colors text-center font-light"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Consultation
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default SolidNavbar;

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services', submenu: [
      { name: 'Custom Kitchens', href: '/services/custom-kitchens' },
      { name: 'Custom Cabinetry', href: '/services/custom-cabinetry' },
      { name: 'Custom Millwork', href: '/services/custom-millwork' },
      { name: 'Aluminum Doors & Windows', href: '/services/aluminum-doors-windows' },
    ]},
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-luxury">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl md:text-3xl font-serif font-light">
            <span className={`transition-colors duration-500 ${isScrolled ? 'text-brand-charcoal-700' : 'text-white'}`}>Think</span>
            <span className="text-brand-bronze-500"> LUXE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className={`transition-colors duration-500 font-light ${
                    pathname === link.href
                      ? 'text-brand-bronze-500'
                      : isScrolled
                        ? 'text-brand-charcoal-600 hover:text-brand-bronze-500'
                        : 'text-white/90 hover:text-brand-bronze-400'
                  }`}
                >
                  {link.name}
                </Link>

                {/* Submenu */}
                {link.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="py-2">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.name}
                          href={sublink.href}
                          className="block px-6 py-3 text-luxury-charcoal-700 hover:bg-luxury-gold-50 hover:text-luxury-gold-600 transition-colors"
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
            className={`lg:hidden focus:outline-none transition-colors duration-500 ${
              isScrolled ? 'text-brand-charcoal-700' : 'text-white'
            }`}
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
          <div className="lg:hidden mt-4 pb-4 bg-white/95 backdrop-blur-md rounded-lg p-4">
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

export default Navbar;

"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useMenu } from "@/context/MenuContext";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";
  const { isMenuOpen: mobileMenuOpen, setIsMenuOpen: setMobileMenuOpen } = useMenu();
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Track scroll for glass effect
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });

    return () => unsubscribe();
  }, [scrollY]);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-40"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Background with glass effect - transparent initially, glass on scroll */}
        <motion.div
          className="absolute inset-0 transition-all duration-500"
          style={{
            backgroundColor: `rgba(0, 0, 0, ${isScrolled ? 0.4 : 0})`,
            backdropFilter: isScrolled ? "blur(16px)" : "blur(0px)",
            WebkitBackdropFilter: isScrolled ? "blur(16px)" : "blur(0px)",
            borderBottom: `1px solid rgba(255, 255, 255, ${isScrolled ? 0.15 : 0})`,
          }}
        />

        <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Left - Tagline */}
          <div className="flex-1">
            <motion.div
              className="text-[10px] md:text-xs font-medium uppercase tracking-[0.2em] text-white/70 hidden sm:block leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: isScrolled ? 1 : 0.7 }}
              transition={{ duration: 0.3 }}
            >
              <p>Luxury Tailored to the Elite,</p>
              <p>Now Within Reach.</p>
            </motion.div>
          </div>

          {/* Center - Logo */}
          <div className="flex justify-center">
            {isLandingPage ? (
              // Empty slot on landing page - AnimatedLogo floats above
              <div className="w-14 h-14" />
            ) : (
              // Regular logo on other pages
              <Link href="/" className="relative w-12 h-12">
                <Image
                  src="/images/logo.png"
                  alt="ThinkLuxe"
                  fill
                  className="object-contain"
                />
              </Link>
            )}
          </div>

          {/* Right - Hamburger menu button */}
          <div className="flex-1 flex justify-end">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-white hover:text-[#C9A962] transition-colors relative z-50"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5 w-7">
                <motion.span
                  animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="block h-0.5 w-full bg-current origin-center"
                />
                <motion.span
                  animate={mobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="block h-0.5 w-full bg-current"
                />
                <motion.span
                  animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="block h-0.5 w-full bg-current origin-center"
                />
              </div>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[35] bg-black"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#C9A962_1px,transparent_1px)] bg-[length:40px_40px]" />
            </div>

            <div className="flex flex-col items-center justify-center min-h-screen relative">
              <nav className="flex flex-col items-center gap-8">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-3xl md:text-4xl font-serif text-white hover:text-[#C9A962] transition-colors uppercase tracking-wide"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Contact info at bottom */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-12 left-0 right-0 text-center"
              >
                <p className="text-gray-500 text-sm">info@thinkluxe.com</p>
                <p className="text-gray-500 text-sm">416 555 1234</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

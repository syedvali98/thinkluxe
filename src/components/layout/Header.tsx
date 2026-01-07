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
  { name: "Kitchen", href: "/kitchen" },
  { name: "Aluminum Doors & Windows", href: "/aluminum-doors-windows" },
  { name: "Gallery", href: "/gallery" },
];

export default function Header() {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";
  const { isMenuOpen: mobileMenuOpen, setIsMenuOpen: setMobileMenuOpen } = useMenu();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { scrollY } = useScroll();

  // Track scroll for glass effect and hide/show on scroll direction
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);

      // Hide on scroll down, show on scroll up
      if (latest > lastScrollY && latest > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(latest);
    });

    return () => unsubscribe();
  }, [scrollY, lastScrollY]);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-40"
        initial={{ y: -100 }}
        animate={{ y: isVisible || mobileMenuOpen ? 0 : -100 }}
        transition={{ duration: 0.3 }}
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

          {/* Center - Logo placeholder (actual logo floats above) */}
          <div className="flex justify-center">
            <div className="w-14 h-14" />
          </div>

          {/* Right - Hamburger menu button */}
          <div className="flex-1 flex justify-end">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-white hover:text-[#C9A962] transition-colors relative z-50 cursor-pointer"
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

      {/* Floating logo for non-landing pages (hidden when menu open) */}
      {!isLandingPage && !mobileMenuOpen && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: isVisible ? 0 : -200 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/"
            className="fixed z-50 top-[44px] left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden">
              <Image
                src="/images/logo.png"
                alt="ThinkLuxe"
                fill
                className="object-contain"
              />
            </div>
          </Link>
        </motion.div>
      )}

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[35]"
          >
            {/* Full-screen logo background */}
            <div className="absolute inset-0 bg-black">
              <Image
                src="/images/logo.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            {/* Glass effect overlay */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

            <div className="flex flex-col items-center justify-center min-h-screen relative z-10">
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

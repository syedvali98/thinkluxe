"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AluminumDoorsWindowsPage() {
  return (
    <main className="bg-black min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-serif text-5xl md:text-7xl text-[#C9A962] mb-6">
            Coming Soon
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-md mx-auto">
            We&apos;re perfecting our aluminum collection. Doors & windows will be available soon.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 rounded-full border border-[#C9A962] text-[#C9A962] hover:bg-[#C9A962] hover:text-black transition-all duration-300 uppercase tracking-wider text-sm"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </main>
  );
}

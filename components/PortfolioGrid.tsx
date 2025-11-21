'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  href: string;
  span?: 'large' | 'medium' | 'small';
}

interface PortfolioGridProps {
  items: PortfolioItem[];
  showCategories?: boolean;
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ items, showCategories = true }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Asymmetric grid patterns based on span
  const getSpanClass = (span?: string) => {
    switch (span) {
      case 'large':
        return 'md:col-span-8 md:row-span-2';
      case 'medium':
        return 'md:col-span-4 md:row-span-2';
      case 'small':
      default:
        return 'md:col-span-4 md:row-span-1';
    }
  };

  const getHeightClass = (span?: string) => {
    switch (span) {
      case 'large':
        return 'h-[500px] md:h-[700px]';
      case 'medium':
        return 'h-[400px] md:h-[700px]';
      case 'small':
      default:
        return 'h-[350px] md:h-[340px]';
    }
  };

  return (
    <div ref={ref} className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 auto-rows-auto">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className={`group relative overflow-hidden rounded-2xl ${getSpanClass(item.span)} ${getHeightClass(item.span)}`}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <Link href={item.href} className="block w-full h-full">
              {/* Image */}
              <div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Gradient overlay - subtle by default, darker on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-700" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                {showCategories && (
                  <motion.div
                    className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ y: 20 }}
                  >
                    <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-brand-bronze-400/50 rounded-full text-xs uppercase tracking-subtitle text-white/90 font-medium">
                      {item.category}
                    </span>
                  </motion.div>
                )}

                <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-2 tracking-tight transform transition-transform duration-700 group-hover:translate-y-[-4px]">
                  {item.title}
                </h3>

                {/* Animated underline */}
                <div className="w-0 h-0.5 bg-gradient-to-r from-brand-bronze-400 to-brand-bronze-600 group-hover:w-24 transition-all duration-700 ease-out" />

                {/* View project indicator */}
                <div className="mt-6 flex items-center gap-2 text-white/80 text-sm font-light opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                  <span>View Project</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>

              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] group-hover:left-full transition-all duration-1000 ease-out" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioGrid;

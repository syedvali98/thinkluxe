'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface GoldenSeparatorProps {
  animated?: boolean;
  variant?: 'default' | 'double' | 'glow';
  className?: string;
}

const GoldenSeparator: React.FC<GoldenSeparatorProps> = ({
  animated = true,
  variant = 'default',
  className = ''
}) => {
  const baseClasses = "h-px bg-gradient-to-r from-transparent via-brand-bronze-500 to-transparent";
  const glowClasses = "h-px bg-gradient-to-r from-transparent via-brand-bronze-400 to-transparent shadow-[0_0_20px_rgba(201,168,88,0.6)]";

  const SeparatorLine = ({ delay = 0 }: { delay?: number }) => {
    if (animated) {
      return (
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          className={variant === 'glow' ? glowClasses : baseClasses}
        />
      );
    }
    return <div className={variant === 'glow' ? glowClasses : baseClasses} />;
  };

  if (variant === 'double') {
    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        <SeparatorLine delay={0} />
        <SeparatorLine delay={0.2} />
      </div>
    );
  }

  return (
    <div className={className}>
      <SeparatorLine />
    </div>
  );
};

export default GoldenSeparator;

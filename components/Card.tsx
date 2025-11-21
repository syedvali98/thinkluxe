import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  image: string;
  href?: string;
  icon?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, image, href, icon }) => {
  const content = (
    <div className="group card-glow overflow-hidden rounded-lg transition-all duration-300 hover-lift bg-white">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {icon && (
          <div className="absolute top-4 left-4 bg-white/90 p-3 rounded-lg">
            {icon}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-serif font-light text-brand-charcoal-900 mb-3 group-hover:text-brand-bronze-600 transition-colors">
          {title}
        </h3>
        <p className="text-brand-charcoal-500 font-light mb-4 line-clamp-3">
          {description}
        </p>
        {href && (
          <span className="text-brand-bronze-500 font-medium inline-flex items-center group-hover:text-brand-bronze-600 transition-colors">
            Learn More
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </span>
        )}
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
};

export default Card;

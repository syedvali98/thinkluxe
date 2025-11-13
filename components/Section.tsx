import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'dark' | 'gradient';
}

const Section: React.FC<SectionProps> = ({ children, className = '', id, background = 'white' }) => {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-luxury-charcoal-900 text-white',
    gradient: 'luxury-gradient text-white',
  };

  return (
    <section id={id} className={`section-padding ${backgroundClasses[background]} ${className}`}>
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
};

export default Section;

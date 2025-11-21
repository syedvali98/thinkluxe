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
    dark: 'bg-brand-charcoal-900 text-white',
    gradient: 'bg-gradient-to-br from-brand-charcoal-900 to-brand-charcoal-800 text-white',
  };

  return (
    <section id={id} className={`section-luxury ${backgroundClasses[background]} ${className}`}>
      <div className="container-luxury">
        {children}
      </div>
    </section>
  );
};

export default Section;

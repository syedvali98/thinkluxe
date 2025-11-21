import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
}) => {
  const baseClasses = 'btn-magnetic shine-effect relative overflow-hidden px-10 py-5 rounded-sm font-medium transition-all duration-500 inline-block text-center';

  const variantClasses = {
    primary: 'btn-luxury bg-brand-bronze-500 hover:bg-brand-bronze-600 text-white border-2 border-brand-bronze-400 hover:border-brand-bronze-500',
    secondary: 'bg-brand-charcoal-800 hover:bg-brand-charcoal-700 text-white shadow-lg hover:shadow-xl',
    outline: 'border-2 border-brand-bronze-500 text-brand-bronze-500 hover:bg-brand-bronze-500 hover:text-white',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;

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
  const baseClasses = 'px-8 py-3 rounded-md font-medium transition-all duration-300 inline-block text-center';

  const variantClasses = {
    primary: 'bg-luxury-gold-500 hover:bg-luxury-gold-600 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-luxury-charcoal-800 hover:bg-luxury-charcoal-700 text-white shadow-lg hover:shadow-xl',
    outline: 'border-2 border-luxury-gold-500 text-luxury-gold-500 hover:bg-luxury-gold-500 hover:text-white',
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

'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Exact navbar height: py-4 (16px top + 16px bottom = 32px) + logo height (24px mobile, 32px sm, 40px md)
  // Total: 56px mobile, 64px sm, 72px md
  return (
    <div className={isHomePage ? '' : 'pt-[56px] sm:pt-[64px] md:pt-[72px]'}>
      {children}
    </div>
  );
}

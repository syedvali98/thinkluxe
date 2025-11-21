'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import SolidNavbar from './SolidNavbar';

export default function NavbarWrapper() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return isHomePage ? <Navbar /> : <SolidNavbar />;
}

import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Think LUXE - Complete Luxurious Customisation Solutions",
  description: "Premier luxury custom cabinetry company specializing in high-end custom kitchens, sophisticated millwork, and elegant aluminum doors and windows in Toronto.",
  keywords: ["custom kitchens Toronto", "luxury cabinetry", "custom millwork", "aluminum doors windows", "custom wardrobes Toronto"],
  openGraph: {
    title: "Think LUXE - Complete Luxurious Customisation Solutions",
    description: "Premier luxury custom cabinetry company specializing in high-end custom kitchens, sophisticated millwork, and elegant aluminum doors and windows.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <body className="antialiased bg-brand-cream-100 text-brand-charcoal-600">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

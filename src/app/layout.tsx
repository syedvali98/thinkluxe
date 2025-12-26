import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import Providers from "@/components/Providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "ThinkLuxe | Luxury Tailored to the Elite",
    template: "%s | ThinkLuxe",
  },
  description: "Luxury aluminum doors, windows, custom kitchens and millwork. Tailored to the elite, now within reach.",
  keywords: ["aluminum doors", "aluminum windows", "custom kitchen", "millwork", "luxury", "Brampton"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-black`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

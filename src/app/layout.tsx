import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import Providers from "@/components/Providers";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

// Optimized font loading - only essential weights
const gilroy = localFont({
  src: [
    { path: "../../public/fonts/gilroy/Gilroy-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/gilroy/Gilroy-Medium.ttf", weight: "500", style: "normal" },
    { path: "../../public/fonts/gilroy/Gilroy-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../../public/fonts/gilroy/Gilroy-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-gilroy",
  display: "swap",
  preload: true,
});

const cormorant = localFont({
  src: "../../public/fonts/Cormorant_Garamond/CormorantGaramond-VariableFont_wght.ttf",
  variable: "--font-cormorant",
  weight: "300 700",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "ThinkLuxe | Luxury Tailored to the Elite",
    template: "%s | ThinkLuxe",
  },
  description: "Luxury aluminum doors, windows, custom kitchens and millwork. Tailored to the elite, now within reach.",
  keywords: ["aluminum doors", "aluminum windows", "custom kitchen", "millwork", "luxury", "Brampton"],
  icons: {
    icon: "/favicon.webp",
    shortcut: "/favicon.webp",
    apple: "/favicon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${gilroy.variable} ${cormorant.variable} font-sans antialiased bg-black`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <WhatsAppButton />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}

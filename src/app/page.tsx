"use client";

import { AnimatedLogo, HeroSection, ShowroomSection } from "@/components/home";

export default function Home() {
  return (
    <main className="bg-black">
      {/* Animated Logo - floats above everything, animates to navbar on scroll */}
      <AnimatedLogo />

      {/* Hero Section - Full screen with video hover */}
      <HeroSection />

      {/* Showroom Section with Carousel */}
      <ShowroomSection />

      {/* Spacer for footer visibility */}
      <div className="h-24" />
    </main>
  );
}

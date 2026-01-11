"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui";

// Window types data with placeholder content
const windowTypes = [
  {
    id: "tilt-turn",
    name: "Tilt and Turn",
    title: "Tilt and Turn Windows",
    image: "/images/windows/tilt-turn.jpg",
    description: [
      "Tilt and turn windows offer versatile ventilation options with a dual-action mechanism. They can tilt inward from the top for secure ventilation or swing fully inward like a door for easy cleaning and maximum airflow.",
      "Think Luxe's tilt and turn windows are engineered for superior energy efficiency, featuring multi-point locking systems and premium seals that provide excellent thermal and acoustic insulation.",
    ],
    features: [
      "Dual-action opening mechanism for versatile ventilation",
      "Multi-point locking system for enhanced security",
      "Easy interior cleaning with full inward swing",
      "Excellent thermal and acoustic insulation",
      "Child-safe tilt position for secure airflow",
    ],
  },
  {
    id: "casement",
    name: "Casement",
    title: "Casement Windows",
    image: "/images/windows/casement.jpg",
    description: [
      "Casement windows are hinged on the side and open outward like a door, providing unobstructed views and maximum ventilation. Their simple design makes them a timeless choice for both modern and traditional homes.",
      "Think Luxe's casement windows feature precision-engineered hardware and premium aluminum frames that ensure smooth operation and long-lasting durability in all weather conditions.",
    ],
    features: [
      "Full opening for maximum ventilation",
      "Unobstructed views with minimal frame profiles",
      "Excellent energy efficiency with tight seal when closed",
      "Easy operation with ergonomic handles",
      "Available in single or multi-panel configurations",
    ],
  },
  {
    id: "folding",
    name: "Folding",
    title: "Folding Windows",
    image: "/images/windows/folding.jpg",
    description: [
      "Folding windows, also known as bi-fold windows, create a seamless connection between indoor and outdoor spaces. Multiple panels fold and stack neatly to one side, opening up entire walls.",
      "Think Luxe's folding windows are designed with precision-engineered tracks and premium hardware for smooth, effortless operation, transforming your living spaces with the touch of a hand.",
    ],
    features: [
      "Creates wide, unobstructed openings",
      "Panels fold and stack compactly to one side",
      "Premium track system for smooth operation",
      "Perfect for connecting indoor and outdoor spaces",
      "Available in various panel configurations",
    ],
  },
  {
    id: "sliding",
    name: "Sliding",
    title: "Sliding Windows",
    image: "/images/windows/sliding.jpg",
    description: [
      "Sliding windows operate horizontally along a track, making them ideal for spaces where outward-opening windows aren't practical. They offer excellent ventilation while maintaining a sleek, contemporary aesthetic.",
      "Think Luxe's sliding windows feature precision-engineered rollers and tracks that ensure whisper-quiet, effortless operation for years of reliable use.",
    ],
    features: [
      "Space-saving horizontal operation",
      "Smooth, effortless sliding mechanism",
      "Ideal for hard-to-reach areas",
      "Low maintenance with easy cleaning access",
      "Available in two or three-panel designs",
    ],
  },
  {
    id: "single-hung",
    name: "Single-Hung",
    title: "Single-Hung Windows",
    image: "/images/windows/single-hung.jpg",
    description: [
      "Single-hung windows have a fixed upper sash and a lower sash that slides up and down to let in fresh air. They are a cost-effective solution with a classic look that complements vertical spaces and coordinates with homes of any architectural style.",
      "Think Luxe's single-hung windows are energy efficient, easy to operate, and made of the highest quality materials. From design to delivery, our exceptional service ensures you are satisfied every step of the way. The design of each window can be modified and adapted to suit your creativity and project specifications.",
    ],
    features: [
      "Meets stringent Energy Star, CSA and other certifications",
      "Uses high-quality vinyl or aluminum profiles that won't peel, crack or bend",
      "Hidden drain hole design ensures water drains quickly",
      "Space saving great option for patios and walkways",
      "Glass options available for added privacy, security and noise reduction",
    ],
  },
  {
    id: "double-hung",
    name: "Double-Hung",
    title: "Double-Hung Windows",
    image: "/images/windows/double-hung.jpg",
    description: [
      "Double-hung windows feature two operable sashes that move up and down, allowing for superior ventilation control. Both sashes can be tilted inward for easy cleaning from inside your home.",
      "Think Luxe's double-hung windows combine classic elegance with modern engineering, featuring smooth operation, excellent energy efficiency, and low-maintenance design.",
    ],
    features: [
      "Both upper and lower sashes are operable",
      "Tilt-in sashes for easy interior cleaning",
      "Superior ventilation with dual airflow options",
      "Classic design suits any architectural style",
      "Enhanced security with integrated locks",
    ],
  },
  {
    id: "bay",
    name: "Bay",
    title: "Bay Windows",
    image: "/images/windows/bay.jpg",
    description: [
      "Bay windows project outward from the wall, creating additional interior space and capturing light from multiple angles. They add architectural interest and create cozy nooks perfect for seating or display areas.",
      "Think Luxe's bay windows are custom-crafted with precision angles and premium aluminum frames, creating stunning focal points that enhance both interior comfort and exterior curb appeal.",
    ],
    features: [
      "Creates additional interior space and depth",
      "Captures light from multiple angles",
      "Adds architectural interest to any facade",
      "Custom angles available to suit your design",
      "Optional window seat configurations",
    ],
  },
  {
    id: "skylight",
    name: "Skylight",
    title: "Skylight Windows",
    image: "/images/windows/skylight.jpg",
    description: [
      "Skylight windows are installed in roofs or ceilings to bring natural light into spaces that conventional windows can't reach. They transform dark interiors and create a unique connection to the sky above.",
      "Think Luxe's skylight windows feature advanced glazing options and weatherproof construction, ensuring optimal light transmission while protecting against the elements and maintaining energy efficiency.",
    ],
    features: [
      "Brings natural light to interior spaces",
      "Fixed or operable ventilation options",
      "Advanced weatherproof construction",
      "Energy-efficient glazing options available",
      "Ideal for hallways, bathrooms, and attic spaces",
    ],
  },
];

// Product options data with placeholder content
const productOptions = [
  {
    id: "materials",
    name: "Materials",
    title: "Aluminum",
    image: "/images/windows/materials-aluminum.png",
    description:
      "Aluminum windows strike a balance between strength and weight, making them stronger and more durable, as well as providing greater security and protection. Aluminum windows can last up to 30 years with minimal maintenance, making them a smart long-term investment for your home.",
  },
  {
    id: "color",
    name: "Color",
    title: "Custom Colors",
    image: "/images/windows/colors.png",
    description:
      "Choose from an extensive palette of standard and custom colors to perfectly match your home's aesthetic. Our advanced powder coating technology ensures vibrant, long-lasting finishes that resist fading, chipping, and weathering for years to come.",
  },
  {
    id: "glass",
    name: "Glass",
    title: "Glass Options",
    image: "/images/windows/glass.png",
    description:
      "Select from a variety of glass options including double and triple glazing, Low-E coatings, tinted glass, and decorative patterns. Our energy-efficient glass solutions help reduce heating and cooling costs while providing excellent sound insulation.",
  },
  {
    id: "hardware",
    name: "Hardware",
    title: "Premium Hardware",
    image: "/images/windows/hardware.png",
    description:
      "Our windows feature premium-grade hardware including multi-point locking systems, smooth-operating handles, and durable hinges. Available in various finishes to complement your window frames and interior design preferences.",
  },
  {
    id: "grilles",
    name: "Grilles",
    title: "Decorative Grilles",
    image: "/images/windows/grilles.png",
    description:
      "Add character and style with our range of decorative grille patterns. Choose from classic colonial, prairie, diamond, and custom designs that can be applied between glass panes or on the surface for easy cleaning.",
  },
];

// Product series data with placeholder content
const productSeries = [
  {
    id: "series-75",
    tabName: "SERIES 75",
    seriesNumber: "75",
    productType: "ALUMINUM FOLDING DOOR",
    image: "/images/series/series-75.jpg",
    technicalParams: [
      {
        label: "Profile Thickness:",
        value: "6063-T5 grade aluminum alloy / thickness 2.3mm",
      },
      {
        label: "Heat insulation strip:",
        value: "PA66-GF25-S20 high-quality heat insulation strip",
      },
      {
        label: "Profile width:",
        value:
          "Frame thickness 75mm, Heat insulation strip 20mm; Fan thickness 75mm, Heat insulation strip 20mm;",
      },
      {
        label: "Visible surface:",
        value: "Frame 40mm / Sash center column 26mm / Opening sash 60mm, 80mm",
      },
      {
        label: "Dimensions:",
        value:
          "Panel width: 800mm-1000mm\nPanel height: 2000mm-2600mm\nMaximum fan weight: 130kg",
      },
      {
        label: "Glass specification:",
        value:
          "5mm+27A+5mm / 5mm+19A+5mm double or triple-layer tempered insulated glass",
      },
    ],
    basicParams: [
      {
        icon: "/images/icons/thermal.png",
        label: "Thermal insulation coefficient:",
        value: "Uw2.5W/m2K",
      },
      {
        icon: "/images/icons/wind.png",
        label: "Wind pressure resistance coefficient:",
        value: ">2500Pa",
      },
      {
        icon: "/images/icons/water.png",
        label: "Water tightness coefficient:",
        value: ">500Pa",
      },
      {
        icon: "/images/icons/air.png",
        label: "Air tightness coefficient:",
        value: "Level 5",
      },
      {
        icon: "/images/icons/sound.png",
        label: "Sound insulation coefficient:",
        value: "Rw up to 30dB",
      },
    ],
  },
  {
    id: "series-88",
    tabName: "SERIES 88",
    seriesNumber: "88",
    productType: "ALUMINUM SLIDING DOOR",
    image: "/images/series/series-88.jpg",
    technicalParams: [
      {
        label: "Profile Thickness:",
        value: "6063-T5 grade aluminum alloy / thickness 2.5mm",
      },
      {
        label: "Heat insulation strip:",
        value: "PA66-GF25-S20 high-quality heat insulation strip",
      },
      {
        label: "Profile width:",
        value:
          "Frame thickness 88mm, Heat insulation strip 24mm; Fan thickness 88mm, Heat insulation strip 24mm;",
      },
      {
        label: "Visible surface:",
        value: "Frame 45mm / Sash center column 30mm / Opening sash 65mm, 85mm",
      },
      {
        label: "Dimensions:",
        value:
          "Panel width: 900mm-1200mm\nPanel height: 2200mm-2800mm\nMaximum fan weight: 150kg",
      },
      {
        label: "Glass specification:",
        value:
          "6mm+27A+6mm / 6mm+19A+6mm double or triple-layer tempered insulated glass",
      },
    ],
    basicParams: [
      {
        icon: "/images/icons/thermal.png",
        label: "Thermal insulation coefficient:",
        value: "Uw2.2W/m2K",
      },
      {
        icon: "/images/icons/wind.png",
        label: "Wind pressure resistance coefficient:",
        value: ">3000Pa",
      },
      {
        icon: "/images/icons/water.png",
        label: "Water tightness coefficient:",
        value: ">600Pa",
      },
      {
        icon: "/images/icons/air.png",
        label: "Air tightness coefficient:",
        value: "Level 6",
      },
      {
        icon: "/images/icons/sound.png",
        label: "Sound insulation coefficient:",
        value: "Rw up to 35dB",
      },
    ],
  },
  {
    id: "series-91",
    tabName: "SERIES 91",
    seriesNumber: "91",
    productType: "ALUMINUM CASEMENT WINDOW",
    image: "/images/series/series-91.jpg",
    technicalParams: [
      {
        label: "Profile Thickness:",
        value: "6063-T5 grade aluminum alloy / thickness 2.0mm",
      },
      {
        label: "Heat insulation strip:",
        value: "PA66-GF25-S20 high-quality heat insulation strip",
      },
      {
        label: "Profile width:",
        value:
          "Frame thickness 91mm, Heat insulation strip 26mm; Fan thickness 91mm, Heat insulation strip 26mm;",
      },
      {
        label: "Visible surface:",
        value: "Frame 50mm / Sash center column 32mm / Opening sash 70mm, 90mm",
      },
      {
        label: "Dimensions:",
        value:
          "Panel width: 600mm-900mm\nPanel height: 1200mm-1800mm\nMaximum fan weight: 80kg",
      },
      {
        label: "Glass specification:",
        value:
          "5mm+20A+5mm / 5mm+16A+5mm double-layer tempered insulated glass",
      },
    ],
    basicParams: [
      {
        icon: "/images/icons/thermal.png",
        label: "Thermal insulation coefficient:",
        value: "Uw2.0W/m2K",
      },
      {
        icon: "/images/icons/wind.png",
        label: "Wind pressure resistance coefficient:",
        value: ">3500Pa",
      },
      {
        icon: "/images/icons/water.png",
        label: "Water tightness coefficient:",
        value: ">700Pa",
      },
      {
        icon: "/images/icons/air.png",
        label: "Air tightness coefficient:",
        value: "Level 7",
      },
      {
        icon: "/images/icons/sound.png",
        label: "Sound insulation coefficient:",
        value: "Rw up to 38dB",
      },
    ],
  },
  {
    id: "series-110",
    tabName: "SERIES 110",
    seriesNumber: "110",
    productType: "ALUMINUM TILT & TURN WINDOW",
    image: "/images/series/series-110.jpg",
    technicalParams: [
      {
        label: "Profile Thickness:",
        value: "6063-T5 grade aluminum alloy / thickness 2.8mm",
      },
      {
        label: "Heat insulation strip:",
        value: "PA66-GF25-S20 premium heat insulation strip",
      },
      {
        label: "Profile width:",
        value:
          "Frame thickness 110mm, Heat insulation strip 32mm; Fan thickness 110mm, Heat insulation strip 32mm;",
      },
      {
        label: "Visible surface:",
        value: "Frame 55mm / Sash center column 35mm / Opening sash 75mm, 95mm",
      },
      {
        label: "Dimensions:",
        value:
          "Panel width: 700mm-1100mm\nPanel height: 1400mm-2200mm\nMaximum fan weight: 120kg",
      },
      {
        label: "Glass specification:",
        value:
          "6mm+24A+6mm / 6mm+20A+6mm triple-layer tempered insulated glass",
      },
    ],
    basicParams: [
      {
        icon: "/images/icons/thermal.png",
        label: "Thermal insulation coefficient:",
        value: "Uw1.8W/m2K",
      },
      {
        icon: "/images/icons/wind.png",
        label: "Wind pressure resistance coefficient:",
        value: ">4000Pa",
      },
      {
        icon: "/images/icons/water.png",
        label: "Water tightness coefficient:",
        value: ">800Pa",
      },
      {
        icon: "/images/icons/air.png",
        label: "Air tightness coefficient:",
        value: "Level 8",
      },
      {
        icon: "/images/icons/sound.png",
        label: "Sound insulation coefficient:",
        value: "Rw up to 42dB",
      },
    ],
  },
  {
    id: "series-170",
    tabName: "SERIES 170",
    seriesNumber: "170",
    productType: "ALUMINUM CURTAIN WALL",
    image: "/images/series/series-170.jpg",
    technicalParams: [
      {
        label: "Profile Thickness:",
        value: "6063-T5 grade aluminum alloy / thickness 3.0mm",
      },
      {
        label: "Heat insulation strip:",
        value: "PA66-GF25-S20 ultra-premium heat insulation strip",
      },
      {
        label: "Profile width:",
        value:
          "Frame thickness 170mm, Heat insulation strip 45mm; Fan thickness 170mm, Heat insulation strip 45mm;",
      },
      {
        label: "Visible surface:",
        value: "Frame 60mm / Sash center column 40mm / Opening sash 80mm, 100mm",
      },
      {
        label: "Dimensions:",
        value:
          "Panel width: 1000mm-1500mm\nPanel height: 2500mm-4000mm\nMaximum fan weight: 200kg",
      },
      {
        label: "Glass specification:",
        value:
          "8mm+27A+8mm / 8mm+24A+8mm triple-layer tempered insulated glass",
      },
    ],
    basicParams: [
      {
        icon: "/images/icons/thermal.png",
        label: "Thermal insulation coefficient:",
        value: "Uw1.5W/m2K",
      },
      {
        icon: "/images/icons/wind.png",
        label: "Wind pressure resistance coefficient:",
        value: ">5000Pa",
      },
      {
        icon: "/images/icons/water.png",
        label: "Water tightness coefficient:",
        value: ">1000Pa",
      },
      {
        icon: "/images/icons/air.png",
        label: "Air tightness coefficient:",
        value: "Level 8",
      },
      {
        icon: "/images/icons/sound.png",
        label: "Sound insulation coefficient:",
        value: "Rw up to 45dB",
      },
    ],
  },
];

// Process steps data for aluminum windows
const processSteps = [
  {
    title: "Consultation & Assessment",
    description:
      "We begin with a comprehensive consultation to understand your project requirements. Our experts assess your space, discuss your aesthetic preferences, energy efficiency needs, and budget to recommend the perfect aluminum window solutions for your home.",
  },
  {
    title: "Custom Design & Engineering",
    description:
      "Our engineering team creates detailed specifications and 3D visualizations of your custom windows. We work with you to finalize dimensions, styles, glass options, and finishes, ensuring every detail meets your exact requirements.",
  },
  {
    title: "Precision Manufacturing",
    description:
      "Your windows are manufactured in our state-of-the-art facility using premium aluminum profiles and components. Each unit undergoes rigorous quality control testing for thermal performance, air tightness, and structural integrity.",
  },
  {
    title: "Professional Installation",
    description:
      "Our certified installation team ensures flawless fitting with precision and care. We handle everything from removal of old windows to final sealing and finishing, leaving your space clean and your new windows performing perfectly.",
  },
];

export default function AluminumWindowsPage() {
  const [selectedTab, setSelectedTab] = useState(4); // Default to Single-Hung (index 4)
  const [selectedOption, setSelectedOption] = useState(0); // Default to Materials
  const [selectedSeries, setSelectedSeries] = useState(0); // Default to Series 75

  // Our Process section state
  const [hoveredStep, setHoveredStep] = useState(0);
  const [selectedStep, setSelectedStep] = useState(0);
  const [ballAngle, setBallAngle] = useState(-90);
  const [isHovering, setIsHovering] = useState(false);
  const circleRef = useRef<HTMLDivElement>(null);

  const displayedStep = isHovering ? hoveredStep : selectedStep;

  // Get angle for a step
  const getStepAngle = (step: number) => {
    switch (step) {
      case 0: return -90;
      case 1: return 0;
      case 2: return 90;
      case 3: return 180;
      default: return -90;
    }
  };

  // Mouse tracking for interactive circle
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!circleRef.current) return;
    const rect = circleRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
    const degrees = angle * (180 / Math.PI);
    setBallAngle(degrees);

    if (degrees >= -135 && degrees < -45) setHoveredStep(0);
    else if (degrees >= -45 && degrees < 45) setHoveredStep(1);
    else if (degrees >= 45 && degrees < 135) setHoveredStep(2);
    else setHoveredStep(3);
  };

  const handleClick = () => setSelectedStep(hoveredStep);

  const handleMouseLeave = () => {
    setIsHovering(false);
    setBallAngle(getStepAngle(selectedStep));
  };

  const circleRadius = 140;
  const ballX = Math.cos((ballAngle * Math.PI) / 180) * circleRadius;
  const ballY = Math.sin((ballAngle * Math.PI) / 180) * circleRadius;

  return (
    <main className="bg-black">
      {/* Window Types Section */}
      <section className="py-24 md:py-32">
        <Container>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#C9A962] italic mb-4">
              Aluminum Windows
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              Browse through a variety of window styles to find the best one for your home.
            </p>
          </motion.div>

          {/* Tab Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-[#0a0a0a] border border-[#C9A962]/20 overflow-x-auto max-w-full scrollbar-hide">
                {windowTypes.map((type, index) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedTab(index)}
                    className={`px-5 py-2 rounded-full text-sm whitespace-nowrap transition-all duration-300 ${
                      selectedTab === index
                        ? "border border-[#C9A962] text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {type.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content Area */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              {/* Left - Image */}
              <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden">
                <Image
                  src={windowTypes[selectedTab].image}
                  alt={windowTypes[selectedTab].title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right - Content Card */}
              <div className="relative p-[1px] rounded-[40px] bg-gradient-to-br from-[#C9A962] via-[#C9A962]/50 to-[#333333]">
                <div className="bg-[#0a0a0a] rounded-[40px] p-8 md:p-10 lg:p-12 h-full flex flex-col justify-center">
                  <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#C9A962] italic mb-6">
                    {windowTypes[selectedTab].title}
                  </h2>

                  {/* Description paragraphs */}
                  <div className="space-y-4 mb-8">
                    {windowTypes[selectedTab].description.map((para, index) => (
                      <p key={index} className="text-gray-400 text-sm md:text-base leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Features list */}
                  <ul className="space-y-3">
                    {windowTypes[selectedTab].features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-400 text-sm md:text-base">
                        <span className="text-[#C9A962] mt-1.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </Container>
      </section>

      {/* Product Options Section */}
      <section className="pb-24 md:pb-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#f5f5f0] rounded-[60px] p-8 md:p-12 lg:p-16"
          >
            {/* Header */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#C9A962] italic text-center mb-10">
              Product Options
            </h2>

            {/* Tab Selector */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-[#e8e5dc]">
                {productOptions.map((option, index) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedOption(index)}
                    className={`px-5 py-2 rounded-full text-sm whitespace-nowrap transition-all duration-300 ${
                      selectedOption === index
                        ? "border border-[#C9A962] text-[#C9A962] bg-[#f5f5f0]"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {option.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedOption}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
              >
                {/* Left - Image */}
                <div className="flex justify-center">
                  <div className="relative w-full max-w-[400px] aspect-square">
                    <Image
                      src={productOptions[selectedOption].image}
                      alt={productOptions[selectedOption].title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Right - Text Content */}
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl text-[#C9A962] italic mb-4">
                    {productOptions[selectedOption].title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {productOptions[selectedOption].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>

      {/* Product Series Section */}
      <section className="py-24 md:py-32">
        <Container>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            {/* Pill Badge */}
            <span className="inline-block px-4 py-1.5 rounded-full border border-gray-600 text-gray-400 text-xs uppercase tracking-wider mb-6">
              Series
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#C9A962] italic leading-relaxed max-w-3xl mx-auto">
              Browse Through our Aluminum Product Series To Find The Best One For Your home.
            </h2>
          </motion.div>

          {/* Tab Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-[#0a0a0a] border border-[#C9A962]/20 overflow-x-auto max-w-full scrollbar-hide">
                {productSeries.map((series, index) => (
                  <button
                    key={series.id}
                    onClick={() => setSelectedSeries(index)}
                    className={`px-5 py-2 rounded-full text-sm whitespace-nowrap transition-all duration-300 ${
                      selectedSeries === index
                        ? "border border-[#C9A962] text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {series.tabName}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content Area */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSeries}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Hero Image */}
              <div className="relative aspect-[16/9] rounded-[40px] overflow-hidden mb-12">
                <Image
                  src={productSeries[selectedSeries].image}
                  alt={productSeries[selectedSeries].productType}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Product Title & Technical Parameters */}
              <div className="mb-16">
                {/* Title Area */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-6xl md:text-7xl lg:text-8xl font-bold text-white">
                      {productSeries[selectedSeries].seriesNumber}
                    </span>
                    <span className="text-sm text-gray-400 uppercase tracking-wider">
                      Series
                    </span>
                  </div>
                  <p className="text-[#C9A962] uppercase tracking-wider text-sm">
                    {productSeries[selectedSeries].productType}
                  </p>
                </div>

                {/* Technical Parameters Heading */}
                <h3 className="text-white text-lg font-medium mb-6">
                  Technical Parameters:
                </h3>

                {/* Technical Parameters Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
                  {productSeries[selectedSeries].technicalParams.map((param, index) => (
                    <div key={index}>
                      <p className="text-[#C9A962] text-sm mb-1">{param.label}</p>
                      <p className="text-gray-400 text-sm whitespace-pre-line">{param.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Basic Parameters Section */}
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-white italic mb-8">
                  Basic parameters:
                </h3>

                {/* Parameter Cards */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                  {productSeries[selectedSeries].basicParams.map((param, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="relative w-12 h-12 mb-3">
                        <Image
                          src={param.icon}
                          alt=""
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p className="text-gray-500 text-xs mb-1 leading-tight">
                        {param.label}
                      </p>
                      <p className="text-[#C9A962] text-sm font-medium">
                        {param.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </Container>
      </section>

      {/* Our Process Section */}
      <section className="bg-black py-24 md:py-32">
        <Container>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {/* Pill Title */}
            <div className="inline-block mb-6">
              <span className="relative px-6 py-2 rounded-full text-[#C9A962] text-sm uppercase tracking-wider shadow-[0_0_15px_rgba(201,169,98,0.3)] bg-black">
                <span className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-br from-[#C9A962] to-gray-600">
                  <span className="block w-full h-full rounded-full bg-black" />
                </span>
                <span className="relative">Our Process</span>
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#C9A962] italic">
              From Consultation to Installation
            </h2>
          </motion.div>

          {/* Interactive Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative p-[1px] rounded-[40px] bg-gradient-to-r from-[#C9A962] via-[#C9A962]/50 to-[#333333]">
              <div className="bg-[#0a0a0a] rounded-[40px] overflow-hidden">
                <div className="grid md:grid-cols-2 min-h-[500px]">
                  {/* Left Content - Step Details */}
                  <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={displayedStep}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-[#C9A962] text-xl md:text-2xl uppercase tracking-wider font-medium mb-6">
                          {processSteps[displayedStep].title}
                        </h3>
                        <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-12">
                          {processSteps[displayedStep].description}
                        </p>
                      </motion.div>
                    </AnimatePresence>

                    {/* Step Counter */}
                    <div className="mt-auto">
                      <span className="text-gray-600 text-sm uppercase tracking-[0.3em]">
                        Step {displayedStep + 1}
                      </span>
                    </div>
                  </div>

                  {/* Right Side - Interactive Circle */}
                  <div
                    className="relative flex items-center justify-center p-8 md:p-12"
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleClick}
                  >
                    {/* Step Labels */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        className={`absolute top-8 left-1/2 -translate-x-1/2 text-xs md:text-sm uppercase tracking-wider transition-colors duration-300 text-center max-w-[140px] ${
                          displayedStep === 0 ? "text-[#C9A962]" : "text-gray-600"
                        }`}
                      >
                        Consultation & Assessment
                      </span>
                      <span
                        className={`absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-xs md:text-sm uppercase tracking-wider transition-colors duration-300 text-center max-w-[100px] ${
                          displayedStep === 1 ? "text-[#C9A962]" : "text-gray-600"
                        }`}
                      >
                        Custom Design & Engineering
                      </span>
                      <span
                        className={`absolute bottom-8 left-1/2 -translate-x-1/2 text-xs md:text-sm uppercase tracking-wider transition-colors duration-300 text-center max-w-[140px] ${
                          displayedStep === 2 ? "text-[#C9A962]" : "text-gray-600"
                        }`}
                      >
                        Precision Manufacturing
                      </span>
                      <span
                        className={`absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-xs md:text-sm uppercase tracking-wider transition-colors duration-300 text-center max-w-[100px] ${
                          displayedStep === 3 ? "text-[#C9A962]" : "text-gray-600"
                        }`}
                      >
                        Professional Installation
                      </span>
                    </div>

                    {/* Interactive Circle Container */}
                    <div
                      ref={circleRef}
                      className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px]"
                    >
                      {/* Circle Border with gradient */}
                      <div
                        className="absolute inset-0 rounded-full transition-all duration-100"
                        style={{
                          background: `conic-gradient(
                            from ${ballAngle + 80}deg,
                            #C9A962 0deg,
                            #C9A962 30deg,
                            #8B7A3D 60deg,
                            #4a4a4a 120deg,
                            #333333 180deg,
                            #4a4a4a 240deg,
                            #8B7A3D 300deg,
                            #C9A962 330deg,
                            #C9A962 360deg
                          )`,
                          padding: "2px",
                        }}
                      >
                        <div className="w-full h-full rounded-full bg-[#0a0a0a]" />
                      </div>

                      {/* Center Logo */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                          src="/images/logo.png"
                          alt="ThinkLuxe"
                          width={120}
                          height={120}
                          className="object-contain opacity-80"
                        />
                      </div>

                      {/* Following Ball */}
                      <motion.div
                        className="absolute w-4 h-4 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                        style={{
                          left: "50%",
                          top: "50%",
                          marginLeft: "-8px",
                          marginTop: "-8px",
                        }}
                        animate={{ x: ballX, y: ballY }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}

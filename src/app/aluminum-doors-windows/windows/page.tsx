"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui";
import AnimatedPill from "@/components/ui/AnimatedPill";

// Color swatches for product options (# encoded as %23 for URLs)
const colorSwatches = [
  "/images/colors/%232b0600.png",
  "/images/colors/%23312623.png",
  "/images/colors/%23370E00.png",
  "/images/colors/%23430c01.png",
  "/images/colors/%234e5051.png",
  "/images/colors/%235d3b37.png",
  "/images/colors/%23681A00.png",
  "/images/colors/%23686e70.png",
  "/images/colors/%23696e6e.png",
  "/images/colors/%2369594a.png",
  "/images/colors/%23cad0d7.png",
  "/images/colors/%23f5d7bf.png",
  "/images/colors/black.png",
];

// Window types data with nested product options
const windowTypes = [
  {
    id: "single-hung",
    name: "Single-Hung",
    title: "Single-Hung Windows",
    image: "/images/single-hung.png",
    description: [
      "Single-hung windows have a fixed upper sash and a lower sash that slides up and down to let in fresh air. They are a cost-effective solution with a classic look that complements vertical spaces and coordinates with homes of any architectural style.",
      "Think Luxe's single-hung windows are energy efficient, easy to operate, and made of the highest quality materials. From design to delivery, our exceptional service ensures you are satisfied every step of the way. The design of each window can be modified and adapted to suit your creativity and project specifications.",
      "Meets stringent Energy Star, CSA and other certifications. Uses high-quality vinyl or aluminum profiles that won't peel, crack or bend. Hidden drain hole design ensures water drains quickly. Space saving great option for patios and walkways. Glass options available for added privacy, security and noise reduction.",
    ],
    productOptions: [
      {
        id: "materials",
        name: "Materials",
        title: "Aluminum",
        image: "/images/aluminum-product.png",
        description:
          "Aluminum doors strike a balance between strength and weight, making them stronger and more durable, as well as providing greater security and protection. Aluminum doors can last up to 30 years.",
      },
      {
        id: "color",
        name: "Color",
        title: "Custom Interior/Exterior Colors",
        images: colorSwatches,
        description:
          "Our products feature reliable, low-maintenance interior and exterior finishes that resist fading, peeling and chalking, even in a variety of extreme weather conditions. We also offer custom color options to meet your unique project requirements.",
      },
      {
        id: "glass",
        name: "Glass",
        title: "Glass Options",
        image: "/images/glass-product-1.png",
        description:
          "A variety of glass color and type options allow you to add unique details to your windows and doors while balancing the privacy and natural light you prefer and delivering superior quality and thermal performance.",
      },
      {
        id: "hardware",
        name: "Hardware",
        title: "Hardware Options",
        image: "/images/hardware-product-1.png",
        description:
          "Engineered to be both durable and beautiful, our hardware is available in different style design options with finishes that complement our products' hardware for a consistent look.",
      },
      {
        id: "grilles",
        name: "Grilles",
        title: "Custom Grille Styles",
        image: "/images/grille-product-1.png",
        description:
          "Grilles come in a variety of patterns and designs. The intentional use of grilles can further enhance your home's specific style or architectural design.",
      },
    ],
  },
  {
    id: "double-hung",
    name: "Double-Hung",
    title: "Double-Hung Windows",
    image: "/images/double-hung.png",
    description: [
      "Double-hung windows are the most popular type of window. Consisting of two sashes that can move up and down independently, they provide better ventilation. Think Luxe double-hung windows feature interlocking devices, sealing strips, and high-quality sash locks that combine beauty and performance.",
      "Take advantage of the various customization options Think Luxe offers to create the perfect double-hung window that's unique to your space.",
      "Provides the option to open from the top or bottom. Meets stringent Energy Star, CSA and other certifications. Maximize your home's ability to ventilate effectively. Uses high-quality vinyl or aluminum profiles that won't peel, crack or bend. Provide high-performance energy options to increase energy efficiency. High-quality components allow for simple, convenient operation.",
    ],
    productOptions: [
      {
        id: "materials",
        name: "Materials",
        title: "Aluminum",
        image: "/images/aluminum-product.png",
        description:
          "Aluminum doors strike a balance between strength and weight, making them stronger and more durable, as well as providing greater security and protection. Aluminum doors can last up to 30 years.",
      },
      {
        id: "color",
        name: "Color",
        title: "Custom Interior/Exterior Colors",
        images: colorSwatches,
        description:
          "Our products feature reliable, low-maintenance interior and exterior finishes that resist fading, peeling and chalking, even in a variety of extreme weather conditions. We also offer custom color options to meet your unique project requirements.",
      },
      {
        id: "glass",
        name: "Glass",
        title: "Glass Options",
        image: "/images/glass-product-1.png",
        description:
          "A variety of glass color and type options allow you to add unique details to your windows and doors while balancing the privacy and natural light you prefer and delivering superior quality and thermal performance.",
      },
      {
        id: "hardware",
        name: "Hardware",
        title: "Hardware Options",
        image: "/images/hardware-product-4.png",
        description:
          "Engineered to be both durable and beautiful, our hardware is available in different style design options with finishes that complement our products' hardware for a consistent look.",
      },
      {
        id: "screens",
        name: "Screens",
        title: "Screens Options",
        image: "/images/screens-product-1.png",
        description:
          "Think Luxe's screen options are made of durable, low-maintenance aluminum to provide better airflow and more natural light while keeping insects out.",
      },
      {
        id: "blinds",
        name: "Blinds",
        title: "Blinds Options",
        image: "/images/blinds-product-1.png",
        description:
          "Our built-in blind options allow the blinds to be tilted and raised via a magnetic handle, wall switch, or remote control and are permanently sealed inside double-glazed windows. The louver design is hidden between insulated glass panels, allowing for minimal cleaning and no fear of damage, making it safer for your children and pets.",
      },
    ],
  },
  {
    id: "casement",
    name: "Casement",
    title: "Casement Windows",
    image: "/images/casement.png",
    description: [
      "Casement windows are side-hinged and open outward. They are the only type of window that opens completely, providing excellent ventilation and unobstructed views for nearly any residential or commercial property. Our casement windows have insulated frames and standard Low-E high-performance double glazing. They are custom-made to fit nearly any opening shape or size.",
      "Certified for various performance levels by organizations such as NFRC, CSA and Energy Star. Multi-point locking system tightly seals the window sash, providing excellent anti-theft. High-quality hardware provides smooth and easy operation for opening and closing windows. Unique multi-chamber, fusion-welded sash and frame design ensure durability. Customizable in a variety of colors, sizes, finishes. Casement windows can be easily combined with other window styles to create eye-catching effects.",
    ],
    productOptions: [
      {
        id: "materials",
        name: "Materials",
        title: "Aluminum",
        image: "/images/aluminum-product.png",
        description:
          "Aluminum doors strike a balance between strength and weight, making them stronger and more durable, as well as providing greater security and protection. Aluminum doors can last up to 30 years.",
      },
      {
        id: "color",
        name: "Color",
        title: "Custom Interior/Exterior Colors",
        images: colorSwatches,
        description:
          "Our products feature reliable, low-maintenance interior and exterior finishes that resist fading, peeling and chalking, even in a variety of extreme weather conditions. We also offer custom color options to meet your unique project requirements.",
      },
      {
        id: "glass",
        name: "Glass",
        title: "Glass Options",
        image: "/images/glass-product-1.png",
        description:
          "A variety of glass color and type options allow you to add unique details to your windows and doors while balancing the privacy and natural light you prefer and delivering superior quality and thermal performance.",
      },
      {
        id: "hardware",
        name: "Hardware",
        title: "Hardware Options",
        image: "/images/hardware-product-2.png",
        description:
          "Engineered to be both durable and beautiful, our hardware is available in different style design options with finishes that complement our products' hardware for a consistent look.",
      },
      {
        id: "screens",
        name: "Screens",
        title: "Screens Options",
        image: "/images/screens-product-1.png",
        description:
          "Think Luxe's screen options are made of durable, low-maintenance aluminum to provide better airflow and more natural light while keeping insects out.",
      },
      {
        id: "blinds",
        name: "Blinds",
        title: "Blinds Options",
        image: "/images/blinds-product-1.png",
        description:
          "Our built-in blind options allow the blinds to be tilted and raised via a magnetic handle, wall switch, or remote control and are permanently sealed inside double-glazed windows. The louver design is hidden between insulated glass panels, allowing for minimal cleaning and no fear of damage, making it safer for your children and pets.",
      },
    ],
  },
  {
    id: "folding",
    name: "Folding",
    title: "Folding Windows",
    image: "/images/folding.jpeg",
    description: [
      "Designed for easy folding, Think Luxe's windows can be folded sideways or up and down to create a spacious opening. Our folding windows have passed various strict industry performance certifications, providing advanced weather protection and energy efficiency to ensure year-round comfort in any climate.",
      "Each of our window sashes can be completely customized to your needs, opening inwards or outwards and folding to the left or right. The configuration can be split down the middle or folded in one direction to suit you and your space.",
      "Offers a wide view through large glass and oversized dimensions. Security and anti-theft hardware. Insulated weatherstripping and perimeter sealing. Multiple configuration design options.",
    ],
    productOptions: [
      {
        id: "materials",
        name: "Materials",
        title: "Aluminum",
        image: "/images/aluminum-product.png",
        description:
          "Aluminum doors strike a balance between strength and weight, making them stronger and more durable, as well as providing greater security and protection. Aluminum doors can last up to 30 years.",
      },
      {
        id: "color",
        name: "Color",
        title: "Custom Interior/Exterior Colors",
        images: colorSwatches,
        description:
          "Our products feature reliable, low-maintenance interior and exterior finishes that resist fading, peeling and chalking, even in a variety of extreme weather conditions. We also offer custom color options to meet your unique project requirements.",
      },
      {
        id: "glass",
        name: "Glass",
        title: "Glass Options",
        image: "/images/glass-product-1.png",
        description:
          "A variety of glass color and type options allow you to add unique details to your windows and doors while balancing the privacy and natural light you prefer and delivering superior quality and thermal performance.",
      },
      {
        id: "hardware",
        name: "Hardware",
        title: "Hardware Options",
        image: "/images/hardware-product-2.png",
        description:
          "Engineered to be both durable and beautiful, our hardware is available in different style design options with finishes that complement our products' hardware for a consistent look.",
      },
      {
        id: "screens",
        name: "Screens",
        title: "Screens Options",
        image: "/images/screens-product-1.png",
        description:
          "Think Luxe's screen options are made of durable, low-maintenance aluminum to provide better airflow and more natural light while keeping insects out.",
      },
      {
        id: "blinds",
        name: "Blinds",
        title: "Blinds Options",
        image: "/images/blinds-product-1.png",
        description:
          "Our built-in blind options allow the blinds to be tilted and raised via a magnetic handle, wall switch, or remote control and are permanently sealed inside double-glazed windows. The louver design is hidden between insulated glass panels, allowing for minimal cleaning and no fear of damage, making it safer for your children and pets.",
      },
    ],
  },
  {
    id: "sliding",
    name: "Sliding",
    title: "Sliding Windows",
    image: "/images/sliding.jpeg",
    description: [
      "Sliding windows are ideal for installation in kitchen sinks or in any room where ventilation is essential. Our sliding windows feature durable, stylish, modern frames while providing optimal views and plenty of daylight. These windows are also energy-efficient and are available in a variety of colors, glass, and mesh options to suit different preferences and requirements.",
      "Available in two-, three-, or multi-panel sliding combinations. Energy-efficient design for excellent energy performance in any climate. Hidden drain hole design ensures water drains quickly. High-quality ball bearings ensure very quiet movement. Unique multi-chamber structure with excellent thermal and sound insulation performance. Selectable screen options let air in while keeping pests out. Customized according to your size, needs, lifestyle and budget. Almost limitless options to fit perfectly into any aesthetic style.",
    ],
    productOptions: [
      {
        id: "materials",
        name: "Materials",
        title: "Aluminum",
        image: "/images/aluminum-product.png",
        description:
          "Aluminum doors strike a balance between strength and weight, making them stronger and more durable, as well as providing greater security and protection. Aluminum doors can last up to 30 years.",
      },
      {
        id: "color",
        name: "Color",
        title: "Custom Interior/Exterior Colors",
        images: colorSwatches,
        description:
          "Our products feature reliable, low-maintenance interior and exterior finishes that resist fading, peeling and chalking, even in a variety of extreme weather conditions. We also offer custom color options to meet your unique project requirements.",
      },
      {
        id: "glass",
        name: "Glass",
        title: "Glass Options",
        image: "/images/glass-product-1.png",
        description:
          "A variety of glass color and type options allow you to add unique details to your windows and doors while balancing the privacy and natural light you prefer and delivering superior quality and thermal performance.",
      },
      {
        id: "hardware",
        name: "Hardware",
        title: "Hardware Options",
        image: "/images/hardware-product-3.png",
        description:
          "Engineered to be both durable and beautiful, our hardware is available in different style design options with finishes that complement our products' hardware for a consistent look.",
      },
      {
        id: "screens",
        name: "Screens",
        title: "Screens Options",
        image: "/images/screens-product-1.png",
        description:
          "Think Luxe's screen options are made of durable, low-maintenance aluminum to provide better airflow and more natural light while keeping insects out.",
      },
      {
        id: "blinds",
        name: "Blinds",
        title: "Blinds Options",
        image: "/images/blinds-product-1.png",
        description:
          "Our built-in blind options allow the blinds to be tilted and raised via a magnetic handle, wall switch, or remote control and are permanently sealed inside double-glazed windows. The louver design is hidden between insulated glass panels, allowing for minimal cleaning and no fear of damage, making it safer for your children and pets.",
      },
    ],
  },
  {
    id: "tilt-turn",
    name: "Tilt and Turn",
    title: "Tilt And Turn Windows",
    image: "/images/tilt-and-turn.jpeg",
    description: [
      "Tilt-and-turn windows can be opened multiple ways with the turn of a handle. They open inward like casement windows and can also tilt inward to let in fresh air. They are ideal for homeowners, architects, and developers looking for a versatile, energy-saving solution.",
      "Think Luxe's tilt-and-turn windows are equipped with high-quality hardware, which enables the dual functionality of the window as well as secure locking with a single handle. With our windows, you can enjoy the best features of casement, fixed and tilt designs with elegance and simplicity.",
      "The compact design, refined bevels, and slopes give the profile a modern and elegant look. Extremely durable and modern gasket ensures windows are tight and reliable. High-quality insulated glass and top-notch craftsmanship ensure comfort. Can be used alone or with other window combinations.",
    ],
    productOptions: [
      {
        id: "materials",
        name: "Materials",
        title: "Aluminum",
        image: "/images/aluminum-product.png",
        description:
          "Aluminum doors strike a balance between strength and weight, making them stronger and more durable, as well as providing greater security and protection. Aluminum doors can last up to 30 years.",
      },
      {
        id: "color",
        name: "Color",
        title: "Custom Interior/Exterior Colors",
        images: colorSwatches,
        description:
          "Our products feature reliable, low-maintenance interior and exterior finishes that resist fading, peeling and chalking, even in a variety of extreme weather conditions. We also offer custom color options to meet your unique project requirements.",
      },
      {
        id: "glass",
        name: "Glass",
        title: "Glass Options",
        image: "/images/glass-product-1.png",
        description:
          "A variety of glass color and type options allow you to add unique details to your windows and doors while balancing the privacy and natural light you prefer and delivering superior quality and thermal performance.",
      },
      {
        id: "hardware",
        name: "Hardware",
        title: "Hardware Options",
        image: "/images/hardware-product-2.png",
        description:
          "Engineered to be both durable and beautiful, our hardware is available in different style design options with finishes that complement our products' hardware for a consistent look.",
      },
      {
        id: "screens",
        name: "Screens",
        title: "Screens Options",
        image: "/images/screens-product-1.png",
        description:
          "Think Luxe's screen options are made of durable, low-maintenance aluminum to provide better airflow and more natural light while keeping insects out.",
      },
      {
        id: "blinds",
        name: "Blinds",
        title: "Blinds Options",
        image: "/images/blinds-product-1.png",
        description:
          "Our built-in blind options allow the blinds to be tilted and raised via a magnetic handle, wall switch, or remote control and are permanently sealed inside double-glazed windows. The louver design is hidden between insulated glass panels, allowing for minimal cleaning and no fear of damage, making it safer for your children and pets.",
      },
    ],
  },
  {
    id: "awning",
    name: "Awning",
    title: "Awning Windows",
    image: "/images/awning.png",
    description: [
      "Awning windows open outward from the top hinge, providing maximum ventilation while effectively preventing rain from entering the room. Each window can be fully customized to your specific requirements. They are often used alone or installed below large viewing windows to allow for ventilation.",
      "Our durable awning windows allow for great ventilation, even on rainy days, and have a stylish look that will blend in with the look of almost any space. Whether you’re building new or replacing existing windows, we can make your one-of-a-kind awning window to fit your needs.",
      "Profiles that provide exceptional strength and durability to withstand the elements. Precision miter, fusion fillet. Hidden drainage. Available as a single-unit or dual-unit combination. Variety of standard and custom colors",
    ],
    productOptions: [
      {
        id: "materials",
        name: "Materials",
        title: "Aluminum",
        image: "/images/aluminum-product.png",
        description:
          "Aluminum doors strike a balance between strength and weight, making them stronger and more durable, as well as providing greater security and protection. Aluminum doors can last up to 30 years.",
      },
      {
        id: "color",
        name: "Color",
        title: "Custom Interior/Exterior Colors",
        images: colorSwatches,
        description:
          "Our products feature reliable, low-maintenance interior and exterior finishes that resist fading, peeling and chalking, even in a variety of extreme weather conditions. We also offer custom color options to meet your unique project requirements.",
      },
      {
        id: "glass",
        name: "Glass",
        title: "Glass Options",
        image: "/images/glass-product-1.png",
        description:
          "A variety of glass color and type options allow you to add unique details to your windows and doors while balancing the privacy and natural light you prefer and delivering superior quality and thermal performance.",
      },
      {
        id: "hardware",
        name: "Hardware",
        title: "Hardware Options",
        image: "/images/hardware-product-2.png",
        description:
          "Engineered to be both durable and beautiful, our hardware is available in different style design options with finishes that complement our products' hardware for a consistent look.",
      },
      {
        id: "screens",
        name: "Screens",
        title: "Screens Options",
        image: "/images/screens-product-1.png",
        description:
          "Think Luxe's screen options are made of durable, low-maintenance aluminum to provide better airflow and more natural light while keeping insects out.",
      },
      {
        id: "blinds",
        name: "Blinds",
        title: "Blinds Options",
        image: "/images/blinds-product-1.png",
        description:
          "Our built-in blind options allow the blinds to be tilted and raised via a magnetic handle, wall switch, or remote control and are permanently sealed inside double-glazed windows. The louver design is hidden between insulated glass panels, allowing for minimal cleaning and no fear of damage, making it safer for your children and pets.",
      },
    ],
  },
];

// Product series data with placeholder content
const productSeries = [
  {
    id: "series-75",
    tabName: "SERIES 75",
    seriesNumber: "75",
    productType: "ALUMINUM FOLDING DOOR",
    image: "/images/series-1.jpeg",
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
  },
  {
    id: "series-88",
    tabName: "SERIES 88",
    seriesNumber: "88",
    productType: "THERMAL BREAK ALUMINUM FOLDING DOOR",
    image: "/images/series-2.jpeg",
    technicalParams: [
      {
        label: "Profile Thickness:",
        value:
          "Frame thickness: 97mm ; Heat insulation strip: 20mm ; panel thickness: 88mm ; Heat insulation strip: 24mm",
      },
      {
        label: "Size Range",
        value: "door sash width: 500mm-900mm door sash height: 1900mm-3000mm",
      },
      {
        label: "Visible surface:",
        value: "frame 43mm / opening door sash 60mm",
      },
      {
        label: "Glass specification:",
        value: "5+27A+5mm double tempered insulating glass",
      },
    ],
  },
  {
    id: "series-91",
    tabName: "SERIES 91",
    seriesNumber: "91",
    productType: "THERMAL BREAK ALUMINUM CASEMENT WINDOW",
    image: "/images/series-3.jpeg",
    technicalParams: [
      {
        label: "Profile Thickness:",
        value:
          "outer frame width is 91mm, heat insulation strip is 54mm; Sash width is 100mm, heat insulation strip is 54mm.",
      },
      {
        label: "Heat insulation strip:",
        value: "PA66-GF25-S54 high-quality heat insulation strip",
      },
      {
        label: "Profile width:",
        value:
          "Frame thickness 75mm, Heat insulation strip 20mm; Fan thickness 75mm, Heat insulation strip 20mm;",
      },
      {
        label: "Visible surface:",
        value: "outer frame is 39mm / middle pole is 39mm / opening sash 57mm.",
      },
      {
        label: "Glass specification:",
        value: "5mm+16A+5mm+16A+5mm",
      },
    ],
  },
  {
    id: "series-110",
    tabName: "SERIES 110",
    seriesNumber: "110",
    productType: "ALUMINUM CASEMENT WINDOW WITH NET",
    image: "/images/series-4.jpg",
    technicalParams: [
      {
        label: "Profile Thickness:",
        value:
          "Frame thickness: 1.8mm ; Fan thickness: 2.0mm Fan width: 450mm-800mm ; Fan height: 600mm-200mm aximum load: 80kg",
      },
      {
        label: "Blinds:",
        value: "standard magnetic control hollow blinds",
      },
      {
        label: "Glass specification:",
        value: "5+20A+5 double-layer tempered hollow glass",
      },
    ],
  },
  {
    id: "series-170",
    tabName: "SERIES 170",
    seriesNumber: "170",
    productType: "ALUMINUM LIFTING SLIDING DOOR",
    image: "/images/series-5.jpeg",
    technicalParams: [
      {
        label: "Profile Thickness:",
        value:
          "frame 2.2mm , sash 2.2mm , high track / low track 2.2mm Door sash width : 600mm-2000mm Door sash height: 1500mm-2600mm",
      },
      {
        label: "Profile width:",
        value:
          "frame width 170mm , thermal insulation strip 40mm Door sash width 80mm , thermal insulation strip 33mm",
      },
      {
        label: "Visible surface:",
        value:
          "Upper track 56mm , thermal insulation strip 44mm ,bottom track 50mm , thermal insulation strip 30mm",
      },
      {
        label: "Glass specification:",
        value: "5mm+12A+5mm+12A+5mm , triple-layer tempered insulating glass",
      },
    ],
  },
];

// Process steps data for aluminum windows
const processSteps = [
  {
    title: "Product Sampling",
    description:
      "Prior to making any commitments with vendors, we facilitate the process of product sampling, allowing our clients to tangibly experience the quality and aesthetic of the materials they're considering. This ensures that they have a clear understanding of what to expect before finalizing their orders.",
  },
  {
    title: "Discovering the Perfect Fit",
    description:
      "We begin by delving into our clients' visions, meticulously sourcing building materials from our global network of vendors. Our aim is to align every detail with our clients' aspirations, ensuring a seamless translation from concept to reality.",
  },
  {
    title: "Seamless Coordination",
    description:
      "From scheduling to delivery, we meticulously coordinate every aspect of the logistics process to ensure timely arrival of materials at the designated location. Our streamlined approach guarantees efficiency and peace of mind for our clients.",
  },
  {
    title: "Installation & After Sales Service",
    description:
      "Our dedication doesn't end with delivery. We offer comprehensive installation support and after-sales service, ensuring that our clients' projects are executed flawlessly. Additionally, we provide 5-10 Year warranty to uphold the integrity and longevity of the materials we've provided.",
  },
];

export default function AluminumWindowsPage() {
  const [selectedTab, setSelectedTab] = useState(0); // Default to Single-Hung (index 0)
  const [selectedOption, setSelectedOption] = useState(0); // Default to first option
  const [selectedSeries, setSelectedSeries] = useState(0); // Default to Series 75

  // Reset selectedOption when window type changes
  useEffect(() => {
    setSelectedOption(0);
  }, [selectedTab]);

  // Get current product options based on selected window type
  const currentProductOptions = windowTypes[selectedTab].productOptions;

  // Our Process section state
  const [hoveredStep, setHoveredStep] = useState(0);
  const [selectedStep, setSelectedStep] = useState(0);
  const [ballAngle, setBallAngle] = useState(-90);
  const [isHovering, setIsHovering] = useState(false);
  const [circleScale, setCircleScale] = useState(1);
  const circleRef = useRef<HTMLDivElement>(null);

  const displayedStep = isHovering ? hoveredStep : selectedStep;

  // Handle responsive circle scale
  useEffect(() => {
    const updateScale = () => {
      if (window.innerWidth < 640) {
        setCircleScale(0.56); // 180px / 320px
      } else if (window.innerWidth < 768) {
        setCircleScale(0.69); // 220px / 320px
      } else {
        setCircleScale(1);
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  // Get angle for a step
  const getStepAngle = (step: number) => {
    switch (step) {
      case 0:
        return -90;
      case 1:
        return 0;
      case 2:
        return 90;
      case 3:
        return 180;
      default:
        return -90;
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

  // Mobile step navigation
  const goToPrevStep = () => {
    const newStep = selectedStep === 0 ? 3 : selectedStep - 1;
    setSelectedStep(newStep);
    setBallAngle(getStepAngle(newStep));
  };

  const goToNextStep = () => {
    const newStep = selectedStep === 3 ? 0 : selectedStep + 1;
    setSelectedStep(newStep);
    setBallAngle(getStepAngle(newStep));
  };

  const circleRadius = 140;
  const ballX = Math.cos((ballAngle * Math.PI) / 180) * circleRadius;
  const ballY = Math.sin((ballAngle * Math.PI) / 180) * circleRadius;

  return (
    <main className="bg-black font-medium">
      {/* Window Types Section */}
      <section className="py-16 md:py-24 lg:py-32">
        <Container className="px-4 sm:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="font-serif font-medium text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-[#C9A962] mb-4">
              Aluminum Windows
            </h1>
            <p className="text-[#b5b5b5] font-medium text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4 sm:px-0">
              Browse through a variety of window styles to find the best one for
              your home.
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
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-full border border-[#C9A962]/20 overflow-x-auto max-w-full scrollbar-hide">
                {windowTypes.map((type, index) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedTab(index)}
                    className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm whitespace-nowrap transition-all duration-300 cursor-pointer ${
                      selectedTab === index
                        ? "border border-[#C9A962] bg-[#191919] text-[#C9A962]"
                        : "text-[#b5b5b5] hover:text-white active:text-white"
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
              className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch"
            >
              {/* Left - Image */}
              <div className="relative min-h-[300px] lg:min-h-0 rounded-[20px] md:rounded-[30px] lg:rounded-[40px] overflow-hidden lg:col-span-1">
                <Image
                  src={windowTypes[selectedTab].image}
                  alt={windowTypes[selectedTab].title}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>

              {/* Right - Content Card */}
              <div className="relative p-[1px] rounded-[20px] md:rounded-[30px] lg:rounded-[40px] bg-gradient-to-br from-[#C9A962] via-[#C9A962]/50 to-[#333333] lg:col-span-2">
                <div className="bg-[#0a0a0a] rounded-[20px] md:rounded-[30px] lg:rounded-[40px] p-5 sm:p-6 md:p-10 lg:p-12 h-full flex flex-col justify-center">
                  <h2 className="font-serif font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#C9A962] mb-4 sm:mb-6">
                    {windowTypes[selectedTab].title}
                  </h2>

                  {/* Description paragraphs */}
                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {windowTypes[selectedTab].description.slice(0, -1).map((para, index) => (
                      <p
                        key={index}
                        className="text-[#b5b5b5] text-xs sm:text-sm md:text-base leading-relaxed font-medium"
                      >
                        {para}
                      </p>
                    ))}
                    {/* Last item as bullet points */}
                    <ul className="list-disc list-inside space-y-1">
                      {windowTypes[selectedTab].description[windowTypes[selectedTab].description.length - 1]
                        .split('.')
                        .filter((item) => item.trim())
                        .map((point, index) => (
                          <li
                            key={index}
                            className="text-[#b5b5b5] text-xs sm:text-sm md:text-base leading-relaxed font-medium"
                          >
                            {point.trim()}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </Container>
      </section>

      {/* Product Options Section */}
      <section>
        <Container className="px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[20px] sm:rounded-[30px] md:rounded-[45px] lg:rounded-[60px] p-5 sm:p-6 md:p-10 lg:p-16"
          >
            {/* Header */}
            <h2 className="font-serif font-medium text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-[#C9A962] text-center mb-6 sm:mb-8 md:mb-10">
              Product Options
            </h2>

            {/* Tab Selector */}
            <div className="flex justify-center mb-8 sm:mb-10 md:mb-12">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-full bg-white border border-[#C9A962] overflow-x-auto max-w-full scrollbar-hide">
                {currentProductOptions.map((option, index) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedOption(index)}
                    className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm whitespace-nowrap cursor-pointer transition-all duration-300 ease-in-out ${
                      selectedOption === index
                        ? "bg-[#e8e5dc] text-[#C9A962]"
                        : "bg-transparent text-gray-500 hover:text-gray-700 active:text-gray-700"
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
                key={`${selectedTab}-${selectedOption}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center"
              >
                {/* Left - Image or Color Grid */}
                <div className="flex justify-center">
                  {currentProductOptions[selectedOption].images ? (
                    // Color swatches grid - responsive columns
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3 w-full max-w-[400px]">
                      {currentProductOptions[selectedOption].images.map(
                        (img, idx) => (
                          <div
                            key={idx}
                            className="relative aspect-square rounded-lg overflow-hidden"
                          >
                            <Image
                              src={img}
                              alt={`Color option ${idx + 1}`}
                              fill
                              className="object-cover"
                              loading="lazy"
                            />
                          </div>
                        )
                      )}
                    </div>
                  ) : (
                    // Single image
                    <div className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] aspect-square">
                      <Image
                        src={currentProductOptions[selectedOption].image || ""}
                        alt={currentProductOptions[selectedOption].title}
                        fill
                        className="object-contain"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>

                {/* Right - Text Content */}
                <div className="text-center md:text-left">
                  <h3 className="font-serif font-medium text-xl sm:text-2xl md:text-3xl text-[#C9A962] mb-3 sm:mb-4">
                    {currentProductOptions[selectedOption].title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
                    {currentProductOptions[selectedOption].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>

      {/* Product Series Section */}
      <section className="pt-20 pb-4">
        <Container className="px-4 sm:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4"
          >
            {/* Pill Badge */}
            <div className="inline-block mb-4 sm:mb-6">
              <AnimatedPill>Series</AnimatedPill>
            </div>
            <h2 className="font-serif font-medium text-xl sm:text-2xl md:text-3xl lg:text-3xl text-[#C9A962] leading-relaxed max-w-3xl mx-auto px-2 sm:px-0">
              Browse Through our Aluminum Product Series To Find The Best One
              For Your home.
            </h2>
          </motion.div>

          {/* Tab Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-full border border-[#C9A962]/20 overflow-x-auto max-w-full scrollbar-hide">
                {productSeries.map((series, index) => (
                  <button
                    key={series.id}
                    onClick={() => setSelectedSeries(index)}
                    className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm whitespace-nowrap transition-all duration-300 cursor-pointer ${
                      selectedSeries === index
                        ? "border border-[#C9A962] bg-[#0a0a0a] text-white"
                        : "text-[#b5b5b5] hover:text-white active:text-white"
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
              {/* Golden Gradient Border Wrapper */}
              <div className="relative p-[1px] rounded-[20px] md:rounded-[30px] lg:rounded-[40px] bg-gradient-to-br from-[#C9A962] via-[#C9A962]/50 to-[#333333]">
                <div className="bg-[#0a0a0a] rounded-[20px] md:rounded-[30px] lg:rounded-[40px] overflow-hidden">
                  {/* Hero Image */}
                  <div className="relative aspect-[3/1] overflow-hidden">
                    <Image
                      src={productSeries[selectedSeries].image}
                      alt={productSeries[selectedSeries].productType}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Product Title & Technical Parameters */}
                  <div className="p-5 sm:p-6 md:p-10 lg:p-12">
                    {/* Title Area */}
                    <div className="mb-6 sm:mb-8">
                      <div className="flex items-baseline gap-2 sm:gap-3 mb-2">
                        <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white">
                          {productSeries[selectedSeries].seriesNumber}
                        </span>
                        <span className="text-xs sm:text-sm text-[#b5b5b5] uppercase tracking-wider">
                          Series
                        </span>
                      </div>
                      <p className="text-[#C9A962] uppercase tracking-wider text-xs sm:text-sm">
                        {productSeries[selectedSeries].productType}
                      </p>
                    </div>

                    {/* Technical Parameters Heading */}
                    <h3 className="!font-sans text-white text-base sm:text-lg font-medium mb-4 sm:mb-6">
                      Technical Parameters:
                    </h3>

                    {/* Technical Parameters Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 sm:gap-x-8 gap-y-4 sm:gap-y-6">
                      {productSeries[selectedSeries].technicalParams.map(
                        (param, index) => (
                          <div key={index}>
                            <p className="!font-sans text-[#C9A962] text-xs sm:text-sm mb-1">
                              {param.label}
                            </p>
                            <p className="text-[#b5b5b5] text-xs sm:text-sm whitespace-pre-line">
                              {param.value}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </Container>
      </section>

      {/* Our Process Section */}
      <section className="bg-black pt-16 pb-6 md:pb-16">
        <Container className="px-4 sm:px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            {/* Pill Title */}
            <div className="inline-block mb-4 md:mb-6">
              <AnimatedPill>Our Process</AnimatedPill>
            </div>
            <h2 className="font-serif font-medium text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-[#C9A962]">
              A Seamless Journey from Vision to Reality
            </h2>
          </motion.div>

          {/* Interactive Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Card with gradient border - gold on left fading to grey on right */}
            <div className="relative p-[1px] rounded-[20px] md:rounded-[30px] lg:rounded-[40px] bg-gradient-to-r from-[#C9A962] via-[#C9A962]/50 to-[#333333]">
              <div className="bg-[#0a0a0a] rounded-[20px] md:rounded-[30px] lg:rounded-[40px] overflow-hidden">
                <div className="flex flex-col md:grid md:grid-cols-2 min-h-[500px] md:min-h-[500px]">
                  {/* Interactive Circle - Shows first on mobile, second on desktop */}
                  <div
                    className="order-1 md:order-2 relative flex items-center justify-center p-6 sm:p-8 md:p-12 md:mr-6 min-h-[280px] sm:min-h-[380px] md:min-h-0"
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleClick}
                  >
                    {/* Step Labels positioned around the circle */}
                    <div className="absolute inset-0 flex items-center justify-center font-medium">
                      {/* Top Label */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedStep(0);
                          setBallAngle(getStepAngle(0));
                        }}
                        className={`absolute top-4 sm:top-6 md:top-8 left-1/2 -translate-x-1/2 text-[9px] sm:text-xs md:text-sm uppercase tracking-widest transition-colors duration-300 text-center flex items-center justify-center cursor-pointer max-w-[80px] sm:max-w-[120px] md:max-w-[140px] ${
                          displayedStep === 0 ? "text-[#C9A962]" : "text-[#574927]"
                        }`}
                      >
                        Product Sampling
                      </button>

                      {/* Right Label */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedStep(1);
                          setBallAngle(getStepAngle(1));
                        }}
                        className={`absolute right-6 sm:right-3 md:right-4 top-1/2 -translate-y-1/2 text-[9px] sm:text-xs md:text-sm uppercase tracking-widest transition-colors duration-300 cursor-pointer text-center flex items-center justify-center max-w-[55px] sm:max-w-[85px] md:max-w-[100px] ${
                          displayedStep === 1 ? "text-[#C9A962]" : "text-[#574927]"
                        }`}
                      >
                        Discovering the Perfect Fit
                      </button>

                      {/* Bottom Label */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedStep(2);
                          setBallAngle(getStepAngle(2));
                        }}
                        className={`absolute bottom-2 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 text-[9px] sm:text-xs md:text-sm uppercase tracking-widest transition-colors duration-300 cursor-pointer text-center flex items-center justify-center max-w-[100px] sm:max-w-[150px] md:max-w-[190px] ${
                          displayedStep === 2 ? "text-[#C9A962]" : "text-[#574927]"
                        }`}
                      >
                        Seamless Coordination
                      </button>

                      {/* Left Label */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedStep(3);
                          setBallAngle(getStepAngle(3));
                        }}
                        className={`absolute left-6 sm:left-3 md:-left-8 top-1/2 -translate-y-1/2 text-[9px] sm:text-xs md:text-sm uppercase tracking-widest transition-colors duration-300 cursor-pointer text-center flex items-center justify-center max-w-[55px] sm:max-w-[100px] md:max-w-[160px] ${
                          displayedStep === 3 ? "text-[#C9A962]" : "text-[#574927]"
                        }`}
                      >
                        Installation & After Sales
                      </button>
                    </div>

                    {/* Interactive Circle Container */}
                    <div
                      ref={circleRef}
                      className="relative w-[140px] h-[140px] sm:w-[220px] sm:h-[220px] md:w-[320px] md:h-[320px]"
                    >
                      {/* Circle Border with smooth gradient following the ball */}
                      <div
                        className="absolute inset-0 rounded-full transition-all duration-100"
                        style={{
                          background: `conic-gradient(
                            from ${ballAngle + 90}deg,
                            #C9A962 0deg,
                            #C9A962 30deg,
                            #8B7A3D 60deg,
                            #282316 120deg,
                            #0b0b0b 180deg,
                            #282316 240deg,
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
                        <div className="text-center">
                          <Image
                            src="/images/logo.png"
                            alt="ThinkLuxe"
                            width={180}
                            height={180}
                            className="w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] md:w-[180px] md:h-[180px] object-contain opacity-80"
                          />
                        </div>
                      </div>

                      {/* Following Ball */}
                      <motion.div
                        className="absolute w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                        style={{
                          left: "50%",
                          top: "50%",
                          marginLeft: "-6px",
                          marginTop: "-6px",
                        }}
                        animate={{
                          x: ballX * circleScale,
                          y: ballY * circleScale,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    </div>
                  </div>

                  {/* Left Content - Step Details - Shows second on mobile, first on desktop */}
                  <div className="order-2 md:order-1 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={displayedStep}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="min-h-[180px] sm:min-h-[200px] md:min-h-[220px]"
                      >
                        <h3 className="text-[#C9A962] text-lg sm:text-xl md:text-2xl lg:text-3xl uppercase tracking-wider font-medium mb-4 md:mb-6 max-w-lg min-h-[56px] sm:min-h-[60px] md:min-h-[72px]">
                          {processSteps[displayedStep].title}
                        </h3>
                        <p className="text-[#b5b5b5] text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-sm min-h-[170px] sm:min-h-[180px] md:min-h-[190px]">
                          {processSteps[displayedStep].description}
                        </p>
                      </motion.div>
                    </AnimatePresence>

                    {/* Step Counter with Mobile Togglers */}
                    <div className="mt-auto flex items-center justify-center md:justify-start gap-12 px-4 md:px-0">
                      {/* Left Arrow - Mobile Only */}
                      <button
                        onClick={goToPrevStep}
                        className="md:hidden flex items-center justify-center text-[#C9A962] hover:text-[#C9A962]/70 transition-colors"
                        aria-label="Previous step"
                      >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                      </button>

                      <span className="text-[#C9A962] font-medium uppercase tracking-[0.2em] md:tracking-[0.3em] text-sm md:text-base">
                        Step {displayedStep + 1}
                      </span>

                      {/* Right Arrow - Mobile Only */}
                      <button
                        onClick={goToNextStep}
                        className="md:hidden flex items-center justify-center text-[#C9A962] hover:text-[#C9A962]/70 transition-colors"
                        aria-label="Next step"
                      >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </button>
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

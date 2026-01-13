"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui";

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
      { id: "materials", name: "Materials", title: "Aluminum", image: "/images/aluminum-product.png", description: "Aluminum doors strike a balance between strength and weight, making them stronger and more durable, as well as providing greater security and protection. Aluminum doors can last up to 30 years." },
      { id: "color", name: "Color", title: "Custom Interior/Exterior Colors", images: colorSwatches, description: "Our products feature reliable, low-maintenance interior and exterior finishes that resist fading, peeling and chalking, even in a variety of extreme weather conditions. We also offer custom color options to meet your unique project requirements." },
      { id: "glass", name: "Glass", title: "Glass Options", image: "/images/glass-product-1.png", description: "A variety of glass color and type options allow you to add unique details to your windows and doors while balancing the privacy and natural light you prefer and delivering superior quality and thermal performance." },
      { id: "hardware", name: "Hardware", title: "Hardware Options", image: "/images/hardware-product-1.png", description: "Engineered to be both durable and beautiful, our hardware is available in different style design options with finishes that complement our products' hardware for a consistent look." },
      { id: "grilles", name: "Grilles", title: "Custom Grille Styles", image: "/images/grille-product-1.png", description: "Grilles come in a variety of patterns and designs. The intentional use of grilles can further enhance your home's specific style or architectural design." },
    ],
  },
  {
    id: "tilt-turn",
    name: "Tilt and Turn",
    title: "Tilt And Turn Windows",
    image: "/images/tilt-and-turn.png",
    description: [
      "Tilt-and-turn windows can be opened multiple ways with the turn of a handle. They open inward like casement windows and can also tilt inward to let in fresh air. They are ideal for homeowners, architects, and developers looking for a versatile, energy-saving solution.",
      "Think Luxe's tilt-and-turn windows are equipped with high-quality hardware, which enables the dual functionality of the window as well as secure locking with a single handle. With our windows, you can enjoy the best features of casement, fixed and tilt designs with elegance and simplicity.",
      "The compact design, refined bevels, and slopes give the profile a modern and elegant look. Extremely durable and modern gasket ensures windows are tight and reliable. High-quality insulated glass and top-notch craftsmanship ensure comfort. Can be used alone or with other window combinations.",
    ],
    productOptions: [
      { id: "materials", name: "Materials", title: "Aluminum", image: "/images/aluminum-product.png", description: "Aluminum doors strike a balance between strength and weight, making them stronger and more durable, as well as providing greater security and protection. Aluminum doors can last up to 30 years." },
      { id: "color", name: "Color", title: "Custom Interior/Exterior Colors", images: colorSwatches, description: "Our products feature reliable, low-maintenance interior and exterior finishes that resist fading, peeling and chalking, even in a variety of extreme weather conditions. We also offer custom color options to meet your unique project requirements." },
      { id: "glass", name: "Glass", title: "Glass Options", image: "/images/glass-product-1.png", description: "A variety of glass color and type options allow you to add unique details to your windows and doors while balancing the privacy and natural light you prefer and delivering superior quality and thermal performance." },
      { id: "hardware", name: "Hardware", title: "Hardware Options", image: "/images/hardware-product-2.png", description: "Engineered to be both durable and beautiful, our hardware is available in different style design options with finishes that complement our products' hardware for a consistent look." },
      { id: "screens", name: "Screens", title: "Screens Options", image: "/images/screens-product-1.png", description: "Think Luxe's screen options are made of durable, low-maintenance aluminum to provide better airflow and more natural light while keeping insects out." },
      { id: "blinds", name: "Blinds", title: "Blinds Options", image: "/images/blinds-product-1.png", description: "Our built-in blind options allow the blinds to be tilted and raised via a magnetic handle, wall switch, or remote control and are permanently sealed inside double-glazed windows. The louver design is hidden between insulated glass panels, allowing for minimal cleaning and no fear of damage, making it safer for your children and pets." },
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
      { id: "materials", name: "Materials", title: "Aluminum", image: "/images/aluminum-product.png", description: "Aluminum doors strike a balance between strength and weight, making them stronger and more durable, as well as providing greater security and protection. Aluminum doors can last up to 30 years." },
      { id: "color", name: "Color", title: "Custom Interior/Exterior Colors", images: colorSwatches, description: "Our products feature reliable, low-maintenance interior and exterior finishes that resist fading, peeling and chalking, even in a variety of extreme weather conditions. We also offer custom color options to meet your unique project requirements." },
      { id: "glass", name: "Glass", title: "Glass Options", image: "/images/glass-product-1.png", description: "A variety of glass color and type options allow you to add unique details to your windows and doors while balancing the privacy and natural light you prefer and delivering superior quality and thermal performance." },
      { id: "hardware", name: "Hardware", title: "Hardware Options", image: "/images/hardware-product-2.png", description: "Engineered to be both durable and beautiful, our hardware is available in different style design options with finishes that complement our products' hardware for a consistent look." },
      { id: "screens", name: "Screens", title: "Screens Options", image: "/images/screens-product-1.png", description: "Think Luxe's screen options are made of durable, low-maintenance aluminum to provide better airflow and more natural light while keeping insects out." },
      { id: "blinds", name: "Blinds", title: "Blinds Options", image: "/images/blinds-product-1.png", description: "Our built-in blind options allow the blinds to be tilted and raised via a magnetic handle, wall switch, or remote control and are permanently sealed inside double-glazed windows. The louver design is hidden between insulated glass panels, allowing for minimal cleaning and no fear of damage, making it safer for your children and pets." },
    ],
  },
  {
    id: "folding",
    name: "Folding",
    title: "Folding Windows",
    image: "/images/folding.png",
    description: [
      "Designed for easy folding, Think Luxe's windows can be folded sideways or up and down to create a spacious opening. Our folding windows have passed various strict industry performance certifications, providing advanced weather protection and energy efficiency to ensure year-round comfort in any climate.",
      "Each of our window sashes can be completely customized to your needs, opening inwards or outwards and folding to the left or right. The configuration can be split down the middle or folded in one direction to suit you and your space.",
      "Offers a wide view through large glass and oversized dimensions. Security and anti-theft hardware. Insulated weatherstripping and perimeter sealing. Multiple configuration design options.",
    ],
    productOptions: [
      { id: "materials", name: "Materials", title: "Aluminum", image: "/images/aluminum-product.png", description: "Aluminum doors strike a balance between strength and weight, making them stronger and more durable, as well as providing greater security and protection. Aluminum doors can last up to 30 years." },
      { id: "color", name: "Color", title: "Custom Interior/Exterior Colors", images: colorSwatches, description: "Our products feature reliable, low-maintenance interior and exterior finishes that resist fading, peeling and chalking, even in a variety of extreme weather conditions. We also offer custom color options to meet your unique project requirements." },
      { id: "glass", name: "Glass", title: "Glass Options", image: "/images/glass-product-1.png", description: "A variety of glass color and type options allow you to add unique details to your windows and doors while balancing the privacy and natural light you prefer and delivering superior quality and thermal performance." },
      { id: "hardware", name: "Hardware", title: "Hardware Options", image: "/images/hardware-product-1.png", description: "Engineered to be both durable and beautiful, our hardware is available in different style design options with finishes that complement our products' hardware for a consistent look." },
      { id: "screens", name: "Screens", title: "Screens Options", image: "/images/screens-product-1.png", description: "Think Luxe's screen options are made of durable, low-maintenance aluminum to provide better airflow and more natural light while keeping insects out." },
      { id: "blinds", name: "Blinds", title: "Blinds Options", image: "/images/blinds-product-1.png", description: "Our built-in blind options allow the blinds to be tilted and raised via a magnetic handle, wall switch, or remote control and are permanently sealed inside double-glazed windows. The louver design is hidden between insulated glass panels, allowing for minimal cleaning and no fear of damage, making it safer for your children and pets." },
    ],
  },
  {
    id: "sliding",
    name: "Sliding",
    title: "Sliding Windows",
    image: "/images/sliding.png",
    description: [
      "Sliding windows are ideal for installation in kitchen sinks or in any room where ventilation is essential. Our sliding windows feature durable, stylish, modern frames while providing optimal views and plenty of daylight. These windows are also energy-efficient and are available in a variety of colors, glass, and mesh options to suit different preferences and requirements.",
      "Available in two-, three-, or multi-panel sliding combinations. Energy-efficient design for excellent energy performance in any climate. Hidden drain hole design ensures water drains quickly. High-quality ball bearings ensure very quiet movement. Unique multi-chamber structure with excellent thermal and sound insulation performance. Selectable screen options let air in while keeping pests out. Customized according to your size, needs, lifestyle and budget. Almost limitless options to fit perfectly into any aesthetic style.",
    ],
    productOptions: [
      { id: "materials", name: "Materials", title: "Aluminum", image: "/images/aluminum-product.png", description: "Aluminum doors strike a balance between strength and weight, making them stronger and more durable, as well as providing greater security and protection. Aluminum doors can last up to 30 years." },
      { id: "color", name: "Color", title: "Custom Interior/Exterior Colors", images: colorSwatches, description: "Our products feature reliable, low-maintenance interior and exterior finishes that resist fading, peeling and chalking, even in a variety of extreme weather conditions. We also offer custom color options to meet your unique project requirements." },
      { id: "glass", name: "Glass", title: "Glass Options", image: "/images/glass-product-1.png", description: "A variety of glass color and type options allow you to add unique details to your windows and doors while balancing the privacy and natural light you prefer and delivering superior quality and thermal performance." },
      { id: "hardware", name: "Hardware", title: "Hardware Options", image: "/images/hardware-product-3.png", description: "Engineered to be both durable and beautiful, our hardware is available in different style design options with finishes that complement our products' hardware for a consistent look." },
      { id: "screens", name: "Screens", title: "Screens Options", image: "/images/screens-product-1.png", description: "Think Luxe's screen options are made of durable, low-maintenance aluminum to provide better airflow and more natural light while keeping insects out." },
      { id: "blinds", name: "Blinds", title: "Blinds Options", image: "/images/blinds-product-1.png", description: "Our built-in blind options allow the blinds to be tilted and raised via a magnetic handle, wall switch, or remote control and are permanently sealed inside double-glazed windows. The louver design is hidden between insulated glass panels, allowing for minimal cleaning and no fear of damage, making it safer for your children and pets." },
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
      { id: "materials", name: "Materials", title: "Aluminum", image: "/images/aluminum-product.png", description: "Aluminum doors strike a balance between strength and weight, making them stronger and more durable, as well as providing greater security and protection. Aluminum doors can last up to 30 years." },
      { id: "color", name: "Color", title: "Custom Interior/Exterior Colors", images: colorSwatches, description: "Our products feature reliable, low-maintenance interior and exterior finishes that resist fading, peeling and chalking, even in a variety of extreme weather conditions. We also offer custom color options to meet your unique project requirements." },
      { id: "glass", name: "Glass", title: "Glass Options", image: "/images/glass-product-1.png", description: "A variety of glass color and type options allow you to add unique details to your windows and doors while balancing the privacy and natural light you prefer and delivering superior quality and thermal performance." },
      { id: "hardware", name: "Hardware", title: "Hardware Options", image: "/images/hardware-product-4.png", description: "Engineered to be both durable and beautiful, our hardware is available in different style design options with finishes that complement our products' hardware for a consistent look." },
      { id: "screens", name: "Screens", title: "Screens Options", image: "/images/screens-product-1.png", description: "Think Luxe's screen options are made of durable, low-maintenance aluminum to provide better airflow and more natural light while keeping insects out." },
      { id: "blinds", name: "Blinds", title: "Blinds Options", image: "/images/blinds-product-1.png", description: "Our built-in blind options allow the blinds to be tilted and raised via a magnetic handle, wall switch, or remote control and are permanently sealed inside double-glazed windows. The louver design is hidden between insulated glass panels, allowing for minimal cleaning and no fear of damage, making it safer for your children and pets." },
    ],
  },
  {
    id: "bay",
    name: "Bay",
    title: "Bay Windows",
    image: "/images/bay.png",
    description: [
      "Bay windows are composed of a range of fixed or openable window styles, set at various angles to create a gentle arc. This innovative three-dimensional design expands the room and extends beyond the exterior wall, maximizing natural light and allowing more light into the room.",
      "Think Luxe's bay windows are functional and beautiful, customized to your home. Our bay windows can be casement, double hung or picture style units, a combination of windows that extend outwards from the house, creating a beautiful exterior appearance and attractive interior spaces for your building.",
      "Multiple windows are connected in select combinations to increase space and light in the room. Made from high-quality extruded profiles that won't chip or peel. Resistant to fading and mildew. Available in a variety of configurations, a range of colors, and unique grille designs.",
    ],
    productOptions: [
      { id: "materials", name: "Materials", title: "Aluminum", image: "/images/aluminum-product.png", description: "Aluminum doors strike a balance between strength and weight, making them stronger and more durable, as well as providing greater security and protection. Aluminum doors can last up to 30 years." },
      { id: "color", name: "Color", title: "Custom Interior/Exterior Colors", images: colorSwatches, description: "Our products feature reliable, low-maintenance interior and exterior finishes that resist fading, peeling and chalking, even in a variety of extreme weather conditions. We also offer custom color options to meet your unique project requirements." },
      { id: "glass", name: "Glass", title: "Glass Options", image: "/images/glass-product-1.png", description: "A variety of glass color and type options allow you to add unique details to your windows and doors while balancing the privacy and natural light you prefer and delivering superior quality and thermal performance." },
      { id: "hardware", name: "Hardware", title: "Hardware Options", image: "/images/hardware-product-5.png", description: "Engineered to be both durable and beautiful, our hardware is available in different style design options with finishes that complement our products' hardware for a consistent look." },
      { id: "screens", name: "Screens", title: "Screens Options", image: "/images/screens-product-1.png", description: "Think Luxe's screen options are made of durable, low-maintenance aluminum to provide better airflow and more natural light while keeping insects out." },
      { id: "blinds", name: "Blinds", title: "Blinds Options", image: "/images/blinds-product-1.png", description: "Our built-in blind options allow the blinds to be tilted and raised via a magnetic handle, wall switch, or remote control and are permanently sealed inside double-glazed windows. The louver design is hidden between insulated glass panels, allowing for minimal cleaning and no fear of damage, making it safer for your children and pets." },
    ],
  },
  {
    id: "skylight",
    name: "Skylight",
    title: "Skylight Windows",
    image: "/images/skylight.png",
    description: [
      "Wanjia skylights are designed to provide a perfect combination of natural lighting and natural ventilation for your space. We offer three operation modes: manual, electric, and chain drive. These modes allow you to bring the beauty of the outdoors into the interior in a unique way, providing unparalleled quality and excellent lighting effects to enhance the atmosphere of your home.",
      "Trustworthy leader of windows and doors in Canada for 20 years. All products meet international specifications to ensure energy, safety and structural requirements compliance. We provide the most efficient and cost-effective solutions to design, build and deliver products on time and within budget. With clear instructions and pre-tested components, products can be installed seamlessly, saving you time and labor on site. Customer satisfaction is as high as 98%.",
    ],
    productOptions: [
      { id: "materials", name: "Materials", title: "Aluminum", image: "/images/aluminum-product.png", description: "Aluminum doors strike a balance between strength and weight, making them stronger and more durable, as well as providing greater security and protection. Aluminum doors can last up to 30 years." },
      { id: "color", name: "Color", title: "Custom Interior/Exterior Colors", images: colorSwatches, description: "Our products feature reliable, low-maintenance interior and exterior finishes that resist fading, peeling and chalking, even in a variety of extreme weather conditions. We also offer custom color options to meet your unique project requirements." },
      { id: "glass", name: "Glass", title: "Glass Options", image: "/images/glass-product-1.png", description: "A variety of glass color and type options allow you to add unique details to your windows and doors while balancing the privacy and natural light you prefer and delivering superior quality and thermal performance." }],
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
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

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
      <section className="py-16 md:py-24 lg:py-32">
        <Container className="px-4 sm:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#C9A962] font-semibold mb-4">
              Aluminum Windows
            </h1>
            <p className="text-[#b5b5b5] font-medium text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4 sm:px-0">
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
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-full border border-[#C9A962]/20 overflow-x-auto max-w-full scrollbar-hide">
                {windowTypes.map((type, index) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedTab(index)}
                    className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm whitespace-nowrap transition-all duration-300 cursor-pointer ${
                      selectedTab === index
                        ? "border border-[#C9A962] bg-[#0a0a0a] text-[#C9A962]"
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
              className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6"
            >
              {/* Left - Image */}
              <div className="relative aspect-[4/5] rounded-[20px] md:rounded-[30px] lg:rounded-[40px] overflow-hidden">
                <Image
                  src={windowTypes[selectedTab].image}
                  alt={windowTypes[selectedTab].title}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>

              {/* Right - Content Card */}
              <div className="relative p-[1px] rounded-[20px] md:rounded-[30px] lg:rounded-[40px] bg-gradient-to-br from-[#C9A962] via-[#C9A962]/50 to-[#333333]">
                <div className="bg-[#0a0a0a] rounded-[20px] md:rounded-[30px] lg:rounded-[40px] p-5 sm:p-6 md:p-10 lg:p-12 h-full flex flex-col justify-center">
                  <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#C9A962] mb-4 sm:mb-6">
                    {windowTypes[selectedTab].title}
                  </h2>

                  {/* Description paragraphs */}
                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {windowTypes[selectedTab].description.map((para, index) => (
                      <p key={index} className="text-[#b5b5b5] text-xs sm:text-sm md:text-base leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>

                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </Container>
      </section>

      {/* Product Options Section */}
      <section className="pb-16 md:pb-24 lg:pb-32">
        <Container className="px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[20px] sm:rounded-[30px] md:rounded-[45px] lg:rounded-[60px] p-5 sm:p-6 md:p-10 lg:p-16"
          >
            {/* Header */}
            <h2 className="font-serif font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#C9A962] text-center mb-6 sm:mb-8 md:mb-10">
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
                      {currentProductOptions[selectedOption].images.map((img, idx) => (
                        <div key={idx} className="relative aspect-square rounded-lg overflow-hidden">
                          <Image
                            src={img}
                            alt={`Color option ${idx + 1}`}
                            fill
                            className="object-cover"
                            loading="lazy"
                          />
                        </div>
                      ))}
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
                  <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-[#C9A962] mb-3 sm:mb-4">
                    {currentProductOptions[selectedOption].title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                    {currentProductOptions[selectedOption].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>

      {/* Product Series Section */}
      <section className="py-16 md:py-24 lg:py-32">
        <Container className="px-4 sm:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            {/* Pill Badge */}
            <div className="inline-block mb-4 sm:mb-6">
              <span className="relative px-4 py-1.5 sm:px-6 sm:py-2 rounded-full text-white text-xs tracking-wider">
                <span className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-[#C9A962] to-[#715A23]">
                  <span className="block w-full h-full rounded-full bg-[#303030]" />
                </span>
                <span className="relative">Series</span>
              </span>
            </div>
            <h2 className="font-serif font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#C9A962] leading-relaxed max-w-3xl mx-auto px-2 sm:px-0">
              Browse Through our Aluminum Product Series To Find The Best One For Your home.
            </h2>
          </motion.div>

          {/* Tab Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 sm:mb-10 md:mb-12"
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
              {/* Hero Image */}
              <div className="relative aspect-[16/9] rounded-[20px] md:rounded-[30px] lg:rounded-[40px] overflow-hidden mb-8 sm:mb-10 md:mb-12">
                <Image
                  src={productSeries[selectedSeries].image}
                  alt={productSeries[selectedSeries].productType}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>

              {/* Product Title & Technical Parameters */}
              <div className="mb-10 sm:mb-12 md:mb-16">
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
                <h3 className="text-white text-base sm:text-lg font-medium mb-4 sm:mb-6">
                  Technical Parameters:
                </h3>

                {/* Technical Parameters Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 sm:gap-x-8 gap-y-4 sm:gap-y-6">
                  {productSeries[selectedSeries].technicalParams.map((param, index) => (
                    <div key={index}>
                      <p className="text-[#C9A962] text-xs sm:text-sm mb-1">{param.label}</p>
                      <p className="text-[#b5b5b5] text-xs sm:text-sm whitespace-pre-line">{param.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Basic Parameters Section */}
              <div>
                <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8">
                  Basic parameters:
                </h3>

                {/* Parameter Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
                  {productSeries[selectedSeries].basicParams.map((param, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 mb-2 sm:mb-3">
                        <Image
                          src={param.icon}
                          alt=""
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p className="text-gray-500 text-[10px] sm:text-xs mb-1 leading-tight">
                        {param.label}
                      </p>
                      <p className="text-[#C9A962] text-xs sm:text-sm font-medium">
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
      <section className="bg-black py-16 md:py-24 lg:py-32">
        <Container className="px-4 sm:px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-16"
          >
            {/* Pill Title */}
            <div className="inline-block mb-4 md:mb-6">
              <span className="relative px-4 py-1.5 sm:px-6 sm:py-2 rounded-full text-white text-xs tracking-wider">
                <span className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-[#C9A962] to-[#715A23]">
                  <span className="block w-full h-full rounded-full bg-[#303030]" />
                </span>
                <span className="relative">Our Process</span>
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#C9A962]">
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
            <div className="relative p-[1px] rounded-[20px] md:rounded-[30px] lg:rounded-[40px] bg-gradient-to-r from-[#C9A962] via-[#C9A962]/50 to-[#333333]">
              <div className="bg-[#0a0a0a] rounded-[20px] md:rounded-[30px] lg:rounded-[40px] overflow-hidden">
                <div className="flex flex-col md:grid md:grid-cols-2 min-h-[500px] md:min-h-[500px]">
                  {/* Interactive Circle - Shows first on mobile */}
                  <div
                    className="order-1 md:order-2 relative flex items-center justify-center p-6 sm:p-8 md:p-12 min-h-[320px] sm:min-h-[380px] md:min-h-0"
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleClick}
                  >
                    {/* Step Labels - Tappable buttons */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedStep(0);
                          setBallAngle(getStepAngle(0));
                        }}
                        className={`absolute top-4 sm:top-6 md:top-8 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs md:text-sm uppercase tracking-wider transition-colors duration-300 text-center max-w-[90px] sm:max-w-[110px] md:max-w-[140px] ${
                          displayedStep === 0 ? "text-[#C9A962]" : "text-gray-600"
                        }`}
                      >
                        Consultation & Assessment
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedStep(1);
                          setBallAngle(getStepAngle(1));
                        }}
                        className={`absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 text-[10px] sm:text-xs md:text-sm uppercase tracking-wider transition-colors duration-300 text-center max-w-[70px] sm:max-w-[85px] md:max-w-[100px] ${
                          displayedStep === 1 ? "text-[#C9A962]" : "text-gray-600"
                        }`}
                      >
                        Custom Design & Engineering
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedStep(2);
                          setBallAngle(getStepAngle(2));
                        }}
                        className={`absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs md:text-sm uppercase tracking-wider transition-colors duration-300 text-center max-w-[100px] sm:max-w-[120px] md:max-w-[140px] ${
                          displayedStep === 2 ? "text-[#C9A962]" : "text-gray-600"
                        }`}
                      >
                        Precision Manufacturing
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedStep(3);
                          setBallAngle(getStepAngle(3));
                        }}
                        className={`absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 text-[10px] sm:text-xs md:text-sm uppercase tracking-wider transition-colors duration-300 text-center max-w-[70px] sm:max-w-[85px] md:max-w-[100px] ${
                          displayedStep === 3 ? "text-[#C9A962]" : "text-gray-600"
                        }`}
                      >
                        Professional Installation
                      </button>
                    </div>

                    {/* Interactive Circle Container */}
                    <div
                      ref={circleRef}
                      className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[320px] md:h-[320px]"
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
                          className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] object-contain opacity-80"
                        />
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
                        animate={{ x: ballX * circleScale, y: ballY * circleScale }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    </div>
                  </div>

                  {/* Left Content - Step Details */}
                  <div className="order-2 md:order-1 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={displayedStep}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-[#C9A962] text-lg sm:text-xl md:text-2xl uppercase tracking-wider font-medium mb-4 md:mb-6">
                          {processSteps[displayedStep].title}
                        </h3>
                        <p className="text-[#b5b5b5] text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-12">
                          {processSteps[displayedStep].description}
                        </p>
                      </motion.div>
                    </AnimatePresence>

                    {/* Step Counter */}
                    <div className="mt-auto">
                      <span className="text-gray-600 text-sm uppercase tracking-[0.2em] md:tracking-[0.3em]">
                        Step {displayedStep + 1}
                      </span>
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

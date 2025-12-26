"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Section } from "@/components/ui";

const categories = [
  { id: "all", name: "All Projects" },
  { id: "doors", name: "Doors & Windows" },
  { id: "kitchens", name: "Kitchens" },
  { id: "millwork", name: "Millwork" },
];

const projects = [
  { id: 1, title: "Modern Aluminum Entrance", category: "doors", image: "/gallery/project-1.jpg" },
  { id: 2, title: "Contemporary Kitchen Design", category: "kitchens", image: "/gallery/project-2.jpg" },
  { id: 3, title: "Custom Built-in Shelving", category: "millwork", image: "/gallery/project-3.jpg" },
  { id: 4, title: "Floor-to-Ceiling Windows", category: "doors", image: "/gallery/project-4.jpg" },
  { id: 5, title: "Luxury Kitchen Renovation", category: "kitchens", image: "/gallery/project-5.jpg" },
  { id: 6, title: "Walnut Cabinetry", category: "millwork", image: "/gallery/project-6.jpg" },
  { id: 7, title: "Pivot Door Installation", category: "doors", image: "/gallery/project-7.jpg" },
  { id: 8, title: "Minimalist Kitchen", category: "kitchens", image: "/gallery/project-8.jpg" },
  { id: 9, title: "Home Office Millwork", category: "millwork", image: "/gallery/project-9.jpg" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="bg-black pt-20">
      {/* Hero Section */}
      <Section className="bg-black">
        <Container>
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white">
              Our <span className="text-[#C9A962]">Gallery</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              Explore our portfolio of completed projects. Each piece showcases our
              commitment to exceptional craftsmanship and timeless design.
            </p>
          </div>
        </Container>
      </Section>

      {/* Filter Tabs */}
      <Section className="bg-black py-8">
        <Container>
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wider transition-all ${
                  activeCategory === category.id
                    ? "bg-[#C9A962] text-black"
                    : "border border-[#2a2a2a] text-gray-400 hover:border-[#C9A962] hover:text-[#C9A962]"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </Container>
      </Section>

      {/* Gallery Grid */}
      <Section className="bg-black py-8">
        <Container>
          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-[#1a1a1a] cursor-pointer"
                >
                  {/* Placeholder for image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-600 text-sm">Image Placeholder</span>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h3 className="font-serif text-lg text-white">{project.title}</h3>
                      <p className="text-[#C9A962] text-sm capitalize">{project.category}</p>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#C9A962]/0 group-hover:border-[#C9A962] transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#C9A962]/0 group-hover:border-[#C9A962] transition-colors duration-300" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">No projects found in this category.</p>
            </div>
          )}
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-[#1a1a1a]">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-white">
              Ready to Create Something <span className="text-[#C9A962]">Beautiful</span>?
            </h2>
            <p className="mt-4 text-gray-400">
              Let us bring your vision to life. Schedule a consultation to discuss
              your next project.
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-[#C9A962] text-[#C9A962] hover:bg-[#C9A962]/10 transition-colors uppercase tracking-wider text-sm font-medium"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

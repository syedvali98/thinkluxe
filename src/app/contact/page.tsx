"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import AnimatedPill from "@/components/ui/AnimatedPill";
import AnimatedButton from "@/components/ui/AnimatedButton";
import ImageViewer from "@/components/ui/ImageViewer";
import { showroomImages } from "@/data/showroomImages";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    timeline: "",
    service: "",
    message: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Showroom carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % showroomImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + showroomImages.length) % showroomImages.length);
  }, []);

  // Detect when carousel comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-scroll effect - only when in view
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [isInView, nextSlide]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent double submission
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("city", formData.city);
      formDataToSend.append("timeline", formData.timeline);
      formDataToSend.append("service", formData.service);
      formDataToSend.append("message", formData.message);
      if (file) {
        formDataToSend.append("file", file);
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formDataToSend,
      });

      // Try to parse response as JSON
      let data;
      try {
        data = await response.json();
      } catch {
        // If JSON parsing fails, throw a generic error
        throw new Error("Server error. Please try again later.");
      }

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitStatus("success");
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        timeline: "",
        service: "",
        message: "",
      });
      setFile(null);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      if (error instanceof TypeError && error.message === "Failed to fetch") {
        setErrorMessage("Network error. Please check your connection and try again.");
      } else {
        setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {/* Pill Badge */}
            <div className="flex justify-center mb-6">
              <AnimatedPill>Contact Us</AnimatedPill>
            </div>

            <h1 className="font-serif font-medium text-2xl md:text-3xl lg:text-4xl text-[#C9A962] mb-6">
              Let&apos;s Create Something Beautiful
            </h1>
            <p className="text-[#b5b5b5] font-medium text-lg max-w-2xl mx-auto">
              Ready to transform your space? Get in touch with our team to discuss your vision and schedule a consultation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-[#b5b5b5] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border border-[#3d3d3d] rounded-full text-white placeholder:text-[#3d3d3d] focus:border-[#C9A962] focus:outline-none transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm text-[#b5b5b5] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-transparent border border-[#3d3d3d] rounded-full text-white placeholder:text-[#3d3d3d] focus:border-[#C9A962] focus:outline-none transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm text-[#b5b5b5] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-transparent border border-[#3d3d3d] rounded-full text-white placeholder:text-[#3d3d3d] focus:border-[#C9A962] focus:outline-none transition-colors"
                      placeholder="(416) 555-1234"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="city" className="block text-sm text-[#b5b5b5] mb-2">
                      City/Area
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-transparent border border-[#3d3d3d] rounded-full text-white placeholder:text-[#3d3d3d] focus:border-[#C9A962] focus:outline-none transition-colors"
                      placeholder="e.g. Brampton, Toronto"
                    />
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm text-[#b5b5b5] mb-2">
                      When do you want to start?
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full pl-4 pr-8 py-3 bg-black border border-[#3d3d3d] rounded-full text-white focus:border-[#C9A962] focus:outline-none transition-colors appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23C9A962%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center] bg-[length:1.25rem]"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-3-months">1-3 Months</option>
                      <option value="3-6-months">3-6 Months</option>
                      <option value="6-plus-months">6+ Months</option>
                      <option value="exploring">Just Exploring</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm text-[#b5b5b5] mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full pl-4 pr-8 py-3 bg-black border border-[#3d3d3d] rounded-full text-white focus:border-[#C9A962] focus:outline-none transition-colors appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23C9A962%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center] bg-[length:1.25rem]"
                  >
                    <option value="">Select a service</option>
                    <option value="kitchen">Custom Kitchen & Millwork</option>
                    <option value="aluminum">Aluminum Doors & Windows</option>
                    <option value="both">Both Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="file" className="block text-sm text-[#b5b5b5] mb-2">
                    Upload File (Optional)
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="file"
                      name="file"
                      onChange={handleFileChange}
                      accept="image/*,.pdf,.doc,.docx"
                      className="hidden"
                    />
                    <label
                      htmlFor="file"
                      className="flex items-center justify-center gap-3 w-full px-4 py-3 bg-transparent border border-dashed border-[#3d3d3d] rounded-full text-[#b5b5b5] hover:border-[#C9A962] hover:text-[#C9A962] transition-colors cursor-pointer"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                      </svg>
                      {file ? file.name : "Choose a file or drag it here"}
                    </label>
                  </div>
                  {file && (
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-sm text-[#C9A962] truncate max-w-[250px]">{file.name}</span>
                      <button
                        type="button"
                        onClick={() => setFile(null)}
                        className="text-[#b5b5b5] hover:text-white transition-colors flex-shrink-0"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-[#b5b5b5] mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-6 py-4 bg-transparent border border-[#3d3d3d] rounded-3xl text-white placeholder:text-[#3d3d3d] focus:border-[#C9A962] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>

                <AnimatedButton type="submit" fullRounded fullWidth disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </AnimatedButton>

                {/* Success/Error Messages */}
                <AnimatePresence mode="wait">
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-3 p-4 rounded-2xl bg-green-500/10 border border-green-500/30"
                    >
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-green-500 text-sm">
                        Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                      </p>
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-3 p-4 rounded-2xl bg-red-500/10 border border-red-500/30"
                    >
                      <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                      </svg>
                      <p className="text-red-500 text-sm">{errorMessage}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              {/* Showroom Images Carousel */}
              <div
                ref={carouselRef}
                className="relative aspect-[4/3] rounded-[30px] overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 cursor-pointer"
                    onClick={() => setIsViewerOpen(true)}
                  >
                    <Image
                      src={showroomImages[currentSlide]}
                      alt={`ThinkLuxe Showroom ${currentSlide + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/30 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white/70 hover:border-white hover:text-white hover:bg-black/40 transition-all z-10"
                  aria-label="Previous image"
                >
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/30 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white/70 hover:border-white hover:text-white hover:bg-black/40 transition-all z-10"
                  aria-label="Next image"
                >
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>

                {/* Slide Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white/90 text-xs sm:text-sm font-medium">
                    {currentSlide + 1} / {showroomImages.length}
                  </span>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <h3 className="font-serif font-medium text-2xl text-[#C9A962]">Visit Our Showroom</h3>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-[#C9A962]/30 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-[#C9A962]"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Address</p>
                    <p className="text-[#b5b5b5] text-sm font-medium">
                      Unit 15 - 80 Clementine Dr,<br />
                      Brampton, ON, L6Y 0L8, Canada
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-[#C9A962]/30 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-[#C9A962]"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Hours</p>
                    <p className="text-[#b5b5b5] text-sm font-medium">
                      Mon - Fri: 10am - 5pm (By Appointment)<br />
                      Weekends: By Appointment Only
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-[#C9A962]/30 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-[#C9A962]"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-[#b5b5b5] text-sm font-medium">416 555 1234</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-[#C9A962]/30 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-[#C9A962]"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-[#b5b5b5] text-sm font-medium">info@thinkluxe.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Viewer Modal */}
      <AnimatePresence>
        {isViewerOpen && (
          <ImageViewer
            src={showroomImages[currentSlide]}
            onClose={() => setIsViewerOpen(false)}
            onNext={nextSlide}
            onPrev={prevSlide}
            currentIndex={currentSlide}
            totalImages={showroomImages.length}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

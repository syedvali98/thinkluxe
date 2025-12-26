"use client";

import { useState } from "react";
import { Container, Section, Button } from "@/components/ui";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you within 24 hours.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main className="bg-black pt-20">
      {/* Hero Section */}
      <Section className="bg-black">
        <Container>
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white">
              Get in <span className="text-[#C9A962]">Touch</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              Have a project in mind? We would love to hear from you. Schedule a
              consultation or visit our showroom to experience our craftsmanship firsthand.
            </p>
          </div>
        </Container>
      </Section>

      {/* Contact Form Section */}
      <Section className="bg-black py-8">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-2xl text-[#C9A962]">Contact Information</h2>
              <p className="mt-4 text-gray-400">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1a1a1a] border border-[#2a2a2a]">
                    <svg className="h-5 w-5 text-[#C9A962]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Email</h3>
                    <a href="mailto:info@thinkluxe.com" className="mt-1 text-gray-400 hover:text-[#C9A962] transition-colors">
                      info@thinkluxe.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1a1a1a] border border-[#2a2a2a]">
                    <svg className="h-5 w-5 text-[#C9A962]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Phone</h3>
                    <a href="tel:4165551234" className="mt-1 text-gray-400 hover:text-[#C9A962] transition-colors">
                      416 555 1234
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1a1a1a] border border-[#2a2a2a]">
                    <svg className="h-5 w-5 text-[#C9A962]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Showroom</h3>
                    <p className="mt-1 text-gray-400">
                      Unit 15 - 80 Clementine Dr,<br />
                      Brampton, ON L6Y 0L8, Canada
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1a1a1a] border border-[#2a2a2a]">
                    <svg className="h-5 w-5 text-[#C9A962]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Hours</h3>
                    <p className="mt-1 text-gray-400">
                      Mon - Fri: 10am - 5pm (By Appointment)<br />
                      Weekends: By Appointment Only
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] px-4 py-3 text-white placeholder-gray-500 focus:border-[#C9A962] focus:outline-none focus:ring-1 focus:ring-[#C9A962]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] px-4 py-3 text-white placeholder-gray-500 focus:border-[#C9A962] focus:outline-none focus:ring-1 focus:ring-[#C9A962]"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] px-4 py-3 text-white placeholder-gray-500 focus:border-[#C9A962] focus:outline-none focus:ring-1 focus:ring-[#C9A962]"
                    placeholder="(416) 555-1234"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-white">
                    Service Interest
                  </label>
                  <select
                    name="service"
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] px-4 py-3 text-white focus:border-[#C9A962] focus:outline-none focus:ring-1 focus:ring-[#C9A962]"
                  >
                    <option value="">Select a service</option>
                    <option value="aluminum">Aluminum Doors & Windows</option>
                    <option value="kitchen">Custom Kitchen & Millwork</option>
                    <option value="design">Interior Design Consultation</option>
                    <option value="project">Project Management</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white">
                  Message *
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] px-4 py-3 text-white placeholder-gray-500 focus:border-[#C9A962] focus:outline-none focus:ring-1 focus:ring-[#C9A962] resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button type="submit" variant="gold-outline" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </Container>
      </Section>

      {/* Map Section Placeholder */}
      <Section className="bg-[#1a1a1a] py-0">
        <div className="h-[400px] w-full bg-[#2a2a2a] flex items-center justify-center">
          <p className="text-gray-600">Map Placeholder - Google Maps Integration</p>
        </div>
      </Section>
    </main>
  );
}

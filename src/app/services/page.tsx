import { Metadata } from "next";
import { Container, Section, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore ThinkLuxe services - aluminum doors & windows, custom kitchens, millwork, and interior design consultation.",
};

const services = [
  {
    id: "aluminum",
    title: "Aluminum Doors & Windows",
    description: "Precision-engineered aluminum systems that blend architectural beauty with superior performance. Our doors and windows offer exceptional thermal efficiency, security, and timeless elegance.",
    features: [
      "Thermally broken aluminum frames",
      "Custom sizes and configurations",
      "Premium hardware and finishes",
      "Energy-efficient glazing options",
      "Professional installation",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    id: "kitchen",
    title: "Custom Kitchen & Millwork",
    description: "Bespoke cabinetry and millwork crafted to perfection. From contemporary minimalism to classic elegance, we create kitchens that are both functional masterpieces and works of art.",
    features: [
      "Custom cabinet design",
      "Premium wood selections",
      "Soft-close mechanisms",
      "Integrated lighting solutions",
      "Stone countertop coordination",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    id: "design",
    title: "Interior Design Consultation",
    description: "Our design experts work closely with you to understand your vision and lifestyle, creating cohesive spaces that reflect your unique taste and enhance your daily living.",
    features: [
      "Personalized design concepts",
      "Material and finish selection",
      "3D visualization",
      "Space planning optimization",
      "Color consultation",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.39m3.421 3.415A15.995 15.995 0 0118.75 7.5m-9 6.75v1.875a.375.375 0 01-.375.375H6a.375.375 0 01-.375-.375v-1.875" />
      </svg>
    ),
  },
  {
    id: "project",
    title: "Project Management",
    description: "End-to-end project coordination ensuring seamless execution from concept to completion. We handle every detail so you can enjoy a stress-free transformation of your space.",
    features: [
      "Dedicated project manager",
      "Timeline coordination",
      "Contractor oversight",
      "Quality assurance",
      "Budget management",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-black pt-20">
      {/* Hero Section */}
      <Section className="bg-black">
        <Container>
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white">
              Our <span className="text-[#C9A962]">Services</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              From architectural aluminum systems to bespoke millwork, we offer
              comprehensive solutions to elevate your living spaces with luxury
              and precision craftsmanship.
            </p>
          </div>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section className="bg-black py-8">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] p-8 hover:border-[#C9A962]/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#C9A962]/10 text-[#C9A962]">
                    {service.icon}
                  </div>
                  <h2 className="font-serif text-xl md:text-2xl text-white">{service.title}</h2>
                </div>
                <p className="mt-4 text-gray-400 text-sm leading-relaxed">{service.description}</p>
                <ul className="mt-6 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-gray-400">
                      <svg className="h-4 w-4 text-[#C9A962] flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section className="bg-[#1a1a1a]">
        <Container>
          <h2 className="font-serif text-3xl md:text-4xl text-white text-center">
            Our <span className="text-[#C9A962]">Process</span>
          </h2>
          <p className="mt-4 text-center text-gray-400 max-w-2xl mx-auto">
            A seamless journey from initial consultation to final installation.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {[
              { step: "01", title: "Consultation", desc: "We discuss your vision, requirements, and budget" },
              { step: "02", title: "Design", desc: "Our team creates detailed plans and 3D visualizations" },
              { step: "03", title: "Fabrication", desc: "Premium materials crafted with precision" },
              { step: "04", title: "Installation", desc: "Expert installation with attention to every detail" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="font-serif text-4xl text-[#C9A962]/30">{item.step}</div>
                <h3 className="mt-2 font-serif text-lg text-white">{item.title}</h3>
                <p className="mt-2 text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-black">
        <Container>
          <div className="rounded-lg bg-[#C9A962]/5 border border-[#C9A962]/20 px-8 py-16 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-white">
              Ready to Start Your Project?
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">
              Let us bring your vision to life. Schedule a consultation to discuss
              your project requirements.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="gold-outline" size="lg">
                Get in Touch
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

import { Metadata } from "next";
import { Container, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about ThinkLuxe - luxury aluminum doors, windows, custom kitchens and millwork in Brampton.",
};

const values = [
  {
    title: "Craftsmanship",
    description: "Every project reflects our commitment to meticulous attention to detail and superior quality materials.",
  },
  {
    title: "Innovation",
    description: "We blend traditional artisanship with cutting-edge technology to deliver exceptional results.",
  },
  {
    title: "Excellence",
    description: "From consultation to installation, we maintain the highest standards at every stage.",
  },
];

const team = [
  {
    name: "Design Team",
    role: "Creative Vision",
  },
  {
    name: "Installation Experts",
    role: "Precision Execution",
  },
  {
    name: "Project Managers",
    role: "Seamless Delivery",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-black pt-20">
      {/* Hero Section */}
      <Section className="bg-black">
        <Container>
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white">
              About <span className="text-[#C9A962]">ThinkLuxe</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              We are artisans of luxury living, dedicated to transforming spaces with
              premium aluminum doors, windows, custom kitchens, and bespoke millwork.
              Our passion lies in bringing architectural elegance to every home.
            </p>
          </div>
        </Container>
      </Section>

      {/* Mission Section */}
      <Section className="bg-[#1a1a1a]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-serif text-3xl text-[#C9A962]">
                Our Mission
              </h2>
              <p className="mt-4 text-gray-400 leading-relaxed">
                To deliver uncompromising luxury and craftsmanship to discerning
                homeowners who demand excellence. We believe that exceptional design
                should be accessible, and we work tirelessly to make bespoke
                architectural elements a reality for our clients.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-3xl text-[#C9A962]">
                Our Vision
              </h2>
              <p className="mt-4 text-gray-400 leading-relaxed">
                To be the premier destination for luxury home improvements in the
                Greater Toronto Area, recognized for our exceptional quality,
                innovative designs, and unwavering commitment to client satisfaction.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section className="bg-black">
        <Container>
          <h2 className="font-serif text-3xl md:text-4xl text-white text-center">
            Our <span className="text-[#C9A962]">Values</span>
          </h2>
          <p className="mt-4 text-center text-gray-400 max-w-2xl mx-auto">
            The principles that guide every project we undertake.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] p-8 hover:border-[#C9A962]/30 transition-colors"
              >
                <h3 className="font-serif text-xl text-[#C9A962]">{value.title}</h3>
                <p className="mt-3 text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Team Section */}
      <Section className="bg-[#1a1a1a]">
        <Container>
          <h2 className="font-serif text-3xl md:text-4xl text-white text-center">
            Our <span className="text-[#C9A962]">Team</span>
          </h2>
          <p className="mt-4 text-center text-gray-400 max-w-2xl mx-auto">
            Dedicated professionals committed to bringing your vision to life.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="mx-auto h-32 w-32 rounded-full bg-[#2a2a2a] border border-[#C9A962]/20" />
                <h3 className="mt-4 font-serif text-lg text-[#C9A962]">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Showroom CTA */}
      <Section className="bg-black">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-white">
              Visit Our <span className="text-[#C9A962]">Showroom</span>
            </h2>
            <p className="mt-4 text-gray-400">
              Experience our craftsmanship firsthand. Step into our exclusive showroom
              where every finish, texture, and detail has been hand-selected to inspire
              elevated living.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-[#C9A962] text-[#C9A962] hover:bg-[#C9A962]/10 transition-colors uppercase tracking-wider text-sm font-medium"
              >
                Schedule a Visit
              </a>
            </div>
            <p className="mt-6 text-gray-500 text-sm">
              Unit 15 - 80 Clementine Dr, Brampton, ON L6Y 0L8
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
}

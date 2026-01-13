"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navigation = {
  column1: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
  ],
  services: {
    name: "Services",
    subItems: [
      { name: "Custom Kitchen & Millwork", href: "/kitchen" },
      { name: "Aluminum Doors & Windows", href: "/aluminum-doors-windows" },
    ],
  },
  column2: [
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-[#121211B2] relative overflow-hidden">
      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-16 lg:px-8 relative z-10">
        <div className="grid gap-8 md:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-12">
          {/* Left Side - Get in Touch */}
          <div className="lg:col-span-5 text-center md:text-left">
            <h3 className="font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-[#C9A962]">
              Get in Touch
            </h3>
            <p className="mt-4 text-[#7B7B7B] text-sm md:text-base leading-relaxed font-medium">
              Have a project? Let&apos;s get in touch. <br/> We respond fast.
            </p>
            <div className="mt-6 md:mt-8 flex gap-5 md:gap-4 justify-center md:justify-start">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#7B7B7B] hover:text-[#C9A962] transition-colors p-2 -m-2"
                  aria-label={item.name}
                >
                  <item.icon className="h-6 w-6 sm:h-5 sm:w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Navigation & Contact */}
          <div className="lg:col-span-7 w-full md:w-auto">
            {/* Navigation Grid - 2x2 on mobile, flex on desktop */}
            <div className="grid grid-cols-2 md:flex md:flex-wrap gap-8 md:gap-12 justify-items-center md:justify-end text-center md:text-left">
              {/* Nav Column 1 */}
              <div className="flex flex-col gap-3">
                {navigation.column1.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-xs uppercase tracking-[0.2em] transition-colors ${
                      pathname === item.href
                        ? "text-[#C9A962]"
                        : "text-[#7B7B7B] hover:text-[#C9A962]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Nav Column 2 */}
              <div className="flex flex-col gap-3">
                {navigation.column2.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-xs uppercase tracking-[0.2em] transition-colors ${
                      pathname === item.href
                        ? "text-[#C9A962]"
                        : "text-[#7B7B7B] hover:text-[#C9A962]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Services Column - full width on mobile */}
              <div className="col-span-2 md:col-span-1 flex flex-col gap-3 items-center md:items-start">
                <span className="text-xs uppercase tracking-[0.2em] text-[#7B7B7B]">
                  {navigation.services.name}
                </span>
                {navigation.services.subItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-xs tracking-[0.1em] transition-colors ${
                      pathname === item.href
                        ? "text-[#C9A962]"
                        : "text-[#7B7B7B] hover:text-[#C9A962]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Contact Info - hidden on mobile, shown inline on desktop */}
              <div className="hidden md:flex flex-col gap-4 items-start">
                <a
                  href="mailto:info@thinkluxe.com"
                  className="text-sm text-[#7B7B7B] hover:text-[#C9A962] transition-colors flex items-center gap-2 pb-2 border-b border-white/30"
                >
                  <svg
                    className="h-4 w-4"
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
                  info@thinkluxe.com
                  <span className="flex w-6 h-6 rounded-full border border-current items-center justify-center">
                    <svg
                      className="h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </span>
                </a>
                <a
                  href="tel:4165551234"
                  className="text-sm text-[#7B7B7B] hover:text-[#C9A962] transition-colors flex items-center gap-2"
                >
                  <svg
                    className="h-4 w-4"
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
                  416 555 1234
                </a>
              </div>
            </div>

            {/* Contact Info - shown on mobile only, below the nav grid */}
            <div className="mt-8 flex md:hidden flex-col items-center gap-4">
              <a
                href="mailto:info@thinkluxe.com"
                className="text-sm text-[#7B7B7B] hover:text-[#C9A962] transition-colors flex items-center gap-2 pb-2 border-b border-white/30"
              >
                <svg
                  className="h-4 w-4"
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
                info@thinkluxe.com
                <span className="hidden sm:flex w-6 h-6 rounded-full border border-current items-center justify-center">
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </span>
              </a>
              <a
                href="tel:4165551234"
                className="text-sm text-[#7B7B7B] hover:text-[#C9A962] transition-colors flex items-center gap-2"
              >
                <svg
                  className="h-4 w-4"
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
                416 555 1234
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Logo - larger on mobile for visual impact */}
      <div className="relative w-full flex justify-center mt-8 md:mt-0">
        <div className="w-[90vw] sm:w-[80vw] lg:w-[70vw]">
          <Image
            src="/images/footer-logo.png"
            alt="ThinkLuxe"
            width={1200}
            height={400}
            className="w-full h-auto object-contain opacity-80"
          />
        </div>
      </div>
    </footer>
  );
}

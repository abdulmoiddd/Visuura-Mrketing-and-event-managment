import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/site";

export default function BalancedFooter() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/#about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Contact Agency", href: WHATSAPP_URL, external: true },
  ];

  const coreServices = [
    { name: "Digital Marketing", href: "/Services/Services-0" },
    { name: "Website Development", href: "/Services/Services-1" },
    { name: "Graphic Design", href: "/Services/Services-2" },
    { name: "Event Management", href: "/Services/Services-3" },
    { name: "View All Services →", href: "/vcard", isHighlight: true },
  ];

  return (
    <footer className="relative bg-[#0a0a0a] text-[#E3ECEC] pt-12 md:pt-16 pb-6 overflow-hidden border-t border-[#161616]/10">
      {/* --- AMBIENT GLOW EFFECTS --- */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary rounded-full mix-blend-screen filter blur-[140px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary rounded-full mix-blend-screen filter blur-[150px] opacity-[0.03] pointer-events-none"></div>

      {/* --- WATERMARK --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center pointer-events-none select-none z-0 overflow-hidden">
        <span className="text-[22vw] lg:text-[15vw] font-black tracking-tighter text-white/[0.02] whitespace-nowrap">
          VISUURA
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* --- COMPACT 4-COLUMN GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-12">
          {/* COLUMN 1: Brand & Contact (WITH SOCIALS MOVED HERE) */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-block">
              <Image
                src="/weblogowhite.png"
                alt="Visuura Logo"
                width={140}
                height={40}
                className="w-auto h-8 object-contain hover:opacity-80 transition-opacity"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-[250px]">
              A full-service creative agency delivering impactful strategies and
              elite event execution globally.
            </p>

            <div className="flex flex-col gap-3 mt-2">
              <a
                href={`tel:${WHATSAPP_NUMBER}`}
                className="flex items-center gap-3 group w-fit"
              >
                <Phone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-bold text-white group-hover:text-primary transition-colors tracking-wide">
                  +92 (331) 2227697
                </span>
              </a>
              <a
                href="mailto:visuura@gmail.com"
                className="flex items-center gap-3 group w-fit"
              >
                <Mail className="w-4 h-4 text-white/60 group-hover:text-primary group-hover:scale-110 transition-all" />
                <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                  visuura@gmail.com
                </span>
              </a>

              {/* SOCIAL LINKS MOVED ABOVE */}
              <div className="flex items-center gap-3 mt-1">
                <a
                  href="https://www.linkedin.com/in/visuura"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-primary hover:text-[#161616] hover:scale-110 transition-all"
                >
                  <svg
                    width="14"
                    height="14"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/visuura"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-primary hover:text-[#161616] hover:scale-110 transition-all"
                >
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <h5 className="text-sm font-black text-white uppercase tracking-wider mb-2">
              Explore
            </h5>
            <ul className="flex flex-col gap-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-primary transition-colors font-medium"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-primary transition-colors font-medium"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Core Services */}
          <div className="flex flex-col gap-3">
            <h5 className="text-sm font-black text-white uppercase tracking-wider mb-2">
              Services
            </h5>
            <ul className="flex flex-col gap-3 text-sm">
              {coreServices.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className={`transition-colors font-medium ${
                      service.isHighlight
                        ? "text-primary hover:underline text-xs tracking-widest uppercase mt-1 block font-bold"
                        : "text-white/60 hover:text-primary"
                    }`}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Global Offices */}
          <div className="flex flex-col gap-3">
            <h5 className="text-sm font-black text-white uppercase tracking-wider mb-2">
              Global Presence
            </h5>
            <ul className="flex flex-col gap-5 text-sm">
              {/* Pakistan HQ */}
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-0.5" size={18} />
                <div className="leading-snug">
                  <span className="font-bold text-white block mb-1 text-xs uppercase tracking-wider">
                    Pakistan (HQ)
                  </span>
                  <a
                    href="https://maps.app.goo.gl/UBc9TpEcz8KZN75SA"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/60 hover:text-primary transition-colors block"
                  >
                    Suit 1-A, F-456, F Block,
                    <br />
                    Satellite Town, Rawalpindi
                  </a>
                </div>
              </li>

              {/* UK Wing */}
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-0.5" size={18} />
                <div className="leading-snug">
                  <span className="font-bold text-white block mb-1 text-xs uppercase tracking-wider">
                    UK Wing
                  </span>
                  <span className="text-white/60 block">
                    71-75 Shelton Street,
                    <br />
                    Covent Garden, London, UK
                  </span>
                </div>
              </li>

              {/* Dubai Wing */}
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-0.5" size={18} />
                <div className="leading-snug">
                  <span className="font-bold text-white block mb-1 text-xs uppercase tracking-wider">
                    Dubai Wing
                  </span>
                  <span className="text-white/60 block">
                    Building 16, Innovation Hub,
                    <br />
                    Dubai Internet City, UAE
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40 font-medium">
          <p className="order-2 md:order-1 text-center md:text-left">
            © {new Date().getFullYear()} Visuura. All rights reserved.
          </p>

          <div className="order-1 md:order-2 flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/sitemap"
              className="hover:text-primary transition-colors"
            >
              Sitemap
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

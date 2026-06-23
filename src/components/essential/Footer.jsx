import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/site";

export default function BalancedFooter() {
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);

  const exploreLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/#about" },
    { name: "Services", href: "#", isDropdown: true },
    { name: "Team", href: "/#team" },
    { name: "Why Us", href: "/#whyus" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Testimonials", href: "/#testimonials" },
  ];

  const topServices = [
    { name: "Digital Marketing", href: "/Services/Services-0" },
    { name: "Website Development", href: "/Services/Services-1" },
    { name: "Graphic Design & Branding", href: "/Services/Services-2" },
    { name: "Event Management", href: "/Services/Services-3" },
    { name: "Printing Solutions", href: "/Services/Services-4" },
  ];

  const additionalServices = [
    { name: "Photography & Videography", href: "/Services/Services-5" },
    { name: "SEO Services", href: "/Services/Services-6" },
    { name: "Google Ads Management", href: "/Services/Services-7" },
    { name: "E-Commerce Development", href: "/Services/Services-8" },
    { name: "App Development", href: "/Services/Services-9" },
    { name: "Corporate Branding", href: "/Services/Services-10" },
    { name: "Outdoor Advertising", href: "/Services/Services-11" },
  ];

  return (
    <footer className="relative bg-[#0a0a0a] text-[#E3ECEC] pt-16 md:pt-20 pb-8 overflow-hidden border-t border-[#161616]/10">
      {/* --- WATERMARK --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center pointer-events-none select-none z-0 overflow-hidden">
        <span className="text-[24vw] lg:text-[17vw] font-black tracking-tighter text-white/[0.02] whitespace-nowrap">
          VISUURA
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* --- BALANCED 4-COLUMN MAIN GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-12 md:mb-16">
          
          {/* COLUMN 1: Brand Info & PROMINENT Digital Outreach */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="inline-block">
              <Image
                src="/weblogowhite.png"
                alt="Visuura Logo"
                width={150}
                height={45}
                className="w-auto h-9 md:h-10 object-contain hover:opacity-80 transition-opacity"
              />
            </Link>
            <p className="text-white/60 leading-relaxed text-sm md:text-base">
              A full-service creative agency delivering impactful strategies across marketing, branding, and elite event execution right to your doorstep.
            </p>

            {/* --- UPGRADED PROMINENT CONTACT HUB --- */}
            <div className="flex flex-col gap-4 pt-3 mt-1 border-t border-white/10">
              
              {/* Hero Phone Number */}
              <a href={`tel:${WHATSAPP_NUMBER}`} className="group flex items-center gap-4 w-fit">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary transition-all duration-300">
                  <Phone className="w-5 h-5 text-primary group-hover:text-[#161616] transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/50">Call Us Anytime</span>
                  <span className="text-lg md:text-xl font-black text-white group-hover:text-primary transition-colors tracking-wide">
                    +92 (331) 2227697
                  </span>
                </div>
              </a>

              {/* Prominent Email */}
              <a href="mailto:visuura@gmail.com" className="group flex items-center gap-4 w-fit">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 group-hover:bg-primary transition-all duration-300">
                  <Mail className="w-5 h-5 text-white/60 group-hover:text-[#161616] transition-colors" />
                </div>
                <span className="text-base font-bold text-white/80 group-hover:text-white transition-colors">
                  visuura@gmail.com
                </span>
              </a>

              {/* Scaled Desktop Social Icons */}
              <div className="hidden md:flex gap-3 mt-2">
                <a
                  href="https://www.linkedin.com/in/visuura"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-[#161616] transition-all hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/visuura"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-[#161616] transition-all hover:-translate-y-1"
                  aria-label="Instagram"
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Navigation & Explore */}
          <div className="flex flex-col gap-4 mt-6 md:mt-0">
            <h5 className="text-base font-black text-white uppercase tracking-wider border-b border-white/10 pb-2.5">
              Explore
            </h5>
            <ul className="flex flex-col gap-2.5 text-sm md:text-base">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  {link.isDropdown ? (
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => setIsServicesExpanded(!isServicesExpanded)}
                        className="text-white/70 hover:text-primary transition-all flex items-center justify-between w-full text-left font-medium"
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesExpanded ? "rotate-180 text-primary" : ""}`} />
                      </button>
                      
                      {isServicesExpanded && (
                        <ul className="pl-3 border-l-2 border-primary/40 flex flex-col gap-2 my-1 text-xs md:text-sm">
                          {additionalServices.map((sub) => (
                            <li key={sub.name}>
                              <Link href={sub.href} className="text-white/50 hover:text-white transition-colors">
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link href={link.href} className="text-white/70 hover:text-primary transition-all font-medium">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-primary transition-all text-left font-medium"
                >
                  Contact Agency
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Flagship Services */}
          <div className="flex flex-col gap-4 mt-6 md:mt-0">
            <h5 className="text-base font-black text-white uppercase tracking-wider border-b border-white/10 pb-2.5">
              Core Capabilities
            </h5>
            <ul className="flex flex-col gap-3 text-sm md:text-base">
              {topServices.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-white/70 hover:text-primary transition-all font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="pt-2">
              <Link 
                href="/vcard" 
                className="text-xs font-bold uppercase tracking-widest text-primary hover:underline flex items-center gap-1"
              >
                View All 12 Services &rarr;
              </Link>
            </div>
          </div>

          {/* COLUMN 4: Triple Global Offices Hub */}
          <div className="flex flex-col gap-4 mt-6 md:mt-0">
            <h5 className="text-base font-black text-white uppercase tracking-wider border-b border-white/10 pb-2.5">
              Global Presence
            </h5>
            
            <div className="flex flex-col gap-5 text-xs md:text-sm">
              
              {/* --- 1. CLICKABLE PAKISTAN HQ MAPS LINK --- */}
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="text-primary shrink-0 mt-0.5" size={18} />
                <div>
                  <span className="font-bold text-white uppercase tracking-wider block text-xs mb-1">Headquarters (PK)</span>
                  <a 
                    href="https://maps.app.goo.gl/UBc9TpEcz8KZN75SA" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-white/60 hover:text-primary transition-colors leading-snug block"
                  >
                    Suit 1-A, F-456, F Block, <br />
                    Satellite Town, Rawalpindi
                  </a>
                </div>
              </div>

              {/* 2. UK Wing */}
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="text-primary shrink-0 mt-0.5" size={18} />
                <div>
                  <span className="font-bold text-white uppercase tracking-wider block text-xs mb-1">UK Wing</span>
                  <span className="text-white/60 leading-snug block">
                    71-75 Shelton Street, <br />
                    Covent Garden, London, UK
                  </span>
                </div>
              </div>

              {/* 3. Dubai Wing */}
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="text-primary shrink-0 mt-0.5" size={18} />
                <div>
                  <span className="font-bold text-white uppercase tracking-wider block text-xs mb-1">Dubai Wing</span>
                  <span className="text-white/60 leading-snug block">
                    Building 16, Innovation Hub, <br />
                    Dubai Internet City, UAE
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-medium">
          
          {/* Prominent Mobile Social Icons */}
          <div className="flex md:hidden gap-5 mb-2">
            <a href="https://www.linkedin.com/in/visuura" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/visuura" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-primary transition-colors">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>

          <p className="text-center">© {new Date().getFullYear()} Visuura. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
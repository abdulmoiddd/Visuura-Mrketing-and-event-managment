import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    // Severely reduced padding on mobile (pt-12 pb-6) while keeping desktop spacious
    <footer className="relative bg-[#0a0a0a] text-[#E3ECEC] pt-12 md:pt-24 pb-6 md:pb-8 overflow-hidden border-t border-[#161616]/10">
      {/* --- WATERMARK --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center pointer-events-none select-none z-0 overflow-hidden">
        <span className="text-[24vw] lg:text-[16vw] font-black tracking-tighter text-white/[0.02] whitespace-nowrap">
          VISUURA
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* --- MAIN GRID --- */}
        {/* Uses a 2-column grid on mobile to place links side-by-side, 4-columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-8 mb-8 md:mb-16">
          {/* Column 1: Brand Info (Spans 2 columns on mobile) */}
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-2 md:gap-6">
            <h4 className="text-2xl font-black tracking-tight text-white">
              VISUURA<span className="text-[var(--primary)]">.</span>
            </h4>
            {/* Hidden on mobile to save massive amounts of space */}
            <p className="hidden md:block text-white/60 leading-relaxed pr-4 text-base">
              A full-service creative agency offering innovative solutions in
              marketing, event management, and digital development to drive your
              growth.
            </p>

            {/* Social Icons (Desktop Only - Moved to bottom on mobile) */}
            <div className="hidden md:flex gap-4 mt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--primary)] hover:text-[#161616] transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--primary)] hover:text-[#161616] transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (1 column on mobile) */}
          <div className="col-span-1 flex flex-col gap-3 md:gap-6">
            <h5 className="text-sm md:text-lg font-bold text-white uppercase tracking-wider">
              Explore
            </h5>
            <ul className="flex flex-col gap-2 md:gap-4">
              {["About Us", "Portfolio", "Team", "Testimonials", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs md:text-base text-white/60 hover:text-[var(--primary)] transition-all"
                    >
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Column 3: Services (1 column on mobile) */}
          <div className="col-span-1 flex flex-col gap-3 md:gap-6">
            <h5 className="text-sm md:text-lg font-bold text-white uppercase tracking-wider">
              Services
            </h5>
            <ul className="flex flex-col gap-2 md:gap-4">
              {["Web Dev", "Events", "Marketing", "Branding", "Printing"].map(
                (service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="text-xs md:text-base text-white/60 hover:text-[var(--primary)] transition-all"
                    >
                      {service}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Column 4: Contact Info (Spans 2 columns on mobile, items inline on tablet) */}
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-3 md:gap-6 mt-4 md:mt-0">
            <h5 className="text-sm md:text-lg font-bold text-white uppercase tracking-wider hidden md:block">
              Get in Touch
            </h5>
            <ul className="flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-6 md:gap-5 text-xs md:text-base">
              <li className="flex items-center gap-2 md:gap-3 text-white/60">
                <MapPin className="text-[var(--primary)] shrink-0" size={16} />
                <span>Rawalpindi, PK</span>
              </li>
              <li className="flex items-center gap-2 md:gap-3 text-white/60">
                <Phone className="text-[var(--primary)] shrink-0" size={16} />
                <span>+92 (300) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 md:gap-3 text-white/60">
                <Mail className="text-[var(--primary)] shrink-0" size={16} />
                <span>hello@visuura.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] md:text-sm text-white/40">
          {/* Social Icons (Mobile Only - Moved here to save space) */}
          <div className="flex md:hidden gap-5 mb-2">
            <a href="#" aria-label="Facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
          </div>

          <p>© {new Date().getFullYear()} Visuura. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

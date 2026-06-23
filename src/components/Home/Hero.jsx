import React from "react";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/site";
import {
  Camera,
  Monitor,
  Megaphone,
  CalendarDays,
  Printer,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--hero-from)] via-[var(--hero-via)] to-[var(--hero-to)] py-16 md:py-20 px-4 sm:px-6">
      {/* --- LIVE BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* MOBILE ONLY: Smooth glowing orbs for a liquid background feel */}
        <div className="md:hidden absolute top-[-5%] left-[-10%] w-72 h-72 bg-primary/20 blur-[80px] rounded-full animate-pulse"></div>
        <div
          className="md:hidden absolute bottom-[10%] right-[-10%] w-64 h-64 bg-yellow-400/10 blur-[60px] rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Marketing / Megaphone - Blurred on mobile for depth, sharp on desktop */}
        <div className="absolute top-[12%] left-[5%] md:top-[15%] md:left-[10%] text-primary/30 md:text-primary/20 animate-[bounce_4s_infinite] scale-75 md:scale-100 origin-center blur-[6px] md:blur-none opacity-50 md:opacity-100 transition-all">
          <Megaphone size={80} strokeWidth={1} />
        </div>

        {/* Events / Calendar */}
        <div className="absolute top-[18%] right-[5%] md:top-[20%] md:right-[15%] text-[#161616]/10 md:text-[#161616]/5 animate-[pulse_3s_infinite] scale-50 md:scale-100 origin-center blur-[8px] md:blur-none opacity-40 md:opacity-100 transition-all">
          <CalendarDays size={100} strokeWidth={1} />
        </div>

        {/* Web Dev / Monitor */}
        <div className="absolute bottom-[20%] left-[5%] md:bottom-[25%] md:left-[15%] text-[#161616]/10 md:text-[#161616]/5 animate-[pulse_4s_infinite] scale-50 md:scale-100 origin-center blur-[5px] md:blur-none opacity-40 md:opacity-100 transition-all">
          <Monitor size={90} strokeWidth={1} />
        </div>

        {/* Media / Camera */}
        <div className="absolute bottom-[15%] right-[5%] md:bottom-[20%] md:right-[10%] text-primary/30 md:text-primary/20 animate-[bounce_5s_infinite] scale-75 md:scale-100 origin-center blur-[6px] md:blur-none opacity-50 md:opacity-100 transition-all">
          <Camera size={70} strokeWidth={1} />
        </div>

        {/* Printing / Printer (Hidden on mobile entirely for a cleaner look) */}
        <div className="hidden md:block absolute top-[45%] left-[5%] text-[#161616]/5 animate-[pulse_5s_infinite] scale-100 origin-center">
          <Printer size={60} strokeWidth={1} />
        </div>
      </div>

      {/* --- MAIN HERO CONTENT --- */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center w-full">
        {/* Eyebrow Badge - Glassmorphism added for mobile only */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 md:bg-white backdrop-blur-md md:backdrop-blur-none shadow-[0_4px_20px_rgba(0,0,0,0.03)] md:shadow-sm border border-white/50 md:border-black/5 mb-8 transition-all">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-xs md:text-sm font-bold tracking-wider text-[#161616] uppercase">
            Welcome to Visuura
          </span>
        </div>

        {/* Main Headline - Tightened spacing on mobile for a smoother read */}
        <h1 className="text-[2.75rem] leading-[1.15] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#161616] tracking-tight md:leading-[1.1] mb-6 px-2 md:px-0">
          Building Brands. <br className="hidden md:block" />
          Creating{" "}
          <span className="relative whitespace-nowrap inline-block">
            <span className="relative z-10">Experiences.</span>
            {/* Brush effect made softer and angled slightly more on mobile */}
            <span className="absolute bottom-1 md:-bottom-1 left-0 w-full h-3 md:h-5 bg-primary/30 md:bg-primary/40 -z-10 -rotate-2 md:-rotate-1 rounded-sm transition-all"></span>
          </span>{" "}
          <br className="hidden md:block" />
          Driving Growth.
        </h1>

        {/* Subheading */}
        <p className="max-w-3xl text-base sm:text-lg md:text-xl text-[var(--foreground-muted)] leading-relaxed mb-10 px-4 sm:px-0 opacity-90 md:opacity-100">
          <strong className="text-[#161616] font-semibold">VISUURA</strong> is a
          full-service creative agency offering Marketing, Event Management,
          Website Development, Graphic Design, Branding, Printing, and Media
          Production solutions.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-4 mb-12 md:mb-14 w-full sm:w-auto px-6 sm:px-0">
          {/* Primary CTA - Given a soft glow shadow on mobile */}

          {/* <div className="hidden md:flex items-center"> */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-btn group flex items-center gap-2 text-base md:text-lg px-6 py-4 md:px-8 md:py-4 w-full sm:w-auto justify-center shadow-[0_8px_30px_rgb(245,198,22,0.25)] md:shadow-none"
          >
            Get a Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          {/* </div> */}

          {/* Secondary CTA - Softened border and glass effect on mobile */}
          <Link 
  href="/portfolio" 
  className="px-6 py-4 md:px-8 md:py-4 rounded-full border border-[#161616]/10 md:border-2 md:border-[#161616] bg-white/50 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none text-[#161616] font-semibold text-base md:text-lg hover:bg-[#161616] hover:text-[#E3ECEC] transition-all duration-300 w-full sm:w-auto flex items-center justify-center"
>
  View Our Portfolio
</Link>
        </div>

        {/* --- TRUST INDICATORS --- */}
        {/* Mobile uses a 2-column grid for smooth alignment; Desktop uses flex row */}
        <div className="w-full pt-8 md:pt-8 border-t border-black/5 md:border-black/10">
          <ul className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-y-5 gap-x-2 md:gap-x-6 text-[13px] sm:text-sm md:text-base font-medium text-[#161616]/80 md:text-[#161616] px-2 md:px-0">
            {[
              "Creative Agency",
              "Event Management",
              "Digital Marketing",
              "Printing Solutions",
            ].map((indicator, index) => (
              <li
                key={index}
                className="flex items-center justify-start md:justify-center gap-2 ml-4 md:ml-0"
              >
                <CheckCircle2 className="text-primary w-4 h-4 md:w-5 md:h-5 shrink-0" />
                <span>{indicator}</span>
              </li>
            ))}
            {/* Centered last item on mobile grid */}
            <li className="col-span-2 md:col-span-1 flex items-center justify-center gap-2 mt-2 md:mt-0">
              <CheckCircle2 className="text-primary w-4 h-4 md:w-5 md:h-5 shrink-0" />
              <span>Website Development</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

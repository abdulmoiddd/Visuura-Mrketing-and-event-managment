"use client";

import React from "react";
import {
  Layers,
  TrendingUp,
  ShieldCheck,
  Star,
  CheckCircle2,
} from "lucide-react";

export default function WhyUs() {
  const reasons = [
    {
      id: "01",
      title: "360° Creative Hub",
      description:
        "From pixel-perfect websites to large-scale printing and event management, we provide every service you need under one roof.",
      // Replaced fixed size={32} with responsive tailwind classes
      icon: <Layers className="w-6 h-6 md:w-8 md:h-8" />,
      features: [
        "Website Development",
        "Event Management",
        "Printing Solutions",
      ],
    },
    {
      id: "02",
      title: "Data-Driven Growth",
      description:
        "Our marketing campaigns and digital strategies are backed by real-time analytics to ensure maximum ROI for your brand.",
      icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />,
      features: [
        "Real-time Analytics",
        "SEO & Marketing",
        "Conversion Tracking",
      ],
    },
    {
      id: "03",
      title: "Flawless Execution",
      description:
        "Whether it's a corporate event or a time-sensitive printing job, our team is obsessed with precision and on-time delivery.",
      icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8" />,
      features: ["On-time Delivery", "Precision Planning", "Corporate Events"],
    },
    {
      id: "04",
      title: "Premium Quality",
      description:
        "We hold our creative standards to the highest level. Partnering with Visuura guarantees industry-leading output.",
      icon: <Star className="w-6 h-6 md:w-8 md:h-8" />,
      features: ["High-End Branding", "Graphic Design", "Media Production"],
    },
  ];

  return (
    // Reduced padding for mobile (py-16 px-4) and preserved desktop (md:py-24 md:px-6)
    <section
      id="whyus"
      className="w-full py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-br from-[var(--hero-from)] via-[var(--background)] to-[var(--hero-to)]"
    >
      {/* Decorative Gradient Orbs in Background */}
      <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-[var(--primary)] opacity-[0.05] md:opacity-[0.03] blur-[80px] md:blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#161616] opacity-[0.05] md:opacity-[0.03] blur-[80px] md:blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- HEADER --- */}
        {/* Reduced margin bottom on mobile */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-white shadow-sm border border-[var(--border-color)] mb-6">
            <Star className="w-3 h-3 md:w-4 md:h-4 text-[var(--primary)] fill-[var(--primary)]" />
            <h2 className="text-xs md:text-sm font-bold tracking-widest text-[#161616] uppercase">
              The Visuura Edge
            </h2>
          </div>
          {/* Typography scaled smoothly from mobile to desktop */}
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#161616] tracking-tight leading-[1.2] px-2 md:px-0">
            Elevating brands through <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[#d4a70f]">
              limitless creativity.
            </span>
          </h3>
        </div>

        {/* --- GRADIENT REVEAL GRID --- */}
        {/* Tightened grid gaps on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.id}
              // Added active:scale-[0.98] so tapping on mobile gives physical feedback
              className="group relative rounded-[1.5rem] md:rounded-[2rem] p-6 sm:p-8 md:p-10 overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-xl hover:shadow-[var(--primary)]/10 active:scale-[0.98] md:active:scale-100"
            >
              {/* Default Global Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--card-gradient-start)] to-[var(--card-gradient-end)] transition-opacity duration-500 opacity-100 group-hover:opacity-0"></div>

              {/* Hover/Tap Gradient Background (Yellow -> Dark Gold) */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>

              {/* Border Overlay */}
              <div className="absolute inset-0 border border-black/5 rounded-[1.5rem] md:rounded-[2rem] pointer-events-none"></div>

              {/* Card Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Header: Icon & Number */}
                <div className="flex items-start justify-between mb-6 md:mb-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#161616] group-hover:scale-110 transition-transform duration-500">
                    {reason.icon}
                  </div>
                  <span className="text-4xl md:text-5xl font-black text-[#161616] opacity-10 group-hover:opacity-20 transition-opacity duration-500 select-none">
                    {reason.id}
                  </span>
                </div>

                {/* Text Content */}
                <h4 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#161616] mb-3 md:mb-4">
                  {reason.title}
                </h4>
                <p className="text-[var(--foreground-muted)] group-hover:text-[#161616]/80 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8 transition-colors duration-500">
                  {reason.description}
                </p>

                {/* Features List */}
                <div className="mt-auto pt-5 md:pt-6 border-t border-black/5 group-hover:border-[#161616]/10 transition-colors duration-500">
                  {/* Changed gap for mobile */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 md:gap-y-3 gap-x-4">
                    {reason.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-[#161616] font-semibold text-xs md:text-sm"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-[var(--primary)] group-hover:text-[#161616] transition-colors duration-500 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

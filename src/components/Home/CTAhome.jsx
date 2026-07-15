"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

// --- Custom WhatsApp Icon ---
const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

export default function WhatsAppCTA() {
  // Format: Removed the "+" symbol for the wa.me link.
  // Added a pre-filled default message to reduce friction for the user.
  const whatsappNumber = "923312227697";
  const defaultMessage = encodeURIComponent(
    "Hi there! I'm interested in working with Visuura. Can we discuss a project?",
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <section className="w-full py-12 md:py-20 bg-[var(--background)] px-4 sm:px-6">
      {/* Floating Dark Banner */}
      <div className="max-w-5xl mx-auto relative rounded-[2rem] bg-[var(--foreground)] overflow-hidden shadow-2xl">
        {/* Background Ambient Glows */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[var(--primary)] rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[var(--primary)] rounded-full blur-[100px] opacity-10 translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="relative z-10 px-6 py-12 md:py-16 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Text Content */}
          <div className="text-center md:text-left max-w-xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
              Ready to bring your <br className="hidden md:block" />
              <span className="text-[var(--primary)]">vision to life?</span>
            </h2>
            <p className="text-gray-300 text-sm md:text-base font-medium leading-relaxed">
              Skip the long forms and emails. Connect directly with our core
              team on WhatsApp and get a response within minutes.
            </p>
          </div>

          {/* WhatsApp Action Button */}
          <div className="flex-shrink-0 relative group">
            {/* Pulsing Behind Button */}
            <div className="absolute inset-0 bg-[var(--primary)] rounded-full blur-xl opacity-40 group-hover:opacity-70 group-hover:blur-2xl transition-all duration-500 animate-pulse"></div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-3 bg-[var(--primary)] text-[#161616] px-8 py-4 rounded-full font-bold text-lg transition-transform duration-300 hover:scale-105 hover:-translate-y-1 shadow-xl"
            >
              {/* Spinning / Pulsing Icon Wrapper */}
              <div className="relative flex items-center justify-center">
                <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-40 animate-ping"></span>
                <WhatsAppIcon size={24} className="relative z-10" />
              </div>
              Let's Chat Now
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>

            {/* Tiny reassurance text below button */}
            <p className="absolute -bottom-7 left-0 right-0 text-center text-xs text-gray-400 font-semibold tracking-wider uppercase">
              Replies in ~5 mins
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

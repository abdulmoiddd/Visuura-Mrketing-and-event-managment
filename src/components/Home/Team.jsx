"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Team() {
  const sliderRef = useRef(null);

  // Mock Team Data (Now with individual social links)
  const team = [
    {
      id: 1,
      name: "Abdul Moid",
      designation: "Founder & Chief Operating Officer (COO)",
      image: "/Moid.png",
      socials: {
        linkedin: "https://www.linkedin.com/in/abdulmoiddd",
      },
    },
    {
      id: 2,
      name: "Muhammad Ibrahim",
      designation: "Founder & Chief Marketing Officer (CMO)",
      image: "/Ibrahim.png",
      socials: {
        linkedin: "https://www.linkedin.com/in/muhammad-ibrahim-bhatti/",
      },
    },

    {
      id: 3,
      name: "Abdul Moiz",
      designation: "Director of Web & Technology",
      image: "/Moiz.png",
      socials: {
        // linkedin: "https://www.linkedin.com/in/muhammad-ibrahim-bhatti/",
      },
    },
    {
      id: 3,
      name: "Muhammad Shahan",
      designation: "Director of Events & Production",
      image: "/shahan.png",
      socials: {
        // linkedin: "https://www.linkedin.com/in/muhammad-ibrahim-bhatti/",
      },
    },
    {
      id: 4,
      name: "Muhammad Abdullah",
      designation: "Business Development Manager",
      image: "/Abdullah.png",
      socials: {
        // linkedin: "https://www.linkedin.com/in/muhammad-ibrahim-bhatti/",
      },
    },
  ];

  // Smooth scroll function for the custom arrows (Desktop Only)
  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth > 768 ? 400 : 300;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Determine if we actually need the slider functionality
  const needsSlider = team.length > 3;

  return (
    // Adjusted padding for mobile (py-16) vs desktop (py-24)
    <section
      id="team"
      className="w-full py-16 md:py-24 bg-white relative overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-[var(--background)] -skew-x-12 translate-x-32 opacity-30 z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* --- HEADER & NAVIGATION CONTROLS --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-12 md:mb-16">
          <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-[var(--background)] shadow-sm border border-black/5 mb-4 md:mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
              <h2 className="text-xs md:text-sm font-bold tracking-widest text-[#161616] uppercase">
                The Minds Behind Visuura
              </h2>
            </div>
            {/* Typography scaled smoothly from mobile to desktop */}
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#161616] tracking-tight leading-[1.15] md:leading-[1.1]">
              Meet the creative force <br className="hidden md:block" />
              driving your{" "}
              <span className="text-[var(--primary)] underline decoration-4 underline-offset-4">
                success.
              </span>
            </h3>
          </div>

          {/* Custom Slider Arrows (Hidden entirely on mobile since it stacks vertically) */}
          {needsSlider && (
            <div className="hidden md:flex items-center justify-end gap-4 pb-2">
              <button
                onClick={() => scroll("left")}
                className="w-14 h-14 rounded-full border-2 border-black/10 flex items-center justify-center text-[#161616] hover:bg-[var(--primary)] hover:border-[var(--primary)] transition-all duration-300 active:scale-95 group"
                aria-label="Previous slide"
              >
                <ChevronLeft
                  size={24}
                  className="group-hover:-translate-x-1 transition-transform"
                />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-14 h-14 rounded-full border-2 border-black/10 flex items-center justify-center text-[#161616] hover:bg-[var(--primary)] hover:border-[var(--primary)] transition-all duration-300 active:scale-95 group"
                aria-label="Next slide"
              >
                <ChevronRight
                  size={24}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          )}
        </div>

        {/* --- DYNAMIC SLIDER / GRID CONTAINER --- */}
        <div className="relative md:-mx-6 md:px-6 w-full flex justify-center md:block">
          <div
            ref={sliderRef}
            // MOBILE: flex-col with large gap. DESKTOP: flex-row overflow-x-auto.
            className={`flex flex-col md:flex-row items-center gap-14 md:gap-6 md:overflow-x-auto md:snap-x md:snap-mandatory pb-12 pt-4 md:pb-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${
              !needsSlider ? "md:justify-center md:gap-12 w-full" : "w-full"
            }`}
          >
            {team.map((member) => (
              <div
                key={member.id}
                // MOBILE: w-full max-w-[340px]. DESKTOP: snap-start shrink-0 w-[400px].
                className={`w-[95%] max-w-[360px] md:snap-start md:shrink-0 group relative ${
                  !needsSlider ? "md:w-[400px]" : "md:w-[350px]"
                }`}
              >
                {/* Image Card */}
                {/* Height reduced slightly on mobile for better screen fit */}
                <div className="w-full h-[380px] md:h-[450px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden relative shadow-sm border border-black/5 group-hover:shadow-xl group-hover:shadow-[var(--primary)]/20 transition-all duration-500">
                  <img
                    src={member.image}
                    alt={member.name}
                    // MOBILE: No grayscale. DESKTOP: Grayscale until hover.
                    className="w-full h-full object-cover md:filter md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  />

                  {/* Overlay Gradient (Ensures text/icons pop) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161616]/60 md:from-[#161616]/80 via-transparent to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Social Icons */}
                  {/* MOBILE: Always visible, horizontal layout. DESKTOP: Hidden until hover, vertical layout. */}
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 flex flex-row md:flex-col gap-2 md:gap-3 translate-x-0 opacity-100 md:translate-x-10 md:opacity-0 md:group-hover:translate-x-0 md:group-hover:opacity-100 transition-all duration-500 z-20">
                    {/* Render LinkedIn only if it exists in the data */}
                    {member.socials?.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center text-[#161616] hover:bg-[var(--primary)] transition-colors shadow-lg"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="md:w-[18px] md:h-[18px]"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                    )}

                    {/* Render Twitter only if it exists in the data */}
                    {member.socials?.twitter && (
                      <a
                        href={member.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center text-[#161616] hover:bg-[var(--primary)] transition-colors shadow-lg md:delay-75"
                        aria-label={`${member.name}'s Twitter`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="md:w-[18px] md:h-[18px]"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                {/* Info Card */}
                {/* Adjusted mobile padding and positioning for a cleaner overlap */}
                <div className="absolute -bottom-8 md:-bottom-6 left-4 right-4 md:left-6 md:right-6 bg-white p-5 md:p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-black/5 md:group-hover:-translate-y-2 transition-transform duration-500 text-center z-20">
                  <h4 className="text-xl md:text-2xl font-black text-[#161616] mb-1">
                    {member.name}
                  </h4>
                  <p className="text-xs md:text-sm font-bold text-[var(--primary)] uppercase tracking-wide">
                    {member.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

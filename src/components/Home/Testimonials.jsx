import React from "react";
import { Sparkles } from "lucide-react"; // Utilizing your pre-installed Lucide icons[cite: 1]

const clientTestimonials = [
  {
    quote:
      "Visuura completely overhauled our growth strategy. From idea to execution, their digital campaigns scaled our inbound lead generation by 320% in Q1 alone.",
    author: "Marcus Vance",
    role: "VP of Marketing, Apex FinTech",
    cardBg: "bg-primary", // Mapped to var(--primary) -> #f5c616[cite: 1]
    textColor: "text-[#161616]", // Mapped to var(--accent-blue) / obsidian[cite: 1]
    subTextColor: "text-[#161616]/70",
    rawHex: "#f5c616",
    quoteBadgeBg: "bg-[#161616]",
    quoteBadgeText: "text-[#f5c616]",
  },
  {
    quote:
      "The headless Next.js architecture and mobile app they engineered for us is blazingly fast. Our cart abandonment dropped instantly the day it went live.",
    author: "Elena Rostova",
    role: "CTO, Lumina Retail",
    cardBg: "bg-[#161616]", // Mapped to var(--foreground) -> #161616[cite: 1]
    textColor: "text-white",
    subTextColor: "text-zinc-400",
    rawHex: "#161616",
    quoteBadgeBg: "bg-primary",
    quoteBadgeText: "text-[#161616]",
  },
  {
    quote:
      "From stage engineering to 4K live streaming, their team executed our 3,000-person annual tech summit flawlessly under one roof. Total peace of mind.",
    author: "David Sterling",
    role: "Head of Events, Nexa Global",
    cardBg: "bg-primary",
    textColor: "text-[#161616]",
    subTextColor: "text-[#161616]/70",
    rawHex: "#f5c616",
    quoteBadgeBg: "bg-[#161616]",
    quoteBadgeText: "text-primary",
  },
  {
    quote:
      "They didn't just redesign our logo; they codified an entire enterprise identity. The premium embossed brand lookbooks delivered to our doorstep were breathtaking.",
    author: "Sophia Al-Mansoor",
    role: "Brand Director, Vespera Holdings",
    cardBg: "bg-[#161616]",
    textColor: "text-white",
    subTextColor: "text-zinc-400",
    rawHex: "#161616",
    quoteBadgeBg: "bg-primary",
    quoteBadgeText: "text-[#161616]",
  },
  {
    quote:
      "Their synchronized DOOH digital billboard takeover paired with localized SEO put us on the map in three major metropolitan cities simultaneously.",
    author: "Tariq Khan",
    role: "Founder, Urban Oasis",
    cardBg: "bg-primary",
    textColor: "text-[#161616]",
    subTextColor: "text-[#161616]/70",
    rawHex: "#f5c616",
    quoteBadgeBg: "bg-[#161616]",
    quoteBadgeText: "text-primary",
  },

  {
    quote:
      "Visuura took our fragmented campaigns and turned them into a synchronized revenue engine. Our customer acquisition costs dropped by 42% in the first ninety days of takeover.",
    author: "Imran Siddiqui",
    role: "Head of Marketing, Nexus Logistics",
    cardBg: "bg-primary",
    textColor: "text-[#161616]",
    subTextColor: "text-[#161616]/70",
    rawHex: "#f5c616",
    quoteBadgeBg: "bg-[#161616]",
    quoteBadgeText: "text-primary",
  },
  // 2. Website Development
  {
    quote:
      "We needed an enterprise web architecture that wouldn't choke under heavy traffic surges. The custom Next.js portal Visuura deployed is a lightning-fast masterpiece of modern web engineering.",
    author: "Claire Beauchamp",
    role: "Managing Director, Solis Energy",
    cardBg: "bg-[#161616]",
    textColor: "text-white",
    subTextColor: "text-zinc-400",
    rawHex: "#161616",
    quoteBadgeBg: "bg-primary",
    quoteBadgeText: "text-[#161616]",
  },
  // 3. Graphic Design & Branding
  {
    quote:
      "They don't just make pretty graphics; they capture the exact psychology of your target demographic. The visual identity overhaul they delivered elevated us from a mid-tier player to a market leader.",
    author: "Hassan Qureshi",
    role: "Founder, Buraq Artisan Tea",
    cardBg: "bg-primary",
    textColor: "text-[#161616]",
    subTextColor: "text-[#161616]/70",
    rawHex: "#f5c616",
    quoteBadgeBg: "bg-[#161616]",
    quoteBadgeText: "text-primary",
  },
  // 4. Event Management
  {
    quote:
      "Executing a 2,500-delegate international summit is an operational nightmare. Visuura handled the stage engineering, A/V production, and guest flow so flawlessly it felt effortless.",
    author: "Evelyn Vance",
    role: "Chief Program Officer, Global Trade Forum",
    cardBg: "bg-[#161616]",
    textColor: "text-white",
    subTextColor: "text-zinc-400",
    rawHex: "#161616",
    quoteBadgeBg: "bg-primary",
    quoteBadgeText: "text-[#161616]",
  },
  // 5. Printing Solutions
  {
    quote:
      "The tactile fidelity of the embossed lookbooks Visuura delivered to our headquarters was magnificent. When our high-net-worth clients hold our brochures now, the conversion happens instantly.",
    author: "Liam Thorne",
    role: "Partner, Thorne & Crown Real Estate",
    cardBg: "bg-primary",
    textColor: "text-[#161616]",
    subTextColor: "text-[#161616]/70",
    rawHex: "#f5c616",
    quoteBadgeBg: "bg-[#161616]",
    quoteBadgeText: "text-primary",
  },
  // 6. Photography & Videography
  {
    quote:
      "The 4K commercial spot they produced for our seasonal launch captured our brand's ethos with cinematic perfection. The lighting, sound design, and color grading were Hollywood-tier.",
    author: "Zara Al-Husseini",
    role: "Creative Director, Maison de Couture",
    cardBg: "bg-[#161616]",
    textColor: "text-white",
    subTextColor: "text-zinc-400",
    rawHex: "#161616",
    quoteBadgeBg: "bg-primary",
    quoteBadgeText: "text-[#161616]",
  },
  // 7. SEO Services
  {
    quote:
      "We spent three years buried on page three of Google. Visuura’s technical SEO audit solved indexing bottlenecks we didn't even know existed; we now sit at #1 for our primary search terms.",
    author: "Arthur Pendelton",
    role: "VP of Digital Growth, OmniStack",
    cardBg: "bg-primary",
    textColor: "text-[#161616]",
    subTextColor: "text-[#161616]/70",
    rawHex: "#f5c616",
    quoteBadgeBg: "bg-[#161616]",
    quoteBadgeText: "text-primary",
  },
  // 8. Google Ads Management
  {
    quote:
      "Most agencies burn your ad budget on vanity clicks. Visuura stripped away the fluff and targeted high-intent corporate buyers—our Return on Ad Spend hit 610% last month.",
    author: "Usman Ghani",
    role: "E-Commerce Director, Dervish Leather",
    cardBg: "bg-[#161616]",
    textColor: "text-white",
    subTextColor: "text-zinc-400",
    rawHex: "#161616",
    quoteBadgeBg: "bg-primary",
    quoteBadgeText: "text-[#161616]",
  },
  // 9. E-Commerce Development
  {
    quote:
      "Our old storefront was leaking checkouts. Visuura engineered a custom headless Shopify flow that boosted our Average Order Value by 28% within two weeks of deployment.",
    author: "Samantha Lin",
    role: "Operations Lead, Nectar Botanicals",
    cardBg: "bg-primary",
    textColor: "text-[#161616]",
    subTextColor: "text-[#161616]/70",
    rawHex: "#f5c616",
    quoteBadgeBg: "bg-[#161616]",
    quoteBadgeText: "text-primary",
  },
  // 10. App Development
  {
    quote:
      "From raw UI wireframes to App Store deployment, their mobile engineering team delivered a stable, intuitive iOS and Android application that our user base is actively raving about.",
    author: "Daniyal Zafar",
    role: "Co-Founder, PayPulse",
    cardBg: "bg-[#161616]",
    textColor: "text-white",
    subTextColor: "text-zinc-400",
    rawHex: "#161616",
    quoteBadgeBg: "bg-primary",
    quoteBadgeText: "text-[#161616]",
  },
  // 11. Corporate Branding
  {
    quote:
      "Rebranding a legacy 30-year-old firm requires immense strategic tact. Visuura respected our heritage while injecting a sharp, authoritative modern positioning that our entire board backed.",
    author: "Gregory Sterling",
    role: "CEO, Sterling Maritime",
    cardBg: "bg-primary",
    textColor: "text-[#161616]",
    subTextColor: "text-[#161616]/70",
    rawHex: "#f5c616",
    quoteBadgeBg: "bg-[#161616]",
    quoteBadgeText: "text-primary",
  },
  // 12. Outdoor Advertising
  {
    quote:
      "Their media buyers secured prime DOOH digital billboard inventory across three major transit arteries. The physical brand presence in the city became completely inescapable.",
    author: "Amina Malik",
    role: "Brand Lead, Zaryab Jewels",
    cardBg: "bg-[#161616]",
    textColor: "text-white",
    subTextColor: "text-zinc-400",
    rawHex: "#161616",
    quoteBadgeBg: "bg-primary",
    quoteBadgeText: "text-[#161616]",
  },
  // 13. Full-Service Summary
  {
    quote:
      "The ultimate luxury of working with Visuura is having a singular creative partner. They coded our site, filmed our promo, printed our packaging, and delivered the physical activation right to our doorstep.",
    author: "Sohail Abbasi",
    role: "Managing Director, Prime Hospitality Group",
    cardBg: "bg-primary",
    textColor: "text-[#161616]",
    subTextColor: "text-[#161616]/70",
    rawHex: "#f5c616",
    quoteBadgeBg: "bg-[#161616]",
    quoteBadgeText: "text-primary",
  },
  // 14. Agency Relationship
  {
    quote:
      "Finding an agency that marries elite strategic execution with zero communication lag is rare. Visuura treats our sensitive commercial deadlines with the exact same urgency we do.",
    author: "Victoria Mendez",
    role: "Head of Global Expansion, Kinetix AI",
    cardBg: "bg-[#161616]",
    textColor: "text-white",
    subTextColor: "text-zinc-400",
    rawHex: "#161616",
    quoteBadgeBg: "bg-primary",
    quoteBadgeText: "text-[#161616]",
  },
];

export default function VisuuraTestimonials() {
  // Duplicated once to create a seamless, jump-free infinite marquee loop
  const marqueeItems = [...clientTestimonials, ...clientTestimonials];

  return (
    <section
      className="relative overflow-hidden bg-background py-24 text-foreground"
      id="testimonials"
    >
      {/* 1. Visuura Styled Section Header */}
      <div className="mx-auto max-w-4xl px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 mb-4">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-xs font-bold uppercase tracking-widest text-foreground">
            Proven Market Impact
          </span>
        </div>
        <h2 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl text-foreground">
          Measurable Results. <br className="hidden sm:block" /> Delivered To
          Your Doorstep.
        </h2>
      </div>

      {/* 2. Double-Skewed Marquee Track */}
      <div className="relative mt-20 w-full overflow-hidden py-6">
        <div className="animate-marquee flex w-max gap-6 sm:gap-8 hover:[animation-play-state:paused]">
          {marqueeItems.map((item, index) => (
            <div
              key={index}
              className={`relative w-[320px] shrink-0 sm:w-[380px] md:w-[420px] ${item.cardBg} rounded-[2.5rem] p-8 sm:p-10 shadow-xl transition-all duration-300 hover:shadow-2xl`}
              style={{ transform: "skewY(-2deg)" }} // Shears the card box upwards to the right
            >
              {/* Dynamic Floating Quote Badge */}
              <div
                className={`absolute -top-6 right-8 flex h-12 w-12 items-center justify-center rounded-full ${item.quoteBadgeBg} ${item.quoteBadgeText} shadow-lg transition-transform hover:scale-110`}
              >
                {/* FIXED: Changed invalid 'fill-currentColor' to 'fill-current' */}
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>

              {/* Inner text wrapper sheared back (+2deg) to keep typography strictly level */}
              <div
                className="flex h-full min-h-[180px] flex-col justify-between"
                style={{ transform: "skewY(2deg)" }}
              >
                <p
                  className={`px-1 pt-2 text-left text-sm sm:text-base font-medium leading-relaxed ${item.textColor}`}
                >
                  &ldquo;{item.quote}&rdquo;
                </p>

                <div className="mt-8 flex items-start justify-start gap-3 pt-4 border-t border-current/10">
                  <div
                    className={`h-1.5 w-1.5 rounded-full ${item.textColor} mt-2 shrink-0`}
                  ></div>
                  <div>
                    <h4
                      className={`text-base font-black tracking-tight ${item.textColor}`}
                    >
                      {item.author}
                    </h4>
                    <p
                      className={`text-xs font-bold tracking-wider uppercase mt-0.5 ${item.subTextColor}`}
                    >
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom-Left Speech Triangle Tail */}
              <div
                className="absolute -bottom-3 left-10 h-0 w-0 border-r-[16px] border-t-[18px] border-r-transparent"
                style={{ borderTopColor: item.rawHex }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 3. Visuura Branded Geometry Anchor */}
      <div className="mt-12 flex items-center justify-center gap-3">
        <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-foreground/20"></div>
        <span className="h-2 w-2 rounded-full bg-primary"></span>
        <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-foreground"></span>
        </div>
        <span className="h-2 w-2 rounded-full bg-primary"></span>
        <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-foreground/20"></div>
      </div>

      {/* Embedded Marquee Animation */}
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marqueeScroll 42s linear infinite;
        }
      `}</style>
    </section>
  );
}

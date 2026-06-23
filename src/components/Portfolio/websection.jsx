import React from "react";

// --- EXPLICIT ASSET IMPORTS[cite: 1] ---
import webImgOne from "@/Assets/Portfolio/web photos/1.png"; 
import webImgTwo from "@/Assets/Portfolio/web photos/2.png";
import webImgThree from "@/Assets/Portfolio/web photos/3.png";
import webImgFour from "@/Assets/Portfolio/web photos/4.png";
import webImgfive from "@/Assets/Portfolio/web photos/5.png";
import webImgsix from "@/Assets/Portfolio/web photos/6.png";
import webImgseven from "@/Assets/Portfolio/web photos/7.png";
import webImgeight from "@/Assets/Portfolio/web photos/8.png";
import webImgten from "@/Assets/Portfolio/web photos/10.png";
import webImgeleven from "@/Assets/Portfolio/web photos/11.png";
import webImgtwelve from "@/Assets/Portfolio/web photos/12.png";
import webImgthirteen from "@/Assets/Portfolio/web photos/13.png";
import webImgfourteen from "@/Assets/Portfolio/web photos/14.png";
import webImgfifteen from "@/Assets/Portfolio/web photos/15.png";

const studioExhibits = [
  {
    id: "WEB-01",
    title: "Personal Portfolio (Dark Theme)",
    category: "Software Engineer",
    imgObj: webImgOne, 
  },
  {
    id: "WEB-02",
    title: "Personal Portfolio (Light Theme)",
    category: "Software Engineer",
    imgObj: webImgTwo,
  },
  {
    id: "WEB-03",
    title: "Company Profile (Dark Theme)",
    category: "Software House",
    imgObj: webImgThree,
  },
  {
    id: "WEB-04",
    title: "Company Profile (Light Theme)",
    category: "Software House",
    imgObj: webImgFour,
  },
  {
    id: "WEB-05",
    title: "Advanced AI Solutions Platform (Dark Theme)",
    category: "AI Platform",
    imgObj: webImgfive, 
  },
  {
    id: "WEB-06",
    title: "Advanced AI Solutions Platform (Light Theme)",
    category: "AI Platform",
    imgObj: webImgsix,
  },
  {
    id: "WEB-07",
    title: "Lead Capturing Website (Dark Theme)",
    category: "Software House",
    imgObj: webImgseven,
  },
  {
    id: "WEB-08",
    title: "Lead Capturing Website (Light Theme)",
    category: "Software House",
    imgObj: webImgeight,
  },
  {
    id: "WEB-09",
    title: "ENT Clinic Website (Dark Theme)",
    category: "Personal Branding",
    imgObj: webImgten,
  },
  {
    id: "WEB-10",
    title: "ENT Clinic Website (Light Theme)",
    category: "Personal Branding",
    imgObj: webImgeleven,
  }, 
  {
    id: "WEB-11",
    title: "MakeVision Website",
    category: "Company Portfolio",
    imgObj: webImgtwelve,
  },
  {
    id: "WEB-12",
    title: "UDRA Website",
    category: "Company Portfolio",
    imgObj: webImgthirteen,
  },
  {
    id: "WEB-13",
    title: "Portfolio Website (Alpha)",
    category: "Personal Portfolio",
    imgObj: webImgfourteen,
  },
  {
    id: "WEB-14",
    title: "Portfolio Website (Beta)",
    category: "Personal Portfolio",
    imgObj: webImgfifteen,
  },
];

export default function PortfolioWebsites() {
  return (
    <section className="bg-background py-20 sm:py-28 text-foreground border-b border-border select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* --- 1. Minimalist Editorial Header --- */}
        <div className="mb-12 sm:mb-16 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-border pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-muted block mb-1">
              [ ARCHIVE &bull; FULL-STACK ARCHITECTURE ]
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground">
              DIGITAL STOREFRONTS.
            </h2>
          </div>
          <span className="text-xs font-mono text-muted">
            ( Scroll inside frames to inspect layouts )
          </span>
        </div>

        {/* --- 2. Flexbox Centering Grid (2 on Mobile -> 4 on Desktop) --- */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {studioExhibits.map((site) => {
            // Strips theme tags from titles for pure typographic display
            const cleanTitle = site.title.replace(/\s*\(.*?\)\s*/g, '');
            const isDark = site.title.toLowerCase().includes('dark');
            const isLight = site.title.toLowerCase().includes('light');

            return (
              <article 
                key={site.id} 
                className="w-[calc(50%-8px)] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] flex flex-col rounded-2xl bg-card border border-border shadow-sm hover:shadow-xl hover:border-foreground/30 transition-all duration-300 overflow-hidden"
              >
                {/* --- The Native Scrollable Viewport --- */}
                <div 
                  tabIndex={0} 
                  aria-label={`Scroll preview of ${cleanTitle}`}
                  className="studio-viewport relative h-[220px] sm:h-[320px] w-full overflow-y-auto bg-[#0a0a0a] focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <img 
                    // Unpacks Webpack object (.src) or falls back safely to raw import string[cite: 1]
                    src={site.imgObj.src || site.imgObj} 
                    alt={cleanTitle}
                    className="w-full h-auto block select-none"
                    loading="lazy"
                  />
                </div>

                {/* --- Stark Tabular Metadata Footer --- */}
                <footer className="p-3 sm:p-5 bg-card flex flex-col justify-between gap-2 sm:gap-3 border-t border-border flex-1">
                  <div>
                    <div className="flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-muted mb-1">
                      <span className="font-bold text-foreground">{site.id}</span>
                      <span className="uppercase tracking-wider truncate max-w-[110px] sm:max-w-none">{site.category}</span>
                    </div>

                    <h3 className="text-xs sm:text-base font-black text-foreground tracking-tight leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      {cleanTitle}
                    </h3>
                  </div>

                  <div className="pt-2 border-t border-border/40 flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-muted">
                    <span>{isDark ? 'Dark UI' : isLight ? 'Light UI' : 'Hybrid UI'}</span>
                    <span className="font-bold text-foreground tracking-wider">SCROLL &darr;</span>
                  </div>
                </footer>
              </article>
            );
          })}
        </div>

      </div>

      {/* Understated 3px Scrollbar Grooming */}
      <style>{`
        .studio-viewport::-webkit-scrollbar {
          width: 3px;
        }
        .studio-viewport::-webkit-scrollbar-track {
          background: #0a0a0a;
        }
        .studio-viewport::-webkit-scrollbar-thumb {
          background: #262626;
          border-radius: 1.5px;
        }
        .studio-viewport::-webkit-scrollbar-thumb:hover {
          background: #f5c616; /* Illuminates to Primary Visuura Gold on hover[cite: 1] */
        }
      `}</style>
    </section>
  );
}
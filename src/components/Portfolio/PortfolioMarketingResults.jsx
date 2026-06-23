import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, X, ChevronLeft, ChevronRight, FileText } from "lucide-react";

// 1. Export your Marketing PDF pages as JPGs and map them here
import mktPage1 from "@/Assets/Portfolio/marketing/1.jpg";
import mktPage2 from "@/Assets/Portfolio/marketing/2.jpg";
import mktPage3 from "@/Assets/Portfolio/marketing/3.jpg";
import mktPage4 from "@/Assets/Portfolio/marketing/4.jpg";
import mktPage5 from "@/Assets/Portfolio/marketing/5.jpg";
import mktPage6 from "@/Assets/Portfolio/marketing/6.jpg";

const marketingPdfSlides = [mktPage1, mktPage2, mktPage3, mktPage4, mktPage5, mktPage6];

export default function PortfolioMarketing() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(null);

  // Keyboard Navigation Listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeSlideIndex === null) return;
      if (e.key === "ArrowRight") {
        setActiveSlideIndex((prev) => (prev === marketingPdfSlides.length - 1 ? 0 : prev + 1));
      }
      if (e.key === "ArrowLeft") {
        setActiveSlideIndex((prev) => (prev === 0 ? marketingPdfSlides.length - 1 : prev - 1));
      }
      if (e.key === "Escape") {
        setActiveSlideIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSlideIndex]);

  const preventSave = (e) => {
    e.preventDefault();
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    setActiveSlideIndex((prev) => (prev === marketingPdfSlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setActiveSlideIndex((prev) => (prev === 0 ? marketingPdfSlides.length - 1 : prev - 1));
  };

  return (
    <section className="bg-background py-16 sm:py-24 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* --- Section Header --- */}
        <div className="mb-12 sm:mb-16 border-b border-border pb-6 sm:pb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 mb-2">
            <Sparkles className="h-3 w-3 text-primary" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-foreground">
              Official Agency PDF
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            MARKETING PORTFOLIO.
          </h2>
        </div>

        {/* --- 3-Column 16:9 Widescreen Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {marketingPdfSlides.map((slideImg, index) => (
            <div 
              key={index}
              onClick={() => setActiveSlideIndex(index)}
              className="group relative w-full aspect-[16/9] overflow-hidden rounded-xl sm:rounded-2xl border border-border bg-muted/10 shadow-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-xl cursor-pointer select-none"
            >
              <Image 
                src={slideImg} 
                alt={`Marketing Portfolio PDF Page ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover select-none pointer-events-none"
                loading="lazy"
                draggable="false"
                onContextMenu={preventSave}
                onDragStart={preventSave}
              />

             
              
              {/* Bottom Left: PDF Page Tag */}
              <div className="absolute bottom-2.5 left-2.5 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono text-white flex items-center gap-1.5 border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span>Page {index + 1} / {marketingPdfSlides.length}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* --- The Master PDF Flipbook Modal --- */}
      {activeSlideIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-2 sm:p-6 select-none"
          onClick={() => setActiveSlideIndex(null)} 
          onContextMenu={preventSave}
        >
          {/* Top Left: Document Status */}
          <div className="absolute top-4 left-4 sm:left-6 z-[120] text-xs font-mono font-bold text-zinc-300 bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md border border-white/10">
            PDF Page {activeSlideIndex + 1} of {marketingPdfSlides.length}
          </div>

          <button 
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[120] rounded-full bg-white/10 p-2 text-white backdrop-blur-md transition-colors hover:bg-white/25"
            onClick={() => setActiveSlideIndex(null)}
            title="Close Lightbox (Esc)"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Nav Chevrons */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-[120] rounded-full bg-black/70 p-3 text-white backdrop-blur-md border border-white/10 hover:bg-primary hover:text-black transition-all shadow-2xl active:scale-90"
            aria-label="Previous PDF Page"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-[120] rounded-full bg-black/70 p-3 text-white backdrop-blur-md border border-white/10 hover:bg-primary hover:text-black transition-all shadow-2xl active:scale-90"
            aria-label="Next PDF Page"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Widescreen Lightbox Receiver */}
          <div 
            className="relative w-full max-w-6xl aspect-[16/9] max-h-[82vh] flex items-center justify-center overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl bg-black border border-white/5"
            onClick={(e) => e.stopPropagation()} 
          >
            <Image 
              src={marketingPdfSlides[activeSlideIndex]} 
              alt={`Marketing Portfolio PDF Slide ${activeSlideIndex + 1}`}
              fill
              className="object-contain select-none pointer-events-none z-10"
              draggable="false"
              onContextMenu={preventSave}
              onDragStart={preventSave}
              priority
            />

            {/* --- Watermark Layer --- */}
            <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center overflow-hidden">
              <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-16 w-[160%] h-[160%] -rotate-12 opacity-[0.16]">
                {Array.from({ length: 36 }).map((_, i) => (
                  <span 
                    key={i} 
                    className="font-black text-2xl sm:text-4xl tracking-[0.35em] text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)] select-none"
                  >
                    VISUURA
                  </span>
                ))}
              </div>
            </div>

            {/* Copyright Stamp */}
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-30 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10 pointer-events-none shadow-lg">
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-primary uppercase">
                © VISUURA
              </span>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, X, BookOpen } from "lucide-react";

// Import your 3 exact 3508x2480 brochure spreads here
import brochImg1 from "@/Assets/Portfolio/broucher/1.jpg";
import brochImg2 from "@/Assets/Portfolio/broucher/2.jpg";
import brochImg3 from "@/Assets/Portfolio/broucher/3.jpg";

const brochureImages = [brochImg1, brochImg2, brochImg3];

export default function PortfolioBrochures() {
  const [selectedBrochure, setSelectedBrochure] = useState(null);

  const preventSave = (e) => {
    e.preventDefault();
  };

  return (
    <section className="bg-background py-16 sm:py-24 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* --- Section Header --- */}
        <div className="mb-12 sm:mb-16 border-b border-border pb-6 sm:pb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 mb-2">
            <Sparkles className="h-3 w-3 text-primary" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-foreground">
              3508 x 2480 Spreads
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            EDITORIAL SPREADS.
          </h2>
        </div>

        {/* --- 3-Column Perfectly Balanced Landscape Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {brochureImages.map((img, index) => (
            <div 
              key={index}
              onClick={() => setSelectedBrochure(img)}
              className="group relative w-full aspect-[3508/2480] overflow-hidden rounded-xl sm:rounded-2xl border border-border bg-muted/10 shadow-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-xl cursor-pointer select-none"
            >
              <Image 
                src={img} 
                alt={`Brand Brochure Spread ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover select-none pointer-events-none"
                loading="lazy"
                draggable="false"
                onContextMenu={preventSave}
                onDragStart={preventSave}
              />

              {/* Crisp Hover Overlay (Strictly Zero Blur) */}
              
            </div>
          ))}
        </div>

      </div>

      {/* --- Lightbox Modal --- */}
      {selectedBrochure && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 select-none"
          onClick={() => setSelectedBrochure(null)} 
          onContextMenu={preventSave}
        >
          <button 
            className="absolute top-4 right-4 sm:top-8 sm:right-8 z-[110] rounded-full bg-white/10 p-2 text-white backdrop-blur-md transition-colors hover:bg-white/25"
            onClick={() => setSelectedBrochure(null)}
          >
            <X className="h-6 w-6" />
          </button>

          {/* Landscape-Tailored Inner Wrapper */}
          <div 
            className="relative w-full max-w-6xl aspect-[3508/2480] max-h-[85vh] flex items-center justify-center overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl bg-black"
            onClick={(e) => e.stopPropagation()} 
          >
            <Image 
              src={selectedBrochure} 
              alt="Expanded Brochure Asset"
              fill
              className="object-contain select-none pointer-events-none z-10"
              draggable="false"
              onContextMenu={preventSave}
              onDragStart={preventSave}
              priority
            />

            {/* --- Watermark Layer: Calibrated for Landscape Spread --- */}
            <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center overflow-hidden">
              <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-16 w-[160%] h-[160%] -rotate-12 opacity-[0.16]">
                {Array.from({ length: 30 }).map((_, i) => (
                  <span 
                    key={i} 
                    className="font-black text-2xl sm:text-4xl tracking-[0.35em] text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)] select-none"
                  >
                    VISUURA
                  </span>
                ))}
              </div>
            </div>

            {/* Copyright Anchor */}
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
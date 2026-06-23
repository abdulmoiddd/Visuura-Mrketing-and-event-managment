import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, X, Maximize2 } from "lucide-react";

// Import your 1584x396 banner assets here
import bannerImg1 from "@/Assets/Portfolio/banner/1.jpg";
import bannerImg2 from "@/Assets/Portfolio/banner/2.png";
import bannerImg3 from "@/Assets/Portfolio/banner/3.jpg";
import bannerImg4 from "@/Assets/Portfolio/banner/4.jpg";
import bannerImg5 from "@/Assets/Portfolio/banner/5.png";
import bannerImg6 from "@/Assets/Portfolio/banner/6.jpg";
import bannerImg7 from "@/Assets/Portfolio/banner/7.png";
import bannerImg8 from "@/Assets/Portfolio/banner/8.jpg";
import bannerImg9 from "@/Assets/Portfolio/banner/9.png";
import bannerImg10 from "@/Assets/Portfolio/banner/10.png";
import bannerImg11 from "@/Assets/Portfolio/banner/11.png";
import bannerImg12 from "@/Assets/Portfolio/banner/12.png";


const bannerImages = [bannerImg1, bannerImg2, bannerImg3, bannerImg4, bannerImg5, bannerImg6, bannerImg7, bannerImg8, bannerImg9, bannerImg10, bannerImg11, bannerImg12  ];

export default function PortfolioBanners() {
  const [selectedBanner, setSelectedBanner] = useState(null);

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
              1584 x 396 Banners
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            PANORAMIC HEADERS.
          </h2>
        </div>

        {/* --- 4:1 Panoramic Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {bannerImages.map((img, index) => (
            <div 
              key={index}
              onClick={() => setSelectedBanner(img)}
              className="group relative w-full aspect-[4/1] overflow-hidden rounded-xl sm:rounded-2xl border border-border bg-muted/10 shadow-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-xl cursor-pointer select-none"
            >
              <Image 
                src={img} 
                alt={`Web Banner ${index + 1}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover select-none pointer-events-none"
                loading="lazy"
                draggable="false"
                onContextMenu={preventSave}
                onDragStart={preventSave}
              />

              {/* Hover Glassmorphism Badge */}
              {/* <div className="absolute inset-0 bg-black/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-xs font-bold text-white backdrop-blur-md border border-white/20 shadow-lg">
                  <Maximize2 className="h-3.5 w-3.5 text-primary" />
                  View Panoramic
                </span>
              </div> */}
            </div>
          ))}
        </div>

      </div>

      {/* --- Lightbox Modal --- */}
      {selectedBanner && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 select-none"
          onClick={() => setSelectedBanner(null)} 
          onContextMenu={preventSave}
        >
          <button 
            className="absolute top-4 right-4 sm:top-8 sm:right-8 z-[110] rounded-full bg-white/10 p-2 text-white backdrop-blur-md transition-colors hover:bg-white/25"
            onClick={() => setSelectedBanner(null)}
          >
            <X className="h-6 w-6" />
          </button>

          {/* 4:1 Constrained Lightbox Wrapper */}
          <div 
            className="relative w-full max-w-7xl aspect-[4/1] max-h-[80vh] flex items-center justify-center overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl bg-black"
            onClick={(e) => e.stopPropagation()} 
          >
            <Image 
              src={selectedBanner} 
              alt="Expanded Banner Asset"
              fill
              className="object-contain select-none pointer-events-none z-10"
              draggable="false"
              onContextMenu={preventSave}
              onDragStart={preventSave}
              priority
            />

            {/* --- Wide-Canvas Watermark --- */}
            <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-between p-6 overflow-hidden opacity-[0.15]">
              <div className="flex justify-around w-full">
                <span className="font-black text-2xl sm:text-4xl tracking-[0.4em] text-white select-none">VISUURA</span>
                <span className="font-black text-2xl sm:text-4xl tracking-[0.4em] text-white select-none hidden md:inline">VISUURA</span>
              </div>
              <div className="flex justify-center w-full">
                <span className="font-black text-3xl sm:text-5xl tracking-[0.5em] text-primary select-none font-mono">VISUURA</span>
              </div>
              <div className="flex justify-around w-full">
                <span className="font-black text-2xl sm:text-4xl tracking-[0.4em] text-white select-none hidden md:inline">VISUURA</span>
                <span className="font-black text-2xl sm:text-4xl tracking-[0.4em] text-white select-none">VISUURA</span>
              </div>
            </div>

            {/* Copyright Anchor */}
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-30 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10 pointer-events-none">
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
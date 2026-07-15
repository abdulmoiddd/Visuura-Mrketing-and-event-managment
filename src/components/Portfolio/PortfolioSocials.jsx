import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, X } from "lucide-react"; 

// Import your social media assets
import socImg1 from "@/Assets/Portfolio/posts/1.jpg";
import socImg2 from "@/Assets/Portfolio/posts/2.png";
import socImg3 from "@/Assets/Portfolio/posts/3.jpg";
import socImg4 from "@/Assets/Portfolio/posts/4.jpg";
import socImg5 from "@/Assets/Portfolio/posts/5.png";
import socImg6 from "@/Assets/Portfolio/posts/6.jpg";
import socImg7 from "@/Assets/Portfolio/posts/7.png";
import socImg8 from "@/Assets/Portfolio/posts/8.jpg";
import socImg9 from "@/Assets/Portfolio/posts/9.jpg";
import socImg10 from "@/Assets/Portfolio/posts/10.png";
import socImg11 from "@/Assets/Portfolio/posts/11.jpg";
import socImg12 from "@/Assets/Portfolio/posts/12.png";
import socImg13 from "@/Assets/Portfolio/posts/13.jpg";
import socImg14 from "@/Assets/Portfolio/posts/14.png";
import socImg15 from "@/Assets/Portfolio/posts/15.jpg";
import socImg16 from "@/Assets/Portfolio/posts/16.png";
import socImg17 from "@/Assets/Portfolio/posts/17.png";
import socImg18 from "@/Assets/Portfolio/posts/18.jpg";
import socImg19 from "@/Assets/Portfolio/posts/19.png";
import socImg20 from "@/Assets/Portfolio/posts/20.jpg";
import socImg21 from "@/Assets/Portfolio/posts/21.png";
import socImg22 from "@/Assets/Portfolio/posts/22.jpg";
import socImg23 from "@/Assets/Portfolio/posts/23.png";
import socImg24 from "@/Assets/Portfolio/posts/24.jpg";
import socImg25 from "@/Assets/Portfolio/posts/25.png";
import socImg26 from "@/Assets/Portfolio/posts/26.jpg";
import socImg27 from "@/Assets/Portfolio/posts/27.png";
import socImg28 from "@/Assets/Portfolio/posts/28.jpg";
import socImg29 from "@/Assets/Portfolio/posts/29.png";
import socImg30 from "@/Assets/Portfolio/posts/30.jpg";
import socImg31 from "@/Assets/Portfolio/posts/31.png";
import socImg32 from "@/Assets/Portfolio/posts/32.jpg";
import socImg33 from "@/Assets/Portfolio/posts/33.jpg";
import socImg34 from "@/Assets/Portfolio/posts/34.png";
import socImg35 from "@/Assets/Portfolio/posts/35.jpg";
import socImg36 from "@/Assets/Portfolio/posts/36.png";
import socImg37 from "@/Assets/Portfolio/posts/37.jpg";
import socImg38 from "@/Assets/Portfolio/posts/38.png";
import socImg39 from "@/Assets/Portfolio/posts/39.png";
import socImg40 from "@/Assets/Portfolio/posts/40.png";
import socImg41 from "@/Assets/Portfolio/posts/41.png";
import socImg42 from "@/Assets/Portfolio/posts/42.png";


const socialImages = [socImg1, socImg2, socImg3, socImg4, socImg5, socImg6, socImg7, socImg8, socImg9, socImg10, socImg11, socImg12, socImg13, socImg14, socImg15, socImg16, socImg17, socImg18, socImg19, socImg20, socImg21, socImg22, socImg23, socImg24, socImg25, socImg26, socImg27, socImg28, socImg29, socImg30, socImg31, socImg32, socImg33, socImg34, socImg35, socImg36, socImg37, socImg38, socImg39, socImg40, socImg41, socImg42 ];

export default function PortfolioSocials() {
  const [selectedImage, setSelectedImage] = useState(null);

  const preventSave = (e) => {
    e.preventDefault();
  };

  return (
    <section className="bg-background py-16 sm:py-24 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* --- 1. Agency Section Header --- */}
        <div className="mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border pb-6 sm:pb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 mb-2">
              <Sparkles className="h-3 w-3 text-primary" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-foreground">
                Social Media Assets
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
              BRAND GALLERY.
            </h2>
          </div>
        </div>

        {/* --- 2. GRID --- */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
          {socialImages.map((img, index) => (
            <div 
              key={index} 
              className="relative aspect-square overflow-hidden rounded-xl sm:rounded-2xl border border-border shadow-sm transition-transform duration-500 hover:scale-[1.03] hover:shadow-lg cursor-pointer select-none"
              onClick={() => setSelectedImage(img)}
            >
              <Image 
                src={img} 
                alt={`Social Media Asset ${index + 1}`}
                fill
                className="object-cover select-none pointer-events-none"
                loading="lazy"
                draggable="false"
                onContextMenu={preventSave}
                onDragStart={preventSave}
              />
            </div>
          ))}
        </div>

      </div>

      {/* --- 3. POPUP MODAL WITH WATERMARK --- */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-8 select-none"
          onClick={() => setSelectedImage(null)} 
          onContextMenu={preventSave}
        >
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 sm:top-8 sm:right-8 z-[110] rounded-full bg-white/10 p-2 text-white backdrop-blur-md transition-colors hover:bg-white/25"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6" />
          </button>

          {/* Main Display Box */}
          <div 
            className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center overflow-hidden rounded-xl"
            onClick={(e) => e.stopPropagation()} 
          >
            <Image 
              src={selectedImage} 
              alt="Expanded Social Media Asset"
              fill
              className="object-contain select-none pointer-events-none z-10"
              draggable="false"
              onContextMenu={preventSave}
              onDragStart={preventSave}
              priority
            />

            {/* --- WATERMARK LAYER A: Repeating Tiled Pattern --- */}
            <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center overflow-hidden">
              <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-20 w-[165%] h-[165%] -rotate-12 opacity-[0.18]">
                {Array.from({ length: 36 }).map((_, i) => (
                  <span 
                    key={i} 
                    className="font-black text-2xl sm:text-3xl md:text-4xl tracking-[0.35em] text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)] select-none"
                  >
                    VISUURA
                  </span>
                ))}
              </div>
            </div>

            {/* --- WATERMARK LAYER B: Official Copyright Badge --- */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 bg-black/70 backdrop-blur-md px-3.5 py-2 rounded-lg border border-white/10 pointer-events-none shadow-lg">
              <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
                © VISUURA
              </span>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
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

const socialImages = [socImg1, socImg2, socImg3, socImg4, socImg5, socImg6, socImg7, socImg8, socImg9, socImg10, socImg11, socImg12, socImg13, socImg14, socImg15, socImg16];

export default function PortfolioSocials() {
  // State to track the currently selected image for the popup
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to prevent default behaviors like context menus (right-click)
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

        {/* --- 2. UPDATED GRID --- */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
          {socialImages.map((img, index) => (
            <div 
              key={index} 
              className="relative aspect-square overflow-hidden rounded-xl sm:rounded-2xl border border-border shadow-sm transition-transform duration-500 hover:scale-[1.03] hover:shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <Image 
                src={img} 
                alt={`Social Media Asset ${index + 1}`}
                fill
                className="object-cover select-none"
                loading="lazy"
                draggable="false"
                onContextMenu={preventSave}
                onDragStart={preventSave}
              />
            </div>
          ))}
        </div>

      </div>

      {/* --- 3. IMAGE POPUP MODAL --- */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-8"
          onClick={() => setSelectedImage(null)} // Close when clicking the background
        >
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 sm:top-8 sm:right-8 z-[110] rounded-full bg-white/10 p-2 text-white backdrop-blur-md transition-colors hover:bg-white/25"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6" />
          </button>

          {/* Image Container */}
          <div 
            className="relative w-full max-w-5xl h-[80vh]"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
          >
            <Image 
              src={selectedImage} 
              alt="Expanded Social Media Asset"
              fill
              className="object-contain select-none"
              draggable="false"
              onContextMenu={preventSave}
              onDragStart={preventSave}
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
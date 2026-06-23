import React from "react";
import Image from "next/image";

const VisitingCardPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Advanced Feature: Dynamically generate and download a vCard (.vcf)
  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Visuura
ORG:Visuura
TEL;TYPE=WORK,VOICE:+923312227697
EMAIL;TYPE=PREF,INTERNET:visuura@gmail.com
URL:https://www.visuura.com
URL;TYPE=LinkedIn:https://www.linkedin.com/in/visuura
URL;TYPE=Instagram:https://www.instagram.com/visuura
ADR;TYPE=WORK:;;Suit 1-A, 2nd Floor, F-456, F Block, Satellite Town;Rawalpindi;;;Pakistan
END:VCARD`;

    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "visuura_contact.vcf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#161616]/60 backdrop-blur-md p-4 sm:p-6 transition-opacity">
      {/* Card Container - Minimalistic & Mobile Optimized */}
      <div className="relative w-full max-w-sm bg-card rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-border overflow-hidden transform transition-all duration-300 scale-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full text-white transition-colors border border-white/10"
          aria-label="Close visiting card"
        >
          <svg
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Card Header (4:1 Panoramic Banner) */}
        <div className="relative w-full aspect-[4/1] bg-[#161616] overflow-hidden">
          <Image 
            src="/banner.jpg" // <-- CHANGE THIS TO YOUR BANNER FILENAME IN THE PUBLIC FOLDER
            alt="Visuura Banner"
            fill
            className="object-cover"
            priority
          />
          {/* Optional: Subtle gradient overlay to ensure the profile border blends nicely */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none"></div>
        </div>

        {/* Card Body */}
        <div className="px-6 pb-8 flex flex-col items-center">
          
          {/* Profile/Logo Avatar (Pulled exactly 50% into the banner using -mt-14) */}
          <div className="relative -mt-14 flex items-center justify-center w-28 h-28 bg-card rounded-2xl shadow-xl border-4 border-card z-10 overflow-hidden mb-4">
            <div className="w-full h-full bg-[#161616] flex items-center justify-center p-3 rounded-xl">
              <Image
                src="/DP.png" 
                alt="Visuura"
                width={80}
                height={80}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Name & Title */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-black text-foreground tracking-tight">
              Visuura
            </h2>
            <p className="text-sm font-medium text-primary mt-1 uppercase tracking-widest">
              Marketing and Event Management
            </p>
          </div>

          {/* Contact Details List */}
          <div className="w-full space-y-3 mb-8">
            <a
              href="tel:+923312227697"
              className="flex items-center gap-4 w-full p-3.5 bg-background rounded-xl hover:bg-border/50 transition-colors group"
            >
              <div className="text-primary group-hover:scale-110 transition-transform">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <span className="text-sm font-semibold text-foreground">
                +92 331 2227697
              </span>
            </a>

            <a
              href="mailto:visuura@gmail.com"
              className="flex items-center gap-4 w-full p-3.5 bg-background rounded-xl hover:bg-border/50 transition-colors group"
            >
              <div className="text-primary group-hover:scale-110 transition-transform">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <span className="text-sm font-semibold text-foreground">
                visuura@gmail.com
              </span>
            </a>

            <div className="flex items-center gap-4 w-full p-3.5 bg-background rounded-xl">
              <div className="text-primary">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <span className="text-sm font-medium text-muted leading-snug">
                Suit 1-A, 2nd Floor, F-456, F Block, Satellite Town, Rawalpindi.
              </span>
            </div>
          </div>

          {/* Social Row & Action Button */}
          <div className="w-full flex items-center justify-between gap-3">
            <div className="flex gap-2">
              <a
                href="https://www.linkedin.com/in/visuura"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-background text-foreground hover:bg-primary hover:text-[#161616] transition-all"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/visuura"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-background text-foreground hover:bg-primary hover:text-[#161616] transition-all"
              >
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>

            <button
              onClick={handleSaveContact}
              className="flex-1 h-12 bg-primary text-[#161616] font-black rounded-xl hover:-translate-y-0.5 active:scale-95 transition-all shadow-[0_10px_20px_-10px_rgba(245,198,22,0.5)] flex items-center justify-center gap-2 px-4"
            >
              <span>Save Contact</span>
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitingCardPopup;
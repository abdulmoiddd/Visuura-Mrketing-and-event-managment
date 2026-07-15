import React from "react";
import { WHATSAPP_URL } from "@/lib/site";
import { Sparkles, ArrowUpRight } from "lucide-react";

export default function PortfolioCTA() {
  return (
    <section className="bg-background py-16 sm:py-24 border-b border-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Floating Bento Card */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#161616] p-8 sm:p-12 md:p-16 text-white shadow-2xl border border-white/10 group">
          
          {/* Ambient Corner Glows */}
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-[80px] group-hover:bg-primary/30 transition-all duration-700 pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-secondary/10 blur-[80px] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            
            {/* Left: Copy */}
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 backdrop-blur-md border border-white/10">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-white">
                  Next Steps
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
                Loved the work? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Let’s top it with yours.
                </span>
              </h2>
              
              <p className="text-sm sm:text-base text-zinc-400 font-medium">
                Whether it’s a high-converting web platform or a full visual overhaul, our team is ready to map out your digital footprint.
              </p>
            </div>

            {/* Right: Action */}
            <div className="shrink-0 flex flex-col items-center md:items-end">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-black uppercase tracking-wider text-[#161616] transition-all duration-300 hover:scale-105 hover:bg-white shadow-[0_0_30px_rgba(245,198,22,0.25)]"
              >
                <span>Initiate Project</span>
                <ArrowUpRight className="h-5 w-5 shrink-0" />
              </a>

              <p className="mt-3 text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
                ⚡ Replies in &lt; 2 hours
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
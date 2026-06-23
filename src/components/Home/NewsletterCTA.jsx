import React from "react";
import { FileText, ArrowUpRight } from "lucide-react";

export default function NewsletterCTA() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="bg-[#161616] rounded-[2rem] p-8 md:p-14 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 group">
        {/* Animated Background Glow */}
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-[var(--primary)]/20 blur-[80px] rounded-full group-hover:bg-[var(--primary)]/40 transition-colors duration-700 pointer-events-none"></div>

        {/* Text Content */}
        <div className="relative z-10 max-w-2xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
            <FileText className="w-4 h-4 text-[var(--primary)]" />
            <span className="text-xs font-bold tracking-widest text-white uppercase">
              Volume 04 • Industry Insights
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-6">
            The Future of <br className="hidden sm:block" />
            <span className="text-[var(--primary)]">Brand Scaling.</span>
          </h2>

          <p className="text-base md:text-lg text-white/70 font-medium leading-relaxed">
            Read our latest comprehensive guide on market positioning and
            high-conversion digital architectures. No downloads required—view it
            directly in your browser.
          </p>
        </div>

        {/* Circular Action Button */}
        <div className="relative z-10 shrink-0">
          <a
            href="/newsletter.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-32 h-32 md:w-40 md:h-40 bg-[var(--primary)] rounded-full flex flex-col items-center justify-center text-[#161616] font-black uppercase tracking-widest hover:scale-105 hover:bg-white hover:shadow-[0_0_50px_rgba(245,198,22,0.4)] transition-all duration-500"
          >
            <ArrowUpRight className="w-10 h-10 mb-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            <span className="text-xs">Read PDF</span>
          </a>
        </div>
      </div>
    </section>
  );
}

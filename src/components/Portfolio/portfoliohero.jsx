// import React, { useState, useEffect } from "react";
// import { 
//   Sparkles, 
//   ArrowDownRight, 
//   Activity, 
//   Zap, 
//   Radio, 
//   CheckCircle2, 
//   Layers, 
//   Flame 
// } from "lucide-react"; // Sourced directly from your installed Lucide package

// export default function PortfolioHero() {
//   // Live reactive telemetry state
//   const [liveRoas, setLiveRoas] = useState(418);
//   const [livePing, setLivePing] = useState(12);
//   const [liveBillboards, setLiveBillboards] = useState(142);
//   const [activeViewers, setActiveViewers] = useState(3120);

//   // Simulates realistic, asynchronous server pings ticking on the user's screen
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setLiveRoas((prev) => prev + (Math.random() > 0.5 ? 2 : -1));
//       setLivePing((prev) => (prev === 12 ? 14 : prev === 14 ? 11 : 12));
//       setLiveBillboards((prev) => prev + (Math.random() > 0.8 ? 1 : 0));
//       setActiveViewers((prev) => prev + Math.floor(Math.random() * 9) - 4);
//     }, 2800);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative min-h-[85vh] bg-background pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden flex items-center border-b border-border">
      
//       {/* Ambient Drifting Background Glows */}
//       <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px] pointer-events-none animate-pulse"></div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
//           {/* --- LEFT COLUMN: THE MANIFESTO (7 Columns) --- */}
//           <div className="col-span-1 lg:col-span-7 space-y-8 text-center lg:text-left">
            
//             {/* Native Visuura Sparkle Pill */}
//             <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2">
//               <Sparkles className="h-4 w-4 text-primary" />
//               <span className="text-xs font-bold uppercase tracking-widest text-foreground">
//                 Codified Market Domination
//               </span>
//             </div>

//             {/* Brutalist-Luxe Headline */}
//             <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-foreground leading-[0.92]">
//               WHERE IDEAS <br />
//               BECOME <br />
//               <span className="relative inline-block mt-2">
//                 {/* Sheared Gold Highlight Box */}
//                 <span 
//                   className="absolute inset-0 bg-primary rounded-2xl -z-10 shadow-lg"
//                   style={{ transform: "skewX(-8deg) rotate(-1.5deg)" }}
//                 ></span>
//                 <span className="text-[#161616] px-4 py-1 block">
//                   UNMISSABLE.
//                 </span>
//               </span>
//             </h1>

//             {/* Company Niche Integration Summary */}
//             <p className="text-lg sm:text-xl text-muted font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
//               We do not build safe, ignorable campaigns. Explore a living archive of high-converting web architectures, multi-city DOOH billboard takeovers, and elite event productions—<strong className="text-foreground">all executed under one roof and delivered to your doorstep.</strong>
//             </p>

//             {/* Action Anchors */}
//             <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
//               <a 
//                 href="#archive" 
//                 className="w-full sm:w-auto px-8 py-4 rounded-full bg-foreground text-card font-black text-sm uppercase tracking-widest hover:bg-primary hover:text-foreground transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group"
//               >
//                 <span>Inspect Archive</span>
//                 <ArrowDownRight className="w-4 h-4 group-hover:translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
//               </a>
//               <a 
//                 href="/contact" 
//                 className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent hover:bg-black/5 text-foreground border-2 border-foreground font-black text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2"
//               >
//                 <Flame className="w-4 h-4 text-primary" />
//                 <span>Pitch A Project</span>
//               </a>
//             </div>

//           </div>

//           {/* --- RIGHT COLUMN: 3D FLOATING TELEMETRY DASHBOARD (5 Columns) --- */}
//           <div className="col-span-1 lg:col-span-5 relative">
            
//             <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              
//               {/* Card Container tilted at 2.5deg */}
//               <div 
//                 className="bg-[#161616] text-white p-6 sm:p-8 rounded-[2.5rem] shadow-2xl border border-white/10 space-y-6 transition-transform duration-500 hover:rotate-0"
//                 style={{ transform: "rotate(2.5deg)" }}
//               >
//                 {/* Top Window Bar */}
//                 <div className="flex items-center justify-between border-b border-white/10 pb-4">
//                   <div className="flex gap-1.5">
//                     <span className="w-2.5 h-2.5 rounded-full bg-[#d71920]"></span>
//                     <span className="w-2.5 h-2.5 rounded-full bg-[#f5c616]"></span>
//                     <span className="w-2.5 h-2.5 rounded-full bg-[#2ed06e]"></span>
//                   </div>
//                   <div className="flex items-center gap-2 bg-[#2ed06e]/10 border border-[#2ed06e]/20 px-3 py-1 rounded-full">
//                     <span className="w-1.5 h-1.5 rounded-full bg-[#2ed06e] animate-ping"></span>
//                     <span className="text-[10px] font-mono font-bold text-[#2ed06e] uppercase tracking-wider">SYSTEM ACTIVE</span>
//                   </div>
//                 </div>

//                 {/* Simulated Live Vertical Readouts */}
//                 <div className="space-y-4 font-mono text-xs">
                  
//                   {/* Metric 1: Paid Ads */}
//                   <div className="space-y-1.5">
//                     <div className="flex justify-between text-zinc-400">
//                       <span className="flex items-center gap-1.5 text-white font-bold"><Activity size={13} className="text-primary"/> [PAID SEARCH] Google Ads</span>
//                       <span className="text-primary font-bold">ROAS: +{liveRoas}%</span>
//                     </div>
//                     <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
//                       <div className="bg-primary h-full w-[84%] rounded-full transition-all duration-500"></div>
//                     </div>
//                   </div>

//                   {/* Metric 2: Web Dev */}
//                   <div className="space-y-1.5">
//                     <div className="flex justify-between text-zinc-400">
//                       <span className="flex items-center gap-1.5 text-white font-bold"><Zap size={13} className="text-[#2ed06e]"/> [WEB] Full-Stack Next.js</span>
//                       <span className="text-[#2ed06e] font-bold">{livePing}ms Edge Ping</span>
//                     </div>
//                     <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
//                       <div className="bg-[#2ed06e] h-full w-[96%] rounded-full transition-all duration-500"></div>
//                     </div>
//                   </div>

//                   {/* Metric 3: Outdoor DOOH */}
//                   <div className="space-y-1.5">
//                     <div className="flex justify-between text-zinc-400">
//                       <span className="flex items-center gap-1.5 text-white font-bold"><Layers size={13} className="text-cyan-400"/> [OOH] Digital Billboards</span>
//                       <span className="text-cyan-400 font-bold">{liveBillboards} Screens Synced</span>
//                     </div>
//                     <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
//                       <div className="bg-cyan-400 h-full w-[78%] rounded-full transition-all duration-500"></div>
//                     </div>
//                   </div>

//                   {/* Metric 4: Event Production */}
//                   <div className="space-y-1.5">
//                     <div className="flex justify-between text-zinc-400">
//                       <span className="flex items-center gap-1.5 text-white font-bold"><Radio size={13} className="text-[#d71920]"/> [EVENTS] 4K Live Stream</span>
//                       <span className="text-[#d71920] font-bold">{activeViewers} Viewers</span>
//                     </div>
//                     <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
//                       <div className="bg-[#d71920] h-full w-[89%] rounded-full transition-all duration-500"></div>
//                     </div>
//                   </div>

//                 </div>

//                 {/* Footer note inside Glass Box */}
//                 <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-400">
//                   <span>PRINTING: 100% CMYK Calibrated</span>
//                   <CheckCircle2 size={14} className="text-primary"/>
//                 </div>

//               </div>

//               {/* OVERLAPPING FLOATING PILL (Bottom Left of the box) */}
//               <div 
//                 className="absolute -bottom-6 left-0 sm:-left-6 bg-primary text-[#161616] p-4 sm:p-5 rounded-3xl shadow-2xl border border-black/10 flex items-center gap-3 sm:gap-4 transition-transform duration-300 hover:scale-105"
//                 style={{ transform: "rotate(-3deg)" }}
//               >
//                 <div className="px-2.5 py-1.5 bg-[#161616] text-primary rounded-xl font-black text-base sm:text-lg shadow-inner">
//                   100%
//                 </div>
//                 <div className="text-[11px] sm:text-xs font-black leading-tight uppercase tracking-tight">
//                   Executed In-House <br /> 
//                   <span className="font-medium text-[#161616]/75 capitalize">To Your Doorstep</span>
//                 </div>
//               </div>

//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState, useEffect } from "react";
import { WHATSAPP_URL } from "@/lib/site";
import { 
  Sparkles, 
  ArrowDownRight, 
  Activity, 
  Zap, 
  Radio, 
  CheckCircle2, 
  Layers, 
  Flame 
} from "lucide-react"; // Utilizing your pre-installed Lucide icon set

export default function PortfolioHero() {
  // Real-time reactive telemetry state
  const [liveRoas, setLiveRoas] = useState(418);
  const [livePing, setLivePing] = useState(12);
  const [liveBillboards, setLiveBillboards] = useState(142);
  const [activeViewers, setActiveViewers] = useState(3120);

  // Simulates live asynchronous data pings reacting on the user's screen
  useEffect(() => {
    const timer = setInterval(() => {
      setLiveRoas((prev) => prev + (Math.random() > 0.5 ? 2 : -1));
      setLivePing((prev) => (prev === 12 ? 14 : prev === 14 ? 11 : 12));
      setLiveBillboards((prev) => prev + (Math.random() > 0.8 ? 1 : 0));
      setActiveViewers((prev) => prev + Math.floor(Math.random() * 9) - 4);
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[85vh] bg-background pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden flex items-center border-b border-border">
      
      {/* Ambient Drifting Background Glow (Strictly tied to var(--primary)) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[140px] pointer-events-none animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* --- LEFT COLUMN: THE MANIFESTO (7 Columns) --- */}
          <div className="col-span-1 lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Standard Visuura Sparkle Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-xs font-bold uppercase tracking-widest text-foreground">
                Innovative Creative Agency
              </span>
            </div>

            {/* Brutalist Headline */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-foreground leading-[0.92]">
              WHERE IDEAS <br />
              BECOME <br />
              <span className="relative inline-block mt-2">
                {/* Sheared Visuura Gold Highlight Box */}
                <span 
                  className="absolute inset-0 bg-primary rounded-2xl -z-10 shadow-lg"
                  style={{ transform: "skewX(-8deg) rotate(-1.5deg)" }}
                ></span>
                <span className="text-foreground px-4 py-1 block">
                  UNMISSABLE.
                </span>
              </span>
            </h1>

            {/* Full-Service Company Niche Integration */}
            <p className="text-lg sm:text-xl text-muted font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We do not build safe, ignorable campaigns. Explore a living archive of high-converting web architectures, multi-city DOOH billboard takeovers, and elite event productions—<strong className="text-foreground font-black">all executed under one roof and delivered right to your doorstep.</strong>
            </p>

            {/* Strict Global Contrast CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a 
                href="#archive" 
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-foreground text-card font-black text-sm uppercase tracking-widest hover:bg-primary hover:text-foreground transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group"
              >
                <span>Inspect Archive</span>
                <ArrowDownRight className="w-4 h-4 group-hover:translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent hover:bg-foreground/5 text-foreground border-2 border-foreground font-black text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Flame className="w-4 h-4 text-primary" />
                <span>Pitch A Project</span>
              </a>
            </div>

          </div>

          {/* --- RIGHT COLUMN: FLOATING OBSIDIAN TELEMETRY DASHBOARD (5 Columns) --- */}
          <div className="col-span-1 lg:col-span-5 relative">
            
            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              
              {/* Dashboard floating block strictly set to bg-foreground (#161616) */}
              <div 
                className="bg-foreground text-card p-6 sm:p-8 rounded-[2.5rem] shadow-2xl border border-border space-y-6 transition-transform duration-500 hover:rotate-0"
                style={{ transform: "rotate(2.5deg)" }}
              >
                {/* Top Window Bar using explicit root logo colors[cite: 1] */}
                <div className="flex items-center justify-between border-b border-card/10 pb-4">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--logo-politico-red)' }}></span>
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--primary)' }}></span>
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--logo-mongo-green)' }}></span>
                  </div>
                  <div 
                    className="flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider"
                    style={{ 
                      color: 'var(--logo-mongo-green)', 
                      backgroundColor: 'rgba(46, 208, 110, 0.12)', 
                      borderColor: 'rgba(46, 208, 110, 0.25)',
                      borderWidth: '1px' 
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full animate-ping" style={{ backgroundColor: 'var(--logo-mongo-green)' }}></span>
                    <span>SYSTEM ACTIVE</span>
                  </div>
                </div>

                {/* Live Telemetry Readouts strictly adhering to global spec[cite: 1] */}
                <div className="space-y-4 font-mono text-xs">
                  
                  {/* Metric 1: Google Ads (Tied strictly to var(--primary))[cite: 1] */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-card/70">
                      <span className="flex items-center gap-1.5 text-card font-bold"><Activity size={13} className="text-primary"/> [PAID SEARCH] Google Ads</span>
                      <span className="text-primary font-bold">ROAS: +{liveRoas}%</span>
                    </div>
                    <div className="w-full bg-card/10 h-2 rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[84%] rounded-full transition-all duration-500"></div>
                    </div>
                  </div>

                  {/* Metric 2: Web Dev (Tied strictly to var(--logo-mongo-green))[cite: 1] */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-card/70">
                      <span className="flex items-center gap-1.5 text-card font-bold"><Zap size={13} style={{ color: 'var(--logo-mongo-green)' }}/> [WEB] Full-Stack Next.js</span>
                      <span className="font-bold" style={{ color: 'var(--logo-mongo-green)' }}>{livePing}ms Edge Ping</span>
                    </div>
                    <div className="w-full bg-card/10 h-2 rounded-full overflow-hidden">
                      <div className="h-full w-[96%] rounded-full transition-all duration-500" style={{ backgroundColor: 'var(--logo-mongo-green)' }}></div>
                    </div>
                  </div>

                  {/* Metric 3: Outdoor DOOH (Tied strictly to var(--logo-upwork-green))[cite: 1] */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-card/70">
                      <span className="flex items-center gap-1.5 text-card font-bold"><Layers size={13} style={{ color: 'var(--logo-upwork-green)' }}/> [OOH] Digital Billboards</span>
                      <span className="font-bold" style={{ color: 'var(--logo-upwork-green)' }}>{liveBillboards} Screens Synced</span>
                    </div>
                    <div className="w-full bg-card/10 h-2 rounded-full overflow-hidden">
                      <div className="h-full w-[78%] rounded-full transition-all duration-500" style={{ backgroundColor: 'var(--logo-upwork-green)' }}></div>
                    </div>
                  </div>

                  {/* Metric 4: Event Production (Tied strictly to var(--logo-politico-red))[cite: 1] */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-card/70">
                      <span className="flex items-center gap-1.5 text-card font-bold"><Radio size={13} style={{ color: 'var(--logo-politico-red)' }}/> [EVENTS] 4K Live Stream</span>
                      <span className="font-bold" style={{ color: 'var(--logo-politico-red)' }}>{activeViewers} Viewers</span>
                    </div>
                    <div className="w-full bg-card/10 h-2 rounded-full overflow-hidden">
                      <div className="h-full w-[89%] rounded-full transition-all duration-500" style={{ backgroundColor: 'var(--logo-politico-red)' }}></div>
                    </div>
                  </div>

                </div>

                {/* Footer note inside Obsidian Box */}
                <div className="pt-2 border-t border-card/10 flex items-center justify-between text-[11px] text-card/60">
                  <span>PRINTING: 100% CMYK Calibrated</span>
                  <CheckCircle2 size={14} className="text-primary"/>
                </div>

              </div>

              {/* OVERLAPPING FLOATING PILL (Strictly bg-primary (#f5c616) over Obsidian)[cite: 1] */}
              <div 
                className="absolute -bottom-6 left-0 sm:-left-6 bg-primary text-foreground p-4 sm:p-5 rounded-3xl shadow-2xl border border-border flex items-center gap-3 sm:gap-4 transition-transform duration-300 hover:scale-105"
                style={{ transform: "rotate(-3deg)" }}
              >
                <div className="px-2.5 py-1.5 bg-foreground text-primary rounded-xl font-black text-base sm:text-lg shadow-inner">
                  100%
                </div>
                <div className="text-[11px] sm:text-xs font-black leading-tight uppercase tracking-tight">
                  Executed Under One Roof <br /> 
                  <span className="font-medium opacity-80 capitalize">To Your Doorstep</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
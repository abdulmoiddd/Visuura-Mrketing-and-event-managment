// import React from "react";
// import {
//   Target,
//   Lightbulb,
//   Briefcase,
//   Users,
//   CalendarCheck,
//   Monitor,
//   ArrowUpRight,
// } from "lucide-react";

// export default function About() {
//   return (
//     <section className="w-full py-24 bg-[var(--background)] px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Label */}
//         <div className="flex items-center gap-3 mb-10">
//           <span className="w-12 h-[2px] bg-primary"></span>
//           <h2 className="text-sm font-bold tracking-widest text-[#161616] uppercase">
//             Inside Visuura
//           </h2>
//         </div>

//         {/* --- BENTO BOX GRID --- */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
//           {/* 1. MAIN INTRO BOX (Spans 2 columns, 2 rows) */}
//           <div className="col-span-1 md:col-span-2 lg:row-span-2 bg-[#161616] rounded-[2rem] p-10 md:p-12 relative overflow-hidden group flex flex-col justify-between min-h-[400px]">
//             {/* Background Glow */}
//             <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 blur-3xl rounded-full group-hover:bg-primary/30 transition-all duration-700"></div>

//             <div className="relative z-10">
//               <h3 className="text-4xl md:text-5xl font-extrabold text-[#E3ECEC] leading-tight mb-6">
//                 We are a <span className="text-primary">creative engine</span>{" "}
//                 built for modern brands.
//               </h3>
//               <p className="text-[#E3ECEC]/70 text-lg leading-relaxed max-w-md">
//                 VISUURA is a creative and digital solutions company dedicated to
//                 helping businesses grow through innovative branding, marketing,
//                 technology, and event experiences.
//               </p>
//             </div>

//             {/* Live Rotating Badge */}
//             <div className="absolute bottom-8 right-8 w-24 h-24 text-primary animate-[spin_10s_linear_infinite]">
//               <svg viewBox="0 0 100 100" width="100" height="100">
//                 <path
//                   id="circlePath"
//                   d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
//                   fill="transparent"
//                 />
//                 <text
//                   className="text-[14px] font-bold uppercase tracking-widest"
//                   fill="currentColor"
//                 >
//                   <textPath href="#circlePath">
//                     Visuura • Creative Agency •
//                   </textPath>
//                 </text>
//               </svg>
//             </div>
//           </div>

//           {/* 2. STAT: PROJECTS (Yellow Box) */}
//           <div className="bg-primary rounded-[2rem] p-8 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 shadow-lg shadow-primary/20">
//             <div className="flex justify-between items-start mb-4">
//               <div className="p-3 bg-[#161616] text-primary rounded-xl">
//                 <Briefcase size={24} />
//               </div>
//               <ArrowUpRight size={24} className="text-[#161616]/50" />
//             </div>
//             <div>
//               <h4 className="text-4xl font-black text-[#161616] mb-1">250+</h4>
//               <p className="text-sm font-bold text-[#161616]/70 uppercase tracking-wide">
//                 Projects Completed
//               </p>
//             </div>
//           </div>

//           {/* 3. STAT: CLIENTS (White Box) */}
//           <div className="bg-white rounded-[2rem] p-8 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 shadow-sm border border-black/5">
//             <div className="flex justify-between items-start mb-4">
//               <div className="p-3 bg-[var(--background)] text-[#161616] rounded-xl">
//                 <Users size={24} />
//               </div>
//               <span className="flex h-3 w-3 relative">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
//               </span>
//             </div>
//             <div>
//               <h4 className="text-4xl font-black text-[#161616] mb-1">150+</h4>
//               <p className="text-sm font-bold text-[var(--foreground-muted)] uppercase tracking-wide">
//                 Happy Clients
//               </p>
//             </div>
//           </div>

//           {/* 4. STAT: EVENTS (White Box) */}
//           <div className="bg-white rounded-[2rem] p-8 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 shadow-sm border border-black/5">
//             <div className="flex justify-between items-start mb-4">
//               <div className="p-3 bg-[var(--background)] text-[#161616] rounded-xl">
//                 <CalendarCheck size={24} />
//               </div>
//             </div>
//             <div>
//               <h4 className="text-4xl font-black text-[#161616] mb-1">75+</h4>
//               <p className="text-sm font-bold text-[var(--foreground-muted)] uppercase tracking-wide">
//                 Events Managed
//               </p>
//             </div>
//           </div>

//           {/* 5. STAT: WEBSITES (Outline Box) */}
//           <div className="bg-transparent border-2 border-[#161616]/10 rounded-[2rem] p-8 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 hover:border-primary hover:bg-white">
//             <div className="flex justify-between items-start mb-4">
//               <div className="p-3 bg-white shadow-sm text-[#161616] rounded-xl">
//                 <Monitor size={24} />
//               </div>
//             </div>
//             <div>
//               <h4 className="text-4xl font-black text-[#161616] mb-1">100+</h4>
//               <p className="text-sm font-bold text-[var(--foreground-muted)] uppercase tracking-wide">
//                 Websites Built
//               </p>
//             </div>
//           </div>

//           {/* 6. MISSION BOX (Spans 2 columns) */}
//           <div className="col-span-1 md:col-span-2 bg-white rounded-[2rem] p-8 flex items-center gap-6 hover:shadow-xl transition-shadow duration-300 group border border-black/5">
//             <div className="w-16 h-16 shrink-0 bg-[#161616] rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
//               <Target
//                 size={32}
//                 className="text-[#E3ECEC] group-hover:text-[#161616]"
//               />
//             </div>
//             <div>
//               <h3 className="text-xl font-bold text-[#161616] mb-2">
//                 Our Mission
//               </h3>
//               <p className="text-[var(--foreground-muted)] leading-relaxed">
//                 To provide businesses with complete branding and growth
//                 solutions under one roof, ensuring seamless execution across all
//                 mediums.
//               </p>
//             </div>
//           </div>

//           {/* 7. VISION BOX (Spans 2 columns) */}
//           <div className="col-span-1 md:col-span-2 bg-white rounded-[2rem] p-8 flex items-center gap-6 hover:shadow-xl transition-shadow duration-300 group border border-black/5">
//             <div className="w-16 h-16 shrink-0 bg-primary rounded-2xl flex items-center justify-center group-hover:bg-[#161616] transition-colors duration-300">
//               <Lightbulb
//                 size={32}
//                 className="text-[#161616] group-hover:text-primary"
//               />
//             </div>
//             <div>
//               <h3 className="text-xl font-bold text-[#161616] mb-2">
//                 Our Vision
//               </h3>
//               <p className="text-[var(--foreground-muted)] leading-relaxed">
//                 To become a leading creative and business solutions agency
//                 recognized globally for unparalleled innovation and excellence.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

//
//
///
//
//
//
//
//
//
import React from "react";
import {
  Target,
  Lightbulb,
  Briefcase,
  Users,
  CalendarCheck,
  Monitor,
  ArrowUpRight,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-16 md:py-24 bg-[var(--background)] px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-8 md:mb-10">
          <span className="w-8 md:w-12 h-[2px] bg-primary"></span>
          <h2 className="text-xs md:text-sm font-bold tracking-widest text-[#161616] uppercase">
            Inside Visuura
          </h2>
        </div>

        {/* --- BENTO BOX GRID --- */}
        {/* Changed to grid-cols-2 on mobile for a compact, app-like feel */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 auto-rows-fr">
          {/* 1. MAIN INTRO BOX (Spans 2 columns, 2 rows on desktop) */}
          <div className="col-span-2 lg:row-span-2 bg-[#161616] rounded-[1.5rem] md:rounded-[2rem] p-6 sm:p-8 md:p-12 relative overflow-hidden group flex flex-col justify-between min-h-[280px] md:min-h-[400px]">
            {/* Background Glow */}
            <div className="absolute -top-16 -right-16 md:-top-24 md:-right-24 w-48 h-48 md:w-64 md:h-64 bg-primary/20 blur-3xl rounded-full group-hover:bg-primary/30 transition-all duration-700"></div>

            <div className="relative z-10">
              {/* Scaled text for mobile */}
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#E3ECEC] leading-tight mb-4 md:mb-6">
                We are a <span className="text-primary">creative engine</span>{" "}
                built for modern brands.
              </h3>
              <p className="text-[#E3ECEC]/70 text-sm md:text-lg leading-relaxed max-w-md">
                VISUURA is a creative and digital solutions company dedicated to
                helping businesses grow through innovative branding, marketing,
                technology, and event experiences.
              </p>
            </div>

            {/* Live Rotating Badge - Scaled down on mobile */}
            <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-16 h-16 md:w-24 md:h-24 text-primary animate-[spin_10s_linear_infinite]">
              <svg viewBox="0 0 100 100" width="100%" height="100%">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="transparent"
                />
                <text
                  className="text-[14px] font-bold uppercase tracking-widest"
                  fill="currentColor"
                >
                  <textPath href="#circlePath">
                    Visuura • Creative Agency •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          {/* 2. STAT: PROJECTS (Yellow Box) */}
          <div className="col-span-1 bg-primary rounded-[1.25rem] md:rounded-[2rem] p-4 md:p-8 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 shadow-lg shadow-primary/20">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 md:p-3 bg-[#161616] text-primary rounded-lg md:rounded-xl">
                <Briefcase className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-[#161616]/50" />
            </div>
            <div>
              <h4 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#161616] mb-1">
                250+
              </h4>
              <p className="text-[10px] sm:text-xs md:text-sm font-bold text-[#161616]/70 uppercase tracking-wider leading-tight">
                Projects Completed
              </p>
            </div>
          </div>

          {/* 3. STAT: CLIENTS (White Box) */}
          <div className="col-span-1 bg-white rounded-[1.25rem] md:rounded-[2rem] p-4 md:p-8 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 shadow-sm border border-black/5">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 md:p-3 bg-[var(--background)] text-[#161616] rounded-lg md:rounded-xl">
                <Users className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <span className="flex h-2.5 w-2.5 md:h-3 md:w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-green-500"></span>
              </span>
            </div>
            <div>
              <h4 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#161616] mb-1">
                150+
              </h4>
              <p className="text-[10px] sm:text-xs md:text-sm font-bold text-[var(--foreground-muted)] uppercase tracking-wider leading-tight">
                Happy Clients
              </p>
            </div>
          </div>

          {/* 4. STAT: EVENTS (White Box) */}
          <div className="col-span-1 bg-white rounded-[1.25rem] md:rounded-[2rem] p-4 md:p-8 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 shadow-sm border border-black/5">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 md:p-3 bg-[var(--background)] text-[#161616] rounded-lg md:rounded-xl">
                <CalendarCheck className="w-5 h-5 md:w-6 md:h-6" />
              </div>
            </div>
            <div>
              <h4 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#161616] mb-1">
                75+
              </h4>
              <p className="text-[10px] sm:text-xs md:text-sm font-bold text-[var(--foreground-muted)] uppercase tracking-wider leading-tight">
                Events Managed
              </p>
            </div>
          </div>

          {/* 5. STAT: WEBSITES (Outline Box) */}
          <div className="col-span-1 bg-transparent border-2 border-[#161616]/10 rounded-[1.25rem] md:rounded-[2rem] p-4 md:p-8 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 hover:border-primary hover:bg-white">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 md:p-3 bg-white shadow-sm text-[#161616] rounded-lg md:rounded-xl">
                <Monitor className="w-5 h-5 md:w-6 md:h-6" />
              </div>
            </div>
            <div>
              <h4 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#161616] mb-1">
                100+
              </h4>
              <p className="text-[10px] sm:text-xs md:text-sm font-bold text-[var(--foreground-muted)] uppercase tracking-wider leading-tight">
                Websites Built
              </p>
            </div>
          </div>

          {/* 6. MISSION BOX (Spans 2 columns) */}
          {/* Changed to flex-col on mobile so icon is above text, preventing horizontal squishing */}
          <div className="col-span-2 bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 hover:shadow-xl transition-shadow duration-300 group border border-black/5">
            <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 bg-[#161616] rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
              <Target className="w-6 h-6 md:w-8 md:h-8 text-[#E3ECEC] group-hover:text-[#161616]" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-[#161616] mb-2">
                Our Mission
              </h3>
              <p className="text-sm md:text-base text-[var(--foreground-muted)] leading-relaxed">
                To provide businesses with complete branding and growth
                solutions under one roof, ensuring seamless execution across all
                mediums.
              </p>
            </div>
          </div>

          {/* 7. VISION BOX (Spans 2 columns) */}
          <div className="col-span-2 bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 hover:shadow-xl transition-shadow duration-300 group border border-black/5">
            <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 bg-primary rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-[#161616] transition-colors duration-300">
              <Lightbulb className="w-6 h-6 md:w-8 md:h-8 text-[#161616] group-hover:text-primary" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-[#161616] mb-2">
                Our Vision
              </h3>
              <p className="text-sm md:text-base text-[var(--foreground-muted)] leading-relaxed">
                To become a leading creative and business solutions agency
                recognized globally for unparalleled innovation and excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

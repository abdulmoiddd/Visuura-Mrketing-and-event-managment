import React, { useState, useEffect } from "react";
import SEO from "@/components/essential/Seo";
import Navbar from "@/components/essential/Navbar";
import Footer from "@/components/essential/Footer";
import {
  Camera,
  Video,
  Film,
  Aperture,
  Clapperboard,
  MonitorPlay,
  ArrowUpRight,
  PlayCircle,
  Frame,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
} from "recharts";

// --- Cinematic Mock Data for Charts ---
const retentionData = [
  { time: "0s", video: 100, static: 100 },
  { time: "3s", video: 95, static: 60 },
  { time: "10s", video: 85, static: 35 },
  { time: "30s", video: 65, static: 15 },
  { time: "60s", video: 45, static: 5 },
];

const mediaDistribution = [
  { name: "Brand Commercials", value: 40 },
  { name: "Corporate & Events", value: 30 },
  { name: "Product Photography", value: 20 },
  { name: "Social Media Reels", value: 10 },
];

// Mapped exactly to your global.css hex codes for Recharts to read properly
const PIE_COLORS = [
  "#f5c616", // var(--primary)
  "#161616", // var(--foreground)
  "#52525b", // var(--foreground-muted)
  "#d1dbdb", // var(--footer-bg) (used as a light gray accent)
];

export default function PhotographyVideography() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <SEO
        title="Photography & Videography | Visuura"
        description="Cinematic video production and high-end commercial photography to capture your brand's true narrative."
        path="/Services/Services-5"
      />

      <Navbar />

      {/* Main container uses global background and text variables */}
      <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        {/* --- LIGHT THEME HERO SECTION : STUDIO VIEWFINDER AESTHETIC --- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 md:mb-32">
          {/* Outer "Lens" Wrapper using var(--card-bg) */}
          <div className="relative w-full rounded-[2rem] md:rounded-[3rem] bg-[var(--card-bg)] border border-[var(--border-color)] overflow-hidden p-8 md:p-16 lg:p-24 shadow-sm flex flex-col items-center justify-center text-center min-h-[60vh]">
            {/* Viewfinder Focal Brackets (Corners) */}
            <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-[var(--border-color)] hidden md:block"></div>
            <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-[var(--border-color)] hidden md:block"></div>
            <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-[var(--border-color)] hidden md:block"></div>
            <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-[var(--border-color)] hidden md:block"></div>

            {/* Center Focus Reticle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-[var(--border-color)] rounded-[100%] pointer-events-none hidden lg:block opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[var(--foreground)] opacity-20 rounded-full pointer-events-none hidden md:block"></div>

            {/* Content */}
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--primary)] bg-[var(--primary)]/10">
                <Camera className="w-4 h-4 text-[var(--primary)]" />
                <span className="text-xs font-bold tracking-widest text-[var(--foreground)] uppercase">
                  Production House
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05] uppercase">
                Frame the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--foreground)] to-[var(--foreground-muted)]">
                  Narrative.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-[var(--foreground-muted)] font-medium leading-relaxed">
                We don't just shoot footage; we craft cinema. From high-fidelity
                commercial photography to full-scale video production, we
                capture the essence of your brand in 4K resolution.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                <a
                  href="https://wa.me/923312227697" target="_blank" rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[var(--primary)] text-[var(--logo-base)] px-10 py-4 rounded-full font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Book a Shoot
                  <ArrowUpRight className="w-5 h-5" />
                </a>
                <a
                  href="#portfolio"
                  className="w-full sm:w-auto bg-transparent border border-[var(--border-color)] text-[var(--foreground)] px-10 py-4 rounded-full font-bold hover:bg-[var(--background)] transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <PlayCircle className="w-5 h-5 text-[var(--primary)]" />
                  Showreel
                </a>
              </div>
            </div>

            {/* REC Indicator */}
            <div className="absolute top-8 right-8 md:right-16 flex items-center gap-2 animate-pulse">
              <div className="w-3 h-3 bg-[#d71920] rounded-full"></div>
              <span className="text-[#d71920] font-bold text-sm tracking-widest uppercase">
                REC
              </span>
            </div>

            {/* Timecode Mockup */}
            <div className="absolute bottom-8 left-8 md:left-16 hidden sm:block">
              <span className="text-[var(--foreground-muted)] font-mono text-sm tracking-widest">
                TC: 01:24:45:12
              </span>
            </div>
          </div>
        </section>

        {/* --- DATA & IMPACT SECTION --- */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[var(--border-color)]">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black text-[var(--foreground)] tracking-tight mb-4">
                Motion Drives Action.
              </h2>
              <p className="text-[var(--foreground-muted)] text-lg">
                High-quality visual storytelling isn't just an aesthetic choice;
                it’s a conversion engine. Audiences retain significantly more
                information through video.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Area Chart: Retention Rates */}
            <div className="bg-[var(--card-bg)] rounded-[2rem] p-6 sm:p-8 shadow-sm border border-[var(--border-color)] flex flex-col h-full">
              <div className="mb-8 flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-bold text-[var(--foreground)]">
                    Audience Retention
                  </h4>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    Video vs. Static Imagery engagement over time.
                  </p>
                </div>
                <MonitorPlay className="w-6 h-6 text-[var(--foreground-muted)] opacity-50 hidden sm:block" />
              </div>

              <div className="h-[250px] sm:h-[300px] w-full mt-auto">
                {isMounted && (
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={retentionData}
                      margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient
                          id="colorVideo"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="var(--primary)"
                            stopOpacity={0.5}
                          />
                          <stop
                            offset="95%"
                            stopColor="var(--primary)"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        stroke="var(--border-color)"
                      />
                      <XAxis
                        dataKey="time"
                        stroke="var(--foreground-muted)"
                        fontSize={11}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis
                        stroke="var(--foreground-muted)"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "var(--card-bg)",
                          border: "1px solid var(--border-color)",
                          borderRadius: "12px",
                          color: "var(--foreground)",
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="static"
                        name="Static Image Retention %"
                        stroke="var(--foreground)"
                        fill="var(--background)"
                        strokeWidth={2}
                      />
                      <Area
                        type="monotone"
                        dataKey="video"
                        name="Video Retention %"
                        stroke="var(--primary)"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorVideo)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                )}
              </div>
            </div>

            {/* Pie Chart: Production Scope */}
            <div className="bg-[var(--card-bg)] rounded-[2rem] p-6 sm:p-8 shadow-sm border border-[var(--border-color)] flex flex-col sm:flex-row items-center gap-8 h-full">
              <div className="flex-1 w-full h-[250px] relative">
                {isMounted && (
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={mediaDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={65}
                        outerRadius={90}
                        paddingAngle={4}
                        dataKey="value"
                        stroke="none"
                      >
                        {mediaDistribution.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={PIE_COLORS[index % PIE_COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "var(--card-bg)",
                          border: "1px solid var(--border-color)",
                          borderRadius: "8px",
                          color: "var(--foreground)",
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                )}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <Film className="w-8 h-8 text-[var(--primary)] mb-1" />
                  <span className="text-[10px] font-bold text-[var(--foreground)] uppercase tracking-widest">
                    Focus
                  </span>
                </div>
              </div>

              <div className="flex-1 space-y-4 w-full">
                <h4 className="text-lg font-bold text-[var(--foreground)] mb-2 border-b border-[var(--border-color)] pb-2">
                  Our Production Splits
                </h4>
                {mediaDistribution.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span
                        className="w-2.5 h-2.5 rounded-sm"
                        style={{ backgroundColor: PIE_COLORS[idx] }}
                      ></span>
                      <span className="text-sm font-medium text-[var(--foreground-muted)]">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-sm font-bold text-[var(--foreground)]">
                      {item.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- PRODUCTION CAPABILITIES PIPELINE --- */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[var(--border-color)]">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-[var(--foreground)] mb-4">
              The Production Studio
            </h2>
            <p className="text-[var(--foreground-muted)] text-lg max-w-2xl mx-auto">
              From the storyboard to the final color grade, we handle the entire
              pipeline in-house.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Brand Commercials",
                icon: Clapperboard,
                desc: "High-budget cinematic advertisements designed for TV, streaming, and premium digital campaigns.",
              },
              {
                title: "Product Photography",
                icon: Aperture,
                desc: "Crisp, perfectly lit macro photography to make your e-commerce products stand out.",
              },
              {
                title: "Event Aftermovies",
                icon: Film,
                desc: "Dynamic, fast-paced recaps of your corporate events, concerts, and brand launches.",
              },
              {
                title: "Corporate Interviews",
                icon: Video,
                desc: "Professional multi-cam setups with pristine audio recording for executive interviews and documentaries.",
              },
              {
                title: "Social Media Reels",
                icon: MonitorPlay,
                desc: "Bite-sized, vertical-first video content optimized for maximum engagement on TikTok and IG.",
              },
              {
                title: "Post-Production",
                icon: Frame,
                desc: "Expert video editing, sound design, VFX, and Hollywood-standard color grading.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-[var(--card-bg)] p-8 rounded-[2rem] border border-[var(--border-color)] shadow-sm hover:border-[var(--primary)] transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[var(--background)] flex items-center justify-center group-hover:bg-[var(--primary)] text-[var(--foreground)] transition-colors mb-6">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-[var(--foreground)] mb-3">
                  {feature.title}
                </h4>
                <p className="text-[var(--foreground-muted)] leading-relaxed text-sm md:text-base">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Epic Bottom CTA */}
          <div className="mt-12 bg-[var(--card-bg)] rounded-[2rem] border border-[var(--border-color)] shadow-sm p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            {/* Cinematic Gradient overlay */}
            <div className="absolute top-0 right-0 w-[300px] h-full bg-gradient-to-l from-[var(--primary)]/10 to-transparent pointer-events-none"></div>

            <div className="max-w-2xl relative z-10 text-center md:text-left">
              <h3 className="text-2xl md:text-4xl font-black text-[var(--foreground)] mb-4">
                Ready to roll camera?
              </h3>
              <p className="text-[var(--foreground-muted)] text-lg">
                Whether it's a multi-day commercial shoot or a clean studio
                photography session, our crew is ready to execute your vision.
              </p>
            </div>
            <div className="relative z-10 w-full md:w-auto">
              <a
                href="https://wa.me/923312227697" target="_blank" rel="noopener noreferrer"
                className="w-full md:w-auto text-center bg-[var(--primary)] text-[var(--logo-base)] px-10 py-4 rounded-xl font-bold hover:shadow-lg transition-shadow duration-300 block"
              >
                Let's Talk Production
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "@/components/essential/Navbar";
import Footer from "@/components/essential/Footer";
import {
  Briefcase,
  Compass,
  Feather,
  Building2,
  Megaphone,
  ArrowRight,
  TrendingUp,
  Scale,
  ShieldCheck,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

// --- Corporate Branding Mock Data ---
const brandRoiData = [
  { year: "Year 1", consistent: 100, inconsistent: 100 },
  { year: "Year 2", consistent: 125, inconsistent: 105 },
  { year: "Year 3", consistent: 160, inconsistent: 112 },
  { year: "Year 4", consistent: 210, inconsistent: 115 },
  { year: "Year 5", consistent: 280, inconsistent: 120 },
];

const brandHealthData = [
  { metric: "Visual Identity", score: 95, fullMark: 100 },
  { metric: "Positioning", score: 88, fullMark: 100 },
  { metric: "Tone of Voice", score: 92, fullMark: 100 },
  { metric: "Internal Cult.", score: 85, fullMark: 100 },
  { customerLoyalty: "Loyalty", score: 90, fullMark: 100 },
  { metric: "Awareness", score: 88, fullMark: 100 },
];

export default function CorporateBranding() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Head>
        <title>Corporate Branding & Strategy | Visuura</title>
        <meta
          name="description"
          content="Strategic corporate branding. We build authoritative brand identities, positioning, and architectures that drive market leadership."
        />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden selection:bg-[var(--primary)] selection:text-[var(--logo-base)]">
        {/* --- BRAND-THEMED HERO SECTION --- */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 md:mb-32">
          {/* Animated Mesh Gradients using Global CSS Variables */}
          <div className="absolute top-0 -left-20 w-72 md:w-96 h-72 md:h-96 bg-[var(--primary)] rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 md:w-96 h-72 md:h-96 bg-[var(--card-bg)] rounded-full mix-blend-overlay filter blur-[100px] opacity-80 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-20 w-72 md:w-96 h-72 md:h-96 bg-[var(--secondary)] rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-blob animation-delay-4000"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 pt-10 md:pt-20">
            {/* Left Typography */}
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <h2 className="text-xl md:text-2xl font-bold tracking-[0.2em] text-[var(--foreground-muted)] uppercase mb-2">
                Strategic Corporate Branding
              </h2>

              <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-[0.95] text-[var(--foreground)]">
                Engineering <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
                  Market Trust.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-[var(--foreground-muted)] font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
                A logo is merely a mark; a brand is a reputation. We partner
                with visionary founders and enterprise teams to forge dynamic
                corporate identities that command authority and outlast trends.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <a
                  href="#contact"
                  className="w-full sm:w-auto bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-[var(--logo-base)] px-10 py-4.5 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out flex items-center justify-center gap-2 group"
                >
                  Discuss Your Legacy
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500" />
                </a>
              </div>
            </div>

            {/* Right Abstract Graphic */}
            <div className="flex-1 hidden lg:flex justify-center relative perspective-1000">
              <div className="w-[450px] h-[450px] rounded-[3rem] bg-[var(--card-bg)]/40 backdrop-blur-3xl border border-[var(--border-color)] shadow-2xl transform rotate-y-[-15deg] rotate-x-[10deg] flex items-center justify-center p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)]/10 via-transparent to-[var(--card-bg)]/50"></div>
                <Briefcase className="w-32 h-32 text-[var(--foreground)] drop-shadow-2xl relative z-10 opacity-90" />
                {/* Decorative elements inside the glass box */}
                <div className="absolute top-10 left-10 w-24 h-24 bg-[var(--primary)] rounded-full mix-blend-overlay blur-2xl"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-[var(--card-bg)] rounded-full mix-blend-overlay blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* --- FROSTED DATA SECTION --- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 md:mb-32 relative z-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12 px-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[var(--foreground)] mb-4">
                The ROI of Identity.
              </h2>
              <p className="text-[var(--foreground-muted)] text-lg">
                Consistent branding isn't an expense—it is a compounding asset.
                Organizations with unified brand presentations consistently
                command higher pricing power.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Area Chart: Revenue Impact */}
            <div className="bg-[var(--card-bg)]/70 backdrop-blur-2xl rounded-[3rem] p-8 md:p-10 shadow-sm border border-[var(--border-color)] flex flex-col h-full transform transition-all hover:shadow-xl duration-700 ease-out">
              <div className="mb-8 flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-bold text-[var(--foreground)] mb-1">
                    Consistency Index
                  </h4>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    Relative revenue growth multiplier over 5 years.
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-[var(--background)] flex items-center justify-center shadow-inner">
                  <TrendingUp className="w-5 h-5 text-[var(--foreground-muted)]" />
                </div>
              </div>

              <div className="h-[250px] sm:h-[300px] w-full mt-auto">
                {isMounted && (
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={brandRoiData}
                      margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient
                          id="colorBrand"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="var(--primary)"
                            stopOpacity={0.6}
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
                        dataKey="year"
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
                          borderRadius: "16px",
                          color: "var(--foreground)",
                          boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="inconsistent"
                        name="Inconsistent Brand"
                        stroke="var(--foreground-muted)"
                        fill="transparent"
                        strokeWidth={2}
                        strokeDasharray="5 5"
                      />
                      <Area
                        type="monotone"
                        dataKey="consistent"
                        name="Unified Brand"
                        stroke="var(--primary)"
                        strokeWidth={4}
                        fillOpacity={1}
                        fill="url(#colorBrand)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                )}
              </div>
            </div>

            {/* Radar Chart: Brand Health */}
            <div className="bg-[var(--card-bg)]/70 backdrop-blur-2xl rounded-[3rem] p-8 md:p-10 shadow-sm border border-[var(--border-color)] flex flex-col h-full relative transform transition-all hover:shadow-xl duration-700 ease-out">
              <div className="w-full mb-4 text-left relative z-10">
                <h4 className="text-xl font-bold text-[var(--foreground)] mb-1">
                  360° Enterprise Health
                </h4>
                <p className="text-sm text-[var(--foreground-muted)]">
                  Core pillars of market equity.
                </p>
              </div>

              <div className="h-[250px] sm:h-[300px] w-full mt-auto">
                {isMounted && (
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart
                      cx="50%"
                      cy="50%"
                      outerRadius="70%"
                      data={brandHealthData}
                    >
                      <PolarGrid stroke="var(--border-color)" />
                      <PolarAngleAxis
                        dataKey="metric"
                        tick={{
                          fill: "var(--foreground-muted)",
                          fontSize: 11,
                          fontWeight: "600",
                        }}
                      />
                      <PolarRadiusAxis
                        angle={30}
                        domain={[0, 100]}
                        tick={false}
                        axisLine={false}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "var(--card-bg)",
                          border: "1px solid var(--border-color)",
                          borderRadius: "16px",
                          color: "var(--foreground)",
                          boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
                        }}
                      />
                      <Radar
                        name="Equity Score"
                        dataKey="score"
                        stroke="var(--primary)"
                        strokeWidth={3}
                        fill="var(--primary)"
                        fillOpacity={0.3}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* --- ELEGANT CAPABILITIES GRID --- */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 border-t border-[var(--border-color)]">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-[var(--foreground)] mb-6">
              The Strategy Playbook.
            </h2>
            <p className="text-[var(--foreground-muted)] text-lg max-w-2xl mx-auto">
              Comprehensive identity development designed to align your internal
              culture with your external market perception.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Brand Positioning",
                desc: "Defining your unique value proposition, target audiences, and market differentiators to carve out your niche.",
                icon: Compass,
              },
              {
                title: "Visual Identity",
                desc: "Crafting scalable logos, typography, and color palettes codified into strict corporate brand guidelines.",
                icon: ShieldCheck,
              },
              {
                title: "Verbal Identity",
                desc: "Developing a consistent brand voice, core messaging pillars, and taglines that resonate deeply.",
                icon: Feather,
              },
              {
                title: "M&A Rebranding",
                desc: "Navigating the complex brand architecture required during mergers, acquisitions, and restructuring.",
                icon: Scale,
              },
              {
                title: "Employer Branding",
                desc: "Building an internal culture and outward reputation that attracts and retains top-tier industry talent.",
                icon: Building2,
              },
              {
                title: "Corporate Comms",
                desc: "Designing investor decks, annual reports, and boardroom collateral that exude absolute professionalism.",
                icon: Megaphone,
              },
            ].map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={idx}
                  className="bg-[var(--card-bg)]/80 backdrop-blur-xl p-10 rounded-[2.5rem] border border-[var(--border-color)] shadow-sm hover:-translate-y-2 hover:shadow-xl hover:border-[var(--primary)] transition-all duration-700 ease-out group relative overflow-hidden"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[var(--background)] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[var(--primary)] transition-all duration-700 ease-out shadow-inner">
                    <Icon className="w-7 h-7 text-[var(--foreground)]" />
                  </div>
                  <h4 className="text-2xl font-bold text-[var(--foreground)] mb-4">
                    {srv.title}
                  </h4>
                  <p className="text-[var(--foreground-muted)] leading-relaxed text-base">
                    {srv.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Sweeping Bottom CTA */}
          <div className="mt-24 md:mt-32 bg-[var(--foreground)] rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.01] duration-700 ease-out">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-[var(--primary)] opacity-20 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[var(--card-bg)] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-5xl font-black text-[var(--card-bg)] mb-6 tracking-tight">
                Define your legacy.
              </h3>
              <p className="text-[var(--card-bg)] text-lg md:text-xl font-medium mb-10">
                Whether you are launching a global enterprise or preparing for
                an IPO, our strategists are ready to craft your narrative.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[var(--primary)] text-[var(--logo-base)] px-10 py-4.5 rounded-full font-bold text-lg hover:scale-105 hover:shadow-[0_10px_30px_color-mix(in_srgb,var(--primary)_30%,transparent)] transition-all duration-500 ease-out"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

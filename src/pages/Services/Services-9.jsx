import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "@/components/essential/Navbar";
import Footer from "@/components/essential/Footer";
import {
  Smartphone,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  Cloud,
  TrendingUp,
  Layout,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// --- App Performance Mock Data ---
const retentionData = [
  { day: "Day 1", retention: 100 },
  { day: "Day 7", retention: 75 },
  { day: "Day 14", retention: 60 },
  { day: "Day 21", retention: 52 },
  { day: "Day 30", retention: 48 },
];

const platformSplit = [
  { name: "iOS (Swift/SwiftUI)", value: 45 },
  { name: "Android (Kotlin/Jetpack)", value: 35 },
  { name: "Cross-Platform (React Native)", value: 20 },
];

const PIE_COLORS = ["#161616", "#f5c616", "#52525b"];

export default function AppDevelopment() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Head>
        <title>Mobile App Development | Visuura</title>
        <meta
          name="description"
          content="Custom iOS and Android application development. We build scalable, intuitive apps designed for high engagement."
        />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        {/* --- HERO SECTION : APP INTERFACE AESTHETIC --- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 md:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Typography */}
            <div className="col-span-1 lg:col-span-7 space-y-8 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] shadow-sm">
                <Smartphone className="w-4 h-4 text-[var(--primary)]" />
                <span className="text-xs font-bold tracking-widest text-[var(--foreground)] uppercase">
                  Native & Hybrid Mobile
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.05]">
                Apps that live in <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--foreground)] to-[var(--foreground-muted)]">
                  Every Pocket.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-[var(--foreground-muted)] font-medium leading-relaxed max-w-xl">
                We bridge the gap between complex functionality and effortless
                user experience. From native iOS and Android to robust
                cross-platform solutions, we build the tools that keep your
                users coming back.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <a
                  href="#contact"
                  className="w-full sm:w-auto bg-[var(--foreground)] text-[var(--card-bg)] px-8 py-4 rounded-xl font-bold shadow-md hover:bg-[var(--primary)] hover:text-[#161616] transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Start Your Build
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right: Modern Smartphone Mockup CSS */}
            <div className="col-span-1 lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-[280px] h-[580px] bg-[#161616] rounded-[3rem] border-[8px] border-[#222] shadow-2xl overflow-hidden">
                {/* Speaker Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#222] rounded-b-2xl z-20"></div>

                {/* Simulated App Screen */}
                <div className="p-6 pt-12 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-full bg-[var(--primary)]/20 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-[var(--primary)]" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/10"></div>
                  </div>
                  <div className="h-4 w-1/2 bg-white/10 rounded-full"></div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-24 rounded-2xl bg-white/5 border border-white/5 p-4 flex flex-col justify-end">
                      <div className="h-2 w-full bg-white/10 rounded-full"></div>
                    </div>
                    <div className="h-24 rounded-2xl bg-[var(--primary)] p-4 flex flex-col justify-end">
                      <div className="h-2 w-full bg-black/20 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-12 rounded-xl bg-white/5 border border-white/5"></div>
                    <div className="h-12 rounded-xl bg-white/5 border border-white/5"></div>
                    <div className="h-12 rounded-xl bg-white/5 border border-white/5"></div>
                  </div>
                </div>

                {/* Bottom Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/20 rounded-full"></div>
              </div>

              {/* Floating Performance Badge */}
              <div className="absolute -bottom-6 -left-6 bg-[var(--card-bg)] border border-[var(--border-color)] p-5 rounded-2xl shadow-xl z-30 animate-[bounce_5s_infinite]">
                <Zap className="w-6 h-6 text-[var(--primary)] mb-1" />
                <p className="text-[10px] font-bold text-[var(--foreground-muted)] uppercase tracking-widest">
                  Speed
                </p>
                <p className="text-xl font-black text-[var(--foreground)]">
                  60 FPS
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- PERFORMANCE & RETENTION DATA SECTION --- */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[var(--border-color)]">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black text-[var(--foreground)] tracking-tight mb-4">
                Designed for{" "}
                <span className="text-[var(--primary)]">Retention.</span>
              </h2>
              <p className="text-[var(--foreground-muted)] text-lg">
                The hardest part of app development isn't the launch—it's the 30
                days after. We engineer experiences that minimize churn and
                maximize daily active use.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Area Chart: User Retention */}
            <div className="bg-[var(--card-bg)] rounded-[2rem] p-6 sm:p-8 shadow-sm border border-[var(--border-color)] flex flex-col h-full">
              <div className="mb-8 flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-bold text-[var(--foreground)]">
                    User Retention Curve
                  </h4>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    Typical post-launch engagement lifecycle.
                  </p>
                </div>
                <TrendingUp className="w-6 h-6 text-[var(--foreground-muted)] opacity-50 hidden sm:block" />
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
                          id="colorRetention"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="var(--primary)"
                            stopOpacity={0.4}
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
                        dataKey="day"
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
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="retention"
                        name="Retention %"
                        stroke="var(--primary)"
                        strokeWidth={4}
                        fillOpacity={1}
                        fill="url(#colorRetention)"
                        dot={{ r: 4, fill: "var(--foreground)" }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                )}
              </div>
            </div>

            {/* Pie Chart: Platform Architecture */}
            <div className="bg-[var(--card-bg)] rounded-[2rem] p-6 sm:p-8 shadow-sm border border-[var(--border-color)] flex flex-col sm:flex-row items-center gap-8 h-full">
              <div className="flex-1 w-full h-[250px] relative">
                {isMounted && (
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={platformSplit}
                        cx="50%"
                        cy="50%"
                        innerRadius={65}
                        outerRadius={90}
                        paddingAngle={5}
                        dataKey="value"
                        stroke="none"
                      >
                        {platformSplit.map((entry, index) => (
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
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                )}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <Smartphone className="w-8 h-8 text-[var(--primary)] mb-1" />
                </div>
              </div>

              <div className="flex-1 space-y-4 w-full">
                <h4 className="text-lg font-bold text-[var(--foreground)] mb-2 border-b border-[var(--border-color)] pb-2">
                  Platform Expertise
                </h4>
                {platformSplit.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
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

        {/* --- CAPABILITIES GRID --- */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[var(--border-color)]">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-[var(--foreground)] mb-4">
              Full-Stack Application Studio
            </h2>
            <p className="text-[var(--foreground-muted)] text-lg max-w-2xl mx-auto">
              We handle every pixel and every line of code from discovery to the
              App Store submission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Native iOS Development",
                icon: Cpu,
                desc: "High-performance apps built using Swift and SwiftUI to leverage the full power of Apple's ecosystem.",
              },
              {
                title: "Native Android Development",
                icon: AndroidIcon,
                desc: "Robust, scalable Android applications built with Kotlin and Jetpack Compose for global reach.",
              },
              {
                title: "Cross-Platform Solutions",
                icon: Layers,
                desc: "Efficient development using React Native to deliver a native look and feel with a single codebase.",
              },
              {
                title: "UI/UX App Design",
                icon: Layout,
                desc: "Interaction-first design focusing on thumb-reachability, haptics, and micro-animations.",
              },
              {
                title: "API & Backend Integration",
                icon: Cloud,
                desc: "Building the engine behind the app with secure RESTful APIs, Firebase, and real-time databases.",
              },
              {
                title: "Quality Assurance (QA)",
                icon: ShieldCheck,
                desc: "Rigorous device testing across hundreds of screen sizes and OS versions to ensure zero crashes.",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon; // Ensures proper React capitalized rendering
              return (
                <div
                  key={idx}
                  className="bg-[var(--card-bg)] p-8 rounded-[2rem] border border-[var(--border-color)] shadow-sm hover:border-[var(--primary)] transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[var(--background)] flex items-center justify-center group-hover:bg-[var(--primary)] text-[var(--foreground)] transition-colors mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-[var(--foreground)] mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-[var(--foreground-muted)] leading-relaxed text-sm md:text-base">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom Call to Action */}
          <div className="mt-16 bg-[#161616] rounded-[2rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[400px] h-full bg-gradient-to-l from-[var(--primary)]/10 to-transparent pointer-events-none"></div>

            <div className="max-w-2xl relative z-10 text-center md:text-left">
              <h3 className="text-2xl md:text-4xl font-black text-white mb-4">
                Have a disruptive app idea?
              </h3>
              <p className="text-white/60 text-lg">
                We'll help you scope the MVP, design the prototype, and build
                the final product for a global launch.
              </p>
            </div>
            <div className="relative z-10 w-full md:w-auto">
              <a
                href="#contact"
                className="w-full md:w-auto text-center bg-[var(--primary)] text-[#161616] px-10 py-4 rounded-xl font-bold hover:scale-105 transition-transform duration-300 block"
              >
                Discuss Your App
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

// Custom simple Android icon using SVG since Lucide doesn't have it natively
const AndroidIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 14v-4c0-4.4 3.6-8 8-8s8 3.6 8 8v4" />
    <path d="M12 18h.01" />
    <path d="M7 10h10" />
    <circle cx="8.5" cy="8.5" r="1" />
    <circle cx="15.5" cy="8.5" r="1" />
  </svg>
);

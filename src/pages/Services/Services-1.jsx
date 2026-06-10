import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "@/components/essential/Navbar";
import Footer from "@/components/essential/Footer";
import {
  Code2,
  Smartphone,
  Zap,
  Globe,
  ArrowUpRight,
  Server,
  MonitorSmartphone,
  Gauge,
  Database,
  Cpu,
  Terminal,
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
} from "recharts";

// --- Mock Data for Charts ---
const speedImpactData = [
  { loadTime: "1s", conversion: 5.4, bounceRate: 15 },
  { loadTime: "2s", conversion: 4.2, bounceRate: 25 },
  { loadTime: "3s", conversion: 2.9, bounceRate: 40 },
  { loadTime: "4s", conversion: 1.5, bounceRate: 55 },
  { loadTime: "5s+", conversion: 0.8, bounceRate: 70 },
];

const deviceTraffic = [
  { name: "Mobile", value: 68 },
  { name: "Desktop", value: 27 },
  { name: "Tablet", value: 5 },
];

// FIXED: Replaced #161616 with #ffffff so it doesn't blend into the dark background
const PIE_COLORS = ["#d4a70f", "#ffffff", "#888888"];

export default function WebDevelopment() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Head>
        <title>Website Development | Visuura</title>
        <meta
          name="description"
          content="High-performance, custom-coded websites built for speed, scale, and conversions."
        />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-[var(--background)] text-foreground pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        {/* --- HERO SECTION : BENTO BOX STYLE --- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
            {/* Main Hero Card (Spans 8 cols on desktop) */}
            <div className="col-span-1 lg:col-span-8 bg-[#161616] rounded-[2rem] p-6 sm:p-10 md:p-14 relative overflow-hidden group">
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-[var(--primary)]/20 blur-[80px] rounded-full group-hover:bg-[var(--primary)]/30 transition-colors duration-700"></div>

              <div className="relative z-10 flex flex-col h-full justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mb-6 md:mb-8 backdrop-blur-sm">
                  <Code2 className="w-4 h-4 text-[var(--primary)]" />
                  <span className="text-xs font-bold tracking-widest text-white uppercase">
                    Web Engineering
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-6">
                  We build digital <br className="hidden sm:block" />
                  <span className="text-[var(--primary)]">
                    experiences
                  </span>, <br className="hidden sm:block" />
                  not just pages.
                </h1>

                <p className="text-base sm:text-lg text-white/70 max-w-xl leading-relaxed font-medium mb-8">
                  Engineered for speed, security, and scale. We develop custom
                  full-stack solutions that turn your visitors into loyal
                  customers.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#contact"
                    className="w-full sm:w-auto text-center bg-[var(--primary)] text-[#161616] px-8 py-3.5 rounded-full font-bold hover:scale-[1.02] active:scale-95 transition-all duration-300"
                  >
                    Start Building
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side: Code Mockup Card (Spans 4 cols on desktop) */}
            <div className="col-span-1 lg:col-span-4 bg-[#0A0A0A] rounded-[2rem] border border-white/10 p-4 md:p-6 flex flex-col relative overflow-hidden h-[350px] lg:h-auto">
              <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <Terminal className="w-4 h-4 text-white/30" />
              </div>

              {/* Animated Code Typing Effect */}
              <div className="font-mono text-sm sm:text-base text-white/70 space-y-2 overflow-hidden relative flex-1">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[var(--primary)] to-transparent opacity-50"></div>
                <p className="pl-4">
                  <span className="text-blue-400">import</span> React{" "}
                  <span className="text-blue-400">from</span> 'react';
                </p>
                <p className="pl-4">
                  <span className="text-blue-400">import</span> &#123; Growth
                  &#125; <span className="text-blue-400">from</span>{" "}
                  '@visuura/core';
                </p>
                <br />
                <p className="pl-4">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-yellow-400">App</span> = () =&gt; &#123;
                </p>
                <p className="pl-8">
                  <span className="text-blue-400">return</span> (
                </p>
                <p className="pl-12 text-green-400">
                  &lt;Growth speed="max" /&gt;
                </p>
                <p className="pl-8">);</p>
                <p className="pl-4">&#125;;</p>
              </div>

              {/* Performance Badge floating at bottom */}
              <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-3 flex items-center gap-3">
                <Gauge className="w-6 h-6 text-green-400" />
                <div>
                  <p className="text-[10px] text-white/50 uppercase font-bold tracking-wider">
                    Lighthouse
                  </p>
                  <p className="text-sm font-black text-white">100 / 100</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- PERFORMANCE DATA SECTION --- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-16 text-center md:text-left">
            <div className="max-w-2xl mx-auto md:mx-0">
              <Zap className="w-8 h-8 text-[var(--primary)] mx-auto md:mx-0 mb-4" />
              <h2 className="text-3xl md:text-5xl font-black text-[#161616] tracking-tight mb-4">
                Speed is Revenue.
              </h2>
              <p className="text-[var(--foreground-muted)] text-base md:text-lg">
                Every second your website takes to load, you lose customers. We
                build sub-second load times to maximize conversion rates.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Impact Chart (Spans 2 cols) */}
            <div className="col-span-1 lg:col-span-2 bg-white rounded-[2rem] p-6 sm:p-8 shadow-sm border border-black/5 flex flex-col h-full">
              <div className="mb-6">
                <h4 className="text-xl font-extrabold text-[#161616]">
                  Load Time vs Conversions
                </h4>
                <p className="text-sm text-[var(--foreground-muted)]">
                  Bounce rates spike exponentially after 2 seconds.
                </p>
              </div>

              <div className="h-[250px] sm:h-[300px] w-full mt-auto">
                {isMounted && (
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={speedImpactData}
                      margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient
                          id="colorConversion"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="var(--primary)"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="var(--primary)"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <XAxis
                        dataKey="loadTime"
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <Tooltip
                        contentStyle={{
                          borderRadius: "12px",
                          border: "none",
                          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="bounceRate"
                        name="Bounce Rate %"
                        stroke="#e5e5e5"
                        fill="#f5f5f5"
                      />
                      <Area
                        type="monotone"
                        dataKey="conversion"
                        name="Conversion Rate %"
                        stroke="var(--primary)"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorConversion)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                )}
              </div>
            </div>

            {/* Mobile First Focus */}
            <div className="col-span-1 bg-[#161616] rounded-[2rem] p-6 sm:p-8 shadow-lg flex flex-col h-full">
              <div className="mb-4">
                <h4 className="text-xl font-bold text-white mb-1">
                  Mobile-First
                </h4>
                <p className="text-sm text-white/50">
                  Designed for where your users are.
                </p>
              </div>

              <div className="h-[200px] w-full relative mb-6">
                {isMounted && (
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={deviceTraffic}
                        cx="50%"
                        cy="50%"
                        innerRadius={55}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                        stroke="none"
                      >
                        {deviceTraffic.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={PIE_COLORS[index % PIE_COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#222",
                          border: "none",
                          borderRadius: "8px",
                          color: "#fff",
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                )}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <MonitorSmartphone className="w-8 h-8 text-white/80" />
                </div>
              </div>

              <div className="mt-auto space-y-3">
                {deviceTraffic.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: PIE_COLORS[idx] }}
                      ></span>
                      <span className="text-sm font-medium text-white/80">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-sm font-bold text-white">
                      {item.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- FEATURES GRID --- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-black/5 mb-8">
            <Database className="w-4 h-4 text-[var(--primary)]" />
            <h2 className="text-xs font-bold tracking-widest text-[#161616] uppercase">
              Tech Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: "Custom Web Apps",
                icon: Cpu,
                desc: "Bespoke SaaS platforms and portals tailored to your business logic.",
              },
              {
                title: "E-Commerce",
                icon: Smartphone,
                desc: "High-converting online stores engineered for seamless checkout.",
              },
              {
                title: "Technical SEO",
                icon: Globe,
                desc: "Built-in optimization ensuring your site ranks high on Google.",
              },
              {
                title: "CMS Integration",
                icon: Server,
                desc: "Easy-to-use dashboards so your team can update content seamlessly.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-[2rem] border border-black/5 hover:border-[var(--primary)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[var(--background)] flex items-center justify-center group-hover:bg-[var(--primary)] transition-colors mb-5 md:mb-6">
                  <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-[#161616]" />
                </div>
                <h4 className="text-lg md:text-xl font-bold text-[#161616] mb-2 md:mb-3">
                  {feature.title}
                </h4>
                <p className="text-sm md:text-base text-[var(--foreground-muted)] leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}

            {/* CTA Tile (Spans remaining space on desktop/tablet) */}
            <div className="md:col-span-2 lg:col-span-2 bg-[var(--primary)] p-6 sm:p-8 rounded-[2rem] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm hover:shadow-lg transition-shadow">
              <div>
                <h4 className="text-xl md:text-2xl font-black text-[#161616] mb-2">
                  Need API or Database Integrations?
                </h4>
                <p className="text-[#161616]/80 text-sm md:text-base font-medium max-w-md">
                  We specialize in connecting platforms to real-time data and
                  automated workflows.
                </p>
              </div>
              <a
                href="#contact"
                className="w-full sm:w-auto text-center bg-[#161616] text-white px-6 py-3.5 rounded-full font-bold hover:bg-white hover:text-[#161616] transition-colors flex items-center justify-center gap-2"
              >
                Let's Discuss
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

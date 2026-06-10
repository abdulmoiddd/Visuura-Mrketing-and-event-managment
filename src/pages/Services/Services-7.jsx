import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "@/components/essential/Navbar";
import Footer from "@/components/essential/Footer";
import {
  MousePointerClick,
  TrendingUp,
  Target,
  Crosshair,
  Activity,
  ArrowUpRight,
  Search,
  MonitorPlay,
  ShoppingBag,
  Zap,
} from "lucide-react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// --- PPC Analytics Mock Data ---
// Demonstrating Return on Ad Spend (ROAS)
const roasData = [
  { month: "Jan", spend: 1200, revenue: 3500 },
  { month: "Feb", spend: 1500, revenue: 4800 },
  { month: "Mar", spend: 1800, revenue: 6200 },
  { month: "Apr", spend: 2000, revenue: 8500 },
  { month: "May", spend: 2200, revenue: 11000 },
  { month: "Jun", spend: 2500, revenue: 14500 },
];

// Campaign network distribution
const networkSplit = [
  { name: "Search Campaigns", value: 45 },
  { name: "Performance Max", value: 35 },
  { name: "YouTube Ads", value: 15 },
  { name: "Display/Retargeting", value: 5 },
];

const PIE_COLORS = [
  "#f5c616", // var(--primary)
  "#161616", // var(--foreground)
  "#52525b", // var(--foreground-muted)
  "#d1dbdb", // var(--footer-bg)
];

export default function GoogleAds() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Head>
        <title>Google Ads & PPC Management | Visuura</title>
        <meta
          name="description"
          content="Data-driven Google Ads management focused on maximizing your Return on Ad Spend (ROAS) and driving high-intent leads."
        />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        {/* --- HERO SECTION : PERFORMANCE TERMINAL --- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 md:mb-32">
          <div className="bg-[var(--card-bg)] rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-sm border border-[var(--border-color)]">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary)] opacity-10 blur-[100px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(22,22,22,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(22,22,22,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="col-span-1 lg:col-span-7 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-color)] bg-[var(--background)] shadow-sm">
                  <MousePointerClick className="w-4 h-4 text-[var(--primary)]" />
                  <span className="text-xs font-bold tracking-widest uppercase">
                    Pay-Per-Click Marketing
                  </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.05]">
                  Stop spending. <br />
                  <span className="text-[var(--primary)]">
                    Start investing.
                  </span>
                </h1>

                <p className="text-lg text-[var(--foreground-muted)] max-w-xl leading-relaxed font-medium">
                  We don't just chase clicks; we engineer profitable acquisition
                  pipelines. Our Google Ads campaigns are built on relentless
                  testing, hyper-targeted intent, and strict ROI goals.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <a
                    href="#audit"
                    className="w-full sm:w-auto text-center bg-[var(--foreground)] text-[var(--card-bg)] px-8 py-4 rounded-xl font-bold shadow-xl hover:bg-[var(--primary)] hover:text-[var(--foreground)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Request Account Audit
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Right: Abstract Metric Cards */}
              <div className="col-span-1 lg:col-span-5 relative perspective-1000 hidden md:flex flex-col gap-6 items-end">
                {/* ROAS Card */}
                <div className="w-[85%] bg-[var(--background)] border border-[var(--border-color)] rounded-2xl p-6 shadow-xl transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent to-[var(--primary)]"></div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-xs font-bold tracking-widest text-[var(--foreground-muted)] uppercase mb-1">
                        Target ROAS
                      </p>
                      <h3 className="text-4xl font-black text-[var(--foreground)]">
                        580%
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)]">
                      <Target className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="w-full bg-[var(--border-color)] rounded-full h-2">
                    <div className="bg-[var(--primary)] h-2 rounded-full w-[85%]"></div>
                  </div>
                </div>

                {/* Conversion Card */}
                <div className="w-[95%] bg-[var(--foreground)] text-[var(--card-bg)] rounded-2xl p-6 shadow-2xl transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-500 z-10 -translate-x-8">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <p className="text-xs font-bold tracking-widest text-[var(--card-bg)]/60 uppercase mb-1">
                        Cost Per Acquisition
                      </p>
                      <h3 className="text-3xl font-black text-white">
                        $14.50{" "}
                        <span className="text-sm font-medium text-green-400">
                          -22%
                        </span>
                      </h3>
                    </div>
                    <Activity className="w-8 h-8 text-green-400" />
                  </div>
                  {/* Mini Bar Chart Mockup */}
                  <div className="flex items-end gap-2 h-12">
                    {[1, 2, 1, 3, 2, 4, 3, 5].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-white/20 hover:bg-[var(--primary)] transition-colors rounded-t-sm"
                        style={{ height: `${h * 20}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- PERFORMANCE DATA SECTION --- */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[var(--border-color)]">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black text-[var(--foreground)] tracking-tight mb-4">
                The Anatomy of ROI.
              </h2>
              <p className="text-[var(--foreground-muted)] text-lg">
                We believe in total transparency. See exactly how your budget
                translates into revenue, and which networks are driving your
                most valuable customers.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Composed Chart: Spend vs Revenue */}
            <div className="bg-[var(--card-bg)] rounded-[2rem] p-6 sm:p-8 shadow-sm border border-[var(--border-color)] flex flex-col h-full">
              <div className="mb-8 flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-bold text-[var(--foreground)]">
                    Spend vs. Revenue (ROAS)
                  </h4>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    Scaling revenue while maintaining efficient ad spend.
                  </p>
                </div>
                <TrendingUp className="w-6 h-6 text-[var(--foreground-muted)] opacity-50 hidden sm:block" />
              </div>

              <div className="h-[250px] sm:h-[300px] w-full mt-auto">
                {isMounted && (
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                      data={roasData}
                      margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        stroke="var(--border-color)"
                      />
                      <XAxis
                        dataKey="month"
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
                        cursor={{ fill: "var(--background)" }}
                        contentStyle={{
                          backgroundColor: "var(--card-bg)",
                          border: "1px solid var(--border-color)",
                          borderRadius: "12px",
                          color: "var(--foreground)",
                        }}
                      />
                      <Bar
                        dataKey="spend"
                        name="Ad Spend ($)"
                        fill="var(--foreground-muted)"
                        opacity={0.3}
                        radius={[4, 4, 0, 0]}
                        barSize={30}
                      />
                      <Line
                        type="monotone"
                        dataKey="revenue"
                        name="Revenue ($)"
                        stroke="var(--primary)"
                        strokeWidth={4}
                        dot={{
                          r: 4,
                          fill: "var(--card-bg)",
                          stroke: "var(--primary)",
                          strokeWidth: 2,
                        }}
                        activeDot={{ r: 6 }}
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                )}
              </div>
            </div>

            {/* Pie Chart: Network Distribution */}
            <div className="bg-[var(--card-bg)] rounded-[2rem] p-6 sm:p-8 shadow-sm border border-[var(--border-color)] flex flex-col sm:flex-row items-center gap-8 h-full">
              <div className="flex-1 w-full h-[250px] relative">
                {isMounted && (
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={networkSplit}
                        cx="50%"
                        cy="50%"
                        innerRadius={65}
                        outerRadius={90}
                        paddingAngle={4}
                        dataKey="value"
                        stroke="none"
                      >
                        {networkSplit.map((entry, index) => (
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
                  <Crosshair className="w-8 h-8 text-[var(--primary)] mb-1" />
                  <span className="text-[10px] font-bold text-[var(--foreground)] uppercase tracking-widest">
                    Network
                  </span>
                </div>
              </div>

              <div className="flex-1 space-y-4 w-full">
                <h4 className="text-lg font-bold text-[var(--foreground)] mb-2 border-b border-[var(--border-color)] pb-2">
                  Budget Allocation
                </h4>
                {networkSplit.map((item, idx) => (
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

        {/* --- CAMPAIGN CAPABILITIES GRID --- */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[var(--border-color)]">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-[var(--foreground)] mb-4">
              Our PPC Arsenal
            </h2>
            <p className="text-[var(--foreground-muted)] text-lg max-w-2xl mx-auto">
              We leverage the full suite of Google's advertising networks to
              capture high-intent users at every stage of the funnel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Search Campaigns",
                icon: Search,
                desc: "Capture users exactly when they are searching for your services with hyper-targeted text ads and exact-match keywords.",
              },
              {
                title: "Performance Max",
                icon: Zap,
                desc: "Harness Google's machine learning to automatically serve ads across Search, Display, YouTube, and Maps simultaneously.",
              },
              {
                title: "Google Shopping",
                icon: ShoppingBag,
                desc: "Put your products directly at the top of search results with dynamic image-based product listing ads.",
              },
              {
                title: "YouTube Advertising",
                icon: MonitorPlay,
                desc: "Build massive brand awareness and retarget website visitors through skippable and non-skippable video ads.",
              },
              {
                title: "Retargeting Logic",
                icon: Target,
                desc: "Bring back the 95% of users who didn't convert on their first visit with strategic display and search remarketing.",
              },
              {
                title: "Conversion Tracking",
                icon: Activity,
                desc: "Flawless Google Tag Manager (GTM) setups so every call, form fill, and purchase is tracked back to the exact keyword.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-[var(--card-bg)] p-8 rounded-[2rem] border border-[var(--border-color)] shadow-sm hover:border-[var(--primary)] hover:-translate-y-1 transition-all duration-300 group"
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
          <div
            id="audit"
            className="mt-16 bg-[var(--primary)] rounded-[2rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-lg"
          >
            {/* Overlay Graphic */}
            <div className="absolute top-0 right-0 w-[400px] h-full bg-[var(--foreground)] opacity-[0.03] pointer-events-none skew-x-12 translate-x-10"></div>

            <div className="max-w-2xl relative z-10 text-center md:text-left">
              <h3 className="text-2xl md:text-4xl font-black text-[#161616] mb-4">
                Are your current ads bleeding money?
              </h3>
              <p className="text-[#161616]/80 text-lg font-medium">
                Let our certified experts look under the hood. We'll identify
                wasted ad spend, missed negative keywords, and scaling
                opportunities for free.
              </p>
            </div>
            <div className="relative z-10 w-full md:w-auto">
              <a
                href="#contact"
                className="w-full md:w-auto text-center bg-[#161616] text-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-[#161616] transition-colors duration-300 block shadow-xl"
              >
                Get a Free Account Audit
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

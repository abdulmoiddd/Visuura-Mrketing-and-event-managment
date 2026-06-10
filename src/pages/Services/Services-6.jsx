import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "@/components/essential/Navbar";
import Footer from "@/components/essential/Footer";
import {
  Search,
  TrendingUp,
  Target,
  BarChart3,
  Link2,
  FileText,
  MapPin,
  Settings,
  ArrowUpRight,
  MousePointerClick,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
  Cell,
} from "recharts";

// --- Analytics Mock Data for Charts ---
const trafficGrowthData = [
  { month: "Month 1", organicTraffic: 2500, paidTraffic: 4000 },
  { month: "Month 2", organicTraffic: 3200, paidTraffic: 3800 },
  { month: "Month 3", organicTraffic: 4800, paidTraffic: 3500 },
  { month: "Month 4", organicTraffic: 7500, paidTraffic: 3000 },
  { month: "Month 5", organicTraffic: 12000, paidTraffic: 2500 },
  { month: "Month 6", organicTraffic: 18500, paidTraffic: 2000 },
];

const keywordRankings = [
  { position: "Top 3", count: 45, fill: "#f5c616" }, // var(--primary)
  { position: "Page 1", count: 120, fill: "#161616" }, // var(--foreground)
  { position: "Page 2", count: 85, fill: "#52525b" }, // var(--foreground-muted)
  { position: "Page 3+", count: 30, fill: "#d1dbdb" }, // var(--footer-bg)
];

export default function SeoServices() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Head>
        <title>SEO Services & Organic Growth | Visuura</title>
        <meta
          name="description"
          content="Data-driven Search Engine Optimization to dominate rankings and drive targeted organic revenue."
        />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        {/* --- HERO SECTION : SEARCH DASHBOARD AESTHETIC --- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 md:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Typography */}
            <div className="col-span-1 lg:col-span-7 space-y-8 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] shadow-sm">
                <Search className="w-4 h-4 text-[var(--primary)]" />
                <span className="text-xs font-bold tracking-widest text-[var(--foreground)] uppercase">
                  Search Engine Optimization
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.05]">
                Dominate Search. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--foreground)] to-[var(--foreground-muted)]">
                  Capture Intent.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-[var(--foreground-muted)] font-medium leading-relaxed max-w-xl">
                Traffic is vanity; revenue is sanity. We engineer compounding
                organic growth by targeting high-intent keywords, optimizing
                technical performance, and building absolute digital authority.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <a
                  href="#audit"
                  className="w-full sm:w-auto bg-[var(--primary)] text-[#161616] px-8 py-4 rounded-xl font-bold shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get a Free SEO Audit
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right: Abstract Search & Metrics Mockup */}
            <div className="col-span-1 lg:col-span-5 relative perspective-1000 hidden md:block">
              {/* Glow Behind */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--primary)] opacity-20 blur-[80px] rounded-full pointer-events-none"></div>

              <div className="relative transform rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700">
                {/* Search Bar UI */}
                <div className="w-full bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-4 shadow-xl mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--background)] flex items-center justify-center">
                    <span className="font-bold text-[var(--primary)]">G</span>
                  </div>
                  <div className="h-4 w-32 bg-[var(--background)] rounded-md animate-pulse"></div>
                  <div className="ml-auto w-4 h-4 rounded-full border-2 border-[var(--border-color)]"></div>
                </div>

                {/* Dashboard Card */}
                <div className="w-[90%] ml-auto bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-6 shadow-2xl relative">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <p className="text-xs text-[var(--foreground-muted)] font-bold uppercase tracking-wider mb-1">
                        Organic Traffic
                      </p>
                      <h3 className="text-3xl font-black text-[var(--foreground)]">
                        +428%
                      </h3>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-[#2ed06e]/10 flex items-center justify-center text-[#2ed06e]">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                  </div>
                  {/* Mini Sparkline Mockup */}
                  <div className="h-16 w-full flex items-end gap-1 opacity-80">
                    {[2, 3, 2, 4, 5, 8, 12, 16, 24].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-[var(--primary)] rounded-t-sm"
                        style={{ height: `${height * 4}px` }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Floating Ranking Badge */}
                <div className="absolute -bottom-6 -left-6 bg-[var(--foreground)] text-[var(--card-bg)] p-4 rounded-xl shadow-xl flex items-center gap-3 animate-[bounce_4s_infinite]">
                  <Target className="w-6 h-6 text-[var(--primary)]" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--card-bg)]/70">
                      Rank #1
                    </p>
                    <p className="text-sm font-black">High-Intent Keyword</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SEO DATA & ANALYTICS SECTION --- */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[var(--border-color)]">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black text-[var(--foreground)] tracking-tight mb-4">
                The Compound Effect.
              </h2>
              <p className="text-[var(--foreground-muted)] text-lg">
                Unlike paid ads that stop the second you stop paying, organic
                SEO builds permanent equity. Watch your traffic scale
                exponentially over time.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Area Chart: Organic vs Paid */}
            <div className="bg-[var(--card-bg)] rounded-[2rem] p-6 sm:p-8 shadow-sm border border-[var(--border-color)] flex flex-col h-full">
              <div className="mb-8 flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-bold text-[var(--foreground)]">
                    Traffic Acquisition
                  </h4>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    Organic Growth vs. Paid Ad Dependency.
                  </p>
                </div>
                <BarChart3 className="w-6 h-6 text-[var(--foreground-muted)] opacity-50 hidden sm:block" />
              </div>

              <div className="h-[250px] sm:h-[300px] w-full mt-auto">
                {isMounted && (
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={trafficGrowthData}
                      margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient
                          id="colorOrganic"
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
                        contentStyle={{
                          backgroundColor: "var(--card-bg)",
                          border: "1px solid var(--border-color)",
                          borderRadius: "12px",
                          color: "var(--foreground)",
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="paidTraffic"
                        name="Paid Traffic (Decreasing)"
                        stroke="var(--foreground-muted)"
                        fill="transparent"
                        strokeWidth={2}
                        strokeDasharray="5 5"
                      />
                      <Area
                        type="monotone"
                        dataKey="organicTraffic"
                        name="Organic Traffic (Growing)"
                        stroke="var(--primary)"
                        strokeWidth={4}
                        fillOpacity={1}
                        fill="url(#colorOrganic)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                )}
              </div>
            </div>

            {/* Bar Chart: Keyword Distribution */}
            <div className="bg-[var(--card-bg)] rounded-[2rem] p-6 sm:p-8 shadow-sm border border-[var(--border-color)] flex flex-col h-full">
              <div className="mb-8">
                <h4 className="text-xl font-bold text-[var(--foreground)]">
                  Keyword Position Distribution
                </h4>
                <p className="text-sm text-[var(--foreground-muted)]">
                  Where a mature SEO campaign holds its rankings.
                </p>
              </div>

              <div className="h-[250px] sm:h-[300px] w-full mt-auto relative">
                {isMounted && (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={keywordRankings}
                      layout="vertical"
                      margin={{ top: 0, right: 30, left: 10, bottom: 0 }}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        horizontal={false}
                        stroke="var(--border-color)"
                      />
                      <XAxis
                        type="number"
                        stroke="var(--foreground-muted)"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis
                        dataKey="position"
                        type="category"
                        stroke="var(--foreground)"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        width={60}
                        fontWeight="bold"
                      />
                      <Tooltip
                        cursor={{ fill: "var(--background)" }}
                        contentStyle={{
                          backgroundColor: "var(--card-bg)",
                          border: "1px solid var(--border-color)",
                          borderRadius: "8px",
                          color: "var(--foreground)",
                        }}
                      />
                      <Bar
                        dataKey="count"
                        name="Keywords Ranking"
                        radius={[0, 4, 4, 0]}
                        barSize={28}
                      >
                        {keywordRankings.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* --- CORE SEO PILLARS GRID --- */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[var(--border-color)]">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-[var(--foreground)] mb-4">
              Our Growth Methodology
            </h2>
            <p className="text-[var(--foreground-muted)] text-lg max-w-2xl mx-auto">
              We leave no stone unturned. Our holistic approach covers technical
              health, content authority, and powerful off-page signals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Technical SEO",
                icon: Settings,
                desc: "Site speed optimization, core web vitals, schema markup, and crawlability fixes to ensure Google loves your architecture.",
              },
              {
                title: "Keyword Strategy",
                icon: Search,
                desc: "Deep-dive research to find high-volume, commercial-intent keywords your competitors are missing.",
              },
              {
                title: "Content Architecture",
                icon: FileText,
                desc: "Creating pillar pages, authoritative blogs, and perfectly optimized landing pages that answer user intent.",
              },
              {
                title: "Authority Link Building",
                icon: Link2,
                desc: "Acquiring high-DR (Domain Rating) backlinks from respected industry publications to boost your site's trust.",
              },
              {
                title: "Local SEO & Maps",
                icon: MapPin,
                desc: "Dominating the Google Map Pack and local search results to drive foot traffic and localized leads.",
              },
              {
                title: "Conversion Rate (CRO)",
                icon: MousePointerClick,
                desc: "Getting traffic is half the battle. We optimize your pages to turn those new visitors into paying customers.",
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

          {/* Bottom Audit CTA */}
          <div
            id="audit"
            className="mt-16 bg-[var(--foreground)] rounded-[2rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl"
          >
            {/* Overlay Gradient */}
            <div className="absolute top-0 right-0 w-[400px] h-full bg-gradient-to-l from-[var(--primary)]/20 to-transparent pointer-events-none"></div>

            <div className="max-w-2xl relative z-10 text-center md:text-left">
              <h3 className="text-2xl md:text-4xl font-black text-[var(--card-bg)] mb-4">
                Stop guessing. Start growing.
              </h3>
              <p className="text-[var(--card-bg)] text-lg">
                Let our experts look under the hood of your website. We'll
                provide a comprehensive technical audit and keyword gap
                analysis—completely free.
              </p>
            </div>
            <div className="relative z-10 w-full md:w-auto">
              <a
                href="#contact"
                className="w-full md:w-auto text-center bg-[var(--primary)] text-[var(--foreground)] px-10 py-4 rounded-xl font-bold hover:scale-105 transition-transform duration-300 block shadow-[0_0_20px_rgba(245,198,22,0.3)]"
              >
                Claim Free Audit
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

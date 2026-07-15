import React, { useState, useEffect } from "react";
import SEO from "@/components/essential/Seo";
import Navbar from "@/components/essential/Navbar";
import Footer from "@/components/essential/Footer";
import {
  Map,
  Maximize,
  Train,
  Smartphone,
  Eye,
  ArrowRight,
  TrendingUp,
  MapPin,
  Projector,
  Sun,
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

// --- Outdoor Advertising Mock Data ---
// Traffic and Impression density throughout a 24-hour cycle
const trafficData = [
  { time: "6 AM", impressions: 12000 },
  { time: "9 AM", impressions: 45000 }, // Morning Commute
  { time: "12 PM", impressions: 30000 },
  { time: "3 PM", impressions: 28000 },
  { time: "6 PM", impressions: 52000 }, // Evening Commute
  { time: "9 PM", impressions: 22000 },
];

// OOH Media Format Distribution
const mediaFormatData = [
  { name: "Digital Billboards (DOOH)", value: 45 },
  { name: "Traditional Bulletins", value: 25 },
  { name: "Transit (Buses/Trains)", value: 20 },
  { name: "Street Furniture", value: 10 },
];

const PIE_COLORS = ["#f5c616", "#161616", "#52525b", "#d1dbdb"];

export default function OutdoorAdvertising() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <SEO
        title="Outdoor Advertising & OOH | Visuura"
        description="Dominate the physical world with high-impact Out-of-Home (OOH) advertising, digital billboards, and transit media."
        path="/Services/Services-11"
      />

      <Navbar />

      <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden selection:bg-[var(--primary)] selection:text-[var(--logo-base)]">
        {/* --- HERO SECTION : SCALE & VISIBILITY --- */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 md:mb-32">
          {/* Animated Background Glows */}
          <div className="absolute top-0 right-10 w-72 md:w-96 h-72 md:h-96 bg-[var(--primary)] rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob"></div>
          <div className="absolute top-20 left-10 w-72 md:w-96 h-72 md:h-96 bg-[var(--card-bg)] rounded-full mix-blend-overlay filter blur-[100px] opacity-80 animate-blob animation-delay-2000"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 pt-10 md:pt-20">
            {/* Left Typography */}
            <div className="flex-1 space-y-6 text-center lg:text-left z-20">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)]/50 backdrop-blur-md shadow-sm mb-4 transform transition-transform hover:scale-105 duration-500 ease-out">
                <Map className="w-4 h-4 text-[var(--primary)]" />
                <span className="text-[11px] font-bold tracking-[0.2em] text-[var(--foreground)] uppercase">
                  Out-Of-Home Media
                </span>
              </div>

              <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-[0.95] text-[var(--foreground)]">
                Command the <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
                  Physical World.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-[var(--foreground-muted)] font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
                In a world of skippable ads and ad-blockers, physical scale is
                unmissable. We secure high-impact billboard inventory, transit
                media, and digital spectaculars that force the world to look.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <a
                  href="https://wa.me/923312227697" target="_blank" rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-[var(--logo-base)] px-10 py-4.5 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out flex items-center justify-center gap-2 group"
                >
                  Plan a Campaign
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500" />
                </a>
              </div>
            </div>

            {/* Right Abstract Billboard Graphic */}
            <div className="flex-1 hidden lg:flex justify-end relative perspective-1000">
              <div className="relative w-[500px] h-[400px] transform rotate-y-[-15deg] rotate-x-[5deg] transition-transform duration-700 hover:rotate-y-0 hover:rotate-x-0">
                {/* Main Billboard Panel */}
                <div className="absolute inset-0 bg-[var(--card-bg)]/60 backdrop-blur-2xl border-4 border-[var(--border-color)] rounded-[2rem] shadow-2xl flex flex-col overflow-hidden z-20">
                  <div className="h-full w-full bg-gradient-to-tr from-[var(--background)] to-[var(--card-bg)] p-8 flex flex-col justify-end relative">
                    {/* Screen Glow */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[var(--primary)] opacity-10"></div>
                    <Eye className="w-16 h-16 text-[var(--foreground)] mb-4 opacity-20" />
                    <div className="w-3/4 h-6 bg-[var(--foreground)] rounded-full mb-3 opacity-90"></div>
                    <div className="w-1/2 h-4 bg-[var(--foreground-muted)] rounded-full opacity-70"></div>
                  </div>
                </div>
                {/* Billboard Structure/Pillar */}
                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-16 h-40 bg-[var(--border-color)] z-10 shadow-inner rounded-b-lg"></div>
                <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-32 h-6 bg-[var(--border-color)] z-10 rounded-t-lg"></div>
              </div>
            </div>
          </div>
        </section>

        {/* --- FROSTED DATA SECTION --- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 md:mb-32 relative z-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12 px-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[var(--foreground)] mb-4">
                Metrics in the Real World.
              </h2>
              <p className="text-[var(--foreground-muted)] text-lg">
                OOH is no longer a guessing game. By integrating mobile
                geolocation data, we map exact impression volumes and commuter
                behavior to guarantee maximum visibility.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Area Chart: Traffic/Impression Density */}
            <div className="bg-[var(--card-bg)]/70 backdrop-blur-2xl rounded-[3rem] p-8 md:p-10 shadow-sm border border-[var(--border-color)] flex flex-col h-full transform transition-all hover:shadow-xl duration-700 ease-out">
              <div className="mb-8 flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-bold text-[var(--foreground)] mb-1">
                    Impression Density
                  </h4>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    Daily vehicular and foot traffic exposure.
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-[var(--background)] flex items-center justify-center shadow-inner">
                  <Sun className="w-5 h-5 text-[var(--foreground-muted)]" />
                </div>
              </div>

              <div className="h-[250px] sm:h-[300px] w-full mt-auto">
                {isMounted && (
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={trafficData}
                      margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient
                          id="colorImpressions"
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
                          borderRadius: "16px",
                          color: "var(--foreground)",
                          boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="impressions"
                        name="Est. Impressions"
                        stroke="var(--primary)"
                        strokeWidth={4}
                        fillOpacity={1}
                        fill="url(#colorImpressions)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                )}
              </div>
            </div>

            {/* Pie Chart: Media Formats */}
            <div className="bg-[var(--card-bg)]/70 backdrop-blur-2xl rounded-[3rem] p-8 md:p-10 shadow-sm border border-[var(--border-color)] flex flex-col sm:flex-row items-center gap-8 h-full transform transition-all hover:shadow-xl duration-700 ease-out">
              <div className="flex-1 w-full h-[250px] relative">
                {isMounted && (
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={mediaFormatData}
                        cx="50%"
                        cy="50%"
                        innerRadius={65}
                        outerRadius={90}
                        paddingAngle={5}
                        dataKey="value"
                        stroke="none"
                      >
                        {mediaFormatData.map((entry, index) => (
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
                  <Maximize className="w-8 h-8 text-[var(--primary)] mb-1" />
                </div>
              </div>

              <div className="flex-1 space-y-4 w-full">
                <h4 className="text-lg font-bold text-[var(--foreground)] mb-2 border-b border-[var(--border-color)] pb-2">
                  Media Allocation
                </h4>
                {mediaFormatData.map((item, idx) => (
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
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 border-t border-[var(--border-color)]">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-[var(--foreground)] mb-6">
              The OOH Arsenal.
            </h2>
            <p className="text-[var(--foreground-muted)] text-lg max-w-2xl mx-auto">
              From towering highway bulletins to hyper-local bus shelters, we
              place your brand directly in the path of your consumer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Digital Out-Of-Home (DOOH)",
                desc: "Programmatic, high-resolution digital screens that allow for day-parting, dynamic creative, and weather-triggered ads.",
                icon: Maximize,
              },
              {
                title: "Traditional Billboards",
                desc: "Static, large-format bulletins on major highways and arterial roads to build massive, long-term brand awareness.",
                icon: Eye,
              },
              {
                title: "Transit Advertising",
                desc: "Full bus wraps, train interior displays, and airport domination packages to capture captive commuter audiences.",
                icon: Train,
              },
              {
                title: "Street Furniture",
                desc: "Eye-level placements on bus shelters, kiosks, and newsstands targeting heavy pedestrian traffic in urban centers.",
                icon: MapPin,
              },
              {
                title: "Projection Mapping",
                desc: "Guerrilla marketing tactics utilizing high-powered projectors to map video onto city buildings for viral moments.",
                icon: Projector,
              },
              {
                title: "Geofence Retargeting",
                desc: "Creating a virtual perimeter around your billboards to serve mobile ads to users who have physically walked past them.",
                icon: Smartphone,
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
                Ready to make a massive impact?
              </h3>
              <p className="text-[var(--card-bg)] text-lg md:text-xl font-medium mb-10">
                Whether you need a single localized billboard or a nationwide
                transit takeover, our media buyers will negotiate the best rates
                for your brand.
              </p>
              <a
                href="https://wa.me/923312227697" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[var(--primary)] text-[var(--logo-base)] px-10 py-4.5 rounded-full font-bold text-lg hover:scale-105 hover:shadow-[0_10px_30px_color-mix(in_srgb,var(--primary)_30%,transparent)] transition-all duration-500 ease-out"
              >
                Secure Your Placement
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

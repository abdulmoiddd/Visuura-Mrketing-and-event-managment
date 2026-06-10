import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "@/components/essential/Navbar";
import Footer from "@/components/essential/Footer";
import {
  CalendarDays,
  MapPin,
  Music,
  Tent,
  Video,
  ArrowRight,
  Sparkles,
  Ticket,
  ShieldCheck,
  Radio,
} from "lucide-react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// --- Mock Data for Charts ---
// Radar chart showing 360-degree event production capabilities
const productionMetrics = [
  { subject: "A/V Setup", A: 100, fullMark: 100 },
  { subject: "Venue Sourcing", A: 90, fullMark: 100 },
  { subject: "Talent Booking", A: 85, fullMark: 100 },
  { subject: "Marketing", A: 95, fullMark: 100 },
  { subject: "Logistics", A: 90, fullMark: 100 },
  { subject: "Security", A: 100, fullMark: 100 },
];

// Area chart showing ticket sales/engagement velocity over the event lifecycle
const eventLifecycleData = [
  { phase: "Announce", engagement: 30 },
  { phase: "Early Bird", engagement: 55 },
  { phase: "Phase 1", engagement: 45 },
  { phase: "Phase 2", engagement: 65 },
  { phase: "Final Week", engagement: 90 },
  { phase: "Event Day", engagement: 100 },
];

export default function EventManagement() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Head>
        <title>Event Management & Production | Visuura</title>
        <meta
          name="description"
          content="Flawless execution and immersive event production from concept to curtain drop."
        />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-[#050505] text-white pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        {/* --- VIP HERO SECTION --- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-32">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left: Typography */}
            <div className="flex-1 space-y-8 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 text-[var(--primary)]">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-bold tracking-widest uppercase">
                  Elite Event Production
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.05]">
                Orchestrating <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
                  the Unforgettable.
                </span>
              </h1>

              <p className="text-lg text-white/60 max-w-lg leading-relaxed font-medium">
                We handle the chaos behind the curtain so your brand can shine
                under the spotlight. From high-stakes corporate galas to
                immersive brand activations.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-4">
                <a
                  href="#contact"
                  className="bg-[var(--primary)] text-[#161616] px-8 py-4 rounded-full font-bold shadow-[0_0_30px_rgba(212,167,15,0.2)] hover:shadow-[0_0_40px_rgba(212,167,15,0.4)] hover:-translate-y-1 transition-all duration-300"
                >
                  Book a Consultation
                </a>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full border-2 border-[#050505] bg-gray-800"></div>
                    <div className="w-10 h-10 rounded-full border-2 border-[#050505] bg-gray-700"></div>
                    <div className="w-10 h-10 rounded-full border-2 border-[#050505] bg-[var(--primary)] flex items-center justify-center text-[#161616] font-bold text-xs">
                      +75
                    </div>
                  </div>
                  <span className="text-sm font-bold text-white/50 uppercase tracking-widest">
                    Events Delivered
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Floating VIP Ticket Graphic */}
            <div className="flex-1 w-full flex justify-center lg:justify-end relative perspective-1000">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[var(--primary)] blur-[100px] opacity-20 rounded-full pointer-events-none"></div>

              {/* Ticket Card Container */}
              <div className="w-[300px] sm:w-[350px] bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-[2rem] border border-white/10 shadow-2xl transform rotate-y-[-15deg] rotate-x-[10deg] rotate-z-[5deg] hover:rotate-y-0 hover:rotate-x-0 hover:rotate-z-0 transition-transform duration-500 overflow-hidden relative">
                {/* Perforated Edges Illusion */}
                <div className="absolute top-1/2 -left-3 w-6 h-6 bg-[#050505] rounded-full -translate-y-1/2"></div>
                <div className="absolute top-1/2 -right-3 w-6 h-6 bg-[#050505] rounded-full -translate-y-1/2"></div>
                <div className="absolute top-1/2 left-4 right-4 h-[1px] border-b-2 border-dashed border-white/10"></div>

                {/* Top Half of Ticket */}
                <div className="p-8 pb-12 text-center relative">
                  <Ticket className="w-8 h-8 text-[var(--primary)] mx-auto mb-4 opacity-50" />
                  <h3 className="text-2xl font-black text-white tracking-widest uppercase mb-1">
                    Visuura
                  </h3>
                  <p className="text-[var(--primary)] text-sm font-bold tracking-[0.3em]">
                    ALL ACCESS PASS
                  </p>
                </div>

                {/* Bottom Half of Ticket */}
                <div className="p-8 pt-12 bg-white/5 backdrop-blur-md">
                  <div className="flex justify-between items-end mb-6">
                    <div>
                      <p className="text-[10px] text-white/50 uppercase tracking-widest mb-1">
                        Production Level
                      </p>
                      <p className="text-lg font-bold text-white">Turn-Key</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-white/50 uppercase tracking-widest mb-1">
                        Experience
                      </p>
                      <p className="text-lg font-bold text-white">Premium</p>
                    </div>
                  </div>

                  {/* Barcode Mockup */}
                  <div className="w-full h-12 flex gap-1 items-center justify-center opacity-30">
                    {[1, 3, 1, 2, 1, 4, 1, 1, 3, 2, 1, 2, 3, 1, 2].map(
                      (width, i) => (
                        <div
                          key={i}
                          className="h-full bg-white"
                          style={{ width: `${width * 3}px` }}
                        ></div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- RADAR & ENGAGEMENT DATA SECTION --- */}
        <section className="bg-[#0a0a0a] py-24 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
                Precision in Every Dimension.
              </h2>
              <p className="text-white/50 text-lg">
                We don't leave anything to chance. Our production methodology
                ensures top-tier performance across all critical event vectors.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Radar Chart: Production Capabilities */}
              <div className="bg-[#111111] rounded-[2rem] p-6 sm:p-8 shadow-2xl border border-white/5 flex flex-col items-center">
                <div className="w-full mb-4 text-left">
                  <h4 className="text-xl font-bold text-white">
                    360° Event Coverage
                  </h4>
                  <p className="text-sm text-white/50">
                    Our capability spectrum.
                  </p>
                </div>

                <div className="h-[300px] sm:h-[350px] w-full">
                  {isMounted && (
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart
                        cx="50%"
                        cy="50%"
                        outerRadius="70%"
                        data={productionMetrics}
                      >
                        <PolarGrid stroke="#333" />
                        <PolarAngleAxis
                          dataKey="subject"
                          tick={{
                            fill: "#888",
                            fontSize: 12,
                            fontWeight: "bold",
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
                            backgroundColor: "#161616",
                            border: "1px solid #333",
                            borderRadius: "8px",
                          }}
                        />
                        <Radar
                          name="Visuura Production"
                          dataKey="A"
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

              {/* Area Chart: Engagement Velocity */}
              <div className="bg-[#111111] rounded-[2rem] p-6 sm:p-8 shadow-2xl border border-white/5 flex flex-col h-full">
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-white">
                    Audience Momentum
                  </h4>
                  <p className="text-sm text-white/50">
                    Engagement and ticket velocity leading up to event day.
                  </p>
                </div>

                <div className="h-[250px] sm:h-[300px] w-full mt-auto">
                  {isMounted && (
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={eventLifecycleData}
                        margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
                      >
                        <defs>
                          <linearGradient
                            id="colorEngagement"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="#ffffff"
                              stopOpacity={0.3}
                            />
                            <stop
                              offset="95%"
                              stopColor="#ffffff"
                              stopOpacity={0}
                            />
                          </linearGradient>
                        </defs>
                        <XAxis
                          dataKey="phase"
                          stroke="#666"
                          fontSize={11}
                          tickLine={false}
                          axisLine={false}
                        />
                        <YAxis
                          stroke="#666"
                          fontSize={12}
                          tickLine={false}
                          axisLine={false}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#111",
                            border: "1px solid #333",
                            borderRadius: "12px",
                            color: "#fff",
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey="engagement"
                          name="Engagement Score"
                          stroke="#fff"
                          strokeWidth={3}
                          fill="url(#colorEngagement)"
                          dot={{
                            r: 4,
                            fill: "#000",
                            stroke: "#fff",
                            strokeWidth: 2,
                          }}
                          activeDot={{
                            r: 6,
                            fill: "var(--primary)",
                            stroke: "#000",
                          }}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- PIPELINE / SERVICES LIST --- */}
        <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              The Production Pipeline
            </h2>
            <p className="text-white/50 text-lg">
              A meticulously engineered process from white-boarding to the
              standing ovation.
            </p>
          </div>

          <div className="space-y-0">
            {[
              {
                title: "Conceptualization & Strategy",
                icon: CalendarDays,
                desc: "Defining the event's core purpose, theme, audience demographics, and overarching visual identity.",
              },
              {
                title: "Venue & Permits",
                icon: MapPin,
                desc: "Securing the perfect location, negotiating contracts, and handling all local city or safety permits required.",
              },
              {
                title: "Stage & AV Engineering",
                icon: Video,
                desc: "Designing lighting rigs, LED walls, audio systems, and stage architecture that commands attention.",
              },
              {
                title: "Talent & Guest Management",
                icon: Music,
                desc: "Rider fulfillment, travel logistics, VIP hospitality, and green room management for all performing artists or speakers.",
              },
              {
                title: "On-Ground Execution",
                icon: Radio,
                desc: "Show-calling, stage management, security coordination, and minute-by-minute timeline execution on event day.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group relative py-8 md:py-12 border-t border-white/10 flex flex-col md:flex-row gap-6 md:gap-12 md:items-center hover:bg-white/[0.02] transition-colors -mx-4 px-4 sm:mx-0 sm:px-0 rounded-2xl sm:rounded-none"
              >
                {/* Massive Number */}
                <div className="text-5xl md:text-7xl font-black text-white/5 group-hover:text-[var(--primary)] transition-colors duration-500 w-24">
                  0{idx + 1}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <feature.icon className="w-5 h-5 text-[var(--primary)] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <h3 className="text-2xl font-bold text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-white/60 leading-relaxed max-w-2xl text-sm md:text-base">
                    {feature.desc}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="hidden md:block opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  <ArrowRight className="w-8 h-8 text-white/20" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Call to Action */}
          <div className="mt-20 pt-12 border-t border-white/10 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">
              Have an ambitious event in mind?
            </h3>
            <a
              href="#contact"
              className="inline-flex items-center justify-center w-full sm:w-auto gap-2 bg-white text-[#161616] px-10 py-4 rounded-full font-bold hover:bg-[var(--primary)] transition-colors"
            >
              Let's Make It Happen
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

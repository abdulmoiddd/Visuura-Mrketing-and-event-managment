import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "@/components/essential/Navbar";
import Footer from "@/components/essential/Footer";
import {
  TrendingUp,
  Target,
  Users,
  MousePointerClick,
  Star,
  Quote,
  ArrowUpRight,
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

// --- Mock Data for Charts ---
const performanceData = [
  { month: "Jan", traffic: 4000, conversions: 240 },
  { month: "Feb", traffic: 5500, conversions: 350 },
  { month: "Mar", traffic: 7200, conversions: 540 },
  { month: "Apr", traffic: 9800, conversions: 780 },
  { month: "May", traffic: 13500, conversions: 1100 },
  { month: "Jun", traffic: 18900, conversions: 1650 },
];

const trafficSources = [
  { name: "Organic Search", value: 45 },
  { name: "Social Media", value: 25 },
  { name: "Paid Ads", value: 20 },
  { name: "Direct", value: 10 },
];

const PIE_COLORS = ["#d4a70f", "#161616", "#888888", "#e5e5e5"];

export default function DigitalMarketing() {
  // Fix for hydration mismatch with Recharts in Next.js
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Head>
        <title>Digital Marketing Services | Visuura</title>
        <meta
          name="description"
          content="Data-driven digital marketing strategies that scale your brand."
        />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-[var(--background)] text-foreground pt-32 pb-20">
        {/* --- HERO SECTION --- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center md:text-left flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--background)] shadow-sm border border-black/5">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
              <h2 className="text-xs font-bold tracking-widest text-[#161616] uppercase">
                Digital Marketing
              </h2>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-[#161616] tracking-tight leading-tight">
              Data-driven strategies that <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[#d4a70f]">
                scale your brand.
              </span>
            </h1>
            <p className="text-lg text-[var(--foreground-muted)] max-w-xl leading-relaxed mx-auto md:mx-0">
              We don't just run ads; we build growth engines. Our comprehensive
              marketing solutions increase your visibility, drive high-quality
              traffic, and maximize your ROI.
            </p>
            <div className="pt-4 flex justify-center md:justify-start">
              <button className="bg-[#161616] text-white px-8 py-3.5 rounded-full font-bold shadow-lg hover:bg-[var(--primary)] hover:text-[#161616] transition-all duration-300 flex items-center gap-2 group">
                Start Your Campaign
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="flex-1 grid grid-cols-2 gap-4 w-full">
            {[
              { icon: Target, label: "Average ROI", value: "350%+" },
              { icon: TrendingUp, label: "Ad Spend Managed", value: "$2M+" },
              { icon: Users, label: "Leads Generated", value: "50k+" },
              {
                icon: MousePointerClick,
                label: "Conversion Rate",
                value: "4.8%",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-[1.5rem] shadow-sm border border-black/5 hover:-translate-y-1 transition-transform"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-[var(--primary)] mb-4">
                  <stat.icon className="w-5 h-5" />
                </div>
                <h4 className="text-3xl font-black text-[#161616] mb-1">
                  {stat.value}
                </h4>
                <p className="text-xs font-bold text-[var(--foreground-muted)] uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* --- PERFORMANCE GRAPHS SECTION --- */}
        <section className="bg-[#161616] py-24 px-4 sm:px-6 relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[var(--primary)] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-12 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#E3ECEC] mb-4">
                Real Numbers.{" "}
                <span className="text-[var(--primary)]">Real Growth.</span>
              </h3>
              <p className="text-[#E3ECEC]/70 max-w-2xl text-lg">
                We believe in total transparency. Here is a look at the average
                growth trajectory of a client partnering with Visuura for 6
                months.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Traffic Growth Area Chart (Spans 2 columns) */}
              <div className="lg:col-span-2 bg-[#222222] border border-white/5 rounded-[2rem] p-6 md:p-8 shadow-2xl">
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-white">
                    Monthly Traffic & Conversions
                  </h4>
                  <p className="text-sm text-white/50">
                    Exponential growth over a 6-month period
                  </p>
                </div>

                <div className="h-[300px] w-full">
                  {isMounted && (
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={performanceData}
                        margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                      >
                        <defs>
                          <linearGradient
                            id="colorTraffic"
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
                        <XAxis
                          dataKey="month"
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
                            backgroundColor: "#161616",
                            border: "1px solid #333",
                            borderRadius: "12px",
                            color: "#fff",
                          }}
                          itemStyle={{
                            color: "var(--primary)",
                            fontWeight: "bold",
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey="traffic"
                          stroke="var(--primary)"
                          strokeWidth={3}
                          fillOpacity={1}
                          fill="url(#colorTraffic)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  )}
                </div>
              </div>

              {/* Traffic Sources Pie Chart */}
              <div className="lg:col-span-1 bg-[#222222] border border-white/5 rounded-[2rem] p-6 md:p-8 shadow-2xl flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-bold text-white">
                    Traffic Sources
                  </h4>
                  <p className="text-sm text-white/50">
                    Where your audience comes from
                  </p>
                </div>

                <div className="h-[220px] w-full mt-4">
                  {isMounted && (
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={trafficSources}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                          stroke="none"
                        >
                          {trafficSources.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={PIE_COLORS[index % PIE_COLORS.length]}
                            />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#161616",
                            border: "none",
                            borderRadius: "8px",
                            color: "#fff",
                          }}
                          itemStyle={{ color: "#fff" }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  )}
                </div>

                {/* Custom Legend */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {trafficSources.map((source, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: PIE_COLORS[idx] }}
                      ></span>
                      <span className="text-xs font-semibold text-white/80">
                        {source.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- TESTIMONIALS SECTION --- */}
        <section className="py-24 px-4 sm:px-6 bg-[var(--background)]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#161616] mb-4">
                Don't just take our word for it.
              </h2>
              <p className="text-[var(--foreground-muted)] text-lg">
                Hear from the brands that trusted Visuura to scale their digital
                presence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "Visuura completely transformed our online presence. Our lead generation went up by 300% in just 4 months. Their team is incredibly data-focused.",
                  name: "Sarah Jenkins",
                  role: "Marketing Director, ElevateTech",
                },
                {
                  quote:
                    "The transparency and communication from the Visuura team are unmatched. We know exactly where our ad spend is going and the ROAS is fantastic.",
                  name: "Michael Chen",
                  role: "Founder, Urban Style E-commerce",
                },
                {
                  quote:
                    "They don't just run ads; they understood our core brand message and amplified it across the right channels. Best creative agency we've worked with.",
                  name: "Emma Roberts",
                  role: "CEO, Horizon Real Estate",
                },
              ].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-[2rem] shadow-sm border border-black/5 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group"
                >
                  <div className="absolute top-8 right-8 text-[var(--primary)] opacity-20 group-hover:opacity-100 transition-opacity">
                    <Quote size={40} />
                  </div>
                  <div className="flex gap-1 mb-6 text-[var(--primary)]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-[#161616]/80 text-lg leading-relaxed mb-8 relative z-10 font-medium">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <h5 className="font-extrabold text-[#161616] text-lg">
                      {testimonial.name}
                    </h5>
                    <p className="text-sm font-bold text-[var(--foreground-muted)]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

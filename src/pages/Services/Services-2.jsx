import React, { useState, useEffect } from "react";
import SEO from "@/components/essential/Seo";
import Navbar from "@/components/essential/Navbar";
import Footer from "@/components/essential/Footer";
import {
  Palette,
  PenTool,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Gem,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Line,
  ComposedChart,
} from "recharts";

// --- Mock Data for Charts ---
// Demonstrating the ROI of consistent branding over time
const brandImpactData = [
  { phase: "Pre-Launch", trust: 20, revenue_potential: 15 },
  { phase: "Launch", trust: 45, revenue_potential: 40 },
  { phase: "Quarter 1", trust: 65, revenue_potential: 70 },
  { phase: "Quarter 2", trust: 85, revenue_potential: 95 },
  { phase: "Year 1", trust: 98, revenue_potential: 120 },
];

// Project allocation for a full brand kit
const designAllocation = [
  { name: "Logo & Visual Identity", value: 40 },
  { name: "Marketing Collateral", value: 25 },
  { name: "UI/UX & Web Assets", value: 20 },
  { name: "Brand Guidelines", value: 15 },
];

const PIE_COLORS = ["#d4a70f", "#161616", "#e5e5e5", "#888888"];

export default function GraphicDesign() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <SEO
        title="Graphic Design & Branding | Visuura"
        description="Award-winning graphic design and brand identity solutions."
        path="/Services/Services-2"
      />

      <Navbar />

      <main className="min-h-screen bg-[var(--background)] text-foreground pt-32 pb-20">
        {/* --- CREATIVE HERO SECTION --- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left: Typography Focus */}
            <div className="flex-1 space-y-8 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/5">
                <Sparkles className="w-4 h-4 text-[var(--primary)]" />
                <h2 className="text-xs font-bold tracking-widest text-[#161616] uppercase">
                  Design & Branding
                </h2>
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-[#161616] tracking-tighter leading-[1.05]">
                Visuals that <br />
                <span className="relative inline-block">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#161616] to-[#555]">
                    speak louder
                  </span>
                  {/* Decorative underline */}
                  <span className="absolute bottom-2 left-0 w-full h-4 bg-[var(--primary)]/30 -z-10 skew-x-12"></span>
                </span>{" "}
                <br />
                than words.
              </h1>

              <p className="text-lg text-[var(--foreground-muted)] max-w-lg leading-relaxed font-medium">
                Your brand is more than just a logo. It’s an experience, a
                promise, and a visual handshake. We craft stunning identities
                that capture attention and build lasting customer loyalty.
              </p>

              <div className="flex items-center gap-6 pt-2">
                <a
                  href="#portfolio"
                  className="bg-[#161616] text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-black/10 hover:-translate-y-1 transition-all duration-300"
                >
                  View Our Portfolio
                </a>
                <a
                  href="https://wa.me/923312227697" target="_blank" rel="noopener noreferrer"
                  className="text-[#161616] font-bold flex items-center gap-2 hover:text-[var(--primary)] transition-colors group"
                >
                  Discuss a Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right: Abstract Creative Element (Instead of standard boxes) */}
            <div className="flex-1 relative w-full h-[500px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)]/20 to-transparent rounded-full blur-[100px] -z-10"></div>

              {/* Asymmetrical Grid Concept */}
              <div className="grid grid-cols-2 gap-4 w-full h-full relative">
                <div className="bg-[#161616] rounded-[2rem] p-8 flex flex-col justify-end text-white hover:scale-[1.02] transition-transform duration-500 shadow-2xl translate-y-8">
                  <Palette className="w-10 h-10 text-[var(--primary)] mb-4" />
                  <h3 className="text-2xl font-bold">Brand Identity</h3>
                  <p className="text-white/60 text-sm mt-2">
                    Logos, color palettes, and typography that define you.
                  </p>
                </div>
                <div className="bg-white border border-black/5 rounded-[2rem] p-8 flex flex-col justify-end text-[#161616] hover:scale-[1.02] transition-transform duration-500 shadow-xl -translate-y-8">
                  <Layers className="w-10 h-10 text-[var(--primary)] mb-4" />
                  <h3 className="text-2xl font-bold">UI & Digital</h3>
                  <p className="text-[#161616]/60 text-sm mt-2">
                    Pixel-perfect digital assets for social and web.
                  </p>
                </div>
                <div className="col-span-2 bg-[var(--primary)] rounded-[2rem] p-8 flex items-center justify-between hover:scale-[1.02] transition-transform duration-500 shadow-xl shadow-[var(--primary)]/20">
                  <div>
                    <h3 className="text-2xl font-black text-[#161616]">
                      Print & Packaging
                    </h3>
                    <p className="text-[#161616]/70 text-sm font-medium mt-1">
                      Bringing your brand into the physical world.
                    </p>
                  </div>
                  <PenTool className="w-12 h-12 text-[#161616]/20" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- THE DATA BEHIND DESIGN SECTION --- */}
        <section className="bg-white py-24 border-y border-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Gem className="w-8 h-8 text-[var(--primary)] mx-auto mb-4" />
              <h3 className="text-3xl md:text-5xl font-black text-[#161616] tracking-tight mb-4">
                The Science of Aesthetics.
              </h3>
              <p className="text-[var(--foreground-muted)] text-lg">
                Great design isn't just subjective art; it's a measurable
                business asset. Here is how a professional rebrand impacts
                market perception.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Composed Chart: Trust vs Revenue */}
              <div className="bg-[var(--background)] rounded-[2rem] p-8 shadow-sm border border-black/5">
                <div className="mb-8">
                  <h4 className="text-xl font-extrabold text-[#161616]">
                    Brand Trust vs. Revenue Potential
                  </h4>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    As aesthetic consistency increases, so does consumer trust.
                  </p>
                </div>

                <div className="h-[300px] w-full">
                  {isMounted && (
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart
                        data={brandImpactData}
                        margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                      >
                        <XAxis
                          dataKey="phase"
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
                            backgroundColor: "#fff",
                            border: "1px solid #eaeaea",
                            borderRadius: "12px",
                            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                          }}
                        />
                        {/* Bar for Trust */}
                        <Bar
                          dataKey="trust"
                          name="Brand Trust Metric"
                          fill="#161616"
                          radius={[4, 4, 0, 0]}
                          barSize={40}
                        />
                        {/* Line for Revenue */}
                        <Line
                          type="monotone"
                          dataKey="revenue_potential"
                          name="Revenue Potential"
                          stroke="var(--primary)"
                          strokeWidth={4}
                          dot={{
                            r: 6,
                            fill: "var(--primary)",
                            stroke: "#fff",
                            strokeWidth: 2,
                          }}
                        />
                      </ComposedChart>
                    </ResponsiveContainer>
                  )}
                </div>
              </div>

              {/* Unique Doughnut Chart for Deliverables */}
              <div className="bg-[#161616] rounded-[2rem] p-8 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[var(--primary)] blur-[60px] opacity-20"></div>

                <div className="flex-1 w-full h-[250px] relative z-10">
                  {isMounted && (
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={designAllocation}
                          cx="50%"
                          cy="50%"
                          innerRadius={70}
                          outerRadius={90}
                          paddingAngle={8}
                          cornerRadius={5}
                          dataKey="value"
                          stroke="none"
                        >
                          {designAllocation.map((entry, index) => (
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
                  {/* Center Text inside the Doughnut */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-3xl font-black text-white">360°</span>
                    <span className="text-xs font-bold text-[var(--primary)] uppercase tracking-widest">
                      Kit
                    </span>
                  </div>
                </div>

                <div className="flex-1 space-y-4 relative z-10 w-full">
                  <h4 className="text-xl font-bold text-white mb-2">
                    The Complete Package
                  </h4>
                  {designAllocation.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between border-b border-white/10 pb-2"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
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
          </div>
        </section>

        {/* --- BRANDING PROCESS / FEATURES --- */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#161616] mb-4">
              Our Design Arsenal
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Logo & Typography Design",
              "Comprehensive Brand Guidelines",
              "Social Media Post Templates",
              "Business Cards & Letterheads",
              "Custom Illustration & Iconography",
              "Product Packaging Design",
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-black/5 hover:border-[var(--primary)] transition-colors flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-[var(--background)] flex items-center justify-center group-hover:bg-[var(--primary)] transition-colors shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#161616]" />
                </div>
                <span className="font-semibold text-[#161616]">{feature}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

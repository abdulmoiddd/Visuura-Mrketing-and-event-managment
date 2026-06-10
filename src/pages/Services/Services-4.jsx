import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "@/components/essential/Navbar";
import Footer from "@/components/essential/Footer";
import {
  Printer,
  Layers,
  Droplets,
  Palette,
  Maximize,
  Target,
  ArrowRight,
  ArrowUpRight,
  Box,
  PenTool,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Legend,
  Cell,
} from "recharts";

// --- CMYK Mock Data for Charts ---
const cmykAccuracyData = [
  { color: "Cyan", accuracy: 99.2, fill: "#00AEEF" },
  { color: "Magenta", accuracy: 98.5, fill: "#EC008C" },
  { color: "Yellow", accuracy: 99.5, fill: "#FFF200" },
  { color: "Key (Black)", accuracy: 99.8, fill: "#161616" },
];

const finishingDemands = [
  { name: "Spot UV Coating", uv: 31.47, fill: "#161616" },
  { name: "Foil Stamping", uv: 26.69, fill: "#d4a70f" },
  { name: "Soft Touch Matte", uv: 20.69, fill: "#888888" },
  { name: "Embossing", uv: 15.69, fill: "#e5e5e5" },
];

export default function PrintingSolutions() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Head>
        <title>Premium Printing & Packaging | Visuura</title>
        <meta
          name="description"
          content="High-fidelity commercial printing, packaging, and large-format solutions with CMYK precision."
        />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-white text-[#161616] pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        {/* --- HERO SECTION : CMYK EDITORIAL --- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-32">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#161616]/10 bg-[#161616]/5">
              <div className="flex -space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-[#00AEEF] mix-blend-multiply"></div>
                <div className="w-3 h-3 rounded-full bg-[#EC008C] mix-blend-multiply"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFF200] mix-blend-multiply"></div>
              </div>
              <span className="text-xs font-black tracking-widest uppercase text-[#161616]">
                CMYK Precision Studio
              </span>
            </div>

            <h1 className="text-6xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.9] cursor-default group">
              Master the <br />
              {/* CMYK Misregistration Hover Effect */}
              <span className="relative inline-block mt-2">
                <span className="absolute inset-0 text-[#00AEEF] translate-x-0 translate-y-0 opacity-0 group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:opacity-100 transition-all duration-300 mix-blend-multiply z-10">
                  Art of Print
                </span>
                <span className="absolute inset-0 text-[#EC008C] translate-x-0 translate-y-0 opacity-0 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:opacity-100 transition-all duration-300 mix-blend-multiply z-10">
                  Art of Print
                </span>
                <span className="relative z-20 text-[#161616] group-hover:opacity-90 transition-opacity">
                  Art of Print
                </span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#161616]/60 max-w-2xl font-medium leading-relaxed mt-8">
              Digital tells a story. Print makes it real. From high-end luxury
              packaging to expansive outdoor signage, we deliver pixel-perfect
              color accuracy and tactile finishes that demand to be held.
            </p>

            <div className="flex items-center gap-6 pt-8">
              <a
                href="#contact"
                className="bg-[#161616] text-white px-10 py-4 rounded-full font-black tracking-wide shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                Order a Sample Kit
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* --- CMYK DATA VISUALIZATION (DARK MODE) --- */}
        <section className="bg-[#111111] text-white py-24 md:py-32 rounded-[2.5rem] md:rounded-[4rem] mx-4 sm:mx-6 lg:mx-8 shadow-2xl relative overflow-hidden">
          {/* Subtle noise/texture overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none"></div>

          <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 border-b border-white/10 pb-12">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
                  Data-Driven Calibration.
                </h2>
                <p className="text-white/50 text-lg">
                  Our presses are color-calibrated daily to ensure that the
                  brand identity you see on your screen matches the ink on the
                  paper with 99%+ accuracy.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-full bg-[#00AEEF] flex items-center justify-center shadow-[0_0_20px_rgba(0,174,239,0.3)]">
                  <Droplets className="w-6 h-6 text-white" />
                </div>
                <div className="w-16 h-16 rounded-full bg-[#EC008C] flex items-center justify-center shadow-[0_0_20px_rgba(236,0,140,0.3)]">
                  <Target className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Bar Chart: CMYK Accuracy */}
              <div className="bg-[#1a1a1a] p-8 rounded-[2rem] border border-white/5">
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-white mb-1">
                    Color Fidelity Index
                  </h4>
                  <p className="text-sm text-white/50">
                    Average reproduction accuracy across CMYK channels.
                  </p>
                </div>
                <div className="h-[250px] w-full">
                  {isMounted && (
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={cmykAccuracyData}
                        layout="vertical"
                        margin={{ top: 0, right: 30, left: 0, bottom: 0 }}
                      >
                        <XAxis
                          type="number"
                          domain={[90, 100]}
                          stroke="#444"
                          fontSize={12}
                          tickLine={false}
                          axisLine={false}
                        />
                        <YAxis
                          dataKey="color"
                          type="category"
                          stroke="#fff"
                          fontSize={12}
                          tickLine={false}
                          axisLine={false}
                          width={80}
                        />
                        <Tooltip
                          cursor={{ fill: "#222" }}
                          contentStyle={{
                            backgroundColor: "#000",
                            border: "1px solid #333",
                            borderRadius: "8px",
                            color: "#fff",
                          }}
                        />
                        <Bar
                          dataKey="accuracy"
                          radius={[0, 4, 4, 0]}
                          barSize={24}
                        >
                          {cmykAccuracyData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  )}
                </div>
              </div>

              {/* Radial Chart: Premium Finishes */}
              <div className="bg-[#1a1a1a] p-8 rounded-[2rem] border border-white/5 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 w-full h-[250px]">
                  {isMounted && (
                    <ResponsiveContainer width="100%" height="100%">
                      <RadialBarChart
                        cx="50%"
                        cy="50%"
                        innerRadius="30%"
                        outerRadius="100%"
                        barSize={16}
                        data={finishingDemands}
                        startAngle={180}
                        endAngle={0}
                      >
                        <RadialBar
                          minAngle={15}
                          background={{ fill: "#333" }}
                          clockWise
                          dataKey="uv"
                          cornerRadius={10}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#000",
                            border: "1px solid #333",
                            borderRadius: "8px",
                          }}
                        />
                      </RadialBarChart>
                    </ResponsiveContainer>
                  )}
                  <div className="text-center -mt-10">
                    <span className="text-2xl font-black text-white">
                      Finishes
                    </span>
                  </div>
                </div>

                <div className="flex-1 space-y-4 w-full">
                  <h4 className="text-lg font-bold text-white border-b border-white/10 pb-3">
                    Popular Textures
                  </h4>
                  {finishingDemands.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div
                        className="w-3 h-3 rounded-full shadow-sm"
                        style={{ backgroundColor: item.fill }}
                      ></div>
                      <span className="text-sm font-semibold text-white/80">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- EDITORIAL CAPABILITIES LIST --- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 md:mt-32">
          <div className="mb-16 md:mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-[#161616] tracking-tighter mb-6">
              Our Print Arsenal.
            </h2>
            <div className="w-full h-[1px] bg-[#161616]/10"></div>
          </div>

          <div className="flex flex-col gap-0">
            {[
              {
                title: "Offset & Digital Press",
                desc: "For high-volume brochures, catalogs, and fine-art books requiring exact color matching.",
                num: "01",
                icon: Printer,
              },
              {
                title: "Luxury Packaging",
                desc: "Custom die-cut boxes, magnetic enclosures, and foil-stamped labels that elevate the unboxing experience.",
                num: "02",
                icon: Box,
              },
              {
                title: "Large Format Signage",
                desc: "Weather-proof vinyls, trade show backdrops, and retail window displays built for maximum visibility.",
                num: "03",
                icon: Maximize,
              },
              {
                title: "Apparel & Merch",
                desc: "Silkscreen printing, DTF, and premium embroidery for corporate uniforms and promotional gear.",
                num: "04",
                icon: PenTool,
              },
            ].map((srv, idx) => (
              <div
                key={idx}
                className="group flex flex-col md:flex-row items-start md:items-center justify-between py-10 border-b border-[#161616]/10 hover:px-6 transition-all duration-500 cursor-pointer"
              >
                <div className="flex items-center gap-8 mb-4 md:mb-0">
                  <span className="text-3xl md:text-5xl font-black text-[#161616]/20 group-hover:text-[var(--primary)] transition-colors duration-500">
                    {srv.num}
                  </span>
                  <div>
                    <h3 className="text-2xl md:text-4xl font-bold text-[#161616] tracking-tight">
                      {srv.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-8 md:w-1/2 justify-between">
                  <p className="text-[#161616]/60 font-medium text-base md:text-lg max-w-sm">
                    {srv.desc}
                  </p>
                  <div className="w-14 h-14 rounded-full border border-[#161616]/10 flex items-center justify-center group-hover:bg-[#161616] group-hover:border-[#161616] transition-colors duration-500 shrink-0 hidden sm:flex">
                    <ArrowRight className="w-6 h-6 text-[#161616] group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Premium Call to Action */}
          <div className="mt-24 bg-[#f8f8f8] rounded-[2rem] p-8 md:p-16 text-center border border-[#161616]/5">
            <Palette className="w-12 h-12 mx-auto text-[#161616] mb-6" />
            <h3 className="text-3xl md:text-4xl font-black text-[#161616] mb-4">
              Feel the Difference.
            </h3>
            <p className="text-[#161616]/60 text-lg max-w-2xl mx-auto mb-8">
              We can send you a curated box of paper weights, finishes, and
              binding examples so you can feel the quality before you commit to
              a run.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#161616] text-white px-10 py-4 rounded-full font-bold hover:bg-[var(--primary)] hover:text-[#161616] transition-colors duration-300"
            >
              Request Sample Pack
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

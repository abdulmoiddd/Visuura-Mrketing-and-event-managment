import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "@/components/essential/Navbar";
import Footer from "@/components/essential/Footer";
import {
  ShoppingCart,
  CreditCard,
  Package,
  Globe,
  ArrowUpRight,
  TrendingUp,
  Lock,
  Smartphone,
  RefreshCw,
  BarChart as BarChartIcon,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";

// --- E-Commerce Mock Data for Charts ---
// Demonstrating a highly optimized conversion funnel
const funnelData = [
  { step: "Store Visitors", users: 10000, fill: "#d1dbdb" },
  { step: "Viewed Product", users: 6500, fill: "#52525b" },
  { step: "Added to Cart", users: 3200, fill: "#161616" },
  { step: "Successful Purchase", users: 1850, fill: "#f5c616" },
];

// E-Commerce platform architecture distribution
const platformArchitecture = [
  { name: "Shopify & Shopify Plus", value: 55 },
  { name: "Custom / Headless Commerce", value: 25 },
  { name: "WooCommerce", value: 15 },
  { name: "Other Platforms", value: 5 },
];

// Exact hex codes from your global CSS for Recharts
const PIE_COLORS = ["#f5c616", "#161616", "#52525b", "#d1dbdb"];

export default function EcommerceDevelopment() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Head>
        <title>E-Commerce Development | Visuura</title>
        <meta
          name="description"
          content="High-converting digital storefronts. We build scalable, secure, and blazing-fast e-commerce platforms."
        />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        {/* --- HERO SECTION : DIGITAL STOREFRONT AESTHETIC --- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 md:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Typography */}
            <div className="col-span-1 lg:col-span-7 space-y-8 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] shadow-sm">
                <ShoppingCart className="w-4 h-4 text-[var(--primary)]" />
                <span className="text-xs font-bold tracking-widest text-[var(--foreground)] uppercase">
                  Digital Retail
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.05]">
                Storefronts engineered to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] drop-shadow-sm">
                  Convert.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-[var(--foreground-muted)] font-medium leading-relaxed max-w-xl">
                A beautiful catalog isn't enough. We build lightning-fast,
                highly secure e-commerce ecosystems designed to reduce cart
                abandonment and maximize your average order value (AOV).
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <a
                  href="#contact"
                  className="w-full sm:w-auto bg-[var(--primary)] text-[var(--logo-base)] px-8 py-4 rounded-xl font-bold shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Start Your Build
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right: Floating E-Commerce UI Mockup */}
            <div className="col-span-1 lg:col-span-5 relative perspective-1000 hidden md:block">
              {/* Subtle background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--primary)] opacity-[0.08] blur-[80px] rounded-full pointer-events-none"></div>

              <div className="relative transform rotate-y-[-12deg] rotate-x-[8deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out">
                {/* Main Product Card Mockup */}
                <div className="w-[320px] ml-auto bg-[var(--card-bg)] border border-[var(--border-color)] rounded-[2rem] p-6 shadow-2xl relative z-20">
                  <div className="w-full h-40 bg-[var(--background)] rounded-xl mb-6 relative overflow-hidden flex items-center justify-center border border-[var(--border-color)]">
                    <Package className="w-12 h-12 text-[var(--foreground-muted)] opacity-20" />
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="h-4 w-3/4 bg-[var(--background)] rounded-md"></div>
                    <div className="h-4 w-1/2 bg-[var(--background)] rounded-md"></div>
                  </div>
                  <div className="flex justify-between items-center border-t border-[var(--border-color)] pt-4 mt-4">
                    <span className="text-2xl font-black text-[var(--foreground)]">
                      $129.00
                    </span>
                    <div className="bg-[var(--primary)] text-[var(--logo-base)] px-4 py-2 rounded-lg font-bold text-sm shadow-sm">
                      Add to Cart
                    </div>
                  </div>
                </div>

                {/* Floating "Payment Success" Notification */}
                <div className="absolute -bottom-6 -left-12 bg-[#2ed06e] text-white p-4 rounded-2xl shadow-xl flex items-center gap-3 z-30 animate-[bounce_4s_infinite]">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Lock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/80">
                      Secure Checkout
                    </p>
                    <p className="text-sm font-black">Payment Approved</p>
                  </div>
                </div>

                {/* Background Element - Order Summary */}
                <div className="absolute -top-10 right-10 w-[250px] bg-[var(--card-bg)]/80 backdrop-blur-md border border-[var(--border-color)] rounded-2xl p-5 shadow-lg z-10 translate-x-12 opacity-80">
                  <div className="flex items-center gap-3 mb-4 border-b border-[var(--border-color)] pb-3">
                    <ShoppingCart className="w-4 h-4 text-[var(--foreground-muted)]" />
                    <span className="text-xs font-bold text-[var(--foreground-muted)] uppercase">
                      Cart Summary
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Subtotal</span>
                      <span className="font-bold">$129.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Shipping</span>
                      <span className="font-bold text-[#2ed06e]">Free</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- E-COMMERCE DATA & ANALYTICS SECTION --- */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[var(--border-color)]">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black text-[var(--foreground)] tracking-tight mb-4">
                The Science of Selling.
              </h2>
              <p className="text-[var(--foreground-muted)] text-lg">
                We design UI/UX that eliminates friction. By analyzing user
                behavior, we optimize your sales funnel to turn casual browsers
                into repeat buyers.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Horizontal Bar Chart: Sales Funnel */}
            <div className="bg-[var(--card-bg)] rounded-[2rem] p-6 sm:p-8 shadow-sm border border-[var(--border-color)] flex flex-col h-full">
              <div className="mb-8 flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-bold text-[var(--foreground)]">
                    The Conversion Funnel
                  </h4>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    Minimizing drop-off at every stage of the buyer journey.
                  </p>
                </div>
                <BarChartIcon className="w-6 h-6 text-[var(--foreground-muted)] opacity-50 hidden sm:block" />
              </div>

              <div className="h-[250px] sm:h-[300px] w-full mt-auto relative">
                {isMounted && (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={funnelData}
                      layout="vertical"
                      margin={{ top: 0, right: 30, left: 20, bottom: 0 }}
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
                        dataKey="step"
                        type="category"
                        stroke="var(--foreground)"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        width={110}
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
                        dataKey="users"
                        name="Active Users"
                        radius={[0, 4, 4, 0]}
                        barSize={28}
                      >
                        {funnelData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                )}
              </div>
            </div>

            {/* Pie Chart: Platform Distribution */}
            <div className="bg-[var(--card-bg)] rounded-[2rem] p-6 sm:p-8 shadow-sm border border-[var(--border-color)] flex flex-col sm:flex-row items-center gap-8 h-full">
              <div className="flex-1 w-full h-[250px] relative">
                {isMounted && (
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={platformArchitecture}
                        cx="50%"
                        cy="50%"
                        innerRadius={65}
                        outerRadius={90}
                        paddingAngle={4}
                        dataKey="value"
                        stroke="none"
                      >
                        {platformArchitecture.map((entry, index) => (
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
                  <Globe className="w-8 h-8 text-[var(--primary)] mb-1" />
                  <span className="text-[10px] font-bold text-[var(--foreground)] uppercase tracking-widest">
                    Stack
                  </span>
                </div>
              </div>

              <div className="flex-1 space-y-4 w-full">
                <h4 className="text-lg font-bold text-[var(--foreground)] mb-2 border-b border-[var(--border-color)] pb-2">
                  Our Tech Stack
                </h4>
                {platformArchitecture.map((item, idx) => (
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

        {/* --- E-COMMERCE CAPABILITIES GRID --- */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[var(--border-color)]">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-[var(--foreground)] mb-4">
              Built for Scale & Security
            </h2>
            <p className="text-[var(--foreground-muted)] text-lg max-w-2xl mx-auto">
              We handle the complex backend integrations so you can focus on
              fulfilling orders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Shopify & Plus Development",
                icon: ShoppingCart,
                desc: "Custom theme design, app configuration, and B2B wholesale setups on the world's most robust commerce platform.",
              },
              {
                title: "Headless Commerce",
                icon: Smartphone,
                desc: "Decoupled architectures using Next.js to deliver instant page loads and unparalleled mobile shopping experiences.",
              },
              {
                title: "Payment & Logistics",
                icon: CreditCard,
                desc: "Seamless integration with global payment gateways (Stripe, PayPal) and real-time shipping/fulfillment APIs.",
              },
              {
                title: "Conversion Rate Optimization",
                icon: TrendingUp,
                desc: "A/B testing, one-click upsells, and optimized checkout flows designed specifically to increase your AOV.",
              },
              {
                title: "Inventory & ERP Sync",
                icon: RefreshCw,
                desc: "Automated two-way syncing between your storefront and backend systems to prevent overselling.",
              },
              {
                title: "Ironclad Security",
                icon: Lock,
                desc: "PCI-compliant setups, advanced fraud protection, and strict SSL implementations to protect customer data.",
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
          <div className="mt-16 bg-[var(--foreground)] rounded-[2rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
            {/* Overlay Gradient */}
            <div className="absolute top-0 right-0 w-[400px] h-full bg-gradient-to-l from-[var(--primary)]/20 to-transparent pointer-events-none"></div>

            <div className="max-w-2xl relative z-10 text-center md:text-left">
              <h3 className="text-2xl md:text-4xl font-black text-[var(--card-bg)] mb-4">
                Ready to launch your empire?
              </h3>
              <p className="text-[var(--card-bg)] text-lg font-medium">
                Whether you are migrating from a legacy platform or launching a
                brand new D2C brand, we have the technical firepower to get you
                there.
              </p>
            </div>
            <div className="relative z-10 w-full md:w-auto">
              <a
                href="#contact"
                className="w-full md:w-auto text-center bg-[var(--primary)] text-[var(--foreground)] px-10 py-4 rounded-xl font-bold hover:scale-105 transition-transform duration-300 block shadow-[0_0_20px_rgba(245,198,22,0.3)]"
              >
                Discuss Your Store
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

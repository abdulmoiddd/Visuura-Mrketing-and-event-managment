import React, { useState } from "react";
import HomeSplash from "@/components/essential/HomeSplash";
import SEO from "@/components/essential/Seo";
import Image from "next/image";
import Link from "next/link";
import QRCode from "react-qr-code";
import {
  Megaphone,
  Globe,
  Palette,
  CalendarDays,
  Printer,
  Camera,
  Search,
  MousePointerClick,
  ShoppingCart,
  MonitorSmartphone,
  Briefcase,
  Map as MapIcon,
  Download,
  Share2,
  Phone,
  Mail,
  MapPin,
  QrCode as QrIcon,
  Layers,
  Sparkles,
  ExternalLink,
  ChevronRight
} from "lucide-react";

export default function MobileSleekVCard() {

  const [activeTab, setActiveTab] = useState("card");
  const [copied, setCopied] = useState(false);

  const services = [
    { name: "Digital Marketing", icon: Megaphone, desc: "Scaling brands with data-driven multi-channel campaigns." },
    { name: "Website Development", icon: Globe, desc: "High-performance, secure Next.js & full-stack web architecture." },
    { name: "Graphic Design & Branding", icon: Palette, desc: "Bold visual identities, UI/UX, and packaging systems." },
    { name: "Event Management", icon: CalendarDays, desc: "End-to-end elite event production and brand activations." },
    { name: "Printing Solutions", icon: Printer, desc: "Premium tactile lookbooks, packaging, and commercial print." },
    { name: "Photography & Videography", icon: Camera, desc: "Cinematic 4K commercial spots, VFX, and visual storytelling." },
    { name: "SEO Services", icon: Search, desc: "Technical organic search domination for high-volume keywords." },
    { name: "Google Ads Management", icon: MousePointerClick, desc: "Hyper-targeted paid search and shopping campaigns." },
    { name: "E-Commerce Development", icon: ShoppingCart, desc: "Custom headless storefronts optimized for maximum AOV." },
    { name: "App Development", icon: MonitorSmartphone, desc: "Native iOS & Android applications with real-time features." },
    { name: "Corporate Branding", icon: Briefcase, desc: "Enterprise identity overhaul, positioning, and guidelines." },
    { name: "Outdoor Advertising", icon: MapIcon, desc: "Unmissable billboards, transit media, and DOOH spectaculars." },
  ];

  const vcardData = `BEGIN:VCARD\nVERSION:3.0\nFN:Visuura\nORG:Visuura\nTEL;TYPE=WORK,VOICE:+923312227697\nEMAIL;TYPE=PREF,INTERNET:visuura@gmail.com\nURL:https://www.visuura.com\nADR;TYPE=WORK:;;Suit 1-A 2nd Floor F-456 F Block Satellite Town;Rawalpindi;;;Pakistan\nEND:VCARD`;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Visuura | Official vCard",
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  const [splashComplete, setSplashComplete] = useState(false);

  if (!splashComplete) {
    return <HomeSplash onComplete={() => setSplashComplete(true)} />;
  }

  return (
    <>
      <SEO
        title="Digital Identity & Services | Visuura"
        description="Instantly save Visuura's verified digital vCard and explore our 12 core creative, web, and event solutions."
        path="/vcard"
      />

      <div className="min-h-[100dvh] bg-[#09090b] text-white selection:bg-primary selection:text-black pb-28 lg:pb-16 font-sans antialiased">
        
        {/* --- TOP BRAND HEADER --- */}
        <header className="p-4 sm:p-6 max-w-7xl mx-auto flex items-center justify-between border-b border-white/5">
          <Link
            href="/"
            className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-primary transition-colors flex items-center gap-1.5 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10"
          >
            <span>←</span> Main Website
          </Link>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_var(--primary)]" />
            <span className="text-[10px] font-mono tracking-widest text-primary uppercase">
              Secure App Pass
            </span>
          </div>
        </header>

        {/* --- MOBILE/TABLET SEGMENTED CONTROLLER --- */}
        <div className="block lg:hidden px-4 pt-4 sticky top-0 z-30 bg-[#09090b]/90 backdrop-blur-xl pb-3 border-b border-white/5">
          <div className="bg-[#18181b] p-1.5 rounded-2xl flex gap-1.5 border border-white/10 shadow-2xl">
            <button
              onClick={() => setActiveTab("card")}
              className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                activeTab === "card"
                  ? "bg-primary text-black shadow-lg"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <QrIcon className="w-4 h-4 shrink-0" /> The Card
            </button>
            <button
              onClick={() => setActiveTab("services")}
              className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                activeTab === "services"
                  ? "bg-primary text-black shadow-lg"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Layers className="w-4 h-4 shrink-0" /> Services (12)
            </button>
          </div>
        </div>

        {/* --- MAIN CONTENT SPREAD --- */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 lg:pt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          
          {/* COLUMN 1: THE VISITING CARD (Flex-col ordered specifically for Desktop vs Mobile) */}
          <div className={`col-span-1 lg:col-span-5 ${activeTab === "card" ? "block" : "hidden lg:block"} sticky top-10`}>
            <div className="bg-[#121214] rounded-[2.5rem] p-6 sm:p-8 border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.8)] relative overflow-hidden group flex flex-col">
              
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-primary/15 rounded-full blur-[80px] pointer-events-none" />

              {/* SECTION 1: Logo & Title (Always Top) */}
              <div className="order-1 space-y-6 mb-6">
                <div className="flex items-start justify-between border-b border-white/10 pb-6">
                  <div>
                    <Image
                      src="/weblogowhite.png"
                      alt="Visuura Logo"
                      width={130}
                      height={38}
                      className="h-8 w-auto object-contain filter drop-shadow"
                    />
                    <p className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase mt-2">
                      Verified Business Entity
                    </p>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10 text-primary shadow-inner">
                    <Sparkles className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                    VISUURA
                  </h1>
                  <p className="text-xs font-bold text-primary tracking-widest uppercase">
                    Marketing & Event Management
                  </p>
                </div>
              </div>

              {/* SECTION 2: QR Widget (2nd on Desktop, drops to 3rd/last on Mobile) */}
              <div className="order-3 lg:order-2 mt-6 lg:mt-0 mb-0 lg:mb-8 bg-[#09090b] border border-white/10 rounded-3xl p-5 flex flex-col items-center justify-center relative shadow-inner">
                <div className="absolute top-3 left-3 flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="absolute top-3 right-4 text-[10px] font-mono text-zinc-500 uppercase">
                  vCard.VCF
                </span>

                <div className="w-44 h-44 bg-white p-2.5 rounded-2xl shadow-2xl my-4 flex items-center justify-center transition-transform group-hover:scale-[1.02] duration-500">
                  <QRCode
                    value={vcardData}
                    size={150}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    level="M"
                    bgColor="#ffffff"
                    fgColor="#000000"
                  />
                </div>
                <p className="text-[11px] text-zinc-400 text-center max-w-[240px] font-medium leading-relaxed">
                  Aim iOS / Android camera inside this box to save Visuura directly to contacts.
                </p>
              </div>

              {/* SECTION 3: Contact Details (3rd on Desktop, snaps up to 2nd on Mobile) */}
              <div className="order-2 lg:order-3 space-y-3.5 text-xs text-zinc-300 border-t border-white/10 pt-6 lg:pt-0 lg:border-t-0">
                <a
                  href="tel:+923312227697"
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                >
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <span className="font-mono tracking-wider text-white font-bold text-sm">
                    +92 (331) 2227697
                  </span>
                </a>

                {/* --- NEW: WhatsApp Option --- */}
               <a
  href="https://wa.me/923312227697"
  target="_blank"
  rel="noreferrer"
  className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 group"
>
  <svg className="w-4 h-4 text-primary shrink-0 fill-current" viewBox="0 0 24 24">
    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.335.101.155.448.719.945 1.127.641.527 1.196.697 1.355.783.159.087.253.072.347-.029.094-.101.405-.472.515-.633.109-.16.217-.133.361-.08.144.058.915.433 1.074.52.159.087.268.13.307.202.039.072.039.419-.105.824z" />
  </svg>
  <span className="font-mono tracking-wider text-white font-bold text-sm">
    Contact on Whatsapp
  </span>
</a>

                <a
                  href="mailto:visuura@gmail.com"
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                >
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-white font-medium text-sm">visuura@gmail.com</span>
                </a>
                <a
  href="https://maps.app.goo.gl/UBc9TpEcz8KZN75SA"
  target="_blank"
  rel="noreferrer"
  className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 group"
>
  <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
  <span className="leading-relaxed text-zinc-300 font-medium text-sm group-hover:text-white transition-colors">
    Suit 1-A, 2nd Floor, F-456, F Block, Satellite Town, Rawalpindi, Pakistan.
  </span>
</a>
              </div>

              {/* SECTION 4: Desktop Action Strip */}
              <div className="order-4 pt-6 mt-4 border-t border-white/10 hidden lg:flex items-center gap-3">
                <a
                  href={`data:text/vcard;charset=utf-8,${encodeURIComponent(vcardData)}`}
                  download="Visuura_Identity.vcf"
                  className="flex-1 py-3.5 px-4 bg-primary text-black font-black text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-colors shadow-[0_0_20px_rgba(245,198,22,0.2)]"
                >
                  <Download className="w-4 h-4 shrink-0" /> Save Contact
                </a>
                <button
                  onClick={handleShare}
                  className="py-3.5 px-4 bg-white/5 hover:bg-white/10 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 border border-white/10 transition-colors shrink-0"
                >
                  <Share2 className="w-4 h-4 shrink-0" /> {copied ? "Copied!" : "Share Card"}
                </button>
              </div>

            </div>
          </div>

          {/* COLUMN 2: THE MODULAR SERVICE DRAWER */}
          <div className={`col-span-1 lg:col-span-7 ${activeTab === "services" ? "block" : "hidden lg:block"}`}>
            <div className="bg-[#121214] rounded-[2.5rem] p-6 sm:p-8 border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.8)] flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 border-b border-white/10 pb-6 mb-6">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      Enterprise Disciplines
                    </h2>
                    <p className="text-xs font-mono text-primary tracking-widest uppercase mt-2">
                      12 Core Capabilities
                    </p>
                  </div>
                  <Link
                    href="/portfolio"
                    className="group inline-flex items-center justify-center gap-2 text-sm font-black text-[#09090b] transition-all bg-primary px-6 py-3 rounded-xl border border-transparent hover:bg-white shadow-[0_0_20px_rgba(245,198,22,0.2)] hover:scale-105 active:scale-95 w-full sm:w-auto"
                  >
                    <span>View Portfolio</span> 
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:overflow-y-auto lg:max-h-[640px] lg:pr-2 custom-scrollbar">
                  {services.map((srv, i) => {
                    const IconComp = srv.icon;
                    return (
                      <Link
                        key={i}
                        href={`/Services/Services-${i}`}
                        className="relative p-5 rounded-2xl bg-[#18181b] border border-white/5 hover:border-primary/50 hover:bg-[#1f1f23] transition-all duration-300 group flex flex-col gap-4 shadow-sm overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        
                        <div className="flex items-start justify-between w-full">
                          <div className="w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-300 shadow-inner">
                            <IconComp className="w-6 h-6" />
                          </div>
                          <div className="text-zinc-500 group-hover:text-primary transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                            <ChevronRight className="w-5 h-5" />
                          </div>
                        </div>

                        <div className="flex-1 min-w-0 z-10">
                          <h3 className="text-base font-black text-white group-hover:text-primary transition-colors">
                            {srv.name}
                          </h3>
                          <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed font-medium">
                            {srv.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* --- FIXED MOBILE ACTION DOCK (4 Buttons optimized for thumb reach) --- */}
        <div className="fixed bottom-4 left-4 right-4 z-40 block lg:hidden">
          <div className="max-w-md mx-auto bg-black/85 backdrop-blur-2xl border border-white/10 p-2 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.9)] flex items-center gap-1.5">
            <a
              href={`data:text/vcard;charset=utf-8,${encodeURIComponent(vcardData)}`}
              download="Visuura_Identity.vcf"
              className="flex-1 py-3 px-2 bg-primary text-black rounded-xl font-black text-[11px] uppercase tracking-wider flex items-center justify-center gap-1 shadow-md active:scale-95 transition-transform truncate"
            >
              <Download className="w-3.5 h-3.5 shrink-0" /> <span className="truncate">Save</span>
            </a>

            {/* Dedicated WhatsApp Quick Button */}
            <a
              href="https://wa.me/923312227697"
              target="_blank"
              rel="noreferrer"
              className="py-3 px-3 bg-[#25D366] text-black rounded-xl font-black text-[11px] uppercase tracking-wider flex items-center justify-center gap-1 shadow-md active:scale-95 transition-transform shrink-0"
              title="WhatsApp Chat"
            >
              <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.335.101.155.448.719.945 1.127.641.527 1.196.697 1.355.783.159.087.253.072.347-.029.094-.101.405-.472.515-.633.109-.16.217-.133.361-.08.144.058.915.433 1.074.52.159.087.268.13.307.202.039.072.039.419-.105.824z" />
              </svg>
              <span>WA</span>
            </a>

            <a
              href="tel:+923312227697"
              className="py-3 px-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1 border border-white/10 active:scale-95 transition-transform shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-primary shrink-0" /> Call
            </a>

            <button
              onClick={handleShare}
              className="py-3 px-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1 border border-white/10 active:scale-95 transition-transform shrink-0"
            >
              <Share2 className="w-3.5 h-3.5 shrink-0" /> Share
            </button>
          </div>
        </div>

      </div>
    </>
  );
}
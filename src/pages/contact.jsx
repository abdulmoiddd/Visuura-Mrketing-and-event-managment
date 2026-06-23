import React, { useState } from "react";
import SEO from "@/components/essential/Seo";
import Image from "next/image";
import QRCode from "react-qr-code";
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/site";
// import VisitingCardPopup from "./VisitingCardPopup";
import VisitingCardPopup from "../pages/card/VisitingCardPopup";

const ContactPopup = ({}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "",
    message: "",
  });

  const [isVCardOpen, setIsVCardOpen] = useState(false);

  const servicesList = [
    "Digital Marketing",
    "Website Development",
    "Graphic Design & Branding",
    "Event Management",
    "Printing Solutions",
    "Photography & Videography",
    "SEO Services",
    "Google Ads Management",
    "E-Commerce Development",
    "App Development",
    "Corporate Branding",
    "Outdoor Advertising",
    "Other",
  ];

  // OPTIMIZED VCARD DATA: Escaped commas and streamlined for scanners
  const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:Visuura
ORG:Visuura
TEL;TYPE=WORK,VOICE:${WHATSAPP_NUMBER}
EMAIL;TYPE=PREF,INTERNET:visuura@gmail.com
URL:https://www.visuura.com
ADR;TYPE=WORK:;;Suit 1-A 2nd Floor F-456 F Block Satellite Town;Rawalpindi;;;Pakistan
END:VCARD`;

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hi Visuura! I'm ${formData.name}. Service: ${formData.service}. ${formData.message}. Mobile: ${formData.mobile}${formData.email ? `. Email: ${formData.email}` : ""}`;
    window.open(
      `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <>
      <SEO
        title="Contact Us | Visuura"
        description="Get in touch with Visuura for digital marketing, web development, branding, event management, and creative solutions."
        path="/contact"
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#161616]/60 backdrop-blur-md p-4 sm:p-6 overflow-y-auto">
        <VisitingCardPopup
          isOpen={isVCardOpen}
          onClose={() => setIsVCardOpen(false)}
        />

        <div className="relative w-full max-w-5xl bg-card rounded-2xl shadow-2xl border border-border overflow-hidden flex flex-col md:flex-row my-auto">
          {/* Close Button */}
          <button
            onClick={() => {
              window.location.href = "/";
            }}
            className="absolute top-4 right-4 z-10 p-2 bg-background/80 hover:bg-background rounded-full text-foreground hover:text-primary transition-colors shadow-sm"
            aria-label="Close popup"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* LEFT COLUMN: Contact Info & QR Code (Moved to bottom on mobile, stays left on desktop) */}
          <div className="order-2 md:order-1 w-full md:w-2/5 bg-[#161616] text-white p-8 flex flex-col justify-between relative overflow-hidden">
            <div
              className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at top left, var(--primary), transparent 70%)",
              }}
            ></div>

            <div className="relative z-10 space-y-8">
              <div>
                <Image
                  src="/weblogowhite.png"
                  alt="Company Logo"
                  width={150}
                  height={45}
                  className="w-auto h-10 object-contain"
                />
                <p className="mt-4 text-white/70 text-sm">
                  Click or scan the QR code to instantly save our contact
                  details, or reach out directly.
                </p>
              </div>

              {/* CLICKABLE DYNAMIC QR CODE - SIZED UP FOR SCANNABILITY */}
              <button
                type="button"
                onClick={() => setIsVCardOpen(true)}
                className="bg-white p-3.5 rounded-2xl inline-block shadow-[0_0_20px_rgba(245,198,22,0.15)] hover:scale-105 hover:shadow-[0_0_30px_rgba(245,198,22,0.3)] transition-all duration-300 text-left"
                aria-label="Open Digital Business Card"
              >
                <div className="w-44 h-44 bg-white flex items-center justify-center rounded-xl relative group">
                  <div className="w-full h-full p-1">
                    <QRCode
                      value={vcardData}
                      size={256}
                      style={{
                        height: "auto",
                        maxWidth: "100%",
                        width: "100%",
                      }}
                      viewBox={`0 0 256 256`}
                      level="M"
                      bgColor="#ffffff"
                      fgColor="#161616"
                    />
                  </div>

                  <div className="absolute inset-0 bg-[#161616]/80 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <span className="text-primary font-bold text-sm">
                      Click to Open
                    </span>
                  </div>
                </div>
              </button>

              {/* Clickable Contact Details */}
              <div className="space-y-4 pt-4">
                <a
                  href="mailto:visuura@gmail.com"
                  className="flex items-center gap-4 text-white/80 hover:text-primary transition-colors group"
                >
                  <div className="p-2 bg-white/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <span className="text-sm font-medium">visuura@gmail.com</span>
                </a>

                <a
                  href={`tel:${WHATSAPP_NUMBER}`}
                  className="flex items-center gap-4 text-white/80 hover:text-primary transition-colors group"
                >
                  <div className="p-2 bg-white/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <span className="text-sm font-medium">+92 (331) 2227697</span>
                </a>

                <div className="flex items-center gap-4 text-white/80 group">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Rawalpindi+Pakistan"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium hover:text-primary transition-colors"
                  >
                    Suit 1-A, 2nd Floor, F-456, F Block, Satellite Town,
                    Rawalpindi.
                  </a>
                </div>

                {/* Social Links Row */}
                <div className="flex gap-4 pt-2">
                  <a
                    href="https://www.linkedin.com/in/visuura"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-white/10 rounded-lg text-white hover:bg-primary hover:text-[#161616] transition-all"
                  >
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/visuura"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-white/10 rounded-lg text-white hover:bg-primary hover:text-[#161616] transition-all"
                  >
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Form Area (Moved to top on mobile, stays right on desktop) */}
          <div className="order-1 md:order-2 w-full md:w-3/5 p-8 md:p-10 bg-card">
            <div className="mb-8">
              <h2 className="text-3xl font-black text-foreground tracking-tight">
                Let's build together.
              </h2>
              <p className="text-muted mt-2">
                Fill out the form below and we'll get back to you shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="text-sm font-bold text-foreground"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Visuura"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="mobile"
                    className="text-sm font-bold text-foreground"
                  >
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="+92 (331) 2227697"
                    value={formData.mobile}
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-sm font-bold text-foreground"
                  >
                    Email Address{" "}
                    <span className="text-muted font-normal">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="visuura@gmail.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="service"
                    className="text-sm font-bold text-foreground"
                  >
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                    >
                      <option value="" disabled>
                        Select a service...
                      </option>
                      {servicesList.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted">
                      <svg
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-sm font-bold text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project or inquiry..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full md:w-auto px-10 py-3.5 bg-primary text-[#161616] font-black rounded-xl hover:-translate-y-1 transition-transform duration-300 shadow-[0_10px_20px_-10px_rgba(245,198,22,0.5)] flex items-center justify-center gap-2"
                >
                  Send Message
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPopup;
import Link from "next/link";
import SEO from "@/components/essential/Seo";
import Navbar from "@/components/essential/Navbar";
import Footer from "@/components/essential/Footer";
import { Layers, Globe, Mail, Briefcase } from "lucide-react";

export default function SitemapHTML() {
  const services = [
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
  ];

  return (
    <>
      <SEO
        title="HTML Sitemap | Visuura"
        description="Navigate through Visuura's creative, digital, and event solutions."
        path="/sitemap"
      />
      <Navbar />

      <main className="min-h-screen bg-background text-foreground pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-5xl font-black mb-10 text-primary">
          Site Directory
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Main Pages */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 border-b border-border pb-2">
              <Globe className="w-6 h-6 text-primary" /> Core Pages
            </h2>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-lg hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-lg hover:text-primary transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-lg hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/vcard"
                  className="text-lg hover:text-primary transition-colors"
                >
                  Official vCard
                </Link>
              </li>
            </ul>
          </section>

          {/* Services */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 border-b border-border pb-2">
              <Layers className="w-6 h-6 text-primary" /> Our Services
            </h2>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={`/Services/Services-${index}`}
                    className="text-muted hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

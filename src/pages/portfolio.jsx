

import SEO from "@/components/essential/Seo";
import Navbar from "@/components/essential/Navbar";
import Footer from "@/components/essential/Footer";
import PortfolioHero from "@/components/Portfolio/portfoliohero";
import PortfolioWebsites from "@/components/Portfolio/websection";
import PortfolioSocials from "@/components/Portfolio/PortfolioSocials";
import PortfolioCTA from "@/components/Portfolio/PortfolioCTA";
import PortfolioBanners from "@/components/Portfolio/PortfolioBanners";
import PortfolioBrochures from "@/components/Portfolio/PortfolioBrochures";
import PortfolioMarketing from "@/components/Portfolio/PortfolioMarketingResults";

export default function Home() {
  return (
    <>
      <SEO
        title="Visuura | Creative, Digital & Event Solutions"
        description="VISUURA is a full-service creative agency offering Marketing, Event Management, Website Development, Graphic Design, Branding, Printing, and Media Production solutions."
        path="/"
      />

      {/* Navigation Bar */}
      <Navbar />

      {/* Changed layout from flex-center to a standard top-to-bottom column flow */}
      <main className="min-h-screen bg-background text-foreground flex flex-col w-full overflow-hidden">
       <PortfolioHero />
       <PortfolioWebsites />
       <PortfolioSocials />
       <PortfolioCTA />
       <PortfolioMarketing />
       <PortfolioBanners />
       <PortfolioBrochures />
      </main>

      <Footer />
    </>
  );
}

import { useState } from "react";
import SEO from "@/components/essential/Seo";
import HomeSplash from "@/components/essential/HomeSplash";
import Navbar from "@/components/essential/Navbar";
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/Aboutus";
import WhyUs from "@/components/Home/whyus";
import Team from "@/components/Home/Team";
import Footer from "@/components/essential/Footer";
import NewsletterCTA from "@/components/Home/NewsletterCTA";
import TestimonialsMarquee from "@/components/Home/Testimonials";
import CTAhome from "@/components/Home/CTAhome";

export default function Home() {
  const [splashComplete, setSplashComplete] = useState(false);

  return (
    <>
      {/* Always render SEO so crawlers get meta tags during SSR (before splash completes). */}
      <SEO
        title="Visuura | Creative, Digital & Event Solutions"
        description="VISUURA is a full-service creative agency offering Marketing, Event Management, Website Development, Graphic Design, Branding, Printing, and Media Production solutions."
        path="/"
      />

      {!splashComplete ? (
        <HomeSplash onComplete={() => setSplashComplete(true)} />
      ) : (
        <>
          <Navbar />

          <main className="min-h-screen bg-background text-foreground flex flex-col w-full overflow-hidden">
            <Hero />
            <About />
            <NewsletterCTA />
            {/* <Team /> */}
            <WhyUs />
            <CTAhome />

            <TestimonialsMarquee />
          </main>

          <Footer />
        </>
      )}
    </>
  );
}

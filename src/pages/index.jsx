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

export default function Home() {
  const [splashComplete, setSplashComplete] = useState(false);

  if (!splashComplete) {
    return <HomeSplash onComplete={() => setSplashComplete(true)} />;
  }

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
        <Hero />
        <About />
        <NewsletterCTA />
        <Team />

        <WhyUs />
        <TestimonialsMarquee />
      </main>

      <Footer />
    </>
  );
}

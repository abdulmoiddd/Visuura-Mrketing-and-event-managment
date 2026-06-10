import Head from "next/head";
import Navbar from "@/components/essential/Navbar";
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/Aboutus";
import WhyUs from "@/components/Home/whyus";
import Team from "@/components/Home/Team";
import Footer from "@/components/essential/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Visuura | Creative, Digital & Event Solutions</title>
        <meta
          name="description"
          content="VISUURA is a full-service creative agency offering Marketing, Event Management, Website Development, Graphic Design, Branding, Printing, and Media Production solutions."
        />
      </Head>

      {/* Navigation Bar */}
      <Navbar />

      {/* Changed layout from flex-center to a standard top-to-bottom column flow */}
      <main className="min-h-screen bg-background text-foreground flex flex-col w-full overflow-hidden">
        <Hero />
        <About />
        <WhyUs />
        <Team />
      </main>

      <Footer />
    </>
  );
}

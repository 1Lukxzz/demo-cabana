import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CabinsSection from "@/components/CabinsSection";
import PriceCalculator from "@/components/PriceCalculator";
import AboutSection from "@/components/AboutSection";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-[#F0F0F0] font-sans antialiased overflow-x-hidden selection:bg-[#F5A623] selection:text-black">
      <Navbar />
      <Hero />
      <CabinsSection />
      <PriceCalculator />
      <AboutSection />
      <Gallery />
      <Footer />
    </main>
  );
}

"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CabinsSection from "@/components/CabinsSection";
import PriceCalculator from "@/components/PriceCalculator";
import AvailabilityCalendar from "@/components/AvailabilityCalendar";
import AboutSection from "@/components/AboutSection";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  const [quoteState, setQuoteState] = useState<{
    checkIn: string;
    checkOut: string;
    cabinId: string;
  }>({
    checkIn: "2026-08-15",
    checkOut: "2026-08-18",
    cabinId: "vista-volcan",
  });

  const handleCalendarDateSelect = (checkIn: string, checkOut: string, cabinId: string) => {
    setQuoteState({
      checkIn,
      checkOut,
      cabinId,
    });
  };

  return (
    <main className="min-h-screen bg-[#0F1B14] text-[#FFFFFF] font-sans antialiased overflow-x-hidden selection:bg-[#F5A623] selection:text-black">
      {/* 1. HEADER (sticky, fondo verde oscuro #0F1B14) */}
      <Navbar />

      {/* 2. HERO (2 columnas: ~48%/52%, 2 botones radius 8px, 3 mini-features) */}
      <Hero />

      {/* 3. NUESTRAS CABAÑAS (3 tarjetas: 2 foto + 1 sólida acento #F5A623, radius 12px) */}
      <CabinsSection />

      {/* 4. COTIZADOR DE ARRIENDO (Cálculo automático + WhatsApp) */}
      <PriceCalculator
        initialCheckIn={quoteState.checkIn}
        initialCheckOut={quoteState.checkOut}
        initialCabinId={quoteState.cabinId}
      />

      {/* 5. CALENDARIO DE DISPONIBILIDAD (Días disponibles en acento vs ocupados) */}
      <AvailabilityCalendar
        selectedCabinId={quoteState.cabinId}
        onSelectDates={handleCalendarDateSelect}
      />

      {/* 6. SOBRE NOSOTROS / LA EXPERIENCIA (2 columnas: texto izq, foto der) */}
      <AboutSection />

      {/* 7. SECCIÓN GALERÍA (3 imágenes mosaico con border-radius 16px) */}
      <Gallery />

      {/* 8. FOOTER (fondo #0F1B14, 4 columnas de links, newsletter y copyright) */}
      <Footer />

      {/* BOTÓN FLOTANTE DE WHATSAPP */}
      <WhatsAppButton />
    </main>
  );
}



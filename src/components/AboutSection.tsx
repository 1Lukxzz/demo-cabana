import Image from "next/image";
import { Trees, Compass, Heart, ArrowRight } from "lucide-react";
import { BUSINESS_INFO } from "@/data/cabinsData";

export default function AboutSection() {
  return (
    <section id="nosotros" className="min-h-[calc(100vh-80px)] py-12 lg:py-16 bg-[#0F1B14] flex flex-col justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Side: Text Content */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Title H2 Fijo: 32px desktop, 24px mobile */}
            <h2 className="font-heading text-[24px] lg:text-[32px] font-bold text-white leading-tight">
              Un refugio exclusivo en la profundidad del bosque
            </h2>

            {/* Paragraph Description */}
            <p className="text-[#A8B0AB] text-[16px] leading-relaxed font-normal">
              En <strong className="text-white font-semibold">{BUSINESS_INFO.name}</strong> creamos un entorno donde el sonido del viento sobre las copas de los árboles y el calor de la leña definen el ritmo de tu día.
            </p>

            <p className="text-[#A8B0AB] text-[16px] leading-relaxed font-normal">
              Ubicados a minutos del centro de Pucón pero con aislamiento natural absoluto, cada una de nuestras cabañas cuenta con tinaja privada de agua caliente y terrazas orientadas al paisaje andino.
            </p>


            {/* Feature Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F5A623]/15 border border-[#F5A623]/30 flex items-center justify-center text-[#F5A623]">
                  <Compass className="w-4 h-4 stroke-[2.5]" />
                </div>
                <span className="text-sm font-semibold text-white">Privacidad total</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F5A623]/15 border border-[#F5A623]/30 flex items-center justify-center text-[#F5A623]">
                  <Heart className="w-4 h-4 stroke-[2.5]" />
                </div>
                <span className="text-sm font-semibold text-white">Atención personalizada</span>
              </div>
            </div>

            {/* Secondary Outline Button radius 8px (rounded-lg) */}
            <div className="pt-4">
              <a
                href="#galeria"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-[#16241C] text-white font-heading font-semibold text-base px-6 py-3.5 rounded-lg border border-[#2A3A30] hover:border-[#A8B0AB]/40 transition-all"
              >
                Explorar galería
                <ArrowRight className="w-4 h-4 text-[#F5A623]" />
              </a>
            </div>

          </div>

          {/* Right Side: Image with rounded corners 16px (rounded-[16px]) */}
          <div className="lg:col-span-6">
            <div className="relative h-[450px] sm:h-[500px] w-full rounded-[16px] overflow-hidden border border-[#2A3A30] shadow-2xl group">
              {/* REEMPLAZAR CON FOTO REAL DEL CLIENTE: public/images/about-forest.jpg */}
              <Image
                src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=1200&auto=format&fit=crop"
                alt="Bosque nativo y tinaja caliente en Pucón"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1B14]/80 via-transparent to-transparent" />

              {/* Floating Badge (radius 12px / rounded-[12px]) */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 bg-[#16241C] border border-[#2A3A30] rounded-[12px] flex items-center gap-4 shadow-xl">
                <div className="relative h-10 w-44 sm:w-48 shrink-0">
                  <Image
                    src="/images/logo-full.png"
                    alt="Logo Refugio del Bosque"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <div className="border-l border-[#2A3A30] pl-4">
                  <h4 className="font-heading font-bold text-white text-xs sm:text-sm">
                    Sustentabilidad & Confort
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#A8B0AB]">
                    Construcción responsable en maderas nativas locales.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}



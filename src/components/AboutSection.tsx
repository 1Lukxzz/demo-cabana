import Image from "next/image";
import { Trees, Compass, Heart, ArrowRight } from "lucide-react";
import { BUSINESS_INFO } from "@/data/cabinsData";

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-[#0D0D0D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Side Image */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative h-[450px] sm:h-[520px] w-full rounded-[32px] overflow-hidden border border-white/10 shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=1200&auto=format&fit=crop"
                alt="Bosque nativo y tinaja caliente en Pucón"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-[#1A1A1A]/90 backdrop-blur-md rounded-2xl border border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#F5A623] text-black flex items-center justify-center shrink-0">
                  <Trees className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-base">
                    Sustentabilidad & Confort
                  </h4>
                  <p className="text-xs text-[#A0A0A0]">
                    Construcción responsable en maderas nativas locales.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Text Content */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            
            {/* Small Orange Label */}
            <span className="text-[#F5A623] text-xs font-bold uppercase tracking-widest bg-[#F5A623]/10 border border-[#F5A623]/20 px-4 py-1.5 rounded-full inline-block">
              Nuestra Historia
            </span>

            {/* Title */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Un refugio creado para reconectar con lo esencial
            </h2>

            {/* Paragraph Description */}
            <p className="text-[#A0A0A0] text-base sm:text-lg leading-relaxed">
              En <strong className="text-white font-medium">{BUSINESS_INFO.name}</strong> nacimos con la convicción de crear un espacio donde el tiempo se detiene. Ubicados en los bosques nativos de Pucón, combinamos la calidez de la madera del sur con comodidades modernas de primer nivel.
            </p>

            <p className="text-[#A0A0A0] text-base leading-relaxed">
              Desde las tinajas de agua caliente preparadas a fuego suave de leña hasta la tranquilidad de nuestras terrazas, cada detalle ha sido pensado para brindarte un descanso reparador junto a tus seres queridos.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/30 flex items-center justify-center text-[#F5A623]">
                  <Compass className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-white">Fácil acceso</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/30 flex items-center justify-center text-[#F5A623]">
                  <Heart className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-white">Atención familiar</span>
              </div>
            </div>

            {/* Secondary Outline Button */}
            <div className="pt-4">
              <a
                href="#galeria"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white font-heading font-semibold text-base px-8 py-3.5 rounded-full border border-white/20 hover:border-white/40 transition-all hover:scale-[1.02]"
              >
                Explorar instalaciones
                <ArrowRight className="w-4 h-4 text-[#F5A623]" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

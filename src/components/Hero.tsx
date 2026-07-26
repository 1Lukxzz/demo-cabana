import Image from "next/image";
import { CalendarCheck, Eye, Smile, ShieldCheck, Flame, Star } from "lucide-react";
import { BUSINESS_INFO } from "@/data/cabinsData";

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F5A623]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#F5A623]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 bg-[#1A1A1A] border border-[#F5A623]/30 px-4 py-1.5 rounded-full shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#F5A623] animate-pulse" />
              <span className="text-xs font-semibold text-[#F5A623] tracking-wide uppercase">
                Alojamiento Premium en {BUSINESS_INFO.location.split(",")[0]}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight">
              Escápate a tu cabaña <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5A623] via-[#FFC04D] to-[#F5A623]">
                en el bosque nativo
              </span>
            </h1>

            {/* Subhead text */}
            <p className="text-[#A0A0A0] text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              Disfruta de la tranquilidad del sur de Chile en nuestras exclusivas cabañas equipadas con tinaja caliente a leña, vistas al volcán y privacidad absoluta.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#calculadora"
                className="inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#E09216] text-black font-heading font-bold text-base px-8 py-4 rounded-full transition-all shadow-xl shadow-[#F5A623]/25 hover:scale-[1.03] active:scale-[0.98]"
              >
                <CalendarCheck className="w-5 h-5 stroke-[2.5]" />
                Reservar ahora
              </a>

              <a
                href="#cabanas"
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white font-heading font-semibold text-base px-8 py-4 rounded-full border border-white/20 hover:border-white/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Eye className="w-5 h-5" />
                Ver cabañas
              </a>
            </div>

            {/* Badges / Trust indicators */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 sm:gap-10">
              
              {/* Badge 1 */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#F5A623] flex items-center justify-center text-black shrink-0 shadow-md shadow-[#F5A623]/20">
                  <Smile className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <span className="font-heading font-bold text-white text-base block leading-tight">
                    +500 Huéspedes
                  </span>
                  <span className="text-xs text-[#A0A0A0]">Felices este año</span>
                </div>
              </div>

              {/* Badge 2 */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#F5A623] flex items-center justify-center text-black shrink-0 shadow-md shadow-[#F5A623]/20">
                  <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <span className="font-heading font-bold text-white text-base block leading-tight">
                    Reserva 100% Segura
                  </span>
                  <span className="text-xs text-[#A0A0A0]">Confirmación inmediata</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Featured Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Container with rounded-3xl */}
              <div className="relative h-[440px] sm:h-[520px] w-full rounded-[32px] overflow-hidden border border-white/15 shadow-2xl shadow-[#F5A623]/10 group">
                <Image
                  src="https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=1200&auto=format&fit=crop"
                  alt="Cabaña Refugio del Bosque en Pucón"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                
                {/* Image Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Floating Rating Pill */}
                <div className="absolute top-6 right-6 bg-[#1A1A1A]/90 backdrop-blur-md border border-white/15 px-4 py-2 rounded-full flex items-center gap-2 shadow-xl">
                  <Star className="w-4 h-4 fill-[#F5A623] text-[#F5A623]" />
                  <span className="font-heading font-bold text-white text-sm">4.9 / 5.0</span>
                  <span className="text-xs text-[#A0A0A0]">(120+ opiniones)</span>
                </div>

                {/* Bottom Image Overlay Tag */}
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#1A1A1A]/85 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#F5A623] font-semibold uppercase tracking-wider block">
                      Incluido en tu estadía
                    </span>
                    <p className="font-heading font-bold text-white text-base">
                      Tinaja Privada de Agua Caliente
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#F5A623]/20 border border-[#F5A623]/40 flex items-center justify-center text-[#F5A623]">
                    <Flame className="w-5 h-5" />
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

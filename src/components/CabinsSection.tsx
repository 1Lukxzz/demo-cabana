import Image from "next/image";
import { CABINS_DATA } from "@/data/cabinsData";
import { Users, Bed, Bath, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export default function CabinsSection() {
  const photoCabins = CABINS_DATA.slice(0, 2);

  return (
    <section id="cabanas" className="py-20 md:py-28 bg-[#0D0D0D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[#F5A623] text-xs font-bold uppercase tracking-widest bg-[#F5A623]/10 border border-[#F5A623]/20 px-4 py-1.5 rounded-full inline-block">
            Nuestros Alojamientos
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Descubre nuestras cabañas exclusivas
          </h2>
          <p className="text-[#A0A0A0] text-base sm:text-lg">
            Cada cabaña está diseñada para ofrecer privacidad, calidez en madera nativa y una experiencia inolvidable frente a la naturaleza.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Photo Cards (Card 1 & Card 2) */}
          {photoCabins.map((cabin) => (
            <div
              key={cabin.id}
              className="relative h-[480px] rounded-[32px] overflow-hidden border border-white/10 group shadow-xl hover:border-[#F5A623]/40 transition-all duration-300 flex flex-col justify-end p-7"
            >
              {/* Background Image */}
              <Image
                src={cabin.image}
                alt={cabin.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

              {/* Featured Badge if applicable */}
              {cabin.featured && (
                <div className="absolute top-6 left-6 bg-[#F5A623] text-black font-heading font-bold text-xs px-3.5 py-1.5 rounded-full shadow-lg">
                  ★ Más Solicitada
                </div>
              )}

              {/* Card Bottom Content */}
              <div className="relative z-10 space-y-3">
                
                {/* Specs Pill */}
                <div className="flex items-center gap-4 text-xs text-[#A0A0A0] bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 w-fit">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#F5A623]" />
                    Hasta {cabin.capacity} pers.
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Bed className="w-3.5 h-3.5 text-[#F5A623]" />
                    {cabin.bedrooms} dorm.
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Bath className="w-3.5 h-3.5 text-[#F5A623]" />
                    {cabin.bathrooms} baño
                  </span>
                </div>

                {/* Cabin Title & Tagline */}
                <div>
                  <h3 className="font-heading text-2xl font-bold text-white group-hover:text-[#F5A623] transition-colors">
                    {cabin.name}
                  </h3>
                  <p className="text-xs text-[#B0B0B0] line-clamp-1 mt-0.5">
                    {cabin.tagline}
                  </p>
                </div>

                {/* Price & Action */}
                <div className="pt-3 border-t border-white/15 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#A0A0A0] block">Desde</span>
                    <span className="font-heading text-xl font-bold text-[#F5A623]">
                      ${cabin.pricePerNight.toLocaleString("es-CL")}
                    </span>
                    <span className="text-xs text-[#A0A0A0]"> / noche</span>
                  </div>

                  <a
                    href="#calculadora"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#F5A623] text-white hover:text-black flex items-center justify-center transition-all group/btn"
                    aria-label={`Reservar ${cabin.name}`}
                  >
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>

              </div>
            </div>
          ))}

          {/* Card 3: Solid Orange Featured Highlight Card */}
          <div className="relative h-[480px] rounded-[32px] bg-[#F5A623] p-8 text-black flex flex-col justify-between shadow-2xl shadow-[#F5A623]/20 hover:scale-[1.02] transition-transform duration-300">
            
            {/* Top Icon & Tag */}
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-black/10 flex items-center justify-center text-black">
                <Sparkles className="w-7 h-7 stroke-[2.5]" />
              </div>

              <span className="inline-block text-xs font-bold uppercase tracking-wider bg-black/10 px-3.5 py-1 rounded-full">
                Beneficio Exclusivo Directo
              </span>

              <h3 className="font-heading text-3xl font-bold leading-tight">
                Tinaja Caliente & Desayuno Gratis
              </h3>

              <p className="text-sm font-medium text-black/80 leading-relaxed">
                Al realizar tu reserva directamente desde nuestra calculadora online, obtienes una sesión de tinaja a leña sin costo adicional y cesta de desayuno campestre.
              </p>
            </div>

            {/* Checklist */}
            <div className="space-y-2 py-4 border-y border-black/15 text-sm font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                <span>Cancelación flexible hasta 7 días antes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                <span>Sin comisiones de intermediarios</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                <span>Atención personalizada por WhatsApp</span>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <a
                href="#calculadora"
                className="w-full inline-flex items-center justify-center gap-2 bg-black hover:bg-zinc-900 text-white font-heading font-bold text-base px-6 py-3.5 rounded-full transition-all shadow-lg hover:shadow-xl"
              >
                Calcular mi estadía
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

        {/* Carousel Dots Indicator for Mobile */}
        <div className="flex items-center justify-center gap-2 mt-10 md:hidden">
          <span className="w-8 h-2.5 rounded-full bg-[#F5A623]" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
        </div>

      </div>
    </section>
  );
}

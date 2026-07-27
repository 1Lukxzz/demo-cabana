import Image from "next/image";
import { CABINS_DATA } from "@/data/cabinsData";
import { Users, Bed, Bath, Coffee, ArrowRight, CheckCircle2 } from "lucide-react";

export default function CabinsSection() {
  const photoCabins = CABINS_DATA.slice(0, 2);

  return (
    <section id="cabanas" className="min-h-[calc(100vh-80px)] py-8 lg:py-12 bg-[#13221A] flex flex-col justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-1.5 mb-6 lg:mb-8">
          {/* Label simple */}
          <span className="text-[#F5A623] text-[12px] font-medium uppercase tracking-wider block">
            NUESTRAS CABAÑAS
          </span>
          {/* H2 compacto: 26px desktop, 22px mobile */}
          <h2 className="font-heading text-[22px] lg:text-[26px] font-bold text-white tracking-tight">
            Descubre nuestros refugios exclusivos en Pucón
          </h2>
          <p className="text-[#A8B0AB] text-[14px] font-normal max-w-xl mx-auto">
            Cada cabaña ofrece máxima privacidad, madera nativa y tinaja caliente frente a la naturaleza.
          </p>
        </div>

        {/* 3-Card Grid (altura compacta: 380px / 400px) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Photo Cards (Card 1 & Card 2) */}
          {photoCabins.map((cabin) => (
            <div
              key={cabin.id}
              className="relative h-[380px] lg:h-[400px] rounded-[12px] overflow-hidden border border-[#2A3A30] group shadow-xl hover:border-[#F5A623]/50 transition-all duration-300 flex flex-col justify-end p-4 sm:p-5"
            >
              {/* Background Image */}
              <Image
                src={cabin.image}
                alt={cabin.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1B14]/95 via-[#0F1B14]/40 to-transparent" />

              {/* Badge pequeño superpuesto */}
              {cabin.featured && (
                <div className="absolute top-4 left-4 bg-[#F5A623] text-[#0F1B14] font-heading font-semibold text-[11px] px-2.5 py-0.5 rounded-full shadow-md">
                  ★ Más Solicitada
                </div>
              )}

              {/* Card Bottom Content */}
              <div className="relative z-10 space-y-2">
                
                {/* Specs Pill */}
                <div className="flex items-center gap-2 text-[11px] text-[#A8B0AB] bg-[#16241C]/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#2A3A30] w-fit font-normal">
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3 text-[#F5A623]" />
                    Hasta {cabin.capacity} pers.
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Bed className="w-3 h-3 text-[#F5A623]" />
                    {cabin.bedrooms} dorm.
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Bath className="w-3 h-3 text-[#F5A623]" />
                    {cabin.bathrooms} baño
                  </span>
                </div>

                {/* Cabin Title & Tagline */}
                <div>
                  <h3 className="font-heading text-lg lg:text-xl font-bold text-white group-hover:text-[#F5A623] transition-colors leading-snug">
                    {cabin.name}
                  </h3>
                  <p className="text-[11px] text-[#A8B0AB] line-clamp-1 mt-0.5 font-normal">
                    {cabin.tagline}
                  </p>
                </div>

                {/* Price & Action */}
                <div className="pt-2.5 border-t border-[#2A3A30] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#A8B0AB] block font-normal leading-tight">Desde</span>
                    <span className="font-heading text-lg font-bold text-[#F5A623]">
                      ${cabin.pricePerNight.toLocaleString("es-CL")}
                    </span>
                    <span className="text-[11px] text-[#A8B0AB] font-normal"> / noche</span>
                  </div>

                  <a
                    href="#cotizador"
                    className="w-8 h-8 rounded-lg bg-[#16241C] hover:bg-[#F5A623] text-white hover:text-[#0F1B14] border border-[#2A3A30] hover:border-[#F5A623] flex items-center justify-center transition-all group/btn"
                    aria-label={`Cotizar ${cabin.name}`}
                  >
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>

              </div>
            </div>
          ))}

          {/* Card 3: Fondo sólido color acento (#F5A623), compacto */}
          <div className="relative h-[380px] lg:h-[400px] rounded-[12px] bg-[#F5A623] p-5 sm:p-6 text-[#0F1B14] flex flex-col justify-between shadow-xl hover:scale-[1.01] transition-transform duration-300">
            
            {/* Top Icon & Tag */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-full bg-[#0F1B14]/15 flex items-center justify-center text-[#0F1B14]">
                  <Coffee className="w-4 h-4 stroke-[2.5]" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider bg-[#0F1B14]/10 px-2.5 py-0.5 rounded-full">
                  EXPERIENCIA PREMIUM
                </span>
              </div>

              <h3 className="font-heading text-xl lg:text-2xl font-bold leading-tight">
                Tinaja & Desayuno Gratis
              </h3>

              <p className="text-[12px] font-medium text-[#0F1B14]/85 leading-relaxed">
                Al reservar directo en nuestra web obtienes sesión de tinaja a leña sin costo adicional y cesta de desayuno campestre.
              </p>
            </div>

            {/* Checklist */}
            <div className="space-y-1.5 py-2 border-y border-[#0F1B14]/15 text-[11px] font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0F1B14] shrink-0" />
                <span>Cancelación flexible hasta 7 días antes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0F1B14] shrink-0" />
                <span>Sin comisiones de intermediarios</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0F1B14] shrink-0" />
                <span>Atención personalizada por WhatsApp</span>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <a
                href="#cotizador"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0F1B14] hover:bg-[#16241C] text-white font-heading font-semibold text-xs px-4 py-2.5 rounded-lg transition-all"
              >
                Calcular mi estadía
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

        {/* Carousel Dots Indicator for Mobile */}
        <div className="flex items-center justify-center gap-2 mt-6 md:hidden">
          <span className="w-8 h-1.5 rounded-full bg-[#F5A623]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#2A3A30]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#2A3A30]" />
        </div>

      </div>
    </section>

  );
}




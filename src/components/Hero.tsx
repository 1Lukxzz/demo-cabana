import Image from "next/image";
import { CalendarCheck, Eye, Flame, Wifi, TreePine } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative w-full h-[500px] md:h-[550px] lg:h-[650px] flex items-center bg-[#0F1B14] overflow-hidden">
      
      {/* 1. IMAGEN PANORÁMICA FULL-BLEED (1920x900px, 16:7.5, cabaña a la derecha, object-cover) */}
      <Image
        src="/images/hero-panoramic.png"
        alt="Cabaña Refugio del Bosque en Pucón"
        fill
        className="object-cover object-right sm:object-center"
        priority
        unoptimized
      />

      {/* 2. OVERLAY OSCURO GRADIENTE (#0F1B14 ~80% opacidad en lado izquierdo a transparente en derecha) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F1B14] via-[#0F1B14]/85 sm:via-[#0F1B14]/75 to-[#0F1B14]/15 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[#0F1B14]/30 z-10 pointer-events-none" />

      {/* 3. CONTENIDO DE TEXTO SUPERPUESTO (Alineado a la izquierda, fijos por breakpoint) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center py-6">
        <div className="max-w-2xl space-y-4 sm:space-y-5">
          
          {/* Badge en Hero (peso 500 medium, sutil) */}
          <div className="inline-flex items-center gap-2 bg-[#16241C]/90 backdrop-blur-md border border-[#2A3A30] px-3.5 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#F5A623]" />
            <span className="text-[11px] font-medium text-[#F5A623] tracking-wide uppercase">
              ALOJAMIENTO PREMIUM EN PUCÓN
            </span>
          </div>

          {/* Título H1 (Fijo: 32px mobile, 40px tablet, 48px desktop, peso 800) */}
          <h1 className="font-heading text-[32px] md:text-[40px] lg:text-[48px] font-extrabold text-white leading-tight tracking-tight">
            Escápate a tu cabaña <br />
            <span className="text-[#F5A623]">
              en el bosque nativo
            </span>
          </h1>

          {/* Párrafo descriptivo (Fijo: 16px mobile/tablet, 18px desktop) */}
          <p className="text-[#A8B0AB] text-[16px] lg:text-[18px] leading-relaxed max-w-xl font-normal">
            Disfruta de la tranquilidad del sur de Chile en nuestras exclusivas cabañas equipadas con tinaja caliente a leña, vistas al volcán y privacidad absoluta.
          </p>

          {/* Fila de 2 botones (peso 600 semibold, radius 8px) */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
            <a
              href="#cotizador"
              className="inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#E09216] text-[#0F1B14] font-heading font-semibold text-[15px] sm:text-[16px] px-5 sm:px-6 py-3 rounded-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <CalendarCheck className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
              Reservar ahora
            </a>

            <a
              href="#calendario"
              className="inline-flex items-center justify-center gap-2 bg-[#16241C]/80 backdrop-blur-md hover:bg-[#16241C] text-white font-heading font-semibold text-[15px] sm:text-[16px] px-5 sm:px-6 py-3 rounded-lg border border-[#2A3A30] hover:border-[#A8B0AB]/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Eye className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
              Ver disponibilidad
            </a>
          </div>


          {/* Divisor delgado #2A3A30 */}
          <div className="border-t border-[#2A3A30]/80 pt-4 sm:pt-6" />

          {/* Fila de 3 mini-features (Fondos variados para romper simetría perfecta + pesos 600 semibold) */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-lg">
            
            {/* Feature 1: Fondo acento suave + borde acento */}
            <div className="space-y-1">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F5A623]/15 border border-[#F5A623]/30 flex items-center justify-center text-[#F5A623]">
                <TreePine className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
              </div>
              <span className="font-heading font-semibold text-white text-[11px] sm:text-xs block leading-tight">
                100% Naturaleza
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#A8B0AB] block font-normal">
                Bosque nativo
              </span>
            </div>

            {/* Feature 2: Solo borde sin relleno + texto gris neutro */}
            <div className="space-y-1">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-transparent border border-[#2A3A30] flex items-center justify-center text-[#A8B0AB]">
                <Wifi className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2]" />
              </div>
              <span className="font-heading font-semibold text-white text-[11px] sm:text-xs block leading-tight">
                Wifi Starlink
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#A8B0AB] block font-normal">
                Alta velocidad
              </span>
            </div>

            {/* Feature 3: Fondo oscuro de tarjeta + borde acento sutil */}
            <div className="space-y-1">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#16241C] border border-[#2A3A30] flex items-center justify-center text-[#F5A623]">
                <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
              </div>
              <span className="font-heading font-semibold text-white text-[11px] sm:text-xs block leading-tight">
                Tinaja Caliente
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#A8B0AB] block font-normal">
                A fuego de leña
              </span>
            </div>

          </div>
        </div>
      </div>



      {/* 4. TARJETAS FLOTANTES SOBRE EL HERO COMPLETO */}
      
      {/* Tarjeta flotante superior derecha */}
      <div className="hidden lg:flex absolute top-24 right-8 lg:right-16 z-20 bg-[#16241C]/90 backdrop-blur-md border border-[#2A3A30] px-4 py-2 rounded-full items-center gap-2 shadow-2xl">
        <span className="w-2 h-2 rounded-full bg-[#F5A623]" />
        <span className="font-heading font-semibold text-white text-xs">Reserva Directa</span>
        <span className="text-[11px] text-[#A8B0AB]">(Sin comisión)</span>
      </div>

      {/* Tarjeta rectangular flotante inferior derecha */}
      <div className="hidden sm:flex absolute bottom-10 right-6 md:right-16 z-20 p-4 sm:p-5 bg-[#16241C]/95 backdrop-blur-md border border-[#2A3A30] rounded-[12px] items-center justify-between shadow-2xl max-w-xs md:max-w-sm">
        <div className="pr-4">
          <span className="text-[10px] text-[#F5A623] font-semibold uppercase tracking-wider block">
            INCLUIDO EN TU ESTADÍA
          </span>
          <p className="font-heading font-bold text-white text-xs sm:text-sm mt-0.5">
            Tinaja Privada de Agua Caliente
          </p>
        </div>
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F5A623]/20 border border-[#F5A623]/40 flex items-center justify-center text-[#F5A623] shrink-0">
          <Flame className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
        </div>
      </div>

    </section>
  );
}





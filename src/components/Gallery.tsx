import Image from "next/image";
import { Quote, Sparkles } from "lucide-react";

export default function Gallery() {
  const galleryItems = [
    {
      id: "gal-1",
      image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1200&auto=format&fit=crop",
      title: "Interiores Cálidos & Madera Nativa",
      caption: "Espacios luminosos y confortables",
    },
    {
      id: "gal-2",
      image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=1200&auto=format&fit=crop",
      isQuoteOverlay: true,
      quote: "Desconéctate de la rutina urbana y despierta rodeado de aire puro y el susurro del bosque nativo.",
      author: "Experiencia Refugio del Bosque",
    },
    {
      id: "gal-3",
      image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=1200&auto=format&fit=crop",
      title: "Tinajas al Aire Libre",
      caption: "Baños de agua caliente bajo las estrellas",
    },
  ];

  return (
    <section id="galeria" className="py-20 md:py-28 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[#F5A623] text-xs font-bold uppercase tracking-widest bg-[#F5A623]/10 border border-[#F5A623]/20 px-4 py-1.5 rounded-full inline-block">
            Galería de Fotos
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Momentos y rincones de nuestras cabañas
          </h2>
          <p className="text-[#A0A0A0] text-base sm:text-lg">
            Una pincelada de la atmósfera relajante que te espera en Pucón.
          </p>
        </div>

        {/* 3 Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryItems.map((item) => {
            if (item.isQuoteOverlay) {
              return (
                <div
                  key={item.id}
                  className="relative h-[420px] rounded-[32px] overflow-hidden border border-[#F5A623]/30 shadow-2xl group flex flex-col justify-between p-8"
                >
                  <Image
                    src={item.image}
                    alt="Entorno natural"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Heavy dark overlay */}
                  <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />

                  {/* Top Quote Icon */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#F5A623] text-black flex items-center justify-center shadow-lg">
                    <Quote className="w-6 h-6 stroke-[2.5]" />
                  </div>

                  {/* Quote Body */}
                  <div className="relative z-10 space-y-4 my-auto">
                    <p className="font-heading text-2xl font-bold text-[#F5A623] leading-snug">
                      “{item.quote}”
                    </p>
                    <span className="text-xs text-white/80 font-medium tracking-wider uppercase flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#F5A623]" />
                      {item.author}
                    </span>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={item.id}
                className="relative h-[420px] rounded-[32px] overflow-hidden border border-white/10 shadow-xl group flex flex-col justify-end p-7"
              >
                <Image
                  src={item.image}
                  alt={item.title || "Galería cabaña"}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                <div className="relative z-10 space-y-1">
                  <h3 className="font-heading text-xl font-bold text-white group-hover:text-[#F5A623] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#A0A0A0]">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Quote, Trees, ArrowRight, X, ChevronLeft, ChevronRight, Maximize2, Images } from "lucide-react";

interface GalleryPhoto {
  id: string;
  image: string;
  title: string;
  caption: string;
  categoryLabel: string;
  replacementComment: string;
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Set completo de las 8 fotos navegables en el Lightbox
  const allPhotos: GalleryPhoto[] = [
    {
      id: "gal-living",
      /* REEMPLAZAR CON FOTO REAL DEL CLIENTE: foto real del living de la cabaña Vista Volcán con estufa a leña encendida y ventanales al bosque */
      replacementComment: "Foto real del living con chimenea/estufa a leña encendida y ventanales al bosque",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      title: "Interiores Cálidos en Madera Nativa",
      caption: "Estufa a leña encendida, amplios ventanales y luz cálida interior",
      categoryLabel: "Living / Estar",
    },
    {
      id: "gal-tinajas",
      /* REEMPLAZAR CON FOTO REAL DEL CLIENTE: foto real de las tinajas exteriores de hidromasaje en el bosque */
      replacementComment: "Foto real de las tinajas de hidromasaje exteriores en el bosque",
      image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=1200&auto=format&fit=crop",
      title: "Tinajas al Aire Libre",
      caption: "Baños de agua caliente en tinaja de madera bajo las estrellas",
      categoryLabel: "Tinaja / Exterior",
    },
    {
      id: "gal-comedor",
      /* REEMPLAZAR CON FOTO REAL DEL CLIENTE: foto real del comedor con mesa de madera rústica nativa y cocina equipada */
      replacementComment: "Foto real del comedor con mesa de madera nativa rústica y cocina equipada",
      image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1200&auto=format&fit=crop",
      title: "Comedor y Cocina Equipada",
      caption: "Mesa rústica de madera nativa y equipamiento completo",
      categoryLabel: "Comedor / Cocina",
    },
    {
      id: "gal-dorm-principal",
      /* REEMPLAZAR CON FOTO REAL DEL CLIENTE: foto real del dormitorio principal de la cabaña */
      replacementComment: "Foto real del dormitorio principal con cama king y velador encendido",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop",
      title: "Dormitorio Principal",
      caption: "Cama king, ropa de cama premium en tonos tierra y vista al bosque",
      categoryLabel: "Dormitorio Principal",
    },
    {
      id: "gal-dorm-familiar",
      /* REEMPLAZAR CON FOTO REAL DEL CLIENTE: foto real del dormitorio secundario/familiar (2 camas o litera) de Refugio Alpino */
      replacementComment: "Foto real del dormitorio secundario/familiar con 2 camas o litera rústica",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1200&auto=format&fit=crop",
      title: "Dormitorio Familiar",
      caption: "Camas rústicas de madera nativa para hasta 8 huéspedes (Refugio Alpino)",
      categoryLabel: "Dormitorio Secundario",
    },
    {
      id: "gal-bano",
      /* REEMPLAZAR CON FOTO REAL DEL CLIENTE: foto real del baño con ducha/tina, detalles en piedra y toallas dobladas */
      replacementComment: "Foto real del baño mostrando detalles artesanales en piedra/madera y toallas",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
      title: "Baño Privado con Piedra y Madera",
      caption: "Terminaciones artesanales, ducha tibia y toallas de algodón",
      categoryLabel: "Baño",
    },
    {
      id: "gal-mood",
      /* REEMPLAZAR CON FOTO REAL DEL CLIENTE: foto real de detalle/mood (ej: tazas de café humeante en porche o fuego encendido) */
      replacementComment: "Foto real tipo mood/detalle cálido (tazas de café humeante en porche o chimenea de cerca)",
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop",
      title: "Rincones de Calidez",
      caption: "El placer de un café caliente frente al fuego de la chimenea",
      categoryLabel: "Detalle / Ambiente",
    },
    {
      id: "gal-fachada",
      /* REEMPLAZAR CON FOTO REAL DEL CLIENTE: foto real exterior de la fachada de la cabaña Vista Volcán entre los árboles */
      replacementComment: "Foto real de la fachada exterior de la cabaña entre árboles del bosque nativo",
      image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1200&auto=format&fit=crop",
      title: "Fachada en Bosque Nativo",
      caption: "Cabañas integradas en la naturaleza del sur de Chile",
      categoryLabel: "Exterior",
    },
  ];

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNextPhoto = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % allPhotos.length;
    });
  }, [allPhotos.length]);

  const handlePrevPhoto = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + allPhotos.length) % allPhotos.length;
    });
  }, [allPhotos.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseLightbox();
      } else if (e.key === "ArrowRight") {
        handleNextPhoto();
      } else if (e.key === "ArrowLeft") {
        handlePrevPhoto();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, handleNextPhoto, handlePrevPhoto]);

  // Mobile Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    if (deltaX > 50) {
      handlePrevPhoto();
    } else if (deltaX < -50) {
      handleNextPhoto();
    }
    setTouchStartX(null);
  };

  const activePhoto = lightboxIndex !== null ? allPhotos[lightboxIndex] : null;

  return (
    <section id="galeria" className="min-h-[calc(100vh-80px)] py-12 lg:py-16 bg-[#16241C] flex flex-col justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Section Title H2 Fijo: 32px desktop, 24px mobile + Botón Ver todas las fotos */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <h2 className="font-heading text-[24px] lg:text-[32px] font-bold text-white tracking-tight">
            Momentos y rincones de nuestras cabañas
          </h2>
          <p className="text-[#A8B0AB] text-[16px] font-normal">
            Una pincelada de la atmósfera relajante que te espera en Pucón.
          </p>

          <div className="pt-2">
            <button
              onClick={() => handleOpenLightbox(0)}
              className="inline-flex items-center gap-2 bg-[#F5A623] hover:bg-[#E09216] text-[#0F1B14] text-xs sm:text-sm font-heading font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-md hover:scale-105"
            >
              <Images className="w-4 h-4" />
              Ver galería completa ({allPhotos.length} fotos)
            </button>
          </div>
        </div>

        {/* 3 Images Grid Mosaic (radius 16px / rounded-[16px]) - EXACTAMENTE 3 TARJETAS PRINCIPALES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* TARJETA 1: Interiores Cálidos en Madera Nativa (Foto 1) */}
          <div
            onClick={() => handleOpenLightbox(0)}
            className="relative h-[420px] rounded-[16px] overflow-hidden border border-[#2A3A30] shadow-xl group flex flex-col justify-end p-6 cursor-pointer select-none"
          >
            {/* REEMPLAZAR CON FOTO REAL DEL CLIENTE: ${allPhotos[0].replacementComment} */}
            <Image
              src={allPhotos[0].image}
              alt={allPhotos[0].title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1B14]/90 via-[#0F1B14]/30 to-transparent" />

            {/* Hover expand hint icon */}
            <div className="absolute inset-0 bg-[#0F1B14]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
              <div className="w-12 h-12 rounded-full bg-[#F5A623] text-[#0F1B14] flex items-center justify-center shadow-xl scale-95 group-hover:scale-105 transition-transform">
                <Maximize2 className="w-5 h-5 stroke-[2.5]" />
              </div>
            </div>

            <div className="relative z-10 space-y-1">
              <h3 className="font-heading text-lg font-bold text-white group-hover:text-[#F5A623] transition-colors">
                {allPhotos[0].title}
              </h3>
              <p className="text-xs text-[#A8B0AB]">
                {allPhotos[0].caption}
              </p>
            </div>
          </div>

          {/* TARJETA 2: Cita / Testimonio */}
          <div
            className="relative h-[420px] rounded-[16px] overflow-hidden border border-[#2A3A30] shadow-2xl group flex flex-col justify-between p-8 bg-[#16241C]"
          >
            {/* REEMPLAZAR CON FOTO REAL DEL CLIENTE: foto real del entorno natural para fondo de testimonio */}
            <Image
              src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=1200&auto=format&fit=crop"
              alt="Entorno natural"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Heavy dark green overlay */}
            <div className="absolute inset-0 bg-[#0F1B14]/85 backdrop-blur-[2px]" />

            {/* Top Quote Icon */}
            <div className="relative z-10 w-10 h-10 rounded-full bg-[#F5A623] text-[#0F1B14] flex items-center justify-center shadow-lg">
              <Quote className="w-5 h-5 stroke-[2.5]" />
            </div>

            {/* Quote Body */}
            <div className="relative z-10 space-y-3 my-auto">
              <p className="font-heading text-xl font-bold text-[#F5A623] leading-relaxed">
                “Desconéctate de la rutina urbana y despierta rodeado de aire puro y el susurro del bosque nativo.”
              </p>
              <span className="text-xs text-white/90 font-semibold tracking-wider uppercase flex items-center gap-2">
                <Trees className="w-3.5 h-3.5 text-[#F5A623]" />
                Refugio del Bosque • Pucón
              </span>
            </div>

            {/* Bottom Action Link */}
            <div className="relative z-10 pt-4 border-t border-[#2A3A30] flex items-center justify-between">
              <span className="text-xs text-[#A8B0AB]">Experiencia recomendada</span>
              <a
                href="#cotizador"
                className="text-xs font-semibold text-[#F5A623] hover:underline flex items-center gap-1"
              >
                Reservar
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* TARJETA 3: Tinajas al Aire Libre (Foto 2) */}
          <div
            onClick={() => handleOpenLightbox(1)}
            className="relative h-[420px] rounded-[16px] overflow-hidden border border-[#2A3A30] shadow-xl group flex flex-col justify-end p-6 cursor-pointer select-none"
          >
            {/* REEMPLAZAR CON FOTO REAL DEL CLIENTE: ${allPhotos[1].replacementComment} */}
            <Image
              src={allPhotos[1].image}
              alt={allPhotos[1].title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1B14]/90 via-[#0F1B14]/30 to-transparent" />

            {/* Hover expand hint icon */}
            <div className="absolute inset-0 bg-[#0F1B14]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
              <div className="w-12 h-12 rounded-full bg-[#F5A623] text-[#0F1B14] flex items-center justify-center shadow-xl scale-95 group-hover:scale-105 transition-transform">
                <Maximize2 className="w-5 h-5 stroke-[2.5]" />
              </div>
            </div>

            <div className="relative z-10 space-y-1">
              <h3 className="font-heading text-lg font-bold text-white group-hover:text-[#F5A623] transition-colors">
                {allPhotos[1].title}
              </h3>
              <p className="text-xs text-[#A8B0AB]">
                {allPhotos[1].caption}
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* LIGHTBOX MODAL EXPANDIBLE (Navega las 8 fotos del set completo) */}
      {lightboxIndex !== null && activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F1B14]/95 backdrop-blur-md transition-all duration-300 animate-in fade-in"
          onClick={handleCloseLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Bar: Position Counter & Close Button */}
          <div
            className="absolute top-4 left-4 sm:top-6 sm:left-6 z-50 px-4 py-1.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-md text-xs sm:text-sm text-[#A8B0AB] font-medium tracking-widest"
            onClick={(e) => e.stopPropagation()}
          >
            {lightboxIndex + 1} / {allPhotos.length}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCloseLightbox();
            }}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 text-white hover:bg-[#F5A623] hover:text-[#0F1B14] transition-all flex items-center justify-center shadow-xl border border-white/10 active:scale-95 group"
            aria-label="Cerrar modal de imagen"
          >
            <X className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevPhoto();
            }}
            className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 text-white hover:bg-[#F5A623] hover:text-[#0F1B14] transition-all flex items-center justify-center shadow-xl border border-white/10 active:scale-95"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNextPhoto();
            }}
            className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 text-white hover:bg-[#F5A623] hover:text-[#0F1B14] transition-all flex items-center justify-center shadow-xl border border-white/10 active:scale-95"
            aria-label="Imagen siguiente"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Main Image Container */}
          <div
            className="relative max-h-[85vh] max-w-[90vw] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[65vh] sm:h-[72vh] max-w-5xl rounded-[16px] overflow-hidden border border-[#2A3A30] shadow-2xl bg-[#0C1710]">
              <Image
                src={activePhoto.image}
                alt={activePhoto.title}
                fill
                className="object-contain transition-all duration-500 ease-out"
                priority
              />
            </div>

            {/* Photo Title & Caption Footer */}
            <div className="mt-4 text-center space-y-1 max-w-2xl px-4">
              <span className="inline-block text-[11px] font-semibold text-[#F5A623] uppercase tracking-wider mb-0.5">
                {activePhoto.categoryLabel}
              </span>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-white leading-snug">
                {activePhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A8B0AB] leading-relaxed">
                {activePhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}




"use client";

import Image from "next/image";
import { MessageCircle, Send, MapPin, Phone, Mail, Globe, Share2 } from "lucide-react";
import { BUSINESS_INFO } from "@/data/cabinsData";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#0C1710] text-[#A8B0AB] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">



        
        {/* Top Grid (Brand info + 4 Link columns + Newsletter) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#inicio" className="flex items-center group">
              <div className="relative h-12 w-52 sm:w-60 group-hover:scale-[1.02] transition-transform">
                <Image
                  src="/images/logo-full.png"
                  alt="Refugio del Bosque Pucón Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </a>

            <p className="text-xs text-[#A8B0AB] leading-relaxed max-w-sm">
              Tu refugio privado en los bosques nativos de Pucón. Cabañas equipadas con tinajas calientes a leña, máxima privacidad y la tranquilidad que buscas.
            </p>

            <div className="space-y-2 text-xs text-[#A8B0AB]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#F5A623]" />
                <span>{BUSINESS_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F5A623]" />
                <span>{BUSINESS_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#F5A623]" />
                <span>{BUSINESS_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Column 1: Cabañas (Col 5-6) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-white text-sm">
              Cabañas
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#cabanas" className="hover:text-[#F5A623] transition-colors">
                  Vista Volcán
                </a>
              </li>
              <li>
                <a href="#cabanas" className="hover:text-[#F5A623] transition-colors">
                  Bosque Nativo
                </a>
              </li>
              <li>
                <a href="#cabanas" className="hover:text-[#F5A623] transition-colors">
                  Refugio Alpino
                </a>
              </li>
              <li>
                <a href="#cotizador" className="hover:text-[#F5A623] transition-colors font-medium text-[#F5A623]">
                  Cotizar Estadía
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Servicios (Col 7-8) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-white text-sm">
              Servicios
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="hover:text-white transition-colors">Tinaja Caliente</li>
              <li className="hover:text-white transition-colors">Wifi Starlink</li>
              <li className="hover:text-white transition-colors">Quincho & Parrilla</li>
              <li className="hover:text-white transition-colors">Desayuno Sureño</li>
              <li className="hover:text-white transition-colors">Estacionamiento</li>
            </ul>
          </div>

          {/* Column 3: Ubicación (Col 9-10) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-white text-sm">
              Ubicación
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="hover:text-white transition-colors">Pucón Centro (10 min)</li>
              <li className="hover:text-white transition-colors">Volcán Villarrica</li>
              <li className="hover:text-white transition-colors">Termas Geométricas</li>
              <li className="hover:text-white transition-colors">Lago Villarrica</li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact (Cols 11-12) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-white text-sm">
              Contacto Directo
            </h4>
            <p className="text-xs text-[#A8B0AB]">
              Suscríbete para promociones exclusivas en temporada baja.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("¡Gracias por suscribirte a Refugio del Bosque!");
              }}
              className="relative flex items-center"
            >
              <input
                type="email"
                placeholder="Tu correo"
                required
                className="w-full bg-[#16241C] border border-[#2A3A30] rounded-lg pl-3 pr-9 py-2 text-xs text-white focus:outline-none focus:border-[#F5A623] transition-colors"
              />
              <button
                type="submit"
                className="absolute right-1 w-7 h-7 rounded-lg bg-[#F5A623] hover:bg-[#E09216] text-[#0F1B14] flex items-center justify-center transition-all shadow-md"
                aria-label="Suscribirse"
              >
                <Send className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Social & Copyright Bar */}
        <div className="pt-8 border-t border-[#2A3A30] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A8B0AB]">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. Todos los derechos reservados.</p>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-[#16241C] hover:bg-[#F5A623] text-white hover:text-[#0F1B14] flex items-center justify-center transition-all border border-[#2A3A30]"
              aria-label="WhatsApp"
            >
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-[#16241C] hover:bg-[#F5A623] text-white hover:text-[#0F1B14] flex items-center justify-center transition-all border border-[#2A3A30]"
              aria-label="Instagram"
            >
              <Globe className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-[#16241C] hover:bg-[#F5A623] text-white hover:text-[#0F1B14] flex items-center justify-center transition-all border border-[#2A3A30]"
              aria-label="Facebook"
            >
              <Share2 className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

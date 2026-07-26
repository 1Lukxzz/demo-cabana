"use client";

import { Trees, MessageCircle, Send, MapPin, Phone, Mail, Globe, Share2 } from "lucide-react";
import { BUSINESS_INFO } from "@/data/cabinsData";

export default function Footer() {
  return (
    <footer className="bg-[#080808] text-[#A0A0A0] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#inicio" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-[#F5A623] flex items-center justify-center text-black shadow-lg shadow-[#F5A623]/20">
                <Trees className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="font-heading text-xl font-bold text-white tracking-wide">
                {BUSINESS_INFO.name}
              </span>
            </a>

            <p className="text-sm text-[#A0A0A0] leading-relaxed max-w-sm">
              Tu refugio privado en los bosques nativos de Pucón. Cabañas equipadas con tinajas calientes a leña, máxima privacidad y la tranquilidad que buscas.
            </p>

            <div className="space-y-2 text-xs text-[#B0B0B0]">
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

          {/* Quick Links Column 1 (Cols 5-7) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-white text-base">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#inicio" className="hover:text-[#F5A623] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#cabanas" className="hover:text-[#F5A623] transition-colors">
                  Nuestras Cabañas
                </a>
              </li>
              <li>
                <a href="#calculadora" className="hover:text-[#F5A623] transition-colors">
                  Cotizador
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-[#F5A623] transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-[#F5A623] transition-colors">
                  Galería
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 2 (Cols 8-9) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-white text-base">
              Servicios
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="hover:text-white transition-colors">Tinaja Caliente</li>
              <li className="hover:text-white transition-colors">Wifi Starlink</li>
              <li className="hover:text-white transition-colors">Quincho & Parrilla</li>
              <li className="hover:text-white transition-colors">Desayuno Sureño</li>
              <li className="hover:text-white transition-colors">Estacionamiento</li>
            </ul>
          </div>

          {/* Newsletter / Contact Block (Cols 10-12) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading font-bold text-white text-base">
              Recibe Ofertas Especiales
            </h4>
            <p className="text-xs text-[#A0A0A0]">
              Inscríbete para recibir descuentos exclusivos en temporadas bajas y fines de semana largos.
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
                placeholder="Tu correo electrónico"
                required
                className="w-full bg-[#1A1A1A] border border-white/15 rounded-full pl-5 pr-14 py-3 text-sm text-white focus:outline-none focus:border-[#F5A623] transition-colors"
              />
              <button
                type="submit"
                className="absolute right-1.5 w-10 h-10 rounded-full bg-[#F5A623] hover:bg-[#E09216] text-black flex items-center justify-center transition-all shadow-md"
                aria-label="Suscribirse"
              >
                <Send className="w-4 h-4 stroke-[2.5]" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Social Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A0A0A0]">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. Todos los derechos reservados.</p>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#F5A623] text-white hover:text-black flex items-center justify-center transition-all border border-white/10"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#F5A623] text-white hover:text-black flex items-center justify-center transition-all border border-white/10"
              aria-label="Instagram"
            >
              <Globe className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#F5A623] text-white hover:text-black flex items-center justify-center transition-all border border-white/10"
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

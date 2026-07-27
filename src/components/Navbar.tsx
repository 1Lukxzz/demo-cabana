"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, CalendarCheck } from "lucide-react";
import { BUSINESS_INFO } from "@/data/cabinsData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio", id: "inicio" },
    { name: "Cabañas", href: "#cabanas", id: "cabanas" },
    { name: "Cotizar", href: "#cotizador", id: "cotizador" },
    { name: "Disponibilidad", href: "#calendario", id: "calendario" },
    { name: "Galería", href: "#galeria", id: "galeria" },
    { name: "Contacto", href: "#contacto", id: "contacto" },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 h-20 bg-[#0C1710] border-b border-[#2A3A30] shadow-lg shadow-black/40 flex items-center transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">

        
        {/* Logo oficial horizontal a la izquierda */}
        <a href="#inicio" className="flex items-center group py-1">
          <div className="relative h-12 w-48 sm:w-56 group-hover:scale-[1.02] transition-transform">
            <Image
              src="/images/logo-full.png"
              alt="Refugio del Bosque Pucón Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.id)}
                className={`text-sm font-medium transition-colors hover:text-[#F5A623] ${
                  isActive ? "text-[#F5A623] font-semibold" : "text-[#FFFFFF]"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* CTA Button a la derecha: sólido color acento, ícono + texto, radius de 8px (rounded-lg) */}
        <div className="hidden md:flex items-center">
          <a
            href="#cotizador"
            className="inline-flex items-center gap-2 bg-[#F5A623] hover:bg-[#E09216] text-[#0F1B14] font-heading font-semibold text-sm px-5 py-2.5 rounded-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <CalendarCheck className="w-4 h-4 stroke-[2.5]" />
            Reservar ahora
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 rounded-lg bg-[#16241C] border border-[#2A3A30] hover:bg-[#2A3A30] transition-colors"
          aria-label="Menú principal"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#16241C] border-b border-[#2A3A30] px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.id);
                  setMobileMenuOpen(false);
                }}
                className="text-base font-medium text-white/90 hover:text-[#F5A623] py-2 transition-colors border-b border-[#2A3A30] flex items-center justify-between"
              >
                <span>{link.name}</span>
              </a>
            ))}
          </nav>
          <a
            href="#cotizador"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#F5A623] text-[#0F1B14] font-heading font-semibold text-base px-5 py-3 rounded-lg"
          >
            <CalendarCheck className="w-5 h-5 stroke-[2.5]" />
            Reservar ahora
          </a>
        </div>
      )}
    </header>
  );
}



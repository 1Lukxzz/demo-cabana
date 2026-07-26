"use client";

import { useState, useEffect } from "react";
import { Trees, Menu, X, CalendarCheck } from "lucide-react";
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
    { name: "Calculadora", href: "#calculadora", id: "calculadora" },
    { name: "Sobre Nosotros", href: "#nosotros", id: "nosotros" },
    { name: "Galería", href: "#galeria", id: "galeria" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0D0D0D]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-xl"
          : "bg-[#0D0D0D]/60 backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-[#F5A623] flex items-center justify-center text-black shadow-lg shadow-[#F5A623]/20 group-hover:scale-105 transition-transform">
            <Trees className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div>
            <span className="font-heading text-xl font-bold text-white tracking-wide block leading-none">
              {BUSINESS_INFO.name}
            </span>
            <span className="text-[11px] text-[#A0A0A0] tracking-wider uppercase font-medium">
              Pucón • Chile
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.id)}
                className={`text-sm font-medium transition-colors hover:text-[#F5A623] ${
                  isActive ? "text-[#F5A623] font-semibold" : "text-[#B0B0B0]"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#calculadora"
            className="inline-flex items-center gap-2 bg-[#F5A623] hover:bg-[#E09216] text-black font-heading font-bold text-sm px-6 py-2.5 rounded-full transition-all shadow-lg shadow-[#F5A623]/25 hover:scale-105 active:scale-95"
          >
            <CalendarCheck className="w-4 h-4" />
            Reservar ahora
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          aria-label="Menú principal"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#161616] border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.id);
                  setMobileMenuOpen(false);
                }}
                className="text-base font-medium text-white/80 hover:text-[#F5A623] py-2 transition-colors border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <a
            href="#calculadora"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#F5A623] text-black font-heading font-bold text-base px-6 py-3 rounded-full shadow-lg shadow-[#F5A623]/20"
          >
            <CalendarCheck className="w-5 h-5" />
            Reservar ahora
          </a>
        </div>
      )}
    </header>
  );
}

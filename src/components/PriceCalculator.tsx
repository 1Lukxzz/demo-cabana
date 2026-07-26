"use client";

import { useState, useMemo } from "react";
import { CABINS_DATA, EXTRA_SERVICES, BUSINESS_INFO } from "@/data/cabinsData";
import { Calendar, Users, Calculator, MessageCircle, Check, Sparkles, Shield, ChevronRight } from "lucide-react";

export default function PriceCalculator() {
  // Default values
  const [selectedCabinId, setSelectedCabinId] = useState(CABINS_DATA[0].id);
  const [checkIn, setCheckIn] = useState("2026-08-01");
  const [checkOut, setCheckOut] = useState("2026-08-03");
  const [guestsCount, setGuestsCount] = useState(2);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

  // Selected cabin object
  const selectedCabin = useMemo(() => {
    return CABINS_DATA.find((c) => c.id === selectedCabinId) || CABINS_DATA[0];
  }, [selectedCabinId]);

  // Calculate number of nights
  const nightsCount = useMemo(() => {
    if (!checkIn || !checkOut) return 1;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  }, [checkIn, checkOut]);

  // Toggle extra service
  const toggleExtra = (id: string) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Compute pricing breakdown
  const cabinBaseTotal = selectedCabin.pricePerNight * nightsCount;

  // Extra guest surcharge: $10,000 per extra guest over 2 guests per night
  const extraGuestsCount = Math.max(0, guestsCount - 2);
  const extraGuestsTotal = extraGuestsCount * 10000 * nightsCount;

  const extrasTotal = selectedExtras.reduce((sum, extraId) => {
    const service = EXTRA_SERVICES.find((s) => s.id === extraId);
    return sum + (service ? service.pricePerStay : 0);
  }, 0);

  const grandTotal = cabinBaseTotal + extraGuestsTotal + extrasTotal;

  // Generate WhatsApp message
  const whatsappUrl = useMemo(() => {
    const extrasListStr = selectedExtras.length > 0
      ? selectedExtras.map(id => EXTRA_SERVICES.find(s => s.id === id)?.name).join(", ")
      : "Ninguno";

    const msg = `Hola! Me gustaría cotizar / reservar en *Cabañas Refugio del Bosque*:

🏠 *Cabaña:* ${selectedCabin.name}
📅 *Check-in:* ${checkIn}
📅 *Check-out:* ${checkOut} (${nightsCount} noche${nightsCount > 1 ? "s" : ""})
👥 *Huéspedes:* ${guestsCount} personas
✨ *Servicios adicionales:* ${extrasListStr}
💰 *Total estimado:* $${grandTotal.toLocaleString("es-CL")} CLP

¿Tienen disponibilidad para estas fechas?`;

    return `https://wa.me/${BUSINESS_INFO.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(msg)}`;
  }, [selectedCabin, checkIn, checkOut, nightsCount, guestsCount, selectedExtras, grandTotal]);

  return (
    <section id="calculadora" className="py-20 md:py-28 bg-[#080808] relative overflow-hidden">
      
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F5A623]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-[#F5A623] text-xs font-bold uppercase tracking-widest bg-[#F5A623]/10 border border-[#F5A623]/20 px-4 py-1.5 rounded-full inline-block">
            Cotizador Instantáneo
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Calcula la tarifa exacta de tu estadía
          </h2>
          <p className="text-[#A0A0A0] text-base sm:text-lg">
            Selecciona la cabaña, las fechas y los servicios adicionales para obtener el precio total sin sorpresas.
          </p>
        </div>

        {/* Calculator Widget Container */}
        <div className="max-w-5xl mx-auto bg-[#1A1A1A] border border-white/10 rounded-[32px] p-6 sm:p-10 shadow-2xl shadow-black/80 relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Inputs Section */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Step 1: Cabin Selection */}
              <div className="space-y-3">
                <label className="font-heading font-bold text-base text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#F5A623] text-black text-xs flex items-center justify-center font-bold">1</span>
                  Selecciona tu cabaña
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {CABINS_DATA.map((cabin) => {
                    const isSelected = cabin.id === selectedCabinId;
                    return (
                      <button
                        key={cabin.id}
                        type="button"
                        onClick={() => {
                          setSelectedCabinId(cabin.id);
                          if (guestsCount > cabin.capacity) {
                            setGuestsCount(cabin.capacity);
                          }
                        }}
                        className={`p-4 rounded-2xl border text-left transition-all relative ${
                          isSelected
                            ? "bg-[#F5A623]/10 border-[#F5A623] text-white shadow-lg"
                            : "bg-[#121212] border-white/10 text-[#A0A0A0] hover:border-white/20 hover:text-white"
                        }`}
                      >
                        {isSelected && (
                          <div className="absolute top-3 right-3 w-4 h-4 rounded-full bg-[#F5A623] flex items-center justify-center text-black">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                        )}
                        <span className="font-heading font-bold text-sm text-white block pr-4">
                          {cabin.name.replace("Cabaña ", "")}
                        </span>
                        <span className="text-xs text-[#F5A623] font-semibold block mt-1">
                          ${cabin.pricePerNight.toLocaleString("es-CL")}/noche
                        </span>
                        <span className="text-[11px] text-[#A0A0A0] block mt-0.5">
                          Máx {cabin.capacity} pers.
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Dates Selection */}
              <div className="space-y-3">
                <label className="font-heading font-bold text-base text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#F5A623] text-black text-xs flex items-center justify-center font-bold">2</span>
                  Fechas de Check-in y Check-out
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Check-in */}
                  <div className="space-y-1.5">
                    <span className="text-xs text-[#A0A0A0] font-medium">Check-in (Entrada)</span>
                    <div className="relative">
                      <input
                        type="date"
                        value={checkIn}
                        min={new Date().toISOString().split("T")[0]}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full bg-[#121212] border border-white/10 rounded-2xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F5A623] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Check-out */}
                  <div className="space-y-1.5">
                    <span className="text-xs text-[#A0A0A0] font-medium">Check-out (Salida)</span>
                    <div className="relative">
                      <input
                        type="date"
                        value={checkOut}
                        min={checkIn || new Date().toISOString().split("T")[0]}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full bg-[#121212] border border-white/10 rounded-2xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F5A623] transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Guest Count */}
              <div className="space-y-3">
                <label className="font-heading font-bold text-base text-white flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#F5A623] text-black text-xs flex items-center justify-center font-bold">3</span>
                    Número de huéspedes
                  </span>
                  <span className="text-xs text-[#A0A0A0] font-normal">
                    (Capacidad máx: {selectedCabin.capacity} pers.)
                  </span>
                </label>

                <div className="flex items-center justify-between bg-[#121212] border border-white/10 rounded-2xl px-5 py-3">
                  <span className="text-sm font-medium text-white flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#F5A623]" />
                    Total de personas
                  </span>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setGuestsCount((g) => Math.max(1, g - 1))}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold flex items-center justify-center transition-colors disabled:opacity-30"
                      disabled={guestsCount <= 1}
                    >
                      -
                    </button>

                    <span className="font-heading font-bold text-white text-lg w-6 text-center">
                      {guestsCount}
                    </span>

                    <button
                      type="button"
                      onClick={() => setGuestsCount((g) => Math.min(selectedCabin.capacity, g + 1))}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold flex items-center justify-center transition-colors disabled:opacity-30"
                      disabled={guestsCount >= selectedCabin.capacity}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Step 4: Optional Extras */}
              <div className="space-y-3">
                <label className="font-heading font-bold text-base text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#F5A623] text-black text-xs flex items-center justify-center font-bold">4</span>
                  Servicios opcionales
                </label>

                <div className="space-y-2.5">
                  {EXTRA_SERVICES.map((extra) => {
                    const isChecked = selectedExtras.includes(extra.id);
                    return (
                      <div
                        key={extra.id}
                        onClick={() => toggleExtra(extra.id)}
                        className={`p-3.5 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                          isChecked
                            ? "bg-[#F5A623]/10 border-[#F5A623] text-white"
                            : "bg-[#121212] border-white/10 text-[#A0A0A0] hover:border-white/20"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-5 h-5 rounded-lg border flex items-center justify-center transition-colors ${
                              isChecked
                                ? "bg-[#F5A623] border-[#F5A623] text-black"
                                : "border-white/30"
                            }`}
                          >
                            {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                          <div>
                            <span className="text-sm font-semibold text-white block">
                              {extra.name}
                            </span>
                            <span className="text-xs text-[#A0A0A0]">
                              {extra.description}
                            </span>
                          </div>
                        </div>

                        <span className="text-xs font-bold text-[#F5A623] shrink-0 ml-3">
                          +${extra.pricePerStay.toLocaleString("es-CL")}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Summary Column */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-[#121212] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">
              
              <div className="space-y-6">
                <div className="border-b border-white/10 pb-4 flex items-center justify-between">
                  <h3 className="font-heading text-xl font-bold text-white flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-[#F5A623]" />
                    Resumen de Cotización
                  </h3>
                  <span className="text-xs text-[#F5A623] font-semibold bg-[#F5A623]/10 px-2.5 py-1 rounded-full">
                    {nightsCount} {nightsCount === 1 ? "noche" : "noches"}
                  </span>
                </div>

                {/* Calculation Breakdown Lines */}
                <div className="space-y-3 text-sm">
                  
                  <div className="flex justify-between text-[#A0A0A0]">
                    <span>
                      {selectedCabin.name} (${selectedCabin.pricePerNight.toLocaleString("es-CL")} × {nightsCount} n.)
                    </span>
                    <span className="text-white font-medium">
                      ${cabinBaseTotal.toLocaleString("es-CL")}
                    </span>
                  </div>

                  {extraGuestsCount > 0 && (
                    <div className="flex justify-between text-[#A0A0A0]">
                      <span>
                        Huéspedes adicionales ({extraGuestsCount} pers. × $10.000)
                      </span>
                      <span className="text-white font-medium">
                        ${extraGuestsTotal.toLocaleString("es-CL")}
                      </span>
                    </div>
                  )}

                  {selectedExtras.map((extraId) => {
                    const extra = EXTRA_SERVICES.find((s) => s.id === extraId);
                    if (!extra) return null;
                    return (
                      <div key={extra.id} className="flex justify-between text-[#A0A0A0]">
                        <span>{extra.name}</span>
                        <span className="text-white font-medium">
                          ${extra.pricePerStay.toLocaleString("es-CL")}
                        </span>
                      </div>
                    );
                  })}

                  <div className="flex justify-between text-[#A0A0A0]">
                    <span>Impuestos & Tarifas de limpieza</span>
                    <span className="text-green-400 font-semibold uppercase text-xs">Gratis</span>
                  </div>

                </div>

                {/* Total Price Section */}
                <div className="pt-6 border-t border-white/10 bg-[#1A1A1A] p-5 rounded-2xl border border-white/5 space-y-1">
                  <span className="text-xs text-[#A0A0A0] uppercase font-semibold tracking-wider block">
                    Total Estimado Final
                  </span>
                  <div className="flex items-baseline justify-between">
                    <span className="font-heading text-3xl sm:text-4xl font-bold text-[#F5A623]">
                      ${grandTotal.toLocaleString("es-CL")}
                    </span>
                    <span className="text-xs text-[#A0A0A0]">CLP</span>
                  </div>
                </div>

                {/* Guarantee badge */}
                <div className="flex items-center gap-2 text-xs text-[#A0A0A0] pt-1">
                  <Shield className="w-4 h-4 text-[#F5A623] shrink-0" />
                  <span>Sin costo adicional por reservas directas.</span>
                </div>
              </div>

              {/* Direct Booking Action */}
              <div className="space-y-3 pt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#E09216] text-black font-heading font-bold text-base px-6 py-4 rounded-full transition-all shadow-xl shadow-[#F5A623]/25 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5 fill-black" />
                  Reservar por WhatsApp
                  <ChevronRight className="w-5 h-5" />
                </a>

                <p className="text-[11px] text-center text-[#A0A0A0]">
                  Te responderemos al instante para confirmar la disponibilidad exacta.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

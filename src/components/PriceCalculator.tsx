"use client";

import { useState, useMemo, useEffect } from "react";
import { CABINS_DATA, EXTRA_SERVICES, BUSINESS_INFO } from "@/data/cabinsData";
import { Calculator, MessageCircle, Check, Shield, ChevronRight, Users } from "lucide-react";

interface PriceCalculatorProps {
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialCabinId?: string;
}

export default function PriceCalculator({
  initialCheckIn = "2026-08-15",
  initialCheckOut = "2026-08-18",
  initialCabinId,
}: PriceCalculatorProps) {
  // Default values
  const [selectedCabinId, setSelectedCabinId] = useState(initialCabinId || CABINS_DATA[0].id);
  const [checkIn, setCheckIn] = useState(initialCheckIn);
  const [checkOut, setCheckOut] = useState(initialCheckOut);
  const [guestsCount, setGuestsCount] = useState(2);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

  // Update internal state if props change (e.g. from AvailabilityCalendar selection)
  useEffect(() => {
    if (initialCabinId) setSelectedCabinId(initialCabinId);
    if (initialCheckIn) setCheckIn(initialCheckIn);
    if (initialCheckOut) setCheckOut(initialCheckOut);
  }, [initialCabinId, initialCheckIn, initialCheckOut]);

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

    const msg = `Hola! Me gustaría cotizar / reservar en *${BUSINESS_INFO.name}*:

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
    <section id="cotizador" className="min-h-[calc(100vh-80px)] py-6 lg:py-10 bg-[#0F1B14] flex flex-col justify-center relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-1 mb-5 lg:mb-6">
          <span className="text-[#F5A623] text-[12px] font-medium uppercase tracking-wider block">
            COTIZADOR DE ARRIENDO
          </span>
          <h2 className="font-heading text-[22px] lg:text-[26px] font-bold text-white tracking-tight">
            Calcula el valor exacto de tu estadía
          </h2>
          <p className="text-[#A8B0AB] text-[14px] font-normal">
            Selecciona la cabaña, fechas y servicios para obtener la cotización al instante.
          </p>
        </div>

        {/* Calculator 2-Column Container (max-w-5xl más compacto, padding 24px desktop / 16px mobile) */}
        <div className="max-w-5xl mx-auto bg-[#16241C] border border-[#2A3A30] rounded-[12px] p-4 lg:p-6 shadow-xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* COLUMNA IZQUIERDA (60% del ancho / lg:col-span-7) */}
            <div className="lg:col-span-7 space-y-3.5 max-h-[480px] lg:max-h-[500px] lg:overflow-y-auto lg:pr-2 custom-scrollbar">
              
              {/* Paso 1: Selecciona tu cabaña */}
              <div className="space-y-2">
                <label className="font-heading font-semibold text-[13px] text-white flex items-center gap-2">
                  <span className="w-4.5 h-4.5 rounded-full bg-[#F5A623] text-[#0F1B14] text-[11px] flex items-center justify-center font-bold">1</span>
                  Selecciona tu cabaña
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
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
                        className={`p-2.5 rounded-lg border text-left transition-all relative ${
                          isSelected
                            ? "bg-[#F5A623]/10 border-[#F5A623] text-white"
                            : "bg-[#0F1B14] border-[#2A3A30] text-[#A8B0AB] hover:border-[#2A3A30]/80 hover:text-white"
                        }`}
                      >
                        {isSelected && (
                          <div className="absolute top-2 right-2 w-3.5 h-3.5 rounded-full bg-[#F5A623] flex items-center justify-center text-[#0F1B14]">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                        )}
                        <span className="font-heading font-semibold text-[13px] text-white block pr-3 truncate">
                          {cabin.name.replace("Cabaña ", "")}
                        </span>
                        <span className="text-[15px] text-[#F5A623] font-bold block mt-0.5">
                          ${cabin.pricePerNight.toLocaleString("es-CL")}
                          <span className="text-[11px] text-[#A8B0AB] font-normal">/n.</span>
                        </span>
                        <span className="text-[11px] text-[#A8B0AB] block mt-0.5 font-normal">
                          Hasta {cabin.capacity} pers.
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Paso 2: Fechas de entrada y salida */}
              <div className="space-y-2">
                <label className="font-heading font-semibold text-[13px] text-white flex items-center gap-2">
                  <span className="w-4.5 h-4.5 rounded-full bg-[#F5A623] text-[#0F1B14] text-[11px] flex items-center justify-center font-bold">2</span>
                  Fechas de Entrada y Salida
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="space-y-1">
                    <span className="text-[12px] text-[#A8B0AB] font-normal">Check-in (Entrada)</span>
                    <input
                      type="date"
                      value={checkIn}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-[#0F1B14] border border-[#2A3A30] rounded-lg px-3 py-1.5 text-white text-[14px] focus:outline-none focus:border-[#F5A623] transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <span className="text-[12px] text-[#A8B0AB] font-normal">Check-out (Salida)</span>
                    <input
                      type="date"
                      value={checkOut}
                      min={checkIn || new Date().toISOString().split("T")[0]}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-[#0F1B14] border border-[#2A3A30] rounded-lg px-3 py-1.5 text-white text-[14px] focus:outline-none focus:border-[#F5A623] transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Paso 3: Número de huéspedes */}
              <div className="space-y-2">
                <label className="font-heading font-semibold text-[13px] text-white flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="w-4.5 h-4.5 rounded-full bg-[#F5A623] text-[#0F1B14] text-[11px] flex items-center justify-center font-bold">3</span>
                    Número de huéspedes
                  </span>
                  <span className="text-[11px] text-[#A8B0AB] font-normal">
                    (Máx {selectedCabin.capacity} pers.)
                  </span>
                </label>

                <div className="flex items-center justify-between bg-[#0F1B14] border border-[#2A3A30] rounded-lg px-3 py-1.5">
                  <span className="text-[13px] font-normal text-white flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-[#F5A623]" />
                    Total huéspedes
                  </span>

                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => setGuestsCount((g) => Math.max(1, g - 1))}
                      className="w-6 h-6 rounded bg-[#16241C] border border-[#2A3A30] hover:bg-[#2A3A30] text-white text-xs font-bold flex items-center justify-center transition-colors disabled:opacity-30"
                      disabled={guestsCount <= 1}
                    >
                      -
                    </button>

                    <span className="font-heading font-bold text-white text-[14px] w-4 text-center">
                      {guestsCount}
                    </span>

                    <button
                      type="button"
                      onClick={() => setGuestsCount((g) => Math.min(selectedCabin.capacity, g + 1))}
                      className="w-6 h-6 rounded bg-[#16241C] border border-[#2A3A30] hover:bg-[#2A3A30] text-white text-xs font-bold flex items-center justify-center transition-colors disabled:opacity-30"
                      disabled={guestsCount >= selectedCabin.capacity}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Paso 4: Servicios adicionales opcionales */}
              <div className="space-y-2">
                <label className="font-heading font-semibold text-[13px] text-white flex items-center gap-2">
                  <span className="w-4.5 h-4.5 rounded-full bg-[#F5A623] text-[#0F1B14] text-[11px] flex items-center justify-center font-bold">4</span>
                  Servicios adicionales opcionales
                </label>

                <div className="space-y-1.5">
                  {EXTRA_SERVICES.map((extra) => {
                    const isChecked = selectedExtras.includes(extra.id);
                    return (
                      <div
                        key={extra.id}
                        onClick={() => toggleExtra(extra.id)}
                        className={`p-2.5 rounded-lg border flex items-center justify-between cursor-pointer transition-all ${
                          isChecked
                            ? "bg-[#F5A623]/10 border-[#F5A623] text-white"
                            : "bg-[#0F1B14] border-[#2A3A30] text-[#A8B0AB] hover:border-[#2A3A30]/80"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0 pr-2">
                          <div
                            className={`w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 transition-colors ${
                              isChecked
                                ? "bg-[#F5A623] border-[#F5A623] text-[#0F1B14]"
                                : "border-[#2A3A30]"
                            }`}
                          >
                            {isChecked && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                          </div>
                          <div className="min-w-0">
                            <span className="text-[13px] font-semibold text-white block leading-tight truncate">
                              {extra.name}
                            </span>
                            <span className="text-[11px] text-[#A8B0AB] font-normal block truncate">
                              {extra.description}
                            </span>
                          </div>
                        </div>

                        <span className="text-[13px] font-bold text-[#F5A623] shrink-0">
                          +${extra.pricePerStay.toLocaleString("es-CL")}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* COLUMNA DERECHA (40% del ancho / lg:col-span-5 / sticky top-[95px]) */}
            <div className="lg:col-span-5 sticky top-[95px] bg-[#0F1B14] border border-[#2A3A30] rounded-[12px] p-4 lg:p-5 space-y-4 shadow-lg">
              
              <div className="border-b border-[#2A3A30] pb-2.5 flex items-center justify-between">
                <h3 className="font-heading text-[16px] font-bold text-white flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-[#F5A623]" />
                  Resumen de Cotización
                </h3>
                <span className="text-[11px] text-[#F5A623] font-semibold bg-[#F5A623]/10 px-2 py-0.5 rounded-full">
                  {nightsCount} {nightsCount === 1 ? "noche" : "noches"}
                </span>
              </div>

              {/* Líneas de desglose */}
              <div className="space-y-2 text-[13px]">
                <div className="flex justify-between text-[#A8B0AB]">
                  <span className="truncate pr-2">
                    {selectedCabin.name} (${selectedCabin.pricePerNight.toLocaleString("es-CL")} × {nightsCount} n.)
                  </span>
                  <span className="text-white font-medium shrink-0">
                    ${cabinBaseTotal.toLocaleString("es-CL")}
                  </span>
                </div>

                {extraGuestsCount > 0 && (
                  <div className="flex justify-between text-[#A8B0AB]">
                    <span>Huéspedes adic. ({extraGuestsCount} × $10.000)</span>
                    <span className="text-white font-medium">
                      ${extraGuestsTotal.toLocaleString("es-CL")}
                    </span>
                  </div>
                )}

                {selectedExtras.map((extraId) => {
                  const extra = EXTRA_SERVICES.find((s) => s.id === extraId);
                  if (!extra) return null;
                  return (
                    <div key={extra.id} className="flex justify-between text-[#A8B0AB]">
                      <span className="truncate pr-2">{extra.name}</span>
                      <span className="text-white font-medium shrink-0">
                        ${extra.pricePerStay.toLocaleString("es-CL")}
                      </span>
                    </div>
                  );
                })}

                <div className="flex justify-between text-[#A8B0AB]">
                  <span>Limpieza & Gastos</span>
                  <span className="text-green-400 font-semibold uppercase text-[10px]">Incluido</span>
                </div>
              </div>

              {/* Total final destacado en 1.5rem (24px) */}
              <div className="pt-2.5 border-t border-[#2A3A30] bg-[#16241C] p-3 rounded-lg border border-[#2A3A30] flex items-baseline justify-between">
                <span className="text-[10px] text-[#A8B0AB] uppercase font-semibold tracking-wider">
                  TOTAL ESTIMADO:
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-[1.5rem] font-bold text-[#F5A623]">
                    ${grandTotal.toLocaleString("es-CL")}
                  </span>
                  <span className="text-[11px] text-[#A8B0AB]">CLP</span>
                </div>
              </div>

              {/* Botón Reservar por WhatsApp */}
              <div className="space-y-1.5 pt-0.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#E09216] text-[#0F1B14] font-heading font-semibold text-[14px] py-2.5 px-4 rounded-lg transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  <svg
                    className="w-4 h-4 fill-[#0F1B14]"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  Reservar por WhatsApp
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>

                <div className="flex items-center justify-center gap-1 text-[10px] text-[#A8B0AB]">
                  <Shield className="w-3 h-3 text-[#F5A623]" />
                  <span>Sin costo adicional por reserva directa</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}






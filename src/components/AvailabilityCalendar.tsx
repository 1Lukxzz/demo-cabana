"use client";

import { useState, useMemo } from "react";
import { CABINS_DATA, BOOKED_DATES_BY_CABIN } from "@/data/cabinsData";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

interface AvailabilityCalendarProps {
  selectedCabinId?: string;
  onSelectDates?: (checkIn: string, checkOut: string, cabinId: string) => void;
}

export default function AvailabilityCalendar({
  selectedCabinId: externalCabinId,
  onSelectDates,
}: AvailabilityCalendarProps) {
  const [activeCabinId, setActiveCabinId] = useState<string>(
    externalCabinId || CABINS_DATA[0].id
  );

  // Month navigation state: 0 = August 2026, 1 = September 2026
  const [monthOffset, setMonthOffset] = useState<number>(0);
  const [rangeStart, setRangeStart] = useState<string | null>(null);
  const [rangeEnd, setRangeEnd] = useState<string | null>(null);

  // Current month date calculations
  const monthData = useMemo(() => {
    const baseYear = 2026;
    const baseMonth = 7 + monthOffset; // 7 = August
    
    const firstDayOfMonth = new Date(baseYear, baseMonth, 1);
    const lastDayOfMonth = new Date(baseYear, baseMonth + 1, 0);

    const year = firstDayOfMonth.getFullYear();
    const monthIndex = firstDayOfMonth.getMonth();
    const monthName = firstDayOfMonth.toLocaleDateString("es-CL", {
      month: "long",
      year: "numeric",
    });

    const daysInMonth = lastDayOfMonth.getDate();
    
    let startDayOfWeek = firstDayOfMonth.getDay() - 1;
    if (startDayOfWeek === -1) startDayOfWeek = 6;

    const days: Array<{
      dateStr: string;
      dayNumber: number;
      isBooked: boolean;
    }> = [];

    const bookedList = BOOKED_DATES_BY_CABIN[activeCabinId] || [];

    for (let day = 1; day <= daysInMonth; day++) {
      const monthStr = String(monthIndex + 1).padStart(2, "0");
      const dayStr = String(day).padStart(2, "0");
      const dateStr = `${year}-${monthStr}-${dayStr}`;

      const isBooked = bookedList.includes(dateStr);
      days.push({
        dateStr,
        dayNumber: day,
        isBooked,
      });
    }

    return {
      monthName: monthName.charAt(0).toUpperCase() + monthName.slice(1),
      startDayOfWeek,
      days,
    };
  }, [monthOffset, activeCabinId]);

  // Handle day click for selecting date range
  const handleDateClick = (dateStr: string, isBooked: boolean) => {
    if (isBooked) return;

    if (!rangeStart || (rangeStart && rangeEnd)) {
      setRangeStart(dateStr);
      setRangeEnd(null);
    } else if (rangeStart && !rangeEnd) {
      if (dateStr < rangeStart) {
        setRangeStart(dateStr);
        setRangeEnd(null);
      } else {
        setRangeEnd(dateStr);
        if (onSelectDates) {
          onSelectDates(rangeStart, dateStr, activeCabinId);
        }
      }
    }
  };

  const isSelected = (dateStr: string) => {
    if (rangeStart === dateStr || rangeEnd === dateStr) return true;
    if (rangeStart && rangeEnd && dateStr > rangeStart && dateStr < rangeEnd) return true;
    return false;
  };

  const selectedCabin = useMemo(() => {
    return CABINS_DATA.find((c) => c.id === activeCabinId) || CABINS_DATA[0];
  }, [activeCabinId]);

  return (
    <section id="calendario" className="min-h-[calc(100vh-80px)] py-6 lg:py-10 bg-[#13221A] flex flex-col justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header Compacto */}
        <div className="text-center max-w-2xl mx-auto space-y-1 mb-5 lg:mb-6">
          <span className="text-[#F5A623] text-[12px] font-medium uppercase tracking-wider block">
            DISPONIBILIDAD EN TIEMPO REAL
          </span>
          <h2 className="font-heading text-[22px] lg:text-[26px] font-bold text-white tracking-tight">
            Calendario de Reservas
          </h2>
          <p className="text-[#A8B0AB] text-[14px] font-normal">
            Selecciona tu cabaña y consulta los días disponibles. Haz clic en las fechas para cotizar.
          </p>
        </div>

        {/* 2-Column Container (max-w-5xl) */}
        <div className="max-w-5xl mx-auto bg-[#16241C] border border-[#2A3A30] rounded-[12px] p-4 lg:p-6 shadow-xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* COLUMNA IZQUIERDA (Info cabaña, pestañas, leyenda y selección de fechas) */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Selector de Cabaña */}
              <div className="space-y-1.5">
                <span className="text-[12px] text-[#A8B0AB] font-semibold uppercase tracking-wider block">
                  Selecciona Cabaña:
                </span>
                <div className="flex flex-col gap-2">
                  {CABINS_DATA.map((cabin) => {
                    const isActive = cabin.id === activeCabinId;
                    return (
                      <button
                        key={cabin.id}
                        type="button"
                        onClick={() => {
                          setActiveCabinId(cabin.id);
                          setRangeStart(null);
                          setRangeEnd(null);
                        }}
                        className={`p-3 rounded-lg font-heading font-semibold text-[13px] text-left transition-all border flex items-center justify-between ${
                          isActive
                            ? "bg-[#F5A623] text-[#0F1B14] border-[#F5A623] shadow-md"
                            : "bg-[#0F1B14] text-[#A8B0AB] border-[#2A3A30] hover:text-white hover:border-[#A8B0AB]/40"
                        }`}
                      >
                        <span>{cabin.name}</span>
                        <span className={`text-[12px] ${isActive ? "text-[#0F1B14]/80 font-bold" : "text-[#F5A623]"}`}>
                          ${cabin.pricePerNight.toLocaleString("es-CL")}/n.
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Leyenda de Disponibilidad */}
              <div className="bg-[#0F1B14] border border-[#2A3A30] p-3.5 rounded-lg space-y-2 text-[12px]">
                <span className="text-[11px] text-[#A8B0AB] uppercase font-semibold tracking-wider block">
                  Leyenda de Estado:
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded bg-[#0F1B14] border border-[#2A3A30]" />
                    <span className="text-[#A8B0AB]">Disponible</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded bg-[#F5A623]" />
                    <span className="text-white font-semibold">Seleccionado</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded bg-[#0F1B14] border border-[#2A3A30] opacity-40" />
                    <span className="text-[#A8B0AB]/60 line-through">Ocupado</span>
                  </div>
                </div>
              </div>

              {/* Banner de Fechas Seleccionadas */}
              {rangeStart && (
                <div className="bg-[#F5A623]/10 border border-[#F5A623]/30 p-3.5 rounded-lg space-y-2">
                  <div className="text-[12px] text-white">
                    Fechas: <strong className="text-[#F5A623] font-bold">{rangeStart}</strong> {rangeEnd ? `al ${rangeEnd}` : "(selecciona fecha de salida)"}
                  </div>
                  {rangeEnd && (
                    <a
                      href="#cotizador"
                      className="w-full bg-[#F5A623] text-[#0F1B14] font-heading font-semibold text-[13px] py-2 px-3 rounded hover:bg-[#E09216] transition-colors flex items-center justify-center gap-1.5"
                    >
                      Cotizar Fechas
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              )}

            </div>

            {/* COLUMNA DERECHA (Solo el Calendario) */}
            <div className="lg:col-span-7 bg-[#0F1B14] border border-[#2A3A30] rounded-[12px] p-4 lg:p-5 shadow-lg space-y-4">
              
              {/* Calendar Header / Month Switcher */}
              <div className="flex items-center justify-between border-b border-[#2A3A30] pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#F5A623]/15 border border-[#F5A623]/30 flex items-center justify-center text-[#F5A623]">
                    <CalendarIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-heading text-[16px] font-bold text-white leading-tight">
                      {monthData.monthName}
                    </h3>
                    <span className="text-[11px] text-[#A8B0AB]">
                      Disponibilidad: <strong className="text-white">{selectedCabin.name}</strong>
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setMonthOffset((prev) => Math.max(0, prev - 1))}
                    disabled={monthOffset === 0}
                    className="w-7 h-7 rounded-lg bg-[#16241C] border border-[#2A3A30] hover:border-[#A8B0AB]/40 text-white flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Mes anterior"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setMonthOffset((prev) => Math.min(2, prev + 1))}
                    disabled={monthOffset === 2}
                    className="w-7 h-7 rounded-lg bg-[#16241C] border border-[#2A3A30] hover:border-[#A8B0AB]/40 text-white flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Mes siguiente"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Days of Week Header (gap 6px = gap-1.5) */}
              <div className="grid grid-cols-7 gap-1.5 text-center text-[11px] font-semibold text-[#A8B0AB] uppercase tracking-wider">
                <div>Lun</div>
                <div>Mar</div>
                <div>Mié</div>
                <div>Jue</div>
                <div>Vie</div>
                <div>Sáb</div>
                <div>Dom</div>
              </div>

              {/* Days Grid (Celdas compactas 36px x 36px) */}
              <div className="grid grid-cols-7 gap-1.5 justify-items-center">
                {/* Empty slots for month start alignment */}
                {Array.from({ length: monthData.startDayOfWeek }).map((_, index) => (
                  <div key={`empty-${index}`} className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] rounded-lg bg-transparent" />
                ))}

                {/* Actual Month Days */}
                {monthData.days.map((day) => {
                  const selected = isSelected(day.dateStr);

                  return (
                    <button
                      key={day.dateStr}
                      type="button"
                      onClick={() => handleDateClick(day.dateStr, day.isBooked)}
                      disabled={day.isBooked}
                      className={`w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] rounded-lg font-heading font-semibold text-[13px] flex items-center justify-center transition-all relative group ${
                        day.isBooked
                          ? "bg-[#16241C] text-[#A8B0AB]/40 border border-[#2A3A30] cursor-not-allowed line-through"
                          : selected
                          ? "bg-[#F5A623] text-[#0F1B14] border-2 border-[#F5A623] font-bold"
                          : "bg-[#16241C] text-white border border-[#2A3A30] hover:border-[#F5A623] hover:text-[#F5A623]"
                      }`}
                    >
                      <span>{day.dayNumber}</span>
                    </button>
                  );
                })}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export interface Cabin {
  id: string;
  name: string;
  tagline: string;
  description: string;
  pricePerNight: number; // en CLP
  capacity: number; // capacidad máxima de huéspedes
  bedrooms: number;
  bathrooms: number;
  image: string; // REEMPLAZAR CON FOTO REAL DEL CLIENTE
  featured?: boolean;
  amenities: string[];
}

export const CABINS_DATA: Cabin[] = [
  {
    id: "vista-volcan",
    name: "Cabaña Vista Volcán",
    tagline: "Vistas panorámicas & Tinaja Privada",
    description: "Cabaña de arquitectura moderna integrada al entorno natural. Cuenta con amplios ventanales orientados al volcán, tinaja de agua caliente exclusiva en la terraza y estufa a leña.",
    pricePerNight: 95000,
    capacity: 4,
    bedrooms: 2,
    bathrooms: 1,
    /* REEMPLAZAR CON FOTO REAL DEL CLIENTE: public/images/vista-volcan.jpg */
    image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    amenities: ["Tinaja Caliente", "Wifi Starlink", "Parrilla Quincho", "Calefacción a Leña", "Estacionamiento"],
  },
  {
    id: "bosque-nativo",
    name: "Cabaña Bosque Nativo",
    tagline: "Inmersión total en la naturaleza",
    description: "Rodeada de hualles y coigües centenarios. Diseñada para un descanso profundo en pareja o familia pequeña, con terraza privada suspendida sobre la vegetación.",
    pricePerNight: 85000,
    capacity: 2,
    bedrooms: 1,
    bathrooms: 1,
    /* REEMPLAZAR CON FOTO REAL DEL CLIENTE: public/images/bosque-nativo.jpg */
    image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    amenities: ["Wifi Starlink", "Cama King", "Cafetera Nespresso", "Cocina Equipada", "Bosque Privado"],
  },
  {
    id: "refugio-alpino",
    name: "Cabaña Refugio Alpino",
    tagline: "Espaciosa, ideal para familias grandes",
    description: "Gran refugio de dos niveles con acabados en madera nativa. Espacios amplios, quincho privado cerrado y jacuzzi hidromasaje interior.",
    pricePerNight: 135000,
    capacity: 8,
    bedrooms: 3,
    bathrooms: 2,
    /* REEMPLAZAR CON FOTO REAL DEL CLIENTE: public/images/refugio-alpino.jpg */
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    amenities: ["Tinaja Caliente", "Quincho Cerrado", "Wifi Starlink", "Smart TV 55\"", "Estacionamiento 3 Autos"],
  },
];

// Fechas reservadas / ocupadas mock por cabaña (formato YYYY-MM-DD)
export const BOOKED_DATES_BY_CABIN: Record<string, string[]> = {
  "vista-volcan": [
    "2026-08-04", "2026-08-05", "2026-08-06",
    "2026-08-14", "2026-08-15", "2026-08-16",
    "2026-08-22", "2026-08-23",
  ],
  "bosque-nativo": [
    "2026-08-01", "2026-08-02",
    "2026-08-10", "2026-08-11", "2026-08-12",
    "2026-08-28", "2026-08-29",
  ],
  "refugio-alpino": [
    "2026-08-07", "2026-08-08", "2026-08-09",
    "2026-08-20", "2026-08-21", "2026-08-22",
  ],
};

export const BUSINESS_INFO = {
  name: "Refugio del Bosque",
  tagline: "Cabañas de Montaña & Tinajas Calientes",
  location: "Pucón, Región de la Araucanía, Chile",
  whatsappNumber: "+56912345678",
  whatsappMessage: "¡Hola! Quiero más información sobre la disponibilidad de las cabañas 🏡",
  instagram: "@refugiodelbosque.cl",
  facebook: "RefugioDelBosquePucon",
  email: "reservas@refugiodelbosque.cl",
  phone: "+56 9 1234 5678",
};

export interface ExtraService {
  id: string;
  name: string;
  pricePerStay: number;
  description: string;
}

export const EXTRA_SERVICES: ExtraService[] = [
  {
    id: "tinaja-ilimitada",
    name: "Tinaja Caliente de Madera (Sesión extra)",
    pricePerStay: 25000,
    description: "Preparación de la tinaja a leña a la hora acordada",
  },
  {
    id: "desayuno-campestre",
    name: "Desayuno Campestre en Cabaña",
    pricePerStay: 18000,
    description: "Pan amasado, mermeladas artesanales, quesos sureños y café recién molido",
  },
  {
    id: "set-parrilla",
    name: "Set Premium Asado / Quincho",
    pricePerStay: 20000,
    description: "Carbón, leña seca de secadero y utensilios profesionales",
  },
];


export interface Cabin {
  id: string;
  name: string;
  tagline: string;
  description: string;
  pricePerNight: number; // in CLP (Chilean Pesos)
  capacity: number; // max guests
  bedrooms: number;
  bathrooms: number;
  image: string;
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
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    amenities: ["Tinaja Caliente", "Quincho Cerrado", "Wifi Starlink", "Smart TV 55\"", "Estacionamiento 3 Autos"],
  },
];

export const BUSINESS_INFO = {
  name: "Refugio del Bosque",
  tagline: "Cabañas de Montaña & Tinajas Calientes",
  location: "Pucón, Región de la Araucanía, Chile",
  whatsappNumber: "+56912345678",
  whatsappMessage: "Hola, me gustaría reservar en Cabañas Refugio del Bosque.",
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

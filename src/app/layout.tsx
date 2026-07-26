import type { Metadata } from "next";
import { Fredoka, Inter } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cabañas Refugio del Bosque | Pucón, Chile",
  description: "Arriendo de cabañas de montaña con tinaja caliente, vistas panorámicas al bosque nativo y volcán en Pucón. Reserva tu escapada ideal.",
  keywords: ["cabañas pucón", "tinaja caliente", "arriendo cabañas chile", "refugio del bosque", "alojamiento pucón"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${fredoka.variable} ${inter.variable} dark scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="bg-[#0D0D0D] text-[#F0F0F0] font-sans antialiased selection:bg-[#F5A623] selection:text-black"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

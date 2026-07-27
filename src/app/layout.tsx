import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Refugio del Bosque — Cabañas en Pucón",
  description:
    "Arriendo de cabañas exclusivas en Pucón con tinaja caliente a leña, entorno de bosque nativo y máxima privacidad.",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${manrope.variable} scroll-smooth`} suppressHydrationWarning>
      <body
        className="bg-[#0F1B14] text-[#FFFFFF] font-sans antialiased selection:bg-[#F5A623] selection:text-[#0F1B14]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

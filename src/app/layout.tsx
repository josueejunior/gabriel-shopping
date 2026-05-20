import type { Metadata } from "next";
import { Exo_2, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const exo = Exo_2({
  variable: "--font-exo",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Gabriel Shopping | Beleza & Suplementos BHC",
  description:
    "Catálogo Gabriel Shopping — produtos BHC de beleza, skincare e suplementos. Peça pelo WhatsApp ou entre nos grupos de ofertas.",
  openGraph: {
    title: "Gabriel Shopping",
    description: "Beleza & Suplementos · Atendimento via WhatsApp",
    images: ["/logo/gabriel-shopping.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${exo.variable} scroll-smooth`}>
      <body className="min-h-screen bg-black font-sans text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}

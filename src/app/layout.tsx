import type { Metadata } from "next";
import { Exo_2, Inter } from "next/font/google";
import { siteUrl } from "@/config/site";
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
  metadataBase: new URL(siteUrl),
  title: "Gabriel Shopping | Beleza & Suplementos BHC",
  description:
    "Catálogo Gabriel Shopping — produtos BHC de beleza e suplementos. Entre no grupo do WhatsApp para ver ofertas e novidades.",
  openGraph: {
    title: "Gabriel Shopping",
    description: "Beleza & Suplementos · Ofertas no grupo do WhatsApp",
    url: siteUrl,
    images: ["/logo/gabriel-shopping.jpeg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
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

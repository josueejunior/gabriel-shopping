/**
 * Links dos botões — substitua pelos links reais do WhatsApp quando receber.
 * Formato: https://wa.me/55XXXXXXXXXXX ou link de grupo https://chat.whatsapp.com/...
 */
export const whatsappLinks = {
  principal:
    process.env.NEXT_PUBLIC_WHATSAPP_PRINCIPAL ??
    "https://wa.me/5511999999999?text=Olá! Vim pelo site Gabriel Shopping.",
  grupo1:
    process.env.NEXT_PUBLIC_WHATSAPP_GRUPO_1 ??
    "https://chat.whatsapp.com/SEU_LINK_GRUPO_1",
  grupo2:
    process.env.NEXT_PUBLIC_WHATSAPP_GRUPO_2 ??
    "https://chat.whatsapp.com/SEU_LINK_GRUPO_2",
} as const;

export type ProductCategory = "beleza" | "suplementos";

export type Product = {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  category: ProductCategory;
  highlights: string[];
};

export const products: Product[] = [
  {
    id: "serum-facial",
    name: "Sérum Facial BHC",
    subtitle: "Rosa mosqueta · Ácido hialurônico · 30 ml",
    image: "/products/serum-facial.jpeg",
    category: "beleza",
    highlights: ["Hidratação intensa", "Textura leve", "Uso diário"],
  },
  {
    id: "tonico-capilar",
    name: "Tônico Capilar BHC",
    subtitle: "Cuidado capilar · 60 ml",
    image: "/products/tonico-capilar.jpeg",
    category: "beleza",
    highlights: ["Spray prático", "Rotina simples", "Linha BHC"],
  },
  {
    id: "bum-bum-beauty",
    name: "Bum Bum Beauty",
    subtitle: "Creme firmador · Redutor de celulites e estrias · 200 g",
    image: "/products/bum-bum-beauty.jpeg",
    category: "beleza",
    highlights: ["Firmeza", "Textura cremosa", "Uso corporal"],
  },
  {
    id: "night-gummies",
    name: "Night Gummies BHC",
    subtitle: "Suplemento em goma · Maracujá · 30 unidades",
    image: "/products/night-gummies.jpeg",
    category: "suplementos",
    highlights: ["Sem glúten", "Com pectina", "Vegano"],
  },
  {
    id: "silicone-em-po",
    name: "Silicone em Pó #Modo Turbinada",
    subtitle: "Termogênico · Creatina · Pré-treino · Morango · 225 g",
    image: "/products/silicone-em-po.jpeg",
    category: "suplementos",
    highlights: ["Pré-treino", "Sabor morango", "Fórmula completa"],
  },
  {
    id: "power-up-3x",
    name: "BHC Power Up 3X",
    subtitle: "Creatina · Colágeno · Silício · Maçã verde · 216 g",
    image: "/products/power-up-3x.jpeg",
    category: "suplementos",
    highlights: ["3 ativos", "Sabor maçã verde", "Pó solúvel"],
  },
];

export const categoryLabels: Record<ProductCategory, string> = {
  beleza: "Beleza & Skincare",
  suplementos: "Suplementos & Performance",
};

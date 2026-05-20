import Image from "next/image";
import type { Product } from "@/config/site";
import { WhatsAppButton } from "./WhatsAppButton";

type ProductCardProps = {
  product: Product;
  whatsappHref: string;
};

export function ProductCard({ product, whatsappHref }: ProductCardProps) {
  const message = encodeURIComponent(
    `Olá! Tenho interesse no produto: ${product.name}`,
  );
  const href = whatsappHref.includes("?")
    ? `${whatsappHref}&text=${message}`
    : `${whatsappHref}?text=${message}`;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-amber-500/15 bg-gradient-to-b from-zinc-900/90 to-black shadow-[inset_0_1px_0_rgba(212,175,55,0.08)] transition-all duration-300 hover:border-pink-500/40 hover:shadow-[0_0_40px_rgba(226,35,142,0.12)]">
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-6">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,140,0,0.08)_0%,transparent_70%)]" />
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="font-display text-lg font-bold tracking-wide text-amber-100">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-zinc-400">{product.subtitle}</p>
        </div>
        <ul className="flex flex-wrap gap-2">
          {product.highlights.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-pink-500/25 bg-pink-500/10 px-2.5 py-0.5 text-xs text-pink-200/90"
            >
              {tag}
            </li>
          ))}
        </ul>
        <WhatsAppButton href={href} variant="outline" className="mt-auto w-full">
          Pedir no WhatsApp
        </WhatsAppButton>
      </div>
    </article>
  );
}

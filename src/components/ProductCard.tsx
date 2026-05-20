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
    <article className="group relative flex flex-row overflow-hidden rounded-2xl border border-amber-500/15 bg-gradient-to-r from-zinc-900/90 to-black shadow-[inset_0_1px_0_rgba(212,175,55,0.08)] transition-all duration-300 sm:flex-col sm:bg-gradient-to-b sm:hover:border-pink-500/40 sm:hover:shadow-[0_0_40px_rgba(226,35,142,0.12)]">
      <div className="relative h-36 w-36 shrink-0 overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-3 sm:aspect-square sm:h-auto sm:w-full sm:p-6">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,140,0,0.08)_0%,transparent_70%)]" />
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-2 transition-transform duration-500 sm:p-4 sm:group-hover:scale-105"
          sizes="(max-width: 640px) 144px, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-2.5 p-4 sm:gap-3 sm:p-5">
        <div>
          <h3 className="font-display text-base font-bold leading-snug tracking-wide text-amber-100 sm:text-lg">
            {product.name}
          </h3>
          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-zinc-400 sm:line-clamp-none sm:text-sm">
            {product.subtitle}
          </p>
        </div>
        <ul className="flex flex-wrap gap-1.5 sm:gap-2">
          {product.highlights.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-pink-500/25 bg-pink-500/10 px-2 py-0.5 text-[10px] text-pink-200/90 sm:px-2.5 sm:text-xs"
            >
              {tag}
            </li>
          ))}
        </ul>
        <WhatsAppButton href={href} variant="outline" className="mt-auto">
          Pedir no WhatsApp
        </WhatsAppButton>
      </div>
    </article>
  );
}

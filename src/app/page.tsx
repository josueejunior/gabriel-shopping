import Image from "next/image";
import { ProductCard } from "@/components/ProductCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  categoryLabels,
  products,
  whatsappLinks,
  type ProductCategory,
} from "@/config/site";

const categories: ProductCategory[] = ["beleza", "suplementos"];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,140,0,0.15),transparent)]" />
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(212,175,55,0.4)_1px,transparent_1px)] [background-size:24px_24px]" />

      <header className="sticky top-0 z-20 border-b border-amber-500/10 bg-black/85 backdrop-blur-md supports-[backdrop-filter]:bg-black/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
          <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-amber-500/40 sm:h-14 sm:w-14">
              <Image
                src="/logo/gabriel-shopping.jpeg"
                alt="Gabriel Shopping"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="min-w-0">
              <p className="font-display truncate text-xs font-bold tracking-[0.15em] text-amber-400 sm:text-base sm:tracking-[0.2em]">
                GABRIEL
              </p>
              <p className="font-display truncate text-[10px] tracking-[0.25em] text-amber-200/80 sm:text-sm sm:tracking-[0.35em]">
                SHOPPING
              </p>
            </div>
          </div>
          <WhatsAppButton
            href={whatsappLinks.principal}
            className="!min-h-10 !w-auto shrink-0 !px-4 !py-2 text-xs sm:!min-h-0 sm:!px-6 sm:!py-3 sm:text-sm"
          >
            <span className="hidden min-[400px]:inline">Falar conosco</span>
            <span className="min-[400px]:hidden">WhatsApp</span>
          </WhatsAppButton>
        </div>
      </header>

      <main className="relative z-10 pb-28 sm:pb-20">
        <section className="mx-auto max-w-6xl px-4 pb-10 pt-8 sm:px-6 sm:pb-16 sm:pt-20">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <p className="mb-3 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 text-[10px] font-medium uppercase leading-snug tracking-wide text-amber-300 sm:px-4 sm:text-xs sm:tracking-widest">
                <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400 shadow-[0_0_8px_#ff8c00]" />
                Linha BHC · Beleza & Suplementos
              </p>
              <h1 className="font-display text-[1.65rem] font-bold leading-[1.15] text-white min-[400px]:text-3xl sm:text-5xl lg:text-6xl">
                Seu catálogo{" "}
                <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                  premium
                </span>{" "}
                em um clique
              </h1>
              <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:mt-6 sm:max-w-lg sm:text-lg">
                Produtos selecionados de beleza e performance. Peça direto no
                WhatsApp ou entre nos grupos para ofertas e novidades.
              </p>
              <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-3">
                <WhatsAppButton href={whatsappLinks.principal}>
                  Chamar no WhatsApp
                </WhatsAppButton>
                <WhatsAppButton href={whatsappLinks.grupo1} variant="group">
                  Grupo de ofertas 1
                </WhatsAppButton>
                <WhatsAppButton href={whatsappLinks.grupo2} variant="group">
                  Grupo de ofertas 2
                </WhatsAppButton>
              </div>
            </div>

            <div className="order-1 flex justify-center lg:order-2">
              <div className="relative w-full max-w-[220px] sm:max-w-[340px] lg:max-w-[400px]">
                <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-pink-500/20 blur-3xl sm:-inset-8" />
                <div className="relative aspect-square w-full overflow-hidden rounded-full ring-2 ring-amber-600/30 ring-offset-2 ring-offset-black sm:ring-4 sm:ring-offset-4">
                  <Image
                    src="/logo/gabriel-shopping.jpeg"
                    alt="Logo Gabriel Shopping"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 220px, 400px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-amber-500/10 bg-zinc-950/80 py-6 sm:py-10">
          <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-amber-500/15 px-2 sm:px-6">
            {[
              { value: "BHC", label: "Marca parceira" },
              { value: "6+", label: "Produtos" },
              { value: "100%", label: "WhatsApp" },
            ].map((item) => (
              <div key={item.label} className="px-2 py-1 text-center sm:px-4">
                <p className="font-display text-lg font-bold text-amber-400 sm:text-2xl">
                  {item.value}
                </p>
                <p className="mt-0.5 text-[10px] leading-tight text-zinc-500 sm:text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <nav
          aria-label="Categorias"
          className="sticky top-[57px] z-10 border-b border-amber-500/10 bg-black/90 backdrop-blur-md sm:top-[73px]"
        >
          <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 [-ms-overflow-style:none] [scrollbar-width:none] sm:px-6 [&::-webkit-scrollbar]:hidden">
            {categories.map((category) => (
              <a
                key={category}
                href={`#${category}`}
                className="shrink-0 rounded-full border border-amber-500/25 bg-amber-500/5 px-4 py-2 text-xs font-semibold text-amber-200 transition-colors active:bg-amber-500/20 sm:text-sm"
              >
                {categoryLabels[category]}
              </a>
            ))}
          </div>
        </nav>

        {categories.map((category) => {
          const items = products.filter((p) => p.category === category);
          return (
            <section
              key={category}
              id={category}
              className="mx-auto max-w-6xl scroll-mt-32 px-4 py-10 sm:scroll-mt-24 sm:px-6 sm:py-16"
            >
              <div className="mb-6 sm:mb-10">
                <h2 className="font-display text-xl font-bold text-amber-100 sm:text-3xl">
                  {categoryLabels[category]}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  Toque em &quot;Pedir no WhatsApp&quot; — a mensagem já vai com o
                  nome do produto.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                {items.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    whatsappHref={whatsappLinks.principal}
                  />
                ))}
              </div>
            </section>
          );
        })}

        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 p-6 text-center sm:rounded-3xl sm:p-12">
            <h2 className="font-display text-xl font-bold text-white sm:text-3xl">
              Entre no grupo e não perca promoção
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-zinc-400 sm:mt-4 sm:text-base">
              Ofertas e novidades direto no seu WhatsApp.
            </p>
            <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:justify-center sm:gap-3">
              <WhatsAppButton href={whatsappLinks.grupo1} variant="group">
                Entrar no grupo 1
              </WhatsAppButton>
              <WhatsAppButton href={whatsappLinks.grupo2} variant="group">
                Entrar no grupo 2
              </WhatsAppButton>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-amber-500/10 bg-gradient-to-b from-zinc-950 to-black px-4 pb-safe pt-10 text-center sm:px-6 sm:pt-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4">
          <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-amber-500/30">
            <Image
              src="/logo/gabriel-shopping.jpeg"
              alt=""
              fill
              className="object-cover"
              sizes="56px"
            />
          </div>
          <div>
            <p className="font-display text-base font-bold tracking-[0.2em] text-amber-400 sm:text-lg">
              GABRIEL SHOPPING
            </p>
            <p className="mt-2 text-xs leading-relaxed text-zinc-500 sm:text-sm">
              Beleza & Suplementos · Linha BHC
            </p>
          </div>
          <div className="flex w-full max-w-xs flex-col gap-2 sm:max-w-none sm:flex-row sm:justify-center sm:gap-3">
            <WhatsAppButton
              href={whatsappLinks.principal}
              className="!text-xs sm:!text-sm"
            >
              Atendimento
            </WhatsAppButton>
          </div>
          <p className="border-t border-zinc-800/80 pt-6 text-[11px] text-zinc-600 sm:text-sm">
            © {new Date().getFullYear()} Gabriel Shopping · Todos os direitos
            reservados
          </p>
        </div>
      </footer>

      <a
        href={whatsappLinks.principal}
        target="_blank"
        rel="noopener noreferrer"
        className="bottom-safe fixed right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white shadow-[0_4px_24px_rgba(34,197,94,0.45)] transition-transform active:scale-95 sm:right-6 sm:hidden"
        aria-label="Abrir WhatsApp"
      >
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}

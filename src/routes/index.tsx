import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ListingCard } from "@/components/ListingCard";
import { SupportChat } from "@/components/SupportChat";
import { categories, listings } from "@/data/listings";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "staybnb — Estadias únicas de anfitriões locais" },
      {
        name: "description",
        content:
          "Encontra lofts, cabanas e villas para alugar por noite. Pesquisa por destino, datas e hóspedes, com pagamento seguro e reviews verificadas.",
      },
      { property: "og:title", content: "staybnb — Estadias únicas de anfitriões locais" },
      {
        property: "og:description",
        content: "Marketplace de alojamento de curta duração: pesquisa, reserva e paga em segurança.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const faqs = [
  {
    q: "Como é que a plataforma garante a segurança do meu pagamento?",
    a: "O valor é cobrado no momento da reserva mas só é transferido para o anfitrião 24 horas após um check-in bem-sucedido.",
  },
  {
    q: "O que acontece se o anfitrião cancelar a minha reserva?",
    a: "Recebes um reembolso integral e automático, e a nossa equipa ajuda-te a encontrar um alojamento alternativo de valor semelhante.",
  },
  {
    q: "Qualquer pessoa pode ser anfitrião?",
    a: "Sim, desde que cumpras os requisitos legais da tua zona e passes a verificação de identidade. Podes alugar desde um quarto até uma moradia inteira.",
  },
  {
    q: "Como funcionam as taxas de serviço?",
    a: "Os hóspedes pagam cerca de 14% do subtotal da reserva. Os anfitriões pagam 3% pelo processamento do pagamento.",
  },
];

function Index() {
  const [where, setWhere] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [category, setCategory] = useState("Todos");
  const [maxPrice, setMaxPrice] = useState(450);

  const results = useMemo(() => {
    const q = where.trim().toLowerCase();
    return listings.filter((l) => {
      const matchesWhere =
        !q ||
        l.location.toLowerCase().includes(q) ||
        l.country.toLowerCase().includes(q) ||
        l.title.toLowerCase().includes(q);
      const matchesCategory = category === "Todos" || l.category === category;
      return matchesWhere && matchesCategory && l.guests >= guests && l.pricePerNight <= maxPrice;
    });
  }, [where, category, guests, maxPrice]);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader
        where={where}
        onWhereChange={setWhere}
        checkIn={checkIn}
        onCheckInChange={setCheckIn}
        checkOut={checkOut}
        onCheckOutChange={setCheckOut}
        guests={guests}
        onGuestsChange={setGuests}
      />

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-wrap items-center gap-2 border-b border-border py-5">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                category === c
                  ? "border-foreground bg-foreground text-background"
                  : "border-border hover:bg-secondary"
              }`}
            >
              {c}
            </button>
          ))}
          <label className="ml-auto flex items-center gap-3 text-sm text-muted-foreground">
            Até {maxPrice} € / noite
            <input
              type="range"
              min={50}
              max={450}
              step={10}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="accent-[var(--primary)]"
            />
          </label>
        </div>

        <section className="py-8">
          <p className="mb-6 text-sm text-muted-foreground">
            {results.length} {results.length === 1 ? "estadia disponível" : "estadias disponíveis"}
            {checkIn && checkOut ? ` entre ${checkIn} e ${checkOut}` : ""}
          </p>
          {results.length === 0 ? (
            <p className="rounded-2xl border border-border p-10 text-center text-muted-foreground">
              Sem resultados para esta pesquisa. Experimenta alargar o preço ou mudar de destino.
            </p>
          ) : (
            <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {results.map((l) => (
                <ListingCard key={l.id} listing={l} />
              ))}
            </div>
          )}
        </section>

        <section className="border-t border-border py-12">
          <h2 className="text-2xl font-semibold tracking-tight">Perguntas frequentes</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-2xl border border-border p-5">
                <p className="font-medium">{f.q}</p>
                <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <SiteFooter />
    </div>
  );
}

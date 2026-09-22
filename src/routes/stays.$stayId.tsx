import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Share, Star } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getListing } from "@/data/listings";

export const Route = createFileRoute("/stays/$stayId")({
  loader: ({ params }) => {
    const listing = getListing(params.stayId);
    if (!listing) throw notFound();
    return listing;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — ${loaderData.location} | staybnb` },
          { name: "description", content: loaderData.description },
          { property: "og:title", content: `${loaderData.title} — ${loaderData.location}` },
          { property: "og:description", content: loaderData.description },
          { property: "og:type", content: "website" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [],
  }),
  errorComponent: () => (
    <div className="grid min-h-screen place-items-center px-4 text-center">
      <p className="text-muted-foreground">Não foi possível carregar esta estadia.</p>
    </div>
  ),
  notFoundComponent: () => (
    <div className="grid min-h-screen place-items-center px-4 text-center">
      <div>
        <p className="text-lg font-semibold">Estadia não encontrada</p>
        <Link to="/" className="mt-3 inline-block text-primary underline underline-offset-4">
          Voltar à pesquisa
        </Link>
      </div>
    </div>
  ),
  component: StayPage,
});

function StayPage() {
  const listing = Route.useLoaderData();
  const [nights, setNights] = useState(3);
  const [guests, setGuests] = useState(2);
  const [booked, setBooked] = useState(false);

  const totals = useMemo(() => {
    const subtotal = listing.pricePerNight * nights;
    const serviceFee = Math.round(subtotal * 0.14);
    const cleaning = 35;
    return { subtotal, serviceFee, cleaning, total: subtotal + serviceFee + cleaning };
  }, [listing.pricePerNight, nights]);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader compact />
      <main className="mx-auto max-w-6xl px-4 py-8 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">{listing.title}</h1>
            <p className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1 text-foreground">
                <Star className="h-3.5 w-3.5 fill-current text-primary" />
                {listing.rating.toFixed(2)}
              </span>
              · {listing.reviews} avaliações · {listing.location}, {listing.country}
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-full px-3 py-2 text-sm underline underline-offset-4 hover:bg-secondary">
            <Share className="h-4 w-4" /> Partilhar
          </button>
        </div>

        <img
          src={listing.image}
          alt={listing.title}
          width={1024}
          height={768}
          className="mt-6 aspect-[16/9] w-full rounded-3xl object-cover"
        />

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_380px]">
          <div>
            <p className="text-lg font-semibold">
              Espaço inteiro, anfitrião {listing.host.name}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {listing.guests} hóspedes · {listing.bedrooms} quartos · {listing.beds} camas ·{" "}
              {listing.baths} casas de banho
            </p>
            <p className="mt-6 leading-relaxed text-muted-foreground">{listing.description}</p>

            <h2 className="mt-8 text-lg font-semibold">O que este espaço oferece</h2>
            <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              {listing.amenities.map((a) => (
                <li key={a} className="rounded-xl border border-border px-4 py-3">
                  {a}
                </li>
              ))}
            </ul>

            <h2 className="mt-8 text-lg font-semibold">Avaliações</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              As avaliações só ficam visíveis quando hóspede e anfitrião submetem a sua — para manter
              opiniões honestas dos dois lados.
            </p>
          </div>

          <aside className="h-fit rounded-3xl border border-border p-6 shadow-[var(--shadow-card)] lg:sticky lg:top-24">
            <p className="text-xl">
              <span className="font-semibold">{listing.pricePerNight} €</span>{" "}
              <span className="text-sm text-muted-foreground">por noite</span>
            </p>

            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <label className="rounded-xl border border-border px-3 py-2">
                <span className="block text-[11px] uppercase tracking-wide text-muted-foreground">
                  Noites
                </span>
                <input
                  type="number"
                  min={1}
                  max={30}
                  value={nights}
                  onChange={(e) => setNights(Math.max(1, Number(e.target.value) || 1))}
                  className="w-full bg-transparent outline-none"
                />
              </label>
              <label className="rounded-xl border border-border px-3 py-2">
                <span className="block text-[11px] uppercase tracking-wide text-muted-foreground">
                  Hóspedes
                </span>
                <input
                  type="number"
                  min={1}
                  max={listing.guests}
                  value={guests}
                  onChange={(e) => setGuests(Math.max(1, Number(e.target.value) || 1))}
                  className="w-full bg-transparent outline-none"
                />
              </label>
            </div>

            <button
              onClick={() => setBooked(true)}
              className="mt-4 w-full rounded-xl bg-primary py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              Reservar
            </button>

            {booked && (
              <p className="mt-3 rounded-xl bg-accent px-3 py-2 text-sm text-accent-foreground">
                Datas bloqueadas durante 10 minutos enquanto concluis o pagamento.
              </p>
            )}

            <dl className="mt-5 space-y-2 border-t border-border pt-5 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">
                  {listing.pricePerNight} € × {nights} noites
                </dt>
                <dd>{totals.subtotal} €</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Taxa de limpeza</dt>
                <dd>{totals.cleaning} €</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Taxa de serviço (14%)</dt>
                <dd>{totals.serviceFee} €</dd>
              </div>
              <div className="flex justify-between border-t border-border pt-3 font-semibold">
                <dt>Total</dt>
                <dd>{totals.total} €</dd>
              </div>
            </dl>
            <p className="mt-4 text-xs text-muted-foreground">
              Ainda não vais ser cobrado. O pagamento fica retido até 24h após o check-in.
            </p>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

import { Link } from "@tanstack/react-router";
import { Heart, Star } from "lucide-react";
import type { Listing } from "@/data/listings";

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <Link
      to="/stays/$stayId"
      params={{ stayId: listing.id }}
      className="group block"
    >
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={listing.image}
          alt={listing.title}
          loading="lazy"
          width={1024}
          height={768}
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-background/70 text-foreground backdrop-blur">
          <Heart className="h-4 w-4" />
        </span>
        {listing.host.superhost && (
          <span className="absolute left-3 top-3 rounded-full bg-background px-2.5 py-1 text-xs font-semibold shadow-[var(--shadow-search)]">
            Superanfitrião
          </span>
        )}
      </div>
      <div className="mt-3 space-y-0.5">
        <div className="flex items-start justify-between gap-2">
          <p className="font-semibold leading-tight">{listing.location}</p>
          <span className="flex shrink-0 items-center gap-1 text-sm">
            <Star className="h-3.5 w-3.5 fill-current text-primary" />
            {listing.rating.toFixed(2)}
          </span>
        </div>
        <p className="line-clamp-1 text-sm text-muted-foreground">{listing.title}</p>
        <p className="text-sm text-muted-foreground">Até {listing.guests} hóspedes</p>
        <p className="pt-1 text-sm">
          <span className="font-semibold">{listing.pricePerNight} €</span> por noite
        </p>
      </div>
    </Link>
  );
}

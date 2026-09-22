import { Link } from "@tanstack/react-router";
import { Globe, Menu, Search, UserCircle } from "lucide-react";

type Props = {
  where?: string;
  onWhereChange?: (v: string) => void;
  checkIn?: string;
  onCheckInChange?: (v: string) => void;
  checkOut?: string;
  onCheckOutChange?: (v: string) => void;
  guests?: number;
  onGuestsChange?: (v: number) => void;
  compact?: boolean;
};

export function SiteHeader({
  where = "",
  onWhereChange,
  checkIn = "",
  onCheckInChange,
  checkOut = "",
  onCheckOutChange,
  guests = 1,
  onGuestsChange,
  compact = false,
}: Props) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-4 px-4 py-3 md:px-8">
        <Link to="/" className="flex items-center gap-2 text-primary">
          <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden>
            <path d="M12 2c1.6 0 2.7.9 3.6 2.7l4.6 9.3c1 2 1.1 3.4.5 4.6-.7 1.2-2 1.9-3.5 1.9-1.6 0-3.2-.8-5.2-2.7-2 1.9-3.6 2.7-5.2 2.7-1.5 0-2.8-.7-3.5-1.9-.6-1.2-.5-2.6.5-4.6l4.6-9.3C9.3 2.9 10.4 2 12 2Zm0 2c-.7 0-1.2.4-1.8 1.6l-4.6 9.3c-.7 1.5-.8 2.3-.5 2.9.3.6.9.9 1.7.9 1.1 0 2.4-.7 4.1-2.4-1.4-1.6-2.2-3-2.2-4.3 0-1.9 1.4-3.2 3.3-3.2s3.3 1.3 3.3 3.2c0 1.3-.8 2.7-2.2 4.3 1.7 1.7 3 2.4 4.1 2.4.8 0 1.4-.3 1.7-.9.3-.6.2-1.4-.5-2.9l-4.6-9.3C13.2 4.4 12.7 4 12 4Zm0 6.6c-.8 0-1.3.5-1.3 1.3 0 .7.5 1.7 1.3 2.7.8-1 1.3-2 1.3-2.7 0-.8-.5-1.3-1.3-1.3Z" />
          </svg>
          <span className="hidden text-xl font-bold tracking-tight sm:inline">staybnb</span>
        </Link>

        {!compact ? (
          <div className="order-3 w-full md:order-none md:w-auto md:flex-1 md:px-6">
            <div className="mx-auto flex max-w-2xl flex-col divide-y divide-border rounded-3xl border border-border bg-card p-1 shadow-[var(--shadow-search)] sm:flex-row sm:items-center sm:divide-x sm:divide-y-0 sm:rounded-full">
              <label className="flex-1 px-4 py-2">
                <span className="block text-[11px] font-semibold uppercase tracking-wide">Onde</span>
                <input
                  value={where}
                  onChange={(e) => onWhereChange?.(e.target.value)}
                  placeholder="Procurar destino"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </label>
              <label className="px-4 py-2">
                <span className="block text-[11px] font-semibold uppercase tracking-wide">Check-in</span>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => onCheckInChange?.(e.target.value)}
                  className="w-full bg-transparent text-sm outline-none"
                />
              </label>
              <label className="px-4 py-2">
                <span className="block text-[11px] font-semibold uppercase tracking-wide">Check-out</span>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => onCheckOutChange?.(e.target.value)}
                  className="w-full bg-transparent text-sm outline-none"
                />
              </label>
              <label className="flex items-center gap-2 px-4 py-2">
                <span className="flex-1">
                  <span className="block text-[11px] font-semibold uppercase tracking-wide">Quem</span>
                  <input
                    type="number"
                    min={1}
                    max={16}
                    value={guests}
                    onChange={(e) => onGuestsChange?.(Number(e.target.value) || 1)}
                    className="w-16 bg-transparent text-sm outline-none"
                  />
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Search className="h-4 w-4" />
                </span>
              </label>
            </div>
          </div>
        ) : (
          <div className="flex-1" />
        )}

        <div className="ml-auto flex items-center gap-2">
          <span className="hidden rounded-full px-4 py-2 text-sm font-medium hover:bg-secondary md:inline">
            Seja anfitrião
          </span>
          <span className="grid h-10 w-10 place-items-center rounded-full hover:bg-secondary">
            <Globe className="h-4 w-4" />
          </span>
          <button className="flex items-center gap-2 rounded-full border border-border px-3 py-2 transition-shadow hover:shadow-[var(--shadow-search)]">
            <Menu className="h-4 w-4" />
            <UserCircle className="h-6 w-6 text-muted-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CalInlineEmbed } from "@/components/CalInlineEmbed";

export const Route = createFileRoute("/agenda")({
  head: () => ({
    meta: [
      { title: "Agendar demo — staybnb" },
      {
        name: "description",
        content:
          "Marca uma demonstração do staybnb diretamente no site: escolhe o dia e a hora que te convêm e recebemos-te na chamada.",
      },
      { property: "og:title", content: "Agendar demo — staybnb" },
      {
        property: "og:description",
        content: "Escolhe o dia e a hora da tua demo do staybnb sem sair do site.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AgendaPage,
});

function AgendaPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader compact />

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 md:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Demo ao vivo
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            Agenda a tua demo do staybnb
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Escolhe o dia e a hora que te convêm. Recebes a confirmação e o link da
            chamada logo após a marcação — sem sair do site.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-search)]">
          <div className="h-[720px] w-full">
            <CalInlineEmbed />
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

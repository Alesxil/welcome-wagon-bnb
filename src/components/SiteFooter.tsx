export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-secondary/50">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 text-sm md:grid-cols-3 md:px-8">
        <div>
          <p className="font-semibold">Apoio</p>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li>Centro de ajuda 24/7</li>
            <li>Opções de cancelamento</li>
            <li>Denunciar um problema</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Anfitriões</p>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li>Coloca o teu espaço</li>
            <li>Proteção do anfitrião</li>
            <li>Recursos e comunidade</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Falar connosco</p>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li>
              <Link
                className="underline underline-offset-4 hover:text-foreground"
                to="/agenda"
              >
                Agendar uma demo
              </Link>
            </li>
            <li>Imprensa e parcerias</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border px-4 py-6 text-center text-xs text-muted-foreground md:px-8">
        © 2026 staybnb · Projeto MVP · Pagamentos retidos até 24h após o check-in
      </div>
    </footer>
  );
}

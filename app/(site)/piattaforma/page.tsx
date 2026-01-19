import Link from "next/link"
import { ArrowRight, Layers } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { TrustedBy } from "@/components/trusted-by"

export const metadata: Metadata = {
  title: "Piattaforma",
  description: "Analisi SERP, scraping competitor, pattern detection e generazione contenuti. Cosa fa Verbalist e come lo fa.",
  alternates: {
    canonical: "/piattaforma",
  },
  openGraph: {
    title: "Piattaforma — Verbalist",
    description: "Analisi SERP, scraping competitor, pattern detection e generazione contenuti. Cosa fa Verbalist e come lo fa.",
  },
}

const funzionalita = [
  {
    slug: "analisi-serp",
    title: "Analisi SERP",
    description: "Vedi chi sta rankando per la tua keyword. Capisci perché sono in prima pagina.",
    cosa: "Prende i primi 10 risultati organici, filtra aggregatori e social, estrae tutti i metadata.",
    risultato: "Lista dei competitor con posizione, title, description e URL.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    slug: "scraping-competitor",
    title: "Scraping Competitor",
    description: "Scarica i contenuti dei competitor. Vedi struttura, argomenti e come sono organizzati.",
    cosa: "Estrae il contenuto di ogni pagina e lo converte in Markdown. Mantiene la gerarchia heading.",
    risultato: "Contenuto completo di ogni competitor pronto per l'analisi.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
  },
  {
    slug: "analisi-pattern",
    title: "Analisi Pattern",
    description: "Trova cosa hanno in comune i contenuti che rankano. Intent, struttura, segnali E-E-A-T.",
    cosa: "Analizza tutti i competitor per capire search intent, topic ricorrenti, struttura heading, word count medio.",
    risultato: "Report con i pattern vincenti e la struttura consigliata.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    slug: "generazione-contenuto",
    title: "Generazione Contenuto",
    description: "Scrive l'articolo basandosi sui pattern. Ottimizzato per SEO, AEO e GEO.",
    cosa: "Genera title, meta description, slug, outline strutturato, body e suggerimenti media.",
    risultato: "Contenuto completo pronto per pubblicare.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
]

export default function PiattaformaPage() {
  return (
    <>
      <SubPageHero
        icon={Layers}
        title="Piattaforma"
        description="Dall'analisi SERP alla generazione del contenuto. Tutto automatico."
      />

      <TrustedBy />

      <section className="border-t py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Grid Piattaforma */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {funzionalita.map((funz) => (
              <Card key={funz.slug} className="border border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-muted-foreground mb-4">
                    {funz.icon}
                  </div>
                  <CardTitle className="text-sm font-medium text-foreground">
                    {funz.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                    {funz.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-[13px] font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                      Cosa fa
                    </h3>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {funz.cosa}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[13px] font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                      Risultato
                    </h3>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {funz.risultato}
                    </p>
                  </div>
                  <Link
                    href={`/piattaforma/${funz.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors pt-2"
                  >
                    Scopri di più <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SubPageCTA />
    </>
  )
}

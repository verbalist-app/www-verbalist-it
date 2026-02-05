import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import {
  SerpAnalysisVisual,
  ScrapingVisual,
  PatternDetectionVisual,
  ContentGenerationVisual,
} from "@/components/product-visuals"
import { cn } from "@/lib/utils"

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
    detail: "Prende i primi 10 risultati organici, filtra aggregatori e social, estrae tutti i metadata.",
    visual: SerpAnalysisVisual,
  },
  {
    slug: "scraping-competitor",
    title: "Scraping Competitor",
    description: "Scarica i contenuti dei competitor. Vedi struttura, argomenti e come sono organizzati.",
    detail: "Estrae il contenuto di ogni pagina e lo converte in Markdown. Mantiene la gerarchia heading.",
    visual: ScrapingVisual,
  },
  {
    slug: "analisi-pattern",
    title: "Analisi Pattern",
    description: "Trova cosa hanno in comune i contenuti in prima pagina. Intent, struttura, segnali E-E-A-T.",
    detail: "Analizza tutti i competitor per capire search intent, topic ricorrenti, struttura heading, word count medio.",
    visual: PatternDetectionVisual,
  },
  {
    slug: "generazione-contenuto",
    title: "Generazione Contenuto",
    description: "Scrive l'articolo basandosi sui pattern. Ottimizzato per SEO, AEO e GEO.",
    detail: "Genera title, meta description, slug, outline strutturato, body e suggerimenti media.",
    visual: ContentGenerationVisual,
  },
]

export default function PiattaformaPage() {
  return (
    <>
      <SubPageHero
        label="Piattaforma"
        title="Dall'analisi SERP alla generazione del contenuto. Tutto automatico."
        description="Quattro passaggi. Dalla keyword al contenuto ottimizzato per SEO, AEO e GEO."
      />

      {funzionalita.map((funz, index) => {
        const Visual = funz.visual
        return (
          <section key={funz.slug} className="border-t py-16 md:py-24">
            <div className="max-w-6xl mx-auto px-6">
              <div className="grid gap-10 md:gap-16 md:grid-cols-2 items-center">
                {/* Text — always first on mobile, alternates on desktop */}
                <div className={cn(index % 2 === 1 && "md:order-2")}>
                  <span className="text-sm font-medium text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-4 text-2xl font-medium tracking-tight md:text-3xl">
                    {funz.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {funz.description}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {funz.detail}
                  </p>
                  <Link
                    href={`/piattaforma/${funz.slug}`}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
                  >
                    Scopri di più <ArrowRight className="size-4" />
                  </Link>
                </div>

                {/* Visual */}
                <div className="rounded-lg border border-border overflow-hidden">
                  <div className="aspect-[4/3]">
                    <Visual />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      <SubPageCTA />
    </>
  )
}

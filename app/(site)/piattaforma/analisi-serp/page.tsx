import { Search, Target, Eye, Layers } from "lucide-react"
import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { TrustedBy } from "@/components/trusted-by"
import { FeatureChecklist } from "@/components/feature-checklist"
import { HighlightBlock } from "@/components/highlight-block"
import { Testimonials } from "@/components/testimonials"

export const metadata: Metadata = {
  title: "Analisi SERP",
  description: "Prende i primi 10 risultati Google per la tua keyword. Vedi chi sta rankando e perché.",
  alternates: {
    canonical: "/piattaforma/analisi-serp",
  },
  openGraph: {
    title: "Analisi SERP — Verbalist",
    description: "Prende i primi 10 risultati Google per la tua keyword. Vedi chi sta rankando e perché.",
  },
}

const featureColumns = [
  {
    items: [
      "Top 10 risultati organici",
      "Title e meta description",
      "URL e struttura",
      "Posizione e ranking",
    ],
  },
  {
    items: [
      "Search intent detection",
      "Informational vs commercial",
      "SERP features presenti",
      "Featured snippet analysis",
    ],
  },
  {
    items: [
      "Word count per risultato",
      "Heading structure",
      "Topic coverage",
      "E-E-A-T signals",
    ],
  },
]

const testimonials = [
  {
    metric: "10 min",
    quote: "L'analisi che prima facevo in 2 ore con spreadsheet ora la faccio in 10 minuti. E con più dati.",
    author: "Marco P.",
    role: "SEO Specialist",
    company: "Agenzia Digital",
  },
  {
    metric: "Dati reali",
    quote: "Finalmente decisioni basate su dati concreti, non su opinioni. Vedo esattamente cosa funziona in SERP.",
    author: "Elena R.",
    role: "Content Strategist",
    company: "E-commerce",
  },
]

function SerpResultsIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-2">
        {[1, 2, 3, 4, 5].map((pos) => (
          <div key={pos} className="flex items-center gap-2 rounded-lg border bg-background p-2 shadow-sm">
            <span className="flex size-5 items-center justify-center rounded bg-foreground text-[10px] font-bold text-background">
              {pos}
            </span>
            <div className="flex-1">
              <div className="h-2 w-3/4 rounded bg-foreground/60" />
              <div className="mt-1 h-1.5 w-full rounded bg-muted-foreground/30" />
            </div>
            <span className="text-[10px] text-muted-foreground">1.2k</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function IntentIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-3">
        {[
          { label: "Informational", value: 65, active: true },
          { label: "Commercial", value: 20 },
          { label: "Transactional", value: 10 },
          { label: "Navigational", value: 5 },
        ].map((intent) => (
          <div key={intent.label} className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className={intent.active ? "font-medium" : "text-muted-foreground"}>
                {intent.label}
              </span>
              <span className="font-medium">{intent.value}%</span>
            </div>
            <div className="h-2.5 w-full rounded-full bg-muted">
              <div
                className={`h-full rounded-full ${intent.active ? "bg-foreground" : "bg-foreground/40"}`}
                style={{ width: `${intent.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function AnalisiSerpPage() {
  return (
    <>
      <SubPageHero
        icon={Search}
        title="Analisi SERP"
        description="Prende i primi 10 risultati Google per la tua keyword. Vedi chi sta rankando e perché."
      />

      <TrustedBy />

      <FeatureChecklist
        title="Tutti i dati SERP che servono"
        description="Analisi automatica dei top 10 risultati con metriche complete."
        columns={featureColumns}
      />

      <HighlightBlock
        icon={Eye}
        title="Top 10 in un click"
        description="Inserisci la keyword, ottieni tutti i dati dei primi 10 risultati. Title, description, URL, word count, heading structure. Tutto in una schermata."
        visual={<SerpResultsIllustration />}
      />

      <HighlightBlock
        icon={Target}
        title="Capisce l'intento di ricerca"
        description="Analizza automaticamente il search intent dominante. Informational, commercial, transactional o navigational. Sai che tipo di contenuto creare."
        visual={<IntentIllustration />}
        reverse
      />

      <Testimonials testimonials={testimonials} />

      <SubPageCTA />
    </>
  )
}

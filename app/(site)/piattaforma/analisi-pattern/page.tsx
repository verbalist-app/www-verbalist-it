import { BarChart3, Layers, TrendingUp, Target } from "lucide-react"
import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { TrustedBy } from "@/components/trusted-by"
import { FeatureChecklist } from "@/components/feature-checklist"
import { HighlightBlock } from "@/components/highlight-block"
import { Testimonials } from "@/components/testimonials"

export const metadata: Metadata = {
  title: "Analisi Pattern SEO",
  description: "Scopri i pattern dei contenuti in prima pagina: word count, struttura heading, topic coverage e segnali E-E-A-T. Dati per il SEO copywriting.",
  alternates: {
    canonical: "/piattaforma/analisi-pattern",
  },
  openGraph: {
    title: "Analisi Pattern SEO — Verbalist",
    description: "Scopri i pattern dei contenuti in prima pagina: word count, struttura heading, topic coverage e segnali E-E-A-T. Dati per il SEO copywriting.",
  },
}

const featureColumns = [
  {
    items: [
      "Word count medio e range",
      "Distribuzione lunghezza",
      "Paragraphs e sentences",
      "Reading time stimato",
    ],
  },
  {
    items: [
      "Struttura heading comune",
      "Pattern H2 e H3",
      "Sezioni ricorrenti",
      "Ordine degli argomenti",
    ],
  },
  {
    items: [
      "Topic coverage analysis",
      "Content gap detection",
      "E-E-A-T signals",
      "Competitive scoring",
    ],
  },
]

const testimonials = [
  {
    metric: "Pattern chiari",
    quote: "Prima era tutto a intuito. Ora vedo esattamente cosa hanno in comune i contenuti in prima pagina.",
    author: "Luca M.",
    role: "Content Manager",
    company: "Media Company",
  },
  {
    metric: "+60% ranking",
    quote: "Seguendo i pattern rilevati abbiamo migliorato il ranking del 60% sui contenuti nuovi.",
    author: "Sara T.",
    role: "SEO Lead",
    company: "Startup Tech",
  },
]

function WordCountIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-4">
        <div className="rounded-lg border bg-background p-4 shadow-sm">
          <div className="text-xs font-medium text-muted-foreground mb-3">Word Count Distribution</div>
          <div className="flex items-end gap-1 h-20">
            {[35, 55, 85, 100, 90, 70, 45, 25].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className={`w-full rounded-t ${i === 3 ? "bg-foreground" : "bg-foreground/40"}`}
                  style={{ height: `${height}%` }}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-[10px] text-muted-foreground">
            <span>800</span>
            <span>1500</span>
            <span>2200</span>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 rounded-lg border bg-background p-3 shadow-sm text-center">
            <div className="text-lg font-medium">1,450</div>
            <div className="text-[10px] text-muted-foreground">Avg words</div>
          </div>
          <div className="flex-1 rounded-lg border bg-background p-3 shadow-sm text-center">
            <div className="text-lg font-medium">1.2-1.8k</div>
            <div className="text-[10px] text-muted-foreground">Range</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function StructureIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-3">
        <div className="rounded-lg border bg-background p-4 shadow-sm">
          <div className="text-xs font-medium text-muted-foreground mb-3">Common Structure</div>
          <div className="space-y-2">
            {[
              { pattern: "H1 + Intro", frequency: 100 },
              { pattern: "H2: Definizione", frequency: 90 },
              { pattern: "H2: Come funziona", frequency: 85 },
              { pattern: "H2: Vantaggi", frequency: 80 },
              { pattern: "H2: FAQ", frequency: 60 },
            ].map((item) => (
              <div key={item.pattern} className="flex items-center gap-2">
                <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full bg-foreground" style={{ width: `${item.frequency}%` }} />
                </div>
                <span className="text-[10px] text-muted-foreground w-20 text-right">{item.pattern}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AnalisiPatternPage() {
  return (
    <>
      <SubPageHero
        label="Analisi Pattern"
        title="Identifica i pattern dei contenuti meglio posizionati"
        description="Scopri cosa hanno in comune i primi risultati. Word count, struttura heading, copertura dei topic e segnali E-E-A-T."
        backLink={{ label: "Piattaforma", href: "/piattaforma" }}
      />

      <TrustedBy />

      <FeatureChecklist
        title="Scopri i pattern ricorrenti"
        description="Analizza automaticamente struttura, lunghezza e topic dei contenuti meglio posizionati."
        columns={featureColumns}
      />

      <HighlightBlock
        icon={TrendingUp}
        title="Word count medio e distribuzione"
        description="Calcola il word count medio dei primi risultati. Mostra la distribuzione, il range e la lunghezza di riferimento per la keyword."
        visual={<WordCountIllustration />}
      />

      <HighlightBlock
        icon={Layers}
        title="Struttura heading ricorrente"
        description="Trova i pattern strutturali comuni: quali H2, in che ordine, quanti H3. Una mappa della struttura usata dai primi risultati."
        visual={<StructureIllustration />}
        reverse
      />

      <Testimonials testimonials={testimonials} />

      <SubPageCTA />
    </>
  )
}

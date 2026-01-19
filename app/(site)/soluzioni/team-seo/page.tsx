import { Search, Target, Zap, TrendingUp } from "lucide-react"
import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { TrustedBy } from "@/components/trusted-by"
import { FeatureChecklist } from "@/components/feature-checklist"
import { HighlightBlock } from "@/components/highlight-block"
import { Testimonials } from "@/components/testimonials"

export const metadata: Metadata = {
  title: "Verbalist per Team SEO",
  description: "Analisi SERP, pattern detection e contenuti. Tutto quello che serve al tuo team SEO.",
  alternates: {
    canonical: "/soluzioni/team-seo",
  },
  openGraph: {
    title: "Verbalist per Team SEO",
    description: "Analisi SERP, pattern detection e contenuti. Tutto quello che serve al tuo team SEO.",
  },
}

const featureColumns = [
  {
    items: [
      "Analisi top 10 SERP automatica",
      "Search intent detection",
      "Competitor benchmarking",
      "Keyword clustering",
    ],
  },
  {
    items: [
      "Pattern strutturali vincenti",
      "Word count ottimale",
      "Topic coverage analysis",
      "E-E-A-T signals detection",
    ],
  },
  {
    items: [
      "Content gap identification",
      "Heading structure analysis",
      "Semantic keyword extraction",
      "SERP feature tracking",
    ],
  },
]

const testimonials = [
  {
    metric: "80% tempo",
    quote: "L'analisi SERP che prima richiedeva ore ora la facciamo in minuti. Più tempo per strategia, meno per data entry.",
    author: "Alessandro T.",
    role: "SEO Manager",
    company: "E-commerce Fashion",
  },
  {
    metric: "+45% ranking",
    quote: "I contenuti generati con i pattern vincenti rankano meglio. Abbiamo dati concreti per dimostrarlo.",
    author: "Giulia M.",
    role: "Head of SEO",
    company: "Tech Startup",
  },
]

function SerpAnalysisIllustration() {
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

function PatternIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-3">
        <div className="rounded-lg border bg-background p-3 shadow-sm">
          <div className="text-xs font-medium text-muted-foreground mb-2">Pattern rilevati</div>
          <div className="space-y-2">
            {[
              { pattern: "H2: Definizione", freq: 90 },
              { pattern: "H2: Come funziona", freq: 85 },
              { pattern: "H2: Vantaggi", freq: 80 },
              { pattern: "H2: FAQ", freq: 70 },
            ].map((item) => (
              <div key={item.pattern} className="flex items-center gap-2">
                <div className="flex-1 h-1.5 rounded-full bg-muted">
                  <div className="h-full rounded-full bg-foreground" style={{ width: `${item.freq}%` }} />
                </div>
                <span className="text-[10px] w-20 truncate">{item.pattern}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TeamSeoPage() {
  return (
    <>
      <SubPageHero
        icon={Search}
        title="Verbalist per Team SEO"
        description="Analisi, pattern, contenuti. Tutto in un posto. Basato sui dati, non sulle opinioni."
      />

      <TrustedBy />

      <FeatureChecklist
        title="Dati SERP che fanno la differenza"
        description="Analisi automatica, pattern detection e insight azionabili per ogni keyword."
        columns={featureColumns}
      />

      <HighlightBlock
        icon={Search}
        title="Analisi SERP in secondi"
        description="Inserisci la keyword, ottieni i top 10 risultati con tutti i dati che servono. Title, description, word count, heading structure, topic coverage. Tutto automatico."
        visual={<SerpAnalysisIllustration />}
      />

      <HighlightBlock
        icon={TrendingUp}
        title="Pattern che funzionano"
        description="Trova cosa hanno in comune i contenuti che rankano. Struttura, lunghezza, argomenti. Replica quello che funziona, evita quello che non funziona."
        visual={<PatternIllustration />}
        reverse
      />

      <Testimonials testimonials={testimonials} />

      <SubPageCTA />
    </>
  )
}

import { Search, BarChart3, Target, TrendingUp } from "lucide-react"
import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { TrustedBy } from "@/components/trusted-by"
import { FeatureChecklist } from "@/components/feature-checklist"
import { HighlightBlock } from "@/components/highlight-block"

export const metadata: Metadata = {
  title: "SEO Tool per Specialist | Analisi e Automazione",
  description: "Strumenti SEO per specialist: analisi SERP automatica, pattern detection, content gap analysis e generazione contenuti. Dati per decisioni informate.",
  alternates: {
    canonical: "/soluzioni/team-seo",
  },
  openGraph: {
    title: "SEO Tool per Specialist — Verbalist",
    description: "Strumenti SEO per specialist: analisi SERP automatica, pattern detection, content gap analysis e generazione contenuti. Dati per decisioni informate.",
  },
}

const featureColumns = [
  {
    items: [
      "Top 10 risultati organici",
      "Search intent detection",
      "Title e meta description",
      "Word count per risultato",
    ],
  },
  {
    items: [
      "Pattern strutturali (H1, H2, H3)",
      "Topic e subtopic ricorrenti",
      "Word count medio e range",
      "Struttura heading vincente",
    ],
  },
  {
    items: [
      "Segnali E-E-A-T rilevati",
      "Content gap identification",
      "Score SEO/Readability/Trust",
      "Priorità di ottimizzazione",
    ],
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
                <span className="text-[10px] w-24 truncate">{item.pattern}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 rounded-lg border bg-background p-2 shadow-sm text-center">
            <div className="text-sm font-medium">1,450</div>
            <div className="text-[10px] text-muted-foreground">Avg words</div>
          </div>
          <div className="flex-1 rounded-lg border bg-background p-2 shadow-sm text-center">
            <div className="text-sm font-medium">1.2-1.8k</div>
            <div className="text-[10px] text-muted-foreground">Range</div>
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
        title="Verbalist per SEO Specialist"
        description="Analisi SERP, pattern detection, metriche dei competitor. Dati concreti per costruire contenuti che competono."
      />

      <TrustedBy />

      <FeatureChecklist
        title="I dati che servono per ogni keyword"
        description="Top 10 risultati, search intent, struttura heading, word count, segnali E-E-A-T. Tutto automatico."
        columns={featureColumns}
      />

      <HighlightBlock
        icon={Search}
        title="SERP analysis in un click"
        description="Inserisci la keyword. Verbalist estrae i top 10 risultati organici con title, description, URL e word count. Identifica il search intent dominante: informational, commercial, transactional o navigational."
        visual={<SerpAnalysisIllustration />}
      />

      <HighlightBlock
        icon={BarChart3}
        title="Pattern vincenti"
        description="Analizza cosa hanno in comune i contenuti in prima pagina. Struttura heading ricorrente, topic trattati, word count medio e range. Dati per replicare quello che funziona."
        visual={<PatternIllustration />}
        reverse
      />

      <SubPageCTA />
    </>
  )
}

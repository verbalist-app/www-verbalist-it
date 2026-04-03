import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { BentoGrid } from "@/components/bento-grid"

export const metadata: Metadata = {
  title: "GEO e AEO Optimization",
  description: "Ottimizza i contenuti per AI Overview, ChatGPT e Perplexity. Generative Engine Optimization (GEO) e Answer Engine Optimization (AEO) con dati dei risultati Google.",
  alternates: {
    canonical: "/soluzioni/ai-strategist",
  },
  openGraph: {
    title: "GEO e AEO Optimization \\ Verbalist",
    description: "Ottimizza i contenuti per AI Overview, ChatGPT e Perplexity. Generative Engine Optimization (GEO) e Answer Engine Optimization (AEO) con dati dei risultati Google.",
  },
}

function QualitySignalsIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-2.5">
          {[90, 85, 80, 70].map((pct, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-foreground/8">
                <div className="h-full rounded-full bg-foreground/20" style={{ width: `${pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function TopicCoverageIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-2.5">
          {[true, true, true, false, false].map((done, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className={`flex size-4 shrink-0 items-center justify-center rounded-full ${done ? "bg-foreground" : "bg-foreground/8"}`}>
                {done && (
                  <svg className="size-2.5 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <div className={`h-1.5 flex-1 rounded ${done ? "bg-foreground/12" : "bg-foreground/6"}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function TrustPatternsIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="space-y-2">
        {[80, 60, 100].map((pct, i) => (
          <div key={i} className="rounded-lg bg-background p-3">
            <div className="flex items-center gap-3">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-foreground/8">
                <div className="h-full rounded-full bg-foreground/20" style={{ width: `${pct}%` }} />
              </div>
              <span className="shrink-0 text-[9px] font-medium text-foreground/30">{pct}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function StrategyDataIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-2">
          {[0, 4, 8].map((offset) => (
            <div
              key={offset}
              className="h-8 rounded-md bg-foreground/10"
              style={{ marginLeft: `${offset}px`, marginRight: `${24 - offset}px` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function LlmCitabilityIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-2">
          <div className="h-1.5 w-full rounded bg-foreground/6" />
          <div className="h-1.5 w-5/6 rounded bg-foreground/6" />
          <div className="h-2 w-3/4 rounded bg-foreground/20" />
          <div className="h-1.5 w-full rounded bg-foreground/6" />
          <div className="h-1.5 w-4/5 rounded bg-foreground/6" />
        </div>
      </div>
    </div>
  )
}

export default function AIStrategistPage() {
  return (
    <>
      <SubPageHero
        label="AI Strategist"
        title="Fai in modo che ChatGPT ti citi"
        description="Analizza i segnali di qualita e struttura che gli assistenti AI preferiscono referenziare."
      />

      <BentoGrid
        items={[
          {
            title: "Segnali di qualita",
            description: "Analisi di authority, citability, struttura e freshness. Pattern di citabilita estratti dai competitor.",
            visual: <QualitySignalsIllustration />,
          },
          {
            title: "Topic coverage",
            description: "Topic e subtopic completi, FAQ schema-ready, contenuto strutturato per featured snippet e ricerca AI.",
            visual: <TopicCoverageIllustration />,
          },
          {
            title: "Trust patterns",
            description: "Fonti, riferimenti, author expertise e freshness indicators estratti dalle pagine meglio posizionate.",
            visual: <TrustPatternsIllustration />,
          },
          {
            title: "Dati per la strategia",
            description: "SERP analysis, competitor scraping e pattern extraction in un unico flusso. Dati strutturati per le tue raccomandazioni.",
            visual: <StrategyDataIllustration />,
          },
          {
            title: "Citabilità LLM",
            description: "Struttura semantica progettata per essere estratta e citata da ChatGPT, Perplexity e AI Overview.",
            visual: <LlmCitabilityIllustration />,
          },
        ]}
      />

      <SubPageCTA />
    </>
  )
}

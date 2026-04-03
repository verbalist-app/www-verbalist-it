import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { BentoGrid } from "@/components/bento-grid"

export const metadata: Metadata = {
  title: "Da SEO a GEO: strumenti per specialist",
  description: "Passa dalla SEO tradizionale alla Generative Engine Optimization. Analisi dei risultati Google, pattern detection e contenuti strutturati per la ricerca AI. Da SEO a GEO SEO.",
  alternates: {
    canonical: "/soluzioni/team-seo",
  },
  openGraph: {
    title: "Da SEO a GEO: strumenti per specialist \\ Verbalist",
    description: "Passa dalla SEO tradizionale alla Generative Engine Optimization. Analisi dei risultati Google, pattern detection e contenuti strutturati per la ricerca AI. Da SEO a GEO SEO.",
  },
}

function SerpAnalysisIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="space-y-2">
        {[88, 76, 64, 52, 40].map((w, i) => (
          <div key={i} className="flex items-center gap-2.5 rounded-lg bg-background p-2.5">
            <span className="flex size-5 shrink-0 items-center justify-center rounded bg-foreground/10 text-[9px] font-medium text-foreground/40">{i + 1}</span>
            <div className="flex-1 space-y-1">
              <div className="h-1.5 rounded bg-foreground/15" style={{ width: `${w}%` }} />
              <div className="h-1 rounded bg-foreground/6" style={{ width: `${w - 15}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function PatternDetectionIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-2.5">
          {[100, 90, 80, 60].map((pct, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-foreground/8">
                <div className="h-full rounded-full bg-foreground/20" style={{ width: `${pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function GeoOutputIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-3">
          <div className="h-2 w-3/5 rounded bg-foreground/20" />
          <div className="space-y-1.5">
            <div className="h-1.5 w-full rounded bg-foreground/8" />
            <div className="h-1.5 w-5/6 rounded bg-foreground/8" />
          </div>
          <div className="h-2 w-2/5 rounded bg-foreground/15" />
          <div className="space-y-1.5">
            <div className="h-1.5 w-full rounded bg-foreground/8" />
            <div className="h-1.5 w-4/5 rounded bg-foreground/8" />
          </div>
        </div>
      </div>
    </div>
  )
}

function ContentBriefIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-2.5">
          {[90, 75, 60, 45].map((pct, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="size-2 shrink-0 rounded-full bg-foreground/20" />
              <div className="h-1.5 flex-1 rounded bg-foreground/8" style={{ width: `${pct}%` }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function OptimizeExistingIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-2.5">
          <div className="h-8 rounded-md bg-foreground/8" />
          <div className="flex justify-center">
            <div className="h-4 w-1.5 rounded bg-foreground/15" />
          </div>
          <div className="h-8 rounded-md bg-foreground/20" />
        </div>
      </div>
    </div>
  )
}

export default function TeamSeoPage() {
  return (
    <>
      <SubPageHero
        label="SEO Specialist"
        title="I dati SEO che conosci, applicati alla ricerca AI"
        description="Stessa logica di analisi dei risultati Google. Output pensato per ChatGPT, Perplexity e AI Overview."
      />

      <BentoGrid
        items={[
          {
            title: "Analisi risultati Google",
            description: "Top 10 organici, search intent detection, struttura heading e word count medio. I dati SEO che conosci.",
            visual: <SerpAnalysisIllustration />,
          },
          {
            title: "Pattern detection",
            description: "Topic e subtopic ricorrenti, content gap, segnali di qualita e pattern di citabilita per LLM.",
            visual: <PatternDetectionIllustration />,
          },
          {
            title: "Output GEO-ready",
            description: "Contenuti con struttura semantica per AI. Definizioni citabili, FAQ schema-ready, export rapido.",
            visual: <GeoOutputIllustration />,
          },
          {
            title: "Content brief automatico",
            description: "Word count target, heading structure, topic coverage. Il brief per il copywriter generato automaticamente dai dati.",
            visual: <ContentBriefIllustration />,
          },
          {
            title: "Ottimizza pagine esistenti",
            description: "Carica l'URL di una pagina live. Confronta con i competitor e genera la versione migliorata.",
            visual: <OptimizeExistingIllustration />,
          },
        ]}
      />

      <SubPageCTA />
    </>
  )
}

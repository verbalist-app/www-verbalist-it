import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { BentoGrid } from "@/components/bento-grid"

export const metadata: Metadata = {
  title: "GEO per Startup e PMI",
  description: "Contenuti ottimizzati per la ricerca AI senza un team GEO interno. Verbalist è il ponte tra SEO tradizionale e Generative Engine Optimization (GEO SEO).",
  alternates: {
    canonical: "/soluzioni/enterprise",
  },
  openGraph: {
    title: "GEO per Startup e PMI \\ Verbalist",
    description: "Contenuti ottimizzati per la ricerca AI senza un team GEO interno. Verbalist è il ponte tra SEO tradizionale e Generative Engine Optimization (GEO SEO).",
  },
}

function SetupIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-3">
          {[
            { label: "Keyword", done: true },
            { label: "Analisi", done: true },
            { label: "Contenuto", done: false },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <div className={`flex size-5 shrink-0 items-center justify-center rounded-full ${s.done ? "bg-foreground" : "bg-foreground/10"}`}>
                {s.done && (
                  <svg className="size-2.5 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <div className="h-1.5 flex-1 rounded bg-foreground/10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function AutoAnalysisIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-2">
          {[88, 76, 64, 52, 40].map((w, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <span className="w-3 shrink-0 text-center text-[9px] font-medium text-foreground/40">{i + 1}</span>
              <div className="h-1.5 rounded bg-foreground/12" style={{ width: `${w}%` }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function OutputIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-3">
          <div className="h-2 w-3/5 rounded bg-foreground/20" />
          <div className="space-y-1.5">
            <div className="h-1.5 w-full rounded bg-foreground/8" />
            <div className="h-1.5 w-5/6 rounded bg-foreground/8" />
            <div className="h-1.5 w-3/4 rounded bg-foreground/8" />
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

function NoTechSkillsIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-3">
          {[20, 15, 10].map((opacity, i) => (
            <div key={i} className="flex items-center gap-3">
              <div
                className="flex size-5 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: `hsl(0 0% 0% / ${opacity}%)` }}
              />
              <div className="h-1.5 flex-1 rounded bg-foreground/8" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function FourContentTypesIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="grid grid-cols-2 gap-2">
          <div className="h-10 rounded-md bg-foreground/20" />
          <div className="h-10 rounded-md bg-foreground/8" />
          <div className="h-10 rounded-md bg-foreground/8" />
          <div className="h-10 rounded-md bg-foreground/8" />
        </div>
      </div>
    </div>
  )
}

export default function EnterprisePage() {
  return (
    <>
      <SubPageHero
        label="Startup e PMI"
        title="Visibile nella ricerca AI, senza un team dedicato"
        description="Inserisci una keyword, ottieni un contenuto pronto. Nessuna competenza tecnica richiesta."
      />

      <BentoGrid
        items={[
          {
            title: "Setup in pochi minuti",
            description: "Interfaccia guidata, nessuna competenza GEO richiesta. Progetti organizzati per keyword.",
            visual: <SetupIllustration />,
          },
          {
            title: "Analisi automatica",
            description: "Analisi dei risultati Google, pattern dei competitor estratti, struttura semantica e segnali di qualita integrati.",
            visual: <AutoAnalysisIllustration />,
          },
          {
            title: "Output AI-ready",
            description: "Contenuti pronti per ChatGPT e Perplexity. Export in Markdown e HTML, tono di voce personalizzabile.",
            visual: <OutputIllustration />,
          },
          {
            title: "Nessuna competenza tecnica",
            description: "Il team marketing genera contenuti GEO senza dipendere dal reparto tecnico. Interfaccia guidata, risultati immediati.",
            visual: <NoTechSkillsIllustration />,
          },
          {
            title: "Quattro tipi di contenuto",
            description: "Blog post, pagina prodotto, guida e landing page. Struttura ottimizzata per ogni formato.",
            visual: <FourContentTypesIllustration />,
          },
        ]}
      />

      <SubPageCTA
        title="Vuoi vederlo in azione?"
        description="Ti mostriamo come Verbalist crea contenuti GEO-ready a partire da una keyword, applicato al tuo settore."
      />
    </>
  )
}

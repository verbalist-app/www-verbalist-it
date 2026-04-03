import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { BentoGrid } from "@/components/bento-grid"

export const metadata: Metadata = {
  title: "Contenuti GEO-ready per agenzie",
  description: "Produci contenuti GEO SEO per ogni cliente. Analisi dei risultati Google, pattern detection e generazione ottimizzata per la ricerca AI in un unico workflow.",
  alternates: {
    canonical: "/soluzioni/agenzie",
  },
  openGraph: {
    title: "Contenuti GEO-ready per agenzie \\ Verbalist",
    description: "Produci contenuti GEO SEO per ogni cliente. Analisi dei risultati Google, pattern detection e generazione ottimizzata per la ricerca AI in un unico workflow.",
  },
}

function MultiClientIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="space-y-2">
        {[75, 50, 25].map((progress, i) => (
          <div key={i} className="flex items-center gap-3 rounded-lg bg-background p-3">
            <div className={`flex size-6 shrink-0 items-center justify-center rounded-md text-[9px] font-semibold ${i === 0 ? "bg-foreground text-background" : "bg-foreground/8 text-foreground/40"}`}>
              {String.fromCharCode(65 + i)}
            </div>
            <div className="flex-1">
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-foreground/8">
                <div className="h-full rounded-full bg-foreground/20" style={{ width: `${progress}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function AnalysisIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-2">
          {[90, 80, 70, 55].map((pct, i) => (
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

function ExportIllustration() {
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

function ScalableWorkflowIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="flex items-center gap-3">
          {[25, 20, 15, 10].map((opacity, i) => (
            <div key={i} className="flex items-center gap-3">
              <div
                className="size-4 shrink-0 rounded-full"
                style={{ backgroundColor: `hsl(0 0% 0% / ${opacity}%)` }}
              />
              {i < 3 && <div className="h-1.5 w-6 rounded bg-foreground/8" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function SharedCreditsIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-2.5">
          {[85, 60, 45, 30].map((pct, i) => (
            <div key={i} className="h-2 rounded bg-foreground/12" style={{ width: `${pct}%` }} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function AgenziePage() {
  return (
    <>
      <SubPageHero
        label="Agenzie"
        title="Contenuti per la ricerca AI, per ogni cliente"
        description="Un unico workflow per analizzare, generare e consegnare. Senza ripartire da zero ogni volta."
      />

      <BentoGrid
        items={[
          {
            title: "Gestione multi-cliente",
            description: "Progetti separati per ogni account. Dashboard, keyword e storico documenti organizzati per cliente.",
            visual: <MultiClientIllustration />,
          },
          {
            title: "Analisi e pattern",
            description: "Analisi dei risultati Google per ogni keyword. Pattern detection, struttura semantica e segnali di qualita estratti.",
            visual: <AnalysisIllustration />,
          },
          {
            title: "Export e consegna",
            description: "Export in Markdown e HTML. Tono di voce personalizzato per cliente, supporto multi-lingua.",
            visual: <ExportIllustration />,
          },
          {
            title: "Workflow scalabile",
            description: "Da keyword a contenuto in 4 step automatizzati. Stesso processo, qualità costante su ogni cliente.",
            visual: <ScalableWorkflowIllustration />,
          },
          {
            title: "Crediti condivisi",
            description: "Un unico piano, crediti distribuiti tra i clienti. Dashboard per monitorare il consumo per account.",
            visual: <SharedCreditsIllustration />,
          },
        ]}
      />

      <SubPageCTA />
    </>
  )
}

import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { BentoGrid } from "@/components/bento-grid"


export const metadata: Metadata = {
  title: "Analisi contenuti competitor",
  description: "Estrai i contenuti dei competitor in Markdown. Analizza struttura, heading e argomenti delle pagine meglio posizionate.",
  alternates: {
    canonical: "/piattaforma/scraping-competitor",
  },
  openGraph: {
    title: "Analisi contenuti competitor \\ Verbalist",
    description: "Estrai i contenuti dei competitor in Markdown. Analizza struttura, heading e argomenti delle pagine meglio posizionate.",
  },
}

function HtmlToMarkdownIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="space-y-2">
        <div className="rounded-lg bg-background p-4">
          <div className="space-y-1.5">
            <div className="h-1.5 w-3/4 rounded bg-foreground/12" />
            <div className="h-1.5 w-full rounded bg-foreground/8" />
            <div className="h-1.5 w-1/2 rounded bg-foreground/8 line-through opacity-30" />
          </div>
        </div>
        <div className="flex justify-center">
          <svg className="size-4 text-foreground/25" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
        <div className="rounded-lg bg-background p-4">
          <div className="space-y-1.5">
            <div className="h-2 w-1/2 rounded bg-foreground/20" />
            <div className="h-1.5 w-full rounded bg-foreground/10" />
          </div>
        </div>
      </div>
    </div>
  )
}

function DynamicContentIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-2">
          <div className="h-2 w-3/4 rounded bg-foreground/20" />
          <div className="h-1.5 w-full rounded bg-foreground/8" />
        </div>
        <div className="mt-4 space-y-2">
          {[true, true, false].map((done, i) => (
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

function HeadingTreeIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-2">
          <div className="h-2 w-3/4 rounded bg-foreground/25" />
          <div className="ml-4 h-1.5 w-3/5 rounded bg-foreground/15" />
          <div className="ml-4 h-1.5 w-1/2 rounded bg-foreground/15" />
          <div className="ml-8 h-1.5 w-2/5 rounded bg-foreground/10" />
          <div className="ml-8 h-1.5 w-1/3 rounded bg-foreground/10" />
          <div className="ml-4 h-1.5 w-3/5 rounded bg-foreground/15" />
          <div className="ml-8 h-1.5 w-2/5 rounded bg-foreground/10" />
        </div>
      </div>
    </div>
  )
}

function CleanContentIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-2">
          <div className="h-1.5 w-full rounded bg-foreground/6 line-through opacity-30" />
          <div className="h-1.5 w-3/4 rounded bg-foreground/20" />
          <div className="h-1.5 w-full rounded bg-foreground/12" />
          <div className="h-1.5 w-4/5 rounded bg-foreground/12" />
          <div className="h-1.5 w-2/3 rounded bg-foreground/6 line-through opacity-30" />
          <div className="h-1.5 w-full rounded bg-foreground/12" />
          <div className="h-1.5 w-1/2 rounded bg-foreground/6 line-through opacity-30" />
        </div>
      </div>
    </div>
  )
}

function FiveCompetitorsIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-1.5">
          {[65, 80, 50, 70, 60].map((w, i) => (
            <div key={i} className="rounded-md bg-foreground/6 p-2">
              <div className="h-1.5 rounded bg-foreground/15" style={{ width: `${w}%` }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ScrapingCompetitorPage() {
  return (
    <>
      <SubPageHero
        label="Scraping"
        title="Scarica i contenuti dei competitor"
        description="Prende le pagine meglio posizionate e le trasforma in testo pulito, pronto da analizzare."
      />

      <BentoGrid
        items={[
          {
            title: "Da HTML a Markdown",
            description: "Converte automaticamente l'HTML in Markdown pulito. Toglie script, stili, navigazione. Tiene solo il contenuto che conta.",
            visual: <HtmlToMarkdownIllustration />,
          },
          {
            title: "Gestisce contenuti dinamici",
            description: "Gestisce il rendering JavaScript, il lazy-load, l'infinite scroll e le SPA. Estrae sempre il contenuto completo.",
            visual: <DynamicContentIllustration />,
          },
          {
            title: "Struttura heading completa",
            description: "Estrae la gerarchia H1-H6 di ogni competitor. Vedi come organizzano il contenuto, sezione per sezione.",
            visual: <HeadingTreeIllustration />,
          },
          {
            title: "Solo il contenuto utile",
            description: "Rimuove header, footer, sidebar e ads automaticamente. Mantiene solo il corpo dell'articolo.",
            visual: <CleanContentIllustration />,
          },
          {
            title: "Fino a 5 competitor",
            description: "Analisi multipla per keyword. Struttura, argomenti e approccio di ogni competitor a confronto.",
            visual: <FiveCompetitorsIllustration />,
          },
        ]}
      />

      <SubPageCTA />
    </>
  )
}

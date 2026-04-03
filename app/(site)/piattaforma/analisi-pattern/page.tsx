import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { BentoGrid } from "@/components/bento-grid"


export const metadata: Metadata = {
  title: "Analisi pattern SEO",
  description: "Scopri i pattern dei contenuti in prima pagina: word count, struttura heading, topic coverage e segnali di qualità e autorevolezza. Dati per il SEO copywriting.",
  alternates: {
    canonical: "/piattaforma/analisi-pattern",
  },
  openGraph: {
    title: "Analisi pattern SEO \\ Verbalist",
    description: "Scopri i pattern dei contenuti in prima pagina: word count, struttura heading, topic coverage e segnali di qualità e autorevolezza. Dati per il SEO copywriting.",
  },
}

function WordCountIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="flex h-20 items-end gap-1.5">
          {[35, 55, 85, 100, 90, 70, 45, 25].map((height, i) => (
            <div
              key={i}
              className={`flex-1 rounded-sm ${i === 3 ? "bg-foreground/25" : "bg-foreground/10"}`}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function StructureIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-2.5">
          {[100, 90, 85, 80, 60].map((pct, i) => (
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

function TopicCoverageIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="flex flex-wrap gap-1.5">
          {[20, 12, 25, 15, 10, 8, 6, 20, 12, 15, 10, 8].map((opacity, i) => (
            <div
              key={i}
              className="h-2 rounded bg-foreground"
              style={{ width: `${20 + (i % 4) * 10}%`, opacity: opacity / 100 }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function ContentGapIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-2.5">
          {[
            { left: "35%", gap: "15%", right: "30%" },
            { left: "45%", gap: "10%", right: "25%" },
            { left: "25%", gap: "20%", right: "35%" },
            { left: "40%", gap: "12%", right: "28%" },
          ].map((bar, i) => (
            <div key={i} className="flex items-center gap-0">
              <div className="h-2 rounded-l bg-foreground/15" style={{ width: bar.left }} />
              <div className="h-2 border-b border-dashed border-foreground/15" style={{ width: bar.gap }} />
              <div className="h-2 rounded-r bg-foreground/15" style={{ width: bar.right }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function EeatSignalsIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-2.5">
          {[85, 60, 45, 70].map((pct, i) => (
            <div key={i} className="h-2 overflow-hidden rounded-full bg-foreground/8">
              <div className="h-full rounded-full bg-foreground/20" style={{ width: `${pct}%` }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function AnalisiPatternPage() {
  return (
    <>
      <SubPageHero
        label="Pattern"
        title="Trova cosa hanno in comune i primi risultati"
        description="Lunghezza, struttura, argomenti trattati. I pattern ricorrenti di chi si posiziona."
      />

      <BentoGrid
        items={[
          {
            title: "Word count medio e distribuzione",
            description: "Calcola il word count medio dei primi risultati. Mostra la distribuzione, il range e la lunghezza di riferimento per la keyword.",
            visual: <WordCountIllustration />,
          },
          {
            title: "Struttura heading ricorrente",
            description: "Trova i pattern strutturali comuni: quali H2, in che ordine, quanti H3. Una mappa della struttura usata dai primi risultati.",
            visual: <StructureIllustration />,
          },
          {
            title: "Topic coverage",
            description: "Argomenti e sotto-argomenti trattati dai primi risultati. Identifica i topic da coprire nel tuo contenuto.",
            visual: <TopicCoverageIllustration />,
          },
          {
            title: "Content gap",
            description: "Trova gli argomenti che i competitor non coprono o coprono male. Opportunità per differenziarti.",
            visual: <ContentGapIllustration />,
          },
          {
            title: "Segnali E-E-A-T",
            description: "Citazioni, fonti, credenziali autore e freshness. I segnali di qualità e autorevolezza usati da chi si posiziona.",
            visual: <EeatSignalsIllustration />,
          },
        ]}
      />

      <SubPageCTA />
    </>
  )
}

import { FileText, PenTool, Sparkles, Palette } from "lucide-react"
import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { TrustedBy } from "@/components/trusted-by"
import { FeatureChecklist } from "@/components/feature-checklist"
import { HighlightBlock } from "@/components/highlight-block"
import Testimonials from "@/components/testimonials-4"

export const metadata: Metadata = {
  title: "Generazione contenuti AI",
  description: "Genera contenuti SEO con AI basandosi sui pattern dei risultati Google. Title, meta description, struttura heading e testo ottimizzato. Pronto per pubblicare.",
  alternates: {
    canonical: "/piattaforma/generazione-contenuto",
  },
  openGraph: {
    title: "Generazione contenuti AI \\ Verbalist",
    description: "Genera contenuti SEO con AI basandosi sui pattern dei risultati Google. Title, meta description, struttura heading e testo ottimizzato. Pronto per pubblicare.",
  },
}

const featureColumns = [
  {
    items: [
      "Title tag ottimizzato",
      "Meta description efficace",
      "URL slug SEO-friendly",
      "Schema markup suggerito",
    ],
  },
  {
    items: [
      "Outline basato su pattern",
      "Struttura H1, H2, H3",
      "Topic mapping completo",
      "Sezioni suggerite",
    ],
  },
  {
    items: [
      "Tono di voce personalizzabile",
      "Linee guida del brand integrate",
      "Suggerimenti media",
      "Export multi-formato",
    ],
  },
]

function SeoMetadataIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-3">
        <div className="rounded-lg border bg-background p-3 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] text-muted-foreground">Title Tag</span>
            <span className="text-[10px] text-status-success font-medium">58 chars</span>
          </div>
          <div className="h-3 w-full rounded bg-foreground/80" />
          <div className="mt-1 h-1.5 w-full rounded-full bg-muted">
            <div className="h-full w-[58%] rounded-full bg-status-success" />
          </div>
        </div>
        <div className="rounded-lg border bg-background p-3 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] text-muted-foreground">Meta Description</span>
            <span className="text-[10px] text-status-success font-medium">145 chars</span>
          </div>
          <div className="space-y-1">
            <div className="h-2 w-full rounded bg-foreground/60" />
            <div className="h-2 w-4/5 rounded bg-foreground/60" />
          </div>
        </div>
        <div className="rounded-lg border bg-background p-3 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] text-muted-foreground">URL Slug</span>
          </div>
          <div className="h-2.5 w-2/3 rounded bg-foreground/70" />
        </div>
      </div>
    </div>
  )
}

function ToneIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-3">
        <div className="rounded-lg border bg-background p-3 shadow-sm">
          <div className="text-xs font-medium text-muted-foreground mb-3">Tono di voce</div>
          <div className="grid grid-cols-2 gap-2">
            {[
              { tone: "Professionale", active: true },
              { tone: "Informale", active: false },
              { tone: "Tecnico", active: false },
              { tone: "Divulgativo", active: false },
            ].map((item) => (
              <div
                key={item.tone}
                className={`rounded p-2 text-center text-xs ${
                  item.active ? "bg-foreground text-background font-medium" : "bg-muted"
                }`}
              >
                {item.tone}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border bg-background p-3 shadow-sm">
          <div className="space-y-2">
            <div className="h-2 w-full rounded bg-foreground/60" />
            <div className="h-2 w-4/5 rounded bg-foreground/40" />
            <div className="h-2 w-3/4 rounded bg-foreground/40" />
          </div>
          <div className="mt-3 text-[10px] text-muted-foreground text-center">
            Contenuto generato con il tuo stile
          </div>
        </div>
      </div>
    </div>
  )
}

export default function GenerazioneContenutoPage() {
  return (
    <>
      <SubPageHero
        label="Generazione contenuto"
        title="Genera articoli completi basati sui pattern dei risultati Google"
        description="Genera articoli ottimizzati basati sui pattern dei primi risultati. Title, meta, struttura heading e testo completo, pronti per la tua revisione."
        backLink={{ label: "Piattaforma", href: "/piattaforma" }}
      />

      <TrustedBy />

      <FeatureChecklist
        title="Contenuti ottimizzati per posizionarsi"
        description="SEO metadata, struttura basata sui pattern e tono di voce personalizzabile."
        columns={featureColumns}
      />

      <HighlightBlock
        icon={Sparkles}
        title="SEO metadata perfetti"
        description="Genera title tag, meta description e URL slug ottimizzati. Basati sui pattern che funzionano nei risultati di ricerca. Lunghezza corretta, keyword incluse."
        visual={<SeoMetadataIllustration />}
      />

      <HighlightBlock
        icon={Palette}
        title="Il tuo tono di voce"
        description="Scegli lo stile: professionale, informale, tecnico, divulgativo. Ogni contenuto rispetta le linee guida del tuo brand. Risultato coerente, sempre."
        visual={<ToneIllustration />}
        reverse
      />

      <Testimonials />

      <SubPageCTA />
    </>
  )
}

import { FileText, PenTool, Sparkles, Palette } from "lucide-react"
import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { TrustedBy } from "@/components/trusted-by"
import { FeatureChecklist } from "@/components/feature-checklist"
import { HighlightBlock } from "@/components/highlight-block"
import { Testimonials } from "@/components/testimonials"

export const metadata: Metadata = {
  title: "Generazione Contenuto",
  description: "Scrive l'articolo basandosi sui pattern che funzionano. Title, meta, struttura e testo. Pronto per pubblicare.",
  alternates: {
    canonical: "/piattaforma/generazione-contenuto",
  },
  openGraph: {
    title: "Generazione Contenuto — Verbalist",
    description: "Scrive l'articolo basandosi sui pattern che funzionano. Title, meta, struttura e testo. Pronto per pubblicare.",
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
      "Tone of voice personalizzabile",
      "Brand guidelines integrate",
      "Media suggestions",
      "Export multi-formato",
    ],
  },
]

const testimonials = [
  {
    metric: "Pronto in 10 min",
    quote: "Dall'analisi SERP all'articolo completo in 10 minuti. Prima ci voleva una giornata.",
    author: "Valentina S.",
    role: "Content Writer",
    company: "Agenzia Content",
  },
  {
    metric: "Qualità costante",
    quote: "Ogni articolo rispetta gli stessi standard SEO. Non devo più controllare tutto manualmente.",
    author: "Paolo F.",
    role: "Content Lead",
    company: "SaaS Company",
  },
]

function SeoMetadataIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-3">
        <div className="rounded-lg border bg-background p-3 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] text-muted-foreground">Title Tag</span>
            <span className="text-[10px] text-green-600 font-medium">58 chars</span>
          </div>
          <div className="h-3 w-full rounded bg-foreground/80" />
          <div className="mt-1 h-1.5 w-full rounded-full bg-muted">
            <div className="h-full w-[58%] rounded-full bg-green-500" />
          </div>
        </div>
        <div className="rounded-lg border bg-background p-3 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] text-muted-foreground">Meta Description</span>
            <span className="text-[10px] text-green-600 font-medium">145 chars</span>
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
          <div className="text-xs font-medium text-muted-foreground mb-3">Tone of Voice</div>
          <div className="grid grid-cols-2 gap-2">
            {[
              { tone: "Professional", active: true },
              { tone: "Friendly", active: false },
              { tone: "Technical", active: false },
              { tone: "Educational", active: false },
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
        icon={FileText}
        title="Generazione Contenuto"
        description="Scrive l'articolo basandosi sui pattern che funzionano. Title, meta, struttura e testo. Pronto per pubblicare."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Piattaforma", href: "/piattaforma/generazione-contenuto" },
          { label: "Generazione Contenuto" },
        ]}
      />

      <TrustedBy />

      <FeatureChecklist
        title="Contenuti ottimizzati per rankare"
        description="SEO metadata, struttura vincente e tone of voice personalizzabile."
        columns={featureColumns}
      />

      <HighlightBlock
        icon={Sparkles}
        title="SEO metadata perfetti"
        description="Genera title tag, meta description e URL slug ottimizzati. Basati sui pattern che funzionano in SERP. Lunghezza corretta, keyword incluse."
        visual={<SeoMetadataIllustration />}
      />

      <HighlightBlock
        icon={Palette}
        title="Il tuo tone of voice"
        description="Scegli lo stile: professionale, friendly, tecnico, educational. Ogni contenuto rispetta le tue brand guidelines. Consistenza garantita."
        visual={<ToneIllustration />}
        reverse
      />

      <Testimonials testimonials={testimonials} />

      <SubPageCTA />
    </>
  )
}

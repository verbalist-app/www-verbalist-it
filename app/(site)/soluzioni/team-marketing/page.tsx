import { PenTool, FileText, Palette, RefreshCw } from "lucide-react"
import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { TrustedBy } from "@/components/trusted-by"
import { FeatureChecklist } from "@/components/feature-checklist"
import { HighlightBlock } from "@/components/highlight-block"

export const metadata: Metadata = {
  title: "Verbalist per Content Manager",
  description: "Bozze strutturate per blog, landing page e guide. Tone of voice configurabile, output pronto da rifinire.",
  alternates: {
    canonical: "/soluzioni/team-marketing",
  },
  openGraph: {
    title: "Verbalist per Content Manager",
    description: "Bozze strutturate per blog, landing page e guide. Tone of voice configurabile, output pronto da rifinire.",
  },
}

const featureColumns = [
  {
    items: [
      "Blog post",
      "Landing page",
      "Guide e tutorial",
      "Pagine prodotto",
    ],
  },
  {
    items: [
      "Tone of voice configurabile",
      "Professionale, conversazionale, tecnico",
      "Target audience personalizzabile",
      "Brand guidelines rispettate",
    ],
  },
  {
    items: [
      "Title tag e meta description",
      "Struttura heading ottimizzata",
      "Suggerimenti media e immagini",
      "Export Markdown e HTML",
    ],
  },
]

function ContentTypesIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-2">
        {[
          { type: "Blog Post", icon: "article" },
          { type: "Landing Page", icon: "web" },
          { type: "Guida", icon: "book" },
          { type: "Pagina Prodotto", icon: "shopping" },
        ].map((item) => (
          <div key={item.type} className="flex items-center gap-3 rounded-lg border bg-background p-3 shadow-sm">
            <div className="size-8 rounded bg-muted flex items-center justify-center">
              <span className="text-xs text-muted-foreground">{item.icon.charAt(0).toUpperCase()}</span>
            </div>
            <span className="text-sm font-medium">{item.type}</span>
          </div>
        ))}
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
          <div className="grid grid-cols-3 gap-2">
            {[
              { tone: "Professionale", active: true },
              { tone: "Conversazionale", active: false },
              { tone: "Tecnico", active: false },
            ].map((item) => (
              <div
                key={item.tone}
                className={`rounded p-2 text-center text-[10px] ${
                  item.active ? "bg-foreground text-background font-medium" : "bg-muted"
                }`}
              >
                {item.tone}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border bg-background p-3 shadow-sm">
          <div className="text-xs font-medium text-muted-foreground mb-2">Output</div>
          <div className="space-y-1.5">
            <div className="h-2 w-full rounded bg-foreground/60" />
            <div className="h-2 w-4/5 rounded bg-foreground/40" />
            <div className="h-2 w-3/4 rounded bg-foreground/40" />
          </div>
          <div className="mt-2 text-[10px] text-muted-foreground">
            Bozza con il tuo stile, pronta da rifinire
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TeamMarketingPage() {
  return (
    <>
      <SubPageHero
        icon={PenTool}
        title="Verbalist per Content Manager"
        description="Bozze strutturate basate sui pattern vincenti. Tu definisci il tono, Verbalist genera la prima stesura."
      />

      <TrustedBy />

      <FeatureChecklist
        title="Contenuti per ogni formato"
        description="Blog post, landing page, guide, pagine prodotto. Ogni formato con la struttura ottimale per la SERP."
        columns={featureColumns}
      />

      <HighlightBlock
        icon={FileText}
        title="Il formato giusto per ogni contenuto"
        description="Scegli il tipo di contenuto: blog post, landing page, guida o pagina prodotto. Verbalist adatta struttura, sezioni e CTA in base al formato e al search intent."
        visual={<ContentTypesIllustration />}
      />

      <HighlightBlock
        icon={Palette}
        title="Il tuo tone of voice"
        description="Configura lo stile: professionale, conversazionale o tecnico. Definisci il target audience. Ogni bozza rispetta le tue indicazioni. Tu rifinisci e pubblichi."
        visual={<ToneIllustration />}
        reverse
      />

      <SubPageCTA />
    </>
  )
}

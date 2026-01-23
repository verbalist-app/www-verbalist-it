import { ShoppingBag, Package, FileText, TrendingUp } from "lucide-react"
import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { TrustedBy } from "@/components/trusted-by"
import { FeatureChecklist } from "@/components/feature-checklist"
import { HighlightBlock } from "@/components/highlight-block"

export const metadata: Metadata = {
  title: "Verbalist per eCommerce",
  description: "Pagine prodotto ottimizzate basate sui pattern SERP. Descrizioni, specifiche e contenuti che convertono.",
  alternates: {
    canonical: "/soluzioni/ecommerce",
  },
  openGraph: {
    title: "Verbalist per eCommerce",
    description: "Pagine prodotto ottimizzate basate sui pattern SERP. Descrizioni, specifiche e contenuti che convertono.",
  },
}

const featureColumns = [
  {
    items: [
      "Pagine prodotto strutturate",
      "Descrizioni ottimizzate",
      "Key features in evidenza",
      "Specifiche tecniche",
    ],
  },
  {
    items: [
      "Analisi SERP per categoria",
      "Pattern dei competitor",
      "Struttura che converte",
      "CTA ottimizzate",
    ],
  },
  {
    items: [
      "Title tag per prodotti",
      "Meta description efficaci",
      "Suggerimenti immagini",
      "Alt text per SEO",
    ],
  },
]

function ProductPageIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-3">
        <div className="rounded-lg border bg-background p-3 shadow-sm">
          <div className="text-xs font-medium mb-2">Pagina Prodotto</div>
          <div className="space-y-2">
            <div className="h-20 rounded bg-muted flex items-center justify-center text-xs text-muted-foreground">
              Immagine prodotto
            </div>
            <div className="h-2 w-3/4 rounded bg-foreground/60" />
            <div className="h-2 w-full rounded bg-foreground/30" />
            <div className="h-2 w-2/3 rounded bg-foreground/30" />
            <div className="flex gap-2 mt-3">
              <div className="flex-1 h-6 rounded bg-foreground/20 flex items-center justify-center text-[10px]">
                Specs
              </div>
              <div className="flex-1 h-6 rounded bg-foreground/20 flex items-center justify-center text-[10px]">
                Reviews
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SerpCompetitorIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-3">
        <div className="rounded-lg border bg-background p-3 shadow-sm">
          <div className="text-xs font-medium text-muted-foreground mb-2">Pattern pagine prodotto</div>
          <div className="space-y-2">
            {[
              { section: "Hero con beneficio", pct: 95 },
              { section: "Features bullet", pct: 90 },
              { section: "Specifiche tecniche", pct: 85 },
              { section: "Use case", pct: 70 },
              { section: "FAQ prodotto", pct: 60 },
            ].map((item) => (
              <div key={item.section} className="flex items-center gap-2">
                <div className="flex-1 h-1.5 rounded-full bg-muted">
                  <div className="h-full rounded-full bg-foreground" style={{ width: `${item.pct}%` }} />
                </div>
                <span className="text-[10px] w-28 truncate">{item.section}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function EcommercePage() {
  return (
    <>
      <SubPageHero
        icon={ShoppingBag}
        title="Verbalist per eCommerce"
        description="Analizza le pagine prodotto che rankano. Genera bozze con la struttura che funziona: descrizioni, features, specifiche."
      />

      <TrustedBy />

      <FeatureChecklist
        title="Pagine prodotto data-driven"
        description="Analisi SERP per capire cosa funziona. Bozze strutturate con le sezioni che convertono."
        columns={featureColumns}
      />

      <HighlightBlock
        icon={Package}
        title="Struttura pagina prodotto"
        description="Verbalist genera bozze per pagine prodotto con hero, key features, specifiche tecniche e sezione use case. Basate sui pattern delle pagine che rankano per la tua keyword."
        visual={<ProductPageIllustration />}
      />

      <HighlightBlock
        icon={TrendingUp}
        title="Pattern dai competitor"
        description="Analizza cosa hanno in comune le pagine prodotto in prima pagina. Quali sezioni includono, come le strutturano, che lunghezza hanno. Replica quello che funziona."
        visual={<SerpCompetitorIllustration />}
        reverse
      />

      <SubPageCTA />
    </>
  )
}

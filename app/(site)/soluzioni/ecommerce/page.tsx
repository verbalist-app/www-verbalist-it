import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { BentoGrid } from "@/components/bento-grid"

export const metadata: Metadata = {
  title: "Contenuti GEO per eCommerce",
  description: "Pagine prodotto e categorie ottimizzate per Google e la ricerca AI. Approccio GEO SEO con pattern dai competitor e contenuti citabili dagli LLM.",
  alternates: {
    canonical: "/soluzioni/ecommerce",
  },
  openGraph: {
    title: "Contenuti GEO per eCommerce \\ Verbalist",
    description: "Pagine prodotto e categorie ottimizzate per Google e la ricerca AI. Approccio GEO SEO con pattern dai competitor e contenuti citabili dagli LLM.",
  },
}

function ProductStructureIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="flex gap-3">
          <div className="size-12 shrink-0 rounded-md bg-foreground/6" />
          <div className="flex-1 space-y-2">
            <div className="h-2 w-3/4 rounded bg-foreground/20" />
            <div className="h-1.5 w-full rounded bg-foreground/8" />
            <div className="h-1.5 w-4/5 rounded bg-foreground/8" />
          </div>
        </div>
      </div>
    </div>
  )
}

function CompetitorCompareIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-2">
          {[100, 80, 90, 60].map((pct, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-foreground/8">
                <div className="h-full rounded-full bg-foreground/20" style={{ width: `${pct}%` }} />
              </div>
              <span className="shrink-0 text-[9px] font-medium text-foreground/30">{pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function LlmReadyIllustration() {
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
        </div>
      </div>
    </div>
  )
}

function CategoryListingIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="grid grid-cols-3 gap-2">
          {[12, 10, 8, 15, 10, 12].map((opacity, i) => (
            <div key={i} className="h-8 rounded-md" style={{ backgroundColor: `hsl(0 0% 0% / ${opacity}%)` }} />
          ))}
        </div>
      </div>
    </div>
  )
}

function SchemaReadyIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-2">
          <div className="h-1.5 w-3/4 rounded bg-foreground/15" />
          <div className="ml-4 space-y-2">
            <div className="h-1.5 w-4/5 rounded bg-foreground/10" />
            <div className="ml-4 space-y-2">
              <div className="h-1.5 w-3/5 rounded bg-foreground/8" />
              <div className="h-1.5 w-2/3 rounded bg-foreground/8" />
            </div>
            <div className="h-1.5 w-3/4 rounded bg-foreground/10" />
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
        label="eCommerce"
        title="Pagine prodotto che Google e l'AI trovano"
        description="Descrizioni strutturate per posizionarsi nei risultati e farsi citare dagli assistenti AI."
      />

      <BentoGrid
        items={[
          {
            title: "Struttura prodotto",
            description: "Hero, key features, specifiche e use case. Struttura semantica per Google e la ricerca AI.",
            visual: <ProductStructureIllustration />,
          },
          {
            title: "Analisi competitor",
            description: "Top 10 risultati per categoria analizzati. Pattern delle sezioni, qualita e autorevolezza estratti.",
            visual: <CompetitorCompareIllustration />,
          },
          {
            title: "Descrizioni LLM-ready",
            description: "Title tag, meta description e contenuti strutturati per essere citati da ChatGPT, Perplexity e AI Overview.",
            visual: <LlmReadyIllustration />,
          },
          {
            title: "Categorie e listing",
            description: "Non solo schede prodotto. Genera contenuti per pagine categoria con struttura SEO e topic completi.",
            visual: <CategoryListingIllustration />,
          },
          {
            title: "Schema-ready",
            description: "Struttura pensata per Product schema, FAQ schema e Review schema. Markup semantico integrato nel contenuto.",
            visual: <SchemaReadyIllustration />,
          },
        ]}
      />

      <SubPageCTA />
    </>
  )
}

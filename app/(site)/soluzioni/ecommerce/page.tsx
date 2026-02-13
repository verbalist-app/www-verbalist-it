import { Package, ShoppingBag, TrendingUp, FileText, Search, BarChart3 } from "lucide-react"
import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { FeatureGrid } from "@/components/feature-grid"

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

const features = [
  {
    icon: Package,
    title: "Pagine prodotto con struttura semantica",
    description: "Hero, key features, specifiche tecniche e use case. Strutturate per essere indicizzate da Google e citate nella ricerca AI.",
  },
  {
    icon: Search,
    title: "Analisi SERP per categoria",
    description: "Analizza i top 10 risultati per ogni categoria e keyword di prodotto. Estrae i pattern che funzionano.",
  },
  {
    icon: BarChart3,
    title: "Pattern dei competitor",
    description: "Identifica quali sezioni includono, come le strutturano e quali segnali E-E-A-T utilizzano le pagine meglio posizionate.",
  },
  {
    icon: FileText,
    title: "Descrizioni ottimizzate per LLM",
    description: "Descrizioni prodotto con struttura semantica chiara. Title tag, meta description e contenuti pensati per Google e la ricerca AI.",
  },
  {
    icon: TrendingUp,
    title: "Contenuti citabili",
    description: "Definizioni, specifiche e comparazioni strutturate per essere referenziate da ChatGPT, Perplexity e AI Overview.",
  },
  {
    icon: ShoppingBag,
    title: "Scalabile per cataloghi",
    description: "Dalla singola scheda prodotto al catalogo completo. Workflow ripetibile per centinaia di pagine.",
  },
]

export default function EcommercePage() {
  return (
    <>
      <SubPageHero
        label="eCommerce"
        title="Pagine prodotto visibili su Google e nella ricerca AI"
        description="Analizza le pagine prodotto meglio posizionate e genera descrizioni con struttura semantica ottimizzata per la SERP e per essere citate dagli assistenti AI."
      />

      <FeatureGrid
        title="Pagine prodotto pensate per la GEO"
        description="Analisi SERP per capire cosa funziona. Contenuti strutturati per Google, ChatGPT e Perplexity."
        items={features}
      />

      <SubPageCTA />
    </>
  )
}

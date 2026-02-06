import { Package, ShoppingBag, TrendingUp, FileText, Search, BarChart3 } from "lucide-react"
import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { FeatureGrid } from "@/components/feature-grid"

export const metadata: Metadata = {
  title: "SEO per eCommerce",
  description: "Descrizioni prodotto SEO generate con AI. Analisi pattern SERP, contenuti ottimizzati per categorie e schede prodotto.",
  alternates: {
    canonical: "/soluzioni/ecommerce",
  },
  openGraph: {
    title: "SEO per eCommerce — Verbalist",
    description: "Descrizioni prodotto SEO generate con AI. Analisi pattern SERP, contenuti ottimizzati per categorie e schede prodotto.",
  },
}

const features = [
  {
    icon: Package,
    title: "Pagine prodotto strutturate",
    description: "Hero, key features, specifiche tecniche e use case. Basate sui pattern delle pagine meglio posizionate.",
  },
  {
    icon: Search,
    title: "Analisi SERP per categoria",
    description: "Analizza i top 10 risultati per ogni categoria e keyword di prodotto. Capisci cosa funziona.",
  },
  {
    icon: BarChart3,
    title: "Pattern dei competitor",
    description: "Identifica quali sezioni includono, come le strutturano e che lunghezza hanno le pagine in prima posizione.",
  },
  {
    icon: FileText,
    title: "Descrizioni ottimizzate",
    description: "Descrizioni prodotto con keyword, benefici e specifiche. Title tag e meta description per ogni scheda.",
  },
  {
    icon: TrendingUp,
    title: "CTA che convertono",
    description: "Call-to-action ottimizzate basate sui pattern dei competitor. Struttura coerente con i contenuti meglio posizionati.",
  },
  {
    icon: ShoppingBag,
    title: "Adatto a cataloghi grandi",
    description: "Dalla singola scheda prodotto al catalogo completo. Workflow ripetibile per centinaia di pagine.",
  },
]

export default function EcommercePage() {
  return (
    <>
      <SubPageHero
        label="eCommerce"
        title="Pagine prodotto ottimizzate, partendo dai dati"
        description="Analizza le pagine prodotto meglio posizionate e genera descrizioni, caratteristiche e specifiche ottimizzate per la SERP."
      />

      <FeatureGrid
        title="Pagine prodotto basate sui dati"
        description="Analisi SERP per capire cosa funziona. Bozze strutturate con le sezioni più efficaci."
        items={features}
      />

      <SubPageCTA />
    </>
  )
}

import { FileText, Palette, PenTool, Target, Layers, RefreshCw } from "lucide-react"
import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { FeatureGrid } from "@/components/feature-grid"

export const metadata: Metadata = {
  title: "Generatore Contenuti AI",
  description: "Scrittura AI per blog, landing page e guide. Tono di voce personalizzabile, struttura ottimizzata e contenuti pronti da pubblicare.",
  alternates: {
    canonical: "/soluzioni/team-marketing",
  },
  openGraph: {
    title: "Generatore Contenuti AI per Content Manager — Verbalist",
    description: "Scrittura AI per blog, landing page e guide. Tono di voce personalizzabile, struttura ottimizzata e contenuti pronti da pubblicare.",
  },
}

const features = [
  {
    icon: FileText,
    title: "Blog post ottimizzati",
    description: "Bozze strutturate con heading, paragrafi e meta tag basati sui pattern dei contenuti meglio posizionati.",
  },
  {
    icon: Palette,
    title: "Tono di voce configurabile",
    description: "Professionale, conversazionale o tecnico. Ogni bozza rispetta il tuo stile e le linee guida del brand.",
  },
  {
    icon: PenTool,
    title: "Landing page e guide",
    description: "Struttura, sezioni e CTA adattati al formato. Dal search intent al contenuto finale.",
  },
  {
    icon: Target,
    title: "Target audience personalizzabile",
    description: "Definisci il tuo pubblico target e Verbalist adatta linguaggio, profondità e tono di conseguenza.",
  },
  {
    icon: Layers,
    title: "Title tag e meta description",
    description: "SEO on-page generata automaticamente: title, meta description, slug e struttura heading ottimizzata.",
  },
  {
    icon: RefreshCw,
    title: "Export e iterazione",
    description: "Export in Markdown e HTML. Rifinisci, itera e pubblica. Storico documenti per ogni progetto.",
  },
]

export default function TeamMarketingPage() {
  return (
    <>
      <SubPageHero
        label="Content Manager"
        title="Bozze SEO strutturate, senza analisi manuale"
        description="L'analisi SERP e l'estrazione dei pattern sono automatiche. Tu ricevi bozze strutturate nel tuo tono di voce, pronte da rifinire."
      />

      <FeatureGrid
        title="Contenuti per ogni formato"
        description="Blog post, landing page, guide, pagine prodotto. Ogni formato con la struttura ottimale per la SERP."
        items={features}
      />

      <SubPageCTA />
    </>
  )
}

import { FileText, Palette, PenTool, Target, Layers, RefreshCw } from "lucide-react"
import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { FeatureGrid } from "@/components/feature-grid"

export const metadata: Metadata = {
  title: "Contenuti GEO per Content Creator",
  description: "Bozze strutturate per blog, landing page e guide, ottimizzate per Google e la ricerca AI. Tono di voce personalizzabile, output pronto da rifinire.",
  alternates: {
    canonical: "/soluzioni/team-marketing",
  },
  openGraph: {
    title: "Contenuti GEO per Content Creator \\ Verbalist",
    description: "Bozze strutturate per blog, landing page e guide, ottimizzate per Google e la ricerca AI. Tono di voce personalizzabile, output pronto da rifinire.",
  },
}

const features = [
  {
    icon: FileText,
    title: "Blog post strutturati per la ricerca AI",
    description: "Bozze con heading, paragrafi e meta tag basati sui pattern dei contenuti che funzionano su Google e vengono citati dagli LLM.",
  },
  {
    icon: Palette,
    title: "Tono di voce configurabile",
    description: "Professionale, conversazionale o tecnico. Ogni bozza rispetta il tuo stile e le linee guida del brand.",
  },
  {
    icon: PenTool,
    title: "Landing page e guide",
    description: "Struttura, sezioni e CTA adattati al formato. Dal search intent al contenuto finale, con struttura semantica per LLM.",
  },
  {
    icon: Target,
    title: "Target audience personalizzabile",
    description: "Definisci il tuo pubblico target e Verbalist adatta linguaggio, profondità e tono di conseguenza.",
  },
  {
    icon: Layers,
    title: "Title tag e meta description",
    description: "SEO on-page e struttura heading ottimizzata. Contenuti pensati per posizionarsi su Google e per essere citati nella ricerca AI.",
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
        label="Content Creator"
        title="Contenuti strutturati per Google e la ricerca AI"
        description="L'analisi SERP e l'estrazione dei pattern sono automatiche. Tu ricevi bozze con struttura semantica ottimizzata per la visibilità su Google, ChatGPT, Perplexity e AI Overview."
      />

      <FeatureGrid
        title="Contenuti per ogni formato, ottimizzati per la GEO"
        description="Blog post, landing page, guide. Ogni formato con la struttura ottimale per essere indicizzato e citato nella ricerca AI."
        items={features}
      />

      <SubPageCTA />
    </>
  )
}

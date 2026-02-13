import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { FeatureChecklist } from "@/components/feature-checklist"
import { StatsBar } from "@/components/stats-bar"

export const metadata: Metadata = {
  title: "Da SEO a GEO: strumenti per specialist",
  description: "Passa dalla SEO tradizionale alla Generative Engine Optimization. Analisi SERP, pattern detection e contenuti strutturati per la ricerca AI. Da SEO a GEO SEO.",
  alternates: {
    canonical: "/soluzioni/team-seo",
  },
  openGraph: {
    title: "Da SEO a GEO: strumenti per specialist \\ Verbalist",
    description: "Passa dalla SEO tradizionale alla Generative Engine Optimization. Analisi SERP, pattern detection e contenuti strutturati per la ricerca AI. Da SEO a GEO SEO.",
  },
}

const stats = [
  { value: "Top 10", label: "Risultati analizzati" },
  { value: "4 Step", label: "Pipeline automatica" },
  { value: "LLM-ready", label: "Output strutturato" },
  { value: "3 AI", label: "Modelli integrati" },
]

const featureColumns = [
  {
    items: [
      "Top 10 risultati organici",
      "Search intent detection",
      "Struttura heading ricorrente",
      "Word count medio e range",
    ],
  },
  {
    items: [
      "Topic e subtopic ricorrenti",
      "Content gap identification",
      "Segnali E-E-A-T rilevati",
      "Pattern di citabilità per LLM",
    ],
  },
  {
    items: [
      "Contenuti con struttura semantica per AI",
      "Definizioni chiare e citabili",
      "FAQ schema-ready",
      "Export e iterazione rapida",
    ],
  },
]

export default function TeamSeoPage() {
  return (
    <>
      <SubPageHero
        label="SEO Specialist"
        title="Dalla SEO tradizionale alla Generative Engine Optimization"
        description="I dati SERP che già conosci, applicati alla creazione di contenuti ottimizzati per la ricerca AI. Il passaggio naturale da SEO a GEO."
      />

      <StatsBar stats={stats} />

      <FeatureChecklist
        title="Analisi SERP e pattern, orientati alla GEO"
        description="Gli stessi dati che usi per la SEO — struttura, topic, E-E-A-T — applicati alla produzione di contenuti citabili da ChatGPT, Perplexity e AI Overview."
        columns={featureColumns}
      />

      <SubPageCTA />
    </>
  )
}

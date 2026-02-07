import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { FeatureChecklist } from "@/components/feature-checklist"
import { StatsBar } from "@/components/stats-bar"

export const metadata: Metadata = {
  title: "SEO Tool per Specialist",
  description: "Strumenti SEO per specialist: analisi SERP automatica, pattern detection, content gap analysis e generazione contenuti. Dati per decisioni informate.",
  alternates: {
    canonical: "/soluzioni/team-seo",
  },
  openGraph: {
    title: "SEO Tool per Specialist \ Verbalist",
    description: "Strumenti SEO per specialist: analisi SERP automatica, pattern detection, content gap analysis e generazione contenuti. Dati per decisioni informate.",
  },
}

const stats = [
  { value: "Top 10", label: "Risultati analizzati" },
  { value: "4 Step", label: "Pipeline automatica" },
  { value: "< 2 min", label: "Per keyword" },
  { value: "3 AI", label: "Modelli integrati" },
]

const featureColumns = [
  {
    items: [
      "Top 10 risultati organici",
      "Search intent detection",
      "Title e meta description",
      "Word count per risultato",
    ],
  },
  {
    items: [
      "Pattern strutturali (H1, H2, H3)",
      "Topic e subtopic ricorrenti",
      "Word count medio e range",
      "Struttura heading ricorrente",
    ],
  },
  {
    items: [
      "Segnali E-E-A-T rilevati",
      "Content gap identification",
      "Score SEO/Readability/Trust",
      "Priorità di ottimizzazione",
    ],
  },
]

export default function TeamSeoPage() {
  return (
    <>
      <SubPageHero
        label="SEO Specialist"
        title="Tutti i dati SERP che servono, in un unico strumento"
        description="Dati SERP in tempo reale, rilevamento pattern e analisi competitor. Le informazioni per prendere decisioni basate sui dati."
      />

      <StatsBar stats={stats} />

      <FeatureChecklist
        title="I dati che servono per ogni keyword"
        description="Primi 10 risultati, search intent, struttura heading, word count, segnali E-E-A-T. Tutto automatizzato."
        columns={featureColumns}
      />

      <SubPageCTA />
    </>
  )
}

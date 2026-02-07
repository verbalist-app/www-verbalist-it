import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { FeatureChecklist } from "@/components/feature-checklist"
import { StatsBar } from "@/components/stats-bar"

export const metadata: Metadata = {
  title: "GEO e AEO Optimization",
  description: "Ottimizza i contenuti per AI Overview, ChatGPT e Perplexity. Generative Engine Optimization (GEO) e Answer Engine Optimization (AEO) con dati SERP.",
  alternates: {
    canonical: "/soluzioni/ai-strategist",
  },
  openGraph: {
    title: "GEO e AEO Optimization \ Verbalist",
    description: "Ottimizza i contenuti per AI Overview, ChatGPT e Perplexity. Generative Engine Optimization (GEO) e Answer Engine Optimization (AEO) con dati SERP.",
  },
}

const stats = [
  { value: "E-E-A-T", label: "Segnali analizzati" },
  { value: "10/10", label: "Competitor scansionati" },
  { value: "GEO + AEO", label: "Doppia ottimizzazione" },
  { value: "LLM-ready", label: "Output strutturato" },
]

const featureColumns = [
  {
    items: [
      "Analisi segnali E-E-A-T",
      "Pattern di citabilità",
      "Struttura per featured snippet",
      "Definizioni chiare e citabili",
    ],
  },
  {
    items: [
      "Topic coverage completo",
      "Subtopic per depth",
      "FAQ schema-ready",
      "Contenuto strutturato",
    ],
  },
  {
    items: [
      "Trust patterns dai competitor",
      "Fonti e riferimenti",
      "Author expertise signals",
      "Freshness indicators",
    ],
  },
]

export default function AIStrategistPage() {
  return (
    <>
      <SubPageHero
        label="AI Strategist"
        title="Contenuti strutturati per essere citati dagli assistenti AI"
        description="Ottimizza per ChatGPT, Perplexity e AI Overview. Analizza segnali E-E-A-T, pattern di citabilità e strutture preferite dai modelli linguistici."
      />

      <StatsBar stats={stats} />

      <FeatureChecklist
        title="Ottimizzazione per motori generativi"
        description="Non solo Google. Contenuti pensati per essere citati da ChatGPT, Perplexity, Gemini e AI Overview."
        columns={featureColumns}
      />

      <SubPageCTA />
    </>
  )
}

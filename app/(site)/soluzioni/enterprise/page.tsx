import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { FeatureChecklist } from "@/components/feature-checklist"
import { WorkflowSteps } from "@/components/workflow-steps"

export const metadata: Metadata = {
  title: "GEO per Startup e PMI",
  description: "Contenuti ottimizzati per la ricerca AI senza un team GEO interno. Verbalist è il ponte tra SEO tradizionale e Generative Engine Optimization (GEO SEO).",
  alternates: {
    canonical: "/soluzioni/enterprise",
  },
  openGraph: {
    title: "GEO per Startup e PMI \\ Verbalist",
    description: "Contenuti ottimizzati per la ricerca AI senza un team GEO interno. Verbalist è il ponte tra SEO tradizionale e Generative Engine Optimization (GEO SEO).",
  },
}

const featureColumns = [
  {
    items: [
      "Setup in pochi minuti",
      "Nessuna competenza GEO richiesta",
      "Interfaccia guidata",
      "Progetti organizzati per keyword",
    ],
  },
  {
    items: [
      "Analisi SERP automatica",
      "Pattern dei competitor estratti",
      "Struttura semantica per LLM",
      "Segnali E-E-A-T integrati",
    ],
  },
  {
    items: [
      "Contenuti pronti per ChatGPT e Perplexity",
      "Export in Markdown e HTML",
      "Tono di voce personalizzabile",
      "Storico documenti per progetto",
    ],
  },
]

const workflowSteps = [
  {
    step: 1,
    title: "Inserisci la keyword",
    description: "Verbalist analizza i primi 10 risultati Google ed estrae i pattern di contenuto che funzionano.",
  },
  {
    step: 2,
    title: "Analisi automatica",
    description: "Struttura heading, topic ricorrenti, lunghezza, segnali E-E-A-T. Tutto estratto dai competitor in pochi secondi.",
  },
  {
    step: 3,
    title: "Generazione contenuto GEO-ready",
    description: "Un contenuto strutturato per essere indicizzato e citato nella ricerca AI. Title, meta, heading e corpo testo ottimizzati.",
  },
  {
    step: 4,
    title: "Revisione e pubblicazione",
    description: "Rifinisci il contenuto con il tuo tono di voce, esporta in Markdown o HTML e pubblica.",
  },
]

export default function EnterprisePage() {
  return (
    <>
      <SubPageHero
        label="Startup e PMI"
        title="Visibilità nella ricerca AI, senza un team GEO dedicato"
        description="Verbalist permette a startup e piccole-medie imprese di produrre contenuti ottimizzati per ChatGPT, Perplexity e AI Overview. Senza investire in un progetto GEO completo."
      />

      <WorkflowSteps
        title="Da keyword a contenuto GEO-ready in 4 step"
        description="Un workflow guidato che non richiede competenze tecniche. Inserisci la keyword, ottieni un contenuto strutturato per la ricerca AI."
        steps={workflowSteps}
      />

      <FeatureChecklist
        title="Pensato per chi non ha un team GEO interno"
        description="Interfaccia semplice, analisi automatica, contenuti strutturati per essere citati dagli assistenti AI."
        columns={featureColumns}
      />

      <SubPageCTA
        title="Vuoi vederlo in azione?"
        description="Ti mostriamo come Verbalist crea contenuti GEO-ready a partire da una keyword, applicato al tuo settore."
      />
    </>
  )
}

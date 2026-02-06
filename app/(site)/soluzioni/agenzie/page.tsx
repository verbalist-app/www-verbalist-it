import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { FeatureChecklist } from "@/components/feature-checklist"
import { WorkflowSteps } from "@/components/workflow-steps"

export const metadata: Metadata = {
  title: "Strumento SEO per Agenzie",
  description: "Piattaforma SEO per agenzie: analisi SERP, generazione contenuti AI e gestione multi-cliente. Produci contenuti per tutti i tuoi account.",
  alternates: {
    canonical: "/soluzioni/agenzie",
  },
  openGraph: {
    title: "Strumento SEO per Agenzie — Verbalist",
    description: "Piattaforma SEO per agenzie: analisi SERP, generazione contenuti AI e gestione multi-cliente. Produci contenuti per tutti i tuoi account.",
  },
}

const featureColumns = [
  {
    items: [
      "Progetti separati per cliente",
      "Dashboard multi-progetto",
      "Gestione team e permessi",
      "Workspace organizzati",
    ],
  },
  {
    items: [
      "Analisi SERP per ogni keyword",
      "Pattern detection automatico",
      "Bozze contenuto da rifinire",
      "Ottimizzazione contenuti esistenti",
    ],
  },
  {
    items: [
      "Export in Markdown e HTML",
      "Tono di voce per cliente",
      "Supporto multi-lingua",
      "Storico documenti",
    ],
  },
]

const workflowSteps = [
  {
    step: 1,
    title: "Crea il progetto per il cliente",
    description: "Workspace dedicato con keyword, documenti e storico separati per ogni account.",
  },
  {
    step: 2,
    title: "Analisi SERP automatica",
    description: "Inserisci la keyword, Verbalist recupera i top 10 risultati e analizza contenuti, struttura e pattern.",
  },
  {
    step: 3,
    title: "Generazione bozza strutturata",
    description: "Bozza con title, meta, heading e corpo testo basata sui pattern ricorrenti. Tono di voce personalizzato per cliente.",
  },
  {
    step: 4,
    title: "Review e pubblicazione",
    description: "Il tuo team rifinisce la bozza, la adatta e pubblica. Export in Markdown o HTML.",
  },
]

export default function AgenziePage() {
  return (
    <>
      <SubPageHero
        label="Agenzie"
        title="Un workflow per la produzione contenuti su ogni account"
        description="Analisi SERP e generazione contenuti centralizzati per tutti i tuoi clienti. Meno tempo sulla ricerca, più tempo sulla strategia."
      />

      <WorkflowSteps
        title="Workflow strutturato per ogni cliente"
        description="Dalla keyword alla bozza in 4 step. Il tuo team si concentra su strategia e rifinitura."
        steps={workflowSteps}
      />

      <FeatureChecklist
        title="Tutto quello che serve all'agenzia"
        description="Organizza progetti, analizza competitor e genera bozze. Il tuo team si concentra su strategia e rifinitura."
        columns={featureColumns}
      />

      <SubPageCTA />
    </>
  )
}

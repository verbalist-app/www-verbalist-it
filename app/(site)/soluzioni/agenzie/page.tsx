import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import Testimonials from "@/components/testimonials-4"
import { FeatureChecklist } from "@/components/feature-checklist"
import { WorkflowSteps } from "@/components/workflow-steps"

export const metadata: Metadata = {
  title: "Contenuti GEO-ready per agenzie",
  description: "Produci contenuti GEO SEO per ogni cliente. Analisi SERP, pattern detection e generazione ottimizzata per la ricerca AI in un unico workflow.",
  alternates: {
    canonical: "/soluzioni/agenzie",
  },
  openGraph: {
    title: "Contenuti GEO-ready per agenzie \\ Verbalist",
    description: "Produci contenuti GEO SEO per ogni cliente. Analisi SERP, pattern detection e generazione ottimizzata per la ricerca AI in un unico workflow.",
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
      "Struttura semantica per LLM",
      "Segnali E-E-A-T estratti",
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
    description: "Inserisci la keyword, Verbalist analizza i top 10 risultati ed estrae struttura, topic e segnali E-E-A-T.",
  },
  {
    step: 3,
    title: "Generazione contenuto GEO-ready",
    description: "Bozza con struttura semantica ottimizzata per la ricerca AI. Title, meta, heading e corpo testo. Tono di voce personalizzato per cliente.",
  },
  {
    step: 4,
    title: "Review e pubblicazione",
    description: "Il tuo team rifinisce la bozza, la adatta al brand del cliente e pubblica. Export in Markdown o HTML.",
  },
]

export default function AgenziePage() {
  return (
    <>
      <SubPageHero
        label="Agenzie"
        title="Contenuti GEO-ready per ogni cliente, da un unico workflow"
        description="Offri ai tuoi clienti contenuti ottimizzati per ChatGPT, Perplexity e AI Overview. Senza costruire un framework GEO interno per ogni account."
      />

      <WorkflowSteps
        title="Dalla keyword al contenuto GEO-ready"
        description="Un workflow strutturato per ogni cliente. Il tuo team si concentra su strategia e rifinitura."
        steps={workflowSteps}
      />

      <FeatureChecklist
        title="Gestione multi-cliente con output GEO"
        description="Organizza progetti, analizza competitor e genera contenuti strutturati per la ricerca AI. Per ogni account."
        columns={featureColumns}
      />

      <Testimonials />

      <SubPageCTA />
    </>
  )
}

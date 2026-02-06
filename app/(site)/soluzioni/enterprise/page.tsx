import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { FeatureChecklist } from "@/components/feature-checklist"
import { WorkflowSteps } from "@/components/workflow-steps"

export const metadata: Metadata = {
  title: "Software SEO Enterprise",
  description: "Piattaforma SEO per grandi organizzazioni. Analisi SERP, generazione contenuti AI e workflow ad alto volume. Team dedicato e configurazioni personalizzate.",
  alternates: {
    canonical: "/soluzioni/enterprise",
  },
  openGraph: {
    title: "Software SEO Enterprise — Verbalist",
    description: "Piattaforma SEO per grandi organizzazioni. Analisi SERP, generazione contenuti AI e workflow ad alto volume. Team dedicato e configurazioni personalizzate.",
  },
}

const featureColumns = [
  {
    items: [
      "Account manager dedicato",
      "Supporto prioritario",
      "Onboarding personalizzato",
      "Training per il team",
    ],
  },
  {
    items: [
      "Configurazioni custom",
      "Workflow su misura",
      "Integrazioni dedicate",
      "SLA garantiti",
    ],
  },
  {
    items: [
      "Gestione team avanzata",
      "Permessi granulari",
      "Audit e compliance",
      "Fatturazione centralizzata",
    ],
  },
]

const workflowSteps = [
  {
    step: 1,
    title: "Onboarding personalizzato",
    description: "Account manager dedicato configura la piattaforma sulle vostre esigenze: ruoli, permessi, workflow e integrazioni.",
  },
  {
    step: 2,
    title: "Distribuzione ai team",
    description: "Admin, editor, viewer con accessi differenziati. Ogni team ha i suoi progetti e le sue keyword.",
  },
  {
    step: 3,
    title: "Produzione ad alto volume",
    description: "Pipeline automatica dalla keyword al contenuto. Dashboard centralizzata per monitorare attività e output di tutti i team.",
  },
  {
    step: 4,
    title: "Review e ottimizzazione",
    description: "Review periodiche con l'account manager per ottimizzare l'utilizzo. Reportistica avanzata e SLA garantiti.",
  },
]

export default function EnterprisePage() {
  return (
    <>
      <SubPageHero
        label="Enterprise"
        title="Contenuti SEO per grandi organizzazioni"
        description="Distribuisci Verbalist in tutta la tua organizzazione con supporto dedicato, configurazioni custom, permessi granulari e SLA garantiti."
      />

      <WorkflowSteps
        title="Implementazione guidata"
        description="Dall'onboarding alla produzione ad alto volume in 4 step, con un account manager dedicato."
        steps={workflowSteps}
      />

      <FeatureChecklist
        title="Progettato per le grandi organizzazioni"
        description="Gestione team avanzata, supporto prioritario e configurazioni personalizzate per le vostre esigenze."
        columns={featureColumns}
      />

      <SubPageCTA
        title="Parliamo delle vostre esigenze"
        description="Contattateci per una demo personalizzata e per discutere le configurazioni più adatte alla vostra organizzazione."
      />
    </>
  )
}

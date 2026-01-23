import { Building2, Users, FolderKanban, FileOutput } from "lucide-react"
import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { TrustedBy } from "@/components/trusted-by"
import { FeatureChecklist } from "@/components/feature-checklist"
import { HighlightBlock } from "@/components/highlight-block"

export const metadata: Metadata = {
  title: "Strumenti SEO per Agenzie | Content Platform",
  description: "Piattaforma SEO per agenzie: analisi SERP, generazione contenuti AI e gestione multi-cliente. Scala la produzione di contenuti per i tuoi clienti.",
  alternates: {
    canonical: "/soluzioni/agenzie",
  },
  openGraph: {
    title: "Strumenti SEO per Agenzie — Verbalist",
    description: "Piattaforma SEO per agenzie: analisi SERP, generazione contenuti AI e gestione multi-cliente. Scala la produzione di contenuti per i tuoi clienti.",
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
      "Tone of voice per cliente",
      "Supporto multi-lingua",
      "Storico documenti",
    ],
  },
]

function DashboardIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-3">
        <div className="rounded-lg border bg-background p-3 shadow-sm">
          <div className="text-xs font-medium text-muted-foreground mb-2">Progetti attivi</div>
          <div className="space-y-2">
            {["Cliente A - E-commerce", "Cliente B - SaaS", "Cliente C - Local"].map((project) => (
              <div key={project} className="flex items-center justify-between rounded bg-muted p-2">
                <span className="text-xs">{project}</span>
                <span className="text-[10px] text-muted-foreground">3 documenti</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function WorkflowIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-2">
        {[
          { step: "1", label: "Analisi SERP", status: "done" },
          { step: "2", label: "Pattern detection", status: "done" },
          { step: "3", label: "Bozza contenuto", status: "done" },
          { step: "4", label: "Review del team", status: "current" },
        ].map((item) => (
          <div key={item.step} className="flex items-center gap-3 rounded-lg border bg-background p-3 shadow-sm">
            <span className={`flex size-6 items-center justify-center rounded-full text-xs font-medium ${
              item.status === "done" ? "bg-foreground text-background" :
              item.status === "current" ? "bg-muted-foreground/20 text-foreground" : "bg-muted text-muted-foreground"
            }`}>
              {item.status === "done" ? "✓" : item.step}
            </span>
            <span className="text-sm">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function AgenziePage() {
  return (
    <>
      <SubPageHero
        icon={Building2}
        title="Verbalist per Agenzie"
        description="Analisi SERP e bozze di contenuto per ogni cliente. Meno tempo sulla ricerca, più tempo sulla strategia e sulla qualità."
      />

      <TrustedBy />

      <FeatureChecklist
        title="Workflow strutturato per ogni cliente"
        description="Organizza progetti, analizza competitor e genera bozze. Il tuo team si concentra su strategia e rifinitura."
        columns={featureColumns}
      />

      <HighlightBlock
        icon={FolderKanban}
        title="Un progetto per ogni cliente"
        description="Organizza il lavoro per cliente con workspace separati. Ogni progetto ha le sue keyword, i suoi documenti e il suo storico. Tutto in un posto."
        visual={<DashboardIllustration />}
      />

      <HighlightBlock
        icon={FileOutput}
        title="Dalla keyword alla bozza"
        description="Inserisci la keyword, Verbalist analizza la SERP, identifica i pattern vincenti e genera una bozza strutturata. Il tuo team la rifinisce e la pubblica."
        visual={<WorkflowIllustration />}
        reverse
      />

      <SubPageCTA />
    </>
  )
}

import { Building2, Users, Zap, BarChart3 } from "lucide-react"
import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { TrustedBy } from "@/components/trusted-by"
import { FeatureChecklist } from "@/components/feature-checklist"
import { HighlightBlock } from "@/components/highlight-block"
import { Testimonials } from "@/components/testimonials"

export const metadata: Metadata = {
  title: "Verbalist per Agenzie",
  description: "Verbalist supporta il tuo team nella produzione di contenuti SEO. Analisi, pattern e bozze pronte da rifinire.",
  alternates: {
    canonical: "/soluzioni/agenzie",
  },
  openGraph: {
    title: "Verbalist per Agenzie",
    description: "Verbalist supporta il tuo team nella produzione di contenuti SEO. Analisi, pattern e bozze pronte da rifinire.",
  },
}

const featureColumns = [
  {
    items: [
      "Multi-progetto in una dashboard",
      "Organizzazione per cliente",
      "Gestione team e permessi",
      "Workspace separati",
    ],
  },
  {
    items: [
      "Report white-label",
      "Export personalizzabili",
      "Branding completo",
      "Delivery automatico",
    ],
  },
  {
    items: [
      "Analisi SERP bulk",
      "Pattern detection automatico",
      "Generazione contenuti scalabile",
      "API per integrazioni",
    ],
  },
]

const testimonials = [
  {
    metric: "80% tempo",
    quote: "L'analisi SERP e la ricerca pattern ci prendevano ore. Ora il team può concentrarsi sulla strategia e sulla rifinitura dei contenuti.",
    author: "Marco R.",
    role: "Head of Content",
    company: "Agenzia SEO Milano",
  },
  {
    metric: "Più focus",
    quote: "Il team dedica più tempo alla qualità e al cliente, meno alle attività ripetitive di analisi.",
    author: "Laura B.",
    role: "CEO",
    company: "Digital Agency Roma",
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
                <span className="text-[10px] text-green-600">12 articoli</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ReportIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-3">
        <div className="rounded-lg border bg-background p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <div className="size-8 rounded bg-foreground/10" />
            <div className="text-xs font-medium">Il tuo logo</div>
          </div>
          <div className="space-y-2">
            <div className="h-2 w-3/4 rounded bg-muted-foreground/30" />
            <div className="h-2 w-full rounded bg-muted-foreground/20" />
            <div className="h-2 w-2/3 rounded bg-muted-foreground/20" />
          </div>
          <div className="mt-4 pt-4 border-t flex justify-between text-[10px] text-muted-foreground">
            <span>Report generato per Cliente A</span>
            <span>PDF</span>
          </div>
        </div>
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
        description="Analisi SERP, pattern detection e bozze di contenuto. Verbalist supporta il tuo team nella fase di ricerca e prima stesura."
      />

      <TrustedBy />

      <FeatureChecklist
        title="Tutto quello che serve alla tua agenzia"
        description="Gestione multi-cliente, report brandizzati e produzione scalabile."
        columns={featureColumns}
      />

      <HighlightBlock
        icon={Users}
        title="Una dashboard, tutti i clienti"
        description="Organizza progetti per cliente. Vedi lo stato di ogni contenuto. Gestisci il team con permessi granulari. Tutto da un posto solo."
        visual={<DashboardIllustration />}
      />

      <HighlightBlock
        icon={BarChart3}
        title="Report col tuo brand"
        description="Esporta report personalizzati con il tuo logo. Mostra ai clienti i risultati dell'analisi SERP e dei contenuti generati. White-label completo."
        visual={<ReportIllustration />}
        reverse
      />

      <Testimonials testimonials={testimonials} />

      <SubPageCTA />
    </>
  )
}

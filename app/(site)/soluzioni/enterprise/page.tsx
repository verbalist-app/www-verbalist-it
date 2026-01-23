import { Building, Shield, Users, Headphones } from "lucide-react"
import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { TrustedBy } from "@/components/trusted-by"
import { FeatureChecklist } from "@/components/feature-checklist"
import { HighlightBlock } from "@/components/highlight-block"

export const metadata: Metadata = {
  title: "Verbalist Enterprise",
  description: "Soluzioni personalizzate per grandi organizzazioni. Team dedicato, configurazioni custom e supporto prioritario.",
  alternates: {
    canonical: "/soluzioni/enterprise",
  },
  openGraph: {
    title: "Verbalist Enterprise",
    description: "Soluzioni personalizzate per grandi organizzazioni. Team dedicato, configurazioni custom e supporto prioritario.",
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

function TeamIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-3">
        <div className="rounded-lg border bg-background p-3 shadow-sm">
          <div className="text-xs font-medium text-muted-foreground mb-3">Gestione Team</div>
          <div className="space-y-2">
            {[
              { role: "Admin", users: 2, color: "bg-foreground" },
              { role: "Editor", users: 8, color: "bg-foreground/70" },
              { role: "Viewer", users: 15, color: "bg-foreground/40" },
            ].map((item) => (
              <div key={item.role} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`size-2 rounded-full ${item.color}`} />
                  <span className="text-xs">{item.role}</span>
                </div>
                <span className="text-xs text-muted-foreground">{item.users} utenti</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border bg-background p-3 shadow-sm">
          <div className="flex items-center justify-between text-xs">
            <span>Progetti attivi</span>
            <span className="font-medium">24</span>
          </div>
          <div className="flex items-center justify-between text-xs mt-1">
            <span>Documenti questo mese</span>
            <span className="font-medium">156</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function SupportIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-3">
        <div className="rounded-lg border bg-background p-4 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="size-10 rounded-full bg-muted flex items-center justify-center">
              <Headphones className="size-5 text-muted-foreground" />
            </div>
            <div>
              <div className="text-sm font-medium">Supporto dedicato</div>
              <div className="text-xs text-muted-foreground">Account manager assegnato</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span>Tempo di risposta</span>
              <span className="font-medium">{'<'} 4 ore</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span>Canale prioritario</span>
              <span className="font-medium">Slack/Teams</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span>Review periodiche</span>
              <span className="font-medium">Mensili</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function EnterprisePage() {
  return (
    <>
      <SubPageHero
        icon={Building}
        title="Verbalist Enterprise"
        description="Soluzioni su misura per organizzazioni con esigenze specifiche. Supporto dedicato, configurazioni custom e SLA garantiti."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Soluzioni", href: "/soluzioni/enterprise" },
          { label: "Enterprise" },
        ]}
      />

      <TrustedBy />

      <FeatureChecklist
        title="Progettato per le grandi organizzazioni"
        description="Gestione team avanzata, supporto prioritario e configurazioni personalizzate per le vostre esigenze."
        columns={featureColumns}
      />

      <HighlightBlock
        icon={Users}
        title="Gestione team enterprise"
        description="Ruoli e permessi granulari per ogni membro del team. Admin, editor, viewer con accessi differenziati. Dashboard centralizzata per monitorare attività e utilizzo."
        visual={<TeamIllustration />}
      />

      <HighlightBlock
        icon={Headphones}
        title="Supporto dedicato"
        description="Account manager assegnato al vostro team. Canale di comunicazione prioritario via Slack o Teams. Review periodiche per ottimizzare l'utilizzo della piattaforma."
        visual={<SupportIllustration />}
        reverse
      />

      <SubPageCTA
        title="Parliamo delle vostre esigenze"
        description="Contattateci per una demo personalizzata e per discutere le configurazioni più adatte alla vostra organizzazione."
      />
    </>
  )
}

import { Megaphone, PenTool, Palette, Sparkles } from "lucide-react"
import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { TrustedBy } from "@/components/trusted-by"
import { FeatureChecklist } from "@/components/feature-checklist"
import { HighlightBlock } from "@/components/highlight-block"
import { Testimonials } from "@/components/testimonials"

export const metadata: Metadata = {
  title: "Verbalist per Team Marketing",
  description: "Contenuti che rankano e convertono. Per team marketing che non vogliono scegliere tra SEO e copy.",
  alternates: {
    canonical: "/soluzioni/team-marketing",
  },
  openGraph: {
    title: "Verbalist per Team Marketing",
    description: "Contenuti che rankano e convertono. Per team marketing che non vogliono scegliere tra SEO e copy.",
  },
}

const featureColumns = [
  {
    items: [
      "Blog post ottimizzati SEO",
      "Landing page che convertono",
      "Copy per campagne",
      "Contenuti social ready",
    ],
  },
  {
    items: [
      "Tone of voice personalizzabile",
      "Brand guidelines integrate",
      "Template riutilizzabili",
      "Stile consistente",
    ],
  },
  {
    items: [
      "Calendario editoriale",
      "Workflow di approvazione",
      "Export multi-formato",
      "Integrazione CMS",
    ],
  },
]

const testimonials = [
  {
    metric: "5x più veloce",
    quote: "Dalla keyword al contenuto pubblicato in un pomeriggio. Prima ci voleva una settimana.",
    author: "Francesca D.",
    role: "Content Manager",
    company: "SaaS B2B",
  },
  {
    metric: "Consistenza 100%",
    quote: "Finalmente tutti i contenuti seguono lo stesso tone of voice. Il brand è riconoscibile ovunque.",
    author: "Roberto L.",
    role: "Marketing Director",
    company: "E-commerce",
  },
]

function ToneIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-3">
        <div className="rounded-lg border bg-background p-3 shadow-sm">
          <div className="text-xs font-medium text-muted-foreground mb-3">Tone of Voice</div>
          <div className="grid grid-cols-2 gap-2">
            {[
              { tone: "Professional", active: true },
              { tone: "Friendly", active: false },
              { tone: "Technical", active: false },
              { tone: "Casual", active: false },
            ].map((item) => (
              <div
                key={item.tone}
                className={`rounded p-2 text-center text-xs ${
                  item.active ? "bg-foreground text-background font-medium" : "bg-muted"
                }`}
              >
                {item.tone}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border bg-background p-3 shadow-sm">
          <div className="space-y-2">
            <div className="h-2 w-full rounded bg-foreground/60" />
            <div className="h-2 w-4/5 rounded bg-foreground/40" />
            <div className="h-2 w-3/4 rounded bg-foreground/40" />
          </div>
          <div className="mt-3 text-[10px] text-muted-foreground text-center">
            Contenuto generato con il tuo stile
          </div>
        </div>
      </div>
    </div>
  )
}

function ContentIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-2">
        {[
          { type: "Blog Post", status: "Pubblicato", color: "bg-green-500" },
          { type: "Landing Page", status: "In review", color: "bg-yellow-500" },
          { type: "Social Copy", status: "Draft", color: "bg-muted-foreground" },
        ].map((item) => (
          <div key={item.type} className="flex items-center justify-between rounded-lg border bg-background p-3 shadow-sm">
            <div className="flex items-center gap-2">
              <div className={`size-2 rounded-full ${item.color}`} />
              <span className="text-sm">{item.type}</span>
            </div>
            <span className="text-[10px] text-muted-foreground">{item.status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function TeamMarketingPage() {
  return (
    <>
      <SubPageHero
        icon={Megaphone}
        title="Verbalist per Team Marketing"
        description="Contenuti che si posizionano e convertono. Senza scegliere tra SEO e copy."
      />

      <TrustedBy />

      <FeatureChecklist
        title="Content marketing senza compromessi"
        description="SEO e copy insieme. Qualità e velocità. Brand e performance."
        columns={featureColumns}
      />

      <HighlightBlock
        icon={Palette}
        title="Il tuo tone of voice, sempre"
        description="Configura lo stile del tuo brand una volta. Ogni bozza generata rispetta le tue guidelines. Professionale, friendly, tecnico: tu definisci lo stile, Verbalist ti aiuta a partire."
        visual={<ToneIllustration />}
      />

      <HighlightBlock
        icon={PenTool}
        title="Da idea a pubblicazione"
        description="Blog, landing, social: tutti i formati che servono. Workflow di approvazione integrato. Export diretto al tuo CMS. Meno passaggi, più contenuti."
        visual={<ContentIllustration />}
        reverse
      />

      <Testimonials testimonials={testimonials} />

      <SubPageCTA />
    </>
  )
}

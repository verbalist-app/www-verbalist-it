import { Search, Globe, BarChart3, FileOutput } from "lucide-react"
import { cn } from "@/lib/utils"

interface IncentivesSectionProps {
  className?: string
}

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Keyword",
    description: "Inserisci la keyword target. Il sistema parte da qui.",
  },
  {
    number: "02",
    icon: Globe,
    title: "Analisi SERP",
    description: "Estrae i top 10 risultati Google e scrapa i contenuti competitor.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Pattern",
    description: "Identifica struttura, topic e segnali E-E-A-T dei top performer.",
  },
  {
    number: "04",
    icon: FileOutput,
    title: "Contenuto",
    description: "Genera un articolo completo, ottimizzato e pronto per pubblicare.",
  },
]

export function IncentivesSection({ className }: IncentivesSectionProps) {
  return (
    <section className={cn("py-16 md:py-20", className)}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Pipeline
          </p>
          <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
            Come funziona
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-sm text-muted-foreground">
            Dalla keyword al contenuto finito. Quattro passaggi automatici.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="border-t border-border pt-8">
                <span className="text-sm font-medium text-muted-foreground">{step.number}</span>
                <div className="mt-5 flex items-center gap-3">
                  <Icon className="size-4 text-foreground" strokeWidth={1.5} />
                  <h3 className="text-base font-medium text-foreground">{step.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

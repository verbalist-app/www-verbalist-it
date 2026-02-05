import { Search, Globe, BarChart3, FileOutput } from "lucide-react"
import { cn } from "@/lib/utils"

interface IncentivesSectionEnProps {
  className?: string
}

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Keyword",
    description: "Enter your target keyword. The system starts from here.",
  },
  {
    number: "02",
    icon: Globe,
    title: "SERP Analysis",
    description: "Extracts Google top 10 results and scrapes competitor content.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Pattern",
    description: "Identifies structure, topics and E-E-A-T signals from top performers.",
  },
  {
    number: "04",
    icon: FileOutput,
    title: "Content",
    description: "Generates a complete, optimized article ready to publish.",
  },
]

export function IncentivesSectionEn({ className }: IncentivesSectionEnProps) {
  return (
    <section className={cn("py-16 md:py-20", className)}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Pipeline
          </p>
          <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
            How it works
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-sm text-muted-foreground">
            From keyword to finished content. Four automated steps.
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

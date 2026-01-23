import { Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

interface HomeValuePropositionProps {
  className?: string
}

export function HomeValueProposition({ className }: HomeValuePropositionProps) {
  return (
    <section className={cn("py-16 md:py-20", className)}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-lg border border-border bg-muted p-3">
            <Sparkles className="size-6" strokeWidth={1.5} />
          </div>
          <h2 className="text-2xl font-medium tracking-tight md:text-3xl max-w-2xl">
            Una piattaforma per creare contenuti che si posizionano
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-2xl">
            Verbalist analizza i contenuti che funzionano in SERP e genera articoli ottimizzati per SEO, AEO e GEO.
            Ogni livello del processo è basato su dati reali, non opinioni.
          </p>
        </div>
      </div>
    </section>
  )
}

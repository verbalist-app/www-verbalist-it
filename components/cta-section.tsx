import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface CTASectionProps {
  heading?: string
  description?: string
  buttons?: {
    primary?: {
      text: string
      url: string
    }
    secondary?: {
      text: string
      url: string
    }
  }
  className?: string
}

export function CTASection({
  heading = "Vuoi vederlo in azione?",
  description = "Ti mostriamo come funziona con una demo. Vedi l'analisi SERP, il pattern detection e la generazione contenuti sul tuo caso.",
  buttons = {
    primary: {
      text: "Prenota una demo",
      url: "/contatti",
    },
    secondary: {
      text: "Vedi i prezzi",
      url: "/prezzi",
    },
  },
  className,
}: CTASectionProps) {
  return (
    <section className={cn("py-16 md:py-20", className)}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex w-full flex-col gap-6 overflow-hidden rounded-xl bg-muted p-8 md:p-12 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1">
            <h2 className="text-xl font-medium tracking-tight mb-4">
              {heading}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
              {description}
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            {buttons.secondary && (
              <Button variant="outline" asChild>
                <Link href={buttons.secondary.url}>{buttons.secondary.text}</Link>
              </Button>
            )}
            {buttons.primary && (
              <Button asChild>
                <Link href={buttons.primary.url}>{buttons.primary.text}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

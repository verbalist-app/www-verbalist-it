import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface SubPageCTAProps {
  title?: string
  description?: string
  primaryCta?: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  className?: string
}

export function SubPageCTA({
  title = "Vuoi vederlo in azione?",
  description = "Ti mostriamo come funziona con una demo. Vedi analisi SERP, rilevamento pattern e generazione contenuti applicati al tuo caso.",
  primaryCta = { text: "Prenota una demo", href: "/prenota-demo" },
  secondaryCta = { text: "Vedi i prezzi", href: "/prezzi" },
  className,
}: SubPageCTAProps) {
  return (
    <section className={cn("bg-background @container border-t py-24 lg:py-32", className)}>
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-serif text-balance text-3xl font-medium tracking-tight sm:text-4xl">
          {title}
        </h2>
        <p className="text-muted-foreground mx-auto mt-6 max-w-md text-balance text-base leading-relaxed">
          {description}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button asChild className="pr-1.5">
            <Link href={primaryCta.href}>
              <span>{primaryCta.text}</span>
              <ChevronRight className="opacity-50" />
            </Link>
          </Button>
          {secondaryCta && (
            <Button asChild variant="secondary">
              <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}

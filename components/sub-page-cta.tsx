import Link from "next/link"
import { Button } from "@/components/ui/button"
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
    <section className={cn("relative border-t py-24 md:py-32 overflow-hidden", className)}>
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(ellipse at center, oklch(0.15 0 0 / 0.03), transparent 70%)`,
          }}
        />
      </div>

      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-balance text-2xl font-medium tracking-tight md:text-3xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {secondaryCta && (
            <Button asChild variant="outline" size="lg">
              <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
            </Button>
          )}
          <Button asChild size="lg">
            <Link href={primaryCta.href}>{primaryCta.text}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

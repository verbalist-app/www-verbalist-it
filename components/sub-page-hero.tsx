import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface SubPageHeroProps {
  icon?: LucideIcon
  title: string
  description: string
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

export function SubPageHero({
  icon: Icon,
  title,
  description,
  primaryCta = { text: "Prenota una demo", href: "/contatti" },
  secondaryCta,
  className,
}: SubPageHeroProps) {
  return (
    <section className={cn("py-20 md:py-28", className)}>
      <div className="mx-auto max-w-3xl px-6 text-center">
        {Icon && (
          <div className="mb-6 inline-flex items-center justify-center rounded-lg border border-border bg-muted p-3">
            <Icon className="size-6" strokeWidth={1.5} />
          </div>
        )}
        <h1 className="text-3xl font-medium tracking-tight md:text-4xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
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

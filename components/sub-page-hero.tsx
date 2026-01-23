import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface SubPageHeroProps {
  /** Small label at top (feature/page name) */
  label?: string
  /** @deprecated Use label instead */
  icon?: LucideIcon
  /** H1 - descriptive value proposition */
  title: string
  /** Subtitle/description */
  description: string
  backLink?: {
    label: string
    href: string
  }
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
  label,
  icon: Icon,
  title,
  description,
  backLink,
  primaryCta = { text: "Prenota una demo", href: "/contatti" },
  secondaryCta,
  className,
}: SubPageHeroProps) {
  return (
    <section className={cn("pt-20 md:pt-28 pb-12 md:pb-16", className)}>
      <div className="mx-auto max-w-3xl px-6 text-center">
        {backLink && (
          <div className="mb-6 text-left">
            <Link
              href={backLink.href}
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="size-3.5" />
              Torna a {backLink.label}
            </Link>
          </div>
        )}
        {label ? (
          <p className="mb-4 text-sm font-medium text-foreground inline-flex items-center gap-2 border-b border-foreground/20 pb-1">
            {label}
          </p>
        ) : Icon ? (
          <div className="mb-6 inline-flex items-center justify-center rounded-lg border border-border bg-muted p-3">
            <Icon className="size-6" strokeWidth={1.5} />
          </div>
        ) : null}
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

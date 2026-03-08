import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Locale = 'it' | 'en'

const defaults = {
  it: { text: "Prenota una demo", href: "/prenota-demo" },
  en: { text: "Book a demo", href: "/en/book-demo" },
} as const

interface SubPageHeroProps {
  /** Small label at top (feature/page name) */
  label?: string
  /** @deprecated Use label instead */
  icon?: LucideIcon
  /** H1 - descriptive value proposition */
  title: string
  /** Subtitle/description */
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
  locale?: Locale
}

export function SubPageHero({
  label,
  icon: Icon,
  title,
  description,
  primaryCta,
  secondaryCta,
  className,
  locale = 'it',
}: SubPageHeroProps) {
  const cta = primaryCta ?? defaults[locale]

  return (
    <section className={cn("bg-background", className)}>
      <div className="relative py-32 md:pt-44 md:pb-24">
        <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
          <div className="mx-auto max-w-xl text-center">
            {label ? (
              <Badge variant="secondary" className="mb-4">
                {label}
              </Badge>
            ) : Icon ? (
              <div className="mb-6 inline-flex items-center justify-center rounded-lg border border-border bg-muted p-3">
                <Icon className="size-6 text-foreground" strokeWidth={1.5} />
              </div>
            ) : null}
            <h1 className="text-balance font-serif text-4xl font-medium tracking-tighter sm:text-5xl">
              {title}
            </h1>
            <p className="text-muted-foreground mt-6 text-balance text-lg leading-relaxed">
              {description}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild className="pr-1.5">
                <Link href={cta.href}>
                  <span className="text-nowrap">{cta.text}</span>
                  <ChevronRight className="opacity-50" />
                </Link>
              </Button>
              {secondaryCta && (
                <Button asChild variant="ghost" size="sm">
                  <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

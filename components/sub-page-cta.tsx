import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

type Locale = 'it' | 'en'

const ctaDefaults = {
  it: {
    title: "Vuoi vederlo in azione?",
    description: "Una demo di 20 minuti sul tuo caso: analizziamo una keyword, estraiamo i pattern e generiamo un contenuto davanti a te.",
    primaryCta: { text: "Prenota una demo gratuita", href: "/prenota-demo" },
    secondaryCta: { text: "Vedi i prezzi", href: "/prezzi" },
  },
  en: {
    title: "Want to see it in action?",
    description: "A 20-minute demo on your case: we analyze a keyword, extract the patterns and generate content in front of you.",
    primaryCta: { text: "Book a free demo", href: "/en/book-demo" },
    secondaryCta: { text: "See pricing", href: "/en/pricing" },
  },
} as const

interface SubPageCTAProps {
  locale?: Locale
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
  locale = 'it',
  title,
  description,
  primaryCta,
  secondaryCta,
  className,
}: SubPageCTAProps) {
  const defaults = ctaDefaults[locale]
  title = title ?? defaults.title
  description = description ?? defaults.description
  primaryCta = primaryCta ?? defaults.primaryCta
  secondaryCta = secondaryCta ?? defaults.secondaryCta
  return (
    <section className={cn("bg-background @container border-t py-24 lg:py-32", className)}>
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-balance text-3xl font-medium tracking-tight sm:text-4xl">
          {title}
        </h2>
        <p className="text-muted-foreground mx-auto mt-6 max-w-md text-balance text-base leading-relaxed">
          {description}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button asChild variant="neutral" className="pr-1.5">
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

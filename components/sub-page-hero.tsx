import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"

type Locale = 'it' | 'en'

const defaults = {
  it: { text: "Prenota una demo", href: "/prenota-demo" },
  en: { text: "Book a demo", href: "/en/book-demo" },
} as const

const logos = [
  { name: "Jurny", src: "/logos/jurny.svg" },
  { name: "Pompea", src: "/logos/pompea.svg" },
  { name: "Rentokil", src: "/logos/rentokil.svg" },
  { name: "Meccanotecnica", src: "/logos/meccanotecnica.svg" },
  { name: "Plastisac", src: "/logos/plastisac.svg" },
  { name: "Sogese", src: "/logos/sogese.svg" },
]

interface SubPageHeroProps {
  /** Small label at top (feature category) */
  label?: string
  /** H1 - short, outcome-focused */
  title: string
  /** Subtitle - explains the how, same size, muted color */
  description: string
  primaryCta?: {
    text: string
    href: string
  }
  className?: string
  locale?: Locale
  /** Optional override content below the text. When omitted, client logos are shown. */
  children?: React.ReactNode
}

export function SubPageHero({
  label,
  title,
  description,
  primaryCta,
  className,
  locale = 'it',
  children,
}: SubPageHeroProps) {
  const cta = primaryCta ?? defaults[locale]

  return (
    <section className={cn("bg-background", className)}>
      <div className="relative pt-32 md:pt-44 pb-16">
        <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
          <div className="max-w-2xl">
            {label && (
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</span>
            )}
            <h1 className="mt-3 text-balance text-4xl font-serif font-normal tracking-tight sm:text-5xl">
              {title}
            </h1>
            <p className="mt-6 text-balance text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
            <div className="mt-8">
              <Button asChild variant="neutral" className="pr-1.5">
                <Link href={cta.href}>
                  <span className="text-nowrap">{cta.text}</span>
                  <ChevronRight className="size-4 opacity-50" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      {children ? (
        <div className="mx-auto w-full max-w-5xl px-6 pb-16">
          {children}
        </div>
      ) : (
        <div className="border-t border-border">
          <div className="mx-auto w-full max-w-5xl px-6 py-10">
            <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-6">
              {logos.map((logo) => (
                <div
                  key={logo.name}
                  role="img"
                  aria-label={logo.name}
                  className="h-6 w-20 bg-foreground/40 sm:h-7 sm:w-24"
                  style={{
                    mask: `url(${logo.src}) no-repeat center / contain`,
                    WebkitMask: `url(${logo.src}) no-repeat center / contain`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

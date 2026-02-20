import Link from "next/link"
import Image from "next/image"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroHeader } from "@/components/header"
import { cn } from "@/lib/utils"

type Locale = 'it' | 'en'

interface HeroSectionProps {
  className?: string
  showHeader?: boolean
  locale?: Locale
}

const heroContent = {
  it: {
    h1: "Il software che ti rende visibile nella ricerca AI",
    description: "Verbalist analizza i primi 10 risultati Google, estrae i pattern ricorrenti e genera contenuti strutturati che ChatGPT, Perplexity, Gemini e AI Overview possono indicizzare e citare.",
    primaryCta: { text: "Prenota una demo", href: "/prenota-demo" },
    secondaryCta: { text: "Inizia ora", href: "https://app.verbalist.it" },
    trustText: "Scelto da agenzie, freelancer e PMI in Italia e all'estero",
  },
  en: {
    h1: "The software that makes you visible in AI search",
    description: "Verbalist analyzes the top 10 Google results, extracts recurring patterns and generates content structured to be indexed and cited by ChatGPT, Perplexity, Gemini and AI Overview.",
    primaryCta: { text: "Book a demo", href: "/en/book-demo" },
    secondaryCta: { text: "Get started", href: "https://app.verbalist.it" },
    trustText: "Trusted by agencies, freelancers and SMBs in Italy and beyond",
  },
} as const

export function HeroSection({ className, showHeader = true, locale = 'it' }: HeroSectionProps) {
  const t = heroContent[locale]

  return (
    <>
      {showHeader && <HeroHeader />}
      <section className={cn("overflow-hidden py-32", className)}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-5">
            <div className="relative flex flex-col gap-5">
              <div
                style={{ transform: "translate(-50%, -50%)" }}
                className="absolute top-1/2 left-1/2 -z-10 mx-auto size-[800px] rounded-full border [mask-image:linear-gradient(to_top,transparent,transparent,white,white,white,transparent,transparent)] p-16 md:size-[1300px] md:p-32"
              >
                <div className="size-full rounded-full border p-16 md:p-32">
                  <div className="size-full rounded-full border" />
                </div>
              </div>
              <span className="mx-auto flex size-16 items-center justify-center rounded-full border md:size-20">
                <Sparkles className="size-6" />
              </span>
              <h1 className="mx-auto max-w-3xl text-center text-4xl font-medium tracking-tighter text-balance md:text-5xl lg:text-6xl">
                {t.h1}
              </h1>
              <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-muted-foreground">
                {t.description}
              </p>
              <div className="flex flex-col items-center justify-center gap-3 pt-3 pb-12 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href={t.primaryCta.href}>{t.primaryCta.text}</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={t.secondaryCta.href}>{t.secondaryCta.text}</a>
                </Button>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-border bg-card p-2">
              <Image
                className="rounded-xl"
                src="/app-screenshot.png"
                alt="Verbalist App"
                width={2880}
                height={1842}
                loading="eager"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

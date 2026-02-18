import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TextEffect } from "@/components/motion-primitives/text-effect"
import { AnimatedGroup } from "@/components/motion-primitives/animated-group"
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
    badge: "Vedi come funziona",
    badgeHref: "/piattaforma",
    h1: "Il software che ti rende visibile nella ricerca AI",
    description: "Verbalist analizza i primi 10 risultati Google, estrae i pattern ricorrenti e genera contenuti strutturati che ChatGPT, Perplexity, Gemini e AI Overview possono indicizzare e citare.",
    primaryCta: { text: "Prenota una demo", href: "/prenota-demo" },
    secondaryCta: { text: "Come funziona", href: "/piattaforma" },
  },
  en: {
    badge: "See how it works",
    badgeHref: "/en/platform",
    h1: "The software that makes you visible in AI search",
    description: "Verbalist analyzes the top 10 Google results, extracts recurring patterns and generates content structured to be indexed and cited by ChatGPT, Perplexity, Gemini and AI Overview.",
    primaryCta: { text: "Book a demo", href: "/en/book-demo" },
    secondaryCta: { text: "How it works", href: "/en/platform" },
  },
} as const

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

export function HeroSection({ className, showHeader = true, locale = 'it' }: HeroSectionProps) {
  const t = heroContent[locale]

  return (
    <>
      {showHeader && <HeroHeader />}
      <main className={cn("overflow-hidden", className)}>
        <section className="pb-20 md:pb-28">
          <div className={cn("relative", showHeader ? "pt-32 md:pt-40" : "pt-16 md:pt-20")}>
            <div className="mx-auto max-w-5xl px-6">
              <div className="text-center">
                <AnimatedGroup variants={transitionVariants}>
                  <Link
                    href={t.badgeHref}
                    className="group mx-auto flex w-fit items-center gap-3 rounded-full border border-border bg-muted px-4 py-2 transition-colors duration-300 hover:bg-accent"
                  >
                    <span className="text-foreground text-xs font-medium">{t.badge}</span>
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </AnimatedGroup>

                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-medium tracking-tight md:text-5xl lg:mt-8 lg:text-6xl"
                >
                  {t.h1}
                </TextEffect>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground"
                >
                  {t.description}
                </TextEffect>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-10 flex flex-col items-center justify-center gap-3 md:flex-row"
                >
                  <Button asChild size="lg" className="rounded-full px-6">
                    <Link href={t.primaryCta.href}>{t.primaryCta.text}</Link>
                  </Button>
                  <Button asChild size="lg" variant="ghost" className="rounded-full px-6">
                    <Link href={t.secondaryCta.href}>{t.secondaryCta.text}</Link>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <div className="relative mt-14 overflow-hidden px-6 md:mt-20">
                <div className="relative mx-auto max-w-5xl overflow-hidden rounded-xl border border-border bg-card p-2">
                  <Image
                    className="relative rounded-lg"
                    src="/app-screenshot.png"
                    alt="Verbalist App"
                    width={2880}
                    loading="eager"
                    priority
                    height={1842}
                  />
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>
      </main>
    </>
  )
}

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { HeroHeader } from "@/components/header"
import { ChevronRight, MessageCircle, Plus, Search, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

type Locale = "it" | "en"

interface HeroSectionProps {
  className?: string
  showHeader?: boolean
  locale?: Locale
}

const heroContent = {
  it: {
    h1: "Il software che ti rende visibile nella ricerca AI",
    description:
      "Verbalist analizza i primi 10 risultati Google, estrae i pattern ricorrenti e genera contenuti strutturati che ChatGPT, Perplexity, Gemini e AI Overview possono indicizzare e citare.",
    primaryCta: { text: "Prenota una demo", href: "/prenota-demo" },
    secondaryCta: { text: "Inizia ora", href: "https://app.verbalist.it" },
    queries: [
      "Come posizionarsi su ChatGPT per keyword competitive?",
      "Analizza i pattern SERP per 'software gestionale'",
      "Genera contenuto GEO-ready per landing page B2B",
      "Quali strutture usano i top 10 risultati Google?",
      "Ottimizza il contenuto per AI Overview e SGE",
      "Estrai heading e word count dai competitor",
      "Come farsi citare da Perplexity AI?",
      "Crea contenuto E-E-A-T per il settore finance",
      "Confronta i pattern dei primi 3 risultati SERP",
      "Genera meta description ottimizzata per LLM",
      "Quali topic mancano rispetto ai competitor?",
      "Struttura contenuto per featured snippet e AI",
    ],
    searchPlaceholder: "Inserisci una keyword...",
  },
  en: {
    h1: "The software that makes you visible in AI search",
    description:
      "Verbalist analyzes the top 10 Google results, extracts recurring patterns and generates content structured to be indexed and cited by ChatGPT, Perplexity, Gemini and AI Overview.",
    primaryCta: { text: "Book a demo", href: "/en/book-demo" },
    secondaryCta: { text: "Get started", href: "https://app.verbalist.it" },
    queries: [
      "How to rank on ChatGPT for competitive keywords?",
      "Analyze SERP patterns for 'project management software'",
      "Generate GEO-ready content for B2B landing pages",
      "What structures do top 10 Google results use?",
      "Optimize content for AI Overview and SGE",
      "Extract headings and word count from competitors",
      "How to get cited by Perplexity AI?",
      "Create E-E-A-T content for the finance sector",
      "Compare patterns from top 3 SERP results",
      "Generate LLM-optimized meta descriptions",
      "Which topics are missing vs competitors?",
      "Structure content for featured snippets and AI",
    ],
    searchPlaceholder: "Enter a keyword...",
  },
} as const

export function HeroSection({
  className,
  showHeader = true,
  locale = "it",
}: HeroSectionProps) {
  const t = heroContent[locale]

  return (
    <>
      {showHeader && <HeroHeader />}
      <section className={cn("overflow-hidden bg-background", className)}>
        <div className="relative py-40">
            {/* Blurred background image */}
            <div className="mask-radial-from-45% mask-radial-to-75% mask-radial-at-top mask-radial-[75%_100%] absolute inset-0 aspect-2/3 opacity-75 blur-xl md:aspect-square lg:aspect-video dark:opacity-5">
              <Image
                src="/app-screenshot.png"
                alt=""
                width={2880}
                height={1842}
                className="h-full w-full object-cover object-top"
                priority
              />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-5xl sm:pl-6">
              <div className="flex items-center justify-between max-md:flex-col">
                {/* Left: text + CTAs */}
                <div className="max-w-md max-sm:px-6">
                  <Badge variant="secondary" className="mb-4">
                    Verbalist®
                  </Badge>
                  <h1 className="font-serif text-balance text-4xl font-medium sm:text-5xl">
                    {t.h1}
                  </h1>
                  <p className="text-muted-foreground mt-4 text-balance">
                    {t.description}
                  </p>
                  <div className="mt-6 flex gap-3">
                    <Button asChild className="pr-1.5">
                      <Link href={t.primaryCta.href}>
                        <span className="text-nowrap">
                          {t.primaryCta.text}
                        </span>
                        <ChevronRight className="opacity-50" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <a href={t.secondaryCta.href}>
                        <span className="text-nowrap">
                          {t.secondaryCta.text}
                        </span>
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Right: scrolling query list */}
                <div
                  aria-hidden
                  className="mask-y-from-50% relative max-md:mx-auto max-md:*:scale-90"
                >
                  {t.queries.map((query, index) => (
                    <div
                      key={index}
                      className="text-muted-foreground flex items-center gap-2 px-14 py-2 text-sm"
                    >
                      <MessageCircle className="size-3.5 shrink-0 opacity-50" />
                      <span className="text-nowrap">{query}</span>
                    </div>
                  ))}
                  {/* Search input overlay */}
                  <div className="bg-card ring-border shadow-foreground/[0.065] absolute inset-0 m-auto mt-auto flex h-fit min-w-[20rem] justify-between gap-3 rounded-full p-2 shadow-xl ring-1 sm:inset-2 dark:shadow-black/[0.065]">
                    <div className="flex items-center gap-2">
                      <div className="hover:bg-muted flex size-9 cursor-pointer rounded-full *:m-auto *:size-4">
                        <Plus />
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {t.searchPlaceholder}
                      </div>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <div className="hover:bg-muted flex size-9 cursor-pointer rounded-full *:m-auto *:size-4">
                        <Sparkles />
                      </div>
                      <div className="bg-foreground text-background flex size-9 cursor-pointer rounded-full *:m-auto *:size-4 hover:brightness-110">
                        <Search />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  )
}

"use client"

import Link from "next/link"
import { Easing, motion } from "motion/react"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"

type Locale = 'it' | 'en'

interface FeaturesSectionProps {
  className?: string
  locale?: Locale
}

const easeTransition: Easing = [0.25, 0.1, 0.25, 1]

// ============================================
// Illustrations
// ============================================

function SerpIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-[160px] space-y-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded border bg-background p-1.5 shadow-sm"
          >
            <span className="flex size-5 shrink-0 items-center justify-center rounded bg-foreground text-[8px] font-semibold text-background">
              {i}
            </span>
            <div className="flex-1 space-y-1">
              <div className="h-1.5 w-3/4 rounded bg-foreground/70" />
              <div className="h-1 w-full rounded bg-muted-foreground/30" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ScrapingIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-[160px] space-y-2">
        <div className="rounded border bg-background p-2 shadow-sm">
          <div className="mb-2 flex items-center gap-1">
            <div className="flex gap-0.5">
              <div className="size-1.5 rounded-full bg-status-error" />
              <div className="size-1.5 rounded-full bg-status-warning" />
              <div className="size-1.5 rounded-full bg-status-success" />
            </div>
          </div>
          <div className="space-y-1">
            <div className="h-1.5 w-1/2 rounded bg-foreground/60" />
            <div className="h-1 w-full rounded bg-muted-foreground/20" />
            <div className="h-1 w-4/5 rounded bg-muted-foreground/20" />
          </div>
        </div>
        <div className="flex justify-center">
          <svg className="size-4 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
        <div className="rounded border bg-background p-2 shadow-sm">
          <div className="flex items-center gap-1">
            <span className="text-[8px] font-medium text-foreground">MD</span>
            <div className="h-1 flex-1 rounded bg-foreground/50" />
          </div>
        </div>
      </div>
    </div>
  )
}

function PatternIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-[160px] space-y-2">
        {[
          { label: "Structure", value: 92 },
          { label: "Topics", value: 78 },
          { label: "Quality", value: 85 },
          { label: "Length", value: 71 },
        ].map((item) => (
          <div key={item.label} className="space-y-0.5">
            <div className="flex justify-between text-[8px]">
              <span className="text-muted-foreground">{item.label}</span>
              <span className="font-medium">{item.value}%</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-background">
              <div
                className="h-full rounded-full bg-foreground"
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ContentIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-[160px] space-y-1.5">
        <div className="rounded border bg-background p-1.5 shadow-sm">
          <div className="text-[7px] text-muted-foreground mb-0.5">Title</div>
          <div className="h-2 w-full rounded bg-foreground/80" />
        </div>
        <div className="rounded border bg-background p-1.5 shadow-sm">
          <div className="text-[7px] text-muted-foreground mb-0.5">Meta</div>
          <div className="space-y-0.5">
            <div className="h-1 w-full rounded bg-foreground/60" />
            <div className="h-1 w-3/4 rounded bg-foreground/60" />
          </div>
        </div>
        <div className="rounded border bg-background p-1.5 shadow-sm">
          <div className="text-[7px] text-muted-foreground mb-0.5">Body</div>
          <div className="space-y-0.5">
            <div className="h-1.5 w-2/3 rounded bg-foreground/70" />
            <div className="h-1 w-full rounded bg-muted-foreground/30" />
            <div className="h-1 w-full rounded bg-muted-foreground/30" />
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// Feature Blocks Data
// ============================================

const illustrations = [
  <SerpIllustration key="serp" />,
  <ScrapingIllustration key="scraping" />,
  <PatternIllustration key="pattern" />,
  <ContentIllustration key="content" />,
]

const featureContent = {
  it: {
    sectionLabel: "I quattro step",
    sectionTitle: "Ogni passaggio nel dettaglio",
    blocks: [
      { id: "feature-1", step: "Step 1", title: "Analisi risultati Google", description: "Prende i primi 10 risultati Google per la tua keyword. Guarda posizione, snippet, title e meta description. Così capisci cosa sta funzionando.", href: "/piattaforma/analisi-serp" },
      { id: "feature-2", step: "Step 2", title: "Analisi competitor", description: "Scarica il contenuto di ogni pagina competitor. Heading, paragrafi, lunghezza. Tutto convertito in Markdown pulito.", href: "/piattaforma/scraping-competitor" },
      { id: "feature-3", step: "Step 3", title: "Analisi pattern", description: "Trova cosa hanno in comune i contenuti meglio posizionati. Struttura, argomenti, segnali di qualità e autorevolezza, lunghezza media.", href: "/piattaforma/analisi-pattern" },
      { id: "feature-4", step: "Step 4", title: "Generazione contenuto", description: "Scrive l'articolo basandosi su quello che funziona. Title, meta, heading e testo. Pronto per pubblicare.", href: "/piattaforma/generazione-contenuto" },
    ],
  },
  en: {
    sectionLabel: "The four steps",
    sectionTitle: "Each step in detail",
    blocks: [
      { id: "feature-1", step: "Step 1", title: "Search Results Analysis", description: "Fetches the top 10 Google results for your keyword. Checks position, snippet, title and meta description. So you understand what's working.", href: "/en/platform/serp-analysis" },
      { id: "feature-2", step: "Step 2", title: "Competitor Analysis", description: "Downloads content from each competitor page. Headings, paragraphs, length. All converted to clean Markdown.", href: "/en/platform/competitor-scraping" },
      { id: "feature-3", step: "Step 3", title: "Pattern Analysis", description: "Finds what ranking content has in common. Structure, topics, quality and authority signals, average length.", href: "/en/platform/pattern-analysis" },
      { id: "feature-4", step: "Step 4", title: "Content Generation", description: "Writes the article based on what works. Title, meta, headings and text. Ready to publish.", href: "/en/platform/content-generation" },
    ],
  },
} as const

// ============================================
// Main Component
// ============================================

export function FeaturesSection({ className, locale = 'it' }: FeaturesSectionProps) {
  const t = featureContent[locale]
  const featureBlocks = t.blocks.map((block, i) => ({ ...block, illustration: illustrations[i] }))

  return (
    <section className={cn("py-20 md:py-28", className)}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {t.sectionLabel}
          </p>
          <h2 className="text-balance text-2xl font-medium tracking-tight md:text-3xl lg:text-4xl">
            {t.sectionTitle}
          </h2>
        </div>

        {/* Mobile: static cards */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {featureBlocks.map((feature) => (
            <Link href={feature.href} key={feature.id} className="block">
              <div className="overflow-hidden bg-muted">
                <div className="flex h-48 items-center justify-center">
                  {feature.illustration}
                </div>
                <div className="space-y-2 p-6">
                  <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    {feature.step}
                  </span>
                  <h3 className="text-lg font-medium text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Desktop: hover animation */}
        <div className="hidden md:grid grid-cols-2 gap-4 xl:grid-cols-4">
          {featureBlocks.map((feature) => (
            <Link href={feature.href} key={feature.id}>
              <motion.div
                className="group relative overflow-hidden bg-muted"
                whileHover="hover"
                initial="initial"
              >
                <motion.div
                  variants={{
                    initial: {
                      opacity: 1,
                      pointerEvents: "auto",
                      clipPath: "inset(0% 0% 0% 0%)",
                    },
                    hover: {
                      opacity: 0,
                      pointerEvents: "none",
                      clipPath: "inset(0% 0% 100% 0%)",
                    },
                  }}
                  transition={{ duration: 0.4, ease: easeTransition }}
                  className="relative z-0 flex h-full min-h-96 flex-col items-center justify-center"
                >
                  <div className="flex h-full w-full items-center justify-center">
                    {feature.illustration}
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                      {feature.step}
                    </span>
                    <h3 className="mt-1 text-lg font-medium text-foreground">
                      {feature.title}
                    </h3>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute inset-0 z-10 bg-foreground"
                  variants={{
                    initial: { y: "100%" },
                    hover: { y: "0%" },
                  }}
                  transition={{ duration: 0.4, ease: easeTransition }}
                  style={{ willChange: "transform" }}
                />

                <motion.div
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    hover: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: easeTransition }}
                  className="absolute inset-0 z-20 flex min-h-96 items-center justify-center p-6 text-background"
                >
                  <div className="space-y-3">
                    <p className="text-xs font-medium uppercase tracking-wider opacity-70">
                      {feature.step}
                    </p>
                    <p className="text-lg font-medium">{feature.title}</p>
                    <p className="text-sm leading-relaxed opacity-90">{feature.description}</p>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute top-4 right-4 z-30"
                  variants={{
                    initial: { opacity: 0.7, rotate: 0 },
                    hover: { opacity: 1, rotate: 90 },
                  }}
                  transition={{ duration: 0.4, ease: easeTransition }}
                >
                  <div className="relative rounded-full p-2">
                    <div className="absolute inset-0 rounded-full bg-muted-foreground/20" />
                    <motion.div
                      className="absolute inset-0 rounded-full bg-background/20"
                      variants={{
                        initial: { opacity: 0 },
                        hover: { opacity: 1 },
                      }}
                      transition={{ duration: 0.4, ease: easeTransition }}
                    />
                    <Plus className="relative z-10 size-4" />
                  </div>
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

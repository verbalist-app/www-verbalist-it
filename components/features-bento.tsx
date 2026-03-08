import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Locale = "it" | "en"

interface FeaturesBentoProps {
  className?: string
  locale?: Locale
}

// ─── Illustrations ───────────────────────────────────

function SerpIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-8">
      <div className="w-full max-w-[220px] space-y-2.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 rounded-md border bg-background p-2 shadow-sm"
          >
            <span className="flex size-6 shrink-0 items-center justify-center rounded bg-foreground text-[9px] font-semibold text-background">
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
    <div className="flex h-full w-full items-center justify-center p-8">
      <div className="w-full max-w-[220px] space-y-2.5">
        <div className="rounded-md border bg-background p-3 shadow-sm">
          <div className="mb-2 flex items-center gap-1">
            <div className="flex gap-0.5">
              <div className="size-1.5 rounded-full bg-red-400" />
              <div className="size-1.5 rounded-full bg-yellow-400" />
              <div className="size-1.5 rounded-full bg-emerald-400" />
            </div>
          </div>
          <div className="space-y-1.5">
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
        <div className="rounded-md border bg-background p-3 shadow-sm">
          <div className="flex items-center gap-1.5">
            <span className="text-[9px] font-medium text-foreground">MD</span>
            <div className="h-1 flex-1 rounded bg-foreground/50" />
          </div>
        </div>
      </div>
    </div>
  )
}

function PatternIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-8">
      <div className="w-full max-w-[220px] space-y-3">
        {[
          { label: "Structure", value: 92 },
          { label: "Topics", value: 78 },
          { label: "E-E-A-T", value: 85 },
          { label: "Length", value: 71 },
        ].map((item) => (
          <div key={item.label} className="space-y-1">
            <div className="flex justify-between text-[9px]">
              <span className="text-muted-foreground">{item.label}</span>
              <span className="font-medium">{item.value}%</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-muted">
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
    <div className="flex h-full w-full items-center justify-center p-8">
      <div className="w-full max-w-[220px] space-y-2">
        <div className="rounded-md border bg-background p-2 shadow-sm">
          <div className="text-[8px] text-muted-foreground mb-0.5">Title</div>
          <div className="h-2 w-full rounded bg-foreground/80" />
        </div>
        <div className="rounded-md border bg-background p-2 shadow-sm">
          <div className="text-[8px] text-muted-foreground mb-0.5">Meta</div>
          <div className="space-y-0.5">
            <div className="h-1 w-full rounded bg-foreground/60" />
            <div className="h-1 w-3/4 rounded bg-foreground/60" />
          </div>
        </div>
        <div className="rounded-md border bg-background p-2 shadow-sm">
          <div className="text-[8px] text-muted-foreground mb-0.5">Body</div>
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

// ─── Content ─────────────────────────────────────────

const illustrations = [
  <SerpIllustration key="serp" />,
  <ScrapingIllustration key="scraping" />,
  <PatternIllustration key="pattern" />,
  <ContentIllustration key="content" />,
]

const bentoContent = {
  it: {
    sectionLabel: "I quattro step",
    sectionTitle: "Ogni passaggio nel dettaglio",
    cta: "Scopri di più",
    blocks: [
      {
        step: "Step 1",
        title: "Analisi SERP",
        description: "Prende i primi 10 risultati Google per la tua keyword. Guarda posizione, snippet, title e meta description. Così capisci cosa sta funzionando.",
        href: "/piattaforma/analisi-serp",
      },
      {
        step: "Step 2",
        title: "Scraping Competitor",
        description: "Scarica il contenuto di ogni pagina competitor. Heading, paragrafi, lunghezza. Tutto convertito in Markdown pulito, pronto per l'analisi.",
        href: "/piattaforma/scraping-competitor",
      },
      {
        step: "Step 3",
        title: "Analisi Pattern",
        description: "Trova cosa hanno in comune i contenuti meglio posizionati. Struttura, argomenti, segnali E-E-A-T, lunghezza media.",
        href: "/piattaforma/analisi-pattern",
      },
      {
        step: "Step 4",
        title: "Generazione Contenuto",
        description: "Scrive l'articolo basandosi su quello che funziona. Title, meta, heading e testo. Pronto per pubblicare.",
        href: "/piattaforma/generazione-contenuto",
      },
    ],
  },
  en: {
    sectionLabel: "The four steps",
    sectionTitle: "Each step in detail",
    cta: "Learn more",
    blocks: [
      {
        step: "Step 1",
        title: "SERP Analysis",
        description: "Fetches the top 10 Google results for your keyword. Checks position, snippet, title and meta description. So you understand what's working.",
        href: "/en/platform/serp-analysis",
      },
      {
        step: "Step 2",
        title: "Competitor Scraping",
        description: "Downloads content from each competitor page. Headings, paragraphs, length. All converted to clean Markdown, ready for analysis.",
        href: "/en/platform/competitor-scraping",
      },
      {
        step: "Step 3",
        title: "Pattern Analysis",
        description: "Finds what ranking content has in common. Structure, topics, E-E-A-T signals, average length.",
        href: "/en/platform/pattern-analysis",
      },
      {
        step: "Step 4",
        title: "Content Generation",
        description: "Writes the article based on what works. Title, meta, headings and text. Ready to publish.",
        href: "/en/platform/content-generation",
      },
    ],
  },
} as const

// ─── Component ───────────────────────────────────────

export function FeaturesBento({ className, locale = "it" }: FeaturesBentoProps) {
  const t = bentoContent[locale]

  return (
    <section className={cn("py-20 md:py-28", className)}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {t.sectionLabel}
          </p>
          <h2 className="font-serif text-balance text-2xl font-medium tracking-tight md:text-3xl lg:text-4xl">
            {t.sectionTitle}
          </h2>
        </div>

        <div className="space-y-16 md:space-y-20">
          {t.blocks.map((feature, idx) => (
            <div
              key={feature.href}
              className={cn(
                "flex flex-col items-center gap-x-12 gap-y-6 md:flex-row",
                idx % 2 !== 0 && "md:flex-row-reverse"
              )}
            >
              <div className="aspect-[4/3] w-full basis-1/2 rounded-xl border border-border/50 bg-muted">
                {illustrations[idx]}
              </div>
              <div className="shrink-0 basis-1/2">
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {feature.step}
                </span>
                <h3 className="mt-2 font-serif text-xl font-medium tracking-tight md:text-2xl">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {feature.description}
                </p>
                <Button asChild className="mt-6 gap-2 rounded-full" size="lg">
                  <Link href={feature.href}>
                    {t.cta} <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

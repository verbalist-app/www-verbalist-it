import { Download, FileCode, Zap, Database } from "lucide-react"
import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { TrustedBy } from "@/components/trusted-by"
import { FeatureChecklist } from "@/components/feature-checklist"
import { HighlightBlock } from "@/components/highlight-block"
import { Testimonials } from "@/components/testimonials"

export const metadata: Metadata = {
  title: "Scraping Contenuti Competitor",
  description: "Estrai i contenuti dei competitor in Markdown. Analizza struttura, heading e argomenti delle pagine che rankano. Dati per la tua content strategy.",
  alternates: {
    canonical: "/piattaforma/scraping-competitor",
  },
  openGraph: {
    title: "Scraping Contenuti Competitor — Verbalist",
    description: "Estrai i contenuti dei competitor in Markdown. Analizza struttura, heading e argomenti delle pagine che rankano. Dati per la tua content strategy.",
  },
}

const featureColumns = [
  {
    items: [
      "HTML to Markdown conversion",
      "Rimozione script e stili",
      "Solo contenuto rilevante",
      "Formattazione preservata",
    ],
  },
  {
    items: [
      "JavaScript rendering",
      "Lazy-load handling",
      "Infinite scroll support",
      "SPA compatibility",
    ],
  },
  {
    items: [
      "Export Markdown/JSON/TXT",
      "Metadata extraction",
      "Schema markup parsing",
      "Batch processing",
    ],
  },
]

const testimonials = [
  {
    metric: "Contenuto pulito",
    quote: "Finalmente il contenuto competitor senza tutto il rumore. Solo testo pulito, pronto per l'analisi.",
    author: "Andrea B.",
    role: "Content Analyst",
    company: "SEO Agency",
  },
  {
    metric: "100+ pagine",
    quote: "Analizziamo centinaia di pagine competitor in pochi minuti. Prima era impensabile.",
    author: "Chiara L.",
    role: "SEO Manager",
    company: "E-commerce",
  },
]

function HtmlToMarkdownIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-3">
        <div className="rounded-lg border bg-background p-3 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex gap-1">
              <div className="size-2 rounded-full bg-red-400" />
              <div className="size-2 rounded-full bg-yellow-400" />
              <div className="size-2 rounded-full bg-green-400" />
            </div>
            <span className="text-[10px] text-muted-foreground">HTML</span>
          </div>
          <div className="font-mono text-[10px] text-muted-foreground space-y-0.5">
            <div>&lt;h1&gt;Title&lt;/h1&gt;</div>
            <div>&lt;p&gt;Content...&lt;/p&gt;</div>
            <div className="line-through opacity-50">&lt;script&gt;...&lt;/script&gt;</div>
          </div>
        </div>
        <div className="flex justify-center">
          <svg className="size-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
        <div className="rounded-lg border bg-background p-3 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-medium text-foreground">MD</span>
          </div>
          <div className="font-mono text-[10px] text-foreground space-y-0.5">
            <div># Title</div>
            <div>Content...</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DynamicContentIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-3">
        <div className="rounded-lg border bg-background p-4 shadow-sm">
          <div className="space-y-2">
            <div className="h-3 w-3/4 rounded bg-foreground/80" />
            <div className="h-2 w-full rounded bg-muted-foreground/30" />
          </div>
          <div className="mt-4 border-t pt-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="size-4 rounded-full bg-green-500 flex items-center justify-center">
                <svg className="size-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-[10px] text-foreground font-medium">JS rendered</span>
            </div>
            <div className="space-y-2">
              <div className="h-2 w-full rounded bg-foreground/60" />
              <div className="h-2 w-4/5 rounded bg-foreground/60" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ScrapingCompetitorPage() {
  return (
    <>
      <SubPageHero
        label="Scraping Competitor"
        title="Accedi alla strategia di contenuto di ogni competitor"
        description="Estrai e analizza i contenuti competitor come Markdown pulito. Comprendi struttura, argomenti e approccio—pronti per l'analisi strategica."
        backLink={{ label: "Piattaforma", href: "/piattaforma" }}
      />

      <TrustedBy />

      <FeatureChecklist
        title="Estrazione contenuti intelligente"
        description="Da HTML sporco a Markdown pulito. Gestisce JavaScript, lazy-load e contenuti dinamici."
        columns={featureColumns}
      />

      <HighlightBlock
        icon={FileCode}
        title="Da HTML a Markdown"
        description="Converte automaticamente l'HTML in Markdown pulito. Toglie script, stili, navigazione. Tiene solo il contenuto che conta."
        visual={<HtmlToMarkdownIllustration />}
      />

      <HighlightBlock
        icon={Zap}
        title="Gestisce contenuti dinamici"
        description="Aspetta il rendering JavaScript. Cattura lazy-load, infinite scroll e SPA. Il contenuto completo, sempre."
        visual={<DynamicContentIllustration />}
        reverse
      />

      <Testimonials testimonials={testimonials} />

      <SubPageCTA />
    </>
  )
}

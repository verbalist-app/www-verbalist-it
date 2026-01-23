import { Download, FileCode, Zap, Database } from "lucide-react"
import type { Metadata } from "next"
import { SubPageHeroEn } from "@/components/sub-page-hero-en"
import { SubPageCTA } from "@/components/sub-page-cta"
import { TrustedBy } from "@/components/trusted-by"
import { FeatureChecklist } from "@/components/feature-checklist"
import { HighlightBlock } from "@/components/highlight-block"
import { Testimonials } from "@/components/testimonials"

export const metadata: Metadata = {
  title: "Competitor Scraping",
  description: "Downloads competitor page content. Converts it to clean Markdown, ready for analysis.",
  alternates: {
    canonical: "/en/platform/competitor-scraping",
  },
  openGraph: {
    title: "Competitor Scraping — Verbalist",
    description: "Downloads competitor page content. Converts it to clean Markdown, ready for analysis.",
  },
}

const featureColumns = [
  {
    items: [
      "HTML to Markdown conversion",
      "Script and style removal",
      "Relevant content only",
      "Formatting preserved",
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
    metric: "Clean content",
    quote: "Finally competitor content without all the noise. Just clean text, ready for analysis.",
    author: "Andrea B.",
    role: "Content Analyst",
    company: "SEO Agency",
  },
  {
    metric: "100+ pages",
    quote: "We analyze hundreds of competitor pages in minutes. Before, it was unthinkable.",
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

export default function CompetitorScrapingPage() {
  return (
    <>
      <SubPageHeroEn
        icon={Download}
        title="Competitor Scraping"
        description="Downloads competitor page content. Converts it to clean Markdown, ready for analysis."
      />

      <TrustedBy text="Trusted by SEO teams and agencies in Italy and abroad" />

      <FeatureChecklist
        title="Smart content extraction"
        description="From messy HTML to clean Markdown. Handles JavaScript, lazy-load and dynamic content."
        columns={featureColumns}
      />

      <HighlightBlock
        icon={FileCode}
        title="From HTML to Markdown"
        description="Automatically converts HTML to clean Markdown. Removes scripts, styles, navigation. Keeps only the content that matters."
        visual={<HtmlToMarkdownIllustration />}
      />

      <HighlightBlock
        icon={Zap}
        title="Handles dynamic content"
        description="Waits for JavaScript rendering. Captures lazy-load, infinite scroll and SPAs. Complete content, always."
        visual={<DynamicContentIllustration />}
        reverse
      />

      <Testimonials testimonials={testimonials} />

      <SubPageCTA
        title="Want to see it in action?"
        description="We'll show you how it works with a demo. See SERP analysis, pattern detection and content generation on your case."
        primaryCta={{ text: "Book a demo", href: "/en/contact" }}
        secondaryCta={{ text: "See pricing", href: "/en/pricing" }}
      />
    </>
  )
}

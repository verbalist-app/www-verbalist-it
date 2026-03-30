import { Download, FileCode, Zap, Database } from "lucide-react"
import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { TrustedBy } from "@/components/trusted-by"
import { FeatureChecklist } from "@/components/feature-checklist"
import { HighlightBlock } from "@/components/highlight-block"
import Testimonials from "@/components/testimonials-4"

export const metadata: Metadata = {
  title: "Competitor Content Analysis",
  description: "Extract competitor content as clean Markdown. Analyze structure, headings and topics from ranking pages.",
  alternates: {
    canonical: "/en/platform/competitor-scraping",
  },
  openGraph: {
    title: "Competitor Content Analysis \\ Verbalist",
    description: "Extract competitor content as clean Markdown. Analyze structure, headings and topics from ranking pages.",
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

function HtmlToMarkdownIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-3">
        <div className="rounded-lg border bg-background p-3 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex gap-1">
              <div className="size-2 rounded-full bg-status-error" />
              <div className="size-2 rounded-full bg-status-warning" />
              <div className="size-2 rounded-full bg-status-success" />
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
              <div className="size-4 rounded-full bg-status-success flex items-center justify-center">
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
      <SubPageHero locale="en"
        label="Competitor Analysis"
        title="Access any competitor's content strategy"
        description="Extract and analyze competitor content as clean Markdown. Understand their structure, topics and approach—ready for strategic analysis."
      />

      <TrustedBy />

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

      <Testimonials locale="en" />

      <SubPageCTA locale="en" />
    </>
  )
}

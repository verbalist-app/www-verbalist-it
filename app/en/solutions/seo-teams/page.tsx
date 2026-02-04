import { Search, BarChart3, Target, TrendingUp } from "lucide-react"
import type { Metadata } from "next"
import { SubPageHeroEn } from "@/components/sub-page-hero-en"
import { SubPageCTA } from "@/components/sub-page-cta"
import { TrustedBy } from "@/components/trusted-by"
import { FeatureChecklist } from "@/components/feature-checklist"
import { HighlightBlock } from "@/components/highlight-block"

export const metadata: Metadata = {
  title: "SEO Tools for Specialists | Verbalist",
  description: "Automatic SERP analysis, pattern detection and content gap analysis. Concrete data for informed decisions.",
  alternates: {
    canonical: "/en/solutions/seo-teams",
  },
  openGraph: {
    title: "SEO Tools for Specialists — Verbalist",
    description: "Automatic SERP analysis, pattern detection and content gap analysis. Concrete data for informed decisions.",
  },
}

const featureColumns = [
  {
    items: [
      "Top 10 organic results",
      "Search intent detection",
      "Title and meta description",
      "Word count per result",
    ],
  },
  {
    items: [
      "Structural patterns (H1, H2, H3)",
      "Recurring topics and subtopics",
      "Average word count and range",
      "Winning heading structure",
    ],
  },
  {
    items: [
      "E-E-A-T signals detected",
      "Content gap identification",
      "SEO/Readability/Trust scores",
      "Optimization priorities",
    ],
  },
]

function SerpAnalysisIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-2">
        {[1, 2, 3, 4, 5].map((pos) => (
          <div key={pos} className="flex items-center gap-2 rounded-lg border bg-background p-2 shadow-sm">
            <span className="flex size-5 items-center justify-center rounded bg-foreground text-[10px] font-bold text-background">
              {pos}
            </span>
            <div className="flex-1">
              <div className="h-2 w-3/4 rounded bg-foreground/60" />
              <div className="mt-1 h-1.5 w-full rounded bg-muted-foreground/30" />
            </div>
            <span className="text-[10px] text-muted-foreground">1.2k</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function PatternIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-3">
        <div className="rounded-lg border bg-background p-3 shadow-sm">
          <div className="text-xs font-medium text-muted-foreground mb-2">Detected patterns</div>
          <div className="space-y-2">
            {[
              { pattern: "H2: Definition", freq: 90 },
              { pattern: "H2: How it works", freq: 85 },
              { pattern: "H2: Benefits", freq: 80 },
              { pattern: "H2: FAQ", freq: 70 },
            ].map((item) => (
              <div key={item.pattern} className="flex items-center gap-2">
                <div className="flex-1 h-1.5 rounded-full bg-muted">
                  <div className="h-full rounded-full bg-foreground" style={{ width: `${item.freq}%` }} />
                </div>
                <span className="text-[10px] w-24 truncate">{item.pattern}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 rounded-lg border bg-background p-2 shadow-sm text-center">
            <div className="text-sm font-medium">1,450</div>
            <div className="text-[10px] text-muted-foreground">Avg words</div>
          </div>
          <div className="flex-1 rounded-lg border bg-background p-2 shadow-sm text-center">
            <div className="text-sm font-medium">1.2-1.8k</div>
            <div className="text-[10px] text-muted-foreground">Range</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SeoTeamsPage() {
  return (
    <>
      <SubPageHeroEn
        label="SEO Specialists"
        title="Get the competitive edge in every SERP"
        description="Access real-time SERP data, pattern detection and competitor insights. Make data-driven decisions that consistently outrank the competition."
      />

      <TrustedBy text="Trusted by SEO teams and agencies" />

      <FeatureChecklist
        title="The data you need for every keyword"
        description="Top 10 results, search intent, heading structure, word count, E-E-A-T signals. All automatic."
        columns={featureColumns}
      />

      <HighlightBlock
        icon={Search}
        title="SERP analysis in one click"
        description="Enter the keyword. Verbalist extracts the top 10 organic results with title, description, URL and word count. Identifies the dominant search intent: informational, commercial, transactional or navigational."
        visual={<SerpAnalysisIllustration />}
      />

      <HighlightBlock
        icon={BarChart3}
        title="Patterns that rank"
        description="Analyzes what first page content has in common. Recurring heading structure, covered topics, average word count and range. Data to replicate what works."
        visual={<PatternIllustration />}
        reverse
      />

      <SubPageCTA
        title="Want to see it in action?"
        description="We'll show you how it works with a demo on your case."
        primaryCta={{ text: "Book a demo", href: "/en/book-demo" }}
        secondaryCta={{ text: "See pricing", href: "/en/pricing" }}
      />
    </>
  )
}

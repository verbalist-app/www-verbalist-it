import { BarChart3, Layers, TrendingUp, Target } from "lucide-react"
import type { Metadata } from "next"
import { SubPageHeroEn } from "@/components/sub-page-hero-en"
import { SubPageCTA } from "@/components/sub-page-cta"
import { TrustedBy } from "@/components/trusted-by"
import { FeatureChecklist } from "@/components/feature-checklist"
import { HighlightBlock } from "@/components/highlight-block"
import { Testimonials } from "@/components/testimonials"

export const metadata: Metadata = {
  title: "Pattern Analysis",
  description: "Find what ranking content has in common. Length, structure, topics covered.",
  alternates: {
    canonical: "/en/platform/pattern-analysis",
  },
  openGraph: {
    title: "Pattern Analysis — Verbalist",
    description: "Find what ranking content has in common. Length, structure, topics covered.",
  },
}

const featureColumns = [
  {
    items: [
      "Average word count and range",
      "Length distribution",
      "Paragraphs and sentences",
      "Estimated reading time",
    ],
  },
  {
    items: [
      "Common heading structure",
      "H2 and H3 patterns",
      "Recurring sections",
      "Topic order",
    ],
  },
  {
    items: [
      "Topic coverage analysis",
      "Content gap detection",
      "E-E-A-T signals",
      "Competitive scoring",
    ],
  },
]

const testimonials = [
  {
    metric: "Clear patterns",
    quote: "Before it was all intuition. Now I see exactly what ranking content has in common.",
    author: "Luca M.",
    role: "Content Manager",
    company: "Media Company",
  },
  {
    metric: "+60% ranking",
    quote: "Following the detected patterns, we improved ranking by 60% on new content.",
    author: "Sara T.",
    role: "SEO Lead",
    company: "Tech Startup",
  },
]

function WordCountIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-4">
        <div className="rounded-lg border bg-background p-4 shadow-sm">
          <div className="text-xs font-medium text-muted-foreground mb-3">Word Count Distribution</div>
          <div className="flex items-end gap-1 h-20">
            {[35, 55, 85, 100, 90, 70, 45, 25].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className={`w-full rounded-t ${i === 3 ? "bg-foreground" : "bg-foreground/40"}`}
                  style={{ height: `${height}%` }}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-[10px] text-muted-foreground">
            <span>800</span>
            <span>1500</span>
            <span>2200</span>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 rounded-lg border bg-background p-3 shadow-sm text-center">
            <div className="text-lg font-medium">1,450</div>
            <div className="text-[10px] text-muted-foreground">Avg words</div>
          </div>
          <div className="flex-1 rounded-lg border bg-background p-3 shadow-sm text-center">
            <div className="text-lg font-medium">1.2-1.8k</div>
            <div className="text-[10px] text-muted-foreground">Range</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function StructureIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-3">
        <div className="rounded-lg border bg-background p-4 shadow-sm">
          <div className="text-xs font-medium text-muted-foreground mb-3">Common Structure</div>
          <div className="space-y-2">
            {[
              { pattern: "H1 + Intro", frequency: 100 },
              { pattern: "H2: Definition", frequency: 90 },
              { pattern: "H2: How it works", frequency: 85 },
              { pattern: "H2: Benefits", frequency: 80 },
              { pattern: "H2: FAQ", frequency: 60 },
            ].map((item) => (
              <div key={item.pattern} className="flex items-center gap-2">
                <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full bg-foreground" style={{ width: `${item.frequency}%` }} />
                </div>
                <span className="text-[10px] text-muted-foreground w-24 text-right">{item.pattern}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PatternAnalysisPage() {
  return (
    <>
      <SubPageHeroEn
        icon={BarChart3}
        title="Pattern Analysis"
        description="Find what ranking content has in common. Length, structure, topics covered."
        breadcrumbs={[
          { label: "Home", href: "/en" },
          { label: "Platform", href: "/en/platform/pattern-analysis" },
          { label: "Pattern Analysis" },
        ]}
      />

      <TrustedBy text="Trusted by SEO teams and agencies in Italy and abroad" />

      <FeatureChecklist
        title="Discover winning patterns"
        description="Automatically analyzes structure, length and topics of top performers."
        columns={featureColumns}
      />

      <HighlightBlock
        icon={TrendingUp}
        title="Word count that works"
        description="Calculates the average word count of ranking content. See the distribution, optimal range and how much you need to write to compete."
        visual={<WordCountIllustration />}
      />

      <HighlightBlock
        icon={Layers}
        title="Structure that converts"
        description="Finds common structural patterns. Which H2s, in what order, how many H3s. Replicate the structure that works in SERP."
        visual={<StructureIllustration />}
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

import { Search, Target, Zap, TrendingUp } from "lucide-react"
import type { Metadata } from "next"
import { SubPageHeroEn } from "@/components/sub-page-hero-en"
import { SubPageCTA } from "@/components/sub-page-cta"
import { TrustedBy } from "@/components/trusted-by"
import { FeatureChecklist } from "@/components/feature-checklist"
import { HighlightBlock } from "@/components/highlight-block"
import { Testimonials } from "@/components/testimonials"

export const metadata: Metadata = {
  title: "Verbalist for SEO Teams",
  description: "SERP analysis, pattern detection and content. Everything your SEO team needs.",
  alternates: {
    canonical: "/en/solutions/seo-teams",
  },
  openGraph: {
    title: "Verbalist for SEO Teams",
    description: "SERP analysis, pattern detection and content. Everything your SEO team needs.",
  },
}

const featureColumns = [
  {
    items: [
      "Automatic top 10 SERP analysis",
      "Search intent detection",
      "Competitor benchmarking",
      "Keyword clustering",
    ],
  },
  {
    items: [
      "Winning structural patterns",
      "Optimal word count",
      "Topic coverage analysis",
      "E-E-A-T signals detection",
    ],
  },
  {
    items: [
      "Content gap identification",
      "Heading structure analysis",
      "Semantic keyword extraction",
      "SERP feature tracking",
    ],
  },
]

const testimonials = [
  {
    metric: "80% time saved",
    quote: "The SERP analysis that used to take hours now takes minutes. More time for strategy, less for data entry.",
    author: "Alessandro T.",
    role: "SEO Manager",
    company: "Fashion E-commerce",
  },
  {
    metric: "+45% ranking",
    quote: "Content generated with winning patterns ranks better. We have concrete data to prove it.",
    author: "Giulia M.",
    role: "Head of SEO",
    company: "Tech Startup",
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
      </div>
    </div>
  )
}

export default function SeoTeamsPage() {
  return (
    <>
      <SubPageHeroEn
        icon={Search}
        title="Verbalist for SEO Teams"
        description="Analysis, patterns, content. All in one place. Data-driven, not opinion-based."
      />

      <TrustedBy text="Trusted by SEO teams and agencies in Italy and abroad" />

      <FeatureChecklist
        title="SERP data that makes a difference"
        description="Automatic analysis, pattern detection and actionable insights for every keyword."
        columns={featureColumns}
      />

      <HighlightBlock
        icon={Search}
        title="SERP analysis in seconds"
        description="Enter the keyword, get the top 10 results with all the data you need. Title, description, word count, heading structure, topic coverage. All automatic."
        visual={<SerpAnalysisIllustration />}
      />

      <HighlightBlock
        icon={TrendingUp}
        title="Patterns that work"
        description="Find what ranking content has in common. Structure, length, topics. Replicate what works, avoid what doesn't."
        visual={<PatternIllustration />}
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

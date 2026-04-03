import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { BentoGrid } from "@/components/bento-grid"


export const metadata: Metadata = {
  title: "From SEO to GEO: tools for specialists",
  description: "Transition from traditional SEO to Generative Engine Optimization. Search results analysis, pattern detection and AI search optimization tools for specialists.",
  alternates: {
    canonical: "/en/solutions/seo-teams",
  },
  openGraph: {
    title: "From SEO to GEO: tools for specialists \\ Verbalist",
    description: "Transition from traditional SEO to Generative Engine Optimization. Search results analysis, pattern detection and AI search optimization tools for specialists.",
  },
}

function SerpAnalysisIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="space-y-2">
        {[88, 76, 64, 52, 40].map((w, i) => (
          <div key={i} className="flex items-center gap-2.5 rounded-lg bg-background p-2.5">
            <span className="flex size-5 shrink-0 items-center justify-center rounded bg-foreground/10 text-[9px] font-medium text-foreground/40">{i + 1}</span>
            <div className="flex-1 space-y-1">
              <div className="h-1.5 rounded bg-foreground/15" style={{ width: `${w}%` }} />
              <div className="h-1 rounded bg-foreground/6" style={{ width: `${w - 15}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function PatternDetectionIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-2.5">
          {[100, 90, 80, 60].map((pct, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-foreground/8">
                <div className="h-full rounded-full bg-foreground/20" style={{ width: `${pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function GeoOutputIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-3">
          <div className="h-2 w-3/5 rounded bg-foreground/20" />
          <div className="space-y-1.5">
            <div className="h-1.5 w-full rounded bg-foreground/8" />
            <div className="h-1.5 w-5/6 rounded bg-foreground/8" />
          </div>
          <div className="h-2 w-2/5 rounded bg-foreground/15" />
          <div className="space-y-1.5">
            <div className="h-1.5 w-full rounded bg-foreground/8" />
            <div className="h-1.5 w-4/5 rounded bg-foreground/8" />
          </div>
        </div>
      </div>
    </div>
  )
}

function ContentBriefIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-2.5">
          {[90, 75, 60, 45].map((pct, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="size-2 shrink-0 rounded-full bg-foreground/20" />
              <div className="h-1.5 flex-1 rounded bg-foreground/8" style={{ width: `${pct}%` }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function OptimizeExistingIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-2.5">
          <div className="h-8 rounded-md bg-foreground/8" />
          <div className="flex justify-center">
            <div className="h-4 w-1.5 rounded bg-foreground/15" />
          </div>
          <div className="h-8 rounded-md bg-foreground/20" />
        </div>
      </div>
    </div>
  )
}

export default function SeoTeamsPage() {
  return (
    <>
      <SubPageHero locale="en"
        label="SEO Specialist"
        title="The SEO data you know, for AI search"
        description="Same search results analysis. Output built for ChatGPT, Perplexity and AI Overview."
      />

      <BentoGrid
        items={[
          {
            title: "Search results analysis",
            description: "Top 10 organics, search intent detection, heading structure and word count. The SEO data you know.",
            visual: <SerpAnalysisIllustration />,
          },
          {
            title: "Pattern detection",
            description: "Recurring topics and subtopics, content gaps, quality signals and LLM citability patterns.",
            visual: <PatternDetectionIllustration />,
          },
          {
            title: "GEO-ready output",
            description: "Content with semantic structure for AI. Citable definitions, FAQ schema-ready, fast export.",
            visual: <GeoOutputIllustration />,
          },
          {
            title: "Automated content brief",
            description: "Word count target, heading structure, topic coverage. The copywriter brief generated automatically from data.",
            visual: <ContentBriefIllustration />,
          },
          {
            title: "Optimize existing pages",
            description: "Upload a live page URL. Compare against competitors and generate the improved version.",
            visual: <OptimizeExistingIllustration />,
          },
        ]}
      />

      <SubPageCTA locale="en" />
    </>
  )
}

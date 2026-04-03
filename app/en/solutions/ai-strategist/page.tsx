import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { BentoGrid } from "@/components/bento-grid"


export const metadata: Metadata = {
  title: "GEO & AEO Optimization",
  description: "Answer engine optimization and generative engine optimization with search results data. Content structured to be cited by ChatGPT, Perplexity and AI Overview.",
  alternates: {
    canonical: "/en/solutions/ai-strategist",
  },
  openGraph: {
    title: "GEO & AEO Optimization \\ Verbalist",
    description: "Answer engine optimization and generative engine optimization with search results data. Content structured to be cited by ChatGPT, Perplexity and AI Overview.",
  },
}

function QualitySignalsIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-2.5">
          {[90, 85, 80, 70].map((pct, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-foreground/8">
                <div className="h-full rounded-full bg-foreground/20" style={{ width: `${pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function TopicCoverageIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-2.5">
          {[true, true, true, false, false].map((done, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className={`flex size-4 shrink-0 items-center justify-center rounded-full ${done ? "bg-foreground" : "bg-foreground/8"}`}>
                {done && (
                  <svg className="size-2.5 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <div className={`h-1.5 flex-1 rounded ${done ? "bg-foreground/12" : "bg-foreground/6"}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function TrustPatternsIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="space-y-2">
        {[80, 60, 100].map((pct, i) => (
          <div key={i} className="rounded-lg bg-background p-3">
            <div className="flex items-center gap-3">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-foreground/8">
                <div className="h-full rounded-full bg-foreground/20" style={{ width: `${pct}%` }} />
              </div>
              <span className="shrink-0 text-[9px] font-medium text-foreground/30">{pct}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function StrategyDataIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-2">
          {[0, 4, 8].map((offset) => (
            <div
              key={offset}
              className="h-8 rounded-md bg-foreground/10"
              style={{ marginLeft: `${offset}px`, marginRight: `${24 - offset}px` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function LlmCitabilityIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-2">
          <div className="h-1.5 w-full rounded bg-foreground/6" />
          <div className="h-1.5 w-5/6 rounded bg-foreground/6" />
          <div className="h-2 w-3/4 rounded bg-foreground/20" />
          <div className="h-1.5 w-full rounded bg-foreground/6" />
          <div className="h-1.5 w-4/5 rounded bg-foreground/6" />
        </div>
      </div>
    </div>
  )
}

export default function AIStrategistPage() {
  return (
    <>
      <SubPageHero locale="en"
        label="AI Strategist"
        title="Get ChatGPT to cite your content"
        description="Analyze the quality signals and structures that AI assistants prefer to reference."
      />

      <BentoGrid
        items={[
          {
            title: "Quality signals",
            description: "Authority, citability, structure and freshness analysis. Citability patterns extracted from competitors.",
            visual: <QualitySignalsIllustration />,
          },
          {
            title: "Topic coverage",
            description: "Complete topics and subtopics, FAQ schema-ready, content structured for featured snippets and AI search.",
            visual: <TopicCoverageIllustration />,
          },
          {
            title: "Trust patterns",
            description: "Sources, references, author expertise and freshness indicators extracted from top-ranking pages.",
            visual: <TrustPatternsIllustration />,
          },
          {
            title: "Data for strategy",
            description: "SERP analysis, competitor scraping and pattern extraction in a single flow. Structured data for your recommendations.",
            visual: <StrategyDataIllustration />,
          },
          {
            title: "LLM citability",
            description: "Semantic structure designed to be extracted and cited by ChatGPT, Perplexity and AI Overview.",
            visual: <LlmCitabilityIllustration />,
          },
        ]}
      />

      <SubPageCTA locale="en" />
    </>
  )
}

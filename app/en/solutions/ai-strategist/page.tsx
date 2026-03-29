import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import Testimonials from "@/components/testimonials-4"
import { FeatureChecklist } from "@/components/feature-checklist"
import { StatsBar } from "@/components/stats-bar"

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

const stats = [
  { value: "Quality", label: "Signals analyzed" },
  { value: "10/10", label: "Competitors scanned" },
  { value: "GEO + AEO", label: "Dual optimization" },
  { value: "LLM-ready", label: "Structured output" },
]

const featureColumns = [
  {
    items: [
      "Quality and authority signals analysis",
      "Citability patterns",
      "Featured snippet structure",
      "Clear and citable definitions",
    ],
  },
  {
    items: [
      "Complete topic coverage",
      "Subtopics for depth",
      "FAQ schema-ready",
      "Structured content",
    ],
  },
  {
    items: [
      "Trust patterns from competitors",
      "Sources and references",
      "Author expertise signals",
      "Freshness indicators",
    ],
  },
]

export default function AIStrategistPage() {
  return (
    <>
      <SubPageHero locale="en"
        label="AI Strategist"
        title="Get your content cited by AI assistants"
        description="Optimize for ChatGPT, Perplexity and AI Overview. Analyze quality and authority signals, citability patterns and structures that LLMs prefer to reference."
      />

      <StatsBar stats={stats} />

      <FeatureChecklist
        title="Optimization for generative engines"
        description="Not just Google. Content designed to be cited by ChatGPT, Perplexity, Gemini and AI Overview."
        columns={featureColumns}
      />

      <Testimonials locale="en" />

      <SubPageCTA locale="en" />
    </>
  )
}

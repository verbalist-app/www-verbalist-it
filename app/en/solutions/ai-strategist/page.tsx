import type { Metadata } from "next"
import { SubPageHeroEn } from "@/components/sub-page-hero-en"
import { SubPageCTA } from "@/components/sub-page-cta"
import { FeatureChecklist } from "@/components/feature-checklist"
import { StatsBar } from "@/components/stats-bar"

export const metadata: Metadata = {
  title: "GEO & AEO Optimization",
  description: "Content optimized to be cited by ChatGPT, Perplexity and AI Overview. AEO and GEO with SERP data.",
  alternates: {
    canonical: "/en/solutions/ai-strategist",
  },
  openGraph: {
    title: "GEO & AEO Optimization \\ Verbalist",
    description: "Content optimized to be cited by ChatGPT, Perplexity and AI Overview. AEO and GEO with SERP data.",
  },
}

const stats = [
  { value: "E-E-A-T", label: "Signals analyzed" },
  { value: "10/10", label: "Competitors scanned" },
  { value: "GEO + AEO", label: "Dual optimization" },
  { value: "LLM-ready", label: "Structured output" },
]

const featureColumns = [
  {
    items: [
      "E-E-A-T signals analysis",
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
      <SubPageHeroEn
        label="AI Strategist"
        title="Get your content cited by AI assistants"
        description="Optimize for ChatGPT, Perplexity and AI Overview. Analyze E-E-A-T signals, citability patterns and structures that LLMs prefer to reference."
      />

      <StatsBar stats={stats} />

      <FeatureChecklist
        title="Optimization for generative engines"
        description="Not just Google. Content designed to be cited by ChatGPT, Perplexity, Gemini and AI Overview."
        columns={featureColumns}
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

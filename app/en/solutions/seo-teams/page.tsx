import type { Metadata } from "next"
import { SubPageHeroEn } from "@/components/sub-page-hero-en"
import { SubPageCTA } from "@/components/sub-page-cta"
import { FeatureChecklist } from "@/components/feature-checklist"
import { StatsBar } from "@/components/stats-bar"

export const metadata: Metadata = {
  title: "From SEO to GEO: tools for specialists",
  description: "Transition from traditional SEO to Generative Engine Optimization. SERP analysis, pattern detection and content structured for AI search.",
  alternates: {
    canonical: "/en/solutions/seo-teams",
  },
  openGraph: {
    title: "From SEO to GEO: tools for specialists \\ Verbalist",
    description: "Transition from traditional SEO to Generative Engine Optimization. SERP analysis, pattern detection and content structured for AI search.",
  },
}

const stats = [
  { value: "Top 10", label: "Results analyzed" },
  { value: "4 Steps", label: "Automated pipeline" },
  { value: "LLM-ready", label: "Structured output" },
  { value: "3 AI", label: "Integrated models" },
]

const featureColumns = [
  {
    items: [
      "Top 10 organic results",
      "Search intent detection",
      "Recurring heading structure",
      "Average word count and range",
    ],
  },
  {
    items: [
      "Recurring topics and subtopics",
      "Content gap identification",
      "E-E-A-T signals detected",
      "LLM citability patterns",
    ],
  },
  {
    items: [
      "Content with semantic structure for AI",
      "Clear and citable definitions",
      "FAQ schema-ready",
      "Fast export and iteration",
    ],
  },
]

export default function SeoTeamsPage() {
  return (
    <>
      <SubPageHeroEn
        label="SEO Specialist"
        title="From traditional SEO to Generative Engine Optimization"
        description="The SERP data you already know, applied to creating content optimized for AI search. The natural transition from SEO to GEO."
      />

      <StatsBar stats={stats} />

      <FeatureChecklist
        title="SERP analysis and patterns, oriented toward GEO"
        description="The same data you use for SEO — structure, topics, E-E-A-T — applied to producing content citable by ChatGPT, Perplexity and AI Overview."
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

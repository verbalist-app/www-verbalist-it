import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import Testimonials from "@/components/testimonials-4"
import { FeatureChecklist } from "@/components/feature-checklist"
import { StatsBar } from "@/components/stats-bar"

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
      "Quality and authority signals detected",
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
      <SubPageHero locale="en"
        label="SEO Specialist"
        title="From traditional SEO to Generative Engine Optimization"
        description="The search results data you already know, applied to creating content optimized for AI search. The natural transition from SEO to GEO."
      />

      <StatsBar stats={stats} />

      <FeatureChecklist
        title="Search results analysis and patterns, oriented toward GEO"
        description="The same data you use for SEO — structure, topics, quality and authority — applied to producing content citable by ChatGPT, Perplexity and AI Overview."
        columns={featureColumns}
      />

      <Testimonials locale="en" />

      <SubPageCTA locale="en" />
    </>
  )
}

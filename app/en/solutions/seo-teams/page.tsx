import type { Metadata } from "next"
import { SubPageHeroEn } from "@/components/sub-page-hero-en"
import { SubPageCTA } from "@/components/sub-page-cta"
import { FeatureChecklist } from "@/components/feature-checklist"
import { StatsBar } from "@/components/stats-bar"

export const metadata: Metadata = {
  title: "SEO Tool for Specialists",
  description: "SEO tools for specialists: automated SERP analysis, pattern detection, content gap analysis and content generation. Data for informed decisions.",
  alternates: {
    canonical: "/en/solutions/seo-teams",
  },
  openGraph: {
    title: "SEO Tool for Specialists — Verbalist",
    description: "SEO tools for specialists: automated SERP analysis, pattern detection, content gap analysis and content generation. Data for informed decisions.",
  },
}

const stats = [
  { value: "Top 10", label: "Results analyzed" },
  { value: "4 Steps", label: "Automated pipeline" },
  { value: "< 2 min", label: "Per keyword" },
  { value: "3 AI", label: "Integrated models" },
]

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
      "SEO/Readability/Trust score",
      "Optimization priorities",
    ],
  },
]

export default function SeoTeamsPage() {
  return (
    <>
      <SubPageHeroEn
        label="SEO Specialist"
        title="Get the competitive edge in every SERP"
        description="Access real-time SERP data, pattern detection and competitor insights. Make data-driven decisions that consistently outperform the competition."
      />

      <StatsBar stats={stats} />

      <FeatureChecklist
        title="The data you need for every keyword"
        description="Top 10 results, search intent, heading structure, word count, E-E-A-T signals. All automated."
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

import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import Testimonials from "@/components/testimonials-4"
import { FeatureChecklist } from "@/components/feature-checklist"
import { WorkflowSteps } from "@/components/workflow-steps"

export const metadata: Metadata = {
  title: "GEO for Startups and SMBs",
  description: "AI search optimization without a GEO team in-house. Verbalist bridges the gap between traditional SEO and Generative Engine Optimization for startups and SMBs.",
  alternates: {
    canonical: "/en/solutions/enterprise",
  },
  openGraph: {
    title: "GEO for Startups and SMBs \\ Verbalist",
    description: "AI search optimization without a GEO team in-house. Verbalist bridges the gap between traditional SEO and Generative Engine Optimization for startups and SMBs.",
  },
}

const featureColumns = [
  {
    items: [
      "Setup in minutes",
      "No GEO expertise required",
      "Guided interface",
      "Projects organized by keyword",
    ],
  },
  {
    items: [
      "Automated search results analysis",
      "Competitor patterns extracted",
      "Semantic structure for LLMs",
      "Quality and authority signals integrated",
    ],
  },
  {
    items: [
      "Content ready for ChatGPT and Perplexity",
      "Export in Markdown and HTML",
      "Customizable tone of voice",
      "Document history per project",
    ],
  },
]

const workflowSteps = [
  {
    step: 1,
    title: "Enter the keyword",
    description: "Verbalist analyzes the top 10 Google results and extracts the content patterns that work.",
  },
  {
    step: 2,
    title: "Automated analysis",
    description: "Heading structure, recurring topics, length, quality and authority signals. All extracted from competitors in seconds.",
  },
  {
    step: 3,
    title: "GEO-ready content generation",
    description: "Content structured to be indexed and cited in AI search. Optimized title, meta, headings and body text.",
  },
  {
    step: 4,
    title: "Review and publish",
    description: "Refine the content with your tone of voice, export in Markdown or HTML and publish.",
  },
]

export default function EnterprisePage() {
  return (
    <>
      <SubPageHero locale="en"
        label="Startups & SMBs"
        title="AI search visibility, without a dedicated GEO team"
        description="Verbalist enables startups and small-medium businesses to produce content optimized for ChatGPT, Perplexity and AI Overview. Without investing in a full GEO project."
      />

      <WorkflowSteps
        title="From keyword to GEO-ready content in 4 steps"
        description="A guided workflow that requires no technical expertise. Enter a keyword, get content structured for AI search."
        steps={workflowSteps}
      />

      <FeatureChecklist
        title="Built for teams without GEO expertise"
        description="Simple interface, automated analysis, content structured to be cited by AI assistants."
        columns={featureColumns}
      />

      <Testimonials locale="en" />

      <SubPageCTA
        locale="en"
        description="We'll show you how Verbalist creates GEO-ready content from a keyword, applied to your industry."
      />
    </>
  )
}

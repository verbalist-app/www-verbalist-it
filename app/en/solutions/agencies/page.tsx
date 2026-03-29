import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import Testimonials from "@/components/testimonials-4"
import { FeatureChecklist } from "@/components/feature-checklist"
import { WorkflowSteps } from "@/components/workflow-steps"

export const metadata: Metadata = {
  title: "GEO-ready content for agencies",
  description: "AI search optimization for every client. Search results analysis, pattern detection and GEO-ready content generation in a single workflow.",
  alternates: {
    canonical: "/en/solutions/agencies",
  },
  openGraph: {
    title: "GEO-ready content for agencies \\ Verbalist",
    description: "AI search optimization for every client. Search results analysis, pattern detection and GEO-ready content generation in a single workflow.",
  },
}

const featureColumns = [
  {
    items: [
      "Separate projects per client",
      "Multi-project dashboard",
      "Team and permission management",
      "Organized workspaces",
    ],
  },
  {
    items: [
      "Search results analysis for every keyword",
      "Automatic pattern detection",
      "Semantic structure for LLMs",
      "Quality and authority signals extracted",
    ],
  },
  {
    items: [
      "Export in Markdown and HTML",
      "Tone of voice per client",
      "Multi-language support",
      "Document history",
    ],
  },
]

const workflowSteps = [
  {
    step: 1,
    title: "Create the project for the client",
    description: "Dedicated workspace with separate keywords, documents and history for each account.",
  },
  {
    step: 2,
    title: "Automatic search results analysis",
    description: "Enter the keyword, Verbalist analyzes the top 10 results and extracts structure, topics and quality and authority signals.",
  },
  {
    step: 3,
    title: "GEO-ready content generation",
    description: "Draft with semantic structure optimized for AI search. Title, meta, headings and body text. Customized tone of voice per client.",
  },
  {
    step: 4,
    title: "Review and publish",
    description: "Your team refines the draft, adapts it to the client's brand and publishes. Export in Markdown or HTML.",
  },
]

export default function AgenciesPage() {
  return (
    <>
      <SubPageHero locale="en"
        label="Agencies"
        title="GEO-ready content for every client, from a single workflow"
        description="Deliver content optimized for ChatGPT, Perplexity and AI Overview to your clients. Without building a GEO framework for each account."
      />

      <WorkflowSteps
        title="From keyword to GEO-ready content"
        description="A structured workflow for every client. Your team focuses on strategy and refinement."
        steps={workflowSteps}
      />

      <FeatureChecklist
        title="Multi-client management with GEO output"
        description="Organize projects, analyze competitors and generate content structured for AI search. For every account."
        columns={featureColumns}
      />

      <Testimonials locale="en" />

      <SubPageCTA locale="en" />
    </>
  )
}

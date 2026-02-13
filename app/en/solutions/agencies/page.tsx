import type { Metadata } from "next"
import { SubPageHeroEn } from "@/components/sub-page-hero-en"
import { SubPageCTA } from "@/components/sub-page-cta"
import { FeatureChecklist } from "@/components/feature-checklist"
import { WorkflowSteps } from "@/components/workflow-steps"

export const metadata: Metadata = {
  title: "GEO-ready content for agencies",
  description: "Produce content optimized for AI search for every client. SERP analysis, pattern detection and GEO-ready generation in a single workflow.",
  alternates: {
    canonical: "/en/solutions/agencies",
  },
  openGraph: {
    title: "GEO-ready content for agencies \\ Verbalist",
    description: "Produce content optimized for AI search for every client. SERP analysis, pattern detection and GEO-ready generation in a single workflow.",
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
      "SERP analysis for every keyword",
      "Automatic pattern detection",
      "Semantic structure for LLMs",
      "E-E-A-T signals extracted",
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
    title: "Automatic SERP analysis",
    description: "Enter the keyword, Verbalist analyzes the top 10 results and extracts structure, topics and E-E-A-T signals.",
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
      <SubPageHeroEn
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

      <SubPageCTA
        title="Want to see it in action?"
        description="We'll show you how it works with a demo on your case."
        primaryCta={{ text: "Book a demo", href: "/en/book-demo" }}
        secondaryCta={{ text: "See pricing", href: "/en/pricing" }}
      />
    </>
  )
}

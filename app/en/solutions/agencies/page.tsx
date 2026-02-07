import type { Metadata } from "next"
import { SubPageHeroEn } from "@/components/sub-page-hero-en"
import { SubPageCTA } from "@/components/sub-page-cta"
import { FeatureChecklist } from "@/components/feature-checklist"
import { WorkflowSteps } from "@/components/workflow-steps"

export const metadata: Metadata = {
  title: "SEO Tool for Agencies",
  description: "SERP analysis, pattern detection and content drafts for every client. Verbalist supports your agency workflow.",
  alternates: {
    canonical: "/en/solutions/agencies",
  },
  openGraph: {
    title: "SEO Tool for Agencies \\ Verbalist",
    description: "SERP analysis, pattern detection and content drafts for every client. Verbalist supports your agency workflow.",
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
      "Content drafts to refine",
      "Existing content optimization",
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
    description: "Enter the keyword, Verbalist retrieves the top 10 results and analyzes content, structure and patterns.",
  },
  {
    step: 3,
    title: "Structured draft generation",
    description: "Draft with title, meta, headings and body text based on winning patterns. Customized tone of voice per client.",
  },
  {
    step: 4,
    title: "Review and publish",
    description: "Your team refines the draft, applies the editorial touch and publishes. Export in Markdown or HTML.",
  },
]

export default function AgenciesPage() {
  return (
    <>
      <SubPageHeroEn
        label="Agencies"
        title="Deliver more content, faster, for every client"
        description="Streamline SERP analysis and content creation across all your accounts. Spend less time on research, more time on strategy and client results."
      />

      <WorkflowSteps
        title="Structured workflow for every client"
        description="From keyword to draft in 4 steps. Your team focuses on strategy and refinement."
        steps={workflowSteps}
      />

      <FeatureChecklist
        title="Everything your agency needs"
        description="Organize projects, analyze competitors and generate drafts. Your team focuses on strategy and refinement."
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

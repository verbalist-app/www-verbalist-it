import type { Metadata } from "next"
import { SubPageHeroEn } from "@/components/sub-page-hero-en"
import { SubPageCTA } from "@/components/sub-page-cta"
import { FeatureChecklist } from "@/components/feature-checklist"
import { WorkflowSteps } from "@/components/workflow-steps"

export const metadata: Metadata = {
  title: "Enterprise SEO Software",
  description: "Custom solutions for large organizations. Dedicated team, custom configurations and priority support.",
  alternates: {
    canonical: "/en/solutions/enterprise",
  },
  openGraph: {
    title: "Enterprise SEO Software \ Verbalist",
    description: "Custom solutions for large organizations. Dedicated team, custom configurations and priority support.",
  },
}

const featureColumns = [
  {
    items: [
      "Dedicated account manager",
      "Priority support",
      "Personalized onboarding",
      "Team training",
    ],
  },
  {
    items: [
      "Custom configurations",
      "Tailored workflows",
      "Dedicated integrations",
      "Guaranteed SLAs",
    ],
  },
  {
    items: [
      "Advanced team management",
      "Granular permissions",
      "Audit and compliance",
      "Centralized billing",
    ],
  },
]

const workflowSteps = [
  {
    step: 1,
    title: "Personalized onboarding",
    description: "Dedicated account manager configures the platform to your needs: roles, permissions, workflows and integrations.",
  },
  {
    step: 2,
    title: "Team distribution",
    description: "Admin, editor, viewer with differentiated access. Each team has its own projects and keywords.",
  },
  {
    step: 3,
    title: "Production at scale",
    description: "Automated pipeline from keyword to content. Centralized dashboard to monitor activity and output across all teams.",
  },
  {
    step: 4,
    title: "Review and optimization",
    description: "Periodic reviews with the account manager to optimize platform usage. Advanced reporting and guaranteed SLAs.",
  },
]

export default function EnterprisePage() {
  return (
    <>
      <SubPageHeroEn
        label="Enterprise"
        title="Enterprise-grade SEO content at scale"
        description="Deploy Verbalist across your organization with dedicated support, custom configurations, granular permissions and guaranteed SLAs."
      />

      <WorkflowSteps
        title="Guided implementation"
        description="From onboarding to production at scale in 4 steps, with a dedicated account manager."
        steps={workflowSteps}
      />

      <FeatureChecklist
        title="Designed for large organizations"
        description="Advanced team management, priority support and custom configurations for your needs."
        columns={featureColumns}
      />

      <SubPageCTA
        title="Let's discuss your needs"
        description="Contact us for a personalized demo and to discuss the configurations best suited to your organization."
        primaryCta={{ text: "Book a demo", href: "/en/book-demo" }}
        secondaryCta={{ text: "See pricing", href: "/en/pricing" }}
      />
    </>
  )
}

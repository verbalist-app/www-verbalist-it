import { Building2, Users, FolderKanban, FileOutput } from "lucide-react"
import type { Metadata } from "next"
import { SubPageHeroEn } from "@/components/sub-page-hero-en"
import { SubPageCTA } from "@/components/sub-page-cta"
import { TrustedBy } from "@/components/trusted-by"
import { FeatureChecklist } from "@/components/feature-checklist"
import { HighlightBlock } from "@/components/highlight-block"

export const metadata: Metadata = {
  title: "Verbalist for Agencies",
  description: "SERP analysis, pattern detection and content drafts for every client. Verbalist supports your agency workflow.",
  alternates: {
    canonical: "/en/solutions/agencies",
  },
  openGraph: {
    title: "Verbalist for Agencies",
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

function DashboardIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-3">
        <div className="rounded-lg border bg-background p-3 shadow-sm">
          <div className="text-xs font-medium text-muted-foreground mb-2">Active projects</div>
          <div className="space-y-2">
            {["Client A - E-commerce", "Client B - SaaS", "Client C - Local"].map((project) => (
              <div key={project} className="flex items-center justify-between rounded bg-muted p-2">
                <span className="text-xs">{project}</span>
                <span className="text-[10px] text-muted-foreground">3 documents</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function WorkflowIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-2">
        {[
          { step: "1", label: "SERP Analysis", status: "done" },
          { step: "2", label: "Pattern detection", status: "done" },
          { step: "3", label: "Content draft", status: "done" },
          { step: "4", label: "Team review", status: "current" },
        ].map((item) => (
          <div key={item.step} className="flex items-center gap-3 rounded-lg border bg-background p-3 shadow-sm">
            <span className={`flex size-6 items-center justify-center rounded-full text-xs font-medium ${
              item.status === "done" ? "bg-foreground text-background" :
              item.status === "current" ? "bg-muted-foreground/20 text-foreground" : "bg-muted text-muted-foreground"
            }`}>
              {item.status === "done" ? "✓" : item.step}
            </span>
            <span className="text-sm">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function AgenciesPage() {
  return (
    <>
      <SubPageHeroEn
        icon={Building2}
        title="Verbalist for Agencies"
        description="SERP analysis and content drafts for every client. Less time on research, more time on strategy and quality."
      />

      <TrustedBy text="Trusted by SEO teams and agencies" />

      <FeatureChecklist
        title="Structured workflow for every client"
        description="Organize projects, analyze competitors and generate drafts. Your team focuses on strategy and refinement."
        columns={featureColumns}
      />

      <HighlightBlock
        icon={FolderKanban}
        title="One project per client"
        description="Organize work by client with separate workspaces. Each project has its own keywords, documents and history. Everything in one place."
        visual={<DashboardIllustration />}
      />

      <HighlightBlock
        icon={FileOutput}
        title="From keyword to draft"
        description="Enter the keyword, Verbalist analyzes the SERP, identifies winning patterns and generates a structured draft. Your team refines and publishes it."
        visual={<WorkflowIllustration />}
        reverse
      />

      <SubPageCTA
        title="Want to see it in action?"
        description="We'll show you how it works with a demo on your case."
        primaryCta={{ text: "Book a demo", href: "/en/contact" }}
        secondaryCta={{ text: "See pricing", href: "/en/pricing" }}
      />
    </>
  )
}

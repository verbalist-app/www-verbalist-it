import { Building2, Users, Zap, BarChart3 } from "lucide-react"
import type { Metadata } from "next"
import { SubPageHeroEn } from "@/components/sub-page-hero-en"
import { SubPageCTA } from "@/components/sub-page-cta"
import { TrustedBy } from "@/components/trusted-by"
import { FeatureChecklist } from "@/components/feature-checklist"
import { HighlightBlock } from "@/components/highlight-block"
import { Testimonials } from "@/components/testimonials"

export const metadata: Metadata = {
  title: "Verbalist for Agencies",
  description: "Verbalist supports your team in SEO content production. Analysis, patterns and drafts ready to refine.",
  alternates: {
    canonical: "/en/solutions/agencies",
  },
  openGraph: {
    title: "Verbalist for Agencies",
    description: "Verbalist supports your team in SEO content production. Analysis, patterns and drafts ready to refine.",
  },
}

const featureColumns = [
  {
    items: [
      "Multi-project dashboard",
      "Organization by client",
      "Team and permission management",
      "Separate workspaces",
    ],
  },
  {
    items: [
      "White-label reports",
      "Customizable exports",
      "Complete branding",
      "Automatic delivery",
    ],
  },
  {
    items: [
      "Bulk SERP analysis",
      "Automatic pattern detection",
      "Scalable content generation",
      "API for integrations",
    ],
  },
]

const testimonials = [
  {
    metric: "80% time saved",
    quote: "SERP analysis and pattern research used to take hours. Now the team can focus on strategy and refining content.",
    author: "Marco R.",
    role: "Head of Content",
    company: "SEO Agency Milan",
  },
  {
    metric: "More focus",
    quote: "The team spends more time on quality and client work, less on repetitive analysis tasks.",
    author: "Laura B.",
    role: "CEO",
    company: "Digital Agency Rome",
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
                <span className="text-[10px] text-green-600">12 articles</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ReportIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-3">
        <div className="rounded-lg border bg-background p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <div className="size-8 rounded bg-foreground/10" />
            <div className="text-xs font-medium">Your logo</div>
          </div>
          <div className="space-y-2">
            <div className="h-2 w-3/4 rounded bg-muted-foreground/30" />
            <div className="h-2 w-full rounded bg-muted-foreground/20" />
            <div className="h-2 w-2/3 rounded bg-muted-foreground/20" />
          </div>
          <div className="mt-4 pt-4 border-t flex justify-between text-[10px] text-muted-foreground">
            <span>Report generated for Client A</span>
            <span>PDF</span>
          </div>
        </div>
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
        description="SERP analysis, pattern detection and content drafts. Verbalist supports your team in the research and first draft phase."
      />

      <TrustedBy text="Trusted by SEO teams and agencies in Italy and abroad" />

      <FeatureChecklist
        title="Everything your agency needs"
        description="Multi-client management, branded reports and scalable production."
        columns={featureColumns}
      />

      <HighlightBlock
        icon={Users}
        title="One dashboard, all clients"
        description="Organize projects by client. See the status of every piece of content. Manage your team with granular permissions. All from one place."
        visual={<DashboardIllustration />}
      />

      <HighlightBlock
        icon={BarChart3}
        title="Reports with your brand"
        description="Export customized reports with your logo. Show clients the results of SERP analysis and generated content. Complete white-label."
        visual={<ReportIllustration />}
        reverse
      />

      <Testimonials testimonials={testimonials} />

      <SubPageCTA
        title="Want to see it in action?"
        description="We'll show you how it works with a demo. See SERP analysis, pattern detection and content generation on your case."
        primaryCta={{ text: "Book a demo", href: "/en/contact" }}
        secondaryCta={{ text: "See pricing", href: "/en/pricing" }}
      />
    </>
  )
}

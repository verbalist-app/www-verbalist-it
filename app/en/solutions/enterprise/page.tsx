import { Building, Shield, Users, Headphones } from "lucide-react"
import type { Metadata } from "next"
import { SubPageHeroEn } from "@/components/sub-page-hero-en"
import { SubPageCTA } from "@/components/sub-page-cta"
import { TrustedBy } from "@/components/trusted-by"
import { FeatureChecklist } from "@/components/feature-checklist"
import { HighlightBlock } from "@/components/highlight-block"

export const metadata: Metadata = {
  title: "Enterprise SEO Software",
  description: "Custom solutions for large organizations. Dedicated team, custom configurations and priority support.",
  alternates: {
    canonical: "/en/solutions/enterprise",
  },
  openGraph: {
    title: "Enterprise SEO Software — Verbalist",
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

function TeamIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-3">
        <div className="rounded-lg border bg-background p-3 shadow-sm">
          <div className="text-xs font-medium text-muted-foreground mb-3">Team Management</div>
          <div className="space-y-2">
            {[
              { role: "Admin", users: 2, color: "bg-foreground" },
              { role: "Editor", users: 8, color: "bg-foreground/70" },
              { role: "Viewer", users: 15, color: "bg-foreground/40" },
            ].map((item) => (
              <div key={item.role} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`size-2 rounded-full ${item.color}`} />
                  <span className="text-xs">{item.role}</span>
                </div>
                <span className="text-xs text-muted-foreground">{item.users} users</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border bg-background p-3 shadow-sm">
          <div className="flex items-center justify-between text-xs">
            <span>Active projects</span>
            <span className="font-medium">24</span>
          </div>
          <div className="flex items-center justify-between text-xs mt-1">
            <span>Documents this month</span>
            <span className="font-medium">156</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function SupportIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-3">
        <div className="rounded-lg border bg-background p-4 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="size-10 rounded-full bg-muted flex items-center justify-center">
              <Headphones className="size-5 text-muted-foreground" />
            </div>
            <div>
              <div className="text-sm font-medium">Dedicated support</div>
              <div className="text-xs text-muted-foreground">Assigned account manager</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span>Response time</span>
              <span className="font-medium">{'<'} 4 hours</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span>Priority channel</span>
              <span className="font-medium">Slack/Teams</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span>Periodic reviews</span>
              <span className="font-medium">Monthly</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function EnterprisePage() {
  return (
    <>
      <SubPageHeroEn
        label="Enterprise"
        title="Enterprise-grade SEO content at scale"
        description="Deploy Verbalist across your organization with dedicated support, custom configurations, granular permissions and guaranteed SLAs."
      />

      <TrustedBy text="Trusted by SEO teams and agencies" />

      <FeatureChecklist
        title="Designed for large organizations"
        description="Advanced team management, priority support and custom configurations for your needs."
        columns={featureColumns}
      />

      <HighlightBlock
        icon={Users}
        title="Enterprise team management"
        description="Granular roles and permissions for every team member. Admin, editor, viewer with differentiated access. Centralized dashboard to monitor activity and usage."
        visual={<TeamIllustration />}
      />

      <HighlightBlock
        icon={Headphones}
        title="Dedicated support"
        description="Account manager assigned to your team. Priority communication channel via Slack or Teams. Periodic reviews to optimize platform usage."
        visual={<SupportIllustration />}
        reverse
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

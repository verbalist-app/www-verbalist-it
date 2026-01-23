import { Megaphone, PenTool, Palette, Sparkles } from "lucide-react"
import type { Metadata } from "next"
import { SubPageHeroEn } from "@/components/sub-page-hero-en"
import { SubPageCTA } from "@/components/sub-page-cta"
import { TrustedBy } from "@/components/trusted-by"
import { FeatureChecklist } from "@/components/feature-checklist"
import { HighlightBlock } from "@/components/highlight-block"
import { Testimonials } from "@/components/testimonials"

export const metadata: Metadata = {
  title: "Verbalist for Marketing Teams",
  description: "Content that ranks and converts. For marketing teams that don't want to choose between SEO and copy.",
  alternates: {
    canonical: "/en/solutions/marketing-teams",
  },
  openGraph: {
    title: "Verbalist for Marketing Teams",
    description: "Content that ranks and converts. For marketing teams that don't want to choose between SEO and copy.",
  },
}

const featureColumns = [
  {
    items: [
      "SEO-optimized blog posts",
      "Landing pages that convert",
      "Campaign copy",
      "Social-ready content",
    ],
  },
  {
    items: [
      "Customizable tone of voice",
      "Integrated brand guidelines",
      "Reusable templates",
      "Consistent style",
    ],
  },
  {
    items: [
      "Editorial calendar",
      "Approval workflow",
      "Multi-format export",
      "CMS integration",
    ],
  },
]

const testimonials = [
  {
    metric: "5x faster",
    quote: "From keyword to published content in an afternoon. Before it took a week.",
    author: "Francesca D.",
    role: "Content Manager",
    company: "B2B SaaS",
  },
  {
    metric: "100% consistency",
    quote: "Finally all content follows the same tone of voice. The brand is recognizable everywhere.",
    author: "Roberto L.",
    role: "Marketing Director",
    company: "E-commerce",
  },
]

function ToneIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-3">
        <div className="rounded-lg border bg-background p-3 shadow-sm">
          <div className="text-xs font-medium text-muted-foreground mb-3">Tone of Voice</div>
          <div className="grid grid-cols-2 gap-2">
            {[
              { tone: "Professional", active: true },
              { tone: "Friendly", active: false },
              { tone: "Technical", active: false },
              { tone: "Casual", active: false },
            ].map((item) => (
              <div
                key={item.tone}
                className={`rounded p-2 text-center text-xs ${
                  item.active ? "bg-foreground text-background font-medium" : "bg-muted"
                }`}
              >
                {item.tone}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border bg-background p-3 shadow-sm">
          <div className="space-y-2">
            <div className="h-2 w-full rounded bg-foreground/60" />
            <div className="h-2 w-4/5 rounded bg-foreground/40" />
            <div className="h-2 w-3/4 rounded bg-foreground/40" />
          </div>
          <div className="mt-3 text-[10px] text-muted-foreground text-center">
            Content generated with your style
          </div>
        </div>
      </div>
    </div>
  )
}

function ContentIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-2">
        {[
          { type: "Blog Post", status: "Published", color: "bg-green-500" },
          { type: "Landing Page", status: "In review", color: "bg-yellow-500" },
          { type: "Social Copy", status: "Draft", color: "bg-muted-foreground" },
        ].map((item) => (
          <div key={item.type} className="flex items-center justify-between rounded-lg border bg-background p-3 shadow-sm">
            <div className="flex items-center gap-2">
              <div className={`size-2 rounded-full ${item.color}`} />
              <span className="text-sm">{item.type}</span>
            </div>
            <span className="text-[10px] text-muted-foreground">{item.status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function MarketingTeamsPage() {
  return (
    <>
      <SubPageHeroEn
        icon={Megaphone}
        title="Verbalist for Marketing Teams"
        description="Content that ranks and converts. Without choosing between SEO and copy."
      />

      <TrustedBy text="Trusted by SEO teams and agencies in Italy and abroad" />

      <FeatureChecklist
        title="Content marketing without compromise"
        description="SEO and copy together. Quality and speed. Brand and performance."
        columns={featureColumns}
      />

      <HighlightBlock
        icon={Palette}
        title="Your tone of voice, always"
        description="Configure your brand's style once. Every piece of generated content follows your guidelines. Professional, friendly, technical: you choose, Verbalist executes."
        visual={<ToneIllustration />}
      />

      <HighlightBlock
        icon={PenTool}
        title="From idea to publication"
        description="Blog, landing, social: all the formats you need. Integrated approval workflow. Direct export to your CMS. Fewer steps, more content."
        visual={<ContentIllustration />}
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

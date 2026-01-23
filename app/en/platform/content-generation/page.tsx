import { FileText, PenTool, Sparkles, Palette } from "lucide-react"
import type { Metadata } from "next"
import { SubPageHeroEn } from "@/components/sub-page-hero-en"
import { SubPageCTA } from "@/components/sub-page-cta"
import { TrustedBy } from "@/components/trusted-by"
import { FeatureChecklist } from "@/components/feature-checklist"
import { HighlightBlock } from "@/components/highlight-block"
import { Testimonials } from "@/components/testimonials"

export const metadata: Metadata = {
  title: "Content Generation",
  description: "Writes the article based on patterns that work. Title, meta, structure and text. Ready to publish.",
  alternates: {
    canonical: "/en/platform/content-generation",
  },
  openGraph: {
    title: "Content Generation — Verbalist",
    description: "Writes the article based on patterns that work. Title, meta, structure and text. Ready to publish.",
  },
}

const featureColumns = [
  {
    items: [
      "Optimized title tag",
      "Effective meta description",
      "SEO-friendly URL slug",
      "Suggested schema markup",
    ],
  },
  {
    items: [
      "Pattern-based outline",
      "H1, H2, H3 structure",
      "Complete topic mapping",
      "Suggested sections",
    ],
  },
  {
    items: [
      "Customizable tone of voice",
      "Integrated brand guidelines",
      "Media suggestions",
      "Multi-format export",
    ],
  },
]

const testimonials = [
  {
    metric: "Ready in 10 min",
    quote: "From SERP analysis to complete article in 10 minutes. Before it took a full day.",
    author: "Valentina S.",
    role: "Content Writer",
    company: "Content Agency",
  },
  {
    metric: "Consistent quality",
    quote: "Every article meets the same SEO standards. No more manual checking everything.",
    author: "Paolo F.",
    role: "Content Lead",
    company: "SaaS Company",
  },
]

function SeoMetadataIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-3">
        <div className="rounded-lg border bg-background p-3 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] text-muted-foreground">Title Tag</span>
            <span className="text-[10px] text-green-600 font-medium">58 chars</span>
          </div>
          <div className="h-3 w-full rounded bg-foreground/80" />
          <div className="mt-1 h-1.5 w-full rounded-full bg-muted">
            <div className="h-full w-[58%] rounded-full bg-green-500" />
          </div>
        </div>
        <div className="rounded-lg border bg-background p-3 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] text-muted-foreground">Meta Description</span>
            <span className="text-[10px] text-green-600 font-medium">145 chars</span>
          </div>
          <div className="space-y-1">
            <div className="h-2 w-full rounded bg-foreground/60" />
            <div className="h-2 w-4/5 rounded bg-foreground/60" />
          </div>
        </div>
        <div className="rounded-lg border bg-background p-3 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] text-muted-foreground">URL Slug</span>
          </div>
          <div className="h-2.5 w-2/3 rounded bg-foreground/70" />
        </div>
      </div>
    </div>
  )
}

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
              { tone: "Educational", active: false },
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

export default function ContentGenerationPage() {
  return (
    <>
      <SubPageHeroEn
        icon={FileText}
        title="Content Generation"
        description="Writes the article based on patterns that work. Title, meta, structure and text. Ready to publish."
      />

      <TrustedBy text="Trusted by SEO teams and agencies in Italy and abroad" />

      <FeatureChecklist
        title="Content optimized to rank"
        description="SEO metadata, winning structure and customizable tone of voice."
        columns={featureColumns}
      />

      <HighlightBlock
        icon={Sparkles}
        title="Perfect SEO metadata"
        description="Generates title tag, meta description and optimized URL slug. Based on patterns that work in SERP. Correct length, keywords included."
        visual={<SeoMetadataIllustration />}
      />

      <HighlightBlock
        icon={Palette}
        title="Your tone of voice"
        description="Choose the style: professional, friendly, technical, educational. Every content follows your brand guidelines. Guaranteed consistency."
        visual={<ToneIllustration />}
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

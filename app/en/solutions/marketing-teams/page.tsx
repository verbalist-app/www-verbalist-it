import { PenTool, FileText, Palette, RefreshCw } from "lucide-react"
import type { Metadata } from "next"
import { SubPageHeroEn } from "@/components/sub-page-hero-en"
import { SubPageCTA } from "@/components/sub-page-cta"
import { TrustedBy } from "@/components/trusted-by"
import { FeatureChecklist } from "@/components/feature-checklist"
import { HighlightBlock } from "@/components/highlight-block"

export const metadata: Metadata = {
  title: "AI Content Generator",
  description: "Structured drafts for blogs, landing pages and guides. Configurable tone of voice, output ready to refine.",
  alternates: {
    canonical: "/en/solutions/marketing-teams",
  },
  openGraph: {
    title: "AI Content Generator — Verbalist",
    description: "Structured drafts for blogs, landing pages and guides. Configurable tone of voice, output ready to refine.",
  },
}

const featureColumns = [
  {
    items: [
      "Blog posts",
      "Landing pages",
      "Guides and tutorials",
      "Product pages",
    ],
  },
  {
    items: [
      "Configurable tone of voice",
      "Professional, conversational, technical",
      "Customizable target audience",
      "Brand guidelines respected",
    ],
  },
  {
    items: [
      "Title tag and meta description",
      "Optimized heading structure",
      "Media and image suggestions",
      "Export Markdown and HTML",
    ],
  },
]

function ContentTypesIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-2">
        {[
          { type: "Blog Post", icon: "article" },
          { type: "Landing Page", icon: "web" },
          { type: "Guide", icon: "book" },
          { type: "Product Page", icon: "shopping" },
        ].map((item) => (
          <div key={item.type} className="flex items-center gap-3 rounded-lg border bg-background p-3 shadow-sm">
            <div className="size-8 rounded bg-muted flex items-center justify-center">
              <span className="text-xs text-muted-foreground">{item.icon.charAt(0).toUpperCase()}</span>
            </div>
            <span className="text-sm font-medium">{item.type}</span>
          </div>
        ))}
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
          <div className="grid grid-cols-3 gap-2">
            {[
              { tone: "Professional", active: true },
              { tone: "Conversational", active: false },
              { tone: "Technical", active: false },
            ].map((item) => (
              <div
                key={item.tone}
                className={`rounded p-2 text-center text-[10px] ${
                  item.active ? "bg-foreground text-background font-medium" : "bg-muted"
                }`}
              >
                {item.tone}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border bg-background p-3 shadow-sm">
          <div className="text-xs font-medium text-muted-foreground mb-2">Output</div>
          <div className="space-y-1.5">
            <div className="h-2 w-full rounded bg-foreground/60" />
            <div className="h-2 w-4/5 rounded bg-foreground/40" />
            <div className="h-2 w-3/4 rounded bg-foreground/40" />
          </div>
          <div className="mt-2 text-[10px] text-muted-foreground">
            Draft with your style, ready to refine
          </div>
        </div>
      </div>
    </div>
  )
}

export default function MarketingTeamsPage() {
  return (
    <>
      <SubPageHeroEn
        label="Content Manager"
        title="Create SEO-optimized content without the research"
        description="Skip the manual SERP analysis. Get structured drafts based on proven ranking patterns, in your tone of voice, ready for your editorial touch."
      />

      <TrustedBy text="Trusted by SEO teams and agencies" />

      <FeatureChecklist
        title="Content for every format"
        description="Blog posts, landing pages, guides, product pages. Every format with the optimal structure for SERP."
        columns={featureColumns}
      />

      <HighlightBlock
        icon={FileText}
        title="The right format for every content"
        description="Choose the content type: blog post, landing page, guide or product page. Verbalist adapts structure, sections and CTAs based on format and search intent."
        visual={<ContentTypesIllustration />}
      />

      <HighlightBlock
        icon={Palette}
        title="Your tone of voice"
        description="Configure the style: professional, conversational or technical. Define the target audience. Every draft follows your guidelines. You refine and publish."
        visual={<ToneIllustration />}
        reverse
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

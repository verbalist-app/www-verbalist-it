import { ShoppingBag, Package, FileText, TrendingUp } from "lucide-react"
import type { Metadata } from "next"
import { SubPageHeroEn } from "@/components/sub-page-hero-en"
import { SubPageCTA } from "@/components/sub-page-cta"
import { TrustedBy } from "@/components/trusted-by"
import { FeatureChecklist } from "@/components/feature-checklist"
import { HighlightBlock } from "@/components/highlight-block"

export const metadata: Metadata = {
  title: "SEO for eCommerce | Verbalist",
  description: "Optimized product pages based on SERP patterns. Descriptions, specifications and content that converts.",
  alternates: {
    canonical: "/en/solutions/ecommerce",
  },
  openGraph: {
    title: "SEO for eCommerce — Verbalist",
    description: "Optimized product pages based on SERP patterns. Descriptions, specifications and content that converts.",
  },
}

const featureColumns = [
  {
    items: [
      "Structured product pages",
      "Optimized descriptions",
      "Key features highlighted",
      "Technical specifications",
    ],
  },
  {
    items: [
      "SERP analysis per category",
      "Competitor patterns",
      "Structure that converts",
      "Optimized CTAs",
    ],
  },
  {
    items: [
      "Title tags for products",
      "Effective meta descriptions",
      "Image suggestions",
      "Alt text for SEO",
    ],
  },
]

function ProductPageIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-3">
        <div className="rounded-lg border bg-background p-3 shadow-sm">
          <div className="text-xs font-medium mb-2">Product Page</div>
          <div className="space-y-2">
            <div className="h-20 rounded bg-muted flex items-center justify-center text-xs text-muted-foreground">
              Product image
            </div>
            <div className="h-2 w-3/4 rounded bg-foreground/60" />
            <div className="h-2 w-full rounded bg-foreground/30" />
            <div className="h-2 w-2/3 rounded bg-foreground/30" />
            <div className="flex gap-2 mt-3">
              <div className="flex-1 h-6 rounded bg-foreground/20 flex items-center justify-center text-[10px]">
                Specs
              </div>
              <div className="flex-1 h-6 rounded bg-foreground/20 flex items-center justify-center text-[10px]">
                Reviews
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SerpCompetitorIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-3">
        <div className="rounded-lg border bg-background p-3 shadow-sm">
          <div className="text-xs font-medium text-muted-foreground mb-2">Product page patterns</div>
          <div className="space-y-2">
            {[
              { section: "Hero with benefit", pct: 95 },
              { section: "Features bullet", pct: 90 },
              { section: "Technical specs", pct: 85 },
              { section: "Use cases", pct: 70 },
              { section: "Product FAQ", pct: 60 },
            ].map((item) => (
              <div key={item.section} className="flex items-center gap-2">
                <div className="flex-1 h-1.5 rounded-full bg-muted">
                  <div className="h-full rounded-full bg-foreground" style={{ width: `${item.pct}%` }} />
                </div>
                <span className="text-[10px] w-28 truncate">{item.section}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function EcommercePage() {
  return (
    <>
      <SubPageHeroEn
        label="eCommerce"
        title="Turn product pages into traffic magnets"
        description="Analyze top-ranking product pages and generate optimized descriptions, features and specifications that drive both rankings and conversions."
      />

      <TrustedBy text="Trusted by SEO teams and agencies" />

      <FeatureChecklist
        title="Data-driven product pages"
        description="SERP analysis to understand what works. Structured drafts with sections that convert."
        columns={featureColumns}
      />

      <HighlightBlock
        icon={Package}
        title="Product page structure"
        description="Verbalist generates drafts for product pages with hero, key features, technical specs and use case section. Based on patterns from ranking pages for your keyword."
        visual={<ProductPageIllustration />}
      />

      <HighlightBlock
        icon={TrendingUp}
        title="Patterns from competitors"
        description="Analyzes what first page product pages have in common. Which sections they include, how they structure them, what length they have. Replicate what works."
        visual={<SerpCompetitorIllustration />}
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

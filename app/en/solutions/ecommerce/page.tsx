import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { BentoGrid } from "@/components/bento-grid"


export const metadata: Metadata = {
  title: "GEO content for eCommerce",
  description: "Product pages and categories with AI search optimization. Semantic structure, competitor patterns and content designed to be cited by LLMs.",
  alternates: {
    canonical: "/en/solutions/ecommerce",
  },
  openGraph: {
    title: "GEO content for eCommerce \\ Verbalist",
    description: "Product pages and categories with AI search optimization. Semantic structure, competitor patterns and content designed to be cited by LLMs.",
  },
}

function ProductStructureIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="flex gap-3">
          <div className="size-12 shrink-0 rounded-md bg-foreground/6" />
          <div className="flex-1 space-y-2">
            <div className="h-2 w-3/4 rounded bg-foreground/20" />
            <div className="h-1.5 w-full rounded bg-foreground/8" />
            <div className="h-1.5 w-4/5 rounded bg-foreground/8" />
          </div>
        </div>
      </div>
    </div>
  )
}

function CompetitorCompareIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-2">
          {[100, 80, 90, 60].map((pct, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-foreground/8">
                <div className="h-full rounded-full bg-foreground/20" style={{ width: `${pct}%` }} />
              </div>
              <span className="shrink-0 text-[9px] font-medium text-foreground/30">{pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function LlmReadyIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-3">
          <div className="h-2 w-3/5 rounded bg-foreground/20" />
          <div className="space-y-1.5">
            <div className="h-1.5 w-full rounded bg-foreground/8" />
            <div className="h-1.5 w-5/6 rounded bg-foreground/8" />
            <div className="h-1.5 w-3/4 rounded bg-foreground/8" />
          </div>
        </div>
      </div>
    </div>
  )
}

function CategoryListingIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="grid grid-cols-3 gap-2">
          {[12, 10, 8, 15, 10, 12].map((opacity, i) => (
            <div key={i} className="h-8 rounded-md" style={{ backgroundColor: `hsl(0 0% 0% / ${opacity}%)` }} />
          ))}
        </div>
      </div>
    </div>
  )
}

function SchemaReadyIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-2">
          <div className="h-1.5 w-3/4 rounded bg-foreground/15" />
          <div className="ml-4 space-y-2">
            <div className="h-1.5 w-4/5 rounded bg-foreground/10" />
            <div className="ml-4 space-y-2">
              <div className="h-1.5 w-3/5 rounded bg-foreground/8" />
              <div className="h-1.5 w-2/3 rounded bg-foreground/8" />
            </div>
            <div className="h-1.5 w-3/4 rounded bg-foreground/10" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function EcommercePage() {
  return (
    <>
      <SubPageHero locale="en"
        label="eCommerce"
        title="Product pages that Google and AI find"
        description="Structured descriptions that rank in search results and get cited by AI assistants."
      />

      <BentoGrid
        items={[
          {
            title: "Product structure",
            description: "Hero, key features, specs and use cases. Semantic structure for Google and AI search.",
            visual: <ProductStructureIllustration />,
          },
          {
            title: "Competitor analysis",
            description: "Top 10 results per category analyzed. Section patterns, quality and authority signals extracted.",
            visual: <CompetitorCompareIllustration />,
          },
          {
            title: "LLM-ready descriptions",
            description: "Title tags, meta descriptions and content structured to be cited by ChatGPT, Perplexity and AI Overview.",
            visual: <LlmReadyIllustration />,
          },
          {
            title: "Categories and listings",
            description: "Not just product pages. Generate content for category pages with complete SEO structure and topics.",
            visual: <CategoryListingIllustration />,
          },
          {
            title: "Schema-ready",
            description: "Structure built for Product schema, FAQ schema and Review schema. Semantic markup integrated into the content.",
            visual: <SchemaReadyIllustration />,
          },
        ]}
      />

      <SubPageCTA locale="en" />
    </>
  )
}

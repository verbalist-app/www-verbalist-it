import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"
import { SubPageHeroEn } from "@/components/sub-page-hero-en"
import { SubPageCTA } from "@/components/sub-page-cta"
import {
  SerpAnalysisVisual,
  ScrapingVisual,
  PatternDetectionVisual,
  ContentGenerationVisual,
} from "@/components/product-visuals"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Platform",
  description: "SERP analysis, competitor scraping, pattern detection and content generation. What Verbalist does and how it works.",
  alternates: {
    canonical: "/en/platform",
  },
}

const features = [
  {
    slug: "serp-analysis",
    title: "SERP Analysis",
    description: "See who's ranking for your keyword. Understand why they're on page one.",
    detail: "Fetches the top 10 organic results, filters aggregators and socials, extracts all metadata.",
    visual: SerpAnalysisVisual,
  },
  {
    slug: "competitor-scraping",
    title: "Competitor Scraping",
    description: "Download competitor content. See structure, topics and how they're organized.",
    detail: "Extracts content from each page and converts it to Markdown. Keeps the heading hierarchy.",
    visual: ScrapingVisual,
  },
  {
    slug: "pattern-analysis",
    title: "Pattern Analysis",
    description: "Find what ranking content has in common. Intent, structure, E-E-A-T signals.",
    detail: "Analyzes all competitors to understand search intent, recurring topics, heading structure, average word count.",
    visual: PatternDetectionVisual,
  },
  {
    slug: "content-generation",
    title: "Content Generation",
    description: "Writes the article based on patterns. Optimized for SEO, AEO and GEO.",
    detail: "Generates title, meta description, slug, structured outline, body and media suggestions.",
    visual: ContentGenerationVisual,
  },
]

export default function PlatformPage() {
  return (
    <>
      <SubPageHeroEn
        label="Platform"
        title="From SERP analysis to content generation. Fully automated."
        description="Four steps. From keyword to content optimized for SEO, AEO and GEO."
      />

      {features.map((feature, index) => {
        const Visual = feature.visual
        return (
          <section key={feature.slug} className="border-t py-16 md:py-24">
            <div className="max-w-6xl mx-auto px-6">
              <div className="grid gap-10 md:gap-16 md:grid-cols-2 items-center">
                {/* Text — always first on mobile, alternates on desktop */}
                <div className={cn(index % 2 === 1 && "md:order-2")}>
                  <span className="text-sm font-medium text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-4 text-2xl font-medium tracking-tight md:text-3xl">
                    {feature.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {feature.detail}
                  </p>
                  <Link
                    href={`/en/platform/${feature.slug}`}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
                  >
                    Learn more <ArrowRight className="size-4" />
                  </Link>
                </div>

                {/* Visual */}
                <div className="rounded-lg border border-border overflow-hidden">
                  <div className="aspect-[4/3]">
                    <Visual />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      <SubPageCTA
        title="Want to see it in action?"
        description="We'll show you how it works with a demo. See SERP analysis, pattern detection and content generation on your case."
        primaryCta={{ text: "Book a demo", href: "/en/book-demo" }}
        secondaryCta={{ text: "See pricing", href: "/en/pricing" }}
      />
    </>
  )
}

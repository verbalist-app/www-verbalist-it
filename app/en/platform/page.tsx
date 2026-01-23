import Link from "next/link"
import { ArrowRight, Layers } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"
import { SubPageHeroEn } from "@/components/sub-page-hero-en"
import { SubPageCTA } from "@/components/sub-page-cta"
import { TrustedBy } from "@/components/trusted-by"

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
    what: "Fetches the top 10 organic results, filters aggregators and socials, extracts all metadata.",
    result: "List of competitors with position, title, description and URL.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    slug: "competitor-scraping",
    title: "Competitor Scraping",
    description: "Download competitor content. See structure, topics and how they're organized.",
    what: "Extracts content from each page and converts it to Markdown. Keeps the heading hierarchy.",
    result: "Complete content from each competitor ready for analysis.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
  },
  {
    slug: "pattern-analysis",
    title: "Pattern Analysis",
    description: "Find what ranking content has in common. Intent, structure, E-E-A-T signals.",
    what: "Analyzes all competitors to understand search intent, recurring topics, heading structure, average word count.",
    result: "Report with winning patterns and recommended structure.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    slug: "content-generation",
    title: "Content Generation",
    description: "Writes the article based on patterns. Optimized for SEO, AEO and GEO.",
    what: "Generates title, meta description, slug, structured outline, body and media suggestions.",
    result: "Complete content ready to publish.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
]

export default function PlatformPage() {
  return (
    <>
      <SubPageHeroEn
        icon={Layers}
        title="Platform"
        description="From SERP analysis to content generation. Fully automated."
      />

      <TrustedBy />

      <section className="border-t py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {features.map((feature) => (
              <Card key={feature.slug} className="border border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-muted-foreground mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-sm font-medium text-foreground">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-[13px] font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                      What it does
                    </h3>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {feature.what}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[13px] font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                      Result
                    </h3>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {feature.result}
                    </p>
                  </div>
                  <Link
                    href={`/en/platform/${feature.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors pt-2"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SubPageCTA
        title="Want to see it in action?"
        description="We'll show you how it works with a demo. See SERP analysis, pattern detection and content generation on your case."
        primaryCta={{ text: "Book a demo", href: "/en/contact" }}
        secondaryCta={{ text: "See pricing", href: "/en/pricing" }}
      />
    </>
  )
}

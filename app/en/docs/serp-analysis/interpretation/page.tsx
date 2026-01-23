import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Interpreting SERP Data",
  description: "How to read and interpret the data extracted from Verbalist's SERP analysis.",
}

export default function InterpretationPage() {
  return (
    <article className="pt-20 md:pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/en/docs/serp-analysis"
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            SERP Analysis
          </Link>

          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Interpreting SERP Data
          </h1>
          <p className="text-muted-foreground mb-8">
            Guide to reading the data extracted from SERP analysis.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">Position and visibility</h2>
            <p className="text-foreground/80 mb-4">
              Each result shows its SERP position (1-10). The top 3 positions capture about 60% of clicks. Analyze what content in the top 3 has in common.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Title and meta description</h2>
            <p className="text-foreground/80 mb-4">
              Verbalist extracts the title and meta description of each result. Observe patterns: length, keyword presence, call-to-action, numbers and dates.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Content type</h2>
            <p className="text-foreground/80 mb-4">
              The system identifies the dominant content type: guides, listicles, how-tos, product pages, reviews. This tells you which format Google prefers for that query.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Search intent</h2>
            <p className="text-foreground/80 mb-4">
              The analysis detects the prevalent search intent: informational, commercial, transactional or navigational. Align your content with the dominant intent.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Domain authority</h2>
            <p className="text-foreground/80 mb-4">
              You'll see indicators of domain strength in SERP. If the top 10 are all high-authority sites, it might be a competitive keyword that takes longer to rank for.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">SERP features</h2>
            <p className="text-foreground/80 mb-4">
              Verbalist identifies present SERP features: featured snippets, People Also Ask, videos, images. These represent additional visibility opportunities.
            </p>
          </div>
        </div>
    </article>
  )
}

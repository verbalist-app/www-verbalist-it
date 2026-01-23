import Link from "next/link"
import { ArrowLeft, ChevronRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pattern Analysis",
  description: "How Verbalist identifies winning patterns in ranking content.",
}

const articles = [
  {
    title: "How pattern detection works",
    description: "The process of identifying patterns in top performers.",
    href: "/en/docs/patterns/how-it-works",
  },
  {
    title: "Optimizing word count",
    description: "Finding the ideal length for your content.",
    href: "/en/docs/patterns/word-count",
  },
  {
    title: "Heading structure",
    description: "Analyzing and replicating competitor H1-H6 structure.",
    href: "/en/docs/patterns/headings",
  },
  {
    title: "Topic coverage",
    description: "Identifying the topics you need to cover.",
    href: "/en/docs/patterns/topics",
  },
  {
    title: "E-E-A-T analysis",
    description: "Detecting authority signals in competitors.",
    href: "/en/docs/patterns/eeat",
  },
  {
    title: "Content gap analysis",
    description: "Finding opportunities not covered by competitors.",
    href: "/en/docs/patterns/content-gap",
  },
]

export default function PatternsPage() {
  return (
    <section className="pt-20 md:pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/en/docs"
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to documentation
          </Link>

          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Pattern Analysis
          </h1>
          <p className="text-base text-muted-foreground mb-8">
            Verbalist analyzes extracted content to identify recurring patterns: average word count, heading structure, topics covered, E-E-A-T signals and formatting.
          </p>

          <div className="space-y-3">
            {articles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted transition-colors group"
              >
                <div>
                  <h2 className="font-medium text-sm">{article.title}</h2>
                  <p className="text-sm text-muted-foreground mt-1">{article.description}</p>
                </div>
                <ChevronRight className="size-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
    </section>
  )
}

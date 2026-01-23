import Link from "next/link"
import { ArrowLeft, ChevronRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SERP Analysis",
  description: "How to use Verbalist's SERP analysis to understand what ranks and why.",
}

const articles = [
  {
    title: "How SERP analysis works",
    description: "The process of extracting and analyzing the top 10 results.",
    href: "/en/docs/serp-analysis/how-it-works",
  },
  {
    title: "Interpreting SERP data",
    description: "Reading and understanding the data extracted from SERP.",
    href: "/en/docs/serp-analysis/interpretation",
  },
  {
    title: "Filters and advanced options",
    description: "Customizing analysis with geographic and language filters.",
    href: "/en/docs/serp-analysis/filters",
  },
  {
    title: "Competitor analysis",
    description: "Comparing competitors and identifying opportunities.",
    href: "/en/docs/serp-analysis/competitors",
  },
  {
    title: "Exporting SERP data",
    description: "Downloading data in CSV or JSON for external analysis.",
    href: "/en/docs/serp-analysis/export",
  },
]

export default function SerpAnalysisPage() {
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
            SERP Analysis
          </h1>
          <p className="text-base text-muted-foreground mb-8">
            Verbalist analyzes the top 10 organic results for your keyword, extracting data on position, title, meta description, URL and complete content of each page.
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

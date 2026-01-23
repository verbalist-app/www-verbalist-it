import Link from "next/link"
import { ArrowLeft, ChevronRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Competitor Scraping",
  description: "How Verbalist extracts and converts competitor content for analysis.",
}

const articles = [
  {
    title: "How scraping works",
    description: "The process of extracting content from competitor pages.",
    href: "/en/docs/scraping/how-it-works",
  },
  {
    title: "HTML to Markdown conversion",
    description: "How content is cleaned and converted to readable format.",
    href: "/en/docs/scraping/conversion",
  },
  {
    title: "Exporting to Markdown",
    description: "Downloading extracted content for external use.",
    href: "/en/docs/scraping/export",
  },
  {
    title: "Handling protected content",
    description: "What to do when a site blocks scraping.",
    href: "/en/docs/scraping/protected-content",
  },
]

export default function ScrapingPage() {
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
            Competitor Scraping
          </h1>
          <p className="text-base text-muted-foreground mb-8">
            Verbalist downloads the complete content of each page in the top 10, cleans it of irrelevant elements (navigation, footer, ads) and converts it to structured Markdown.
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

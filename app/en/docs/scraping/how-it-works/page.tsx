import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How Scraping Works",
  description: "The process of extracting content from competitor pages.",
}

export default function HowItWorksPage() {
  return (
    <article className="pt-20 md:pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/en/docs/scraping"
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Competitor Scraping
          </Link>

          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            How Scraping Works
          </h1>
          <p className="text-muted-foreground mb-8">
            The process Verbalist uses to extract content from competitor pages.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">Automatic visiting</h2>
            <p className="text-foreground/80 mb-4">
              Verbalist automatically visits each URL in the top 10. The system simulates a real browser to access content as a user would see it.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">HTML extraction</h2>
            <p className="text-foreground/80 mb-4">
              The complete HTML code of the page is extracted, including all elements: text, headings, lists, tables, images (alt text).
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Content cleaning</h2>
            <p className="text-foreground/80 mb-4">
              The system removes elements not relevant for analysis: navigation, site header/footer, sidebar, widgets, ads, popups. Only the main content remains.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Main content identification</h2>
            <p className="text-foreground/80 mb-4">
              Content extraction algorithms identify the &quot;main content&quot; of the page, distinguishing it from accessory elements. This ensures the analysis focuses on actual content.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Markdown conversion</h2>
            <p className="text-foreground/80 mb-4">
              Cleaned HTML is converted to structured Markdown, preserving: heading hierarchy (H1-H6), formatting (bold, italic), lists, links, tables.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Error handling</h2>
            <p className="text-foreground/80 mb-4">
              If a page is inaccessible (404, timeout, protections), Verbalist skips it and continues with the others. The analysis proceeds with available content.
            </p>
          </div>
        </div>
    </article>
  )
}

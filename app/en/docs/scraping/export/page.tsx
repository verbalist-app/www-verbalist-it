import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Exporting to Markdown",
  description: "How to export extracted content in Markdown format for external use.",
}

export default function ExportPage() {
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
            Exporting to Markdown
          </h1>
          <p className="text-muted-foreground mb-8">
            Download competitor content in Markdown format for analysis or reference.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">Single export</h2>
            <p className="text-foreground/80 mb-4">
              From a single competitor view, click "Export" and select "Markdown". The file will contain cleaned content with heading structure preserved.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Batch export</h2>
            <p className="text-foreground/80 mb-4">
              You can export all competitors in a single ZIP archive. From the results list, select desired competitors and click "Export selected".
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">File format</h2>
            <p className="text-foreground/80 mb-4">
              Each Markdown file includes: original title, source URL, extraction date, and complete content with headings (H1-H6), paragraphs, lists and tables.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Other formats</h2>
            <p className="text-foreground/80 mb-4">
              Besides Markdown, you can export to: plain text (no formatting), JSON (structured data) and HTML (formatting preserved).
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Recommended use</h2>
            <p className="text-foreground/80 mb-4">
              Exported Markdown files are useful for: manual competitor analysis, creating writer briefs, reference while writing, historical archive of competitor content.
            </p>
          </div>
        </div>
    </article>
  )
}

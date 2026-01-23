import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Exporting SERP Data",
  description: "Downloading SERP data in CSV or JSON for external analysis.",
}

export default function ExportPage() {
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
            Exporting SERP Data
          </h1>
          <p className="text-muted-foreground mb-8">
            Download extracted data to use in other tools or for custom analysis.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">Available formats</h2>
            <p className="text-foreground/80 mb-4">
              Verbalist allows export to CSV (for Excel, Google Sheets) and JSON (for developers and integrations). Choose the format based on how you'll use the data.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">CSV export</h2>
            <p className="text-foreground/80 mb-4">
              CSV includes: position, URL, title, meta description, word count, heading count. You can open it in any spreadsheet for analysis, charts or reports.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">JSON export</h2>
            <p className="text-foreground/80 mb-4">
              JSON includes all structured data: SERP metadata, complete content, heading structure, pattern analysis. Useful for integrations with other tools or programmatic analysis.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Complete content</h2>
            <p className="text-foreground/80 mb-4">
              You can also export the Markdown content extracted from each page. Useful for in-depth manual analysis or to feed other AI tools.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">How to export</h2>
            <p className="text-foreground/80 mb-4">
              After analysis, click the Export button in the toolbar. Select format and data to include. The file downloads immediately.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Using exported data</h2>
            <p className="text-foreground/80 mb-4">
              You can use the data to: create client reports, feed custom dashboards, integrate with existing SEO tools, archive historical analyses for future comparisons.
            </p>
          </div>
        </div>
    </article>
  )
}

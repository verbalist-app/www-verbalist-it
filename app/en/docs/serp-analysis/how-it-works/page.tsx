import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How SERP Analysis Works",
  description: "The process of extracting and analyzing top 10 Google results.",
}

export default function HowItWorksPage() {
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
            How SERP Analysis Works
          </h1>
          <p className="text-muted-foreground mb-8">
            The process Verbalist uses to extract and analyze Google results.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">1. Enter the keyword</h2>
            <p className="text-foreground/80 mb-4">
              Type the target keyword in the search field. You can use single keywords or long-tail phrases. The more specific the keyword, the more precise the extracted patterns.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">2. Select parameters</h2>
            <p className="text-foreground/80 mb-4">
              Choose country and language for the search. Google returns different results based on localization. Select parameters that match your target market.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">3. Query Google</h2>
            <p className="text-foreground/80 mb-4">
              Verbalist performs a Google search with the selected parameters and collects the top 10 organic results. Ads, featured snippets and other non-organic elements are ignored.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">4. Extract base data</h2>
            <p className="text-foreground/80 mb-4">
              For each result, the following is extracted: position, URL, title tag, meta description. This data appears in the results table.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">5. Content scraping</h2>
            <p className="text-foreground/80 mb-4">
              Verbalist visits each URL and extracts the complete page content. The content is cleaned of irrelevant elements (navigation, sidebar, footer) and converted to Markdown.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">6. Pattern analysis</h2>
            <p className="text-foreground/80 mb-4">
              The system analyzes all extracted content to identify common patterns: average word count, heading structure, recurring topics, E-E-A-T signals.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Processing time</h2>
            <p className="text-foreground/80 mb-4">
              Complete analysis takes 30-60 seconds. Time varies based on the speed of analyzed sites and the amount of content to process.
            </p>
          </div>
        </div>
    </article>
  )
}

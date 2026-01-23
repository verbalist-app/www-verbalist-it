import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Competitor Analysis",
  description: "Comparing competitors and identifying opportunities in SERP.",
}

export default function CompetitorsPage() {
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
            Competitor Analysis
          </h1>
          <p className="text-muted-foreground mb-8">
            How to use SERP data to understand what competitors are doing and where you can do better.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">Identifying real competitors</h2>
            <p className="text-foreground/80 mb-4">
              SERP competitors aren't always who you think. Large portals, Wikipedia, forums can occupy positions. Focus on direct competitors who produce content similar to yours.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Analyzing title tags</h2>
            <p className="text-foreground/80 mb-4">
              Look at the titles of the top 3. Which keywords do they include? What format do they use? (guide, list, how-to). Titles that rank well indicate what works for that query.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Studying structure</h2>
            <p className="text-foreground/80 mb-4">
              Verbalist extracts the heading structure of each competitor. Compare structures: which sections are common? Which topics do all cover? These are minimum requirements to rank.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Finding gaps</h2>
            <p className="text-foreground/80 mb-4">
              Look for topics that few competitors cover but are relevant to the query. These gaps are opportunities: you can differentiate by covering what others ignore.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Evaluating quality</h2>
            <p className="text-foreground/80 mb-4">
              Not all ranking content is excellent. Read competitor content and evaluate: is it updated? Complete? Well written? If quality is low, you have room to do better.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Length benchmark</h2>
            <p className="text-foreground/80 mb-4">
              Average word count tells you how much content to expect. If competitors write 2000 words, 500 words probably won't be enough. Use the benchmark as a reference, not a fixed rule.
            </p>
          </div>
        </div>
    </article>
  )
}

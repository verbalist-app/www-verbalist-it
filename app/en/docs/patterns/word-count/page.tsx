import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Optimizing Word Count",
  description: "How to find the ideal length for your content based on top performers.",
}

export default function WordCountPage() {
  return (
    <article className="pt-20 md:pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/en/docs/patterns"
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Pattern Analysis
          </Link>

          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Optimizing Word Count
          </h1>
          <p className="text-muted-foreground mb-8">
            Find the ideal length by analyzing content that already performs.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">Why word count matters</h2>
            <p className="text-foreground/80 mb-4">
              There's no universal "right" length. The ideal length depends on the query, search intent and what Google is already rewarding for that specific keyword.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Reading the data</h2>
            <p className="text-foreground/80 mb-4">
              Verbalist shows: average word count of top 10, range (min-max), median and distribution. The range gives you flexibility, the median gives you the safest target.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Interpreting patterns</h2>
            <p className="text-foreground/80 mb-4">
              If top 10 have similar word counts (e.g., all between 1500-2000), Google has a clear preference. If the range is wide (e.g., 800-3000), length is less decisive for that query.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Applying the data</h2>
            <p className="text-foreground/80 mb-4">
              During generation, Verbalist suggests a target based on patterns. You can accept the suggestion or set a custom value. The system generates content calibrated to that target.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Quality vs quantity</h2>
            <p className="text-foreground/80 mb-4">
              Longer content isn't automatically better. Aim to cover all relevant topics without padding. Verbalist balances length and completeness based on top performer patterns.
            </p>
          </div>
        </div>
    </article>
  )
}

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Filters and Advanced Options",
  description: "Customizing SERP analysis with geographic and language filters.",
}

export default function FiltersPage() {
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
            Filters and Advanced Options
          </h1>
          <p className="text-muted-foreground mb-8">
            Configure the analysis to get relevant results for your market.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">Country</h2>
            <p className="text-foreground/80 mb-4">
              Select the target country. Google shows different results based on geolocation. If you're targeting the US market, select United States. For other markets, choose the corresponding country.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Language</h2>
            <p className="text-foreground/80 mb-4">
              Set the language for results. This usually matches the country, but you can search for English content targeting other countries or vice versa.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Device</h2>
            <p className="text-foreground/80 mb-4">
              Choose between desktop and mobile. SERPs can vary significantly between the two. If your traffic is mainly mobile, analyze the mobile SERP.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Number of results</h2>
            <p className="text-foreground/80 mb-4">
              By default Verbalist analyzes the top 10. You can reduce to 5 for faster analysis or expand to 20 for a larger dataset. More results means more data but longer processing times.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Exclude domains</h2>
            <p className="text-foreground/80 mb-4">
              You can exclude specific domains from the analysis. Useful for excluding your own site (if you already rank) or large portals that aren't direct competitors.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">When to use advanced filters</h2>
            <p className="text-foreground/80 mb-4">
              For most analyses, default filters are sufficient. Use advanced filters when targeting foreign markets, when you want deeper analysis, or when you need to exclude irrelevant results.
            </p>
          </div>
        </div>
    </article>
  )
}

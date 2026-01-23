import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Handling Protected Content",
  description: "What to do when a site blocks scraping.",
}

export default function ProtectedContentPage() {
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
            Handling Protected Content
          </h1>
          <p className="text-muted-foreground mb-8">
            Some pages block automatic access. Here's how to handle these cases.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">Why some pages aren't accessible</h2>
            <p className="text-foreground/80 mb-4">
              Some sites use anti-bot protections, paywalls, mandatory login or geographic blocks. Verbalist cannot access this content automatically.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">How to recognize the problem</h2>
            <p className="text-foreground/80 mb-4">
              In the results list, inaccessible pages show a warning. Extracted content will be empty or partial. You can see which pages had problems.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Analysis continues anyway</h2>
            <p className="text-foreground/80 mb-4">
              Verbalist proceeds with accessible pages. If 2 out of 10 are blocked, analysis is based on the 8 available. Patterns remain reliable if most content is extracted.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Adding content manually</h2>
            <p className="text-foreground/80 mb-4">
              For important blocked pages, you can copy content manually and paste it into Verbalist. The system will include it in pattern analysis.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Pages with heavy JavaScript</h2>
            <p className="text-foreground/80 mb-4">
              Some pages load content via complex JavaScript (SPAs, extreme lazy loading). Verbalist handles most cases, but very dynamic pages may result in partial content.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Exclude from keyword</h2>
            <p className="text-foreground/80 mb-4">
              If a blocked page isn't a direct competitor (e.g., a large portal with a paywall), you can exclude it from analysis in settings and focus on accessible competitors.
            </p>
          </div>
        </div>
    </article>
  )
}

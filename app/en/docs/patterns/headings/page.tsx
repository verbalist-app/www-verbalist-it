import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Heading Structure",
  description: "Analyzing and replicating competitor H1-H6 structure.",
}

export default function HeadingsPage() {
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
            Heading Structure
          </h1>
          <p className="text-muted-foreground mb-8">
            Headings define content structure. Verbalist analyzes how competitors organize information.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">H1: the main title</h2>
            <p className="text-foreground/80 mb-4">
              Verbalist analyzes H1 patterns: average length, keyword presence, format (question, how-to, list). Your H1 should follow the winning pattern.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">H2: main sections</h2>
            <p className="text-foreground/80 mb-4">
              H2s define macro-sections. The system identifies recurring H2s among competitors. If everyone has an H2 "How it works", you probably need one too.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">H3-H6: the hierarchy</h2>
            <p className="text-foreground/80 mb-4">
              Analysis shows how deep the typical hierarchy goes. Some topics require many levels (technical guides), others stay flat (opinion articles).
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Heading count</h2>
            <p className="text-foreground/80 mb-4">
              Verbalist calculates the average number of headings per level. Content with 15 H2s and 40 H3s requires more structure than those with 5 H2s and 10 H3s.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Section order</h2>
            <p className="text-foreground/80 mb-4">
              Order matters. If competitors put "Prerequisites" before "Installation", there's a reason. Verbalist suggests an order based on detected patterns.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Semantic headings</h2>
            <p className="text-foreground/80 mb-4">
              Analysis detects headings that answer specific questions ("How much does it cost?", "How to get started?"). These headings capture related queries and featured snippets.
            </p>
          </div>
        </div>
    </article>
  )
}

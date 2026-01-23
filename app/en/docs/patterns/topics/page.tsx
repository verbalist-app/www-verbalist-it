import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Topic Coverage",
  description: "Identifying the topics you need to cover in your content.",
}

export default function TopicsPage() {
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
            Topic Coverage
          </h1>
          <p className="text-muted-foreground mb-8">
            Discover which topics you need to cover to compete in SERP.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">What is topic coverage</h2>
            <p className="text-foreground/80 mb-4">
              It's the set of topics that top 10 content covers. If everyone talks about a certain aspect, that topic is probably required to rank.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Primary topics</h2>
            <p className="text-foreground/80 mb-4">
              Topics covered by the majority (7+ out of 10). These are essential requirements. Not including them means losing relevance against competitors.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Secondary topics</h2>
            <p className="text-foreground/80 mb-4">
              Topics covered by 3-6 competitors. Include them for completeness, but you can decide which are most relevant for your specific angle.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Differentiating topics</h2>
            <p className="text-foreground/80 mb-4">
              Topics covered by 1-2 competitors. Could be opportunities to differentiate or marginal topics to ignore. Evaluate case by case.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">How to use topic analysis</h2>
            <p className="text-foreground/80 mb-4">
              Verbalist generates a topic list ordered by frequency. Use this list as a checklist: cover all primary topics, choose the most relevant secondary ones.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Topics and search intent</h2>
            <p className="text-foreground/80 mb-4">
              Topics reveal search intent. If all competitors include "pricing" and "alternatives", intent is commercial. If they include "tutorial" and "examples", it's informational.
            </p>
          </div>
        </div>
    </article>
  )
}

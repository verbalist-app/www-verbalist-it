import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Content Gap Analysis",
  description: "Finding opportunities not covered by competitors.",
}

export default function ContentGapPage() {
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
            Content Gap Analysis
          </h1>
          <p className="text-muted-foreground mb-8">
            Identify what's missing in competitor content to differentiate yourself.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">What is a content gap</h2>
            <p className="text-foreground/80 mb-4">
              A content gap is a topic or aspect relevant to the query that none or few competitors cover adequately. Filling these gaps gives you a competitive advantage.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Depth gaps</h2>
            <p className="text-foreground/80 mb-4">
              Competitors cover a topic but superficially. You can differentiate by going deeper: more details, more examples, more use cases.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Freshness gaps</h2>
            <p className="text-foreground/80 mb-4">
              Dated content is an opportunity. If competitors have old information (prices, features, statistics), updated content has an advantage.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Format gaps</h2>
            <p className="text-foreground/80 mb-4">
              If everyone writes walls of text, you can differentiate with comparison tables, infographics, embedded videos. The right format can improve engagement and ranking.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Experience gaps</h2>
            <p className="text-foreground/80 mb-4">
              Missing direct experience in competitor content? Add yours: personal tests, case studies, measured results. This activates E-E-A-T signals.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">How Verbalist identifies gaps</h2>
            <p className="text-foreground/80 mb-4">
              The system compares topics and depth between competitors, flagging areas with weak or absent coverage. Use these suggestions to plan differentiating content.
            </p>
          </div>
        </div>
    </article>
  )
}

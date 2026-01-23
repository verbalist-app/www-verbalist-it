import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How Pattern Detection Works",
  description: "The process of identifying patterns in top performer content.",
}

export default function HowItWorksPage() {
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
            How Pattern Detection Works
          </h1>
          <p className="text-muted-foreground mb-8">
            Verbalist analyzes extracted content to identify what top performers have in common.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">Comparative analysis</h2>
            <p className="text-foreground/80 mb-4">
              The system compares all extracted content looking for recurring elements. If 8 out of 10 competitors have an FAQ section, that's a pattern.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Quantitative metrics</h2>
            <p className="text-foreground/80 mb-4">
              Precise metrics are calculated: average word count, number of headings, text/image ratio, keyword density. These numbers define the benchmark.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Heading structure</h2>
            <p className="text-foreground/80 mb-4">
              The analysis maps the H1-H6 structure of each content. It identifies common headings, typical section order, hierarchy depth.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Topic extraction</h2>
            <p className="text-foreground/80 mb-4">
              NLP algorithms identify topics covered in each content. The most frequent topics become requirements for your content.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">E-E-A-T signals</h2>
            <p className="text-foreground/80 mb-4">
              The system detects Experience, Expertise, Authoritativeness, Trustworthiness signals: citations, credentials, data, direct experiences.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Pattern detection output</h2>
            <p className="text-foreground/80 mb-4">
              The result is a complete profile: target length, recommended structure, topics to cover, signals to include. This profile guides content generation.
            </p>
          </div>
        </div>
    </article>
  )
}

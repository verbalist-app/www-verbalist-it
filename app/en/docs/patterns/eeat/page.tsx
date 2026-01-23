import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "E-E-A-T Analysis",
  description: "How Verbalist detects and replicates E-E-A-T signals in content.",
}

export default function EeatPage() {
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
            E-E-A-T Analysis
          </h1>
          <p className="text-muted-foreground mb-8">
            Experience, Expertise, Authoritativeness, Trustworthiness. The signals Google uses to evaluate quality.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">What Verbalist detects</h2>
            <p className="text-foreground/80 mb-4">
              The system analyzes top performer content to identify E-E-A-T signals: author bio, credentials, source citations, data and statistics, update dates, references to direct experiences.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Experience</h2>
            <p className="text-foreground/80 mb-4">
              Verbalist detects phrases indicating direct experience: "I tested", "in my experience", "after X years of use". If competitors use them, your content should include them.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Expertise</h2>
            <p className="text-foreground/80 mb-4">
              The system identifies technical competence signals: specific terminology, in-depth explanations, methodology references. Generate content that demonstrates subject mastery.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Authoritativeness</h2>
            <p className="text-foreground/80 mb-4">
              Detects citations of authoritative sources, links to studies, mentions of recognized entities. Generated content includes placeholders for your sources and suggestions on what to cite.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Trustworthiness</h2>
            <p className="text-foreground/80 mb-4">
              Identifies trust elements: update dates, disclaimers, contact information, clear policies. Suggests where to add these elements in your content.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Applying the signals</h2>
            <p className="text-foreground/80 mb-4">
              During generation, Verbalist integrates detected E-E-A-T signals. You'll find in the content: spaces to insert personal experiences, source suggestions to cite, structures that communicate competence.
            </p>
          </div>
        </div>
    </article>
  )
}

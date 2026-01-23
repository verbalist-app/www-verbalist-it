import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Editing and Revision",
  description: "Modifying and perfecting generated content.",
}

export default function EditingPage() {
  return (
    <article className="pt-20 md:pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/en/docs/generation"
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Content Generation
          </Link>

          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Editing and Revision
          </h1>
          <p className="text-muted-foreground mb-8">
            Generated content is a starting point. Editing transforms it into excellent content.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">Integrated editor</h2>
            <p className="text-foreground/80 mb-4">
              Verbalist includes a Markdown editor with real-time preview. You can modify content directly in the interface without exporting.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Add personal experience</h2>
            <p className="text-foreground/80 mb-4">
              Look for [EXPERIENCE] placeholders in the text. Replace them with your real experiences: tests performed, results obtained, lessons learned. This activates E-E-A-T signals.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Insert sources</h2>
            <p className="text-foreground/80 mb-4">
              Find [SOURCE] placeholders and replace them with links to authoritative sources: studies, official statistics, documentation. Citations increase credibility and trust.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Adapt the tone</h2>
            <p className="text-foreground/80 mb-4">
              If the tone isn't perfect, modify phrases that sound artificial. Add your personal style. Content should seem written by you.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Fact check</h2>
            <p className="text-foreground/80 mb-4">
              AI models can generate inaccurate information. Verify data, statistics, names, dates. Correct any errors before publishing.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">SEO review</h2>
            <p className="text-foreground/80 mb-4">
              Check: keyword in title and H1, meta description under 160 characters, headings that answer questions, internal links where appropriate.
            </p>
          </div>
        </div>
    </article>
  )
}

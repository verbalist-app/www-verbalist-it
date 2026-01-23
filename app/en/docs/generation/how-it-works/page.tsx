import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How Generation Works",
  description: "The pattern-based content creation process.",
}

export default function HowItWorksPage() {
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
            How Generation Works
          </h1>
          <p className="text-muted-foreground mb-8">
            Verbalist uses extracted patterns to generate optimized content.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">Input: the patterns</h2>
            <p className="text-foreground/80 mb-4">
              Generation starts from extracted patterns: target word count, heading structure, topics to cover, E-E-A-T signals. This data defines content specifications.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Prompt construction</h2>
            <p className="text-foreground/80 mb-4">
              Verbalist builds a detailed prompt for the AI model, including: target keyword, detected patterns, tone of voice, specific instructions. The prompt is optimized for SEO-friendly output.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Structured generation</h2>
            <p className="text-foreground/80 mb-4">
              Content is generated following the identified heading structure. First the title, then each H2 section with related H3s. This ensures complete topic coverage.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">SEO optimization</h2>
            <p className="text-foreground/80 mb-4">
              During generation, SEO principles are applied: keyword in title and headings, compelling meta description, alt text for suggested images, internal linking opportunities.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">E-E-A-T signals</h2>
            <p className="text-foreground/80 mb-4">
              The system inserts placeholders for E-E-A-T signals: spaces for personal experiences, source suggestions to cite, points to add data and statistics.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Final output</h2>
            <p className="text-foreground/80 mb-4">
              The result is complete content in Markdown: title, meta description, structured body with headings, ready for review and publication.
            </p>
          </div>
        </div>
    </article>
  )
}

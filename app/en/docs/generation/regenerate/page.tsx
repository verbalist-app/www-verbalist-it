import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Regenerating Sections",
  description: "How to regenerate specific parts of content.",
}

export default function RegeneratePage() {
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
            Regenerating Sections
          </h1>
          <p className="text-muted-foreground mb-8">
            You don't need to regenerate all content if one section doesn't convince you.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">Selective regeneration</h2>
            <p className="text-foreground/80 mb-4">
              Select a section in the editor and click "Regenerate". Verbalist rewrites only that part while keeping the rest of the content intact.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">When to regenerate</h2>
            <p className="text-foreground/80 mb-4">
              Regenerate if: a section's tone isn't consistent, important information is missing, content is too generic, you want a different approach to the topic.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Specific instructions</h2>
            <p className="text-foreground/80 mb-4">
              Before regenerating you can add instructions: "more detailed", "with practical examples", "in list format". The new version will follow your indications.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Multiple versions</h2>
            <p className="text-foreground/80 mb-4">
              You can generate multiple versions of the same section and choose the best. Verbalist keeps track of previous versions for comparison.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Regenerating title and meta</h2>
            <p className="text-foreground/80 mb-4">
              Title and meta description are critical for CTR. Generate multiple variants and choose the most compelling. You can test different angles (how-to, list, question).
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Regeneration limits</h2>
            <p className="text-foreground/80 mb-4">
              Each regeneration uses tokens. If you regenerate too many times, consider editing manually or reviewing initial parameters to get better output on the first try.
            </p>
          </div>
        </div>
    </article>
  )
}

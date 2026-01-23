import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Advanced Parameters",
  description: "Temperature, length, focus and other generation options.",
}

export default function ParametersPage() {
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
            Advanced Parameters
          </h1>
          <p className="text-muted-foreground mb-8">
            Customize generation to get exactly the content you want.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">Temperature</h2>
            <p className="text-foreground/80 mb-4">
              Controls model creativity. Low (0.3-0.5): more predictable output adhering to patterns. High (0.7-0.9): more creativity and variation. For SEO, medium values (0.5-0.7) work well.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Target length</h2>
            <p className="text-foreground/80 mb-4">
              You can specify a target word count or let Verbalist use the benchmark from patterns. If competitors write 2000 words, the default will be around 2000.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Focus keyword</h2>
            <p className="text-foreground/80 mb-4">
              The main keyword you're optimizing for. Verbalist includes it naturally in title, H1, and body text without keyword stuffing.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Secondary keywords</h2>
            <p className="text-foreground/80 mb-4">
              Add related keywords to include. The system integrates them where semantically appropriate, improving relevance for related queries.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Exclusions</h2>
            <p className="text-foreground/80 mb-4">
              Specify topics, phrases or competitors not to mention. Useful if you want to avoid citing specific brands or irrelevant topics.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Custom instructions</h2>
            <p className="text-foreground/80 mb-4">
              Free field for additional instructions: "include a comparison table", "add an FAQ section", "use examples from X industry". Verbalist integrates these instructions into the prompt.
            </p>
          </div>
        </div>
    </article>
  )
}

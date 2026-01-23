import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Choosing the AI Model",
  description: "GPT-4, Claude or Gemini: which to use and when.",
}

export default function ModelsPage() {
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
            Choosing the AI Model
          </h1>
          <p className="text-muted-foreground mb-8">
            Verbalist supports different AI models. Here's when to use which.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">GPT-4</h2>
            <p className="text-foreground/80 mb-4">
              Great for generic and creative content. Excels at storytelling and persuasive text. Good balance between quality and speed.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Claude</h2>
            <p className="text-foreground/80 mb-4">
              Strong on long, structured content. Follows complex instructions precisely. Ideal for technical guides and content requiring accuracy.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Gemini</h2>
            <p className="text-foreground/80 mb-4">
              Good for content requiring recent knowledge. Integrates information from diverse sources well. Useful for rapidly evolving topics.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Which to choose</h2>
            <p className="text-foreground/80 mb-4">
              For most SEO content, results are comparable. Experiment with different models for the same content and see which you prefer for your style.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Costs</h2>
            <p className="text-foreground/80 mb-4">
              Models have different costs per token. Verbalist shows an estimate before generation. For frequent content, consider cumulative cost.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Changing models</h2>
            <p className="text-foreground/80 mb-4">
              You can change models at any time from settings or before each generation. The model doesn't affect extracted patterns, only final generation.
            </p>
          </div>
        </div>
    </article>
  )
}

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Getting Started with Verbalist",
  description: "Introductory guide to Verbalist. Learn how to create your first project and generate optimized content.",
}

export default function GettingStartedPage() {
  return (
    <article className="pt-20 md:pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/en/docs"
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to documentation
          </Link>

          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Getting Started with Verbalist
          </h1>
          <p className="text-base text-muted-foreground mb-8">
            Step-by-step guide to creating your first optimized content.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">1. Create a project</h2>
            <p className="text-foreground/80 mb-4">
              After logging in, click on "New project" from the dashboard. Give your project a name and select the target language.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">2. Enter the keyword</h2>
            <p className="text-foreground/80 mb-4">
              Enter the main keyword you want to rank for. Verbalist will analyze the top 10 organic results on Google for that keyword.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">3. Analyze the SERP</h2>
            <p className="text-foreground/80 mb-4">
              Click on "Analyze SERP". The system will retrieve the top 10 results, extract the content and identify winning patterns: heading structure, word count, topic coverage and E-E-A-T signals.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">4. Review patterns</h2>
            <p className="text-foreground/80 mb-4">
              In the "Patterns" tab you'll see a summary of what ranking content has in common: average length, heading structure, topics covered and authority signals.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">5. Generate content</h2>
            <p className="text-foreground/80 mb-4">
              Configure generation parameters (tone of voice, target length, specific focus) and click "Generate". Verbalist will produce complete content: title, meta description, heading structure and body text.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">6. Export and publish</h2>
            <p className="text-foreground/80 mb-4">
              Review the generated content, make any edits and export it to Markdown, HTML or plain text. Ready for publication.
            </p>
          </div>
        </div>
    </article>
  )
}

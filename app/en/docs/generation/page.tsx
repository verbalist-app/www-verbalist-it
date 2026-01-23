import Link from "next/link"
import { ArrowLeft, ChevronRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Content Generation",
  description: "How to use Verbalist to generate SEO-optimized content.",
}

const articles = [
  {
    title: "How generation works",
    description: "The pattern-based content creation process.",
    href: "/en/docs/generation/how-it-works",
  },
  {
    title: "Customizing tone of voice",
    description: "Configuring the style and tone of generated content.",
    href: "/en/docs/generation/tone",
  },
  {
    title: "Choosing the AI model",
    description: "GPT-4, Claude or Gemini: which to use and when.",
    href: "/en/docs/generation/models",
  },
  {
    title: "Advanced parameters",
    description: "Temperature, length, focus and other options.",
    href: "/en/docs/generation/parameters",
  },
  {
    title: "Editing and revision",
    description: "Modifying and perfecting generated content.",
    href: "/en/docs/generation/editing",
  },
  {
    title: "Regenerating sections",
    description: "How to regenerate specific parts of content.",
    href: "/en/docs/generation/regenerate",
  },
  {
    title: "Final export",
    description: "Available formats and export options.",
    href: "/en/docs/generation/export",
  },
]

export default function GenerationPage() {
  return (
    <section className="pt-20 md:pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/en/docs"
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to documentation
          </Link>

          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Content Generation
          </h1>
          <p className="text-base text-muted-foreground mb-8">
            Verbalist generates complete content based on extracted patterns: title, meta description, heading structure and body text. All optimized for SEO and AI responses.
          </p>

          <div className="space-y-3">
            {articles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted transition-colors group"
              >
                <div>
                  <h2 className="font-medium text-sm">{article.title}</h2>
                  <p className="text-sm text-muted-foreground mt-1">{article.description}</p>
                </div>
                <ChevronRight className="size-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
    </section>
  )
}

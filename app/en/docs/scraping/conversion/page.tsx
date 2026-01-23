import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "HTML to Markdown Conversion",
  description: "How content is cleaned and converted to readable format.",
}

export default function ConversionPage() {
  return (
    <article className="pt-20 md:pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/en/docs/scraping"
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Competitor Scraping
          </Link>

          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            HTML to Markdown Conversion
          </h1>
          <p className="text-muted-foreground mb-8">
            How Verbalist transforms HTML into clean, structured Markdown.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">Why Markdown</h2>
            <p className="text-foreground/80 mb-4">
              Markdown is readable, structured and ideal for AI analysis. It preserves content hierarchy without HTML noise (tags, classes, styles).
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Headings</h2>
            <p className="text-foreground/80 mb-4">
              H1-H6 tags become Markdown headings (# - ######). The hierarchy is preserved exactly as in the original.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Paragraphs and text</h2>
            <p className="text-foreground/80 mb-4">
              Paragraphs are separated by blank lines. Bold (*text*) and italic (_text_) are converted. Inline text remains inline.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Lists</h2>
            <p className="text-foreground/80 mb-4">
              Bulleted and numbered lists are converted to standard Markdown format. Nested lists maintain their structure with indentation.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Links</h2>
            <p className="text-foreground/80 mb-4">
              Links are preserved in [text](url) format. This allows analyzing competitors' internal and external linking strategies.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Tables</h2>
            <p className="text-foreground/80 mb-4">
              HTML tables become Markdown tables. Complex structures are simplified while maintaining essential data.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Images</h2>
            <p className="text-foreground/80 mb-4">
              Images are converted with alt text: ![alt text](url). Alt text is important for SEO analysis of images.
            </p>
          </div>
        </div>
    </article>
  )
}

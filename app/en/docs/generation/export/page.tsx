import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Final Export",
  description: "Available formats and export options for generated content.",
}

export default function ExportPage() {
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
            Final Export
          </h1>
          <p className="text-muted-foreground mb-8">
            Export content in your preferred format for publishing.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">Markdown</h2>
            <p className="text-foreground/80 mb-4">
              Verbalist's native format. Perfect for CMS supporting Markdown (Ghost, Hugo, Jekyll) or for importing into editors like Notion or Obsidian.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">HTML</h2>
            <p className="text-foreground/80 mb-4">
              Markdown converted to clean HTML. Ready to paste into WordPress, Webflow, or any CMS with HTML editor. Maintains heading structure.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Plain Text</h2>
            <p className="text-foreground/80 mb-4">
              Text without formatting. Useful for Google Docs, Word, or when you need to format manually in your CMS.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">WordPress ready</h2>
            <p className="text-foreground/80 mb-4">
              HTML optimized for WordPress with Gutenberg blocks. Also includes title and meta description ready for Yoast or RankMath.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Copy to clipboard</h2>
            <p className="text-foreground/80 mb-4">
              Button to copy directly. Content goes to clipboard in selected format, ready to paste where needed.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Download file</h2>
            <p className="text-foreground/80 mb-4">
              Download content as a file (.md, .html, .txt). Useful for archiving or for workflows starting from local files.
            </p>
          </div>
        </div>
    </article>
  )
}

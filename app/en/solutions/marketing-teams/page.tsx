import { FileText, Palette, PenTool, Target, Layers, RefreshCw } from "lucide-react"
import type { Metadata } from "next"
import { SubPageHeroEn } from "@/components/sub-page-hero-en"
import { SubPageCTA } from "@/components/sub-page-cta"
import { FeatureGrid } from "@/components/feature-grid"

export const metadata: Metadata = {
  title: "AI Content Generator",
  description: "Structured drafts for blogs, landing pages and guides. Configurable tone of voice, output ready to refine.",
  alternates: {
    canonical: "/en/solutions/marketing-teams",
  },
  openGraph: {
    title: "AI Content Generator — Verbalist",
    description: "Structured drafts for blogs, landing pages and guides. Configurable tone of voice, output ready to refine.",
  },
}

const features = [
  {
    icon: FileText,
    title: "Optimized blog posts",
    description: "Structured drafts with headings, paragraphs and meta tags based on patterns from top-ranking content.",
  },
  {
    icon: Palette,
    title: "Configurable tone of voice",
    description: "Professional, conversational or technical. Every draft follows your style and brand guidelines.",
  },
  {
    icon: PenTool,
    title: "Landing pages and guides",
    description: "Structure, sections and CTAs adapted to the format. From search intent to final content.",
  },
  {
    icon: Target,
    title: "Customizable target audience",
    description: "Define your target audience and Verbalist adapts language, depth and tone accordingly.",
  },
  {
    icon: Layers,
    title: "Title tag and meta description",
    description: "SEO on-page generated automatically: title, meta description, slug and optimized heading structure.",
  },
  {
    icon: RefreshCw,
    title: "Export and iteration",
    description: "Export in Markdown and HTML. Refine, iterate and publish. Document history for every project.",
  },
]

export default function MarketingTeamsPage() {
  return (
    <>
      <SubPageHeroEn
        label="Content Manager"
        title="Create SEO-optimized content without the research"
        description="Skip the manual SERP analysis. Get structured drafts based on proven ranking patterns, in your tone of voice, ready for your editorial touch."
      />

      <FeatureGrid
        title="Content for every format"
        description="Blog posts, landing pages, guides, product pages. Every format with the optimal structure for SERP."
        items={features}
      />

      <SubPageCTA
        title="Want to see it in action?"
        description="We'll show you how it works with a demo on your case."
        primaryCta={{ text: "Book a demo", href: "/en/book-demo" }}
        secondaryCta={{ text: "See pricing", href: "/en/pricing" }}
      />
    </>
  )
}

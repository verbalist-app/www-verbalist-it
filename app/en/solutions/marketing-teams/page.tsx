import { FileText, Palette, PenTool, Target, Layers, RefreshCw } from "lucide-react"
import type { Metadata } from "next"
import { SubPageHeroEn } from "@/components/sub-page-hero-en"
import { SubPageCTA } from "@/components/sub-page-cta"
import { FeatureGrid } from "@/components/feature-grid"

export const metadata: Metadata = {
  title: "GEO content for Content Creators",
  description: "Structured drafts for blogs, landing pages and guides, optimized for Google and AI search. Configurable tone of voice, output ready to refine.",
  alternates: {
    canonical: "/en/solutions/marketing-teams",
  },
  openGraph: {
    title: "GEO content for Content Creators \\ Verbalist",
    description: "Structured drafts for blogs, landing pages and guides, optimized for Google and AI search. Configurable tone of voice, output ready to refine.",
  },
}

const features = [
  {
    icon: FileText,
    title: "Blog posts structured for AI search",
    description: "Drafts with headings, paragraphs and meta tags based on patterns from content that ranks on Google and gets cited by LLMs.",
  },
  {
    icon: Palette,
    title: "Configurable tone of voice",
    description: "Professional, conversational or technical. Every draft follows your style and brand guidelines.",
  },
  {
    icon: PenTool,
    title: "Landing pages and guides",
    description: "Structure, sections and CTAs adapted to the format. From search intent to final content, with semantic structure for LLMs.",
  },
  {
    icon: Target,
    title: "Customizable target audience",
    description: "Define your target audience and Verbalist adapts language, depth and tone accordingly.",
  },
  {
    icon: Layers,
    title: "Title tag and meta description",
    description: "SEO on-page and optimized heading structure. Content designed to rank on Google and be cited in AI search.",
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
        label="Content Creator"
        title="Content structured for Google and AI search"
        description="SERP analysis and pattern extraction are automated. You get drafts with semantic structure optimized for visibility on Google, ChatGPT, Perplexity and AI Overview."
      />

      <FeatureGrid
        title="Content for every format, optimized for GEO"
        description="Blog posts, landing pages, guides. Every format with the optimal structure to be indexed and cited in AI search."
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

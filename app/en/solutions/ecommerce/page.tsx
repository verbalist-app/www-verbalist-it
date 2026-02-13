import { Package, ShoppingBag, TrendingUp, FileText, Search, BarChart3 } from "lucide-react"
import type { Metadata } from "next"
import { SubPageHeroEn } from "@/components/sub-page-hero-en"
import { SubPageCTA } from "@/components/sub-page-cta"
import { FeatureGrid } from "@/components/feature-grid"

export const metadata: Metadata = {
  title: "GEO content for eCommerce",
  description: "Product pages and categories optimized for Google and AI engines. Semantic structure, competitor patterns and content citable by LLMs.",
  alternates: {
    canonical: "/en/solutions/ecommerce",
  },
  openGraph: {
    title: "GEO content for eCommerce \\ Verbalist",
    description: "Product pages and categories optimized for Google and AI engines. Semantic structure, competitor patterns and content citable by LLMs.",
  },
}

const features = [
  {
    icon: Package,
    title: "Product pages with semantic structure",
    description: "Hero, key features, technical specs and use cases. Structured to be indexed by Google and cited by AI engines.",
  },
  {
    icon: Search,
    title: "SERP analysis per category",
    description: "Analyze the top 10 results for each category and product keyword. Extract the patterns that work.",
  },
  {
    icon: BarChart3,
    title: "Competitor patterns",
    description: "Identify which sections they include, how they structure them and which E-E-A-T signals top-ranking pages use.",
  },
  {
    icon: FileText,
    title: "Descriptions optimized for LLMs",
    description: "Product descriptions with clear semantic structure. Title tags, meta descriptions and content designed for Google and AI engines.",
  },
  {
    icon: TrendingUp,
    title: "Citable content",
    description: "Definitions, specifications and comparisons structured to be referenced by ChatGPT, Perplexity and AI Overview.",
  },
  {
    icon: ShoppingBag,
    title: "Scalable for catalogs",
    description: "From a single product page to the full catalog. Repeatable workflow for hundreds of pages.",
  },
]

export default function EcommercePage() {
  return (
    <>
      <SubPageHeroEn
        label="eCommerce"
        title="Product pages visible on Google and AI engines"
        description="Analyze top-ranking product pages and generate descriptions with semantic structure optimized for SERP and to be cited by AI assistants."
      />

      <FeatureGrid
        title="Product pages designed for GEO"
        description="SERP analysis to understand what works. Content structured for Google, ChatGPT and Perplexity."
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

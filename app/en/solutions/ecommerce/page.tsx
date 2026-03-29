import { Package, ShoppingBag, TrendingUp, FileText, Search, BarChart3 } from "lucide-react"
import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import Testimonials from "@/components/testimonials-4"
import { FeatureGrid } from "@/components/feature-grid"

export const metadata: Metadata = {
  title: "GEO content for eCommerce",
  description: "Product pages and categories with AI search optimization. Semantic structure, competitor patterns and content designed to be cited by LLMs.",
  alternates: {
    canonical: "/en/solutions/ecommerce",
  },
  openGraph: {
    title: "GEO content for eCommerce \\ Verbalist",
    description: "Product pages and categories with AI search optimization. Semantic structure, competitor patterns and content designed to be cited by LLMs.",
  },
}

const features = [
  {
    icon: Package,
    title: "Product pages with semantic structure",
    description: "Hero, key features, technical specs and use cases. Structured to be indexed by Google and cited in AI search.",
  },
  {
    icon: Search,
    title: "Search results analysis per category",
    description: "Analyze the top 10 results for each category and product keyword. Extract the patterns that work.",
  },
  {
    icon: BarChart3,
    title: "Competitor patterns",
    description: "Identify which sections they include, how they structure them and which quality and authority signals top-ranking pages use.",
  },
  {
    icon: FileText,
    title: "Descriptions optimized for LLMs",
    description: "Product descriptions with clear semantic structure. Title tags, meta descriptions and content designed for Google and AI search.",
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
      <SubPageHero locale="en"
        label="eCommerce"
        title="Product pages visible on Google and AI search"
        description="Analyze top-ranking product pages and generate descriptions with semantic structure optimized for Google results and to be cited by AI assistants."
      />

      <FeatureGrid
        title="Product pages designed for GEO"
        description="Search results analysis to understand what works. Content structured for Google, ChatGPT and Perplexity."
        items={features}
      />

      <Testimonials locale="en" />

      <SubPageCTA locale="en" />
    </>
  )
}

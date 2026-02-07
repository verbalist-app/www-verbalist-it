import { Package, ShoppingBag, TrendingUp, FileText, Search, BarChart3 } from "lucide-react"
import type { Metadata } from "next"
import { SubPageHeroEn } from "@/components/sub-page-hero-en"
import { SubPageCTA } from "@/components/sub-page-cta"
import { FeatureGrid } from "@/components/feature-grid"

export const metadata: Metadata = {
  title: "SEO for eCommerce",
  description: "Optimized product pages based on SERP patterns. Descriptions, specifications and content that converts.",
  alternates: {
    canonical: "/en/solutions/ecommerce",
  },
  openGraph: {
    title: "SEO for eCommerce \ Verbalist",
    description: "Optimized product pages based on SERP patterns. Descriptions, specifications and content that converts.",
  },
}

const features = [
  {
    icon: Package,
    title: "Structured product pages",
    description: "Hero, key features, technical specs and use cases. Based on patterns from top-ranking pages.",
  },
  {
    icon: Search,
    title: "SERP analysis per category",
    description: "Analyze the top 10 results for each category and product keyword. Understand what works.",
  },
  {
    icon: BarChart3,
    title: "Competitor patterns",
    description: "Identify which sections they include, how they structure them and what length first-page pages have.",
  },
  {
    icon: FileText,
    title: "Optimized descriptions",
    description: "Product descriptions with keywords, benefits and specs. Title tags and meta descriptions for each page.",
  },
  {
    icon: TrendingUp,
    title: "CTAs that convert",
    description: "Optimized call-to-actions based on competitor patterns. Structure that drives rankings and conversions.",
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
        title="Turn product pages into traffic magnets"
        description="Analyze top-ranking product pages and generate optimized descriptions, features and specifications that drive both rankings and conversions."
      />

      <FeatureGrid
        title="Data-driven product pages"
        description="SERP analysis to understand what works. Structured drafts with sections that convert."
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

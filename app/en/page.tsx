import { HeroSectionEn } from "@/components/hero-section-en"
import { TrustedBy } from "@/components/trusted-by"
import { FeatureChecklist } from "@/components/feature-checklist"
import { FeaturesSectionEn } from "@/components/features-section-en"
import { IncentivesSectionEn } from "@/components/incentives-section-en"
import { Testimonials } from "@/components/testimonials"
import { SubPageCTA } from "@/components/sub-page-cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Verbalist — Content Automation for SEO, AEO, GEO",
  description: "Analyze Google competitors, extract winning patterns and generate content optimized for SEO, AEO and GEO. From keyword to complete article in minutes.",
  alternates: {
    canonical: "/en",
    languages: {
      'it': '/',
      'en': '/en',
      'x-default': '/',
    },
  },
}

const homeTestimonials = [
  {
    quote: "Verbalist changed how we create content. Finally a platform that starts from real SERP data.",
    metric: "+180%",
    author: "Marco Rossi",
    role: "Head of SEO",
    company: "Digital Agency",
  },
  {
    quote: "We used to spend hours analyzing competitors manually. Now the process is fully automated.",
    metric: "10x faster",
    author: "Laura Bianchi",
    role: "Content Manager",
    company: "E-commerce Brand",
  },
  {
    quote: "Generated content ranks on page one 70% of the time. Incredible ROI for our team.",
    metric: "70%",
    author: "Giuseppe Verdi",
    role: "SEO Specialist",
    company: "Tech Startup",
  },
]

const homeFeatures = [
  {
    items: [
      "Automatic SERP analysis",
      "Competitor content scraping",
      "AI pattern detection",
    ],
  },
  {
    items: [
      "SEO content generation",
      "Optimized for AEO and GEO",
      "Based on real data",
    ],
  },
]

export default function HomeEn() {
  return (
    <>
      <HeroSectionEn />
      <TrustedBy text="Trusted by SEO teams and agencies in Italy and abroad" />
      <FeatureChecklist
        title="One platform to create content that ranks"
        columns={homeFeatures}
      />
      <FeaturesSectionEn className="border-t" />
      <IncentivesSectionEn className="border-t" />
      <Testimonials
        title="What our customers say"
        testimonials={homeTestimonials}
      />
      <SubPageCTA
        title="Want to see it in action?"
        description="We'll show you how it works with a demo. See SERP analysis, pattern detection and content generation on your case."
        primaryCta={{ text: "Book a demo", href: "/en/book-demo" }}
        secondaryCta={{ text: "See pricing", href: "/en/pricing" }}
      />
    </>
  )
}

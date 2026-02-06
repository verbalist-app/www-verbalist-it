import { HeroSectionEn } from "@/components/hero-section-en"
import { TrustedBy } from "@/components/trusted-by"
import { FeaturesSectionEn } from "@/components/features-section-en"
import { StatsBar } from "@/components/stats-bar"
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

export default function HomeEn() {
  return (
    <>
      <HeroSectionEn />
      <TrustedBy text="Trusted by SEO teams and agencies in Italy and abroad" />
      <FeaturesSectionEn className="border-t" />
      <StatsBar
        stats={[
          { value: "10 results", label: "SERP analyzed per keyword" },
          { value: "< 3 min", label: "From keyword to full article" },
          { value: "4 AI models", label: "Available for generation" },
          { value: "100%", label: "Based on real SERP data" },
        ]}
      />
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

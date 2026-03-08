import { HeroSection } from "@/components/hero-section"
import { TrustedBy } from "@/components/trusted-by"
import { FeaturesSection } from "@/components/features-section"
import { StatsBar } from "@/components/stats-bar"
import { Testimonials } from "@/components/testimonials"
import { SubPageCTA } from "@/components/sub-page-cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Verbalist \\ Generative Engine Optimization Platform",
  },
  description: "AI search optimization and answer engine optimization in one platform. Analyze competitors, extract patterns and generate content cited by ChatGPT, Perplexity.",
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
    quote: "Verbalist lets us create structured content for AI search without building an entire GEO framework in-house.",
    metric: "+180%",
    author: "Marco Rossi",
    role: "Marketing Manager",
    company: "Manufacturing SMB",
  },
  {
    quote: "We used to spend hours analyzing competitors manually. Now the process is fully automated and the content is LLM-ready.",
    metric: "10x faster",
    author: "Laura Bianchi",
    role: "Content Creator",
    company: "Freelance",
  },
  {
    quote: "Our clients wanted visibility on ChatGPT and Perplexity. With Verbalist we can deliver GEO-ready content without prohibitive costs.",
    metric: "12 clients",
    author: "Giuseppe Verdi",
    role: "Digital Consultant",
    company: "Web Agency",
  },
]

export default function HomeEn() {
  return (
    <>
      <HeroSection locale="en" />
      <TrustedBy text="Trusted by agencies, freelancers and SMBs in Italy and abroad" />
      <FeaturesSection className="border-t" locale="en" />
      <StatsBar
        stats={[
          { value: "10 results", label: "SERP analyzed per keyword" },
          { value: "< 3 min", label: "From keyword to GEO-ready content" },
          { value: "4 AI models", label: "Available for generation" },
          { value: "LLM-ready", label: "Content structured for AI search" },
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

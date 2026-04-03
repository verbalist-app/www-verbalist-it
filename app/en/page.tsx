import { HeroSection } from "@/components/hero-section"
import LogoCloud from "@/components/logo-cloud-1"
import Features from "@/components/features-ten"
import FAQs from "@/components/faqs-3"
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

export default function HomeEn() {
  return (
    <>
      <HeroSection locale="en" />
      <LogoCloud className="border-t" />
      <Features className="border-t" locale="en" />
      <FAQs className="border-t" locale="en" />
      <SubPageCTA
        className="border-t"
        locale="en"
        secondaryCta={{ text: "Start now", href: "https://app.verbalist.it" }}
      />
    </>
  )
}

import Image from "next/image"
import type { Metadata } from "next"
import { Cpu } from "lucide-react"
import { SubPageHeroEn } from "@/components/sub-page-hero-en"
import { SubPageCTA } from "@/components/sub-page-cta"
import { TrustedBy } from "@/components/trusted-by"

export const metadata: Metadata = {
  title: "Technology",
  description: "Claude, GPT-4, Gemini and DataForSEO: Verbalist's AI stack for enterprise-grade SERP analysis and SEO content generation.",
  alternates: {
    canonical: "/en/integrations",
  },
  openGraph: {
    title: "Technology — Verbalist",
    description: "Claude, GPT-4, Gemini and DataForSEO: Verbalist's AI stack for enterprise-grade SERP analysis and SEO content generation.",
  },
}

export default function IntegrationsPage() {
  return (
    <>
      <SubPageHeroEn
        icon={Cpu}
        title="Technology"
        description="Verbalist integrates with the best platforms and technologies to deliver enterprise-grade results."
      />

      <TrustedBy text="Trusted by SEO teams and agencies in Italy and abroad" />

      <section className="border-t py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-16">
            <section>
              <h2 className="text-xl font-medium tracking-tight text-foreground mb-6">Language Models (LLM)</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Claude (Anthropic)",
                    logo: "/logos/claude.svg",
                    description: "Ideal for complex analysis and long-form content generation",
                    useCase: "SERP analysis, content generation",
                  },
                  {
                    name: "GPT-4 (OpenAI)",
                    logo: "/logos/gpt-4.svg",
                    description: "Excellent for creative tasks and content optimization",
                    useCase: "Generation, optimization",
                  },
                  {
                    name: "Gemini (Google)",
                    logo: "/logos/gemini.svg",
                    description: "Optimized for data analysis and pattern recognition",
                    useCase: "SERP analysis, pattern extraction",
                  },
                ].map((llm) => (
                  <div key={llm.name} className="bg-muted rounded-lg p-6 border border-border">
                    <div className="mb-5">
                      <Image
                        src={llm.logo}
                        alt={llm.name}
                        width={100}
                        height={32}
                        className="h-6 w-auto"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{llm.description}</p>
                    <div className="text-[13px] text-muted-foreground">
                      <span className="font-medium">Use:</span> {llm.useCase}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-medium tracking-tight text-foreground mb-6">APIs and External Services</h2>
              <div className="space-y-4">
                {[
                  {
                    name: "DataForSEO API v3",
                    description: "Provides real-time SERP data via /serp/google/organic/live/advanced endpoint. Retrieves top 10 organic results with complete metadata (title, description, rank, URL).",
                    category: "SERP Data",
                    features: [
                      "Automatic filtering of excluded domains (Wikipedia, social, aggregators)",
                      "Desktop/mobile support with OS configuration",
                      "Configurable SERP pagination handling",
                      "Extraction of rank_group and rank_absolute for each result",
                    ],
                  },
                  {
                    name: "StealthScriber Service",
                    description: "Advanced web scraping service that converts HTML to structured Markdown. Handles JavaScript rendering, configurable timeouts and header rotation.",
                    category: "Web Scraping",
                    features: [
                      "HTML → Markdown conversion optimized for LLM",
                      "JavaScript rendering when needed",
                      "Configurable timeout and retry",
                      "Metadata extraction: status code, processing time",
                    ],
                  },
                  {
                    name: "Google Ads API",
                    description: "Planned integration for search volume data directly from Google",
                    category: "Keyword Research",
                    comingSoon: true,
                  },
                ].map((api) => (
                  <div key={api.name} className="bg-background border border-border rounded-lg p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-[16px] font-medium text-foreground">{api.name}</h3>
                          {api.comingSoon && (
                            <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">
                              Coming soon
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{api.description}</p>
                        <div className="text-[13px] text-muted-foreground mb-3">
                          <span className="font-medium">Category:</span> {api.category}
                        </div>
                        {api.features && (
                          <div className="mt-4 pt-4 border-t border-border">
                            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                              Features
                            </div>
                            <ul className="space-y-1">
                              {api.features.map((feature, idx) => (
                                <li key={idx} className="text-[13px] text-foreground/80 flex items-start gap-2">
                                  <span className="text-muted-foreground mt-1">•</span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      <SubPageCTA
        title="Want to see it in action?"
        description="We'll show you how it works with a demo. See SERP analysis, pattern detection and content generation on your case."
        primaryCta={{ text: "Book a demo", href: "/en/contact" }}
        secondaryCta={{ text: "See pricing", href: "/en/pricing" }}
      />
    </>
  )
}

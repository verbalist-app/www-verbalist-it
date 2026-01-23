import { Bot, Sparkles, Quote, Shield } from "lucide-react"
import type { Metadata } from "next"
import { SubPageHeroEn } from "@/components/sub-page-hero-en"
import { SubPageCTA } from "@/components/sub-page-cta"
import { TrustedBy } from "@/components/trusted-by"
import { FeatureChecklist } from "@/components/feature-checklist"
import { HighlightBlock } from "@/components/highlight-block"

export const metadata: Metadata = {
  title: "Verbalist for AI Strategists",
  description: "Content optimized to be cited by ChatGPT, Perplexity and AI Overview. AEO and GEO with SERP data.",
  alternates: {
    canonical: "/en/solutions/ai-strategist",
  },
  openGraph: {
    title: "Verbalist for AI Strategists",
    description: "Content optimized to be cited by ChatGPT, Perplexity and AI Overview. AEO and GEO with SERP data.",
  },
}

const featureColumns = [
  {
    items: [
      "E-E-A-T signals analysis",
      "Citability patterns",
      "Featured snippet structure",
      "Clear and citable definitions",
    ],
  },
  {
    items: [
      "Complete topic coverage",
      "Subtopics for depth",
      "FAQ schema-ready",
      "Structured content",
    ],
  },
  {
    items: [
      "Trust patterns from competitors",
      "Sources and references",
      "Author expertise signals",
      "Freshness indicators",
    ],
  },
]

function EEATIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-3">
        <div className="rounded-lg border bg-background p-3 shadow-sm">
          <div className="text-xs font-medium text-muted-foreground mb-3">E-E-A-T signals detected</div>
          <div className="space-y-2">
            {[
              { signal: "Author bio present", found: 8 },
              { signal: "Sources cited", found: 7 },
              { signal: "Update date", found: 9 },
              { signal: "Explicit credentials", found: 5 },
            ].map((item) => (
              <div key={item.signal} className="flex items-center justify-between text-xs">
                <span>{item.signal}</span>
                <span className="text-muted-foreground">{item.found}/10 competitors</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function CitabilityIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-3">
        <div className="rounded-lg border bg-background p-3 shadow-sm">
          <div className="text-xs font-medium text-muted-foreground mb-2">Citable structure</div>
          <div className="space-y-2 text-xs">
            <div className="p-2 rounded bg-muted">
              <span className="font-medium">Definition:</span> Clear and concise sentence
            </div>
            <div className="p-2 rounded bg-muted">
              <span className="font-medium">How it works:</span> Numbered steps
            </div>
            <div className="p-2 rounded bg-muted">
              <span className="font-medium">FAQ:</span> Question → Direct answer
            </div>
          </div>
          <div className="mt-3 text-[10px] text-muted-foreground">
            Patterns that LLMs cite easily
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AIStrategistPage() {
  return (
    <>
      <SubPageHeroEn
        icon={Bot}
        title="Verbalist for AI Strategists"
        description="Structured content to be cited by LLMs. E-E-A-T analysis, citability patterns and structures optimized for AEO and GEO."
        breadcrumbs={[
          { label: "Home", href: "/en" },
          { label: "Solutions", href: "/en/solutions/ai-strategist" },
          { label: "AI Strategist" },
        ]}
      />

      <TrustedBy text="Trusted by SEO teams and agencies" />

      <FeatureChecklist
        title="Optimization for generative engines"
        description="Not just Google. Content designed to be cited by ChatGPT, Perplexity, Gemini and AI Overview."
        columns={featureColumns}
      />

      <HighlightBlock
        icon={Shield}
        title="E-E-A-T signals from competitors"
        description="Verbalist analyzes which authority signals ranking content uses: author bio, cited sources, credentials, update dates. Find them in the report to replicate."
        visual={<EEATIllustration />}
      />

      <HighlightBlock
        icon={Quote}
        title="Structure that LLMs cite"
        description="Clear definitions, numbered steps, FAQs with direct answers. Verbalist generates drafts with structures that language models can easily extract and cite."
        visual={<CitabilityIllustration />}
        reverse
      />

      <SubPageCTA
        title="Want to see it in action?"
        description="We'll show you how it works with a demo on your case."
        primaryCta={{ text: "Book a demo", href: "/en/contact" }}
        secondaryCta={{ text: "See pricing", href: "/en/pricing" }}
      />
    </>
  )
}

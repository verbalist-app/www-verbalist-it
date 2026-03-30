import { Search, Target, Eye, Layers } from "lucide-react"
import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { TrustedBy } from "@/components/trusted-by"
import { FeatureChecklist } from "@/components/feature-checklist"
import { HighlightBlock } from "@/components/highlight-block"
import Testimonials from "@/components/testimonials-4"

export const metadata: Metadata = {
  title: "Automated Search Results Analysis",
  description: "Analyze the top 10 Google results in one click. Extract title, meta, structure and search intent for any keyword.",
  alternates: {
    canonical: "/en/platform/serp-analysis",
  },
  openGraph: {
    title: "Automated Search Results Analysis \\ Verbalist",
    description: "Analyze the top 10 Google results in one click. Extract title, meta, structure and search intent for any keyword.",
  },
}

const featureColumns = [
  {
    items: [
      "Top 10 organic results",
      "Title and meta description",
      "URL and structure",
      "Position and ranking",
    ],
  },
  {
    items: [
      "Search intent detection",
      "Informational vs commercial",
      "Search result features present",
      "Featured snippet analysis",
    ],
  },
  {
    items: [
      "Word count per result",
      "Heading structure",
      "Topic coverage",
      "Quality and authority signals",
    ],
  },
]

function SerpResultsIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-2">
        {[1, 2, 3, 4, 5].map((pos) => (
          <div key={pos} className="flex items-center gap-2 rounded-lg border bg-background p-2 shadow-sm">
            <span className="flex size-5 items-center justify-center rounded bg-foreground text-[10px] font-bold text-background">
              {pos}
            </span>
            <div className="flex-1">
              <div className="h-2 w-3/4 rounded bg-foreground/60" />
              <div className="mt-1 h-1.5 w-full rounded bg-muted-foreground/30" />
            </div>
            <span className="text-[10px] text-muted-foreground">1.2k</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function IntentIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-3">
        {[
          { label: "Informational", value: 65, active: true },
          { label: "Commercial", value: 20 },
          { label: "Transactional", value: 10 },
          { label: "Navigational", value: 5 },
        ].map((intent) => (
          <div key={intent.label} className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className={intent.active ? "font-medium" : "text-muted-foreground"}>
                {intent.label}
              </span>
              <span className="font-medium">{intent.value}%</span>
            </div>
            <div className="h-2.5 w-full rounded-full bg-muted">
              <div
                className={`h-full rounded-full ${intent.active ? "bg-foreground" : "bg-foreground/40"}`}
                style={{ width: `${intent.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function SerpAnalysisPage() {
  return (
    <>
      <SubPageHero locale="en"
        label="Search Results Analysis"
        title="Understand exactly what makes content rank"
        description="Analyze the top 10 Google results in seconds. Extract titles, meta descriptions, heading structures and search intent patterns that drive rankings."
      />

      <TrustedBy />

      <FeatureChecklist
        title="All the search results data you need"
        description="Automatic analysis of the top 10 results with complete metrics."
        columns={featureColumns}
      />

      <HighlightBlock
        icon={Eye}
        title="Top 10 in one click"
        description="Enter the keyword, get all the data from the top 10 results. Title, description, URL, word count, heading structure. All in one screen."
        visual={<SerpResultsIllustration />}
      />

      <HighlightBlock
        icon={Target}
        title="Understands search intent"
        description="Automatically analyzes the dominant search intent. Informational, commercial, transactional or navigational. Know what type of content to create."
        visual={<IntentIllustration />}
        reverse
      />

      <Testimonials locale="en" />

      <SubPageCTA locale="en" />
    </>
  )
}

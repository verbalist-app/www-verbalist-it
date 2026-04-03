import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { BentoGrid } from "@/components/bento-grid"

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

function SerpResultsIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="space-y-2">
        {[88, 76, 64, 52, 40].map((w, i) => (
          <div key={i} className="flex items-center gap-2.5 rounded-lg bg-background p-2.5">
            <span className="flex size-5 shrink-0 items-center justify-center rounded bg-foreground/10 text-[9px] font-medium text-foreground/40">{i + 1}</span>
            <div className="flex-1 space-y-1">
              <div className="h-1.5 rounded bg-foreground/15" style={{ width: `${w}%` }} />
              <div className="h-1 rounded bg-foreground/6" style={{ width: `${w - 15}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function IntentIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-2.5">
          {[65, 20, 10, 5].map((pct, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-foreground/8">
                <div className={`h-full rounded-full ${i === 0 ? "bg-foreground/25" : "bg-foreground/12"}`} style={{ width: `${pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function MetadataCompareIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-3">
          {[
            { title: "60%", desc: "85%" },
            { title: "50%", desc: "75%" },
            { title: "70%", desc: "90%" },
          ].map((row, i) => (
            <div key={i} className="space-y-1.5">
              <div className="h-2 rounded bg-foreground/20" style={{ width: row.title }} />
              <div className="h-1.5 rounded bg-foreground/8" style={{ width: row.desc }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function SerpFeaturesIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-2">
          <div className="h-2 w-full rounded bg-foreground/20" />
          <div className="h-2 w-3/4 rounded bg-foreground/12" />
          <div className="h-2 w-4/5 rounded bg-foreground/10" />
          <div className="h-2 w-1/2 rounded bg-foreground/8" />
          <div className="h-2 w-2/3 rounded bg-foreground/6" />
        </div>
      </div>
    </div>
  )
}

function DirectCompareIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <div className="h-1.5 w-3/4 rounded bg-foreground/20" />
            <div className="h-1.5 w-full rounded bg-foreground/10" />
            <div className="h-1.5 w-1/2 rounded bg-foreground/15" />
            <div className="h-1.5 w-4/5 rounded bg-foreground/8" />
          </div>
          <div className="space-y-2">
            <div className="h-1.5 w-1/2 rounded bg-foreground/20" />
            <div className="h-1.5 w-4/5 rounded bg-foreground/10" />
            <div className="h-1.5 w-3/4 rounded bg-foreground/15" />
            <div className="h-1.5 w-full rounded bg-foreground/8" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SerpAnalysisPage() {
  return (
    <>
      <SubPageHero
        locale="en"
        label="SERP Analysis"
        title="See what's working on page one"
        description="Enter a keyword and see who ranks, how they structure content and why it works."
      />

      <BentoGrid
        items={[
          {
            title: "Top 10 in one click",
            description: "Enter the keyword, get all the data from the top 10 results. Title, description, URL, word count, heading structure.",
            visual: <SerpResultsIllustration />,
          },
          {
            title: "Understands search intent",
            description: "Automatically analyzes the dominant search intent. Informational, commercial, transactional or navigational.",
            visual: <IntentIllustration />,
          },
          {
            title: "Metadata side by side",
            description: "Title tag, meta description and URL for every result. All data in a comparative view to see how they rank.",
            visual: <MetadataCompareIllustration />,
          },
          {
            title: "SERP features",
            description: "Featured snippet, AI Overview, People Also Ask. Identifies the SERP opportunities available for your keyword.",
            visual: <SerpFeaturesIllustration />,
          },
          {
            title: "Direct comparison",
            description: "Compare word count, headings and structure across results. Find what sets them apart and what they share.",
            visual: <DirectCompareIllustration />,
          },
        ]}
      />

      <SubPageCTA locale="en" />
    </>
  )
}

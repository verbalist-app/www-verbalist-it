import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { BentoGrid } from "@/components/bento-grid"

export const metadata: Metadata = {
  title: "SEO Pattern Analysis",
  description: "Discover patterns in ranking content: word count, heading structure, topic coverage and quality and authority signals.",
  alternates: {
    canonical: "/en/platform/pattern-analysis",
  },
  openGraph: {
    title: "SEO Pattern Analysis \\ Verbalist",
    description: "Discover patterns in ranking content: word count, heading structure, topic coverage and quality and authority signals.",
  },
}

function WordCountIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="flex h-20 items-end gap-1.5">
          {[35, 55, 85, 100, 90, 70, 45, 25].map((height, i) => (
            <div
              key={i}
              className={`flex-1 rounded-sm ${i === 3 ? "bg-foreground/25" : "bg-foreground/10"}`}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function StructureIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-2.5">
          {[100, 90, 85, 80, 60].map((pct, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-foreground/8">
                <div className="h-full rounded-full bg-foreground/20" style={{ width: `${pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function TopicCoverageIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="flex flex-wrap gap-1.5">
          {[20, 12, 25, 15, 10, 8, 6, 20, 12, 15, 10, 8].map((opacity, i) => (
            <div
              key={i}
              className="h-2 rounded bg-foreground"
              style={{ width: `${20 + (i % 4) * 10}%`, opacity: opacity / 100 }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function ContentGapIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-2.5">
          {[
            { left: "35%", gap: "15%", right: "30%" },
            { left: "45%", gap: "10%", right: "25%" },
            { left: "25%", gap: "20%", right: "35%" },
            { left: "40%", gap: "12%", right: "28%" },
          ].map((bar, i) => (
            <div key={i} className="flex items-center gap-0">
              <div className="h-2 rounded-l bg-foreground/15" style={{ width: bar.left }} />
              <div className="h-2 border-b border-dashed border-foreground/15" style={{ width: bar.gap }} />
              <div className="h-2 rounded-r bg-foreground/15" style={{ width: bar.right }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function EeatSignalsIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-2.5">
          {[85, 60, 45, 70].map((pct, i) => (
            <div key={i} className="h-2 overflow-hidden rounded-full bg-foreground/8">
              <div className="h-full rounded-full bg-foreground/20" style={{ width: `${pct}%` }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function PatternAnalysisPage() {
  return (
    <>
      <SubPageHero
        locale="en"
        label="Patterns"
        title="Find what top results have in common"
        description="Length, structure, topics covered. The recurring patterns behind page-one content."
      />

      <BentoGrid
        items={[
          {
            title: "Word count that works",
            description: "Calculates the average word count of ranking content. See the distribution, optimal range and how much you need to write.",
            visual: <WordCountIllustration />,
          },
          {
            title: "Structure that converts",
            description: "Finds common structural patterns. Which H2s, in what order, how many H3s. Replicate the structure that works.",
            visual: <StructureIllustration />,
          },
          {
            title: "Topic coverage",
            description: "Topics and subtopics covered by top results. Identifies the areas your content needs to address.",
            visual: <TopicCoverageIllustration />,
          },
          {
            title: "Content gap",
            description: "Finds topics competitors miss or cover poorly. Opportunities to differentiate your content.",
            visual: <ContentGapIllustration />,
          },
          {
            title: "E-E-A-T signals",
            description: "Citations, sources, author credentials and freshness. The quality and authority signals used by ranking pages.",
            visual: <EeatSignalsIllustration />,
          },
        ]}
      />

      <SubPageCTA locale="en" />
    </>
  )
}

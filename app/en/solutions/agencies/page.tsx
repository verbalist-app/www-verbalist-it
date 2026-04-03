import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { BentoGrid } from "@/components/bento-grid"


export const metadata: Metadata = {
  title: "GEO-ready content for agencies",
  description: "AI search optimization for every client. Search results analysis, pattern detection and GEO-ready content generation in a single workflow.",
  alternates: {
    canonical: "/en/solutions/agencies",
  },
  openGraph: {
    title: "GEO-ready content for agencies \\ Verbalist",
    description: "AI search optimization for every client. Search results analysis, pattern detection and GEO-ready content generation in a single workflow.",
  },
}

function MultiClientIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="space-y-2">
        {[75, 50, 25].map((progress, i) => (
          <div key={i} className="flex items-center gap-3 rounded-lg bg-background p-3">
            <div className={`flex size-6 shrink-0 items-center justify-center rounded-md text-[9px] font-semibold ${i === 0 ? "bg-foreground text-background" : "bg-foreground/8 text-foreground/40"}`}>
              {String.fromCharCode(65 + i)}
            </div>
            <div className="flex-1">
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-foreground/8">
                <div className="h-full rounded-full bg-foreground/20" style={{ width: `${progress}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function AnalysisIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-2">
          {[90, 80, 70, 55].map((pct, i) => (
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

function ExportIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-3">
          <div className="h-2 w-3/5 rounded bg-foreground/20" />
          <div className="space-y-1.5">
            <div className="h-1.5 w-full rounded bg-foreground/8" />
            <div className="h-1.5 w-5/6 rounded bg-foreground/8" />
            <div className="h-1.5 w-3/4 rounded bg-foreground/8" />
          </div>
          <div className="h-2 w-2/5 rounded bg-foreground/15" />
          <div className="space-y-1.5">
            <div className="h-1.5 w-full rounded bg-foreground/8" />
            <div className="h-1.5 w-4/5 rounded bg-foreground/8" />
          </div>
        </div>
      </div>
    </div>
  )
}

function ScalableWorkflowIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="flex items-center gap-3">
          {[25, 20, 15, 10].map((opacity, i) => (
            <div key={i} className="flex items-center gap-3">
              <div
                className="size-4 shrink-0 rounded-full"
                style={{ backgroundColor: `hsl(0 0% 0% / ${opacity}%)` }}
              />
              {i < 3 && <div className="h-1.5 w-6 rounded bg-foreground/8" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function SharedCreditsIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-2.5">
          {[85, 60, 45, 30].map((pct, i) => (
            <div key={i} className="h-2 rounded bg-foreground/12" style={{ width: `${pct}%` }} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function AgenciesPage() {
  return (
    <>
      <SubPageHero locale="en"
        label="Agencies"
        title="AI search content for every client"
        description="One workflow to analyze, generate and deliver. Without starting from scratch each time."
      />

      <BentoGrid
        items={[
          {
            title: "Multi-client management",
            description: "Separate projects per account. Dashboard, keywords and document history organized per client.",
            visual: <MultiClientIllustration />,
          },
          {
            title: "Analysis and patterns",
            description: "Search results analysis for every keyword. Pattern detection, semantic structure and quality signals extracted.",
            visual: <AnalysisIllustration />,
          },
          {
            title: "Export and delivery",
            description: "Export in Markdown and HTML. Customized tone of voice per client, multi-language support.",
            visual: <ExportIllustration />,
          },
          {
            title: "Scalable workflow",
            description: "From keyword to content in 4 automated steps. Same process, consistent quality across every client.",
            visual: <ScalableWorkflowIllustration />,
          },
          {
            title: "Shared credits",
            description: "One plan, credits distributed across clients. Dashboard to monitor usage per account.",
            visual: <SharedCreditsIllustration />,
          },
        ]}
      />

      <SubPageCTA locale="en" />
    </>
  )
}

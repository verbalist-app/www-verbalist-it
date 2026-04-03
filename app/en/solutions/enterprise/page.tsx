import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { BentoGrid } from "@/components/bento-grid"


export const metadata: Metadata = {
  title: "GEO for Startups and SMBs",
  description: "AI search optimization without a GEO team in-house. Verbalist bridges the gap between traditional SEO and Generative Engine Optimization for startups and SMBs.",
  alternates: {
    canonical: "/en/solutions/enterprise",
  },
  openGraph: {
    title: "GEO for Startups and SMBs \\ Verbalist",
    description: "AI search optimization without a GEO team in-house. Verbalist bridges the gap between traditional SEO and Generative Engine Optimization for startups and SMBs.",
  },
}

function SetupIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-3">
          {[
            { label: "Keyword", done: true },
            { label: "Analysis", done: true },
            { label: "Content", done: false },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <div className={`flex size-5 shrink-0 items-center justify-center rounded-full ${s.done ? "bg-foreground" : "bg-foreground/10"}`}>
                {s.done && (
                  <svg className="size-2.5 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <div className="h-1.5 flex-1 rounded bg-foreground/10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function AutoAnalysisIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-2">
          {[88, 76, 64, 52, 40].map((w, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <span className="w-3 shrink-0 text-center text-[9px] font-medium text-foreground/40">{i + 1}</span>
              <div className="h-1.5 rounded bg-foreground/12" style={{ width: `${w}%` }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function OutputIllustration() {
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

function NoTechSkillsIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-3">
          {[20, 15, 10].map((opacity, i) => (
            <div key={i} className="flex items-center gap-3">
              <div
                className="flex size-5 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: `hsl(0 0% 0% / ${opacity}%)` }}
              />
              <div className="h-1.5 flex-1 rounded bg-foreground/8" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function FourContentTypesIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="grid grid-cols-2 gap-2">
          <div className="h-10 rounded-md bg-foreground/20" />
          <div className="h-10 rounded-md bg-foreground/8" />
          <div className="h-10 rounded-md bg-foreground/8" />
          <div className="h-10 rounded-md bg-foreground/8" />
        </div>
      </div>
    </div>
  )
}

export default function EnterprisePage() {
  return (
    <>
      <SubPageHero locale="en"
        label="Startups & SMBs"
        title="Visible in AI search, without a dedicated team"
        description="Enter a keyword, get ready-to-publish content. No technical expertise required."
      />

      <BentoGrid
        items={[
          {
            title: "Setup in minutes",
            description: "Guided interface, no GEO expertise required. Projects organized by keyword.",
            visual: <SetupIllustration />,
          },
          {
            title: "Automated analysis",
            description: "Search results analysis, competitor patterns extracted, semantic structure and quality signals integrated.",
            visual: <AutoAnalysisIllustration />,
          },
          {
            title: "AI-ready output",
            description: "Content ready for ChatGPT and Perplexity. Export in Markdown and HTML, customizable tone of voice.",
            visual: <OutputIllustration />,
          },
          {
            title: "No technical skills needed",
            description: "The marketing team generates GEO content without depending on the tech department. Guided interface, immediate results.",
            visual: <NoTechSkillsIllustration />,
          },
          {
            title: "Four content types",
            description: "Blog post, product page, guide and landing page. Structure optimized for each format.",
            visual: <FourContentTypesIllustration />,
          },
        ]}
      />

      <SubPageCTA
        locale="en"
        description="We'll show you how Verbalist creates GEO-ready content from a keyword, applied to your industry."
      />
    </>
  )
}

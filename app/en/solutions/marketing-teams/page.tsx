import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { BentoGrid } from "@/components/bento-grid"


export const metadata: Metadata = {
  title: "GEO content for Content Creators",
  description: "Structured drafts for blogs, landing pages and guides with AI search optimization built in. Configurable tone of voice, GEO-ready output for content creators.",
  alternates: {
    canonical: "/en/solutions/marketing-teams",
  },
  openGraph: {
    title: "GEO content for Content Creators \\ Verbalist",
    description: "Structured drafts for blogs, landing pages and guides with AI search optimization built in. Configurable tone of voice, GEO-ready output for content creators.",
  },
}

function DraftIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-3">
          <div className="h-2 w-3/5 rounded bg-foreground/20" />
          <div className="space-y-1.5">
            <div className="h-1.5 w-full rounded bg-foreground/8" />
            <div className="h-1.5 w-11/12 rounded bg-foreground/8" />
            <div className="h-1.5 w-4/5 rounded bg-foreground/8" />
          </div>
          <div className="h-2 w-2/5 rounded bg-foreground/15" />
          <div className="space-y-1.5">
            <div className="h-1.5 w-full rounded bg-foreground/8" />
            <div className="h-1.5 w-3/4 rounded bg-foreground/8" />
          </div>
        </div>
      </div>
    </div>
  )
}

function ToneVoiceIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="grid grid-cols-2 gap-2">
          {[true, false, false, false].map((active, i) => (
            <div key={i} className={`h-8 rounded-md ${active ? "bg-foreground" : "bg-foreground/6"}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ExportIterateIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-2">
          {[true, false, false].map((active, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className={`size-2 shrink-0 rounded-full ${active ? "bg-foreground" : "bg-foreground/15"}`} />
              <div className={`h-1.5 flex-1 rounded ${active ? "bg-foreground/15" : "bg-foreground/6"}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function RealDataIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="flex items-end gap-2">
          {[40, 70, 55, 85, 65, 45].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded bg-foreground/12"
              style={{ height: `${h}%`, minHeight: `${h * 0.5}px` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function FourFormatsIllustration() {
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

export default function MarketingTeamsPage() {
  return (
    <>
      <SubPageHero locale="en"
        label="Content Creator"
        title="Get a structured draft, ready to go"
        description="Verbalist handles the analysis and structure. You add the voice and publish."
      />

      <BentoGrid
        items={[
          {
            title: "Structured drafts",
            description: "Headings, paragraphs and meta tags based on patterns that work. Blog posts, landing pages and guides.",
            visual: <DraftIllustration />,
          },
          {
            title: "Tone of voice",
            description: "Professional, friendly, technical or educational. Every draft follows your style and brand guidelines.",
            visual: <ToneVoiceIllustration />,
          },
          {
            title: "Export and iteration",
            description: "Export in Markdown and HTML. Document history for every project. Refine, iterate and publish.",
            visual: <ExportIterateIllustration />,
          },
          {
            title: "Based on real data",
            description: "No guesswork: it analyzes what works in Google results and builds content on those patterns.",
            visual: <RealDataIllustration />,
          },
          {
            title: "Four formats",
            description: "Blog post, product page, guide and landing page. Choose the format, generate the structured draft.",
            visual: <FourFormatsIllustration />,
          },
        ]}
      />

      <SubPageCTA locale="en" />
    </>
  )
}

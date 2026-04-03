import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { BentoGrid } from "@/components/bento-grid"

export const metadata: Metadata = {
  title: "AI Content Generation",
  description: "Generate SEO content with AI based on search results patterns. Title, meta, heading structure and optimized text.",
  alternates: {
    canonical: "/en/platform/content-generation",
  },
  openGraph: {
    title: "AI Content Generation \\ Verbalist",
    description: "Generate SEO content with AI based on search results patterns. Title, meta, heading structure and optimized text.",
  },
}


function SeoMetadataIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="space-y-2">
        {[60, 90, 45].map((w, i) => (
          <div key={i} className="rounded-lg bg-background p-3">
            <div className="h-1.5 rounded bg-foreground/15" style={{ width: `${w}%` }} />
            <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-foreground/6">
              <div className="h-full rounded-full bg-foreground/20" style={{ width: `${w}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ToneIllustration() {
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

function OptimizeExistingIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-2">
          <div className="rounded-md bg-foreground/8 p-2.5">
            <div className="space-y-1.5">
              <div className="h-1.5 w-3/4 rounded bg-foreground/10" />
              <div className="h-1.5 w-full rounded bg-foreground/6" />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="h-4 w-0.5 rounded bg-foreground/15" />
          </div>
          <div className="rounded-md bg-foreground/12 p-2.5">
            <div className="space-y-1.5">
              <div className="h-1.5 w-3/4 rounded bg-foreground/25" />
              <div className="h-1.5 w-full rounded bg-foreground/15" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ExportReadyIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="rounded-md bg-foreground/6 p-3">
          <div className="space-y-2">
            <div className="h-2 w-1/2 rounded bg-foreground/20" />
            <div className="h-1.5 w-full rounded bg-foreground/10" />
            <div className="h-1.5 w-4/5 rounded bg-foreground/10" />
            <div className="h-1.5 w-full rounded bg-foreground/10" />
            <div className="h-1.5 w-2/3 rounded bg-foreground/10" />
          </div>
          <div className="mt-3 flex justify-center">
            <div className="h-1.5 w-6 rounded bg-foreground/20" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ContentGenerationPage() {
  return (
    <>
      <SubPageHero
        locale="en"
        label="Generation"
        title="Write an article based on what works"
        description="Generates title, meta, headings and text from the patterns found in Google results."
      />

      <BentoGrid
        items={[
          {
            title: "Perfect SEO metadata",
            description: "Generates title tag, meta description and optimized URL slug. Based on patterns that work in search results.",
            visual: <SeoMetadataIllustration />,
          },
          {
            title: "Your tone of voice",
            description: "Choose the style: professional, friendly, technical, educational. Every content follows your brand guidelines.",
            visual: <ToneIllustration />,
          },
          {
            title: "Four formats",
            description: "Blog post, product page, guide and landing page. Each format has its own optimized structure.",
            visual: <FourFormatsIllustration />,
          },
          {
            title: "Optimize existing content",
            description: "Upload a URL, text or PDF. Verbalist compares it against competitors and generates an improved version.",
            visual: <OptimizeExistingIllustration />,
          },
          {
            title: "Export ready",
            description: "Markdown and HTML with headings, paragraphs and meta tags already formatted. Copy or download, ready to publish.",
            visual: <ExportReadyIllustration />,
          },
        ]}
      />

      <SubPageCTA locale="en" />
    </>
  )
}

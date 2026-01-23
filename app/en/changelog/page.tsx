import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PageBreadcrumb } from "@/components/page-breadcrumb"

type ChangelogEntry = {
  version: string
  date: string
  title: string
  description: string
  items?: string[]
  image?: string
  button?: {
    url: string
    text: string
  }
}

const changelogEntries: ChangelogEntry[] = [
  {
    version: "v1.3.0",
    date: "January 15, 2026",
    title: "Advanced E-E-A-T Analysis",
    description:
      "Now you can analyze E-E-A-T signals from competitors. See what your content is missing compared to top rankers.",
    items: [
      "Automatic E-E-A-T signal scoring",
      "Find missing trust elements",
      "Practical suggestions for improvement",
      "Direct comparison with top performers",
    ],
  },
  {
    version: "v1.2.0",
    date: "December 8, 2025",
    title: "Multi-Format Export",
    description:
      "Export content and analysis in multiple formats. Markdown, JSON, plain text. Google Docs integration.",
    items: [
      "Export in Markdown, JSON and plain text",
      "Customizable templates",
      "Google Docs integration",
      "Batch download of multiple analyses",
    ],
  },
  {
    version: "v1.1.0",
    date: "November 20, 2025",
    title: "Improved Pattern Analysis",
    description:
      "New metrics and visualizations in pattern analysis. Easier to understand what works in SERP.",
    items: [
      "Word count distribution with optimal range",
      "More detailed heading analysis",
      "Topic gap analysis",
      "Competitive scoring with comparative metrics",
    ],
  },
  {
    version: "v1.0.0",
    date: "October 1, 2025",
    title: "Verbalist Launch",
    description:
      "First release. From keyword to SEO content in 4 steps. SERP Analysis, Scraping, Pattern Detection, Generation.",
    items: [
      "Top 10 Google SERP analysis",
      "Automatic competitor content scraping",
      "HTML to Markdown conversion",
      "SEO-ready content generation",
    ],
    button: {
      url: "/en/platform",
      text: "See features",
    },
  },
]

export default function ChangelogPage() {
  return (
    <section className="pt-20 md:pt-28 pb-24 md:pb-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-3xl">
          <PageBreadcrumb
            items={[
              { label: "Home", href: "/en" },
              { label: "Changelog" },
            ]}
          />
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Updates
          </p>
          <h1 className="mb-4 text-3xl font-medium tracking-tight md:text-4xl">
            Changelog
          </h1>
          <p className="mb-6 text-base text-muted-foreground leading-relaxed">
            News and platform updates.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-3xl space-y-16 md:mt-20 md:space-y-20">
          {changelogEntries.map((entry, index) => (
            <div
              key={index}
              className="relative flex flex-col gap-4 md:flex-row md:gap-16"
            >
              <div className="top-32 flex h-min w-64 shrink-0 items-center gap-4 md:sticky">
                <Badge variant="secondary" className="text-xs">
                  {entry.version}
                </Badge>
                <span className="text-xs font-medium text-muted-foreground">
                  {entry.date}
                </span>
              </div>
              <div className="flex flex-col">
                <h2 className="mb-3 text-lg font-medium leading-tight text-foreground md:text-xl">
                  {entry.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {entry.description}
                </p>
                {entry.items && entry.items.length > 0 && (
                  <ul className="mt-4 ml-4 space-y-1.5 text-sm text-muted-foreground">
                    {entry.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="list-disc">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {entry.image && (
                  <img
                    src={entry.image}
                    alt={`${entry.version} visual`}
                    className="mt-8 w-full rounded-lg object-cover"
                  />
                )}
                {entry.button && (
                  <Button variant="link" className="mt-4 self-start px-0" asChild>
                    <a href={entry.button.url}>
                      {entry.button.text} <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

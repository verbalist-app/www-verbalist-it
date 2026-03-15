"use client"

import { ChevronDown } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

interface BlogTldrProps {
  summary?: string | null
  description: string
  headings: { id: string; title: string }[]
  locale: "it" | "en"
}

export function BlogTldr({ summary, description, headings, locale }: BlogTldrProps) {
  return (
    <div className="mb-12 space-y-6">
      {/* TL;DR */}
      <div className="border rounded-lg p-6 bg-muted/30">
        <p className="text-xs font-medium tracking-wide uppercase text-muted-foreground mb-3">
          TL;DR
        </p>
        <p className="text-sm text-foreground leading-relaxed">
          {summary || description}
        </p>
      </div>

      {/* Table of Contents — collapsible */}
      {headings.length > 0 && (
        <Collapsible>
          <CollapsibleTrigger className="flex items-center gap-2 group cursor-pointer">
            <p className="text-xs font-medium tracking-wide uppercase text-muted-foreground">
              {locale === "it" ? "In questo articolo" : "In this article"}
            </p>
            <ChevronDown className="size-3.5 text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent>
            <nav className="mt-4">
              <ol className="space-y-2 border-l-2 border-border pl-4">
                {headings.map((h) => (
                  <li key={h.id}>
                    <a
                      href={`#${h.id}`}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {h.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </CollapsibleContent>
        </Collapsible>
      )}
    </div>
  )
}

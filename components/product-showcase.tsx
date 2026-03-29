"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import {
  SerpAnalysisVisual,
  PatternDetectionVisual,
  ContentGenerationVisual,
} from "@/components/product-visuals"

const screenshots = [
  {
    id: "analisi",
    label: "Analisi risultati Google",
    description: "Recupera i top 10 risultati Google filtrando Wikipedia, social e aggregatori",
    component: SerpAnalysisVisual,
  },
  {
    id: "pattern",
    label: "Pattern Detection",
    description: "L'AI analizza i contenuti per estrarre intent, topic, struttura e segnali di qualità e autorevolezza",
    component: PatternDetectionVisual,
  },
  {
    id: "generazione",
    label: "Generazione",
    description: "Genera title, meta description, outline e contenuto completo in Markdown",
    component: ContentGenerationVisual,
  },
]

export function ProductShowcase() {
  const [activeTab, setActiveTab] = useState(screenshots[0].id)
  const activeScreenshot = screenshots.find((s) => s.id === activeTab)

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-balance text-xl md:text-2xl font-medium tracking-tight text-foreground mb-3">
            Guarda Verbalist in azione
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Dall'analisi dei competitor alla generazione del contenuto finale, tutto in un'unica piattaforma.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-muted rounded-lg p-1 gap-1">
            {screenshots.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-all",
                  activeTab === item.id
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Screenshot Display */}
        <div className="relative">
          {/* Browser Frame */}
          <div className="bg-muted rounded-xl border border-border overflow-hidden shadow-lg">
            {/* Browser Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-status-error" />
                <div className="w-3 h-3 rounded-full bg-status-warning" />
                <div className="w-3 h-3 rounded-full bg-status-success" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-background rounded-md px-3 py-1.5 text-[12px] text-muted-foreground font-mono max-w-md mx-auto text-center border border-border">
                  app.verbalist.it
                </div>
              </div>
            </div>

            {/* Visual Content */}
            <div className="relative aspect-[16/9] bg-muted/50">
              {activeScreenshot && (
                <activeScreenshot.component />
              )}
            </div>
          </div>

          {/* Caption */}
          {activeScreenshot && (
            <div className="text-center mt-6">
              <p className="text-sm text-muted-foreground">
                {activeScreenshot.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Search, Download, BarChart3, FileText } from "lucide-react"

const features = [
  {
    title: "Analisi SERP",
    description: "Recupera i top 10 risultati Google",
    href: "/piattaforma/analisi-serp",
    icon: Search,
  },
  {
    title: "Scraping Competitor",
    description: "Estrai contenuti dei competitor",
    href: "/piattaforma/scraping-competitor",
    icon: Download,
  },
  {
    title: "Analisi Pattern",
    description: "Identifica pattern di successo",
    href: "/piattaforma/analisi-pattern",
    icon: BarChart3,
  },
  {
    title: "Generazione Contenuto",
    description: "Crea contenuti ottimizzati",
    href: "/piattaforma/generazione-contenuto",
    icon: FileText,
  },
]

export function Navbar() {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false)

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto max-w-5xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.svg" alt="Verbalist" width={120} height={40} className="h-6 w-auto" />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link href="/prodotto" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Prodotto
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIsFeaturesOpen(true)}
              onMouseLeave={() => setIsFeaturesOpen(false)}
            >
              <button className="flex cursor-pointer items-center gap-1 text-sm text-muted-foreground outline-none transition-colors hover:text-foreground">
                Piattaforma
                <ChevronDown className={`size-3 transition-transform ${isFeaturesOpen ? "rotate-180" : ""}`} />
              </button>

              {isFeaturesOpen && (
                <div className="absolute left-1/2 top-full -translate-x-1/2 pt-4">
                  <div className="w-[540px] rounded-xl border border-border bg-card p-6">
                    <div className="grid grid-cols-2 gap-3">
                      {features.map((feature) => (
                        <Link
                          key={feature.href}
                          href={feature.href}
                          className="group flex items-start gap-3 rounded-lg border border-transparent p-3 transition-colors hover:border-border hover:bg-muted"
                        >
                          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground transition-colors group-hover:bg-background">
                            <feature.icon className="size-4" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-foreground">{feature.title}</div>
                            <div className="mt-0.5 text-xs text-muted-foreground">{feature.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 border-t border-border pt-4">
                      <Link
                        href="/piattaforma"
                        className="flex items-center justify-between text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <span>Vedi tutte le funzionalità</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link href="/chi-siamo" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Chi siamo
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://app.verbalist.it" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Accedi
            </a>
            <Link
              href="/prenota-demo"
              className="rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-colors hover:bg-foreground/90"
            >
              Prenota una demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

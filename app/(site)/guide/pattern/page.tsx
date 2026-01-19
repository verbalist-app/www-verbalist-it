import Link from "next/link"
import { ArrowLeft, ChevronRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Analisi Pattern",
  description: "Come Verbalist identifica i pattern vincenti nei contenuti che rankano.",
}

const articles = [
  {
    title: "Come funziona il pattern detection",
    description: "Il processo di identificazione dei pattern nei top performer.",
    href: "/guide/pattern/come-funziona",
  },
  {
    title: "Ottimizzare il word count",
    description: "Trovare la lunghezza ideale per il tuo contenuto.",
    href: "/guide/pattern/word-count",
  },
  {
    title: "Struttura heading",
    description: "Analizzare e replicare la struttura H1-H6 dei competitor.",
    href: "/guide/pattern/heading",
  },
  {
    title: "Topic coverage",
    description: "Identificare gli argomenti che devi coprire.",
    href: "/guide/pattern/topic",
  },
  {
    title: "Analisi E-E-A-T",
    description: "Rilevare i segnali di autorevolezza nei competitor.",
    href: "/guide/pattern/eeat",
  },
  {
    title: "Content gap analysis",
    description: "Trovare opportunità non coperte dai competitor.",
    href: "/guide/pattern/content-gap",
  },
]

export default function PatternPage() {
  return (
    <section className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/guide"
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Torna alle guide
          </Link>

          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Analisi Pattern
          </h1>
          <p className="text-base text-muted-foreground mb-8">
            Verbalist analizza i contenuti estratti per identificare pattern ricorrenti: word count medio, struttura degli heading, argomenti trattati, segnali E-E-A-T e formattazione.
          </p>

          <div className="space-y-3">
            {articles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted transition-colors group"
              >
                <div>
                  <h2 className="font-medium text-sm">{article.title}</h2>
                  <p className="text-sm text-muted-foreground mt-1">{article.description}</p>
                </div>
                <ChevronRight className="size-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
    </section>
  )
}

import Link from "next/link"
import { ArrowLeft, ChevronRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Analisi SERP",
  description: "Come usare l'analisi SERP di Verbalist per capire cosa ranka e perché.",
}

const articles = [
  {
    title: "Come funziona l'analisi SERP",
    description: "Il processo di estrazione e analisi dei top 10 risultati.",
    href: "/guide/analisi-serp/come-funziona",
  },
  {
    title: "Interpretare i dati SERP",
    description: "Leggere e capire i dati estratti dalla SERP.",
    href: "/guide/analisi-serp/interpretazione",
  },
  {
    title: "Filtri e opzioni avanzate",
    description: "Personalizzare l'analisi con filtri geografici e di lingua.",
    href: "/guide/analisi-serp/filtri",
  },
  {
    title: "Analisi competitor",
    description: "Confrontare i competitor e identificare opportunità.",
    href: "/guide/analisi-serp/competitor",
  },
  {
    title: "Esportare i dati SERP",
    description: "Scaricare i dati in CSV o JSON per analisi esterne.",
    href: "/guide/analisi-serp/export",
  },
]

export default function AnalisiSerpPage() {
  return (
    <section className="pt-20 md:pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/guide"
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Torna alle guide
          </Link>

          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Analisi SERP
          </h1>
          <p className="text-base text-muted-foreground mb-8">
            Verbalist analizza i primi 10 risultati organici per la tua keyword, estraendo dati su posizione, title, meta description, URL e contenuto completo di ogni pagina.
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

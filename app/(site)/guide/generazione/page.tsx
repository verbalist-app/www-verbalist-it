import Link from "next/link"
import { ChevronRight } from "lucide-react"
import type { Metadata } from "next"
import { BreadcrumbSchema } from "@/components/schema"

export const metadata: Metadata = {
  title: "Generazione Contenuto",
  description: "Come usare Verbalist per generare contenuti SEO ottimizzati.",
}

const articles = [
  {
    title: "Come funziona la generazione",
    description: "Il processo di creazione contenuti basato sui pattern.",
    href: "/guide/generazione/come-funziona",
  },
  {
    title: "Personalizzare il tone of voice",
    description: "Configurare lo stile e il tono del contenuto generato.",
    href: "/guide/generazione/tone",
  },
  {
    title: "Scegliere il modello AI",
    description: "GPT-4, Claude o Gemini: quale usare e quando.",
    href: "/guide/generazione/modelli",
  },
  {
    title: "Parametri avanzati",
    description: "Temperatura, lunghezza, focus e altre opzioni.",
    href: "/guide/generazione/parametri",
  },
  {
    title: "Editing e revisione",
    description: "Modificare e perfezionare il contenuto generato.",
    href: "/guide/generazione/editing",
  },
  {
    title: "Rigenerare sezioni",
    description: "Come rigenerare parti specifiche del contenuto.",
    href: "/guide/generazione/rigenerare",
  },
  {
    title: "Esportazione finale",
    description: "Formati disponibili e opzioni di export.",
    href: "/guide/generazione/export",
  },
]

export default function GenerazionePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Guide", url: "/guide" },
          { name: "Generazione Contenuto", url: "/guide/generazione" },
        ]}
      />
      <section className="pt-20 md:pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Generazione Contenuto
          </h1>
          <p className="text-base text-muted-foreground mb-8">
            Verbalist genera contenuti completi basandosi sui pattern estratti: titolo, meta description, struttura heading e corpo del testo. Tutto ottimizzato per SEO e risposte AI.
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
    </>
  )
}

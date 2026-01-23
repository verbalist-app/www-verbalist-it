import Link from "next/link"
import { ChevronRight } from "lucide-react"
import type { Metadata } from "next"
import { BreadcrumbSchema } from "@/components/schema"

export const metadata: Metadata = {
  title: "Scraping Competitor",
  description: "Come Verbalist estrae e converte i contenuti dei competitor per l'analisi.",
}

const articles = [
  {
    title: "Come funziona lo scraping",
    description: "Il processo di estrazione contenuti dalle pagine competitor.",
    href: "/guide/scraping/come-funziona",
  },
  {
    title: "Conversione HTML to Markdown",
    description: "Come il contenuto viene pulito e convertito in formato leggibile.",
    href: "/guide/scraping/conversione",
  },
  {
    title: "Esportare in Markdown",
    description: "Scaricare i contenuti estratti per uso esterno.",
    href: "/guide/scraping/export",
  },
  {
    title: "Gestire contenuti protetti",
    description: "Cosa fare quando un sito blocca lo scraping.",
    href: "/guide/scraping/contenuti-protetti",
  },
]

export default function ScrapingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Guide", url: "/guide" },
          { name: "Scraping Competitor", url: "/guide/scraping" },
        ]}
      />
      <section className="pt-20 md:pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Scraping Competitor
          </h1>
          <p className="text-base text-muted-foreground mb-8">
            Verbalist scarica il contenuto completo di ogni pagina nei top 10, lo pulisce da elementi non rilevanti (navigazione, footer, ads) e lo converte in Markdown strutturato.
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

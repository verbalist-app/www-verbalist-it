import Link from "next/link"
import { ChevronRight } from "lucide-react"
import type { Metadata } from "next"
import { BreadcrumbSchema } from "@/components/schema"

export const metadata: Metadata = {
  title: "Configurazione",
  description: "Impostazioni e preferenze di Verbalist.",
}

const articles = [
  {
    title: "Impostazioni account",
    description: "Email, password e preferenze personali.",
    href: "/guide/configurazione/account",
  },
  {
    title: "Gestione progetti",
    description: "Creare, organizzare e archiviare progetti.",
    href: "/guide/configurazione/progetti",
  },
  {
    title: "API e integrazioni",
    description: "Connettere Verbalist ad altri strumenti.",
    href: "/guide/configurazione/api",
  },
]

export default function ConfigurazionePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Guide", url: "/guide" },
          { name: "Configurazione", url: "/guide/configurazione" },
        ]}
      />
      <section className="pt-20 md:pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Configurazione
          </h1>
          <p className="text-base text-muted-foreground mb-8">
            Gestisci le impostazioni del tuo account, i progetti e le integrazioni con altri strumenti.
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

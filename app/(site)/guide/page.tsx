"use client"

import {
  ChevronRight,
  HelpCircle,
  Search,
  FileText,
  BarChart3,
  Download,
  Settings,
  Zap,
} from "lucide-react"
import { useState, useMemo } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { PageBreadcrumb } from "@/components/page-breadcrumb"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

interface GuideCategory {
  icon: React.ReactNode
  iconType: string
  title: string
  description: string
  articles: { title: string; href: string }[]
  href: string
}

interface PopularTopic {
  title: string
  href: string
}

const categories: GuideCategory[] = [
  {
    icon: <Search className="size-6" />,
    iconType: "search",
    title: "Analisi SERP",
    description: "Leggere e usare i dati SERP",
    href: "/guide/analisi-serp",
    articles: [
      { title: "Come funziona l'analisi SERP", href: "/guide/analisi-serp/come-funziona" },
      { title: "Interpretare i dati SERP", href: "/guide/analisi-serp/interpretazione" },
      { title: "Filtri e opzioni avanzate", href: "/guide/analisi-serp/filtri" },
      { title: "Analisi competitor", href: "/guide/analisi-serp/competitor" },
      { title: "Esportare i dati SERP", href: "/guide/analisi-serp/export" },
    ],
  },
  {
    icon: <Download className="size-6" />,
    iconType: "download",
    title: "Scraping Competitor",
    description: "Estrarre contenuti dalle pagine",
    href: "/guide/scraping",
    articles: [
      { title: "Come funziona lo scraping", href: "/guide/scraping/come-funziona" },
      { title: "Conversione HTML to Markdown", href: "/guide/scraping/conversione" },
      { title: "Esportare in Markdown", href: "/guide/scraping/export" },
      { title: "Gestire contenuti protetti", href: "/guide/scraping/contenuti-protetti" },
    ],
  },
  {
    icon: <BarChart3 className="size-6" />,
    iconType: "barchart",
    title: "Analisi Pattern",
    description: "Trovare cosa funziona in SERP",
    href: "/guide/pattern",
    articles: [
      { title: "Come funziona il pattern detection", href: "/guide/pattern/come-funziona" },
      { title: "Ottimizzare il word count", href: "/guide/pattern/word-count" },
      { title: "Struttura heading", href: "/guide/pattern/heading" },
      { title: "Topic coverage", href: "/guide/pattern/topic" },
      { title: "Analisi E-E-A-T", href: "/guide/pattern/eeat" },
      { title: "Content gap analysis", href: "/guide/pattern/content-gap" },
    ],
  },
  {
    icon: <FileText className="size-6" />,
    iconType: "filetext",
    title: "Generazione Contenuto",
    description: "Creare contenuti SEO-ready",
    href: "/guide/generazione",
    articles: [
      { title: "Come funziona la generazione", href: "/guide/generazione/come-funziona" },
      { title: "Personalizzare il tone of voice", href: "/guide/generazione/tone" },
      { title: "Scegliere il modello AI", href: "/guide/generazione/modelli" },
      { title: "Parametri avanzati", href: "/guide/generazione/parametri" },
      { title: "Editing e revisione", href: "/guide/generazione/editing" },
      { title: "Rigenerare sezioni", href: "/guide/generazione/rigenerare" },
      { title: "Esportazione finale", href: "/guide/generazione/export" },
    ],
  },
  {
    icon: <Settings className="size-6" />,
    iconType: "settings",
    title: "Configurazione",
    description: "Impostazioni e preferenze",
    href: "/guide/configurazione",
    articles: [
      { title: "Impostazioni account", href: "/guide/configurazione/account" },
      { title: "Gestione progetti", href: "/guide/configurazione/progetti" },
      { title: "API e integrazioni", href: "/guide/configurazione/api" },
    ],
  },
  {
    icon: <Zap className="size-6" />,
    iconType: "zap",
    title: "Best Practice",
    description: "Come ottenere risultati migliori",
    href: "/guide/best-practice",
    articles: [
      { title: "Scegli keyword specifiche", href: "/guide/best-practice" },
      { title: "Analizza prima, genera dopo", href: "/guide/best-practice" },
      { title: "Personalizza il tone of voice", href: "/guide/best-practice" },
      { title: "Aggiungi la tua esperienza", href: "/guide/best-practice" },
      { title: "Cita fonti autorevoli", href: "/guide/best-practice" },
      { title: "Mantieni contenuti aggiornati", href: "/guide/best-practice" },
      { title: "Testa e itera", href: "/guide/best-practice" },
      { title: "Struttura per le AI", href: "/guide/best-practice" },
    ],
  },
]

const popularTopics: PopularTopic[] = [
  { title: "Come iniziare con Verbalist", href: "/guide/getting-started" },
  { title: "Interpretare i dati SERP", href: "/guide/analisi-serp/interpretazione" },
  { title: "Esportare in Markdown", href: "/guide/scraping/export" },
  { title: "Ottimizzare il word count", href: "/guide/pattern/word-count" },
  { title: "Personalizzare il tone of voice", href: "/guide/generazione/tone" },
  { title: "Analisi E-E-A-T", href: "/guide/pattern/eeat" },
]

export default function GuidePage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Flatten all articles for search
  const allArticles = useMemo(() => {
    const articles: { title: string; href: string; category: string }[] = []
    categories.forEach((cat) => {
      cat.articles.forEach((article) => {
        articles.push({ ...article, category: cat.title })
      })
    })
    // Add getting started
    articles.push({ title: "Come iniziare con Verbalist", href: "/guide/getting-started", category: "Introduzione" })
    return articles
  }, [])

  // Filter articles based on search query
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return []
    const query = searchQuery.toLowerCase()
    return allArticles.filter(
      (article) =>
        article.title.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query)
    )
  }, [searchQuery, allArticles])

  const isSearching = searchQuery.trim().length > 0

  return (
    <section className="pt-20 md:pt-28 pb-24 md:pb-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex justify-center mb-6">
            <PageBreadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Guide" },
              ]}
              className="mb-0"
            />
          </div>
          {/* Header with Search */}
          <div className="mb-12 text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Supporto
            </p>
            <h1 className="text-3xl font-medium tracking-tight md:text-4xl">
              Guide
            </h1>
            <p className="mt-2 text-base text-muted-foreground">
              Trova quello che ti serve.
            </p>

            <div className="mx-auto mt-6 max-w-lg">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Cerca nelle guide..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-12 pl-12 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Search Results */}
          {isSearching ? (
            <div className="mb-12">
              <p className="mb-4 text-sm text-muted-foreground">
                {searchResults.length} risultat{searchResults.length === 1 ? "o" : "i"} per &quot;{searchQuery}&quot;
              </p>
              {searchResults.length > 0 ? (
                <div className="space-y-2">
                  {searchResults.map((result, index) => (
                    <Link
                      key={index}
                      href={result.href}
                      className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted transition-colors group"
                    >
                      <div>
                        <h3 className="font-medium text-sm">{result.title}</h3>
                        <p className="text-xs text-muted-foreground mt-1">{result.category}</p>
                      </div>
                      <ChevronRight className="size-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">Nessun risultato trovato. Prova con termini diversi.</p>
              )}
            </div>
          ) : (
            <>
              {/* Categories Grid */}
              <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {categories.map((category, index) => (
                  <Link href={category.href} key={index}>
                    <Card className="group h-full cursor-pointer gap-0 p-0 transition-shadow hover:shadow-md">
                      <CardContent className="p-5">
                        <div className="flex items-start gap-4">
                          <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
                            {category.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="text-sm font-medium">{category.title}</h3>
                              <ChevronRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                            </div>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {category.description}
                            </p>
                            <p className="mt-2 text-xs text-muted-foreground">
                              {category.articles.length} articoli
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              {/* Popular Topics */}
              <div className="rounded-lg border bg-muted/30 p-6">
                <h2 className="mb-4 flex items-center gap-2 text-sm font-medium">
                  <HelpCircle className="size-5" />
                  Argomenti popolari
                </h2>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {popularTopics.map((topic, index) => (
                    <Link
                      key={index}
                      href={topic.href}
                      className="flex items-center gap-2 rounded-md p-2 text-sm text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
                    >
                      <ChevronRight className="size-4" />
                      {topic.title}
                    </Link>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Contact CTA */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Serve altro?
            </p>
            <Button className="mt-3" asChild>
              <Link href="/contatti">Contattaci</Link>
            </Button>
          </div>
        </div>
    </section>
  )
}

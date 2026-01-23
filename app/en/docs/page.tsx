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
    title: "SERP Analysis",
    description: "Reading and using SERP data",
    href: "/en/docs/serp-analysis",
    articles: [
      { title: "How SERP analysis works", href: "/en/docs/serp-analysis/how-it-works" },
      { title: "Interpreting SERP data", href: "/en/docs/serp-analysis/interpretation" },
      { title: "Filters and advanced options", href: "/en/docs/serp-analysis/filters" },
      { title: "Competitor analysis", href: "/en/docs/serp-analysis/competitors" },
      { title: "Exporting SERP data", href: "/en/docs/serp-analysis/export" },
    ],
  },
  {
    icon: <Download className="size-6" />,
    iconType: "download",
    title: "Competitor Scraping",
    description: "Extracting content from pages",
    href: "/en/docs/scraping",
    articles: [
      { title: "How scraping works", href: "/en/docs/scraping/how-it-works" },
      { title: "HTML to Markdown conversion", href: "/en/docs/scraping/conversion" },
      { title: "Exporting to Markdown", href: "/en/docs/scraping/export" },
      { title: "Handling protected content", href: "/en/docs/scraping/protected-content" },
    ],
  },
  {
    icon: <BarChart3 className="size-6" />,
    iconType: "barchart",
    title: "Pattern Analysis",
    description: "Finding what works in SERP",
    href: "/en/docs/patterns",
    articles: [
      { title: "How pattern detection works", href: "/en/docs/patterns/how-it-works" },
      { title: "Optimizing word count", href: "/en/docs/patterns/word-count" },
      { title: "Heading structure", href: "/en/docs/patterns/headings" },
      { title: "Topic coverage", href: "/en/docs/patterns/topics" },
      { title: "E-E-A-T analysis", href: "/en/docs/patterns/eeat" },
      { title: "Content gap analysis", href: "/en/docs/patterns/content-gap" },
    ],
  },
  {
    icon: <FileText className="size-6" />,
    iconType: "filetext",
    title: "Content Generation",
    description: "Creating SEO-ready content",
    href: "/en/docs/generation",
    articles: [
      { title: "How generation works", href: "/en/docs/generation/how-it-works" },
      { title: "Customizing tone of voice", href: "/en/docs/generation/tone" },
      { title: "Choosing the AI model", href: "/en/docs/generation/models" },
      { title: "Advanced parameters", href: "/en/docs/generation/parameters" },
      { title: "Editing and revision", href: "/en/docs/generation/editing" },
      { title: "Regenerating sections", href: "/en/docs/generation/regenerate" },
      { title: "Final export", href: "/en/docs/generation/export" },
    ],
  },
  {
    icon: <Settings className="size-6" />,
    iconType: "settings",
    title: "Configuration",
    description: "Settings and preferences",
    href: "/en/docs/configuration",
    articles: [
      { title: "Account settings", href: "/en/docs/configuration/account" },
      { title: "Project management", href: "/en/docs/configuration/projects" },
      { title: "API and integrations", href: "/en/docs/configuration/api" },
    ],
  },
  {
    icon: <Zap className="size-6" />,
    iconType: "zap",
    title: "Best Practices",
    description: "How to get better results",
    href: "/en/docs/best-practices",
    articles: [
      { title: "Choose specific keywords", href: "/en/docs/best-practices" },
      { title: "Analyze first, generate later", href: "/en/docs/best-practices" },
      { title: "Customize tone of voice", href: "/en/docs/best-practices" },
      { title: "Add your expertise", href: "/en/docs/best-practices" },
      { title: "Cite authoritative sources", href: "/en/docs/best-practices" },
      { title: "Keep content updated", href: "/en/docs/best-practices" },
      { title: "Test and iterate", href: "/en/docs/best-practices" },
      { title: "Structure for AI", href: "/en/docs/best-practices" },
    ],
  },
]

const popularTopics: PopularTopic[] = [
  { title: "Getting started with Verbalist", href: "/en/docs/getting-started" },
  { title: "Interpreting SERP data", href: "/en/docs/serp-analysis/interpretation" },
  { title: "Exporting to Markdown", href: "/en/docs/scraping/export" },
  { title: "Optimizing word count", href: "/en/docs/patterns/word-count" },
  { title: "Customizing tone of voice", href: "/en/docs/generation/tone" },
  { title: "E-E-A-T analysis", href: "/en/docs/patterns/eeat" },
]

export default function DocsPage() {
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
    articles.push({ title: "Getting started with Verbalist", href: "/en/docs/getting-started", category: "Introduction" })
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
          {/* Header with Search */}
          <div className="mb-12 text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Support
            </p>
            <h1 className="text-3xl font-medium tracking-tight md:text-4xl">
              Documentation
            </h1>
            <p className="mt-2 text-base text-muted-foreground">
              Find what you need.
            </p>

            <div className="mx-auto mt-6 max-w-lg">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search the docs..."
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
                {searchResults.length} result{searchResults.length === 1 ? "" : "s"} for &quot;{searchQuery}&quot;
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
                <p className="text-sm text-muted-foreground">No results found. Try different terms.</p>
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
                              {category.articles.length} articles
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
                  Popular topics
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
              Need more help?
            </p>
            <Button className="mt-3" asChild>
              <Link href="/en/contact">Contact us</Link>
            </Button>
          </div>
        </div>
    </section>
  )
}

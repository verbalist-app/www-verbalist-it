"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  category: string
  author: string
}

interface BlogArchiveProps {
  posts: BlogPost[]
  locale: "it" | "en"
}

const categoryLabels: Record<string, Record<string, string>> = {
  it: {
    all: "Tutti",
    seo: "SEO",
    "content-marketing": "Content Marketing",
    "ai-automation": "AI & Automation",
    guide: "Guide",
    news: "News",
  },
  en: {
    all: "All",
    seo: "SEO",
    "content-marketing": "Content Marketing",
    "ai-automation": "AI & Automation",
    guide: "Guides",
    news: "News",
  },
}

function PostList({ posts, locale }: { posts: BlogPost[]; locale: "it" | "en" }) {
  const basePath = locale === "en" ? "/en/blog" : "/blog"

  if (posts.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-sm text-muted-foreground">
          {locale === "it" ? "Nessun articolo in questa categoria." : "No articles in this category."}
        </p>
      </div>
    )
  }

  return (
    <div className="divide-y divide-border">
      {posts.map((post) => (
        <article key={post.slug} className="py-8 first:pt-0">
          <time className="text-sm text-muted-foreground mb-3 block">{post.date}</time>
          <h2 className="text-lg font-normal tracking-tight mb-2">
            <Link
              href={`${basePath}/${post.slug}`}
              className="hover:underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
            >
              {post.title}
            </Link>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
            {post.description}
          </p>
        </article>
      ))}
    </div>
  )
}

export function BlogArchive({ posts, locale }: BlogArchiveProps) {
  const activeCategories = ["all", ...Array.from(new Set(posts.map((p) => p.category)))]
  const labels = categoryLabels[locale]

  return (
    <Tabs defaultValue="all" className="gap-8">
      <ScrollArea className="w-full sm:w-auto">
        <TabsList className="h-auto gap-1 bg-transparent p-0">
          {activeCategories.map((cat) => (
            <TabsTrigger
              key={cat}
              value={cat}
              data-gtm="blog-filter"
              data-gtm-value={cat}
              className="cursor-pointer rounded-full px-4 py-1.5 text-sm text-muted-foreground data-[state=active]:bg-muted data-[state=active]:text-foreground data-[state=active]:shadow-none group-data-[orientation=horizontal]/tabs:after:h-0"
            >
              {labels[cat] || cat}
            </TabsTrigger>
          ))}
        </TabsList>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <TabsContent value="all">
        <PostList posts={posts} locale={locale} />
      </TabsContent>

      {activeCategories.slice(1).map((cat) => (
        <TabsContent key={cat} value={cat}>
          <PostList posts={posts.filter((p) => p.category === cat)} locale={locale} />
        </TabsContent>
      ))}
    </Tabs>
  )
}

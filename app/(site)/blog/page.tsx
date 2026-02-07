import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import type { Metadata } from "next"
import { getPostsByLocale, formatDate } from "@/lib/keystatic"

export const metadata: Metadata = {
  title: "Blog",
  description: "Articoli su SEO, AI, GEO e content. Cose pratiche che puoi applicare subito.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog \ Verbalist",
    description: "Articoli su SEO, AI, GEO e content. Cose pratiche che puoi applicare subito.",
  },
}

const categoryLabels: Record<string, string> = {
  'seo': 'SEO',
  'content-marketing': 'Content Marketing',
  'ai-automation': 'AI & Automation',
  'guide': 'Guide',
  'news': 'News',
}

export default async function BlogPage() {
  const posts = await getPostsByLocale('it')

  // Sort by date, newest first
  const sortedPosts = posts.sort((a, b) => {
    const dateA = a.entry.publishedAt ? new Date(a.entry.publishedAt).getTime() : 0
    const dateB = b.entry.publishedAt ? new Date(b.entry.publishedAt).getTime() : 0
    return dateB - dateA
  })

  return (
    <section className="pt-20 md:pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <Badge variant="secondary" className="mb-4">
            Risorse
          </Badge>
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Blog
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
            SEO, AI, GEO, content. Cose pratiche che puoi applicare subito.
          </p>
        </div>

        {sortedPosts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sortedPosts.map((post) => (
              <Card
                key={post.slug}
                className="grid grid-rows-[auto_auto_1fr_auto] overflow-hidden pt-0"
              >
                <div className="aspect-[16/9] w-full">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block transition-opacity duration-200 hover:opacity-70"
                  >
                    <img
                      src={post.entry.featuredImage || "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"}
                      alt={post.entry.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </Link>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                      {categoryLabels[post.entry.category] || post.entry.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {formatDate(post.entry.publishedAt, 'it')}
                    </span>
                  </div>
                  <h2 className="text-base font-medium hover:underline">
                    <Link href={`/blog/${post.slug}`}>
                      {post.entry.title}
                    </Link>
                  </h2>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{post.entry.description}</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center text-sm text-foreground hover:underline"
                  >
                    Leggi articolo
                    <ArrowRight className="ml-2 size-3.5" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Nessun articolo disponibile.</p>
          </div>
        )}

        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            Altri articoli in arrivo.
          </p>
        </div>
      </div>
    </section>
  )
}

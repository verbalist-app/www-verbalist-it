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

export const metadata: Metadata = {
  title: "Blog",
  description: "Articoli su SEO, AI, GEO e content. Cose pratiche che puoi applicare subito.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog — Verbalist",
    description: "Articoli su SEO, AI, GEO e content. Cose pratiche che puoi applicare subito.",
  },
}

const posts = [
  {
    id: "post-1",
    title: "GEO. Come farsi citare da ChatGPT e Perplexity",
    summary: "Struttura, formattazione e segnali che aumentano le probabilità di essere citati dai motori di ricerca AI.",
    date: "10 Gen 2026",
    category: "GEO",
    slug: "/blog/geo-ottimizzazione-ai",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
  },
]

export default function BlogPage() {
  return (
    <section className="pt-32 pb-24">
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="grid grid-rows-[auto_auto_1fr_auto] overflow-hidden pt-0"
            >
              <div className="aspect-[16/9] w-full">
                <Link
                  href={post.slug}
                  className="block transition-opacity duration-200 hover:opacity-70"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover object-center"
                  />
                </Link>
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h2 className="text-base font-medium hover:underline">
                  <Link href={post.slug}>
                    {post.title}
                  </Link>
                </h2>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{post.summary}</p>
              </CardContent>
              <CardFooter>
                <Link
                  href={post.slug}
                  className="flex items-center text-sm text-foreground hover:underline"
                >
                  Leggi articolo
                  <ArrowRight className="ml-2 size-3.5" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            Altri articoli in arrivo.
          </p>
        </div>
      </div>
    </section>
  )
}

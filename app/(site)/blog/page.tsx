import type { Metadata } from "next"
import { getPostsByLocale, formatDate } from "@/lib/keystatic"
import { BlogArchive } from "@/components/blog-archive"

export const metadata: Metadata = {
  title: "Blog",
  description: "Articoli su SEO, AI, GEO e content. Cose pratiche che puoi applicare subito.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog \\ Verbalist",
    description: "Articoli su SEO, AI, GEO e content. Cose pratiche che puoi applicare subito.",
  },
}

export default async function BlogPage() {
  const posts = await getPostsByLocale('it')

  const sortedPosts = posts
    .sort((a, b) => {
      const dateA = a.entry.publishedAt ? new Date(a.entry.publishedAt).getTime() : 0
      const dateB = b.entry.publishedAt ? new Date(b.entry.publishedAt).getTime() : 0
      return dateB - dateA
    })
    .map((post) => ({
      slug: post.slug,
      title: post.entry.title,
      description: post.entry.description,
      date: formatDate(post.entry.publishedAt, 'it'),
      category: post.entry.category,
      author: post.entry.author || 'Team Verbalist',
    }))

  return (
    <section className="pt-20 md:pt-28 pb-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12">
          <h1 className="font-serif text-2xl font-medium tracking-tighter mb-3 md:text-3xl">
            Blog
          </h1>
          <p className="text-sm text-muted-foreground">
            Articoli e guide su SEO, GEO, AI e contenuti.
          </p>
        </div>

        <BlogArchive posts={sortedPosts} locale="it" />
      </div>
    </section>
  )
}

import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { reader, formatDate, getTranslation } from "@/lib/keystatic"
import { ArticleSchema, BreadcrumbSchema } from "@/components/schema"
import { SubPageCTA } from "@/components/sub-page-cta"
import { BlogTldr } from "@/components/blog-tldr"
import { extractHeadings } from "@/lib/extract-headings"
import { markdocConfig } from "@/lib/markdoc"
import Markdoc from "@markdoc/markdoc"
import React from "react"
import type { Metadata } from "next"

const categoryLabels: Record<string, string> = {
  seo: "SEO",
  "content-marketing": "Content Marketing",
  "ai-automation": "AI & Automation",
  guide: "Guide",
  news: "News",
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await reader.collections.posts.all()
  return posts.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await reader.collections.posts.read(slug)

  if (!post) return { title: 'Post non trovato' }

  const translation = await getTranslation(slug, 'it')

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${slug}`,
      languages: {
        'it': `/blog/${slug}`,
        ...(translation ? { 'en': `/en/blog/${translation.slug}` } : {}),
        'x-default': `/blog/${slug}`,
      },
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await reader.collections.posts.read(slug)

  if (!post) {
    notFound()
  }

  const doc = await post.content()
  const transformed = Markdoc.transform(doc.node, markdocConfig)
  const headings = extractHeadings(transformed)
  const rendered = Markdoc.renderers.react(transformed, React)

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.description}
        slug={slug}
        publishedAt={post.publishedAt}
        authorName={post.author || "Team Verbalist"}
        locale="it"
        imageUrl={post.featuredImage || undefined}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${slug}` },
        ]}
      />
      <article className="pt-20 md:pt-28 pb-24">
        {/* Header */}
        <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <Badge variant="secondary" className="rounded-full text-xs font-normal mb-4">
            {categoryLabels[post.category] || post.category}
          </Badge>
          <h1 className="font-serif text-3xl md:text-4xl font-medium tracking-tighter mb-4 max-w-3xl">
            {post.title}
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-4">
            {post.description}
          </p>
          <time className="text-sm text-muted-foreground mb-8">{formatDate(post.publishedAt, 'it')}</time>
          {post.featuredImage && (
            <img
              src={post.featuredImage}
              alt={post.title}
              className="mt-8 mb-12 aspect-[16/9] w-full rounded-lg border object-cover"
            />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6">
        <BlogTldr
          summary={post.summary}
          description={post.description}
          headings={headings}
          locale="it"
        />
        <div className="prose-verbalist">
          {rendered}
        </div>
      </div>

      </article>
      <SubPageCTA />
    </>
  )
}

import Link from "next/link"
import { notFound } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { reader, formatDate, getTranslation } from "@/lib/keystatic"
import { ArticleSchema } from "@/components/schema"
import { PageBreadcrumb } from "@/components/page-breadcrumb"
import Markdoc from "@markdoc/markdoc"
import React from "react"
import type { Metadata } from "next"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await reader.collections.posts.all()
  return posts
    .filter(post => post.entry.locale === 'en')
    .map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await reader.collections.posts.read(slug)

  if (!post) return { title: 'Post not found' }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/en/blog/${slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await reader.collections.posts.read(slug)

  if (!post || post.locale !== 'en') {
    notFound()
  }

  const translation = await getTranslation(slug)
  const content = await post.content()
  const rendered = Markdoc.renderers.react(content, React)

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.description}
        slug={slug}
        publishedAt={post.publishedAt}
        authorName={post.author || "Team Verbalist"}
        locale="en"
        imageUrl={post.featuredImage || undefined}
      />
      <article className="pt-20 md:pt-28 pb-24">
        {/* Header */}
        <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8 flex items-center justify-between">
          <PageBreadcrumb
            items={[
              { label: "Home", href: "/en" },
              { label: "Blog", href: "/en/blog" },
              { label: post.title },
            ]}
            className="mb-0"
          />
          {translation && (
            <Link
              href={`/blog/${translation.slug}`}
              className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="12" r="10" strokeWidth={2} />
                <path strokeWidth={2} d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              Leggi in italiano
            </Link>
          )}
        </div>

        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 max-w-3xl">
            {post.title}
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-6">
            {post.description}
          </p>
          <div className="flex items-center gap-3 text-sm">
            <Avatar className="h-8 w-8 border">
              <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp" />
              <AvatarFallback>{post.author?.charAt(0) || 'V'}</AvatarFallback>
            </Avatar>
            <span>
              <span className="font-medium">{post.author || 'Team Verbalist'}</span>
              <span className="text-muted-foreground ml-1">· {formatDate(post.publishedAt, 'en')}</span>
            </span>
          </div>
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
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {rendered}
        </div>
      </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto px-6 mt-16">
          <div className="bg-muted rounded-xl p-8 md:p-12">
            <h2 className="text-xl font-medium tracking-tight mb-4">
              Want to see Verbalist in action?
            </h2>
            <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
              We'll show you how it works with a demo on your case.
            </p>
            <Link
              href="/en/contact"
              className="inline-flex items-center gap-2 text-sm bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}

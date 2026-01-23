interface ArticleSchemaProps {
  title: string
  description: string
  slug: string
  publishedAt: string
  modifiedAt?: string
  authorName?: string
  locale?: "it" | "en"
  imageUrl?: string
}

export function ArticleSchema({
  title,
  description,
  slug,
  publishedAt,
  modifiedAt,
  authorName = "Verbalist Team",
  locale = "it",
  imageUrl = "https://verbalist.it/og-image.png",
}: ArticleSchemaProps) {
  const isEnglish = locale === "en"
  const baseUrl = "https://verbalist.it"
  const articleUrl = isEnglish
    ? `${baseUrl}/en/blog/${slug}`
    : `${baseUrl}/blog/${slug}`

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: imageUrl,
    url: articleUrl,
    datePublished: publishedAt,
    dateModified: modifiedAt || publishedAt,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "Verbalist",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    inLanguage: isEnglish ? "en" : "it",
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

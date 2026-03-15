import type { MetadataRoute } from 'next'
import {
  baseUrl,
  italianPages,
  italianOnlyPages,
  excludedPages,
  itToEnSlugMap,
  getBlogPosts,
} from '@/lib/sitemap-data'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()
  const { en: postsEn } = await getBlogPosts()
  const entries: MetadataRoute.Sitemap = []

  for (const itRoute of italianPages) {
    if (excludedPages.some(excluded => itRoute.startsWith(excluded))) continue

    const isItalianOnly = italianOnlyPages.includes(itRoute)
    const enRoute = itToEnSlugMap[itRoute]
    if (isItalianOnly || !enRoute) continue

    const isGuide = itRoute.includes('/guide')
    const priority = itRoute === '' ? 1 : isGuide ? 0.6 : 0.8
    const changeFrequency: 'weekly' | 'monthly' = itRoute === '' ? 'weekly' : 'monthly'

    entries.push({
      url: `${baseUrl}${enRoute}`,
      lastModified: now,
      changeFrequency,
      priority: priority * 0.9,
      alternates: {
        languages: {
          'it': `${baseUrl}${itRoute}`,
          'en': `${baseUrl}${enRoute}`,
          'x-default': `${baseUrl}${itRoute}`,
        },
      },
    })
  }

  for (const post of postsEn) {
    const lastModified = post.publishedAt ? new Date(post.publishedAt) : now
    const enUrl = `${baseUrl}/en/blog/${post.slug}`
    const itSlug = post.translationOf

    entries.push({
      url: enUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.65,
      alternates: itSlug ? {
        languages: {
          'it': `${baseUrl}/blog/${itSlug}`,
          'en': enUrl,
          'x-default': `${baseUrl}/blog/${itSlug}`,
        },
      } : undefined,
    })
  }

  return entries
}

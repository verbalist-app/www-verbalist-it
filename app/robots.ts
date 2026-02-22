import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/dashboard/',
          '/api/',
          '/keystatic/',
          '/login/',
        ],
      },
    ],
    sitemap: 'https://www.verbalist.it/sitemap.xml',
  }
}

import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        disallow: ['/'],
      },
    ],
    sitemap: [
      'https://www.verbalist.it/sitemap.xml',
      'https://www.verbalist.it/en/sitemap.xml',
    ],
  }
}

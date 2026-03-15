import type { MetadataRoute } from 'next'

const isProduction = process.env.NEXT_PUBLIC_SITE_ENV === 'production'

export default function robots(): MetadataRoute.Robots {
  if (!isProduction) {
    return {
      rules: [{ userAgent: '*', disallow: ['/'] }],
    }
  }

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard/', '/api/', '/keystatic/', '/login/'],
      },
    ],
    sitemap: [
      'https://www.verbalist.it/sitemap.xml',
      'https://www.verbalist.it/en/sitemap.xml',
    ],
  }
}

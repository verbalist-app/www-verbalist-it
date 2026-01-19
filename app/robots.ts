import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: '/',
    },
    // Sitemap commentata finche' il sito non e' pubblico
    // sitemap: 'https://verbalist.it/sitemap.xml',
  }
}

import type { MetadataRoute } from 'next'
import { createReader } from '@keystatic/core/reader'
import keystaticConfig from '../keystatic.config'

const baseUrl = 'https://verbalist.it'

// Pagine che NON devono essere tradotte/duplicate in EN
const italianOnlyPages = [
  '/privacy-policy',
  '/termini',
  '/cookie-policy',
]

// Pagine da escludere dalla sitemap
const excludedPages = [
  '/login',
  '/dashboard',
  '/keystatic',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()

  // Pagine statiche principali
  const staticPages = [
    '',
    '/prodotto',
    '/prezzi',
    '/integrazioni',
    '/chi-siamo',
    '/contatti',
    '/faq',
    '/changelog',
    '/blog',
    '/privacy-policy',
    '/termini',
    '/cookie-policy',
  ]

  // Pagine piattaforma
  const piattaformaPages = [
    '/piattaforma',
    '/piattaforma/analisi-serp',
    '/piattaforma/scraping-competitor',
    '/piattaforma/analisi-pattern',
    '/piattaforma/generazione-contenuto',
  ]

  // Pagine soluzioni
  const soluzioniPages = [
    '/soluzioni/agenzie',
    '/soluzioni/team-seo',
    '/soluzioni/team-marketing',
  ]

  // Pagine guide
  const guidePages = [
    '/guide',
    '/guide/getting-started',
    '/guide/configurazione',
    '/guide/configurazione/account',
    '/guide/configurazione/api',
    '/guide/configurazione/progetti',
    '/guide/best-practice',
    '/guide/analisi-serp',
    '/guide/analisi-serp/come-funziona',
    '/guide/analisi-serp/competitor',
    '/guide/analisi-serp/filtri',
    '/guide/analisi-serp/interpretazione',
    '/guide/analisi-serp/export',
    '/guide/pattern',
    '/guide/pattern/come-funziona',
    '/guide/pattern/content-gap',
    '/guide/pattern/eeat',
    '/guide/pattern/heading',
    '/guide/pattern/topic',
    '/guide/pattern/word-count',
    '/guide/scraping',
    '/guide/scraping/come-funziona',
    '/guide/scraping/contenuti-protetti',
    '/guide/scraping/conversione',
    '/guide/scraping/export',
    '/guide/generazione',
    '/guide/generazione/come-funziona',
    '/guide/generazione/modelli',
    '/guide/generazione/parametri',
    '/guide/generazione/tone',
    '/guide/generazione/editing',
    '/guide/generazione/rigenerare',
    '/guide/generazione/export',
  ]

  // Carica blog posts da Keystatic
  let blogPosts: { slug: string; locale: string; publishedAt: string | null }[] = []

  try {
    const reader = createReader(process.cwd(), keystaticConfig)
    const posts = await reader.collections.posts.all()
    blogPosts = posts.map((post) => ({
      slug: post.slug,
      locale: post.entry.locale || 'it',
      publishedAt: post.entry.publishedAt,
    }))
  } catch {
    // Se Keystatic non è configurato o non ci sono post, continua senza errori
    blogPosts = []
  }

  const allStaticPages = [
    ...staticPages,
    ...piattaformaPages,
    ...soluzioniPages,
    ...guidePages,
  ]

  const sitemapEntries: MetadataRoute.Sitemap = []

  // Aggiungi pagine statiche con alternates multilingua
  for (const route of allStaticPages) {
    // Skip pagine escluse
    if (excludedPages.some(excluded => route.startsWith(excluded))) {
      continue
    }

    const isItalianOnly = italianOnlyPages.includes(route)
    const priority = route === '' ? 1 : route.includes('/guide/') ? 0.6 : 0.8
    const changeFrequency = route === '' ? 'weekly' : 'monthly'

    // Pagina italiana (principale)
    sitemapEntries.push({
      url: `${baseUrl}${route}`,
      lastModified: now,
      changeFrequency,
      priority,
      alternates: isItalianOnly ? undefined : {
        languages: {
          'it': `${baseUrl}${route}`,
          'en': `${baseUrl}/en${route}`,
          'x-default': `${baseUrl}${route}`,
        },
      },
    })

    // Pagina inglese (se non è solo italiana)
    if (!isItalianOnly) {
      sitemapEntries.push({
        url: `${baseUrl}/en${route}`,
        lastModified: now,
        changeFrequency,
        priority: priority * 0.9, // Priorità leggermente inferiore per EN
        alternates: {
          languages: {
            'it': `${baseUrl}${route}`,
            'en': `${baseUrl}/en${route}`,
            'x-default': `${baseUrl}${route}`,
          },
        },
      })
    }
  }

  // Aggiungi blog posts da Keystatic
  for (const post of blogPosts) {
    const postUrl = `/blog/${post.slug}`
    const lastModified = post.publishedAt ? new Date(post.publishedAt) : now

    // I post del blog hanno la loro lingua specifica
    if (post.locale === 'it') {
      sitemapEntries.push({
        url: `${baseUrl}${postUrl}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    } else if (post.locale === 'en') {
      sitemapEntries.push({
        url: `${baseUrl}/en${postUrl}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.65,
      })
    }
  }

  return sitemapEntries
}

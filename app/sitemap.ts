import type { MetadataRoute } from 'next'
import { createReader } from '@keystatic/core/reader'
import keystaticConfig from '../keystatic.config'

const baseUrl = 'https://www.verbalist.it'

// Mapping IT → EN per pagine con slug diversi
const itToEnSlugMap: Record<string, string> = {
  '': '/en',
  '/piattaforma': '/en/platform',
  '/piattaforma/analisi-serp': '/en/platform/serp-analysis',
  '/piattaforma/scraping-competitor': '/en/platform/competitor-scraping',
  '/piattaforma/analisi-pattern': '/en/platform/pattern-analysis',
  '/piattaforma/generazione-contenuto': '/en/platform/content-generation',
  '/soluzioni/agenzie': '/en/solutions/agencies',
  '/soluzioni/team-seo': '/en/solutions/seo-teams',
  '/soluzioni/team-marketing': '/en/solutions/marketing-teams',
  '/soluzioni/ai-strategist': '/en/solutions/ai-strategist',
  '/soluzioni/ecommerce': '/en/solutions/ecommerce',
  '/soluzioni/enterprise': '/en/solutions/enterprise',
  '/prezzi': '/en/pricing',
  '/prenota-demo': '/en/book-demo',
  '/chi-siamo': '/en/about',
  '/faq': '/en/faq',
  '/changelog': '/en/changelog',
  '/blog': '/en/blog',
  // Guide → Docs mapping
  '/guide': '/en/docs',
  '/guide/getting-started': '/en/docs/getting-started',
  '/guide/configurazione': '/en/docs/configuration',
  '/guide/configurazione/account': '/en/docs/configuration/account',
  '/guide/configurazione/api': '/en/docs/configuration/api',
  '/guide/configurazione/progetti': '/en/docs/configuration/projects',
  '/guide/best-practice': '/en/docs/best-practices',
  '/guide/analisi-serp': '/en/docs/serp-analysis',
  '/guide/analisi-serp/come-funziona': '/en/docs/serp-analysis/how-it-works',
  '/guide/analisi-serp/competitor': '/en/docs/serp-analysis/competitors',
  '/guide/analisi-serp/filtri': '/en/docs/serp-analysis/filters',
  '/guide/analisi-serp/interpretazione': '/en/docs/serp-analysis/interpretation',
  '/guide/analisi-serp/export': '/en/docs/serp-analysis/export',
  '/guide/pattern': '/en/docs/patterns',
  '/guide/pattern/come-funziona': '/en/docs/patterns/how-it-works',
  '/guide/pattern/content-gap': '/en/docs/patterns/content-gap',
  '/guide/pattern/eeat': '/en/docs/patterns/eeat',
  '/guide/pattern/heading': '/en/docs/patterns/headings',
  '/guide/pattern/topic': '/en/docs/patterns/topics',
  '/guide/pattern/word-count': '/en/docs/patterns/word-count',
  '/guide/scraping': '/en/docs/scraping',
  '/guide/scraping/come-funziona': '/en/docs/scraping/how-it-works',
  '/guide/scraping/contenuti-protetti': '/en/docs/scraping/protected-content',
  '/guide/scraping/conversione': '/en/docs/scraping/conversion',
  '/guide/scraping/export': '/en/docs/scraping/export',
  '/guide/generazione': '/en/docs/generation',
  '/guide/generazione/come-funziona': '/en/docs/generation/how-it-works',
  '/guide/generazione/modelli': '/en/docs/generation/models',
  '/guide/generazione/parametri': '/en/docs/generation/parameters',
  '/guide/generazione/tone': '/en/docs/generation/tone',
  '/guide/generazione/editing': '/en/docs/generation/editing',
  '/guide/generazione/rigenerare': '/en/docs/generation/regenerate',
  '/guide/generazione/export': '/en/docs/generation/export',
}

// Pagine che NON hanno versione EN
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

  // Tutte le pagine IT
  const italianPages = [
    '',
    '/prezzi',
    '/chi-siamo',
    '/prenota-demo',
    '/faq',
    '/changelog',
    '/blog',
    '/privacy-policy',
    '/termini',
    '/cookie-policy',
    // Piattaforma
    '/piattaforma',
    '/piattaforma/analisi-serp',
    '/piattaforma/scraping-competitor',
    '/piattaforma/analisi-pattern',
    '/piattaforma/generazione-contenuto',
    // Soluzioni
    '/soluzioni/agenzie',
    '/soluzioni/team-seo',
    '/soluzioni/team-marketing',
    '/soluzioni/ai-strategist',
    '/soluzioni/ecommerce',
    '/soluzioni/enterprise',
    // Guide
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
    blogPosts = []
  }

  const sitemapEntries: MetadataRoute.Sitemap = []

  // Aggiungi pagine IT con alternates multilingua
  for (const itRoute of italianPages) {
    if (excludedPages.some(excluded => itRoute.startsWith(excluded))) {
      continue
    }

    const isItalianOnly = italianOnlyPages.includes(itRoute)
    const enRoute = itToEnSlugMap[itRoute]
    const isGuide = itRoute.includes('/guide')
    const priority = itRoute === '' ? 1 : isGuide ? 0.6 : 0.8
    const changeFrequency: 'weekly' | 'monthly' = itRoute === '' ? 'weekly' : 'monthly'

    // Pagina italiana
    sitemapEntries.push({
      url: `${baseUrl}${itRoute}`,
      lastModified: now,
      changeFrequency,
      priority,
      alternates: isItalianOnly || !enRoute ? undefined : {
        languages: {
          'it': `${baseUrl}${itRoute}`,
          'en': `${baseUrl}${enRoute}`,
          'x-default': `${baseUrl}${itRoute}`,
        },
      },
    })

    // Pagina inglese (se ha mapping)
    if (!isItalianOnly && enRoute) {
      sitemapEntries.push({
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
  }

  // Aggiungi blog posts da Keystatic
  for (const post of blogPosts) {
    const lastModified = post.publishedAt ? new Date(post.publishedAt) : now

    if (post.locale === 'it') {
      sitemapEntries.push({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    } else if (post.locale === 'en') {
      sitemapEntries.push({
        url: `${baseUrl}/en/blog/${post.slug}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.65,
      })
    }
  }

  return sitemapEntries
}

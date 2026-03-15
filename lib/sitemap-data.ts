import { createReader } from '@keystatic/core/reader'
import keystaticConfig from '@/keystatic.config'

export const baseUrl = 'https://www.verbalist.it'

export const itToEnSlugMap: Record<string, string> = {
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

// Inverso: EN → IT
export const enToItSlugMap: Record<string, string> = Object.fromEntries(
  Object.entries(itToEnSlugMap).map(([it, en]) => [en, it])
)

export const italianOnlyPages = [
  '/privacy-policy',
  '/termini',
  '/cookie-policy',
]

export const excludedPages = [
  '/login',
  '/dashboard',
  '/keystatic',
]

export const italianPages = [
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
  '/piattaforma',
  '/piattaforma/analisi-serp',
  '/piattaforma/scraping-competitor',
  '/piattaforma/analisi-pattern',
  '/piattaforma/generazione-contenuto',
  '/soluzioni/agenzie',
  '/soluzioni/team-seo',
  '/soluzioni/team-marketing',
  '/soluzioni/ai-strategist',
  '/soluzioni/ecommerce',
  '/soluzioni/enterprise',
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

export interface BlogPost {
  slug: string
  publishedAt: string | null
  translationOf: string | null
}

export async function getBlogPosts(): Promise<{ it: BlogPost[]; en: BlogPost[] }> {
  try {
    const reader = createReader(process.cwd(), keystaticConfig)
    const [it, en] = await Promise.all([
      reader.collections.posts.all(),
      reader.collections.postsEn.all(),
    ])
    return {
      it: it.map((p) => ({ slug: p.slug, publishedAt: p.entry.publishedAt, translationOf: p.entry.translationOf })),
      en: en.map((p) => ({ slug: p.slug, publishedAt: p.entry.publishedAt, translationOf: p.entry.translationOf })),
    }
  } catch {
    return { it: [], en: [] }
  }
}

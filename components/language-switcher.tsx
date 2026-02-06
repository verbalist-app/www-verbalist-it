'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Globe } from 'lucide-react'
import { cn } from '@/lib/utils'

const slugMap: Record<string, string> = {
  '/': '/en',
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
  '/blog': '/en/blog',
  '/faq': '/en/faq',
  '/guide': '/en/docs',
  '/changelog': '/en/changelog',
  '/privacy-policy': '/en/privacy-policy',
  '/cookie-policy': '/en/cookie-policy',
  '/termini': '/en/terms',
}

const reverseSlugMap: Record<string, string> = Object.fromEntries(
  Object.entries(slugMap).map(([it, en]) => [en, it])
)

interface LanguageSwitcherProps {
  variant?: 'header' | 'footer'
}

export function LanguageSwitcher({ variant = 'footer' }: LanguageSwitcherProps) {
  const pathname = usePathname()
  const isEnglish = pathname.startsWith('/en')

  let alternatePath: string
  if (isEnglish) {
    alternatePath = reverseSlugMap[pathname] || '/'
  } else {
    alternatePath = slugMap[pathname] || '/en'
  }

  if (variant === 'header') {
    return (
      <Link
        href={alternatePath}
        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        title={isEnglish ? 'Passa all\'italiano' : 'Switch to English'}
      >
        <Globe className="size-4" />
        <span className="uppercase font-medium">{isEnglish ? 'IT' : 'EN'}</span>
      </Link>
    )
  }

  return (
    <Link
      href={alternatePath}
      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-sm transition-colors hover:bg-muted"
      title={isEnglish ? 'Passa all\'italiano' : 'Switch to English'}
    >
      <Globe className="size-4" />
      <span>{isEnglish ? 'Italiano' : 'English'}</span>
    </Link>
  )
}

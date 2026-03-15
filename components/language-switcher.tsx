'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Globe } from 'lucide-react'

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

function getHreflangAlternate(targetLang: string): string | null {
  const link = document.querySelector<HTMLLinkElement>(
    `link[rel="alternate"][hreflang="${targetLang}"]`
  )
  return link?.href ? new URL(link.href).pathname : null
}

interface LanguageSwitcherProps {
  variant?: 'header' | 'footer'
}

export function LanguageSwitcher({ variant = 'footer' }: LanguageSwitcherProps) {
  const pathname = usePathname()
  const isEnglish = pathname.startsWith('/en')
  const [alternatePath, setAlternatePath] = useState(() => {
    if (isEnglish) {
      return reverseSlugMap[pathname] || '/'
    }
    return slugMap[pathname] || '/en'
  })

  useEffect(() => {
    // Check if there's a hreflang alternate for the target language
    const targetLang = isEnglish ? 'it' : 'en'
    const hreflang = getHreflangAlternate(targetLang)

    if (hreflang) {
      setAlternatePath(hreflang)
    } else if (isEnglish) {
      setAlternatePath(reverseSlugMap[pathname] || '/')
    } else {
      setAlternatePath(slugMap[pathname] || '/en')
    }
  }, [pathname, isEnglish])

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

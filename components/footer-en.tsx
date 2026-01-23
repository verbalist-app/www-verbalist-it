'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Globe, ArrowUpRight } from "lucide-react"

const footerLinks = {
  platform: {
    title: "Platform",
    links: [
      { name: "SERP Analysis", href: "/en/platform/serp-analysis" },
      { name: "Competitor Scraping", href: "/en/platform/competitor-scraping" },
      { name: "Pattern Analysis", href: "/en/platform/pattern-analysis" },
      { name: "Content Generation", href: "/en/platform/content-generation" },
      { name: "Pricing", href: "/en/pricing" },
      { name: "Sign in", href: "/en/login", external: true },
    ],
  },
  solutions: {
    title: "Solutions",
    links: [
      { name: "Agencies", href: "/en/solutions/agencies" },
      { name: "SEO Teams", href: "/en/solutions/seo-teams" },
      { name: "Marketing Teams", href: "/en/solutions/marketing-teams" },
      { name: "AI Strategist", href: "/en/solutions/ai-strategist" },
      { name: "Ecommerce", href: "/en/solutions/ecommerce" },
      { name: "Enterprise", href: "/en/solutions/enterprise" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { name: "Blog", href: "/en/blog" },
      { name: "Docs", href: "/en/docs" },
      { name: "Changelog", href: "/en/changelog" },
      { name: "FAQ", href: "/en/faq" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { name: "About us", href: "/en/about" },
      { name: "Contact", href: "/en/contact" },
      { name: "LinkedIn", href: "https://www.linkedin.com/showcase/softwareverbalist/", external: true },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/en/privacy-policy" },
      { name: "Cookie Policy", href: "/en/cookie-policy" },
      { name: "Terms of Service", href: "/en/terms" },
    ],
  },
}

function LanguageSwitcher() {
  const pathname = usePathname()
  const isEnglish = pathname.startsWith('/en')

  const slugMap: Record<string, string> = {
    '/en': '/',
    '/en/platform': '/piattaforma',
    '/en/platform/serp-analysis': '/piattaforma/analisi-serp',
    '/en/platform/competitor-scraping': '/piattaforma/scraping-competitor',
    '/en/platform/pattern-analysis': '/piattaforma/analisi-pattern',
    '/en/platform/content-generation': '/piattaforma/generazione-contenuto',
    '/en/solutions/agencies': '/soluzioni/agenzie',
    '/en/solutions/seo-teams': '/soluzioni/team-seo',
    '/en/solutions/marketing-teams': '/soluzioni/team-marketing',
    '/en/solutions/ai-strategist': '/soluzioni/ai-strategist',
    '/en/solutions/ecommerce': '/soluzioni/ecommerce',
    '/en/solutions/enterprise': '/soluzioni/enterprise',
    '/en/pricing': '/prezzi',
    '/en/contact': '/contatti',
    '/en/about': '/chi-siamo',
    '/en/blog': '/blog',
    '/en/faq': '/faq',
    '/en/docs': '/guide',
    '/en/changelog': '/changelog',
    '/en/privacy-policy': '/privacy-policy',
    '/en/cookie-policy': '/cookie-policy',
    '/en/terms': '/termini',
    '/en/login': '/login',
  }

  const reverseSlugMap: Record<string, string> = Object.fromEntries(
    Object.entries(slugMap).map(([en, it]) => [it, en])
  )

  let alternatePath: string
  if (isEnglish) {
    alternatePath = slugMap[pathname] || '/'
  } else {
    alternatePath = reverseSlugMap[pathname] || '/en'
  }

  return (
    <Link
      href={alternatePath}
      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-sm transition-colors hover:bg-muted"
      title={isEnglish ? 'Switch to Italian' : 'Switch to English'}
    >
      <Globe className="size-4" />
      <span>{isEnglish ? 'Italiano' : 'English'}</span>
    </Link>
  )
}

function FooterLink({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-sm text-foreground transition-colors hover:text-muted-foreground"
      >
        {children}
        <ArrowUpRight className="size-3.5" />
      </a>
    )
  }

  return (
    <Link
      href={href}
      className="text-sm text-foreground transition-colors hover:text-muted-foreground"
    >
      {children}
    </Link>
  )
}

function FooterSection({ title, links }: { title: string; links: Array<{ name: string; href: string; external?: boolean }> }) {
  return (
    <div>
      <h3 className="text-sm text-muted-foreground">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.name}>
            <FooterLink href={link.href} external={link.external}>
              {link.name}
            </FooterLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function FooterEn() {
  return (
    <footer className="border-t border-border bg-background">
      {/* Main footer content */}
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5 lg:gap-12">
          <FooterSection {...footerLinks.platform} />
          <FooterSection {...footerLinks.solutions} />
          <FooterSection {...footerLinks.resources} />
          <FooterSection {...footerLinks.company} />
          <FooterSection {...footerLinks.legal} />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
            {/* Social links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/showcase/softwareverbalist/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="LinkedIn"
              >
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            {/* Copyright and manage cookies */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <span>© {new Date().getFullYear()} Verbalist</span>
              <span className="hidden sm:inline">·</span>
              <a
                href="https://www.nur.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                NUR Digital Marketing
              </a>
              <span className="hidden sm:inline">·</span>
              <button
                onClick={() => {
                  document.cookie = "cookieConsent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
                  window.location.reload()
                }}
                className="transition-colors hover:text-foreground"
              >
                Manage Cookies
              </button>
            </div>

            {/* Language switcher */}
            <div className="flex items-center">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

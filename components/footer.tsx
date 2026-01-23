'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Globe, ArrowUpRight } from "lucide-react"

const footerLinks = {
  piattaforma: {
    title: "Piattaforma",
    links: [
      { name: "Analisi SERP", href: "/piattaforma/analisi-serp" },
      { name: "Scraping Competitor", href: "/piattaforma/scraping-competitor" },
      { name: "Analisi Pattern", href: "/piattaforma/analisi-pattern" },
      { name: "Generazione Contenuto", href: "/piattaforma/generazione-contenuto" },
      { name: "Prezzi", href: "/prezzi" },
      { name: "Accedi", href: "/login", external: true },
    ],
  },
  soluzioni: {
    title: "Soluzioni",
    links: [
      { name: "Agenzie", href: "/soluzioni/agenzie" },
      { name: "Team SEO", href: "/soluzioni/team-seo" },
      { name: "Team Marketing", href: "/soluzioni/team-marketing" },
      { name: "AI Strategist", href: "/soluzioni/ai-strategist" },
      { name: "Ecommerce", href: "/soluzioni/ecommerce" },
      { name: "Enterprise", href: "/soluzioni/enterprise" },
    ],
  },
  risorse: {
    title: "Risorse",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Guide", href: "/guide" },
      { name: "Changelog", href: "/changelog" },
      { name: "FAQ", href: "/faq" },
    ],
  },
  azienda: {
    title: "Azienda",
    links: [
      { name: "Chi siamo", href: "/chi-siamo" },
      { name: "Contatti", href: "/contatti" },
      { name: "LinkedIn", href: "https://www.linkedin.com/showcase/softwareverbalist/", external: true },
    ],
  },
  legale: {
    title: "Legale",
    links: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Cookie Policy", href: "/cookie-policy" },
      { name: "Termini di servizio", href: "/termini" },
    ],
  },
}

function LanguageSwitcher() {
  const pathname = usePathname()
  const isEnglish = pathname.startsWith('/en')

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
    '/contatti': '/en/contact',
    '/chi-siamo': '/en/about',
    '/blog': '/en/blog',
    '/faq': '/en/faq',
    '/guide': '/en/docs',
    '/changelog': '/en/changelog',
    '/privacy-policy': '/en/privacy-policy',
    '/cookie-policy': '/en/cookie-policy',
    '/termini': '/en/terms',
    '/login': '/en/login',
  }

  const reverseSlugMap: Record<string, string> = Object.fromEntries(
    Object.entries(slugMap).map(([it, en]) => [en, it])
  )

  let alternatePath: string
  if (isEnglish) {
    alternatePath = reverseSlugMap[pathname] || '/'
  } else {
    alternatePath = slugMap[pathname] || '/en'
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

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      {/* Main footer content */}
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5 lg:gap-12">
          <FooterSection {...footerLinks.piattaforma} />
          <FooterSection {...footerLinks.soluzioni} />
          <FooterSection {...footerLinks.risorse} />
          <FooterSection {...footerLinks.azienda} />
          <FooterSection {...footerLinks.legale} />
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
                Gestisci Cookie
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

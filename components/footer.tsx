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
      { name: "Accedi", href: "https://app.verbalist.it", external: true },
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
      { name: "Status", href: "https://uptime.verbalist.it", external: true },
    ],
  },
  azienda: {
    title: "Azienda",
    links: [
      { name: "Chi siamo", href: "/chi-siamo" },
      { name: "Contatti", href: "https://www.nur.it/contatti", external: true },
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
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5 lg:gap-0">
          <div className="lg:border-r lg:border-border lg:pr-8">
            <FooterSection {...footerLinks.piattaforma} />
          </div>
          <div className="lg:border-r lg:border-border lg:px-8">
            <FooterSection {...footerLinks.soluzioni} />
          </div>
          <div className="lg:border-r lg:border-border lg:px-8">
            <FooterSection {...footerLinks.risorse} />
          </div>
          <div className="lg:border-r lg:border-border lg:px-8">
            <FooterSection {...footerLinks.azienda} />
          </div>
          <div className="lg:pl-8">
            <FooterSection {...footerLinks.legale} />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div className="flex flex-col items-center gap-4 py-6 sm:flex-row sm:justify-between">
            {/* Manage cookies */}
            <button
              onClick={() => {
                document.cookie = "cookieConsent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
                window.location.reload()
              }}
              className="text-sm text-muted-foreground underline underline-offset-2 transition-colors hover:text-foreground"
            >
              Gestisci Cookie
            </button>

            {/* Copyright */}
            <a
              href="https://www.nur.it/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              © 2026 NUR Digital Marketing
            </a>

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

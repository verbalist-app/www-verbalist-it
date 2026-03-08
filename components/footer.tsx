'use client'

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"

type Locale = 'it' | 'en'

const footerContent = {
  it: {
    columns: [
      {
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
      {
        title: "Soluzioni",
        links: [
          { name: "Agenzie", href: "/soluzioni/agenzie" },
          { name: "SEO Specialist", href: "/soluzioni/team-seo" },
          { name: "Content Creator", href: "/soluzioni/team-marketing" },
          { name: "AI Strategist", href: "/soluzioni/ai-strategist" },
          { name: "Ecommerce", href: "/soluzioni/ecommerce" },
          { name: "Startup e PMI", href: "/soluzioni/enterprise" },
        ],
      },
      {
        title: "Risorse",
        links: [
          { name: "Blog", href: "/blog" },
          { name: "Guide", href: "/guide" },
          { name: "Changelog", href: "/changelog" },
          { name: "FAQ", href: "/faq" },
          { name: "Status", href: "https://uptime.verbalist.it", external: true },
        ],
      },
      {
        title: "Azienda",
        links: [
          { name: "Chi siamo", href: "/chi-siamo" },
          { name: "Contatti", href: "https://www.nur.it/contatti", external: true },
          { name: "LinkedIn", href: "https://www.linkedin.com/showcase/softwareverbalist/", external: true },
        ],
      },
      {
        title: "Legale",
        links: [
          { name: "Privacy Policy", href: "/privacy-policy" },
          { name: "Cookie Policy", href: "/cookie-policy" },
          { name: "Termini di servizio", href: "/termini" },
        ],
      },
    ],
    manageCookies: "Gestisci Cookie",
  },
  en: {
    columns: [
      {
        title: "Platform",
        links: [
          { name: "SERP Analysis", href: "/en/platform/serp-analysis" },
          { name: "Competitor Scraping", href: "/en/platform/competitor-scraping" },
          { name: "Pattern Analysis", href: "/en/platform/pattern-analysis" },
          { name: "Content Generation", href: "/en/platform/content-generation" },
          { name: "Pricing", href: "/en/pricing" },
          { name: "Sign in", href: "https://app.verbalist.it", external: true },
        ],
      },
      {
        title: "Solutions",
        links: [
          { name: "Agencies", href: "/en/solutions/agencies" },
          { name: "SEO Specialist", href: "/en/solutions/seo-teams" },
          { name: "Content Creator", href: "/en/solutions/marketing-teams" },
          { name: "AI Strategist", href: "/en/solutions/ai-strategist" },
          { name: "Ecommerce", href: "/en/solutions/ecommerce" },
          { name: "Startups & SMBs", href: "/en/solutions/enterprise" },
        ],
      },
      {
        title: "Resources",
        links: [
          { name: "Blog", href: "/en/blog" },
          { name: "Docs", href: "/en/docs" },
          { name: "Changelog", href: "/en/changelog" },
          { name: "FAQ", href: "/en/faq" },
          { name: "Status", href: "https://uptime.verbalist.it", external: true },
        ],
      },
      {
        title: "Company",
        links: [
          { name: "About us", href: "/en/about" },
          { name: "Contact", href: "https://www.nur.it/en/contacts", external: true },
          { name: "LinkedIn", href: "https://www.linkedin.com/showcase/softwareverbalist/", external: true },
        ],
      },
      {
        title: "Legal",
        links: [
          { name: "Privacy Policy", href: "/en/privacy-policy" },
          { name: "Cookie Policy", href: "/en/cookie-policy" },
          { name: "Terms of Service", href: "/en/terms" },
        ],
      },
    ],
    manageCookies: "Manage Cookies",
  },
} as const

function FooterLink({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        {children}
        <ArrowUpRight className="size-3.5" />
      </a>
    )
  }

  return (
    <Link
      href={href}
      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      {children}
    </Link>
  )
}

function FooterSection({ title, links }: { title: string; links: ReadonlyArray<{ name: string; href: string; external?: boolean }> }) {
  return (
    <div>
      <h3 className="text-xs font-medium uppercase tracking-wider text-foreground">{title}</h3>
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

interface FooterProps {
  locale?: Locale
}

export function Footer({ locale = 'it' }: FooterProps) {
  const t = footerContent[locale]

  return (
    <footer className="border-t border-border bg-background">
      {/* Main footer content */}
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5 lg:gap-0">
          <div className="lg:border-r lg:border-border lg:pr-8">
            <FooterSection {...t.columns[0]} />
          </div>
          <div className="lg:border-r lg:border-border lg:px-8">
            <FooterSection {...t.columns[1]} />
          </div>
          <div className="lg:border-r lg:border-border lg:px-8">
            <FooterSection {...t.columns[2]} />
          </div>
          <div className="lg:border-r lg:border-border lg:px-8">
            <FooterSection {...t.columns[3]} />
          </div>
          <div className="lg:pl-8">
            <FooterSection {...t.columns[4]} />
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
              {t.manageCookies}
            </button>

            {/* Copyright */}
            <a
              href="https://www.nur.it/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              &copy; 2026 NUR Digital Marketing
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

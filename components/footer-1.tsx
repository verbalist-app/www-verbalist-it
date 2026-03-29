'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { LanguageSwitcher } from '@/components/language-switcher'

type Locale = 'it' | 'en'

interface FooterProps {
  locale?: Locale
}

const footerContent = {
  it: {
    description: 'Analizza i competitor, estrai i pattern vincenti e genera contenuti strutturati per la ricerca AI.',
    columns: [
      {
        title: 'Piattaforma',
        links: [
          { name: 'Analisi risultati Google', href: '/piattaforma/analisi-serp' },
          { name: 'Analisi competitor', href: '/piattaforma/scraping-competitor' },
          { name: 'Analisi pattern', href: '/piattaforma/analisi-pattern' },
          { name: 'Generazione contenuto', href: '/piattaforma/generazione-contenuto' },
          { name: 'Prezzi', href: '/prezzi' },
          { name: 'Accedi', href: 'https://app.verbalist.it', external: true },
        ],
      },
      {
        title: 'Risorse',
        links: [
          { name: 'Blog', href: '/blog' },
          { name: 'Guide', href: '/guide' },
          { name: 'Changelog', href: '/changelog' },
          { name: 'FAQ', href: '/faq' },
          { name: 'Status', href: 'https://uptime.verbalist.it', external: true },
        ],
      },
      {
        title: 'Azienda',
        links: [
          { name: 'Chi siamo', href: '/chi-siamo' },
          { name: 'Contatti', href: 'https://www.nur.it/contatti', external: true },
          { name: 'LinkedIn', href: 'https://www.linkedin.com/showcase/softwareverbalist/', external: true },
        ],
      },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Cookie Policy', href: '/cookie-policy' },
      { name: 'Termini di servizio', href: '/termini' },
    ],
    manageCookies: 'Gestisci Cookie',
  },
  en: {
    description: 'Analyze competitors, extract winning patterns and generate structured content for AI search.',
    columns: [
      {
        title: 'Platform',
        links: [
          { name: 'Search Results Analysis', href: '/en/platform/serp-analysis' },
          { name: 'Competitor Analysis', href: '/en/platform/competitor-scraping' },
          { name: 'Pattern Analysis', href: '/en/platform/pattern-analysis' },
          { name: 'Content Generation', href: '/en/platform/content-generation' },
          { name: 'Pricing', href: '/en/pricing' },
          { name: 'Sign in', href: 'https://app.verbalist.it', external: true },
        ],
      },
      {
        title: 'Resources',
        links: [
          { name: 'Blog', href: '/en/blog' },
          { name: 'Docs', href: '/en/docs' },
          { name: 'Changelog', href: '/en/changelog' },
          { name: 'FAQ', href: '/en/faq' },
          { name: 'Status', href: 'https://uptime.verbalist.it', external: true },
        ],
      },
      {
        title: 'Company',
        links: [
          { name: 'About us', href: '/en/about' },
          { name: 'Contact', href: 'https://www.nur.it/en/contacts', external: true },
          { name: 'LinkedIn', href: 'https://www.linkedin.com/showcase/softwareverbalist/', external: true },
        ],
      },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/en/privacy-policy' },
      { name: 'Cookie Policy', href: '/en/cookie-policy' },
      { name: 'Terms of Service', href: '/en/terms' },
    ],
    manageCookies: 'Manage Cookies',
  },
} as const

function FooterLink({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm transition-colors"
      >
        {children}
        <ArrowUpRight className="size-3" />
      </a>
    )
  }
  return (
    <Link href={href} className="text-muted-foreground hover:text-foreground text-sm transition-colors">
      {children}
    </Link>
  )
}

export default function Footer({ locale = 'it' }: FooterProps) {
  const t = footerContent[locale]

  return (
    <footer className="bg-background @container border-t py-12">
      <div className="mx-auto max-w-2xl px-6">
        <div className="@sm:grid-cols-3 grid grid-cols-2 gap-8">
          <div className="col-span-full">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo-Verbalist-full.svg"
                alt="Verbalist"
                width={153}
                height={45}
                className="h-6 w-auto"
              />
            </Link>
            <p className="text-muted-foreground mt-4 max-w-xs text-sm">{t.description}</p>
          </div>
          {t.columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-foreground mb-3 text-sm font-medium">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <FooterLink href={link.href} external={'external' in link ? link.external : undefined}>
                      {link.name}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t pt-8">
          <div className="flex items-center gap-4">
            <a
              href="https://www.nur.it/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground text-sm"
            >
              &copy; {new Date().getFullYear()} NUR Digital Marketing
            </a>
            <button
              onClick={() => {
                document.cookie = 'cookieConsent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
                window.location.reload()
              }}
              className="text-muted-foreground hover:text-foreground text-sm underline underline-offset-2 transition-colors"
            >
              {t.manageCookies}
            </button>
          </div>
          <div className="flex items-center gap-4">
            {t.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </footer>
  )
}

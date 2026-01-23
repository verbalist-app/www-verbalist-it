'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Globe } from "lucide-react"

const links = {
  prodotto: [
    { name: "Piattaforma", href: "/piattaforma" },
    { name: "Prezzi", href: "/prezzi" },
  ],
  soluzioni: [
    { name: "Agenzie", href: "/soluzioni/agenzie" },
    { name: "SEO Specialist", href: "/soluzioni/team-seo" },
    { name: "Content Manager", href: "/soluzioni/team-marketing" },
    { name: "AI Strategist", href: "/soluzioni/ai-strategist" },
    { name: "eCommerce", href: "/soluzioni/ecommerce" },
    { name: "Enterprise", href: "/soluzioni/enterprise" },
  ],
  azienda: [
    { name: "Chi siamo", href: "/chi-siamo" },
    { name: "Contatti", href: "/contatti" },
    { name: "LinkedIn", href: "https://www.linkedin.com/showcase/softwareverbalist/", external: true },
  ],
  legale: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Cookie Policy", href: "/cookie-policy" },
    { name: "Termini", href: "/termini" },
  ],
}

function LanguageSwitcher() {
  const pathname = usePathname()
  const isEnglish = pathname.startsWith('/en')

  // Map Italian slugs to English slugs
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
    '/blog/geo-ottimizzazione-ai': '/en/blog/geo-ai-optimization',
    '/faq': '/en/faq',
    '/guide': '/en/docs',
    '/changelog': '/en/changelog',
    '/privacy-policy': '/en/privacy-policy',
    '/cookie-policy': '/en/cookie-policy',
    '/termini': '/en/terms',
    '/login': '/en/login',
  }

  // Reverse map for English to Italian
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
      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
      title={isEnglish ? 'Passa all\'italiano' : 'Switch to English'}
    >
      <Globe className="size-3.5" />
      <span className="font-medium">{isEnglish ? 'Italiano' : 'English'}</span>
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="border-t py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <img src="/logo-full.svg" alt="Verbalist" className="h-7 w-auto" />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              La prima piattaforma di Content Automation per SEO e AI Search (AEO/GEO).
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-10">
            <div>
              <h3 className="text-xs font-medium uppercase tracking-wider text-foreground">Prodotto</h3>
              <ul className="mt-4 space-y-3">
                {links.prodotto.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-medium uppercase tracking-wider text-foreground">Soluzioni</h3>
              <ul className="mt-4 space-y-3">
                {links.soluzioni.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-medium uppercase tracking-wider text-foreground">Azienda</h3>
              <ul className="mt-4 space-y-3">
                {links.azienda.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-medium uppercase tracking-wider text-foreground">Legale</h3>
              <ul className="mt-4 space-y-3">
                {links.legale.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom bar - full width */}
      <div className="mt-16 border-t">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Verbalist. Un prodotto{" "}
              <a
                href="https://www.nur.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                NUR Digital Marketing
              </a>.
            </p>
            <div className="flex items-center gap-6">
              <LanguageSwitcher />
              <button
                onClick={() => {
                  document.cookie = "cookieConsent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
                  window.location.reload()
                }}
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                Gestisci Cookie
              </button>
              <a
                href="https://status.verbalist.it"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="size-2 rounded-full bg-green-500" />
                All systems normal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

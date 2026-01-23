'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Globe } from "lucide-react"

const links = {
  product: [
    { name: "Platform", href: "/en/platform" },
    { name: "Pricing", href: "/en/pricing" },
  ],
  solutions: [
    { name: "Agencies", href: "/en/solutions/agencies" },
    { name: "SEO Specialist", href: "/en/solutions/seo-teams" },
    { name: "Content Manager", href: "/en/solutions/marketing-teams" },
    { name: "AI Strategist", href: "/en/solutions/ai-strategist" },
    { name: "eCommerce", href: "/en/solutions/ecommerce" },
    { name: "Enterprise", href: "/en/solutions/enterprise" },
  ],
  company: [
    { name: "About us", href: "/en/about" },
    { name: "LinkedIn", href: "https://www.linkedin.com/showcase/softwareverbalist/", external: true },
  ],
  legal: [
    { name: "Privacy Policy", href: "/en/privacy-policy" },
    { name: "Cookie Policy", href: "/en/cookie-policy" },
    { name: "Terms", href: "/en/terms" },
  ],
}

function LanguageSwitcher() {
  const pathname = usePathname()
  const isEnglish = pathname.startsWith('/en')

  // Map English slugs to Italian slugs
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
    '/en/blog/geo-ai-optimization': '/blog/geo-ottimizzazione-ai',
    '/en/faq': '/faq',
    '/en/docs': '/guide',
    '/en/changelog': '/changelog',
    '/en/privacy-policy': '/privacy-policy',
    '/en/cookie-policy': '/cookie-policy',
    '/en/terms': '/termini',
    '/en/login': '/login',
  }

  // Reverse map for Italian to English
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
      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
      title={isEnglish ? 'Switch to Italian' : 'Switch to English'}
    >
      <Globe className="size-3.5" />
      <span className="font-medium">{isEnglish ? 'Italiano' : 'English'}</span>
    </Link>
  )
}

export function FooterEn() {
  return (
    <footer className="border-t py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <img src="/logo-full.svg" alt="Verbalist" className="h-7 w-auto" />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The first Content Automation platform for SEO and AI Search (AEO/GEO).
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-10">
            <div>
              <h3 className="text-xs font-medium uppercase tracking-wider text-foreground">Product</h3>
              <ul className="mt-4 space-y-3">
                {links.product.map((link) => (
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
              <h3 className="text-xs font-medium uppercase tracking-wider text-foreground">Solutions</h3>
              <ul className="mt-4 space-y-3">
                {links.solutions.map((link) => (
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
              <h3 className="text-xs font-medium uppercase tracking-wider text-foreground">Company</h3>
              <ul className="mt-4 space-y-3">
                {links.company.map((link) => (
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
              <h3 className="text-xs font-medium uppercase tracking-wider text-foreground">Legal</h3>
              <ul className="mt-4 space-y-3">
                {links.legal.map((link) => (
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
              © {new Date().getFullYear()} Verbalist. A product by{" "}
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
                Manage Cookies
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

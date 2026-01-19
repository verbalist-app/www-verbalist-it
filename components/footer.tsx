'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Globe } from "lucide-react"

const links = {
  prodotto: [
    { name: "Piattaforma", href: "/piattaforma" },
    { name: "Tecnologia", href: "/integrazioni" },
    { name: "Contatti", href: "/contatti" },
  ],
  azienda: [
    { name: "Chi siamo", href: "/chi-siamo" },
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
  const pathWithoutLocale = isEnglish ? pathname.replace(/^\/en/, '') || '/' : pathname
  const alternatePath = isEnglish ? pathWithoutLocale : `/en${pathname === '/' ? '' : pathname}`

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

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-12">
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

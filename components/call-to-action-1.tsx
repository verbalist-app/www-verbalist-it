import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

type Locale = 'it' | 'en'

interface CallToActionProps {
  className?: string
  locale?: Locale
}

const ctaContent = {
  it: {
    title: 'Vuoi vederlo in azione?',
    description: 'Ti mostriamo come funziona con una demo. Vedi analisi SERP, rilevamento pattern e generazione contenuti applicati al tuo caso.',
    primaryCta: { text: 'Prenota una demo', href: '/prenota-demo' },
    secondaryCta: { text: 'Inizia ora', href: 'https://app.verbalist.it' },
  },
  en: {
    title: 'Want to see it in action?',
    description: 'We\'ll show you how it works with a demo. See SERP analysis, pattern detection and content generation applied to your case.',
    primaryCta: { text: 'Book a demo', href: '/en/book-demo' },
    secondaryCta: { text: 'Get started', href: 'https://app.verbalist.it' },
  },
} as const

export default function CallToAction({ className, locale = 'it' }: CallToActionProps) {
  const t = ctaContent[locale]

  return (
    <section className={`bg-background @container py-24 ${className ?? ''}`}>
      <div className="mx-auto max-w-2xl px-6">
        <div className="text-center">
          <h2 className="font-serif text-balance text-4xl font-medium">{t.title}</h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-md text-balance">{t.description}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild className="pr-1.5">
              <Link href={t.primaryCta.href}>
                <span>{t.primaryCta.text}</span>
                <ChevronRight className="opacity-50" />
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <a href={t.secondaryCta.href}>{t.secondaryCta.text}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

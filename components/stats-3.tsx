import Image from 'next/image'
import { cn } from '@/lib/utils'

type Locale = 'it' | 'en'

interface StatsProps {
  className?: string
  locale?: Locale
}

const statsContent = {
  it: {
    title: 'Numeri che contano',
    description: 'Dalla keyword al contenuto ottimizzato per la ricerca AI, in pochi minuti.',
    stats: [
      { value: '10 risultati', description: 'SERP analizzati per keyword.' },
      { value: '< 3 min', description: 'Da keyword a contenuto GEO-ready.' },
      { value: '4 modelli AI', description: 'Selezionabili per generazione.' },
    ],
  },
  en: {
    title: 'Numbers that matter',
    description: 'From keyword to AI search-optimized content, in just a few minutes.',
    stats: [
      { value: '10 results', description: 'SERP analyzed per keyword.' },
      { value: '< 3 min', description: 'From keyword to GEO-ready content.' },
      { value: '4 AI models', description: 'Selectable for generation.' },
    ],
  },
} as const

export default function Stats({ className, locale = 'it' }: StatsProps) {
  const t = statsContent[locale]

  return (
    <section className={cn('bg-background @container pt-24', className)}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="space-y-4">
          <h2 className="font-serif text-balance text-4xl font-medium">{t.title}</h2>
          <p className="text-muted-foreground text-balance">{t.description}</p>
        </div>
        <div className="@xl:grid-cols-3 mt-12 grid gap-6 text-sm">
          {t.stats.map((stat) => (
            <div key={stat.value} className="border-t py-6">
              <p className="text-muted-foreground text-xl">
                <span className="text-foreground font-medium">{stat.value}</span> {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mask-radial-from-65% mask-radial-at-bottom mask-radial-[50%_100%] pointer-events-none relative mx-auto max-w-4xl dark:opacity-50">
        <div className="bg-primary absolute inset-0 z-10 mix-blend-overlay" />
        <Image
          src="https://images.unsplash.com/photo-1723307060937-b003478a2c03?q=80&w=2928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="globe with world map"
          className="dark:invert"
          width={2928}
          height={1464}
        />
      </div>
    </section>
  )
}

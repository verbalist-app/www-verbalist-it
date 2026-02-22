import { CSSProperties } from 'react'
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
    <section className={cn('bg-background @container py-24', className)}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="space-y-4">
          <h2 className="font-serif text-balance text-4xl font-medium">{t.title}</h2>
          <p className="text-muted-foreground text-balance">{t.description}</p>
        </div>
        <div className="@xl:grid-cols-3 mt-12 grid grid-cols-2 gap-6 text-sm">
          {t.stats.map((stat) => (
            <div key={stat.value} className="border-y py-6">
              <p className="text-muted-foreground text-xl">
                <span className="text-foreground font-medium">{stat.value}</span> {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        aria-hidden
        className="mx-auto flex h-72 max-w-5xl items-end justify-between gap-0.5 px-6">
        {Array.from({ length: 48 }, (_, i) => {
          const progress = i / 47
          const base = Math.pow(progress, 2.2)
          const noise = Math.sin(i * 0.7) * 0.08 + Math.sin(i * 1.3) * 0.05
          const height = Math.min(1, Math.max(0.05, base + noise * (0.3 + progress * 0.7)))
          return (
            <div
              key={i}
              className="after:h-(--line-height) after:bg-foreground/15 hover:after:bg-primary relative h-full w-px rounded-full duration-200 before:absolute before:inset-0 before:-inset-x-6 after:absolute after:inset-0 after:mt-auto hover:mx-2"
              style={{ '--line-height': `${height * 100}%` } as CSSProperties}
            />
          )
        })}
      </div>
    </section>
  )
}

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
          <h2 className="text-balance text-4xl font-medium">{t.title}</h2>
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
    </section>
  )
}

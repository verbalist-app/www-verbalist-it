import { cn } from '@/lib/utils'

type Locale = 'it' | 'en'

interface StatsProps {
  className?: string
  locale?: Locale
}

const statsContent = {
  it: {
    stats: [
      { value: '10', label: 'Risultati SERP analizzati' },
      { value: '< 3 min', label: 'Da keyword a contenuto' },
    ],
    description: 'Dalla keyword al contenuto GEO-ready in pochi minuti, con 4 modelli AI selezionabili per la generazione.',
  },
  en: {
    stats: [
      { value: '10', label: 'SERP results analyzed' },
      { value: '< 3 min', label: 'From keyword to content' },
    ],
    description: 'From keyword to GEO-ready content in minutes, with 4 selectable AI models for generation.',
  },
} as const

export default function Stats({ className, locale = 'it' }: StatsProps) {
  const t = statsContent[locale]

  return (
    <section className={cn('py-24', className)}>
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="sr-only">Verbalist in numbers</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {t.stats.map((stat) => (
            <div key={stat.label} className="space-y-0.5 md:text-center">
              <div className="text-primary text-4xl font-bold">{stat.value}</div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
          <div className="col-span-2 border-t pt-4 md:border-l md:border-t-0 md:pl-12 md:pt-0">
            <p className="text-muted-foreground text-balance text-lg">{t.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

import { ArrowRight } from 'lucide-react'
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
      { value: '10 risultati', label: 'Google analizzati per keyword' },
      { value: '< 3 min', label: 'da keyword a contenuto GEO-ready' },
      { value: '4 modelli AI', label: 'selezionabili per generazione' },
      { value: 'LLM-ready', label: 'contenuti strutturati per la ricerca AI' },
    ],
  },
  en: {
    title: 'Numbers that matter',
    description: 'From keyword to AI search-optimized content, in just a few minutes.',
    stats: [
      { value: '10 results', label: 'Google results analyzed per keyword' },
      { value: '< 3 min', label: 'from keyword to GEO-ready content' },
      { value: '4 AI models', label: 'selectable for generation' },
      { value: 'LLM-ready', label: 'structured content for AI search' },
    ],
  },
} as const

export default function Stats({ className, locale = 'it' }: StatsProps) {
  const t = statsContent[locale]

  return (
    <section className={cn('py-24', className)}>
      <div className="mx-auto max-w-4xl px-6">
        <div>
          <h2 className="text-2xl font-medium">{t.title}</h2>
          <p className="text-muted-foreground mt-4 text-balance text-lg">{t.description}</p>
        </div>
        <ul role="list" className="text-muted-foreground mt-8 space-y-2">
          {t.stats.map((stat, index) => (
            <li key={index} className="-ml-0.5 flex items-center gap-1.5">
              <ArrowRight className="size-4 opacity-50" />
              <span className="text-foreground font-medium">{stat.value}</span> {stat.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

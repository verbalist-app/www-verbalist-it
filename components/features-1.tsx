import { Card } from '@/components/ui/card'
import { Search, FileText, BarChart3, Sparkles } from 'lucide-react'

type Locale = 'it' | 'en'

interface FeaturesProps {
  className?: string
  locale?: Locale
}

const featuresContent = {
  it: {
    title: 'Ogni passaggio nel dettaglio',
    description: 'Dalla keyword al contenuto pubblicabile: quattro step automatizzati per posizionarti nella ricerca AI.',
    cards: [
      {
        title: 'Analisi SERP',
        description: 'Prende i primi 10 risultati Google per la tua keyword. Posizione, snippet, title e meta description. Così capisci cosa sta funzionando.',
      },
      {
        title: 'Scraping Competitor',
        description: 'Scarica il contenuto di ogni pagina competitor. Heading, paragrafi, lunghezza. Tutto convertito in Markdown pulito.',
      },
      {
        title: 'Analisi Pattern',
        description: 'Trova cosa hanno in comune i contenuti meglio posizionati. Struttura, argomenti, segnali E-E-A-T, lunghezza media.',
      },
      {
        title: 'Generazione Contenuto',
        description: 'Scrive l\'articolo basandosi su quello che funziona. Title, meta, heading e testo. Pronto per pubblicare.',
      },
    ],
  },
  en: {
    title: 'Each step in detail',
    description: 'From keyword to publishable content: four automated steps to position yourself in AI search.',
    cards: [
      {
        title: 'SERP Analysis',
        description: 'Fetches the top 10 Google results for your keyword. Position, snippet, title and meta description. So you understand what\'s working.',
      },
      {
        title: 'Competitor Scraping',
        description: 'Downloads content from each competitor page. Headings, paragraphs, length. All converted to clean Markdown.',
      },
      {
        title: 'Pattern Analysis',
        description: 'Finds what ranking content has in common. Structure, topics, E-E-A-T signals, average length.',
      },
      {
        title: 'Content Generation',
        description: 'Writes the article based on what works. Title, meta, headings and text. Ready to publish.',
      },
    ],
  },
} as const

const cardIcons = [Search, FileText, BarChart3, Sparkles]

export default function Features({ className, locale = 'it' }: FeaturesProps) {
  const t = featuresContent[locale]

  return (
    <section className={`bg-background @container py-24 ${className ?? ''}`}>
      <div className="mx-auto max-w-2xl px-6">
        <div>
          <h2 className="font-serif text-balance text-4xl font-medium">{t.title}</h2>
          <p className="text-muted-foreground mt-4 text-balance">{t.description}</p>
        </div>
        <div className="@xl:grid-cols-2 mt-12 grid gap-3 *:p-6">
          {t.cards.map((card, i) => {
            const Icon = cardIcons[i]
            return (
              <Card key={i} variant="default" className="row-span-2 grid grid-rows-subgrid">
                <div className="space-y-2">
                  <h3 className="text-foreground font-medium">{card.title}</h3>
                  <p className="text-muted-foreground text-sm">{card.description}</p>
                </div>
                <div
                  aria-hidden
                  className="flex h-44 items-center justify-center">
                  <div className="relative flex size-32 items-center justify-center">
                    <Icon className="absolute inset-0 size-full stroke-[0.1px] opacity-15" style={{ color: '#473424' }} />
                    <Icon className="size-16 stroke-[0.5px]" style={{ color: '#473424' }} />
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

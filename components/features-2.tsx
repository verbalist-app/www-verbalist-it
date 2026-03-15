import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

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
        description: 'Prende i primi 10 risultati Google per la tua keyword. Posizione, snippet, title e meta description.',
      },
      {
        title: 'Scraping Competitor',
        description: 'Scarica il contenuto di ogni pagina competitor. Heading, paragrafi, lunghezza. Tutto in Markdown pulito.',
      },
      {
        title: 'Analisi Pattern',
        description: 'Trova cosa hanno in comune i contenuti meglio posizionati. Struttura, argomenti, segnali E-E-A-T.',
      },
      {
        title: 'Generazione Contenuto',
        description: 'Scrive l\'articolo basandosi su quello che funziona. Title, meta, heading e testo.',
      },
    ],
  },
  en: {
    title: 'Each step in detail',
    description: 'From keyword to publishable content: four automated steps to position yourself in AI search.',
    cards: [
      {
        title: 'SERP Analysis',
        description: 'Fetches the top 10 Google results for your keyword. Position, snippet, title and meta description.',
      },
      {
        title: 'Competitor Scraping',
        description: 'Downloads content from each competitor page. Headings, paragraphs, length. All in clean Markdown.',
      },
      {
        title: 'Pattern Analysis',
        description: 'Finds what ranking content has in common. Structure, topics, E-E-A-T signals.',
      },
      {
        title: 'Content Generation',
        description: 'Writes the article based on what works. Title, meta, headings and text.',
      },
    ],
  },
} as const

export default function Features({ className, locale = 'it' }: FeaturesProps) {
  const t = featuresContent[locale]

  return (
    <section className={cn('bg-background @container py-24', className)}>
      <div className="mx-auto max-w-4xl px-6">
        <div>
          <h2 className="text-balance text-4xl font-medium">{t.title}</h2>
          <p className="text-muted-foreground mt-4 text-balance">{t.description}</p>
        </div>
        <div className="@xl:grid-cols-2 mt-12 grid gap-3 *:p-6">
          {/* Card 1 — SERP Analysis */}
          <Card variant="mixed" className="row-span-2 grid grid-rows-subgrid">
            <div className="space-y-2">
              <h3 className="text-foreground font-medium">{t.cards[0].title}</h3>
              <p className="text-muted-foreground text-sm">{t.cards[0].description}</p>
            </div>
            <div aria-hidden className="flex h-44 flex-col justify-between pt-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="relative flex h-10 items-center gap-12 px-6">
                  <div className="bg-border absolute inset-0 my-auto h-px" />
                  <div className="bg-card ring-border relative flex h-8 items-center gap-2 rounded-full px-3 shadow-sm ring-1">
                    <span className="bg-foreground text-background flex size-4 items-center justify-center rounded text-[9px] font-semibold">{i}</span>
                    <div className="h-1.5 w-12 rounded bg-foreground/20" />
                  </div>
                  <div className="bg-card ring-border relative flex h-8 items-center rounded-full px-3 shadow-sm ring-1">
                    <div className="h-1.5 w-8 rounded bg-foreground/20" />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Card 2 — Scraping */}
          <Card variant="mixed" className="row-span-2 grid grid-rows-subgrid overflow-hidden">
            <div className="space-y-2">
              <h3 className="text-foreground font-medium">{t.cards[1].title}</h3>
              <p className="text-muted-foreground text-sm">{t.cards[1].description}</p>
            </div>
            <div aria-hidden className="relative flex h-44 flex-col gap-2.5 pt-8 pl-6">
              <div className="bg-foreground/15 absolute left-2 top-8 bottom-6 w-px" />
              <div className="flex items-center gap-3">
                <div className="bg-foreground/25 relative z-10 size-1.5 rounded-full" />
                <div className="h-1.5 w-3/4 rounded bg-foreground/15" />
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-foreground/25 relative z-10 size-1.5 rounded-full" />
                <div className="h-1.5 w-1/2 rounded bg-foreground/15" />
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary relative z-10 size-1.5 rounded-full" />
                <div className="bg-primary/20 h-1.5 w-5/6 rounded" />
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-foreground/25 relative z-10 size-1.5 rounded-full" />
                <div className="h-1.5 w-2/3 rounded bg-foreground/15" />
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-foreground/25 relative z-10 size-1.5 rounded-full" />
                <div className="h-1.5 w-1/3 rounded bg-foreground/15" />
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary relative z-10 size-1.5 rounded-full" />
                <div className="bg-primary/20 h-1.5 w-3/5 rounded" />
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-foreground/25 relative z-10 size-1.5 rounded-full" />
                <div className="h-1.5 w-1/2 rounded bg-foreground/15" />
              </div>
            </div>
          </Card>

          {/* Card 3 — Pattern Analysis */}
          <Card variant="mixed" className="row-span-2 grid grid-rows-subgrid overflow-hidden">
            <div className="space-y-2">
              <h3 className="text-foreground font-medium">{t.cards[2].title}</h3>
              <p className="text-muted-foreground text-sm">{t.cards[2].description}</p>
            </div>
            <div aria-hidden className="*:bg-foreground/15 flex h-44 justify-between pb-6 pt-12 *:h-full *:w-px">
              <div /><div /><div /><div />
              <div className="bg-primary!" />
              <div /><div /><div /><div />
              <div className="bg-primary!" />
              <div /><div /><div />
              <div className="bg-primary!" />
              <div /><div /><div /><div />
              <div className="bg-primary!" />
              <div /><div /><div /><div />
              <div className="bg-primary!" />
              <div /><div /><div /><div /><div />
              <div className="bg-primary!" />
            </div>
          </Card>

          {/* Card 4 — Content Generation */}
          <Card variant="mixed" className="row-span-2 grid grid-rows-subgrid">
            <div className="space-y-2">
              <h3 className="font-medium">{t.cards[3].title}</h3>
              <p className="text-muted-foreground text-sm">{t.cards[3].description}</p>
            </div>
            <div aria-hidden className="flex h-44 flex-col gap-3 pt-8">
              <div className="h-1.5 w-2/3 rounded bg-foreground/20" />
              <div className="flex gap-2">
                <div className="h-1.5 w-full rounded bg-foreground/10" />
                <div className="h-1.5 w-3/4 rounded bg-foreground/10" />
              </div>
              <div className="h-1.5 w-5/6 rounded bg-foreground/10" />
              <div className="mt-2 h-1.5 w-1/2 rounded bg-foreground/20" />
              <div className="flex gap-2">
                <div className="h-1.5 w-full rounded bg-foreground/10" />
                <div className="h-1.5 w-1/2 rounded bg-foreground/10" />
              </div>
              <div className="h-1.5 w-4/5 rounded bg-foreground/10" />
              <div className="bg-primary/20 h-1.5 w-2/5 rounded" />
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

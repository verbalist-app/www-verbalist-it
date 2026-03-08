import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

type Locale = 'it' | 'en'

interface FeaturesProps {
  className?: string
  locale?: Locale
}

const featuresContent = {
  it: {
    title: 'Come funziona',
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
    title: 'How it works',
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
    <section className={cn('bg-background py-24 lg:py-32', className)}>
      <div className="mx-auto w-full max-w-5xl px-6">
        <div>
          <h2 className="font-serif text-balance text-3xl font-medium tracking-tight sm:text-4xl">{t.title}</h2>
          <p className="text-muted-foreground mt-6 text-balance text-base leading-relaxed">{t.description}</p>
        </div>
        <div className="mt-12 grid gap-12 sm:grid-cols-2">
          {/* Card grande — Analisi SERP */}
          <div className="col-span-full space-y-4">
            <Card variant="soft" className="overflow-hidden px-6 sm:col-span-2">
              <div className="mask-b-from-75% mx-auto -mt-2 max-w-sm px-2 pt-8">
                <SerpIllustration />
              </div>
            </Card>
            <div className="max-w-md">
              <h3 className="text-foreground text-base font-medium">{t.cards[0].title}</h3>
              <p className="text-muted-foreground mt-3 text-balance">{t.cards[0].description}</p>
            </div>
          </div>

          {/* Card — Scraping */}
          <div className="grid grid-rows-[1fr_auto] space-y-4">
            <Card variant="soft" className="p-6">
              <ScrapingIllustration />
            </Card>
            <div>
              <h3 className="text-foreground text-base font-medium">{t.cards[1].title}</h3>
              <p className="text-muted-foreground mt-3 text-balance">{t.cards[1].description}</p>
            </div>
          </div>

          {/* Card — Pattern */}
          <div className="grid grid-rows-[1fr_auto] space-y-4">
            <Card variant="soft" className="overflow-hidden p-6">
              <PatternIllustration />
            </Card>
            <div>
              <h3 className="text-foreground text-base font-medium">{t.cards[2].title}</h3>
              <p className="text-muted-foreground mt-3 text-balance">{t.cards[2].description}</p>
            </div>
          </div>

          {/* Card — Generazione */}
          <div className="col-span-full space-y-4">
            <Card variant="soft" className="overflow-hidden px-6 sm:col-span-2">
              <div className="mask-b-from-75% mx-auto -mt-2 max-w-sm px-2 pt-8">
                <GenerationIllustration />
              </div>
            </Card>
            <div className="max-w-md">
              <h3 className="text-foreground text-base font-medium">{t.cards[3].title}</h3>
              <p className="text-muted-foreground mt-3 text-balance">{t.cards[3].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* Illustrazione SERP — risultati di ricerca con posizioni */
const SerpIllustration = () => {
  return (
    <Card aria-hidden className="p-4">
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="bg-foreground text-background flex size-5 shrink-0 items-center justify-center rounded text-[10px] font-semibold">{i}</span>
            <div className="flex-1 space-y-1.5">
              <div className="h-1.5 rounded bg-foreground/20" style={{ width: `${85 - i * 10}%` }} />
              <div className="h-1.5 rounded bg-foreground/10" style={{ width: `${70 - i * 8}%` }} />
            </div>
            <div className="bg-foreground/5 rounded px-2 py-1">
              <div className="h-1.5 w-6 rounded bg-foreground/15" />
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

/* Illustrazione Scraping — contenuto Markdown estratto */
const ScrapingIllustration = () => {
  return (
    <Card aria-hidden className="p-4">
      <div className="mb-3 flex items-center gap-2">
        <div className="size-2 rounded-full bg-foreground/20" />
        <div className="h-1.5 w-20 rounded bg-foreground/20" />
      </div>
      <div className="space-y-2 border-l-2 border-foreground/10 pl-3">
        <div className="h-1.5 w-full rounded bg-foreground/10" />
        <div className="h-1.5 w-4/5 rounded bg-foreground/10" />
        <div className="h-1.5 w-3/5 rounded bg-primary/20" />
        <div className="h-1.5 w-full rounded bg-foreground/10" />
        <div className="h-1.5 w-2/3 rounded bg-foreground/10" />
      </div>
    </Card>
  )
}

/* Illustrazione Pattern — barre con highlight */
const PatternIllustration = () => {
  return (
    <div aria-hidden className="relative">
      <Card className="p-4">
        <div className="flex items-end justify-between gap-1.5" style={{ height: '80px' }}>
          {[40, 55, 30, 70, 85, 45, 60, 75, 50, 90].map((h, i) => (
            <div
              key={i}
              className={cn('w-full rounded-sm', h > 70 ? 'bg-foreground/25' : 'bg-foreground/10')}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="h-1.5 w-16 rounded bg-foreground/15" />
          <div className="h-1.5 w-10 rounded bg-foreground/15" />
        </div>
      </Card>
    </div>
  )
}

/* Illustrazione Generazione — articolo che si forma */
const GenerationIllustration = () => {
  return (
    <Card aria-hidden className="p-4">
      <div className="space-y-3">
        <div className="h-2 w-3/5 rounded bg-foreground/20" />
        <div className="space-y-1.5">
          <div className="h-1.5 w-full rounded bg-foreground/10" />
          <div className="h-1.5 w-11/12 rounded bg-foreground/10" />
          <div className="h-1.5 w-4/5 rounded bg-foreground/10" />
        </div>
        <div className="h-2 w-2/5 rounded bg-foreground/20" />
        <div className="space-y-1.5">
          <div className="h-1.5 w-full rounded bg-foreground/10" />
          <div className="h-1.5 w-3/4 rounded bg-primary/15" />
          <div className="h-1.5 w-5/6 rounded bg-foreground/10" />
        </div>
      </div>
    </Card>
  )
}

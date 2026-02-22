'use client'
import { useState } from 'react'
import { Search, FileCode, BarChart3, Sparkles, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type Locale = 'it' | 'en'
type Feature = 'serp' | 'scraping' | 'pattern' | 'generation'

interface FeaturesProps {
  className?: string
  locale?: Locale
}

const featuresContent = {
  it: {
    title: 'Ogni passaggio nel dettaglio',
    description: 'Dalla keyword al contenuto pubblicabile: quattro step automatizzati per posizionarti nella ricerca AI.',
    cta: 'Inizia ora',
    features: [
      { id: 'serp' as Feature, label: 'Analisi SERP', icon: Search },
      { id: 'scraping' as Feature, label: 'Scraping Competitor', icon: FileCode },
      { id: 'pattern' as Feature, label: 'Analisi Pattern', icon: BarChart3 },
      { id: 'generation' as Feature, label: 'Generazione Contenuto', icon: Sparkles },
    ],
  },
  en: {
    title: 'Each step in detail',
    description: 'From keyword to publishable content: four automated steps to position yourself in AI search.',
    cta: 'Get started',
    features: [
      { id: 'serp' as Feature, label: 'SERP Analysis', icon: Search },
      { id: 'scraping' as Feature, label: 'Competitor Scraping', icon: FileCode },
      { id: 'pattern' as Feature, label: 'Pattern Analysis', icon: BarChart3 },
      { id: 'generation' as Feature, label: 'Content Generation', icon: Sparkles },
    ],
  },
} as const

export default function Features({ className, locale = 'it' }: FeaturesProps) {
  const t = featuresContent[locale]
  const [feature, setFeature] = useState<Feature>('serp')

  return (
    <section className={cn('bg-background @container py-24', className)}>
      <div className="@2xl:grid-cols-2 mx-auto grid max-w-4xl gap-12 px-6">
        <div>
          <div>
            <h2 className="text-balance font-serif text-4xl font-medium">{t.title}</h2>
            <p className="text-muted-foreground mb-6 mt-4 text-balance">{t.description}</p>
            <Button
              variant="secondary"
              size="sm"
              asChild
              className="gap-1 pr-1.5">
              <a href="https://app.verbalist.it">
                {t.cta}
                <ChevronRight />
              </a>
            </Button>
          </div>
          <div className="mt-16 *:w-full *:cursor-pointer">
            {t.features.map((f) => (
              <button
                key={f.id}
                onClick={() => setFeature(f.id)}
                data-selected={feature === f.id}
                className="not-data-[selected=true]:hover:text-foreground not-data-[selected=true]:text-muted-foreground flex items-center gap-3 py-2 text-sm">
                <f.icon className="size-4" style={{ color: '#473424' }} />
                <span className="in-data-[selected=true]:text-shadow-[0.2px_0_0_currentColor]">{f.label}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="@max-xl:-mx-6 not-dark:bg-linear-to-b not-dark:via-muted relative flex items-center overflow-hidden rounded-3xl *:w-full">
          <div
            aria-hidden
            className={cn('*:bg-linear-to-r not-dark:opacity-50 mask-y-from-65% *:to-muted dark:*:to-foreground/2 absolute inset-0 grid grid-cols-4 duration-300', feature === 'serp' && '*:bg-linear-to-t grid-cols-1 grid-rows-12', feature === 'pattern' && '*:bg-linear-to-l grid-cols-2 dark:opacity-50', feature === 'scraping' && '*:opacity-35')}>
            <div />
            <div />
            <div />
            <div />
          </div>
          {feature === 'serp' && <SerpIllustration />}
          {feature === 'scraping' && <ScrapingIllustration />}
          {feature === 'pattern' && <PatternIllustration />}
          {feature === 'generation' && <GenerationIllustration />}
        </div>
      </div>
    </section>
  )
}

const SerpIllustration = () => {
  return (
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
  )
}

const ScrapingIllustration = () => {
  return (
    <div aria-hidden className="relative h-44 translate-y-6">
      <div className="bg-foreground/15 absolute inset-0 mx-auto w-px" />
      <div className="absolute -inset-x-16 top-6 aspect-square rounded-full border" />
      <div className="border-primary mask-l-from-50% mask-l-to-90% mask-r-from-50% mask-r-to-50% absolute -inset-x-16 top-6 aspect-square rounded-full border" />
      <div className="absolute -inset-x-8 top-24 aspect-square rounded-full border" />
      <div className="mask-r-from-50% mask-r-to-90% mask-l-from-50% mask-l-to-50% absolute -inset-x-8 top-24 aspect-square rounded-full border border-primary" />
    </div>
  )
}

const PatternIllustration = () => {
  return (
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
  )
}

const GenerationIllustration = () => {
  return (
    <div aria-hidden className="flex h-44 flex-col gap-3 px-6 pt-8">
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
  )
}

'use client'
import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'

type Locale = 'it' | 'en'

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
}

interface TestimonialsProps {
  className?: string
  locale?: Locale
  testimonials?: Testimonial[]
}

const defaultTestimonials = {
  it: [
    {
      quote: 'Con Verbalist creiamo contenuti strutturati per la ricerca AI senza costruire un framework GEO interno.',
      author: 'Marco Rossi',
      role: 'Marketing Manager',
      company: 'PMI Manifatturiera',
    },
    {
      quote: 'Prima passavamo ore ad analizzare i competitor manualmente. Ora il processo è completamente automatizzato e i contenuti sono pronti per gli LLM.',
      author: 'Laura Bianchi',
      role: 'Content Creator',
      company: 'Freelance',
    },
    {
      quote: 'I nostri clienti ci chiedevano visibilità su ChatGPT e Perplexity. Con Verbalist possiamo offrire contenuti GEO-ready senza costi proibitivi.',
      author: 'Giuseppe Verdi',
      role: 'Digital Consultant',
      company: 'Web Agency',
    },
  ],
  en: [
    {
      quote: 'With Verbalist we create structured content for AI search without building an internal GEO framework.',
      author: 'Marco Rossi',
      role: 'Marketing Manager',
      company: 'Manufacturing SMB',
    },
    {
      quote: 'We used to spend hours analyzing competitors manually. Now the process is fully automated and content is LLM-ready.',
      author: 'Laura Bianchi',
      role: 'Content Creator',
      company: 'Freelance',
    },
    {
      quote: 'Our clients were asking for visibility on ChatGPT and Perplexity. With Verbalist we can deliver GEO-ready content without prohibitive costs.',
      author: 'Giuseppe Verdi',
      role: 'Digital Consultant',
      company: 'Web Agency',
    },
  ],
} as const

export default function Testimonials({ className, locale = 'it', testimonials }: TestimonialsProps) {
  // Temporaneamente nascosto: in attesa di recensioni reali
  return null

  const items = testimonials ?? defaultTestimonials[locale]
  const prefersReducedMotion = useReducedMotion()
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % items.length)
  }, [items.length])

  useEffect(() => {
    const interval = setInterval(next, 6000)
    return () => clearInterval(interval)
  }, [next])

  const sectionTitle = locale === 'en' ? 'What our clients say' : 'Cosa dicono i nostri clienti'

  return (
    <section className={cn('bg-background py-24 lg:py-32', className)}>
      <div className="mx-auto w-full max-w-3xl px-6">
        <h2 className="text-balance text-center text-3xl font-medium tracking-tight sm:text-4xl">
          {sectionTitle}
        </h2>

        <div className="relative mt-12 min-h-[180px]" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={current}
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -4 }}
              transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-center"
            >
              <p className="text-foreground text-balance text-lg leading-relaxed sm:text-xl">
                &ldquo;{items[current].quote}&rdquo;
              </p>
              <footer className="mt-6">
                <p className="text-foreground text-sm font-medium">
                  {items[current].author}
                </p>
                <p className="text-muted-foreground text-sm">
                  {items[current].role}, {items[current].company}
                </p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="mt-8 flex items-center justify-center gap-2" role="tablist">
          {items.map((_, idx) => (
            <button
              key={idx}
              role="tab"
              aria-selected={idx === current}
              aria-label={`${locale === 'en' ? 'Testimonial' : 'Testimonianza'} ${idx + 1}`}
              onClick={() => setCurrent(idx)}
              className={cn(
                'size-2 rounded-full transition-colors duration-150',
                idx === current
                  ? 'bg-foreground'
                  : 'bg-foreground/20 hover:bg-foreground/40'
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

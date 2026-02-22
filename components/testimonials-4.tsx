'use client'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'

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
  const items = testimonials ?? defaultTestimonials[locale]
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [items.length])

  const t = items[current]

  return (
    <section className={`bg-background @container py-24 ${className ?? ''}`}>
      <div className="mx-auto max-w-2xl px-6">
        <div className="relative text-center">
          {/* Invisible spacer: renders the longest testimonial to reserve height */}
          <div aria-hidden className="invisible">
            {items.map((item, i) => (
              <div key={i} className={i > 0 ? 'absolute inset-0' : ''}>
                <p className="text-balance text-xl">&ldquo;{item.quote}&rdquo;</p>
                <div className="mt-8 flex flex-col items-center justify-center gap-1">
                  <p className="text-sm font-medium">{item.author}</p>
                  <p className="text-xs">{item.role} — {item.company}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Visible animated testimonial */}
          <div className="absolute inset-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-foreground text-balance text-xl">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-8 flex flex-col items-center justify-center gap-1">
                  <p className="text-foreground text-sm font-medium">{t.author}</p>
                  <p className="text-muted-foreground text-xs">
                    {t.role} — {t.company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

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
}

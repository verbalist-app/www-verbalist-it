'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type Locale = 'it' | 'en'

interface FaqsProps {
  className?: string
  locale?: Locale
}

const faqsContent = {
  it: {
    title: 'Domande frequenti',
    description: 'Le risposte alle domande più comuni su Verbalist.',
    cta: 'Altre domande?',
    ctaLink: '/faq',
    ctaLabel: 'Vai alle FAQ',
    items: [
      {
        id: 'item-1',
        question: "Cos'è Verbalist?",
        answer: "Un tool che analizza i primi 10 risultati Google per la tua keyword, trova cosa li fa rankare e genera contenuti basati su quei pattern.",
      },
      {
        id: 'item-2',
        question: 'Quali modelli AI usate?',
        answer: 'Utilizziamo gli ultimi modelli disponibili di Anthropic, OpenAI e Google, aggiornati costantemente alla versione più performante.',
      },
      {
        id: 'item-3',
        question: 'I contenuti sono unici?',
        answer: 'Sì. Ogni contenuto viene generato da zero partendo dall\'analisi dei risultati Google della tua keyword. Niente template o spinning.',
      },
      {
        id: 'item-4',
        question: 'Posso usare il mio tone of voice?',
        answer: 'Sì. Configuri un profilo con esempi del tuo stile e linee guida. Il sistema genera seguendo quelle indicazioni.',
      },
      {
        id: 'item-5',
        question: 'Funziona anche per GEO?',
        answer: 'Sì. I contenuti sono strutturati per essere citati anche da ChatGPT, Perplexity e Google SGE.',
      },
    ],
  },
  en: {
    title: 'Frequently asked questions',
    description: 'Answers to the most common questions about Verbalist.',
    cta: 'More questions?',
    ctaLink: '/en/faq',
    ctaLabel: 'Go to FAQ',
    items: [
      {
        id: 'item-1',
        question: 'What is Verbalist?',
        answer: 'A tool that analyzes the top 10 Google results for your keyword, finds what makes them rank and generates content based on those patterns.',
      },
      {
        id: 'item-2',
        question: 'Which AI models do you use?',
        answer: "Anthropic's Claude, OpenAI's GPT-4 and Google's Gemini. You can choose which one to use for each project.",
      },
      {
        id: 'item-3',
        question: 'Is the content unique?',
        answer: 'Yes. Every piece of content is generated from scratch based on the search results analysis for your keyword. No templates or spinning.',
      },
      {
        id: 'item-4',
        question: 'Can I use my own tone of voice?',
        answer: 'Yes. You set up a profile with examples of your style and guidelines. The system generates following those instructions.',
      },
      {
        id: 'item-5',
        question: 'Does it work for GEO?',
        answer: 'Yes. Content is structured to be cited by ChatGPT, Perplexity and Google SGE.',
      },
    ],
  },
} as const

export default function FAQs({ className, locale = 'it' }: FaqsProps) {
  const t = faqsContent[locale]

  return (
    <section className={cn('bg-background @container py-24', className)}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-medium">{t.title}</h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-md text-balance">{t.description}</p>
        </div>
        <Card variant="mixed" className="mt-12 p-2">
          <Accordion type="single" collapsible>
            {t.items.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-b-0 px-4">
                <AccordionTrigger className="cursor-pointer py-4 text-sm font-medium hover:no-underline" data-gtm="faq-accordion">{item.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground pb-2 text-sm">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
        <p className="text-muted-foreground mt-6 text-center text-sm">
          {t.cta}{' '}
          <Link href={t.ctaLink} className="text-foreground font-medium hover:underline">
            {t.ctaLabel}
          </Link>
        </p>
      </div>
    </section>
  )
}

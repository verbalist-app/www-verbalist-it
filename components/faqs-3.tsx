'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
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
        answer: 'Claude di Anthropic, GPT-4 di OpenAI e Gemini di Google. Puoi scegliere quale usare per ogni progetto.',
      },
      {
        id: 'item-3',
        question: 'I contenuti sono unici?',
        answer: 'Sì. Generiamo ogni contenuto da zero analizzando i risultati Google della tua keyword in tempo reale. Nessun template, nessuno spinning.',
      },
      {
        id: 'item-4',
        question: 'Posso usare il mio tone of voice?',
        answer: 'Sì. Crei un profilo con esempi del tuo stile e le linee guida del brand. Verbalist genera seguendo quelle indicazioni.',
      },
      {
        id: 'item-5',
        question: 'Funziona anche per GEO?',
        answer: 'Sì. Strutturiamo i contenuti perché ChatGPT, Perplexity e Google AI Overview possano citarli nelle risposte.',
      },
    ],
  },
  en: {
    title: 'Frequently asked questions',
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
        answer: 'Yes. We generate every piece from scratch by analyzing the live search results for your keyword. No templates, no spinning.',
      },
      {
        id: 'item-4',
        question: 'Can I use my own tone of voice?',
        answer: 'Yes. You create a profile with examples of your style and brand guidelines. Verbalist generates following those instructions.',
      },
      {
        id: 'item-5',
        question: 'Does it work for GEO?',
        answer: 'Yes. We structure content so ChatGPT, Perplexity and Google AI Overview can cite it in their answers.',
      },
    ],
  },
} as const

export default function FAQs({ className, locale = 'it' }: FaqsProps) {
  const t = faqsContent[locale]

  return (
    <section className={cn('bg-background @container py-24 lg:py-32', className)}>
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-3xl font-medium tracking-tight sm:text-4xl">{t.title}</h2>
        <Accordion type="single" collapsible className="mt-12">
          {t.items.map((item) => (
            <div className="group" key={item.id}>
              <AccordionItem
                value={item.id}
                className="data-[state=open]:bg-muted/50 peer rounded-xl border-none px-5 py-1 transition-colors">
                <AccordionTrigger className="cursor-pointer py-4 text-sm font-medium hover:no-underline">{item.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground pb-2 text-sm">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
              <hr className="mx-5 group-last:hidden peer-data-[state=open]:opacity-0" />
            </div>
          ))}
        </Accordion>
        <p className="text-muted-foreground mt-8 text-center text-sm">
          {t.cta}{' '}
          <Link href={t.ctaLink} className="text-foreground font-medium hover:underline">
            {t.ctaLabel}
          </Link>
        </p>
      </div>
    </section>
  )
}

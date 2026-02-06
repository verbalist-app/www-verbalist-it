import Link from "next/link"
import type { Metadata } from "next"
import { FaqAccordion } from "@/components/faq-accordion"

export const metadata: Metadata = {
  title: "FAQ",
  description: "Domande frequenti su Verbalist. Come funziona, prezzi, modelli AI, integrazioni.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ — Verbalist",
    description: "Domande frequenti su Verbalist. Come funziona, prezzi, modelli AI, integrazioni.",
  },
}

const faqs = [
  {
    question: "Cos'è Verbalist?",
    answer: "Un tool che analizza i primi 10 risultati Google per la tua keyword, trova cosa li fa rankare e genera contenuti basati su quei pattern.",
  },
  {
    question: "Quali modelli AI usate?",
    answer: "Claude di Anthropic, GPT-4 di OpenAI e Gemini di Google. Puoi scegliere quale usare per ogni progetto.",
  },
  {
    question: "I contenuti sono unici?",
    answer: "Sì. Ogni contenuto viene generato da zero partendo dall'analisi SERP della tua keyword. Niente template o spinning.",
  },
  {
    question: "Posso usare il mio tone of voice?",
    answer: "Sì. Configuri un profilo con esempi del tuo stile e linee guida. Il sistema genera seguendo quelle indicazioni.",
  },
  {
    question: "Come funziona l'analisi SERP?",
    answer: "Prende i primi 10 risultati organici, scarica il contenuto di ogni pagina, analizza heading, lunghezza, argomenti e segnali E-E-A-T.",
  },
  {
    question: "Quanto costa?",
    answer: "Da €49/mese per freelancer a piani enterprise custom. 14 giorni di prova gratis su tutti i piani.",
  },
  {
    question: "Ci sono integrazioni?",
    answer: "Stiamo sviluppando API e integrazioni con i principali CMS. Scrivici per sapere di più.",
  },
  {
    question: "Funziona anche per GEO?",
    answer: "Sì. I contenuti sono strutturati per essere citati anche da ChatGPT, Perplexity e Google SGE.",
  },
]

export default function FaqPage() {
  return (
    <section className="pt-20 md:pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12">
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Supporto
          </p>
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Domande Frequenti
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            Le risposte alle domande più comuni.
          </p>
        </div>

        <FaqAccordion faqs={faqs} />

        <div className="mt-12 bg-muted rounded-xl p-8 border border-border text-center">
          <h3 className="text-lg font-medium mb-3">
            Non trovi quello che cerchi?
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            Scrivici e ti rispondiamo.
          </p>
          <Link
            href="/prenota-demo"
            className="inline-flex items-center gap-2 text-sm bg-foreground text-background px-6 py-3 rounded-lg hover:bg-foreground/90 transition-colors font-medium"
          >
            Contattaci
          </Link>
        </div>
      </div>
    </section>
  )
}

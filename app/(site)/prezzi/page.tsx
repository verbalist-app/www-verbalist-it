import Link from "next/link"
import type { Metadata } from "next"
import { Check, ArrowRight } from "lucide-react"
import { BreadcrumbSchema } from "@/components/schema"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Prezzi e Piani",
  description: "Verbalist: 300 crediti a 3.000 € + IVA. Crediti extra a 35 € cad. Prenota una demo per piani personalizzati.",
  alternates: {
    canonical: "/prezzi",
  },
  openGraph: {
    title: "Prezzi Strumento SEO \\ Verbalist",
    description: "Verbalist: 300 crediti a 3.000 € + IVA. Crediti extra a 35 € cad. Prenota una demo per piani personalizzati.",
  },
}

const features = [
  "Tutte le funzionalità della piattaforma",
  "Tutti i modelli AI (Claude, GPT-4, Gemini)",
  "Crediti extra acquistabili in qualsiasi momento",
  "Supporto dedicato via email",
]

export default function PrezziPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Prezzi", url: "/prezzi" },
        ]}
      />
      <section className="pt-20 md:pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Prezzi
            </p>
            <h1 className="font-serif text-3xl md:text-4xl font-medium tracking-tighter mb-4">
              Un piano, tutto incluso
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Accedi a tutte le funzionalità di Verbalist con un unico piano chiaro e trasparente.
            </p>
          </div>

          {/* Single plan card */}
          <div className="rounded-xl bg-foreground text-background ring-2 ring-foreground p-8 md:p-10 max-w-lg mx-auto">
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2 text-background">
                Verbalist
              </h3>
              <p className="text-sm text-background/70">
                Tutte le funzionalità della piattaforma
              </p>
            </div>

            <div className="mb-2">
              <span className="text-4xl font-medium text-background">
                3.000 €
              </span>
              <span className="text-sm text-background/70 ml-1">
                + IVA
              </span>
            </div>
            <p className="text-sm text-background/50 mb-6">
              fino a 300 crediti inclusi
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="size-5 shrink-0 text-background" />
                  <span className="text-sm text-background/80">{feature}</span>
                </li>
              ))}
            </ul>

            <Button asChild size="lg" className="w-full bg-background text-foreground hover:bg-background/90">
              <Link href="/prenota-demo">Prenota una demo</Link>
            </Button>

            <p className="text-xs text-background/50 text-center mt-4">
              *Ogni credito extra ha un costo aggiuntivo di 35,00 € cad.
            </p>
          </div>

          {/* How credits work */}
          <div className="mt-16 max-w-2xl mx-auto">
            <h2 className="text-xl font-medium tracking-tight text-center mb-3">
              Come funzionano i crediti
            </h2>
            <p className="text-sm text-muted-foreground text-center mb-8">
              Un credito = una keyword analizzata. Ogni analisi include: risultati Google, analisi competitor, pattern e generazione contenuto.
            </p>

            <div className="rounded-xl border bg-muted/40 p-6 md:p-8">
              <div className="grid grid-cols-3 gap-4 md:gap-6">
                {[
                  { type: "Blog post", credits: "~20", output: "~15 al mese" },
                  { type: "Pagina prodotto", credits: "~15", output: "~20 al mese" },
                  { type: "Guida completa", credits: "~30", output: "~10 al mese" },
                ].map((item) => (
                  <div key={item.type} className="text-center rounded-lg bg-background border p-4">
                    <p className="text-2xl font-medium tracking-tight">{item.credits}</p>
                    <p className="text-[11px] text-muted-foreground">crediti</p>
                    <p className="text-sm font-medium mt-3">{item.type}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.output}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground text-center mt-6 pt-4 border-t">
                Con 300 crediti puoi generare circa 15 blog post o 20 pagine prodotto al mese.
              </p>
            </div>
          </div>

          {/* CTA for custom plans */}
          <div className="mt-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <p className="text-sm text-muted-foreground">
              Servono più crediti o un piano personalizzato?
            </p>
            <Button asChild variant="outline" size="sm">
              <Link href="/prenota-demo">
                Richiedi un preventivo
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>

          {/* FAQ */}
          <div className="mt-20 max-w-2xl mx-auto">
            <h2 className="text-xl font-medium tracking-tight text-center mb-8">
              Domande frequenti
            </h2>
            <Accordion type="single" collapsible>
              <AccordionItem value="credits-exhausted">
                <AccordionTrigger className="text-sm font-medium" data-gtm="faq-accordion">
                  Cosa succede se esaurisco i crediti?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Puoi acquistare crediti extra a 35 € ciascuno in qualsiasi momento, senza dover cambiare piano.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="cancel">
                <AccordionTrigger className="text-sm font-medium" data-gtm="faq-accordion">
                  Posso disdire in qualsiasi momento?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Sì, puoi disdire quando vuoi. Il tuo accesso resta attivo fino alla fine del periodo di fatturazione.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="generation-time">
                <AccordionTrigger className="text-sm font-medium" data-gtm="faq-accordion">
                  Quanto tempo serve per generare un contenuto?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  In media 2-3 minuti. Verbalist analizza i risultati Google, estrae i pattern e genera il contenuto in automatico.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="unique-content">
                <AccordionTrigger className="text-sm font-medium" data-gtm="faq-accordion">
                  I contenuti generati sono unici?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Sì. Ogni contenuto è generato da zero sulla base dei pattern estratti dai risultati Google in tempo reale. Non è riscrittura né spinning.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </>
  )
}

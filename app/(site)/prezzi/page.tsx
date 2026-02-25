import Link from "next/link"
import type { Metadata } from "next"
import { Check, ArrowRight } from "lucide-react"
import { BreadcrumbSchema } from "@/components/schema"
import { Button } from "@/components/ui/button"

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
  "Fino a 300 crediti",
  "Analisi SERP avanzata",
  "Scraping competitor",
  "Analisi pattern",
  "Generazione contenuto AI",
  "Supporto dedicato",
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

          {/* CTA for custom plans */}
          <div className="mt-16 rounded-xl border border-border bg-muted/50 p-8 text-center">
            <p className="text-base font-medium mb-2">
              Servono più crediti o un piano personalizzato?
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Contattaci per un preventivo su misura per le esigenze del tuo team.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link href="/prenota-demo">
                Parliamone
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

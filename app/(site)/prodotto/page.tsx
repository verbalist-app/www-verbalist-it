import type { Metadata } from "next"
import { Package } from "lucide-react"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"

export const metadata: Metadata = {
  title: "Come Funziona",
  description:
    "Scopri come Verbalist analizza la SERP, estrae i pattern dai competitor e genera articoli SEO completi. 4 step automatizzati per contenuti che si posizionano.",
  alternates: {
    canonical: "/prodotto",
  },
  openGraph: {
    title: "Come Funziona — Verbalist",
    description:
      "Scopri come Verbalist analizza la SERP, estrae i pattern dai competitor e genera articoli SEO completi. 4 step automatizzati per contenuti che si posizionano.",
  },
}

export default function ProdottoPage() {
  return (
    <>
      <SubPageHero
        icon={Package}
        title="Verbalist"
        description="Genera contenuti ottimizzati per SEO, AEO, GEO e AI search analizzando i competitor che dominano Google."
      />

      <section className="border-t py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-16">
            <section>
              <h2 className="mb-6 text-2xl font-medium tracking-tight text-foreground">Cosa fa Verbalist</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Verbalist è un sistema automatizzato che analizza i competitor vincenti su Google e genera contenuti
                ottimizzati per competere nelle prime posizioni. Invece di indovinare cosa funziona, studia cosa
                effettivamente ranka e replica quei pattern.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Il sistema funziona per ogni tipo di ricerca: Google tradizionale (SEO), risposte dirette nei motori di
                ricerca (AEO), motori generativi (GEO) e assistenti AI come ChatGPT, Claude e Perplexity.
              </p>
            </section>

            <section>
              <h2 className="mb-6 text-2xl font-medium tracking-tight text-foreground">Come funziona</h2>
              <p className="mb-8 leading-relaxed text-muted-foreground">Il processo è completamente automatizzato:</p>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Analizza i competitor vincenti",
                    description: "Identifica chi ranka nelle prime posizioni Google per la tua keyword e perché",
                  },
                  {
                    step: "2",
                    title: "Estrae i pattern di successo",
                    description: "Studia struttura, topic, word count e segnali di autorevolezza dei top performer",
                  },
                  {
                    step: "3",
                    title: "Genera contenuto ottimizzato",
                    description: "Crea contenuto completo che replica e supera i pattern vincenti identificati",
                  },
                  {
                    step: "4",
                    title: "Ottimizza contenuti esistenti",
                    description: "Migliora articoli già pubblicati identificando gap e problemi prioritari",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-muted text-sm font-medium text-foreground">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-medium text-foreground">{item.title}</h3>
                      <p className="leading-relaxed text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-8 text-2xl font-medium tracking-tight text-foreground">Cosa ottieni</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: "Contenuto completo",
                    items: [
                      "Articolo completo ottimizzato",
                      "Title tag e meta description",
                      "Struttura heading ottimale",
                      "Pronto per pubblicare",
                    ],
                  },
                  {
                    title: "Ottimizzazione SEO, AEO, GEO, AI",
                    items: ["Ranking organico Google", "Featured snippets", "Motori generativi", "Assistenti AI"],
                  },
                ].map((section) => (
                  <div key={section.title} className="rounded-xl border border-border bg-card p-6">
                    <h3 className="mb-5 text-lg font-medium text-foreground">{section.title}</h3>
                    <ul className="space-y-3">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-muted-foreground">
                          <svg
                            className="mt-0.5 size-4 shrink-0 text-foreground"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      <SubPageCTA />
    </>
  )
}

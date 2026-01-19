import Image from "next/image"
import type { Metadata } from "next"
import { Cpu } from "lucide-react"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { TrustedBy } from "@/components/trusted-by"

export const metadata: Metadata = {
  title: "Tecnologia",
  description: "Claude, GPT-4, Gemini e DataForSEO: lo stack AI di Verbalist per analisi SERP e generazione contenuti SEO enterprise-grade.",
  alternates: {
    canonical: "/integrazioni",
  },
  openGraph: {
    title: "Tecnologia — Verbalist",
    description: "Claude, GPT-4, Gemini e DataForSEO: lo stack AI di Verbalist per analisi SERP e generazione contenuti SEO enterprise-grade.",
  },
}

export default function IntegrazioniPage() {
  return (
    <>
      <SubPageHero
        icon={Cpu}
        title="Tecnologia"
        description="Verbalist si integra con le migliori piattaforme e tecnologie per garantire risultati di qualità enterprise-grade."
      />

      <TrustedBy />

      <section className="border-t py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-16">
            <section>
              <h2 className="text-xl font-medium tracking-tight text-foreground mb-6">Modelli di linguaggio (LLM)</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Claude (Anthropic)",
                    logo: "/logos/claude.svg",
                    description: "Ideale per analisi complesse e generazione di contenuti lunghi",
                    useCase: "Analisi SERP, generazione contenuti",
                  },
                  {
                    name: "GPT-4 (OpenAI)",
                    logo: "/logos/gpt-4.svg",
                    description: "Eccellente per task creativi e ottimizzazione contenuti",
                    useCase: "Generazione, ottimizzazione",
                  },
                  {
                    name: "Gemini (Google)",
                    logo: "/logos/gemini.svg",
                    description: "Ottimizzato per analisi dati e pattern recognition",
                    useCase: "Analisi SERP, pattern extraction",
                  },
                ].map((llm) => (
                  <div key={llm.name} className="bg-muted rounded-lg p-6 border border-border">
                    <div className="mb-5">
                      <Image
                        src={llm.logo}
                        alt={llm.name}
                        width={100}
                        height={32}
                        className="h-6 w-auto"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{llm.description}</p>
                    <div className="text-[13px] text-muted-foreground">
                      <span className="font-medium">Uso:</span> {llm.useCase}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-medium tracking-tight text-foreground mb-6">API e servizi esterni</h2>
              <div className="space-y-4">
                {[
                  {
                    name: "DataForSEO API v3",
                    description: "Fornisce dati SERP in tempo reale tramite endpoint /serp/google/organic/live/advanced. Recupera top 10 risultati organici con metadata completi (title, description, rank, URL).",
                    category: "Dati SERP",
                    features: [
                      "Filtraggio automatico domini esclusi (Wikipedia, social, aggregatori)",
                      "Supporto desktop/mobile con configurazione OS",
                      "Gestione paginazione SERP configurabile",
                      "Estrazione rank_group e rank_absolute per ogni risultato",
                    ],
                  },
                  {
                    name: "StealthScriber Service",
                    description: "Servizio di web scraping avanzato che converte HTML in Markdown strutturato. Gestisce JavaScript rendering, timeout configurabili e rotazione headers.",
                    category: "Web Scraping",
                    features: [
                      "Conversione HTML → Markdown ottimizzata per LLM",
                      "Gestione JavaScript rendering quando necessario",
                      "Timeout e retry configurabili",
                      "Estrazione metadata: status code, processing time",
                    ],
                  },
                  {
                    name: "Google Ads API",
                    description: "Integrazione pianificata per dati volume ricerca direttamente da Google",
                    category: "Keyword Research",
                    comingSoon: true,
                  },
                ].map((api) => (
                  <div key={api.name} className="bg-background border border-border rounded-lg p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-[16px] font-medium text-foreground">{api.name}</h3>
                          {api.comingSoon && (
                            <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">
                              In arrivo
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{api.description}</p>
                        <div className="text-[13px] text-muted-foreground mb-3">
                          <span className="font-medium">Categoria:</span> {api.category}
                        </div>
                        {api.features && (
                          <div className="mt-4 pt-4 border-t border-border">
                            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                              Caratteristiche
                            </div>
                            <ul className="space-y-1">
                              {api.features.map((feature, idx) => (
                                <li key={idx} className="text-[13px] text-foreground/80 flex items-start gap-2">
                                  <span className="text-muted-foreground mt-1">•</span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
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

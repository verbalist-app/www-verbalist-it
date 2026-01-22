import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Struttura heading",
  description: "Analizzare e replicare la struttura H1-H6 dei competitor.",
}

export default function HeadingPage() {
  return (
    <article className="pt-20 md:pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/guide/pattern"
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Analisi Pattern
          </Link>

          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Struttura heading
          </h1>
          <p className="text-muted-foreground mb-8">
            Gli heading definiscono la struttura del contenuto. Verbalist analizza come i competitor organizzano le informazioni.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">H1: il titolo principale</h2>
            <p className="text-foreground/80 mb-4">
              Verbalist analizza i pattern degli H1: lunghezza media, presenza keyword, formato (domanda, how-to, lista). Il tuo H1 dovrebbe seguire il pattern vincente.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">H2: le sezioni principali</h2>
            <p className="text-foreground/80 mb-4">
              Gli H2 definiscono le macro-sezioni. Il sistema identifica H2 ricorrenti tra i competitor. Se tutti hanno un H2 "Come funziona", probabilmente ti serve.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">H3-H6: la gerarchia</h2>
            <p className="text-foreground/80 mb-4">
              L'analisi mostra quanto profonda è la gerarchia tipica. Alcuni topic richiedono molti livelli (guide tecniche), altri restano piatti (articoli di opinione).
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Numero heading</h2>
            <p className="text-foreground/80 mb-4">
              Verbalist calcola il numero medio di heading per livello. Contenuti con 15 H2 e 40 H3 richiedono più struttura di quelli con 5 H2 e 10 H3.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Ordine delle sezioni</h2>
            <p className="text-foreground/80 mb-4">
              L'ordine conta. Se i competitor mettono "Prerequisiti" prima di "Installazione", c'è un motivo. Verbalist suggerisce un ordine basato sui pattern rilevati.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Heading semantici</h2>
            <p className="text-foreground/80 mb-4">
              L'analisi rileva heading che rispondono a domande specifiche ("Quanto costa?", "Come iniziare?"). Questi heading intercettano query correlate e featured snippet.
            </p>
          </div>
        </div>
    </article>
  )
}

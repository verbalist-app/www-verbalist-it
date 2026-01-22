import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Esportare in Markdown",
  description: "Come esportare i contenuti estratti in formato Markdown per uso esterno.",
}

export default function ExportPage() {
  return (
    <article className="pt-20 md:pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/guide/scraping"
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Scraping Competitor
          </Link>

          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Esportare in Markdown
          </h1>
          <p className="text-muted-foreground mb-8">
            Scarica i contenuti dei competitor in formato Markdown per analisi o riferimento.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">Esportazione singola</h2>
            <p className="text-foreground/80 mb-4">
              Dalla vista di un singolo competitor, clicca su "Esporta" e seleziona "Markdown". Il file conterrà il contenuto pulito con la struttura heading preservata.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Esportazione batch</h2>
            <p className="text-foreground/80 mb-4">
              Puoi esportare tutti i competitor in un unico archivio ZIP. Dalla lista dei risultati, seleziona i competitor desiderati e clicca su "Esporta selezionati".
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Formato del file</h2>
            <p className="text-foreground/80 mb-4">
              Ogni file Markdown include: titolo originale, URL di origine, data di estrazione, e il contenuto completo con heading (H1-H6), paragrafi, liste e tabelle.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Altri formati</h2>
            <p className="text-foreground/80 mb-4">
              Oltre a Markdown, puoi esportare in: plain text (senza formattazione), JSON (dati strutturati) e HTML (formattazione preservata).
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Uso consigliato</h2>
            <p className="text-foreground/80 mb-4">
              I file Markdown esportati sono utili per: analisi manuale dei competitor, creazione di brief per writer, riferimento durante la scrittura, archivio storico dei contenuti competitor.
            </p>
          </div>
        </div>
    </article>
  )
}

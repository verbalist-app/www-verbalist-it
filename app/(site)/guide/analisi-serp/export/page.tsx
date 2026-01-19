import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Esportare i dati SERP",
  description: "Scaricare i dati SERP in CSV o JSON per analisi esterne.",
}

export default function ExportPage() {
  return (
    <article className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/guide/analisi-serp"
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Analisi SERP
          </Link>

          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Esportare i dati SERP
          </h1>
          <p className="text-muted-foreground mb-8">
            Scarica i dati estratti per usarli in altri strumenti o per analisi personalizzate.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">Formati disponibili</h2>
            <p className="text-foreground/80 mb-4">
              Verbalist permette di esportare in CSV (per Excel, Google Sheets) e JSON (per sviluppatori e integrazioni). Scegli il formato in base a come userai i dati.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Export CSV</h2>
            <p className="text-foreground/80 mb-4">
              Il CSV include: posizione, URL, title, meta description, word count, numero heading. Puoi aprirlo in qualsiasi spreadsheet per analisi, grafici o report.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Export JSON</h2>
            <p className="text-foreground/80 mb-4">
              Il JSON include tutti i dati strutturati: metadati SERP, contenuti completi, struttura heading, analisi pattern. Utile per integrazioni con altri tool o analisi programmatiche.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Contenuti completi</h2>
            <p className="text-foreground/80 mb-4">
              Puoi esportare anche i contenuti Markdown estratti da ogni pagina. Utile per analisi manuali approfondite o per alimentare altri strumenti AI.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Come esportare</h2>
            <p className="text-foreground/80 mb-4">
              Dopo l'analisi, clicca sul pulsante Export nella toolbar. Seleziona formato e dati da includere. Il file viene scaricato immediatamente.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Uso dei dati esportati</h2>
            <p className="text-foreground/80 mb-4">
              Puoi usare i dati per: creare report per clienti, alimentare dashboard personalizzate, integrare con tool SEO esistenti, archiviare analisi storiche per confronti futuri.
            </p>
          </div>
        </div>
    </article>
  )
}

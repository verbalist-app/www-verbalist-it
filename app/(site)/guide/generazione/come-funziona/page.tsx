import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Come funziona la generazione",
  description: "Il processo di creazione contenuti basato sui pattern estratti.",
}

export default function ComeFunzionaPage() {
  return (
    <article className="pt-20 md:pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/guide/generazione"
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Generazione Contenuto
          </Link>

          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Come funziona la generazione
          </h1>
          <p className="text-muted-foreground mb-8">
            Verbalist usa i pattern estratti per generare contenuto ottimizzato.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">Input: i pattern</h2>
            <p className="text-foreground/80 mb-4">
              La generazione parte dai pattern estratti: word count target, struttura heading, topic da coprire, segnali E-E-A-T. Questi dati definiscono le specifiche del contenuto.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Costruzione del prompt</h2>
            <p className="text-foreground/80 mb-4">
              Verbalist costruisce un prompt dettagliato per il modello AI, includendo: keyword target, pattern rilevati, tone of voice, istruzioni specifiche. Il prompt è ottimizzato per output SEO-friendly.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Generazione strutturata</h2>
            <p className="text-foreground/80 mb-4">
              Il contenuto viene generato seguendo la struttura heading identificata. Prima il title, poi ogni sezione H2 con relativi H3. Questo garantisce copertura completa dei topic.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Ottimizzazione SEO</h2>
            <p className="text-foreground/80 mb-4">
              Durante la generazione vengono applicati principi SEO: keyword nel title e heading, meta description accattivante, alt text per immagini suggerite, internal linking opportunities.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Segnali E-E-A-T</h2>
            <p className="text-foreground/80 mb-4">
              Il sistema inserisce placeholder per segnali E-E-A-T: spazi per esperienze personali, suggerimenti di fonti da citare, punti dove aggiungere dati e statistiche.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Output finale</h2>
            <p className="text-foreground/80 mb-4">
              Il risultato è un contenuto completo in Markdown: title, meta description, corpo strutturato con heading, pronto per la revisione e pubblicazione.
            </p>
          </div>
        </div>
    </article>
  )
}

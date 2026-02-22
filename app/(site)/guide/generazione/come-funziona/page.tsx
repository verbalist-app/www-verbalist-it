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
            <ArrowLeft className="size-4" style={{ color: '#473424' }} />
            Generazione Contenuto
          </Link>

          <h1 className="font-serif text-3xl md:text-4xl font-medium tracking-tighter mb-4">
            Come funziona la generazione
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8">
            Verbalist usa i pattern estratti per generare contenuto ottimizzato.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-sm font-medium text-foreground mb-2">Input: i pattern</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              La generazione parte dai pattern estratti: word count target, struttura heading, topic da coprire, segnali E-E-A-T. Questi dati definiscono le specifiche del contenuto.
            </p>

            <h2 className="text-sm font-medium text-foreground mb-2">Costruzione del prompt</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Verbalist costruisce un prompt dettagliato per il modello AI, includendo: keyword target, pattern rilevati, tone of voice, istruzioni specifiche. Il prompt è ottimizzato per output SEO-friendly.
            </p>

            <h2 className="text-sm font-medium text-foreground mb-2">Generazione strutturata</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Il contenuto viene generato seguendo la struttura heading identificata. Prima il title, poi ogni sezione H2 con relativi H3. Questo garantisce copertura completa dei topic.
            </p>

            <h2 className="text-sm font-medium text-foreground mb-2">Ottimizzazione SEO</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Durante la generazione vengono applicati principi SEO: keyword nel title e heading, meta description accattivante, alt text per immagini suggerite, internal linking opportunities.
            </p>

            <h2 className="text-sm font-medium text-foreground mb-2">Segnali E-E-A-T</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Il sistema inserisce placeholder per segnali E-E-A-T: spazi per esperienze personali, suggerimenti di fonti da citare, punti dove aggiungere dati e statistiche.
            </p>

            <h2 className="text-sm font-medium text-foreground mb-2">Output finale</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Il risultato è un contenuto completo in Markdown: title, meta description, corpo strutturato con heading, pronto per la revisione e pubblicazione.
            </p>
          </div>
        </div>
    </article>
  )
}

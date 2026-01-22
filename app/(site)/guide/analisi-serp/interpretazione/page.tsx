import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Interpretare i dati SERP",
  description: "Come leggere e interpretare i dati estratti dall'analisi SERP di Verbalist.",
}

export default function InterpretazionePage() {
  return (
    <article className="pt-20 md:pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/guide/analisi-serp"
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Analisi SERP
          </Link>

          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Interpretare i dati SERP
          </h1>
          <p className="text-muted-foreground mb-8">
            Guida alla lettura dei dati estratti dall'analisi SERP.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">Posizione e visibilità</h2>
            <p className="text-foreground/80 mb-4">
              Ogni risultato mostra la posizione in SERP (1-10). Le prime 3 posizioni catturano circa il 60% dei click. Analizza cosa hanno in comune i contenuti nelle top 3.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Title e meta description</h2>
            <p className="text-foreground/80 mb-4">
              Verbalist estrae title e meta description di ogni risultato. Osserva i pattern: lunghezza, presenza della keyword, call-to-action, numeri e date.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Tipo di contenuto</h2>
            <p className="text-foreground/80 mb-4">
              Il sistema identifica il tipo di contenuto dominante: guide, listicle, how-to, pagine prodotto, recensioni. Questo ti dice quale formato preferisce Google per quella query.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Search intent</h2>
            <p className="text-foreground/80 mb-4">
              L'analisi rileva l'intento di ricerca prevalente: informational, commercial, transactional o navigational. Allinea il tuo contenuto all'intento dominante.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Domain authority</h2>
            <p className="text-foreground/80 mb-4">
              Vedrai indicatori sulla forza dei domini in SERP. Se i top 10 sono tutti siti ad alta autorità, potrebbe essere una keyword competitiva che richiede più tempo per rankare.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Feature SERP</h2>
            <p className="text-foreground/80 mb-4">
              Verbalist identifica le feature SERP presenti: featured snippet, People Also Ask, video, immagini. Queste rappresentano opportunità aggiuntive di visibilità.
            </p>
          </div>
        </div>
    </article>
  )
}

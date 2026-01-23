import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Analisi competitor",
  description: "Confrontare i competitor e identificare opportunità nella SERP.",
}

export default function CompetitorPage() {
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
            Analisi competitor
          </h1>
          <p className="text-muted-foreground mb-8">
            Come usare i dati SERP per capire cosa fanno i competitor e dove puoi fare meglio.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">Identificare i competitor reali</h2>
            <p className="text-foreground/80 mb-4">
              I competitor nella SERP non sono sempre quelli che pensi. Grandi portali, Wikipedia, forum possono occupare posizioni. Concentrati sui competitor diretti che producono contenuto simile al tuo.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Analizzare i title tag</h2>
            <p className="text-foreground/80 mb-4">
              Guarda i title dei top 3. Quali keyword includono? Che formato usano? (guida, lista, how-to). I title in prima pagina ti indicano cosa funziona per quella query.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Studiare la struttura</h2>
            <p className="text-foreground/80 mb-4">
              Verbalist estrae la struttura heading di ogni competitor. Confronta le strutture: quali sezioni sono comuni? Quali argomenti coprono tutti? Questi sono requisiti minimi per rankare.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Trovare i gap</h2>
            <p className="text-foreground/80 mb-4">
              Cerca argomenti che pochi competitor coprono ma che sono rilevanti per la query. Questi gap sono opportunità: puoi differenziarti coprendo ciò che altri ignorano.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Valutare la qualità</h2>
            <p className="text-foreground/80 mb-4">
              Non tutti i contenuti in prima pagina sono eccellenti. Leggi i contenuti dei competitor e valuta: sono aggiornati? Completi? Ben scritti? Se la qualità è bassa, hai spazio per fare meglio.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Benchmark di lunghezza</h2>
            <p className="text-foreground/80 mb-4">
              Il word count medio ti dice quanto contenuto aspettarti. Se i competitor scrivono 2000 parole, 500 parole probabilmente non basteranno. Usa il benchmark come riferimento, non come regola fissa.
            </p>
          </div>
        </div>
    </article>
  )
}

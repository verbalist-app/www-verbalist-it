import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Come funziona il pattern detection",
  description: "Il processo di identificazione dei pattern nei contenuti top performer.",
}

export default function ComeFunzionaPage() {
  return (
    <article className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/guide/pattern"
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Analisi Pattern
          </Link>

          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Come funziona il pattern detection
          </h1>
          <p className="text-muted-foreground mb-8">
            Verbalist analizza i contenuti estratti per identificare cosa hanno in comune i top performer.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">Analisi comparativa</h2>
            <p className="text-foreground/80 mb-4">
              Il sistema confronta tutti i contenuti estratti cercando elementi ricorrenti. Se 8 su 10 competitor hanno una sezione FAQ, quella è un pattern.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Metriche quantitative</h2>
            <p className="text-foreground/80 mb-4">
              Vengono calcolate metriche precise: word count medio, numero heading, rapporto testo/immagini, densità keyword. Questi numeri definiscono il benchmark.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Struttura heading</h2>
            <p className="text-foreground/80 mb-4">
              L'analisi mappa la struttura H1-H6 di ogni contenuto. Identifica heading comuni, ordine tipico delle sezioni, profondità della gerarchia.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Topic extraction</h2>
            <p className="text-foreground/80 mb-4">
              Algoritmi NLP identificano gli argomenti trattati in ogni contenuto. Gli argomenti più frequenti diventano requisiti per il tuo contenuto.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Segnali E-E-A-T</h2>
            <p className="text-foreground/80 mb-4">
              Il sistema rileva segnali di Experience, Expertise, Authoritativeness, Trustworthiness: citazioni, credenziali, dati, esperienze dirette.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Output del pattern detection</h2>
            <p className="text-foreground/80 mb-4">
              Il risultato è un profilo completo: lunghezza target, struttura consigliata, topic da coprire, segnali da includere. Questo profilo guida la generazione del contenuto.
            </p>
          </div>
        </div>
    </article>
  )
}

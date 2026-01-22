import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Content gap analysis",
  description: "Trovare opportunità non coperte dai competitor.",
}

export default function ContentGapPage() {
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
            Content gap analysis
          </h1>
          <p className="text-muted-foreground mb-8">
            Identifica cosa manca nei contenuti competitor per differenziarti.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">Cos'è un content gap</h2>
            <p className="text-foreground/80 mb-4">
              Un content gap è un argomento o aspetto rilevante per la query che nessuno o pochi competitor coprono adeguatamente. Colmare questi gap ti dà un vantaggio competitivo.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Gap di profondità</h2>
            <p className="text-foreground/80 mb-4">
              I competitor trattano un topic ma superficialmente. Puoi differenziarti andando più in profondità: più dettagli, più esempi, più casi d'uso.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Gap di aggiornamento</h2>
            <p className="text-foreground/80 mb-4">
              Contenuti datati sono un'opportunità. Se i competitor hanno informazioni vecchie (prezzi, feature, statistiche), un contenuto aggiornato ha un vantaggio.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Gap di formato</h2>
            <p className="text-foreground/80 mb-4">
              Se tutti scrivono muri di testo, puoi differenziarti con tabelle comparative, infografiche, video embed. Il formato giusto può migliorare engagement e ranking.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Gap di esperienza</h2>
            <p className="text-foreground/80 mb-4">
              Manca esperienza diretta nei contenuti competitor? Aggiungi la tua: test personali, case study, risultati misurati. Questo attiva i segnali E-E-A-T.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Come Verbalist identifica i gap</h2>
            <p className="text-foreground/80 mb-4">
              Il sistema confronta topic e profondità tra competitor, segnalando aree con copertura debole o assente. Usa questi suggerimenti per pianificare contenuto differenziante.
            </p>
          </div>
        </div>
    </article>
  )
}

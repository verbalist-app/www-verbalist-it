import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Parametri avanzati",
  description: "Temperatura, lunghezza, focus e altre opzioni di generazione.",
}

export default function ParametriPage() {
  return (
    <article className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/guide/generazione"
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Generazione Contenuto
          </Link>

          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Parametri avanzati
          </h1>
          <p className="text-muted-foreground mb-8">
            Personalizza la generazione per ottenere esattamente il contenuto che vuoi.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">Temperatura</h2>
            <p className="text-foreground/80 mb-4">
              Controlla la creatività del modello. Bassa (0.3-0.5): output più prevedibile e aderente ai pattern. Alta (0.7-0.9): più creatività e variazione. Per SEO, valori medi (0.5-0.7) funzionano bene.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Lunghezza target</h2>
            <p className="text-foreground/80 mb-4">
              Puoi specificare un word count target o lasciare che Verbalist usi il benchmark dai pattern. Se i competitor scrivono 2000 parole, il default sarà circa 2000.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Focus keyword</h2>
            <p className="text-foreground/80 mb-4">
              La keyword principale per cui stai ottimizzando. Verbalist la include naturalmente nel title, H1, e nel corpo del testo senza keyword stuffing.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Keyword secondarie</h2>
            <p className="text-foreground/80 mb-4">
              Aggiungi keyword correlate da includere. Il sistema le integra dove ha senso semanticamente, migliorando la rilevanza per query correlate.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Esclusioni</h2>
            <p className="text-foreground/80 mb-4">
              Specifica topic, frasi o competitor da non menzionare. Utile se vuoi evitare di citare brand specifici o argomenti non pertinenti.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Istruzioni custom</h2>
            <p className="text-foreground/80 mb-4">
              Campo libero per istruzioni aggiuntive: "includi una tabella comparativa", "aggiungi una sezione FAQ", "usa esempi dal settore X". Verbalist integra queste istruzioni nel prompt.
            </p>
          </div>
        </div>
    </article>
  )
}

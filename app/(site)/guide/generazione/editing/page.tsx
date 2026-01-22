import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Editing e revisione",
  description: "Modificare e perfezionare il contenuto generato.",
}

export default function EditingPage() {
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
            Editing e revisione
          </h1>
          <p className="text-muted-foreground mb-8">
            Il contenuto generato è un punto di partenza. L'editing lo trasforma in contenuto eccellente.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">Editor integrato</h2>
            <p className="text-foreground/80 mb-4">
              Verbalist include un editor Markdown con preview in tempo reale. Puoi modificare il contenuto direttamente nell'interfaccia senza esportare.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Aggiungi esperienza personale</h2>
            <p className="text-foreground/80 mb-4">
              Cerca i placeholder [ESPERIENZA] nel testo. Sostituiscili con le tue esperienze reali: test effettuati, risultati ottenuti, lezioni apprese. Questo attiva i segnali E-E-A-T.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Inserisci fonti</h2>
            <p className="text-foreground/80 mb-4">
              Trova i placeholder [FONTE] e sostituiscili con link a fonti autorevoli: studi, statistiche ufficiali, documentazione. Le citazioni aumentano credibilità e trust.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Adatta il tono</h2>
            <p className="text-foreground/80 mb-4">
              Se il tono non è perfetto, modifica le frasi che suonano artificiali. Aggiungi il tuo stile personale. Il contenuto deve sembrare scritto da te.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Verifica i fatti</h2>
            <p className="text-foreground/80 mb-4">
              I modelli AI possono generare informazioni imprecise. Verifica dati, statistiche, nomi, date. Correggi eventuali errori prima di pubblicare.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Revisione SEO</h2>
            <p className="text-foreground/80 mb-4">
              Controlla: keyword nel title e H1, meta description sotto 160 caratteri, heading che rispondono a domande, link interni dove appropriato.
            </p>
          </div>
        </div>
    </article>
  )
}

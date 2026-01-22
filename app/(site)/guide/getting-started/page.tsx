import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Come iniziare con Verbalist",
  description: "Guida introduttiva a Verbalist. Impara a creare il tuo primo progetto e generare contenuti ottimizzati.",
}

export default function GettingStartedPage() {
  return (
    <article className="pt-20 md:pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/guide"
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Torna alle guide
          </Link>

          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Come iniziare con Verbalist
          </h1>
          <p className="text-base text-muted-foreground mb-8">
            Guida passo-passo per creare il tuo primo contenuto ottimizzato.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">1. Crea un progetto</h2>
            <p className="text-foreground/80 mb-4">
              Dopo aver effettuato l'accesso, clicca su "Nuovo progetto" dalla dashboard. Dai un nome al progetto e seleziona la lingua target.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">2. Inserisci la keyword</h2>
            <p className="text-foreground/80 mb-4">
              Inserisci la keyword principale per cui vuoi posizionarti. Verbalist analizzerà i primi 10 risultati organici su Google per quella keyword.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">3. Analizza la SERP</h2>
            <p className="text-foreground/80 mb-4">
              Clicca su "Analizza SERP". Il sistema recupererà i top 10 risultati, estrarrà i contenuti e identificherà i pattern vincenti: struttura heading, word count, topic coverage e segnali E-E-A-T.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">4. Rivedi i pattern</h2>
            <p className="text-foreground/80 mb-4">
              Nella scheda "Pattern" vedrai un riepilogo di cosa hanno in comune i contenuti che rankano: lunghezza media, struttura degli heading, argomenti trattati e segnali di autorevolezza.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">5. Genera il contenuto</h2>
            <p className="text-foreground/80 mb-4">
              Configura i parametri di generazione (tone of voice, lunghezza target, focus specifici) e clicca su "Genera". Verbalist produrrà un contenuto completo: titolo, meta description, struttura heading e corpo del testo.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">6. Esporta e pubblica</h2>
            <p className="text-foreground/80 mb-4">
              Rivedi il contenuto generato, apporta eventuali modifiche e esportalo in Markdown, HTML o testo semplice. Pronto per la pubblicazione.
            </p>
          </div>
        </div>
    </article>
  )
}

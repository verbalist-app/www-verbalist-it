import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Come funziona l'analisi SERP",
  description: "Il processo di estrazione e analisi dei top 10 risultati Google.",
}

export default function ComeFunzionaPage() {
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
            Come funziona l'analisi SERP
          </h1>
          <p className="text-muted-foreground mb-8">
            Il processo che Verbalist usa per estrarre e analizzare i risultati Google.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">1. Inserisci la keyword</h2>
            <p className="text-foreground/80 mb-4">
              Digita la keyword target nel campo di ricerca. Puoi usare keyword singole o long-tail. Più specifica la keyword, più precisi i pattern estratti.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">2. Selezione parametri</h2>
            <p className="text-foreground/80 mb-4">
              Scegli paese e lingua per la ricerca. Google restituisce risultati diversi in base alla localizzazione. Seleziona i parametri che corrispondono al tuo target.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">3. Query a Google</h2>
            <p className="text-foreground/80 mb-4">
              Verbalist esegue una ricerca Google con i parametri selezionati e raccoglie i primi 10 risultati organici. Vengono ignorati annunci, featured snippet e altri elementi non organici.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">4. Estrazione dati base</h2>
            <p className="text-foreground/80 mb-4">
              Per ogni risultato viene estratto: posizione, URL, title tag, meta description. Questi dati appaiono nella tabella risultati.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">5. Scraping contenuto</h2>
            <p className="text-foreground/80 mb-4">
              Verbalist visita ogni URL ed estrae il contenuto completo della pagina. Il contenuto viene pulito da elementi non rilevanti (navigazione, sidebar, footer) e convertito in Markdown.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">6. Analisi pattern</h2>
            <p className="text-foreground/80 mb-4">
              Il sistema analizza tutti i contenuti estratti per identificare pattern comuni: word count medio, struttura heading, topic ricorrenti, segnali E-E-A-T.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Tempo di elaborazione</h2>
            <p className="text-foreground/80 mb-4">
              L'analisi completa richiede 30-60 secondi. Il tempo varia in base alla velocità dei siti analizzati e alla quantità di contenuto da processare.
            </p>
          </div>
        </div>
    </article>
  )
}

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Come funziona lo scraping",
  description: "Il processo di estrazione contenuti dalle pagine competitor.",
}

export default function ComeFunzionaPage() {
  return (
    <article className="pt-20 md:pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/guide/scraping"
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Scraping Competitor
          </Link>

          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Come funziona lo scraping
          </h1>
          <p className="text-muted-foreground mb-8">
            Il processo che Verbalist usa per estrarre i contenuti dalle pagine competitor.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">Visita automatica</h2>
            <p className="text-foreground/80 mb-4">
              Verbalist visita automaticamente ogni URL nei top 10. Il sistema simula un browser reale per accedere ai contenuti come li vedrebbe un utente.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Estrazione HTML</h2>
            <p className="text-foreground/80 mb-4">
              Il codice HTML completo della pagina viene estratto, inclusi tutti gli elementi: testo, heading, liste, tabelle, immagini (alt text).
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Pulizia contenuto</h2>
            <p className="text-foreground/80 mb-4">
              Il sistema rimuove elementi non rilevanti per l'analisi: navigazione, header/footer del sito, sidebar, widget, pubblicità, popup. Resta solo il contenuto principale.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Identificazione contenuto principale</h2>
            <p className="text-foreground/80 mb-4">
              Algoritmi di content extraction identificano il &quot;main content&quot; della pagina, distinguendolo da elementi accessori. Questo garantisce che l'analisi si concentri sul contenuto reale.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Conversione Markdown</h2>
            <p className="text-foreground/80 mb-4">
              L'HTML pulito viene convertito in Markdown strutturato, preservando: gerarchia heading (H1-H6), formattazione (grassetto, corsivo), liste, link, tabelle.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Gestione errori</h2>
            <p className="text-foreground/80 mb-4">
              Se una pagina non è accessibile (404, timeout, protezioni), Verbalist la salta e continua con le altre. L'analisi procede con i contenuti disponibili.
            </p>
          </div>
        </div>
    </article>
  )
}

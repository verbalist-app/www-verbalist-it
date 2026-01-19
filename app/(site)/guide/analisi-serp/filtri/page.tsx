import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Filtri e opzioni avanzate",
  description: "Personalizzare l'analisi SERP con filtri geografici e di lingua.",
}

export default function FiltriPage() {
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
            Filtri e opzioni avanzate
          </h1>
          <p className="text-muted-foreground mb-8">
            Configura l'analisi per ottenere risultati rilevanti per il tuo mercato.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">Paese</h2>
            <p className="text-foreground/80 mb-4">
              Seleziona il paese target. Google mostra risultati diversi in base alla geolocalizzazione. Se targetti il mercato italiano, seleziona Italia. Per mercati esteri, scegli il paese corrispondente.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Lingua</h2>
            <p className="text-foreground/80 mb-4">
              Imposta la lingua dei risultati. Di solito corrisponde al paese, ma puoi cercare contenuti in inglese targettando l'Italia o viceversa.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Device</h2>
            <p className="text-foreground/80 mb-4">
              Scegli tra desktop e mobile. Le SERP possono variare significativamente tra i due. Se il tuo traffico è principalmente mobile, analizza la SERP mobile.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Numero risultati</h2>
            <p className="text-foreground/80 mb-4">
              Di default Verbalist analizza i top 10. Puoi ridurre a 5 per analisi più veloci o espandere a 20 per un dataset più ampio. Più risultati significa più dati ma tempi più lunghi.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Escludi domini</h2>
            <p className="text-foreground/80 mb-4">
              Puoi escludere specifici domini dall'analisi. Utile per escludere il tuo sito (se già ranki) o grandi portali che non sono competitor diretti.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Quando usare filtri avanzati</h2>
            <p className="text-foreground/80 mb-4">
              Per la maggior parte delle analisi, i filtri di default sono sufficienti. Usa filtri avanzati quando targetti mercati esteri, quando vuoi analisi più approfondite, o quando devi escludere risultati non rilevanti.
            </p>
          </div>
        </div>
    </article>
  )
}

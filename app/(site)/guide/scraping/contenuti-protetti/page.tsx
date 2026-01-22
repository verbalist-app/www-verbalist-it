import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gestire contenuti protetti",
  description: "Cosa fare quando un sito blocca lo scraping.",
}

export default function ContenutiProtettiPage() {
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
            Gestire contenuti protetti
          </h1>
          <p className="text-muted-foreground mb-8">
            Alcune pagine bloccano l'accesso automatico. Ecco come gestire questi casi.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">Perché alcune pagine non sono accessibili</h2>
            <p className="text-foreground/80 mb-4">
              Alcuni siti usano protezioni anti-bot, paywall, login obbligatorio o blocchi geografici. Verbalist non può accedere a questi contenuti automaticamente.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Come riconoscere il problema</h2>
            <p className="text-foreground/80 mb-4">
              Nella lista risultati, le pagine non accessibili mostrano un avviso. Il contenuto estratto sarà vuoto o parziale. Puoi vedere quali pagine hanno avuto problemi.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">L'analisi continua comunque</h2>
            <p className="text-foreground/80 mb-4">
              Verbalist procede con le pagine accessibili. Se 2 su 10 sono bloccate, l'analisi si basa sulle 8 disponibili. I pattern restano affidabili se la maggioranza dei contenuti è estratta.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Aggiungere contenuto manualmente</h2>
            <p className="text-foreground/80 mb-4">
              Per pagine importanti bloccate, puoi copiare il contenuto manualmente e incollarlo in Verbalist. Il sistema lo includerà nell'analisi pattern.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Pagine con JavaScript pesante</h2>
            <p className="text-foreground/80 mb-4">
              Alcune pagine caricano contenuto via JavaScript complesso (SPA, lazy loading estremo). Verbalist gestisce la maggior parte dei casi, ma pagine molto dinamiche possono risultare parziali.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Escludere dalla keyword</h2>
            <p className="text-foreground/80 mb-4">
              Se una pagina bloccata non è un competitor diretto (es. un grande portale con paywall), puoi escluderla dall'analisi nelle impostazioni e concentrarti sui competitor accessibili.
            </p>
          </div>
        </div>
    </article>
  )
}

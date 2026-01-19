import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ottimizzare il word count",
  description: "Come trovare la lunghezza ideale per i tuoi contenuti basandoti sui top performer.",
}

export default function WordCountPage() {
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
            Ottimizzare il word count
          </h1>
          <p className="text-muted-foreground mb-8">
            Trova la lunghezza ideale analizzando i contenuti che già performano.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">Perché il word count conta</h2>
            <p className="text-foreground/80 mb-4">
              Non esiste una lunghezza "giusta" universale. La lunghezza ideale dipende dalla query, dall'intento di ricerca e da cosa Google sta già premiando per quella keyword specifica.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Leggere i dati</h2>
            <p className="text-foreground/80 mb-4">
              Verbalist mostra: word count medio dei top 10, range (minimo-massimo), mediana e distribuzione. Il range ti dà flessibilità, la mediana ti dà il target più sicuro.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Interpretare i pattern</h2>
            <p className="text-foreground/80 mb-4">
              Se i top 10 hanno word count simili (es. tutti tra 1500-2000), Google ha una preferenza chiara. Se il range è ampio (es. 800-3000), la lunghezza è meno determinante per quella query.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Applicare i dati</h2>
            <p className="text-foreground/80 mb-4">
              Durante la generazione, Verbalist suggerisce un target basato sui pattern. Puoi accettare il suggerimento o impostare un valore custom. Il sistema genera contenuto calibrato su quel target.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Qualità vs quantità</h2>
            <p className="text-foreground/80 mb-4">
              Un contenuto più lungo non è automaticamente migliore. Punta a coprire tutti i topic rilevanti senza padding. Verbalist bilancia lunghezza e completezza basandosi sui pattern dei top performer.
            </p>
          </div>
        </div>
    </article>
  )
}

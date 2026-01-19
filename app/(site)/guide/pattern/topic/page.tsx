import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Topic coverage",
  description: "Identificare gli argomenti che devi coprire nel tuo contenuto.",
}

export default function TopicPage() {
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
            Topic coverage
          </h1>
          <p className="text-muted-foreground mb-8">
            Scopri quali argomenti devi trattare per competere nella SERP.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">Cos'è il topic coverage</h2>
            <p className="text-foreground/80 mb-4">
              È l'insieme degli argomenti che i contenuti in top 10 trattano. Se tutti parlano di un certo aspetto, quel topic è probabilmente richiesto per rankare.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Topic primari</h2>
            <p className="text-foreground/80 mb-4">
              Sono gli argomenti trattati dalla maggioranza (7+ su 10). Questi sono requisiti essenziali. Non includerli significa perdere rilevanza rispetto ai competitor.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Topic secondari</h2>
            <p className="text-foreground/80 mb-4">
              Argomenti trattati da 3-6 competitor. Includili per completezza, ma puoi decidere quali sono più rilevanti per il tuo angolo specifico.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Topic differenzianti</h2>
            <p className="text-foreground/80 mb-4">
              Argomenti trattati da 1-2 competitor. Potrebbero essere opportunità per differenziarti o argomenti marginali da ignorare. Valuta caso per caso.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Come usare l'analisi topic</h2>
            <p className="text-foreground/80 mb-4">
              Verbalist genera un elenco di topic ordinato per frequenza. Usa questo elenco come checklist: copri tutti i topic primari, scegli i secondari più rilevanti.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Topic e search intent</h2>
            <p className="text-foreground/80 mb-4">
              I topic rivelano il search intent. Se tutti i competitor includono "prezzi" e "alternative", l'intent è commerciale. Se includono "tutorial" e "esempi", è informativo.
            </p>
          </div>
        </div>
    </article>
  )
}

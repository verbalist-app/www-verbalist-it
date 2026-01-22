import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rigenerare sezioni",
  description: "Come rigenerare parti specifiche del contenuto.",
}

export default function RigenerarePage() {
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
            Rigenerare sezioni
          </h1>
          <p className="text-muted-foreground mb-8">
            Non devi rigenerare tutto il contenuto se una sezione non ti convince.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">Rigenerazione selettiva</h2>
            <p className="text-foreground/80 mb-4">
              Seleziona una sezione nell'editor e clicca "Rigenera". Verbalist riscrive solo quella parte mantenendo il resto del contenuto intatto.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Quando rigenerare</h2>
            <p className="text-foreground/80 mb-4">
              Rigenera se: il tono di una sezione non è coerente, mancano informazioni importanti, il contenuto è troppo generico, vuoi un approccio diverso all'argomento.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Istruzioni specifiche</h2>
            <p className="text-foreground/80 mb-4">
              Prima di rigenerare puoi aggiungere istruzioni: "più dettagliato", "con esempi pratici", "in formato lista". La nuova versione seguirà le tue indicazioni.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Versioni multiple</h2>
            <p className="text-foreground/80 mb-4">
              Puoi generare più versioni della stessa sezione e scegliere la migliore. Verbalist tiene traccia delle versioni precedenti per confronto.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Rigenerare title e meta</h2>
            <p className="text-foreground/80 mb-4">
              Title e meta description sono critici per CTR. Genera più varianti e scegli quella più accattivante. Puoi testare diversi angoli (how-to, lista, domanda).
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Limiti della rigenerazione</h2>
            <p className="text-foreground/80 mb-4">
              Ogni rigenerazione usa token. Se rigeneri troppe volte, considera di modificare manualmente o di rivedere i parametri iniziali per ottenere output migliori al primo tentativo.
            </p>
          </div>
        </div>
    </article>
  )
}

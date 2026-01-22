import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Personalizzare il tone of voice",
  description: "Come configurare lo stile e il tono dei contenuti generati da Verbalist.",
}

export default function TonePage() {
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
            Personalizzare il tone of voice
          </h1>
          <p className="text-muted-foreground mb-8">
            Configura Verbalist per generare contenuti con il tuo stile.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">Creare un Tone Profile</h2>
            <p className="text-foreground/80 mb-4">
              Vai in Impostazioni → Tone Profile e crea un nuovo profilo. Puoi avere più profili per diversi brand o tipi di contenuto.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Esempi di riferimento</h2>
            <p className="text-foreground/80 mb-4">
              Il modo più efficace per definire il tone of voice è fornire esempi. Incolla 2-3 paragrafi di contenuti esistenti che rappresentano il tuo stile. Verbalist li analizzerà e replicherà il tono.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Linee guida testuali</h2>
            <p className="text-foreground/80 mb-4">
              Puoi anche descrivere il tono a parole: formale/informale, tecnico/divulgativo, diretto/narrativo. Aggiungi indicazioni specifiche: "evita gergo tecnico", "usa esempi pratici", "mantieni frasi brevi".
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Vocabolario personalizzato</h2>
            <p className="text-foreground/80 mb-4">
              Definisci termini preferiti e da evitare. Esempio: "usa 'clienti' non 'utenti'", "non usare 'sinergia'". Verbalist rispetterà queste preferenze durante la generazione.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Applicare il profilo</h2>
            <p className="text-foreground/80 mb-4">
              Durante la generazione, seleziona il Tone Profile dal menu a tendina. Puoi anche impostare un profilo di default per ogni progetto.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Iterare e migliorare</h2>
            <p className="text-foreground/80 mb-4">
              Se il risultato non rispecchia il tono desiderato, aggiungi più esempi o affina le linee guida. Il profilo si può modificare in qualsiasi momento.
            </p>
          </div>
        </div>
    </article>
  )
}

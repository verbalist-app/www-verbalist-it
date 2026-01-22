import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gestione progetti",
  description: "Creare, organizzare e archiviare progetti in Verbalist.",
}

export default function ProgettiPage() {
  return (
    <article className="pt-20 md:pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/guide/configurazione"
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Configurazione
          </Link>

          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Gestione progetti
          </h1>
          <p className="text-muted-foreground mb-8">
            Organizza il tuo lavoro in progetti per tenere tutto ordinato.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">Creare un progetto</h2>
            <p className="text-foreground/80 mb-4">
              Clicca "Nuovo progetto" nella dashboard. Assegna un nome descrittivo (es. "Blog aziendale", "Sito e-commerce", "Cliente X"). Puoi aggiungere una descrizione opzionale.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Organizzare le analisi</h2>
            <p className="text-foreground/80 mb-4">
              Ogni analisi SERP e ogni contenuto generato appartiene a un progetto. Questo permette di trovare facilmente tutto il lavoro relativo a un sito o cliente.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Impostazioni progetto</h2>
            <p className="text-foreground/80 mb-4">
              Ogni progetto può avere impostazioni di default: paese e lingua per le analisi, modello AI preferito, Tone Profile associato. Le nuove analisi ereditano queste impostazioni.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Condividere progetti</h2>
            <p className="text-foreground/80 mb-4">
              Puoi invitare collaboratori a un progetto. Definisci i permessi: solo lettura, modifica, o amministrazione. Utile per team o per condividere con clienti.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Archiviare progetti</h2>
            <p className="text-foreground/80 mb-4">
              Progetti completati o non più attivi possono essere archiviati. Restano accessibili ma non appaiono nella dashboard principale. Puoi ripristinarli in qualsiasi momento.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Eliminare progetti</h2>
            <p className="text-foreground/80 mb-4">
              L'eliminazione è permanente e cancella tutte le analisi e i contenuti del progetto. Considera l'archiviazione se potresti averne bisogno in futuro.
            </p>
          </div>
        </div>
    </article>
  )
}

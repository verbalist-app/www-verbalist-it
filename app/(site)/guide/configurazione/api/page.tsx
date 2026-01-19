import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "API e integrazioni",
  description: "Connettere Verbalist ad altri strumenti tramite API.",
}

export default function ApiPage() {
  return (
    <article className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/guide/configurazione"
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Configurazione
          </Link>

          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            API e integrazioni
          </h1>
          <p className="text-muted-foreground mb-8">
            Automatizza workflow e integra Verbalist con i tuoi strumenti.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">API REST</h2>
            <p className="text-foreground/80 mb-4">
              Verbalist espone API REST per tutte le funzionalità principali: avviare analisi, recuperare pattern, generare contenuti. Documentazione completa disponibile nella sezione developer.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Generare API key</h2>
            <p className="text-foreground/80 mb-4">
              Vai in Impostazioni → API e genera una nuova chiave. Puoi creare più chiavi con permessi diversi. Le chiavi non scadono ma puoi revocarle in qualsiasi momento.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Rate limits</h2>
            <p className="text-foreground/80 mb-4">
              Le API hanno limiti basati sul tuo piano. Il sistema restituisce header con limiti rimanenti. Rispetta i limiti per evitare blocchi temporanei.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Webhook</h2>
            <p className="text-foreground/80 mb-4">
              Configura webhook per ricevere notifiche quando un'analisi è completa o un contenuto è generato. Utile per workflow automatizzati senza polling.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Integrazioni native</h2>
            <p className="text-foreground/80 mb-4">
              Integrazioni pronte per: WordPress (pubblicazione diretta), Notion (export automatico), Zapier (connessione con 5000+ app), Make (automazioni avanzate).
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Uso API</h2>
            <p className="text-foreground/80 mb-4">
              Le chiamate API consumano crediti come l'uso da interfaccia. Monitora l'utilizzo dalla dashboard per evitare sorprese. Puoi impostare alert per soglie di consumo.
            </p>
          </div>
        </div>
    </article>
  )
}

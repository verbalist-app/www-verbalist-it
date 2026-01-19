import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Impostazioni account",
  description: "Email, password e preferenze personali del tuo account Verbalist.",
}

export default function AccountPage() {
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
            Impostazioni account
          </h1>
          <p className="text-muted-foreground mb-8">
            Gestisci le informazioni del tuo account e le preferenze personali.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">Profilo</h2>
            <p className="text-foreground/80 mb-4">
              Modifica nome, email e avatar. L'email è usata per login e notifiche. Puoi cambiarla in qualsiasi momento verificando la nuova email.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Password</h2>
            <p className="text-foreground/80 mb-4">
              Cambia la password dalla sezione sicurezza. Usa una password forte e unica. Supportiamo anche login con Google se preferisci evitare password.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Lingua interfaccia</h2>
            <p className="text-foreground/80 mb-4">
              Scegli la lingua dell'interfaccia Verbalist. Questo non influenza la lingua dei contenuti generati, che dipende dalla keyword e dalle impostazioni di generazione.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Notifiche email</h2>
            <p className="text-foreground/80 mb-4">
              Configura quali notifiche ricevere: completamento analisi, aggiornamenti prodotto, suggerimenti d'uso. Puoi disattivare tutto tranne le notifiche di sicurezza.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Fuso orario</h2>
            <p className="text-foreground/80 mb-4">
              Imposta il tuo fuso orario per timestamp corretti nelle analisi e nei report. Il sistema lo rileva automaticamente ma puoi modificarlo manualmente.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Eliminare account</h2>
            <p className="text-foreground/80 mb-4">
              Puoi eliminare il tuo account dalla sezione privacy. Questa azione è irreversibile e cancella tutti i dati: progetti, analisi, contenuti generati.
            </p>
          </div>
        </div>
    </article>
  )
}

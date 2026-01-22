import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Analisi E-E-A-T",
  description: "Come Verbalist rileva e replica i segnali E-E-A-T nei contenuti.",
}

export default function EeatPage() {
  return (
    <article className="pt-20 md:pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/guide/pattern"
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Analisi Pattern
          </Link>

          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Analisi E-E-A-T
          </h1>
          <p className="text-muted-foreground mb-8">
            Experience, Expertise, Authoritativeness, Trustworthiness. I segnali che Google usa per valutare la qualità.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">Cosa rileva Verbalist</h2>
            <p className="text-foreground/80 mb-4">
              Il sistema analizza i contenuti dei top performer per identificare segnali E-E-A-T: bio autore, credenziali, citazioni di fonti, dati e statistiche, date di aggiornamento, riferimenti a esperienze dirette.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Experience (Esperienza)</h2>
            <p className="text-foreground/80 mb-4">
              Verbalist rileva frasi che indicano esperienza diretta: "ho testato", "nella mia esperienza", "dopo X anni di utilizzo". Se i competitor li usano, il tuo contenuto dovrebbe includerli.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Expertise (Competenza)</h2>
            <p className="text-foreground/80 mb-4">
              Il sistema identifica segnali di competenza tecnica: terminologia specifica, spiegazioni approfondite, riferimenti a metodologie. Genera contenuto che dimostra padronanza dell'argomento.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Authoritativeness (Autorevolezza)</h2>
            <p className="text-foreground/80 mb-4">
              Rileva citazioni di fonti autorevoli, link a studi, menzioni di enti riconosciuti. Il contenuto generato include placeholder per le tue fonti e suggerimenti su cosa citare.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Trustworthiness (Affidabilità)</h2>
            <p className="text-foreground/80 mb-4">
              Identifica elementi di trust: date di aggiornamento, disclaimer, informazioni di contatto, policy chiare. Suggerisce dove aggiungere questi elementi nel tuo contenuto.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Applicare i segnali</h2>
            <p className="text-foreground/80 mb-4">
              Durante la generazione, Verbalist integra i segnali E-E-A-T rilevati. Troverai nel contenuto: spazi per inserire esperienze personali, suggerimenti di fonti da citare, strutture che comunicano competenza.
            </p>
          </div>
        </div>
    </article>
  )
}

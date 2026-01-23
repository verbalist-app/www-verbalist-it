import type { Metadata } from "next"
import { BreadcrumbSchema } from "@/components/schema"

export const metadata: Metadata = {
  title: "Best Practice",
  description: "Consigli e strategie per ottenere i migliori risultati con Verbalist.",
}

export default function BestPracticePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Guide", url: "/guide" },
          { name: "Best Practice", url: "/guide/best-practice" },
        ]}
      />
      <article className="pt-20 md:pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Best Practice
          </h1>
          <p className="text-base text-muted-foreground mb-8">
            Strategie testate per ottenere i migliori risultati da Verbalist.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">1. Scegli keyword specifiche</h2>
            <p className="text-foreground/80 mb-4">
              Keyword troppo generiche producono analisi meno utili. "scarpe running" è meglio di "scarpe". "scarpe running per pronatori principianti" è ancora meglio. Più specifica la keyword, più precisi i pattern.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">2. Analizza prima, genera dopo</h2>
            <p className="text-foreground/80 mb-4">
              Non saltare alla generazione. Studia i pattern estratti: word count, struttura, topic coverage. Capire cosa funziona ti aiuta a valutare e migliorare il contenuto generato.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">3. Personalizza sempre il tone of voice</h2>
            <p className="text-foreground/80 mb-4">
              Un Tone Profile ben configurato fa la differenza tra contenuto generico e contenuto che sembra scritto da te. Investi tempo nel setup iniziale.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">4. Aggiungi la tua esperienza</h2>
            <p className="text-foreground/80 mb-4">
              Il contenuto generato è una base solida, non il prodotto finale. Aggiungi esperienze personali, casi studio, opinioni. Questo attiva i segnali E-E-A-T che Google premia.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">5. Cita fonti autorevoli</h2>
            <p className="text-foreground/80 mb-4">
              Verbalist suggerisce dove inserire citazioni. Trova fonti reali e autorevoli da linkare. Questo aumenta trust per Google e per le AI che potrebbero citarti.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">6. Mantieni i contenuti aggiornati</h2>
            <p className="text-foreground/80 mb-4">
              I contenuti datati perdono ranking. Usa Verbalist per ri-analizzare periodicamente le keyword importanti e aggiornare i contenuti quando i pattern cambiano.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">7. Testa e itera</h2>
            <p className="text-foreground/80 mb-4">
              Non ogni contenuto rankerà subito. Monitora le performance, identifica cosa funziona meglio nel tuo settore, affina il processo. I pattern che funzionano per altri potrebbero variare nel tuo caso specifico.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">8. Struttura per le AI</h2>
            <p className="text-foreground/80 mb-4">
              Verbalist genera contenuti già strutturati per essere compresi dalle AI. Mantieni questa struttura: heading chiari, risposte dirette alle domande, liste e tabelle dove appropriato.
            </p>
          </div>
        </div>
      </article>
    </>
  )
}

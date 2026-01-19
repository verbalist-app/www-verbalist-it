import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Conversione HTML to Markdown",
  description: "Come il contenuto viene pulito e convertito in formato leggibile.",
}

export default function ConversionePage() {
  return (
    <article className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/guide/scraping"
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Scraping Competitor
          </Link>

          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Conversione HTML to Markdown
          </h1>
          <p className="text-muted-foreground mb-8">
            Come Verbalist trasforma l'HTML in Markdown pulito e strutturato.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">Perché Markdown</h2>
            <p className="text-foreground/80 mb-4">
              Il Markdown è leggibile, strutturato e ideale per l'analisi AI. Preserva la gerarchia del contenuto senza il rumore dell'HTML (tag, classi, stili).
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Heading</h2>
            <p className="text-foreground/80 mb-4">
              I tag H1-H6 diventano heading Markdown (# - ######). La gerarchia viene preservata esattamente come nell'originale.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Paragrafi e testo</h2>
            <p className="text-foreground/80 mb-4">
              I paragrafi vengono separati da linee vuote. Grassetto (*text*) e corsivo (_text_) vengono convertiti. Testo inline rimane inline.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Liste</h2>
            <p className="text-foreground/80 mb-4">
              Liste puntate e numerate vengono convertite in formato Markdown standard. Liste annidate mantengono la loro struttura con indentazione.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Link</h2>
            <p className="text-foreground/80 mb-4">
              I link vengono preservati nel formato [testo](url). Questo permette di analizzare anche la strategia di linking interno ed esterno dei competitor.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Tabelle</h2>
            <p className="text-foreground/80 mb-4">
              Le tabelle HTML diventano tabelle Markdown. Strutture complesse vengono semplificate mantenendo i dati essenziali.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Immagini</h2>
            <p className="text-foreground/80 mb-4">
              Le immagini vengono convertite con alt text: ![alt text](url). L'alt text è importante per l'analisi SEO delle immagini.
            </p>
          </div>
        </div>
    </article>
  )
}

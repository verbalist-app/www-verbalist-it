import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Esportazione finale",
  description: "Formati disponibili e opzioni di export per il contenuto generato.",
}

export default function ExportPage() {
  return (
    <article className="pt-20 md:pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/guide/generazione"
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2 mb-8 transition-colors"
          >
            <ArrowLeft className="size-4 text-foreground" />
            Generazione contenuto
          </Link>

          <h1 className="font-serif text-3xl md:text-4xl font-medium tracking-tighter mb-4">
            Esportazione finale
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8">
            Esporta il contenuto nel formato che preferisci per pubblicarlo.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-sm font-medium text-foreground mb-2">Markdown</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Il formato nativo di Verbalist. Perfetto per CMS che supportano Markdown (Ghost, Hugo, Jekyll) o per importare in editor come Notion o Obsidian.
            </p>

            <h2 className="text-sm font-medium text-foreground mb-2">HTML</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Markdown convertito in HTML pulito. Pronto per incollare in WordPress, Webflow, o qualsiasi CMS con editor HTML. Mantiene la struttura heading.
            </p>

            <h2 className="text-sm font-medium text-foreground mb-2">Plain Text</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Testo senza formattazione. Utile per Google Docs, Word, o quando devi formattare manualmente nel tuo CMS.
            </p>

            <h2 className="text-sm font-medium text-foreground mb-2">WordPress ready</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              HTML ottimizzato per WordPress con blocchi Gutenberg. Include anche title e meta description pronti per Yoast o RankMath.
            </p>

            <h2 className="text-sm font-medium text-foreground mb-2">Copia negli appunti</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Bottone per copiare direttamente. Il contenuto va negli appunti nel formato selezionato, pronto per incollare dove serve.
            </p>

            <h2 className="text-sm font-medium text-foreground mb-2">Download file</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Scarica il contenuto come file (.md, .html, .txt). Utile per archiviazione o per workflow che partono da file locali.
            </p>
          </div>
        </div>
    </article>
  )
}

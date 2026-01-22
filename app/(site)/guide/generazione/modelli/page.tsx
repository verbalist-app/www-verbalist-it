import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Scegliere il modello AI",
  description: "GPT-4, Claude o Gemini: quale usare e quando.",
}

export default function ModelliPage() {
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
            Scegliere il modello AI
          </h1>
          <p className="text-muted-foreground mb-8">
            Verbalist supporta diversi modelli AI. Ecco quando usare quale.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">GPT-4</h2>
            <p className="text-foreground/80 mb-4">
              Ottimo per contenuti generici e creativi. Eccelle in storytelling e testi persuasivi. Buon bilanciamento tra qualità e velocità.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Claude</h2>
            <p className="text-foreground/80 mb-4">
              Forte su contenuti lunghi e strutturati. Segue istruzioni complesse con precisione. Ideale per guide tecniche e contenuti che richiedono accuratezza.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Gemini</h2>
            <p className="text-foreground/80 mb-4">
              Buono per contenuti che richiedono conoscenze recenti. Integra bene informazioni da fonti diverse. Utile per argomenti in rapida evoluzione.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Quale scegliere</h2>
            <p className="text-foreground/80 mb-4">
              Per la maggior parte dei contenuti SEO, i risultati sono comparabili. Sperimenta con diversi modelli per lo stesso contenuto e vedi quale preferisci per il tuo stile.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Costi</h2>
            <p className="text-foreground/80 mb-4">
              I modelli hanno costi diversi per token. Verbalist mostra una stima prima della generazione. Per contenuti frequenti, considera il costo cumulativo.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Cambiare modello</h2>
            <p className="text-foreground/80 mb-4">
              Puoi cambiare modello in qualsiasi momento dalle impostazioni o prima di ogni generazione. Il modello non influenza i pattern estratti, solo la generazione finale.
            </p>
          </div>
        </div>
    </article>
  )
}

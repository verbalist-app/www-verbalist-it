import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "GEO: la nuova frontiera dell'ottimizzazione per AI",
  description: "Come ottimizzare i contenuti per essere citati dai motori di ricerca generativi come ChatGPT e Perplexity.",
}

const post = {
  title: "GEO: la nuova frontiera dell'ottimizzazione per AI",
  description: "Come ottimizzare i contenuti per essere citati dai motori di ricerca generativi come ChatGPT e Perplexity.",
  authorName: "Team Verbalist",
  authorImage: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
  pubDate: "10 Gennaio 2026",
  image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
}

export default function BlogPostPage() {
  return (
    <article className="pt-20 md:pt-28 pb-24">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <Link
            href="/blog"
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2 mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Torna al blog
          </Link>
        </div>

        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 max-w-3xl">
            {post.title}
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-6">
            {post.description}
          </p>
          <div className="flex items-center gap-3 text-sm">
            <Avatar className="h-8 w-8 border">
              <AvatarImage src={post.authorImage} />
              <AvatarFallback>{post.authorName.charAt(0)}</AvatarFallback>
            </Avatar>
            <span>
              <span className="font-medium">{post.authorName}</span>
              <span className="text-muted-foreground ml-1">· {post.pubDate}</span>
            </span>
          </div>
          <img
            src={post.image}
            alt={post.title}
            className="mt-8 mb-12 aspect-[16/9] w-full rounded-lg border object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h2>Cos'è la Generative Engine Optimization?</h2>
          <p>
            La GEO (Generative Engine Optimization) rappresenta l'evoluzione naturale della SEO tradizionale.
            Con l'avvento di motori di ricerca generativi come ChatGPT, Perplexity e Google SGE,
            ottimizzare i contenuti significa anche assicurarsi di essere citati nelle risposte AI.
          </p>

          <h2>Perché la GEO è importante nel 2026</h2>
          <p>
            I dati mostrano che sempre più utenti utilizzano assistenti AI per le loro ricerche.
            Essere citati in queste risposte significa:
          </p>
          <ul>
            <li>Maggiore visibilità del brand</li>
            <li>Traffico qualificato da nuove fonti</li>
            <li>Posizionamento come fonte autorevole</li>
            <li>Vantaggio competitivo sui concorrenti</li>
          </ul>

          <h2>Come ottimizzare per i motori generativi</h2>
          <p>
            La chiave sta nel creare contenuti che siano facilmente "citabili" dagli LLM.
            Questo significa strutturare le informazioni in modo chiaro, con definizioni precise
            e dati verificabili.
          </p>

          <blockquote>
            "I contenuti ottimizzati per GEO non sono diversi da quelli ottimizzati per gli utenti:
            chiari, strutturati e ricchi di valore."
          </blockquote>

          <h2>Best practice per la GEO</h2>
          <p>
            Ecco alcune strategie concrete da implementare:
          </p>
          <ul>
            <li><strong>Definizioni chiare:</strong> Inizia ogni sezione con una definizione precisa del concetto</li>
            <li><strong>Dati strutturati:</strong> Usa tabelle, liste e formati facilmente parsabili</li>
            <li><strong>Citazioni e fonti:</strong> Includi riferimenti a studi e dati verificabili</li>
            <li><strong>FAQ section:</strong> Rispondi alle domande frequenti in modo diretto</li>
          </ul>

          <h2>Conclusioni</h2>
          <p>
            La GEO non sostituisce la SEO tradizionale, ma la complementa.
            Un approccio integrato che consideri sia i motori di ricerca classici
            che quelli generativi è la strategia vincente per il 2026 e oltre.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-3xl mx-auto px-6 mt-16">
        <div className="bg-muted rounded-xl p-8 md:p-12">
          <h2 className="text-xl font-medium tracking-tight mb-4">
            Vuoi ottimizzare i tuoi contenuti per la GEO?
          </h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
            Verbalist analizza automaticamente i pattern dei contenuti che vengono citati
            dai motori generativi e ti aiuta a replicarli.
          </p>
          <Link
            href="/contatti"
            className="inline-flex items-center gap-2 text-sm bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Prenota una demo
          </Link>
        </div>
      </div>
    </article>
  )
}

import { FileText, Sparkles } from 'lucide-react'
import { ContentGenerationVisual } from '@/components/visuals/content-generation-visual'

export function ContentSection2() {
    return (
        <section className="py-16 md:py-32 bg-muted/30">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl ml-auto text-right">Genera contenuti che competono per le prime posizioni.</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    {/* Visual a sinistra */}
                    <div className="relative order-2 sm:order-1">
                        <ContentGenerationVisual />
                    </div>

                    {/* Testo a destra */}
                    <div className="relative space-y-4 order-1 sm:order-2">
                        <p className="text-muted-foreground">
                            Il sistema genera contenuti <span className="text-accent-foreground font-bold">basati sui pattern vincenti</span> identificati nell'analisi — struttura, topic coverage, word count, segnali di autorevolezza.
                        </p>
                        <p className="text-muted-foreground">Ogni articolo include title tag, meta description, struttura heading ottimale e body content pronto per la pubblicazione.</p>

                        <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <FileText className="size-4" />
                                    <h3 className="text-sm font-medium">Contenuto completo</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Title, meta, outline e body in formato Markdown o HTML.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Sparkles className="size-4" />
                                    <h3 className="text-sm font-medium">Ottimizzato AI</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Struttura semantica per SEO, AEO, GEO e assistenti AI.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

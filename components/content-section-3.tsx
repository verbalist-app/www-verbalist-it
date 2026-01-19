import { RefreshCw, TrendingUp } from 'lucide-react'
import { ContentOptimizationVisual } from '@/components/visuals/content-optimization-visual'

export function ContentSection3() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Ottimizza i contenuti esistenti con analisi dettagliata.</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative space-y-4">
                        <p className="text-muted-foreground">
                            Carica un contenuto esistente e ricevi uno <span className="text-accent-foreground font-bold">score 0-100 su più dimensioni</span>: SEO, leggibilità, completezza, struttura heading.
                        </p>
                        <p className="text-muted-foreground">Il sistema identifica problemi prioritari, suggerisce miglioramenti specifici e genera una versione ottimizzata del contenuto.</p>

                        <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <TrendingUp className="size-4" />
                                    <h3 className="text-sm font-medium">Score dettagliati</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Analisi su SEO, leggibilità, completezza e autorevolezza.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <RefreshCw className="size-4" />
                                    <h3 className="text-sm font-medium">Riscrittura AI</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Versione migliorata basata sui gap identificati.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-6 sm:mt-0">
                        <ContentOptimizationVisual />
                    </div>
                </div>
            </div>
        </section>
    )
}

import { Search, BarChart3 } from 'lucide-react'
import { SerpAnalysisVisual } from '@/components/visuals/serp-analysis-visual'

export function ContentSection1() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Analizza i competitor che dominano Google.</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative space-y-4">
                        <p className="text-muted-foreground">
                            Verbalist recupera i <span className="text-accent-foreground font-bold">top 10 risultati organici</span> per la tua keyword, filtrando automaticamente aggregatori e social network.
                        </p>
                        <p className="text-muted-foreground">Per ogni competitor estrae URL, title tag, meta description e posizione di ranking. Dati reali su cui basare ogni decisione.</p>

                        <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Search className="size-4" />
                                    <h3 className="text-sm font-medium">Analisi SERP</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Recupera i risultati Google in tempo reale tramite API esterne.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <BarChart3 className="size-4" />
                                    <h3 className="text-sm font-medium">Pattern Detection</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Identifica struttura, topic e segnali E-E-A-T dei vincenti.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-6 sm:mt-0">
                        <SerpAnalysisVisual />
                    </div>
                </div>
            </div>
        </section>
    )
}

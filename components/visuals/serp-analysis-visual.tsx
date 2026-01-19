'use client'

import { Globe, ExternalLink } from 'lucide-react'

const serpResults = [
    { position: 1, title: "Guida completa alla keyword research", url: "esempio.it/guida-keyword", description: "Scopri come trovare le keyword giuste..." },
    { position: 2, title: "Keyword research: strategie avanzate", url: "seo-blog.com/strategie", description: "Le migliori tecniche per analizzare..." },
    { position: 3, title: "Come fare keyword research nel 2025", url: "marketing.io/keyword-2025", description: "Metodologie aggiornate per..." },
    { position: 4, title: "Tool per keyword research", url: "tools-seo.it/strumenti", description: "I migliori strumenti per trovare..." },
    { position: 5, title: "Keyword research per e-commerce", url: "ecomm-tips.com/seo", description: "Strategie specifiche per negozi..." },
]

export function SerpAnalysisVisual() {
    return (
        <div className="bg-background rounded-xl border p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b">
                <div className="flex items-center gap-2 bg-muted rounded-lg px-3 py-1.5 flex-1">
                    <Globe className="size-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">keyword research</span>
                </div>
                <div className="text-xs text-muted-foreground">10 risultati</div>
            </div>
            <div className="space-y-3">
                {serpResults.map((result) => (
                    <div
                        key={result.position}
                        className="group flex gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                        <div className="flex-shrink-0 w-6 h-6 rounded bg-primary/10 text-primary text-xs font-medium flex items-center justify-center">
                            {result.position}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                                <h4 className="text-sm font-medium text-foreground truncate">{result.title}</h4>
                                <ExternalLink className="size-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-xs text-primary/70 truncate">{result.url}</p>
                            <p className="text-xs text-muted-foreground truncate">{result.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

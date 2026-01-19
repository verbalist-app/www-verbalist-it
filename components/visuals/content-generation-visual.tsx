'use client'

import { FileText, Hash, Type, AlignLeft } from 'lucide-react'

export function ContentGenerationVisual() {
    return (
        <div className="bg-background rounded-xl border shadow-sm overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b bg-muted/30">
                <FileText className="size-4 text-primary" />
                <span className="text-sm font-medium">Contenuto generato</span>
                <span className="ml-auto text-xs text-muted-foreground">2.450 parole</span>
            </div>

            <div className="p-4 space-y-4">
                {/* Title */}
                <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Type className="size-3" />
                        <span>Title tag</span>
                    </div>
                    <div className="bg-muted rounded px-3 py-2">
                        <p className="text-sm font-medium">Keyword Research: Guida Completa 2025 | Strategie e Tool</p>
                    </div>
                </div>

                {/* Meta */}
                <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <AlignLeft className="size-3" />
                        <span>Meta description</span>
                    </div>
                    <div className="bg-muted rounded px-3 py-2">
                        <p className="text-xs text-muted-foreground">Scopri come fare keyword research efficace nel 2025. Guida completa con strategie, tool consigliati e best practice per trovare le keyword giuste.</p>
                    </div>
                </div>

                {/* Outline */}
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Hash className="size-3" />
                        <span>Struttura</span>
                    </div>
                    <div className="space-y-1 pl-2 border-l-2 border-primary/20">
                        <div className="text-sm font-medium">H1: Keyword Research: La Guida Definitiva</div>
                        <div className="text-sm text-muted-foreground pl-3">H2: Cos'è la Keyword Research</div>
                        <div className="text-sm text-muted-foreground pl-3">H2: Perché è Importante</div>
                        <div className="text-sm text-muted-foreground pl-3">H2: Come Iniziare</div>
                        <div className="text-xs text-muted-foreground pl-6">H3: Identifica il Search Intent</div>
                        <div className="text-xs text-muted-foreground pl-6">H3: Analizza i Competitor</div>
                        <div className="text-sm text-muted-foreground pl-3">H2: Tool Consigliati</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

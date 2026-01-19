'use client'

import { TrendingUp, AlertCircle, CheckCircle2, XCircle } from 'lucide-react'

const scores = [
    { label: 'SEO', score: 78, color: 'text-amber-500' },
    { label: 'Leggibilità', score: 85, color: 'text-green-500' },
    { label: 'Completezza', score: 62, color: 'text-amber-500' },
    { label: 'E-E-A-T', score: 71, color: 'text-amber-500' },
]

const issues = [
    { type: 'error', text: 'Meta description mancante' },
    { type: 'warning', text: 'Word count inferiore alla media competitor' },
    { type: 'warning', text: 'Manca sezione FAQ' },
    { type: 'success', text: 'Struttura heading corretta' },
]

export function ContentOptimizationVisual() {
    return (
        <div className="bg-background rounded-xl border shadow-sm overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b bg-muted/30">
                <TrendingUp className="size-4 text-primary" />
                <span className="text-sm font-medium">Analisi contenuto</span>
            </div>

            <div className="p-4 space-y-4">
                {/* Score overview */}
                <div className="grid grid-cols-4 gap-2">
                    {scores.map((item) => (
                        <div key={item.label} className="text-center p-2 bg-muted/50 rounded-lg">
                            <div className={`text-xl font-bold ${item.color}`}>{item.score}</div>
                            <div className="text-[10px] text-muted-foreground">{item.label}</div>
                        </div>
                    ))}
                </div>

                {/* Overall score */}
                <div className="flex items-center justify-center gap-3 py-3 border-y">
                    <div className="text-3xl font-bold text-amber-500">74</div>
                    <div className="text-sm text-muted-foreground">
                        Score<br />complessivo
                    </div>
                </div>

                {/* Issues */}
                <div className="space-y-2">
                    <div className="text-xs font-medium text-muted-foreground mb-2">Problemi identificati</div>
                    {issues.map((issue, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm">
                            {issue.type === 'error' && <XCircle className="size-4 text-red-500 flex-shrink-0 mt-0.5" />}
                            {issue.type === 'warning' && <AlertCircle className="size-4 text-amber-500 flex-shrink-0 mt-0.5" />}
                            {issue.type === 'success' && <CheckCircle2 className="size-4 text-green-500 flex-shrink-0 mt-0.5" />}
                            <span className="text-muted-foreground">{issue.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

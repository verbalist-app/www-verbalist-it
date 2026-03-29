'use client'

import { useState } from 'react'
import Link from 'next/link'

const suggestedKeywords = [
  "come scegliere un materasso",
  "migliori smartphone 2024",
  "ricetta tiramisù",
]

export function InteractiveDemo() {
  const [keyword, setKeyword] = useState('')
  const [step, setStep] = useState(0) // 0: input, 1: analyzing, 2: complete

  const startAnalysis = () => {
    if (!keyword.trim()) return
    setStep(1)
    setTimeout(() => setStep(2), 3000)
  }

  const resetDemo = () => {
    setStep(0)
    setKeyword('')
  }

  return (
    <div className="w-full h-full bg-background border border-border rounded-xl shadow-sm flex flex-col overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/50">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-status-error" />
          <div className="w-2.5 h-2.5 rounded-full bg-status-warning" />
          <div className="w-2.5 h-2.5 rounded-full bg-status-success" />
        </div>
        <span className="text-[11px] text-muted-foreground font-medium">Verbalist Demo</span>
        <div className="w-16" />
      </div>

      {/* Content */}
      <div className="flex-1 p-4 overflow-y-auto">

        {/* Step 0: Input */}
        {step === 0 && (
          <div className="space-y-4">
            <div>
              <label htmlFor="demo-keyword-input" className="text-[12px] text-muted-foreground font-medium mb-2 block">
                Inserisci una keyword
              </label>
              <input
                id="demo-keyword-input"
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && startAnalysis()}
                placeholder="es. come scegliere un materasso"
                className="w-full px-3 py-2 text-[13px] border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent"
              />
            </div>

            <div>
              <p className="text-[11px] text-muted-foreground mb-2">Oppure prova con:</p>
              <div className="flex flex-wrap gap-2">
                {suggestedKeywords.map((kw) => (
                  <button
                    key={kw}
                    onClick={() => setKeyword(kw)}
                    className="text-[11px] px-2.5 py-1 bg-muted text-muted-foreground rounded-full hover:bg-muted transition-colors"
                  >
                    {kw}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={startAnalysis}
              disabled={!keyword.trim()}
              className="w-full py-2.5 bg-foreground text-background text-[13px] font-medium rounded-lg hover:bg-foreground/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Analizza competitor
            </button>
          </div>
        )}

        {/* Step 1: Analyzing */}
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <p className="text-[12px] text-muted-foreground font-medium mb-2">Analisi in corso...</p>
              <div
                className="h-2 bg-muted rounded-full overflow-hidden"
                role="progressbar"
                aria-valuenow={2}
                aria-valuemin={1}
                aria-valuemax={3}
                aria-label="Progresso analisi documento"
              >
                <div className="h-full bg-foreground w-2/3 animate-pulse" />
              </div>
            </div>
            <p className="text-[11px] text-muted-foreground">Analizzando: &quot;{keyword}&quot;</p>
            <p className="text-[10px] text-muted-foreground/70">Il processo richiede in media 2-3 minuti</p>
            <div className="space-y-2">
              <div className="p-2 bg-muted/50 rounded text-[11px] text-muted-foreground">1. guidacompleta.it ✓</div>
              <div className="p-2 bg-muted/50 rounded text-[11px] text-muted-foreground">2. dormirebene.com ✓</div>
              <div className="p-2 bg-muted/50 rounded text-[11px] text-muted-foreground">3. qualematerasso.it ✓</div>
            </div>
          </div>
        )}

        {/* Step 2: Complete */}
        {step === 2 && (
          <div className="space-y-4">
            <div className="text-center py-2">
              <div className="w-10 h-10 bg-status-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-status-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-[13px] font-medium text-foreground">Contenuto generato!</p>
              <p className="text-[11px] text-muted-foreground mt-1">2.847 parole • 12 heading</p>
            </div>

            <div className="p-3 bg-muted/50 rounded-lg">
              <p className="text-[10px] text-muted-foreground mb-1">Anteprima:</p>
              <p className="text-[12px] text-foreground leading-relaxed">Un materasso di qualità è fondamentale per il benessere quotidiano...</p>
            </div>

            <div className="space-y-2">
              <Link
                href="/prenota-demo"
                className="block w-full py-2.5 bg-foreground text-background text-[13px] font-medium rounded-lg hover:bg-foreground/90 transition-colors text-center"
              >
                Prenota una demo
              </Link>
              <button
                onClick={resetDemo}
                className="block w-full py-2.5 text-muted-foreground text-[13px] font-medium hover:text-foreground transition-colors"
              >
                Prova un&apos;altra keyword
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

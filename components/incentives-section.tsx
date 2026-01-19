"use client"

import { motion } from "framer-motion"
import { Search, Globe, FileText, BarChart3, Sparkles, FileOutput, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface FlowSectionProps {
  className?: string
}

const phases = [
  {
    id: "input",
    label: "Input",
    steps: [
      { icon: Search, name: "Keyword", desc: "La tua keyword target" },
    ],
  },
  {
    id: "analysis",
    label: "Analisi",
    steps: [
      { icon: Globe, name: "SERP", desc: "Top 10 Google" },
      { icon: FileText, name: "Scraping", desc: "Estrazione contenuti" },
    ],
  },
  {
    id: "processing",
    label: "Elaborazione",
    steps: [
      { icon: BarChart3, name: "Pattern", desc: "Pattern vincenti" },
      { icon: Sparkles, name: "AI Gen", desc: "Generazione AI" },
    ],
  },
  {
    id: "output",
    label: "Output",
    steps: [
      { icon: FileOutput, name: "Contenuto", desc: "SEO-ready" },
    ],
  },
]

function AnimatedArrow({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      className="hidden lg:flex items-center justify-center w-8"
      initial={{ opacity: 0.3 }}
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{
        duration: 1.5,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <ChevronRight className="size-5 text-muted-foreground" />
    </motion.div>
  )
}

function PhaseCard({ phase, index }: { phase: typeof phases[0]; index: number }) {
  const isFirst = index === 0
  const isLast = index === phases.length - 1

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.4 }}
      className={cn(
        "flex flex-col items-center p-6 rounded-2xl border bg-background min-w-[140px]",
        isFirst && "ring-1 ring-foreground/10",
        isLast && "bg-foreground text-background"
      )}
    >
      <span className={cn(
        "text-xs font-medium uppercase tracking-wider mb-5",
        isLast ? "text-background/60" : "text-muted-foreground"
      )}>
        {phase.label}
      </span>

      <div className="flex items-start gap-6">
        {phase.steps.map((step, i) => {
          const Icon = step.icon
          return (
            <div key={step.name} className="flex items-start gap-4">
              <div className="flex flex-col items-center text-center">
                <div className={cn(
                  "flex size-14 items-center justify-center rounded-xl",
                  isLast ? "bg-background/10" : "bg-muted"
                )}>
                  <Icon className="size-6" strokeWidth={1.5} />
                </div>
                <span className="mt-3 text-sm font-medium">{step.name}</span>
                <span className={cn(
                  "text-xs mt-1",
                  isLast ? "text-background/60" : "text-muted-foreground"
                )}>
                  {step.desc}
                </span>
              </div>
              {i < phase.steps.length - 1 && (
                <ChevronRight className={cn(
                  "size-4 mt-5",
                  isLast ? "text-background/40" : "text-muted-foreground/50"
                )} />
              )}
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}

export function IncentivesSection({ className }: FlowSectionProps) {
  return (
    <section className={cn("py-16 md:py-20", className)}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto flex flex-col items-center text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Pipeline
          </p>
          <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
            Come funziona
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
            Dalla keyword al contenuto finito. Quattro passaggi automatici.
          </p>

          {/* Desktop: Horizontal phases */}
          <div className="mt-16 hidden lg:flex items-stretch justify-center">
            {phases.map((phase, index) => (
              <div key={phase.id} className="flex items-center">
                <PhaseCard phase={phase} index={index} />
                {index < phases.length - 1 && (
                  <AnimatedArrow delay={index * 0.4} />
                )}
              </div>
            ))}
          </div>

          {/* Tablet: 2x2 grid */}
          <div className="mt-14 hidden md:grid lg:hidden grid-cols-2 gap-4 max-w-xl">
            {phases.map((phase, index) => (
              <PhaseCard key={phase.id} phase={phase} index={index} />
            ))}
          </div>

          {/* Mobile: Vertical */}
          <div className="mt-12 flex md:hidden flex-col items-center gap-4 w-full">
            {phases.map((phase, index) => (
              <div key={phase.id} className="flex flex-col items-center gap-4 w-full">
                <PhaseCard phase={phase} index={index} />
                {index < phases.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 1.5,
                      delay: index * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ChevronRight className="size-5 text-muted-foreground rotate-90" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

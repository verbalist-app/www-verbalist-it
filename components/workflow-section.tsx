"use client"

import { cn } from "@/lib/utils"

interface WorkflowStep {
  step: number
  title: string
  description: string
  visual: React.ComponentType
}

interface WorkflowSectionProps {
  title: string
  subtitle?: string
  steps: WorkflowStep[]
  className?: string
}

export function WorkflowSection({ title, subtitle, steps, className }: WorkflowSectionProps) {
  return (
    <section className={cn("border-t py-16 md:py-20", className)}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-2xl font-medium tracking-tight md:text-3xl">{title}</h2>
          {subtitle && (
            <p className="mt-4 text-base text-muted-foreground">{subtitle}</p>
          )}
        </div>

        <div className="space-y-12 md:space-y-16">
          {steps.map((step, idx) => {
            const Visual = step.visual
            const isReversed = idx % 2 !== 0
            return (
              <div
                key={step.step}
                className={cn(
                  "grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12",
                  isReversed && "md:[direction:rtl]"
                )}
              >
                <div className={cn(isReversed && "md:[direction:ltr]")}>
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Step {step.step}
                  </span>
                  <h3 className="mt-2 text-xl font-medium tracking-tight md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-lg">
                    {step.description}
                  </p>
                </div>
                <div className={cn("rounded-lg border aspect-[4/3] overflow-hidden", isReversed && "md:[direction:ltr]")}>
                  <Visual />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

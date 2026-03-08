import { cn } from "@/lib/utils"

interface WorkflowStep {
  step: number
  title: string
  description: string
}

interface WorkflowStepsProps {
  title?: string
  description?: string
  steps: WorkflowStep[]
  className?: string
}

export function WorkflowSteps({ title, description, steps, className }: WorkflowStepsProps) {
  return (
    <section className={cn("border-t py-24 lg:py-32", className)}>
      <div className="mx-auto max-w-3xl px-6">
        {(title || description) && (
          <div className="mb-12 text-center">
            {title && <h2 className="font-serif text-balance text-3xl font-medium tracking-tight sm:text-4xl">{title}</h2>}
            {description && <p className="text-muted-foreground mt-6 text-balance text-base leading-relaxed max-w-2xl mx-auto">{description}</p>}
          </div>
        )}
        <div className="relative">
          {/* Connector line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.step} className="relative flex gap-6">
                <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-foreground text-background text-sm font-medium">
                  {step.step}
                </div>
                <div className="pt-1.5">
                  <h3 className="text-base font-medium">{step.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

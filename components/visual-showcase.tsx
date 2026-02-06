"use client"

import { cn } from "@/lib/utils"

interface VisualShowcaseProps {
  visual: React.ComponentType
  title?: string
  description?: string
  className?: string
}

export function VisualShowcase({ visual: Visual, title, description, className }: VisualShowcaseProps) {
  return (
    <section className={cn("border-t py-16 md:py-20", className)}>
      <div className="mx-auto max-w-6xl px-6">
        {(title || description) && (
          <div className="mb-8 text-center">
            {title && <h2 className="text-xl font-medium tracking-tight md:text-2xl">{title}</h2>}
            {description && <p className="mt-3 text-sm text-muted-foreground max-w-2xl mx-auto">{description}</p>}
          </div>
        )}
        <div className="rounded-xl border overflow-hidden aspect-[16/9] md:aspect-[2/1]">
          <Visual />
        </div>
      </div>
    </section>
  )
}

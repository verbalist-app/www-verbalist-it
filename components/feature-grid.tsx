import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface FeatureGridItem {
  icon: LucideIcon
  title: string
  description: string
}

interface FeatureGridProps {
  title?: string
  description?: string
  items: FeatureGridItem[]
  className?: string
}

export function FeatureGrid({ title, description, items, className }: FeatureGridProps) {
  return (
    <section className={cn("border-t py-16 md:py-20", className)}>
      <div className="mx-auto max-w-6xl px-6">
        {(title || description) && (
          <div className="mb-12 text-center">
            {title && <h2 className="text-xl font-medium tracking-tight md:text-2xl">{title}</h2>}
            {description && <p className="mt-3 text-sm text-muted-foreground max-w-2xl mx-auto">{description}</p>}
          </div>
        )}
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="rounded-lg border bg-card p-6">
                <div className="mb-3 inline-flex items-center justify-center rounded-lg border border-border bg-muted p-2.5">
                  <Icon className="size-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-medium">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

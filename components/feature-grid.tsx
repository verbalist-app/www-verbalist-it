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
    <section className={cn("border-t py-24 lg:py-32", className)}>
      <div className="mx-auto max-w-6xl px-6">
        {(title || description) && (
          <div className="text-center">
            {title && <h2 className="font-serif text-balance text-3xl font-medium tracking-tight sm:text-4xl">{title}</h2>}
            {description && <p className="text-muted-foreground mt-6 text-balance text-base leading-relaxed max-w-2xl mx-auto">{description}</p>}
          </div>
        )}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="border-t pt-6">
                <Icon className="size-4 text-foreground" strokeWidth={1.5} />
                <h3 className="mt-3 text-base font-medium">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

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
    <section className={cn("border-t py-24", className)}>
      <div className="mx-auto max-w-6xl px-6">
        {(title || description) && (
          <div className="text-center">
            {title && <h2 className="font-serif text-balance text-4xl font-medium">{title}</h2>}
            {description && <p className="text-muted-foreground mt-4 text-balance max-w-2xl mx-auto">{description}</p>}
          </div>
        )}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="border-t pt-6">
                <Icon className="size-4" strokeWidth={1.5} style={{ color: '#473424' }} />
                <h3 className="mt-3 text-sm font-medium">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

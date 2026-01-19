import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface FeatureColumn {
  items: string[]
}

interface FeatureChecklistProps {
  title?: string
  description?: string
  columns: FeatureColumn[]
  className?: string
}

export function FeatureChecklist({
  title,
  description,
  columns,
  className,
}: FeatureChecklistProps) {
  return (
    <section className={cn("border-t py-16 md:py-20", className)}>
      <div className="mx-auto max-w-5xl px-6">
        {(title || description) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className="text-xl font-medium tracking-tight md:text-2xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-3 text-sm text-muted-foreground max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}
        <div className={cn(
          "grid gap-8 md:gap-12",
          columns.length === 2 && "md:grid-cols-2",
          columns.length === 3 && "md:grid-cols-3",
          columns.length === 4 && "md:grid-cols-4"
        )}>
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="space-y-4">
              {column.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-start gap-3">
                  <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-foreground mt-0.5">
                    <Check className="size-3 text-background" strokeWidth={3} />
                  </div>
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

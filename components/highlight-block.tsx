import { cn } from "@/lib/utils"
import { type LucideIcon } from "lucide-react"

interface HighlightBlockProps {
  title: string
  description: string
  visual: React.ReactNode
  reverse?: boolean
  icon?: LucideIcon
  className?: string
}

export function HighlightBlock({
  title,
  description,
  visual,
  reverse = false,
  icon: Icon,
  className,
}: HighlightBlockProps) {
  return (
    <section className={cn("border-t py-16 md:py-20", className)}>
      <div className="mx-auto max-w-5xl px-6">
        <div className={cn(
          "flex flex-col items-center gap-8 md:gap-12",
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        )}>
          <div className="flex-1 space-y-4">
            {Icon && (
              <div className="inline-flex items-center justify-center rounded-lg border border-border bg-muted p-2.5">
                <Icon className="size-5" strokeWidth={1.5} />
              </div>
            )}
            <h3 className="text-xl font-medium tracking-tight md:text-2xl">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
              {description}
            </p>
          </div>
          <div className="flex-1 w-full">
            <div className="aspect-[4/3] rounded-xl bg-muted border border-border overflow-hidden">
              {visual}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

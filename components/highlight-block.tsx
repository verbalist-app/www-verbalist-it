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
    <section className={cn("border-t py-24", className)}>
      <div className="mx-auto max-w-6xl px-6">
        <div className={cn(
          "flex flex-col items-center gap-8 md:gap-12",
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        )}>
          <div className="flex-1 space-y-5">
            {Icon && (
              <Icon className="size-5" strokeWidth={1.5} style={{ color: '#473424' }} />
            )}
            <h3 className="font-serif text-balance text-2xl font-medium tracking-tight md:text-3xl">
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

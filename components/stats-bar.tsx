import { cn } from "@/lib/utils"

interface StatsBarProps {
  stats: { value: string; label: string }[]
  className?: string
}

export function StatsBar({ stats, className }: StatsBarProps) {
  return (
    <section className={cn("border-t py-16 md:py-20", className)}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, idx) => (
            <div key={stat.label} className={cn("text-center py-4 md:py-0", idx > 0 && "md:border-l md:border-border/50")}>
              <div className="text-xl font-medium md:text-2xl">{stat.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

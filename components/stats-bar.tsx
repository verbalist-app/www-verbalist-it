import { cn } from "@/lib/utils"

interface StatsBarProps {
  stats: { value: string; label: string }[]
  className?: string
}

export function StatsBar({ stats, className }: StatsBarProps) {
  return (
    <section className={cn("border-t py-8", className)}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 rounded-lg bg-muted px-6 py-5">
          {stats.map((stat, idx) => (
            <div key={stat.label} className="flex items-center gap-6">
              {idx > 0 && <div className="hidden md:block h-8 w-px bg-border" />}
              <div className="text-center">
                <div className="text-lg font-medium md:text-xl">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

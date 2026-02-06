import { cn } from "@/lib/utils"

interface StatsSectionProps {
  stats: { value: string; label: string }[]
  className?: string
}

export function StatsSection({ stats, className }: StatsSectionProps) {
  return (
    <section className={cn("border-t py-16 md:py-20", className)}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-medium">{stat.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

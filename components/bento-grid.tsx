import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

interface BentoGridItem {
  title: string
  description: string
  visual: React.ReactNode
}

interface BentoGridProps {
  items: BentoGridItem[]
  className?: string
}

// Bento pattern for 5 items: [2,1] [1,2] [3]
const bento5 = [
  "lg:col-span-2",
  "",
  "",
  "lg:col-span-2",
  "sm:col-span-2 lg:col-span-3",
]

export function BentoGrid({ items, className }: BentoGridProps) {
  const isBento = items.length === 5

  return (
    <section className={cn("border-t py-24 lg:py-32", className)}>
      <div className="mx-auto max-w-5xl px-6">
        <div
          className={cn(
            "grid gap-4",
            items.length === 2 && "sm:grid-cols-2",
            items.length >= 3 && "sm:grid-cols-2 lg:grid-cols-3"
          )}
        >
          {items.map((item, index) => {
            const isFullWidth = isBento && index === 4
            return (
              <Card
                key={item.title}
                variant="soft"
                className={cn(
                  "overflow-hidden",
                  isBento && bento5[index],
                  isFullWidth
                    ? "flex flex-col sm:flex-row"
                    : "flex flex-col"
                )}
              >
                <div className="min-h-48 flex-1">
                  {item.visual}
                </div>
                <div
                  className={cn(
                    isFullWidth
                      ? "p-6 sm:flex sm:w-2/5 sm:flex-col sm:justify-center sm:py-8"
                      : "px-6 pb-6"
                  )}
                >
                  <h3 className="text-foreground text-base font-medium">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 text-balance text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

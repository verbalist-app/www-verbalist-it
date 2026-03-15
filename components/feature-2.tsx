import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'

interface FeatureItem {
  icon: LucideIcon
  title: string
  description: string
}

interface Feature2Props {
  title?: string
  description?: string
  items: FeatureItem[]
  className?: string
}

export function Feature2({ title, description, items, className }: Feature2Props) {
  return (
    <section className={cn('border-t py-24 lg:py-32', className)}>
      <div className="mx-auto max-w-5xl px-6">
        {(title || description) && (
          <div className="text-center">
            {title && <h2 className="text-balance text-3xl font-medium tracking-tight sm:text-4xl">{title}</h2>}
            {description && <p className="text-muted-foreground mt-6 text-balance text-base leading-relaxed max-w-2xl mx-auto">{description}</p>}
          </div>
        )}
        <div className={cn(
          'mt-12 grid gap-x-12 gap-y-8',
          items.length <= 4 ? 'grid-cols-2 lg:grid-cols-4' : 'grid-cols-2 lg:grid-cols-3'
        )}>
          {items.map(({ icon: Icon, title: itemTitle, description: itemDesc }) => (
            <div key={itemTitle} className="relative border-t pt-6">
              <Icon className="size-4 text-foreground" strokeWidth={1.5} />
              <h3 className="mt-3 text-base font-medium">{itemTitle}</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{itemDesc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

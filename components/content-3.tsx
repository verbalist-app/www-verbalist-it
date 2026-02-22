import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'

interface ContentItem {
    icon: LucideIcon
    title: string
    description: string
}

interface ContentProps {
    title?: string
    description?: string
    items?: ContentItem[]
    className?: string
}

export default function Content({ title, description, items, className }: ContentProps) {
    if (!items || items.length === 0) return null

    return (
        <section className={cn('bg-background @container py-24', className)}>
            <div className="mx-auto max-w-5xl px-6">
                {(title || description) && (
                    <div className="space-y-4">
                        {title && <h2 className="text-balance font-serif text-4xl font-medium">{title}</h2>}
                        {description && <p className="text-muted-foreground">{description}</p>}
                    </div>
                )}
                <div className={cn(
                    'mt-12 grid grid-cols-2 gap-x-12 gap-y-8 text-sm',
                    items.length >= 3 && '@xl:grid-cols-3'
                )}>
                    {items.map((item) => {
                        const Icon = item.icon
                        return (
                            <div key={item.title} className="space-y-3 border-t pt-6">
                                <Icon className="size-4" style={{ color: '#473424' }} />
                                <h3 className="text-foreground font-medium">{item.title}</h3>
                                <p className="text-muted-foreground leading-5">
                                    {item.description}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

import { cn } from "@/lib/utils"

interface PageSectionProps {
  children: React.ReactNode
  className?: string
  border?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const maxWidths = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-6xl',
} as const

export function PageSection({
  children,
  className,
  border = true,
  size = 'lg',
}: PageSectionProps) {
  return (
    <section className={cn(border && 'border-t', 'py-24', className)}>
      <div className={cn('mx-auto px-6', maxWidths[size])}>
        {children}
      </div>
    </section>
  )
}

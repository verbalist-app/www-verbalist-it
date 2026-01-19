import { cn } from "@/lib/utils"

interface TrustedByProps {
  text?: string
  className?: string
}

export function TrustedBy({
  text,
  className,
}: TrustedByProps) {
  return (
    <section className={cn("border-t py-12 md:py-16", className)}>
      <div className="mx-auto max-w-5xl px-6">
        <div className={cn(
          "flex flex-col gap-8",
          text && "lg:flex-row lg:items-center lg:gap-16"
        )}>
          {text && (
            <p className="text-sm text-muted-foreground text-center lg:text-left lg:shrink-0 lg:max-w-[180px]">
              {text}
            </p>
          )}
          <div className={cn(
            "flex flex-wrap items-center justify-center gap-6 lg:gap-8",
            text && "lg:justify-start lg:flex-1"
          )}>
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src="/logo 2.svg"
                alt={`Logo ${i + 1}`}
                className="h-6 w-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { cn } from "@/lib/utils"

const logos = [
  { name: "Jurny", src: "/logos/jurny.svg" },
  { name: "Pompea", src: "/logos/pompea.svg" },
  { name: "Rentokil", src: "/logos/rentokil.svg" },
  { name: "Meccanotecnica", src: "/logos/meccanotecnica.svg" },
  { name: "Plastisac", src: "/logos/plastisac.svg" },
  { name: "Sogese", src: "/logos/sogese.svg" },
]

interface TrustedByProps {
  text?: string
  className?: string
}

export function TrustedBy({
  text,
  className,
}: TrustedByProps) {
  return (
    <section className={cn("border-t py-16 md:py-20", className)}>
      <div className="mx-auto max-w-6xl px-6">
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
            "flex flex-wrap items-center justify-center gap-8 lg:gap-12",
            text && "lg:justify-start lg:flex-1"
          )}>
            {logos.map((logo) => (
              <div
                key={logo.name}
                role="img"
                aria-label={logo.name}
                className="h-7 w-24"
                style={{
                  backgroundColor: '#473424',
                  mask: `url(${logo.src}) no-repeat center / contain`,
                  WebkitMask: `url(${logo.src}) no-repeat center / contain`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

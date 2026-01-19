import { cn } from "@/lib/utils"

interface Testimonial {
  quote: string
  metric?: string
  author: string
  role: string
  company: string
}

interface TestimonialsProps {
  title?: string
  testimonials: Testimonial[]
  className?: string
}

export function Testimonials({
  title = "Cosa dicono i nostri clienti",
  testimonials,
  className,
}: TestimonialsProps) {
  return (
    <section className={cn("border-t py-16 md:py-20", className)}>
      <div className="mx-auto max-w-5xl px-6">
        {title && (
          <h2 className="text-xl font-medium tracking-tight text-center mb-12">
            {title}
          </h2>
        )}
        <div className={cn(
          "grid gap-6",
          testimonials.length === 1 && "max-w-2xl mx-auto",
          testimonials.length === 2 && "md:grid-cols-2",
          testimonials.length >= 3 && "md:grid-cols-2 lg:grid-cols-3"
        )}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-card p-6 space-y-4"
            >
              {testimonial.metric && (
                <div className="text-2xl font-medium tracking-tight text-foreground">
                  {testimonial.metric}
                </div>
              )}
              <p className="text-sm text-muted-foreground leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="pt-2 border-t border-border">
                <div className="text-sm font-medium text-foreground">
                  {testimonial.author}
                </div>
                <div className="text-xs text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

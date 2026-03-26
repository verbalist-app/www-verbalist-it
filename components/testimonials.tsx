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
  // Temporaneamente nascosto: in attesa di recensioni reali
  return null
}

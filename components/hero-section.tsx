import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TextEffect } from "@/components/motion-primitives/text-effect"
import { AnimatedGroup } from "@/components/motion-primitives/animated-group"
import { HeroHeader } from "@/components/header"
import { cn } from "@/lib/utils"

interface HeroSectionProps {
  className?: string
  showHeader?: boolean
}

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

export function HeroSection({ className, showHeader = true }: HeroSectionProps) {
  return (
    <>
      {showHeader && <HeroHeader />}
      <main className={cn("overflow-hidden", className)}>
        <section className="pb-16 md:pb-20">
          <div className={cn("relative", showHeader ? "pt-32 md:pt-40" : "pt-16 md:pt-20")}>
            <div className="mx-auto max-w-5xl px-6">
              <div className="text-center">
                <AnimatedGroup variants={transitionVariants}>
                  <Link
                    href="/piattaforma"
                    className="group mx-auto flex w-fit items-center gap-3 rounded-full border border-border bg-card px-4 py-2 transition-colors duration-300 hover:bg-muted"
                  >
                    <span className="text-foreground text-xs font-medium">Vedi come funziona</span>
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </AnimatedGroup>

                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-medium tracking-tight md:text-5xl lg:mt-8"
                >
                  Dalla SERP al contenuto.
                </TextEffect>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground"
                >
                  Dal dato SERP al testo finale: analisi top 10, pattern vincenti (struttura, lunghezza, topic, E-E-A-T) e generazione ottimizzata per Google e risposte AI.
                </TextEffect>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-10 flex flex-col items-center justify-center gap-3 md:flex-row"
                >
                  <Button asChild size="lg" className="rounded-full px-6">
                    <Link href="/contatti">Prenota una demo</Link>
                  </Button>
                  <Button asChild size="lg" variant="ghost" className="rounded-full px-6">
                    <Link href="/piattaforma">Come funziona</Link>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <div className="relative mt-16 overflow-hidden px-6 md:mt-24">
                <div className="relative mx-auto max-w-5xl overflow-hidden rounded-xl border border-border bg-card p-2">
                  <Image
                    className="relative rounded-lg"
                    src="/app-screenshot.png"
                    alt="Verbalist App"
                    width={2880}
                    height={1842}
                  />
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>
      </main>
    </>
  )
}

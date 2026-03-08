"use client"

import { motion, useReducedMotion } from "motion/react"
import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

export function InfiniteMovingCarousel({ images }: { images: string[] }) {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (!carouselRef.current) return

    setWidth(carouselRef.current.clientWidth)

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setWidth(entry.target.clientWidth)
        }
      })
    })
    observer.observe(carouselRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
      }}
      className={cn("w-full overflow-hidden")}
    >
      <motion.div
        initial={{ x: -width }}
        animate={shouldReduceMotion ? { x: 0 } : { x: -(width / 2 + 24) }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : {
                duration: 3 * images.length,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }
        }
        ref={carouselRef}
        className="flex w-max items-center gap-12"
      >
        {[...images, ...images].map((image, index) => (
          <div
            key={`company-${index}`}
            role="img"
            aria-label={`Company ${index + 1}`}
            className="h-7 w-24 shrink-0 bg-foreground"
            style={{
              mask: `url(${image}) no-repeat center / contain`,
              WebkitMask: `url(${image}) no-repeat center / contain`,
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}

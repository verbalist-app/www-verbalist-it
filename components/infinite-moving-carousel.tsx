"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

export function InfiniteMovingCarousel({ images }: { images: string[] }) {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)

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
        animate={{ x: -(width / 2 + 24) }}
        transition={{
          duration: 3 * images.length,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        ref={carouselRef}
        className="flex w-max items-center gap-12"
      >
        {[...images, ...images].map((image, index) => (
          <Image
            key={`company-${index}`}
            src={image}
            alt={`Company ${index + 1}`}
            width={120}
            height={28}
            className="h-7 w-auto shrink-0 brightness-0 dark:invert"
          />
        ))}
      </motion.div>
    </div>
  )
}

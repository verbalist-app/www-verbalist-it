"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const logos = [
  { name: "Google", src: "/logos/google.svg" },
  { name: "ChatGPT", src: "/logos/openai.svg" },
  { name: "Perplexity", src: "/logos/perplexity.svg" },
  { name: "Gemini", src: "/logos/gemini.svg" },
  { name: "Claude", src: "/logos/claude.svg" },
]

export function RotatingLogos() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % logos.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center h-12 md:h-14 relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center gap-3"
        >
          <Image
            src={logos[currentIndex].src}
            alt={logos[currentIndex].name}
            width={40}
            height={40}
            className="h-9 md:h-12 w-auto"
          />
          <span className="text-4xl md:text-5xl font-medium tracking-tight">{logos[currentIndex].name}</span>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'motion/react'

type LogoGroup = 'clients' | 'ai'

const logoGroups: Record<LogoGroup, { name: string; src: string }[]> = {
  clients: [
    { name: 'Jurny', src: '/logos/jurny.svg' },
    { name: 'Pompea', src: '/logos/pompea.svg' },
    { name: 'Rentokil', src: '/logos/rentokil.svg' },
  ],
  ai: [
    { name: 'Meccanotecnica', src: '/logos/meccanotecnica.svg' },
    { name: 'Plastisac', src: '/logos/plastisac.svg' },
    { name: 'Sogese', src: '/logos/sogese.svg' },
  ],
}

export default function LogoCloud() {
  const [currentGroup, setCurrentGroup] = useState<LogoGroup>('clients')

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGroup((prev) => {
        const groups = Object.keys(logoGroups) as LogoGroup[]
        const currentIndex = groups.indexOf(prev)
        return groups[(currentIndex + 1) % groups.length]
      })
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-background py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto grid h-8 max-w-2xl grid-cols-3 items-center gap-8">
          <AnimatePresence initial={false} mode="popLayout">
            {logoGroups[currentGroup].map((logo, i) => (
              <motion.div
                key={`${currentGroup}-${i}`}
                className="flex items-center justify-center"
                initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: 12, filter: 'blur(6px)', scale: 0.5 }}
                transition={{ delay: i * 0.1, duration: 1.5, type: 'spring', bounce: 0.2 }}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={28}
                  className="h-7 w-auto brightness-0 opacity-60 dark:invert"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

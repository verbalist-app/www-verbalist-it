import React from 'react'
import Image from 'next/image'

const logos = [
  { name: 'Jurny', src: '/logos/jurny.svg' },
  { name: 'Pompea', src: '/logos/pompea.svg' },
  { name: 'Rentokil', src: '/logos/rentokil.svg' },
  { name: 'Meccanotecnica', src: '/logos/meccanotecnica.svg' },
  { name: 'Plastisac', src: '/logos/plastisac.svg' },
  { name: 'Sogese', src: '/logos/sogese.svg' },
]

interface LogoCloudProps {
  className?: string
}

export default function LogoCloud({ className }: LogoCloudProps) {
  return (
    <section className={`bg-background @container py-12 ${className ?? ''}`}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 md:justify-between">
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
    </section>
  )
}

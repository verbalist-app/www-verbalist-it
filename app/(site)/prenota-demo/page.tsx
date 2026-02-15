"use client"

import { ArrowRight } from "lucide-react"
import React from "react"

import { Card } from "@/components/ui/card"
import { HubSpotForm } from "@/components/hubspot-form"
import { InfiniteMovingCarousel } from "@/components/infinite-moving-carousel"

const benefits = [
  "Demo sulla tua keyword, non su esempi generici.",
  "Vedi l'analisi SERP, il pattern detection e la generazione contenuto.",
  "Rispondiamo a tutte le tue domande.",
]

const visibleBenefits = benefits.slice(0, 2)

const companies = [
  "/logos/jurny.svg",
  "/logos/pompea.svg",
  "/logos/rentokil.svg",
  "/logos/meccanotecnica.svg",
  "/logos/plastisac.svg",
  "/logos/sogese.svg",
]

export default function PrenotaDemoPage() {
  return (
    <section className="pt-20 md:pt-28 pb-24 md:pb-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-center gap-4 lg:items-start lg:gap-8">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Prenota una demo</p>
            <h1 className="max-w-md text-center text-3xl font-medium tracking-tight md:text-4xl lg:max-w-xl lg:text-left">
              Vedi Verbalist in azione sul tuo caso
            </h1>
            <ul className="flex flex-col">
              {visibleBenefits.map((benefit, index) => (
                <li
                  key={`benefit-${index}`}
                  className="flex max-w-md items-start gap-2 px-4 lg:border-b lg:py-6"
                >
                  <ArrowRight
                    className="hidden size-5 shrink-0 lg:block"
                    strokeWidth={1.5}
                  />
                  <p className="text-center text-sm text-muted-foreground lg:text-left lg:text-foreground">
                    {benefit}
                  </p>
                </li>
              ))}
              {benefits.length > 2 && (
                <li
                  className="hidden max-w-md items-start gap-2 px-4 lg:flex lg:py-6"
                >
                  <ArrowRight
                    className="size-5 shrink-0"
                    strokeWidth={1.5}
                  />
                  <p className="text-left text-sm text-foreground">
                    {benefits[2]}
                  </p>
                </li>
              )}
            </ul>
            <div className="mt-20 hidden w-full overflow-hidden lg:block">
              <InfiniteMovingCarousel images={companies} />
            </div>
          </div>
          <Card className="w-full max-w-xl place-self-center bg-muted/50 px-6 py-10 lg:max-w-none lg:place-self-start">
            <HubSpotForm
              portalId="26552285"
              formId="4267f028-3ada-4953-863f-7fcde9648c1c"
              region="eu1"
              locale="it"
            />
          </Card>
          <div className="mt-10 block w-full overflow-hidden lg:hidden">
            <InfiniteMovingCarousel images={companies} />
          </div>
        </div>
      </div>
    </section>
  )
}

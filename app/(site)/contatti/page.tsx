"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import React, { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

import { Badge } from "@/components/ui/badge"
import { PageBreadcrumb } from "@/components/page-breadcrumb"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const InfiniteMovingCarousel = ({ images }: { images: string[] }) => {
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
        {[...images, ...images].map((image, index) => {
          return (
            <img
              key={`company-${index}`}
              src={image}
              alt={`Company ${index + 1}`}
              className="size-24 shrink-0 object-contain dark:invert"
            />
          )
        })}
      </motion.div>
    </div>
  )
}

const FormGroup = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex w-full flex-col gap-2">{children}</div>
}

const benefits = [
  "Demo sulla tua keyword, non su esempi generici.",
  "Vedi l'analisi SERP, il pattern detection e la generazione contenuto.",
  "Rispondiamo a tutte le tue domande.",
]

const companies = [
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-6.svg",
]

export default function ContattiPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Qui andrà la logica di invio del form
    console.log("Form submitted")
  }

  return (
    <section className="pt-20 md:pt-28 pb-24 md:pb-32">
      <div className="mx-auto max-w-6xl px-6">
        <PageBreadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Contatti" },
          ]}
        />
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-center gap-4 lg:items-start lg:gap-8">
            <Badge variant="outline">Prenota una demo</Badge>
            <h1 className="mt-2 max-w-md text-center text-3xl font-medium tracking-tight md:text-4xl lg:mt-0 lg:max-w-xl lg:text-left">
              Vedi Verbalist in azione sul tuo caso
            </h1>
            <ul className="flex flex-col">
              {benefits.map((benefit, index) => {
                return (
                  <li
                    key={`benefit-${index}`}
                    className="flex max-w-md items-start gap-2 px-4 last:hidden last:border-b-0 lg:border-b lg:py-6 last:lg:flex"
                  >
                    <ArrowRight
                      className="hidden size-5 shrink-0 lg:block"
                      strokeWidth={1.5}
                    />
                    <p className="text-center text-sm text-muted-foreground lg:text-left lg:text-foreground">
                      {benefit}
                    </p>
                  </li>
                )
              })}
            </ul>
            <div className="mt-20 hidden w-full overflow-hidden lg:block">
              <InfiniteMovingCarousel images={companies} />
            </div>
          </div>
          <Card className="w-full max-w-xl place-self-center bg-muted/50 px-4 pt-10 pb-4 lg:max-w-none lg:place-self-start">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="flex w-full items-center gap-4">
                <FormGroup>
                  <Label className="text-sm">Nome</Label>
                  <Input
                    type="text"
                    placeholder="Mario"
                    className="bg-background"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label className="text-sm">Cognome</Label>
                  <Input
                    type="text"
                    placeholder="Rossi"
                    className="bg-background"
                    required
                  />
                </FormGroup>
              </div>
              <FormGroup>
                <Label className="text-sm">Email aziendale</Label>
                <Input
                  type="email"
                  placeholder="mario.rossi@azienda.it"
                  className="bg-background"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label className="text-sm">Ruolo</Label>
                <Input
                  type="text"
                  placeholder="SEO Specialist, Content Manager..."
                  className="bg-background"
                />
              </FormGroup>
              <FormGroup>
                <Label className="text-sm">Cosa vorresti vedere nella demo?</Label>
                <Textarea
                  placeholder="Keyword, settore, quanti contenuti produci al mese..."
                  className="bg-background"
                  rows={4}
                />
              </FormGroup>
              <FormGroup>
                <Label className="text-sm">Come ci hai conosciuto?</Label>
                <Select>
                  <SelectTrigger className="w-full bg-background">
                    <SelectValue placeholder="Seleziona un'opzione" />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    <SelectItem value="google">Ricerca Google</SelectItem>
                    <SelectItem value="linkedin">LinkedIn</SelectItem>
                    <SelectItem value="twitter">Twitter/X</SelectItem>
                    <SelectItem value="blog">Blog/Articolo</SelectItem>
                    <SelectItem value="referral">Passaparola</SelectItem>
                    <SelectItem value="evento">Evento/Webinar</SelectItem>
                    <SelectItem value="altro">Altro</SelectItem>
                  </SelectContent>
                </Select>
              </FormGroup>
              <Button type="submit" className="w-fit place-self-end">
                Invia richiesta
              </Button>
            </form>
          </Card>
          <div className="mt-10 block w-full overflow-hidden lg:hidden">
            <InfiniteMovingCarousel images={companies} />
          </div>
        </div>
      </div>
    </section>
  )
}

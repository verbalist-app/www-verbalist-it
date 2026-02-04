"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import React, { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { HubSpotForm, type DomTranslations } from "@/components/hubspot-form"

const hubspotEnTranslations = {
  en: {
    fieldLabels: {
      firstname: "First Name",
      lastname: "Last Name",
      email: "Email",
      phone: "Phone Number",
      mobilephone: "Mobile Phone",
      company: "Company",
      website: "Website",
      jobtitle: "Job Title",
      message: "Message",
      city: "City",
      state: "State/Region",
      country: "Country",
      numemployees: "Number of Employees",
      industry: "Industry",
      how_did_you_hear_about_us_: "How did you hear about us?",
    },
    submitText: "Submit",
    required: "This field is required.",
    invalidEmail: "Please enter a valid email address.",
    invalidEmailFormat: "Please enter a valid email address.",
    phoneInvalidCharacters: "Phone number can only contain numbers, +, -, (, ) and spaces.",
    missingSelect: "Please select an option.",
  },
}

/**
 * DOM-level text replacements for anything the HubSpot `translations`
 * API does not cover (custom fields, checkbox labels, select options,
 * consent text, rich text, etc.).
 *
 * Keys = exact Italian text shown in the rendered form.
 * Values = English replacement.
 *
 * TIP: Inspect the live form with DevTools to find the exact Italian
 * strings if any are still untranslated, then add them here.
 */
const domTranslations: DomTranslations = {
  // "Interesse" field label + possible select options
  "Interesse": "Interest",
  "Seleziona": "Select",
  "Seleziona...": "Select...",
  "Seleziona un'opzione": "Select an option",
  "-- Seleziona --": "-- Select --",
  "SEO": "SEO",
  "Content Marketing": "Content Marketing",
  "Analisi Competitor": "Competitor Analysis",
  "Generazione Contenuti": "Content Generation",
  "Analisi SERP": "SERP Analysis",
  "Scraping Competitor": "Competitor Scraping",
  "Analisi Pattern": "Pattern Analysis",
  "Altro": "Other",

  // Exact checkbox consent labels from the form
  "Accetto di ricevere altre comunicazioni da Nur Srl.": "I agree to receive further communications from Nur Srl.",
  "Desidero iscrivermi alla newsletter di NUR Srl.": "I would like to subscribe to the NUR Srl newsletter.",
  "Invia": "Submit",
  "Prenota una demo": "Book a demo",
  "Richiedi informazioni": "Request information",
  "Campo obbligatorio": "Required field",
  "Questo campo è obbligatorio.": "This field is required.",
  "Inserisci un indirizzo email valido.": "Please enter a valid email address.",
}

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

const benefits = [
  "Demo on your keyword, not generic examples.",
  "See SERP analysis, pattern detection and content generation.",
  "We answer all your questions.",
]

const companies = [
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-6.svg",
]

export default function BookDemoPage() {
  return (
    <section className="pt-20 md:pt-28 pb-24 md:pb-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-center gap-4 lg:items-start lg:gap-8">
            <Badge variant="outline">Book a demo</Badge>
            <h1 className="mt-2 max-w-md text-center text-3xl font-medium tracking-tight md:text-4xl lg:mt-0 lg:max-w-xl lg:text-left">
              See Verbalist in action on your case
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
          <Card className="w-full max-w-xl place-self-center bg-muted/50 px-6 py-10 lg:max-w-none lg:place-self-start">
            <HubSpotForm
              portalId="26552285"
              formId="4267f028-3ada-4953-863f-7fcde9648c1c"
              region="eu1"
              locale="en"
              translations={hubspotEnTranslations}
              domTranslations={domTranslations}
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

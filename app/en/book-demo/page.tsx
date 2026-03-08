"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import React, { useState } from "react"

import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { HubSpotForm, type DomTranslations } from "@/components/hubspot-form"
import { InfiniteMovingCarousel } from "@/components/infinite-moving-carousel"

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

const domTranslations: DomTranslations = {
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
  "Accetto di ricevere altre comunicazioni da Nur Srl.": "I agree to receive further communications from Nur Srl.",
  "Desidero iscrivermi alla newsletter di NUR Srl.": "I would like to subscribe to the NUR Srl newsletter.",
  "Invia": "Submit",
  "Prenota una demo": "Book a demo",
  "Richiedi informazioni": "Request information",
  "Campo obbligatorio": "Required field",
  "Questo campo è obbligatorio.": "This field is required.",
  "Inserisci un indirizzo email valido.": "Please enter a valid email address.",
}

const benefits = [
  "We'll walk you through the full workflow on one of your keywords.",
  "From SERP analysis to AI-optimized content generation.",
  "No strings attached: 20 minutes to see if Verbalist is right for you.",
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

export default function BookDemoPage() {
  const [privacyAccepted, setPrivacyAccepted] = useState(false)
  const [marketingAccepted, setMarketingAccepted] = useState(false)
  const [profilingAccepted, setProfilingAccepted] = useState(false)

  return (
    <section className="pt-20 md:pt-28 pb-24 md:pb-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-center gap-4 lg:items-start lg:gap-8">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Book a demo</p>
            <h1 className="font-serif max-w-md text-center text-3xl font-medium tracking-tighter md:text-4xl lg:max-w-xl lg:text-left">
              See Verbalist in action on your site
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
              locale="en"
              translations={hubspotEnTranslations}
              domTranslations={domTranslations}
              submitDisabled={!privacyAccepted}
              hideConsentCheckboxes
            />

            <div className="-mt-2 space-y-3 border-t border-border pt-4">
              <div className="flex items-start gap-3">
                <Checkbox
                  id="privacy-consent"
                  checked={privacyAccepted}
                  onCheckedChange={(checked) => setPrivacyAccepted(checked === true)}
                  aria-required="true"
                />
                <label
                  htmlFor="privacy-consent"
                  className="text-xs leading-relaxed text-foreground/70 cursor-pointer"
                >
                  I have read and accept the{" "}
                  <Link href="/en/privacy-policy" target="_blank" className="underline text-foreground/90 hover:text-foreground">
                    Privacy Policy
                  </Link>
                  {" "}pursuant to EU Regulation 2016/679 (GDPR).{" "}
                  <span className="text-destructive">*</span>
                </label>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="marketing-consent"
                  checked={marketingAccepted}
                  onCheckedChange={(checked) => setMarketingAccepted(checked === true)}
                />
                <label
                  htmlFor="marketing-consent"
                  className="text-xs leading-relaxed text-foreground/70 cursor-pointer"
                >
                  I consent to the processing of my personal data for direct marketing purposes, including commercial communications, newsletters and advertising material, as described in section 3a) of the Privacy Policy.
                </label>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="profiling-consent"
                  checked={profilingAccepted}
                  onCheckedChange={(checked) => setProfilingAccepted(checked === true)}
                />
                <label
                  htmlFor="profiling-consent"
                  className="text-xs leading-relaxed text-foreground/70 cursor-pointer"
                >
                  I consent to the processing of my personal data for profiling activities, in order to receive personalized services and communications, as described in section 3b) of the Privacy Policy.
                </label>
              </div>
            </div>
          </Card>
          <div className="mt-10 block w-full overflow-hidden lg:hidden">
            <InfiniteMovingCarousel images={companies} />
          </div>
        </div>
      </div>
    </section>
  )
}

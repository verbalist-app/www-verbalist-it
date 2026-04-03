"use client"

import { ArrowRight, Cookie } from "lucide-react"
import Link from "next/link"
import React, { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { HubSpotForm } from "@/components/hubspot-form"
import { InfiniteMovingCarousel } from "@/components/infinite-moving-carousel"
import { useCookieConsent, showCookieConsentBanner } from "@/hooks/use-cookie-consent"

const benefits = [
  "Ti mostriamo il flusso completo su una keyword del tuo sito.",
  "Dall'analisi dei risultati Google alla generazione del contenuto ottimizzato per l'AI.",
  "Zero impegno: 20 minuti per capire se Verbalist fa al caso tuo.",
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
  const cookieConsent = useCookieConsent()
  const marketingCookiesAllowed = cookieConsent?.marketing === true

  const [privacyAccepted, setPrivacyAccepted] = useState(false)
  const [marketingAccepted, setMarketingAccepted] = useState(false)
  const [profilingAccepted, setProfilingAccepted] = useState(false)

  return (
    <section className="pt-20 md:pt-28 pb-24 md:pb-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-center gap-4 lg:items-start lg:gap-8">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Prenota una demo</p>
            <h1 className="max-w-md text-center text-3xl font-serif font-normal tracking-tight sm:text-4xl lg:max-w-xl lg:text-left">
              Vedi Verbalist in azione sul tuo sito
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
            <div className="mt-8 hidden rounded-lg border border-border bg-muted/30 p-4 lg:block">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">Cosa succede dopo</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-foreground/50 shrink-0">1.</span>
                  Ti ricontattiamo entro 24 ore lavorative.
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-foreground/50 shrink-0">2.</span>
                  Demo personalizzata di 20 min su una keyword del tuo sito.
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-foreground/50 shrink-0">3.</span>
                  Nessun impegno: decidi tu se procedere.
                </li>
              </ul>
            </div>
            <div className="mt-8 hidden w-full overflow-hidden lg:block">
              <InfiniteMovingCarousel images={companies} />
            </div>
          </div>
          <Card className="w-full max-w-xl place-self-center bg-muted/50 px-6 py-10 lg:max-w-none lg:place-self-start">
            {marketingCookiesAllowed ? (
              <>
                <HubSpotForm
                  portalId="26552285"
                  formId="4267f028-3ada-4953-863f-7fcde9648c1c"
                  region="eu1"
                  locale="it"
                  submitDisabled={!privacyAccepted}
                  hideConsentCheckboxes
                />

                <div className="mt-6 space-y-3 border-t border-border pt-4">
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
                      Ho letto e accetto l&apos;
                      <Link href="/privacy-policy" target="_blank" className="underline text-foreground/90 hover:text-foreground">
                        Informativa Privacy
                      </Link>
                      {" "}ai sensi del Regolamento UE 2016/679 (GDPR).{" "}
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
                      Acconsento al trattamento dei miei dati personali per finalità di marketing diretto, incluso l&apos;invio di comunicazioni commerciali, newsletter e materiale pubblicitario, come descritto al punto 3a) dell&apos;Informativa Privacy.
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
                      Acconsento al trattamento dei miei dati personali per attività di profilazione, al fine di ricevere servizi e comunicazioni personalizzate, come descritto al punto 3b) dell&apos;Informativa Privacy.
                    </label>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 space-y-4 text-center">
                <Cookie className="size-8 text-muted-foreground/60" strokeWidth={1.5} />
                <div className="space-y-1.5">
                  <p className="text-sm font-medium text-foreground">
                    Cookie necessari per il modulo
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed max-w-sm">
                    Per utilizzare questo modulo è necessario accettare i cookie di marketing.
                    I dati raccolti vengono utilizzati esclusivamente per gestire la tua richiesta.
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs h-8"
                  onClick={showCookieConsentBanner}
                >
                  Gestisci preferenze cookie
                </Button>
                <p className="text-xs text-muted-foreground">
                  In alternativa, scrivici a{" "}
                  <a href="mailto:info@nur.it" className="underline hover:text-foreground transition-colors">
                    info@nur.it
                  </a>
                </p>
              </div>
            )}
          </Card>
          <div className="mt-10 block w-full overflow-hidden lg:hidden">
            <InfiniteMovingCarousel images={companies} />
          </div>
        </div>
      </div>
    </section>
  )
}

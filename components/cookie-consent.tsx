"use client"

import * as React from "react"
import Link from "next/link"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

type Locale = "it" | "en"

interface CookieConsentProps extends React.HTMLAttributes<HTMLDivElement> {
  locale?: Locale
  onAcceptCallback?: () => void
  onDeclineCallback?: () => void
}

const translations = {
  it: {
    description: "Utilizziamo cookie per migliorare la tua esperienza. Accettando, ci consenti di usare cookie analitici.",
    decline: "Rifiuta",
    accept: "Accetta",
    learnMore: "Cookie Policy",
    learnMoreHref: "/cookie-policy",
  },
  en: {
    description: "We use cookies to improve your experience. By accepting, you allow us to use analytics cookies.",
    decline: "Decline",
    accept: "Accept",
    learnMore: "Cookie Policy",
    learnMoreHref: "/en/cookie-policy",
  },
}

const CookieConsent = React.forwardRef<HTMLDivElement, CookieConsentProps>(
  (
    {
      locale = "it",
      onAcceptCallback = () => {},
      onDeclineCallback = () => {},
      className,
      ...props
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [hide, setHide] = React.useState(false)

    const t = translations[locale]

    const handleAccept = React.useCallback(() => {
      setIsOpen(false)
      // Set cookie for 1 year
      const expiryDate = new Date()
      expiryDate.setFullYear(expiryDate.getFullYear() + 1)
      document.cookie = `cookieConsent=accepted; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`
      setTimeout(() => {
        setHide(true)
      }, 500)
      onAcceptCallback()
    }, [onAcceptCallback])

    const handleDecline = React.useCallback(() => {
      setIsOpen(false)
      // Set cookie for 6 months (user declined, we remember but ask again later)
      const expiryDate = new Date()
      expiryDate.setMonth(expiryDate.getMonth() + 6)
      document.cookie = `cookieConsent=declined; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`
      setTimeout(() => {
        setHide(true)
      }, 500)
      onDeclineCallback()
    }, [onDeclineCallback])

    React.useEffect(() => {
      // Check if user already made a choice
      const consent = document.cookie
        .split("; ")
        .find((row) => row.startsWith("cookieConsent="))
        ?.split("=")[1]

      if (consent === "accepted" || consent === "declined") {
        setHide(true)
        if (consent === "accepted") {
          onAcceptCallback()
        }
      } else {
        // Small delay before showing to avoid flash
        const timer = setTimeout(() => {
          setIsOpen(true)
        }, 1000)
        return () => clearTimeout(timer)
      }
    }, [onAcceptCallback])

    if (hide) return null

    return (
      <div
        ref={ref}
        className={cn(
          "fixed z-50 transition-all duration-500 ease-out",
          "bottom-0 left-0 right-0 sm:left-4 sm:bottom-4 sm:right-auto w-full sm:max-w-lg",
          !isOpen
            ? "translate-y-full opacity-0"
            : "translate-y-0 opacity-100",
          className,
        )}
        {...props}
      >
        <Card className="m-3 sm:m-0 py-4 shadow-lg border-border/50 bg-background/95 backdrop-blur-sm relative">
          {/* X button to close/decline */}
          <button
            onClick={handleDecline}
            className="absolute top-2 right-2 p-1 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label={t.decline}
          >
            <X className="h-4 w-4" />
          </button>
          <CardContent className="flex flex-col sm:flex-row gap-4 p-0 px-4 pr-8">
            <CardDescription className="text-xs sm:text-sm flex-1 text-foreground/80">
              {t.description}{" "}
              <Link
                href={t.learnMoreHref}
                className="text-foreground underline underline-offset-2 hover:no-underline"
              >
                {t.learnMore}
              </Link>
            </CardDescription>
            <div className="flex items-center gap-2 justify-end shrink-0">
              <Button
                onClick={handleDecline}
                size="sm"
                variant="ghost"
                className="text-xs h-8 px-3"
              >
                {t.decline}
              </Button>
              <Button
                onClick={handleAccept}
                size="sm"
                className="text-xs h-8 px-4"
              >
                {t.accept}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  },
)

CookieConsent.displayName = "CookieConsent"

export { CookieConsent }
export default CookieConsent

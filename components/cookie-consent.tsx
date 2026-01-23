"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

type Locale = "it" | "en"

interface CookieConsentProps {
  variant?: "default" | "small" | "minimal"
  locale?: Locale
  onAcceptCallback?: () => void
  onDeclineCallback?: () => void
}

const translations = {
  it: {
    title: "Utilizziamo i cookie",
    description: "Utilizziamo i cookie per offrirti la migliore esperienza sul nostro sito. Per maggiori informazioni, consulta la nostra cookie policy.",
    acceptNote: "Cliccando",
    accept: "Accetta",
    acceptSuffix: ", acconsenti all'uso dei cookie.",
    decline: "Rifiuta",
    learnMore: "Maggiori informazioni",
    learnMoreHref: "/cookie-policy",
    minimal: "Utilizziamo i cookie per migliorare la tua esperienza.",
    cookieNotice: "Cookie",
  },
  en: {
    title: "We use cookies",
    description: "We use cookies to ensure you get the best experience on our website. For more information on how we use cookies, please see our cookie policy.",
    acceptNote: "By clicking",
    accept: "Accept",
    acceptSuffix: ", you agree to our use of cookies.",
    decline: "Decline",
    learnMore: "Learn more",
    learnMoreHref: "/en/cookie-policy",
    minimal: "We use cookies to enhance your browsing experience.",
    cookieNotice: "Cookies",
  },
}

export function CookieConsent({
  variant = "default",
  locale = "it",
  onAcceptCallback = () => {},
  onDeclineCallback = () => {},
}: CookieConsentProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [hide, setHide] = useState(false)

  const t = translations[locale]

  const accept = () => {
    setIsOpen(false)
    // Set cookie for 1 year
    const expiryDate = new Date()
    expiryDate.setFullYear(expiryDate.getFullYear() + 1)
    document.cookie = `cookieConsent=accepted; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`
    setTimeout(() => {
      setHide(true)
    }, 700)
    onAcceptCallback()
  }

  const decline = () => {
    setIsOpen(false)
    // Set cookie for 6 months
    const expiryDate = new Date()
    expiryDate.setMonth(expiryDate.getMonth() + 6)
    document.cookie = `cookieConsent=declined; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`
    setTimeout(() => {
      setHide(true)
    }, 700)
    onDeclineCallback()
  }

  useEffect(() => {
    try {
      const consent = document.cookie
        .split("; ")
        .find((row) => row.startsWith("cookieConsent="))
        ?.split("=")[1]

      if (consent === "accepted") {
        setHide(true)
        onAcceptCallback()
      } else if (consent === "declined") {
        setHide(true)
      } else {
        // Small delay before showing
        setTimeout(() => {
          setIsOpen(true)
        }, 1000)
      }
    } catch (error) {
      console.error("Error checking cookie consent:", error)
    }
  }, [onAcceptCallback])

  if (hide) return null

  return variant === "default" ? (
    <div
      className={cn(
        "fixed z-[200] bottom-0 left-0 right-0 p-4 sm:p-0 sm:left-4 sm:bottom-4 w-full sm:max-w-md duration-700",
        !isOpen
          ? "transition-[opacity,transform] translate-y-8 opacity-0"
          : "transition-[opacity,transform] translate-y-0 opacity-100"
      )}
    >
      <div className="dark:bg-card bg-background rounded-lg sm:rounded-md border border-border shadow-lg relative">
        {/* X button */}
        <button
          onClick={decline}
          className="absolute top-3 right-3 p-1 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          aria-label={t.decline}
        >
          <X className="h-4 w-4" />
        </button>
        <div className="grid gap-2">
          <div className="border-b border-border h-12 sm:h-14 flex items-center p-3 sm:p-4 pr-10">
            <h1 className="text-base sm:text-lg font-medium">{t.title}</h1>
          </div>
          <div className="p-3 sm:p-4">
            <p className="text-xs sm:text-sm font-normal text-start text-muted-foreground">
              {t.description}
              <br />
              <br />
              <span className="text-xs">
                {t.acceptNote}{" "}
                <span className="font-medium text-foreground">{t.accept}</span>
                {t.acceptSuffix}
              </span>
              <br />
              <Link href={t.learnMoreHref} className="text-xs underline hover:no-underline">
                {t.learnMore}
              </Link>
            </p>
          </div>
          <div className="grid grid-cols-2 items-center gap-2 p-3 sm:p-4 sm:py-5 border-t border-border dark:bg-background/20">
            <Button onClick={accept} variant="default" className="w-full">
              {t.accept}
            </Button>
            <Button onClick={decline} variant="outline" className="w-full">
              {t.decline}
            </Button>
          </div>
        </div>
      </div>
    </div>
  ) : variant === "small" ? (
    <div
      className={cn(
        "fixed z-[200] bottom-0 left-0 right-0 p-4 sm:p-0 sm:left-4 sm:bottom-4 w-full sm:max-w-md duration-700",
        !isOpen
          ? "transition-[opacity,transform] translate-y-8 opacity-0"
          : "transition-[opacity,transform] translate-y-0 opacity-100"
      )}
    >
      <div className="m-0 sm:m-3 dark:bg-card bg-background border border-border rounded-lg shadow-lg relative">
        {/* X button */}
        <button
          onClick={decline}
          className="absolute top-2 right-2 p-1 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          aria-label={t.decline}
        >
          <X className="h-4 w-4" />
        </button>
        <div className="flex items-center p-3 pr-10">
          <h1 className="text-base sm:text-lg font-medium">{t.title}</h1>
        </div>
        <div className="p-3 -mt-2">
          <p className="text-xs sm:text-sm text-left text-muted-foreground">
            {t.description}
          </p>
        </div>
        <div className="grid grid-cols-2 items-center gap-2 p-3 mt-2 border-t">
          <Button onClick={accept} className="w-full">
            {t.accept}
          </Button>
          <Button onClick={decline} className="w-full" variant="outline">
            {t.decline}
          </Button>
        </div>
      </div>
    </div>
  ) : (
    variant === "minimal" && (
      <div
        className={cn(
          "fixed z-[200] bottom-0 left-0 right-0 p-4 sm:p-0 sm:left-4 sm:bottom-4 w-full sm:max-w-[300px] duration-700",
          !isOpen
            ? "transition-[opacity,transform] translate-y-8 opacity-0"
            : "transition-[opacity,transform] translate-y-0 opacity-100"
        )}
      >
        <div className="m-0 sm:m-3 dark:bg-card bg-background border border-border rounded-lg shadow-lg relative">
          {/* X button */}
          <button
            onClick={decline}
            className="absolute top-2 right-2 p-1 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label={t.decline}
          >
            <X className="h-3.5 w-3.5" />
          </button>
          <div className="p-3 flex items-center border-b border-border pr-8">
            <span className="text-xs sm:text-sm font-medium">{t.cookieNotice}</span>
          </div>
          <div className="p-3">
            <p className="text-[11px] sm:text-xs text-muted-foreground">
              {t.minimal}
            </p>
            <div className="grid grid-cols-2 items-center gap-2 mt-3">
              <Button onClick={accept} variant="default" className="w-full h-8 text-xs">
                {t.accept}
              </Button>
              <Button onClick={decline} variant="ghost" className="w-full h-8 text-xs">
                {t.decline}
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default CookieConsent

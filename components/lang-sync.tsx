"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

export function LangSync() {
  const pathname = usePathname()

  useEffect(() => {
    const lang = pathname.startsWith("/en") ? "en" : "it"
    document.documentElement.lang = lang
  }, [pathname])

  return null
}

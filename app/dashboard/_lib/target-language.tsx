"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface TargetLanguageContextValue {
  targetLanguage: string
  setTargetLanguage: (code: string) => void
}

const TargetLanguageContext = createContext<TargetLanguageContextValue | null>(null)

const STORAGE_KEY = "verbalist-target-language"
const DEFAULT_LANGUAGE = "it"

export function TargetLanguageProvider({ children }: { children: ReactNode }) {
  const [targetLanguage, setLanguageState] = useState(DEFAULT_LANGUAGE)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      setLanguageState(stored)
    }
  }, [])

  const setTargetLanguage = (code: string) => {
    setLanguageState(code)
    localStorage.setItem(STORAGE_KEY, code)
  }

  return (
    <TargetLanguageContext.Provider value={{ targetLanguage, setTargetLanguage }}>
      {children}
    </TargetLanguageContext.Provider>
  )
}

export function useTargetLanguage() {
  const context = useContext(TargetLanguageContext)
  if (!context) throw new Error("useTargetLanguage must be used within TargetLanguageProvider")
  return context
}

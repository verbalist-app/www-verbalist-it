"use client"

import Script from "next/script"

interface ContentsquareProps {
  tagId: string
}

export function Contentsquare({ tagId }: ContentsquareProps) {
  if (!tagId) return null

  return (
    <Script
      id="contentsquare"
      src={`https://t.contentsquare.net/uxa/${tagId}.js`}
      strategy="afterInteractive"
    />
  )
}

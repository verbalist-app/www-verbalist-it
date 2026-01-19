import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Keystatic Admin',
}

export default function KeystaticLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}

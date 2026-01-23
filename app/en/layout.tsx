import { BoxedHeaderEn } from "@/components/boxed-header-en"
import { FooterEn } from "@/components/footer-en"

export default function SiteEnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="mx-auto max-w-6xl border-x border-border min-h-screen flex flex-col">
        <BoxedHeaderEn />
        <main className="flex-1">{children}</main>
      </div>
      <FooterEn />
    </>
  )
}

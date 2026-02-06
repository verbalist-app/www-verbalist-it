import { BoxedHeaderEn } from "@/components/boxed-header-en"
import { FooterEn } from "@/components/footer-en"
import { SoftwareApplicationSchema } from "@/components/schema"
import { AnalyticsProvider } from "@/components/analytics"

export default function SiteEnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SoftwareApplicationSchema locale="en" />
      <BoxedHeaderEn />
      <div className="mx-auto max-w-6xl border-x border-border min-h-screen flex flex-col">
        <main className="flex-1">{children}</main>
      </div>
      <FooterEn />
      <AnalyticsProvider
        locale="en"
        gaMeasurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
        contentsquareTagId={process.env.NEXT_PUBLIC_CONTENTSQUARE_TAG_ID}
      />
    </>
  )
}

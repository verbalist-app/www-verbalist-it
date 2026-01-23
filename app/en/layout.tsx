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
      <div className="mx-auto max-w-6xl border-x border-border min-h-screen flex flex-col">
        <BoxedHeaderEn />
        <main className="flex-1">{children}</main>
      </div>
      <FooterEn />
      <AnalyticsProvider
        locale="en"
        gaMeasurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
        hotjarSiteId={process.env.NEXT_PUBLIC_HOTJAR_SITE_ID}
      />
    </>
  )
}

import { BoxedHeader } from "@/components/boxed-header"
import { Footer } from "@/components/footer"
import { SoftwareApplicationSchema } from "@/components/schema"
import { AnalyticsProvider } from "@/components/analytics"

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SoftwareApplicationSchema locale="it" />
      <div className="mx-auto max-w-6xl border-x border-border min-h-screen flex flex-col">
        <BoxedHeader />
        <main className="flex-1">{children}</main>
      </div>
      <Footer />
      <AnalyticsProvider
        locale="it"
        gaMeasurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
        hotjarSiteId={process.env.NEXT_PUBLIC_HOTJAR_SITE_ID}
      />
    </>
  )
}

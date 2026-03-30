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
      <BoxedHeader />
      <div className="mx-auto max-w-6xl border-x border-border min-h-screen flex flex-col">
        <main className="flex-1">{children}</main>
      </div>
      <Footer />
      <AnalyticsProvider
        locale="it"
        gtmId={process.env.NEXT_PUBLIC_GTM_ID}
      />
    </>
  )
}

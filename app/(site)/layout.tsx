import { BoxedHeader } from "@/components/boxed-header"
import { Footer } from "@/components/footer"

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="mx-auto max-w-6xl border-x border-border min-h-screen flex flex-col">
        <BoxedHeader />
        <main className="flex-1">{children}</main>
      </div>
      <Footer />
    </>
  )
}

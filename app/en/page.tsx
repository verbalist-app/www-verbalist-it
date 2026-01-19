import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function EnglishHomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl font-medium tracking-tight">
          English version coming soon
        </h1>
        <p className="text-lg text-muted-foreground">
          We're working on translating Verbalist to English.
          In the meantime, you can explore the Italian version.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link href="/">
              Vai alla versione italiana
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

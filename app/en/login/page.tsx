"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Globe } from "lucide-react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  const router = useRouter()
  const [step, setStep] = useState<"email" | "password">("email")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (email.toLowerCase() === "admin@admin.it") {
      setStep("password")
    } else {
      setError("Account not found. Use admin@admin.it for the demo.")
    }
  }

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800))

    if (password === "admin") {
      // Set a simple demo cookie/flag
      document.cookie = "demo_auth=true; path=/; max-age=3600"
      router.push("/dashboard")
    } else {
      setError("Wrong password. Use 'admin' for the demo.")
      setIsLoading(false)
    }
  }

  return (
    <div className="grid min-h-svh">
      <div className="flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between p-6 md:p-10">
          <Link href="/en" className="flex items-center">
            <Logo />
          </Link>
          <div className="flex items-center gap-3 sm:gap-4 text-sm">
            <Link
              href="/login"
              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
              title="Passa all'italiano"
            >
              <Globe className="size-4" />
              <span className="hidden sm:inline">IT</span>
            </Link>
            <span className="text-muted-foreground hidden sm:inline">Don't have an account?</span>
            <Button asChild variant="outline" size="sm">
              <Link href="/en/contact">Request access</Link>
            </Button>
          </div>
        </header>

        {/* Main content */}
        <main className="flex flex-1 flex-col items-center justify-center px-6 pb-20">
          <div className="w-full max-w-sm space-y-8">
            {step === "email" ? (
              <>
                <div className="space-y-2 text-center">
                  <h1 className="text-2xl font-medium tracking-tight">
                    What's your email?
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Enter your account email to sign in
                  </p>
                </div>

                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Work email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@company.com"
                      required
                      className="h-11"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  {error && (
                    <p className="text-sm text-red-500">{error}</p>
                  )}
                  <Button type="submit" className="w-full h-11">
                    Continue
                  </Button>
                </form>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Or
                    </span>
                  </div>
                </div>

                <Button variant="outline" className="w-full h-11" type="button">
                  <svg className="mr-2 size-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Continue with Google
                </Button>
              </>
            ) : (
              <>
                <div className="space-y-2 text-center">
                  <h1 className="text-2xl font-medium tracking-tight">
                    Welcome back
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Enter the password for <span className="font-medium text-foreground">{email}</span>
                  </p>
                </div>

                <form onSubmit={handlePasswordSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      required
                      className="h-11"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoFocus
                    />
                  </div>
                  {error && (
                    <p className="text-sm text-red-500">{error}</p>
                  )}
                  <Button type="submit" className="w-full h-11" disabled={isLoading}>
                    {isLoading ? "Signing in..." : "Sign in"}
                  </Button>
                </form>

                <button
                  type="button"
                  onClick={() => {
                    setStep("email")
                    setPassword("")
                    setError("")
                  }}
                  className="w-full text-center text-sm text-muted-foreground hover:text-foreground"
                >
                  ← Use a different email
                </button>
              </>
            )}
          </div>

          {/* Demo hint */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-lg border border-dashed border-border bg-muted/50 px-4 py-3">
              <span className="text-sm text-muted-foreground">
                Demo: <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">admin@admin.it</code> / <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">admin</code>
              </span>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="flex items-center justify-center gap-4 p-6 text-xs text-muted-foreground">
          <Link href="/en/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <span>·</span>
          <Link href="/en/terms" className="hover:underline">
            Terms of Service
          </Link>
        </footer>
      </div>
    </div>
  )
}

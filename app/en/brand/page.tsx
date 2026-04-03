import type { Metadata } from "next"
import Image from "next/image"
import { Download } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Brand Guidelines",
  description:
    "Verbalist brand guidelines. Logos, colors, typography, and usage rules to correctly represent the brand.",
  alternates: {
    canonical: "/en/brand",
  },
  robots: {
    index: false,
    follow: false,
  },
}

function DownloadButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      download
      className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
    >
      <Download className="size-3 text-foreground" />
      {label}
    </a>
  )
}

function ColorSwatch({
  name,
  variable,
  value,
  light,
}: {
  name: string
  variable: string
  value: string
  light?: boolean
}) {
  return (
    <div className="flex items-center gap-4">
      <div
        className={`size-12 rounded-lg border border-border flex-shrink-0 ${light ? "ring-1 ring-inset ring-border" : ""}`}
        style={{ backgroundColor: value }}
      />
      <div>
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-muted-foreground font-mono">
          {variable}
        </p>
      </div>
    </div>
  )
}

export default function BrandPageEn() {
  return (
    <section className="pt-20 md:pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <Badge variant="secondary" className="mb-4">
            Brand
          </Badge>
          <h1 className="text-3xl md:text-4xl font-serif font-normal tracking-tight mb-4">
            Brand guidelines
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
            These guidelines ensure consistent and correct use of the
            Verbalist brand. If in doubt, please contact us before using
            our assets.
          </p>
        </div>

        <div className="space-y-20">
          {/* ── Logo ── */}
          <section>
            <h2 className="text-2xl font-medium tracking-tight mb-2">Logo</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              The Verbalist logo consists of a wordmark (the geometric
              &quot;V&quot;) and the logotype. They can be used together or
              separately, depending on context.
            </p>

            {/* Full logo */}
            <div className="space-y-6">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
                  Full logo
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white border border-border rounded-lg p-10 flex items-center justify-center">
                    <Image
                      src="/logo-Verbalist-full.svg"
                      alt="Verbalist logo – dark version"
                      width={280}
                      height={56}
                      className="h-10 w-auto"
                    />
                  </div>
                  <div className="bg-foreground border border-border rounded-lg p-10 flex items-center justify-center">
                    <Image
                      src="/brand/logo-Verbalist-full-light.svg"
                      alt="Verbalist logo – light version"
                      width={280}
                      height={56}
                      className="h-10 w-auto"
                    />
                  </div>
                </div>
                <div className="flex gap-4 mt-3">
                  <DownloadButton href="/logo-Verbalist-full.svg" label="Dark SVG" />
                  <DownloadButton
                    href="/brand/logo-Verbalist-full-light.svg"
                    label="Light SVG"
                  />
                </div>
              </div>

              {/* Mark only */}
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
                  Mark
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white border border-border rounded-lg p-10 flex items-center justify-center">
                    <Image
                      src="/logo.svg"
                      alt="Verbalist mark – dark version"
                      width={64}
                      height={64}
                      className="h-14 w-auto"
                    />
                  </div>
                  <div className="bg-foreground border border-border rounded-lg p-10 flex items-center justify-center">
                    <Image
                      src="/brand/logo-mark-light.svg"
                      alt="Verbalist mark – light version"
                      width={64}
                      height={64}
                      className="h-14 w-auto"
                    />
                  </div>
                </div>
                <div className="flex gap-4 mt-3">
                  <DownloadButton href="/logo.svg" label="Dark SVG" />
                  <DownloadButton
                    href="/brand/logo-mark-light.svg"
                    label="Light SVG"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ── Clear space ── */}
          <section>
            <h2 className="text-2xl font-medium tracking-tight mb-2">
              Clear space
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-2xl">
              Always maintain a minimum clear space around the logo equal to
              the height of the &quot;V&quot; mark. No graphic or text
              elements should intrude into this space.
            </p>
            <div className="bg-muted border border-border rounded-lg p-10 flex items-center justify-center">
              <div className="border-2 border-dashed border-foreground/20 p-8 rounded-lg">
                <Image
                  src="/logo-Verbalist-full.svg"
                  alt="Verbalist logo with clear space"
                  width={220}
                  height={44}
                  className="h-8 w-auto"
                />
              </div>
            </div>
          </section>

          {/* ── Colors ── */}
          <section>
            <h2 className="text-2xl font-medium tracking-tight mb-2">Colors</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              The Verbalist design system uses a warm, earthy palette.
              Brown and beige tones for an organic, professional look.
            </p>

            <div className="space-y-8">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
                  Primary colors
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <ColorSwatch
                    name="Foreground"
                    variable="--foreground"
                    value="oklch(0.22 0.02 85)"
                  />
                  <ColorSwatch
                    name="Background"
                    variable="--background"
                    value="oklch(0.958 0.005 85)"
                    light
                  />
                </div>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
                  System colors
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <ColorSwatch
                    name="Primary"
                    variable="--primary"
                    value="oklch(0.62 0.22 40)"
                  />
                  <ColorSwatch
                    name="Muted Foreground"
                    variable="--muted-foreground"
                    value="oklch(0.22 0.02 85 / 55%)"
                  />
                  <ColorSwatch
                    name="Border"
                    variable="--border"
                    value="oklch(0.22 0.02 85 / 10%)"
                    light
                  />
                  <ColorSwatch
                    name="Muted"
                    variable="--muted"
                    value="oklch(0.94 0.005 85)"
                    light
                  />
                </div>
              </div>

              {/* Full palette strip */}
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
                  Full palette
                </p>
                <div className="flex rounded-lg overflow-hidden border border-border h-16">
                  <div className="flex-1" style={{ backgroundColor: 'oklch(0.22 0.02 85)' }} />
                  <div className="flex-1" style={{ backgroundColor: 'oklch(0.62 0.22 40)' }} />
                  <div className="flex-1" style={{ backgroundColor: 'oklch(0.68 0.1 75)' }} />
                  <div className="flex-1" style={{ backgroundColor: 'oklch(0.72 0.08 85)' }} />
                  <div className="flex-1" style={{ backgroundColor: 'oklch(0.925 0.005 85)' }} />
                  <div className="flex-1" style={{ backgroundColor: 'oklch(0.94 0.005 85)' }} />
                  <div className="flex-1" style={{ backgroundColor: 'oklch(0.958 0.005 85)' }} />
                  <div className="flex-1" style={{ backgroundColor: 'oklch(1 0 0)' }} />
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-[10px] text-muted-foreground font-mono">
                    Foreground
                  </span>
                  <span className="text-[10px] text-muted-foreground font-mono">
                    Background
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* ── Typography ── */}
          <section>
            <h2 className="text-2xl font-medium tracking-tight mb-2">
              Typography
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              We use Instrument Sans as the primary font for interfaces and body text.
              Instrument Serif for titles and headings. For monospace contexts we use Berkeley Mono.
            </p>

            <div className="space-y-6">
              <div className="bg-muted border border-border rounded-lg p-8">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
                  Instrument Serif &mdash; Serif (headings)
                </p>
                <p className="text-4xl font-serif font-normal tracking-tight mb-4">
                  Aa Bb Cc Dd Ee Ff Gg
                </p>
                <p className="text-sm text-muted-foreground">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
                  0123456789
                </p>
              </div>

              <div className="bg-muted border border-border rounded-lg p-8">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
                  Instrument Sans &mdash; Sans-serif (body)
                </p>
                <p className="text-4xl font-light tracking-tight mb-1">
                  Aa Bb Cc Dd Ee Ff Gg
                </p>
                <p className="text-4xl font-medium tracking-tight mb-4">
                  Aa Bb Cc Dd Ee Ff Gg
                </p>
                <p className="text-sm text-muted-foreground">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
                  0123456789
                </p>
              </div>
            </div>
          </section>

          {/* ── Usage guidelines ── */}
          <section>
            <h2 className="text-2xl font-medium tracking-tight mb-2">
              Usage guidelines
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              To maintain brand integrity, follow these rules when using the
              Verbalist logo and assets.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Do's */}
              <div className="space-y-4">
                <p className="text-xs font-medium uppercase tracking-wider text-foreground">
                  Do
                </p>
                {[
                  "Use the logo on white, black, or neutral gray backgrounds",
                  "Keep the original logo proportions",
                  "Use the light version on dark backgrounds and vice versa",
                  "Leave sufficient clear space around the logo",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 bg-muted border border-border rounded-lg p-4"
                  >
                    <span className="text-foreground text-sm mt-0.5">
                      &#10003;
                    </span>
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>

              {/* Don'ts */}
              <div className="space-y-4">
                <p className="text-xs font-medium uppercase tracking-wider text-foreground">
                  Don&apos;t
                </p>
                {[
                  "Do not distort, rotate, or alter the logo",
                  "Do not apply colors other than black and white",
                  "Do not place the logo on complex photographic backgrounds",
                  "Do not add shadows, borders, or effects to the logo",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 bg-muted border border-border rounded-lg p-4"
                  >
                    <span className="text-foreground text-sm mt-0.5">
                      &#10007;
                    </span>
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Contact ── */}
          <section className="bg-muted rounded-xl p-8 md:p-12 border border-border">
            <h3 className="text-2xl font-medium tracking-tight mb-4">
              Need assets in a different format?
            </h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
              Contact us to receive files in PNG, PDF, EPS, or other specific
              formats.
            </p>
            <a
              href="mailto:brand@verbalist.ai"
              className="inline-flex items-center gap-2 text-sm bg-foreground text-background px-6 py-3 rounded-lg hover:bg-foreground/90 transition-colors font-medium"
            >
              Contact us
            </a>
          </section>
        </div>
      </div>
    </section>
  )
}

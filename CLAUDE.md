# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Verbalist is a bilingual (Italian/English) SaaS marketing site for a Generative Engine Optimization platform. Built with Next.js 16, React 19, TypeScript 5, and Tailwind CSS v4. Deployed on Vercel.

## Commands

- `pnpm dev` — Start development server
- `pnpm build` — Production build
- `pnpm lint` — Run ESLint
- `pnpm start` — Start production server

Package manager is **pnpm** (v10.23). Always use `pnpm` instead of npm/yarn.

## Architecture

### Routing & i18n

Next.js App Router with URL-based internationalization:

- **Italian (default):** `app/(site)/` — routes at `/` (no locale prefix)
- **English:** `app/en/` — routes at `/en/*`
- **Dashboard:** `app/dashboard/` — protected user area
- **Middleware** (`middleware.ts`) redirects `/it/*` → `/*` and passes `/en/*` through

Italian is the default locale. Route slugs are translated (e.g., `/piattaforma` → `/en/platform`, `/prezzi` → `/en/pricing`).

### Language-specific Components

Many components have separate IT/EN variants rather than using dictionary lookups:
- `hero-section.tsx` / `hero-section-en.tsx`
- `features-section.tsx` / `features-section-en.tsx`
- `boxed-header.tsx` / `boxed-header-en.tsx`
- `footer.tsx` / `footer-en.tsx`
- `sub-page-hero.tsx` / `sub-page-hero-en.tsx`

The IT layout (`app/(site)/layout.tsx`) uses IT components; the EN layout (`app/en/layout.tsx`) uses EN variants. A JSON dictionary system exists in `lib/dictionaries/` but is used alongside, not instead of, separate component files.

### Layout Hierarchy

1. **Root layout** (`app/layout.tsx`) — Inter font, global metadata, Vercel Analytics/SpeedInsights, OrganizationSchema
2. **Site layout** (`app/(site)/layout.tsx`) — BoxedHeader, Footer, AnalyticsProvider (IT)
3. **EN layout** (`app/en/layout.tsx`) — BoxedHeaderEn, FooterEn, AnalyticsProvider (EN)
4. **Dashboard layout** (`app/dashboard/layout.tsx`) — Sidebar-based layout

All site pages render inside a `max-w-6xl` container with `border-x`.

### CMS (Keystatic)

Blog content managed via Keystatic CMS. Content stored in `content/posts/` as Markdoc files. Configuration in `keystatic.config.ts`. Helper functions in `lib/keystatic.ts`.

- Local storage in development, cloud storage in production
- Blog images go to `public/images/blog/`
- Posts have a `locale` field and optional `translationOf` cross-reference

### UI Components

- **shadcn/ui** (new-york style) in `components/ui/` — do not edit these directly, use `pnpm dlx shadcn@latest add <component>` to add new ones
- **Radix UI** primitives underpin shadcn components
- **Framer Motion** animations in `components/motion-primitives/`
- **JSON-LD schemas** in `components/schema/`
- **Analytics providers** in `components/analytics/` — load only after cookie consent

### Styling

Tailwind CSS v4 with CSS variables defined in `app/globals.css`. Monochrome design using `oklch()` lightness-only values (no chroma). The `cn()` utility from `lib/utils.ts` merges Tailwind classes via `clsx` + `tailwind-merge`.

### Path Aliases

`@/*` maps to the project root (configured in `tsconfig.json`).

## Environment Variables

See `.env.example`:
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — Google Analytics 4
- `NEXT_PUBLIC_CONTENTSQUARE_TAG_ID` — Contentsquare UX analytics

Both only load after cookie consent.

## Notable Config

- `next.config.mjs` has `typescript.ignoreBuildErrors: true` and `images.unoptimized: true`
- Redirect: `/prodotto` → `/piattaforma` (permanent)
- No test framework is configured

## Scrittura in italiano

Quando scrivi testi in italiano:

- **Mai tradurre dall'inglese.** Pensa direttamente in italiano. Se una frase suona come una traduzione, riscrivila da zero.
- Preferisci costruzioni attive e dirette: "Come posizionarsi in prima pagina" non "Cosa porta i contenuti in prima pagina".
- Evita verbi generici forzati (portare, guidare, abilitare, leveraggiare). Usa verbi specifici e idiomatici.
- L'italiano preferisce frasi più corte e paratassi rispetto all'inglese. Non concatenare troppe subordinate.
- Evita calchi come: "alla fine del giorno" (at the end of the day), "che detto questo" (that being said), "come un risultato" (as a result), "giocare un ruolo" (play a role).
- Il "tu" informale per contenuti web/blog, il "Lei" per comunicazioni formali, mai il "voi" commerciale salvo esplicita richiesta.
- Dopo il primo draft, rileggi ogni frase e chiediti: "Un copywriter italiano scriverebbe così?" Se la risposta è no, riscrivi.

## Writing in English

When writing English content:
- Use natural, idiomatic phrasing. Avoid stilted or overly formal constructions.
- Prefer active voice and concrete verbs.
- After drafting, review for awkward phrasing that a native speaker would flag.

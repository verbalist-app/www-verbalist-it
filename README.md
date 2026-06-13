# www.verbalist.it

Sito marketing di [Verbalist](https://www.verbalist.it), il software italiano
che genera contenuti ottimizzati per SEO e GEO. L'app vive su
[app.verbalist.it](https://app.verbalist.it); questo repo contiene solo il www.

## Stack

- [Astro 6](https://astro.build) statico, monorepo pnpm (`apps/web`)
- Tailwind CSS v4 (token brand in `src/styles/global.css`: palette mist/base/accent)
- Contenuti in Content Collections (markdown in `src/content/`):
  blog, casi cliente, help center, changelog, agenti, team, legali
- GTM (`GTM-KMFNL4BM`) con Consent Mode v2 + banner consensi conforme Garante
- Sitemap singola (`/sitemap.xml`, postbuild), `llms.txt`, JSON-LD

## Sviluppo

```bash
pnpm install
pnpm --filter @verbalist/web dev    # localhost:4321
pnpm --filter @verbalist/web build  # output in apps/web/dist
```

## Variabili d'ambiente (apps/web)

| Variabile | Uso |
|---|---|
| `PUBLIC_GTM_ID` | Attiva GTM e il banner cookie (vuota = nessun tracking) |
| `PUBLIC_VERCEL_ANALYTICS` | `true` solo in produzione su Vercel |

## Deploy (Vercel)

Root Directory `apps/web` · build `pnpm build` · output `dist`.

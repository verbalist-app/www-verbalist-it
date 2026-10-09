/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_GTM_ID?: string;
  readonly PUBLIC_VERCEL_ANALYTICS?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// GTM: il dataLayer che gli script del sito alimentano (vedi docs/tracking-plan.md)
interface Window {
  dataLayer?: unknown[];
}

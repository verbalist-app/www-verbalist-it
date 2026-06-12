/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_GTM_ID?: string;
  readonly PUBLIC_VERCEL_ANALYTICS?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Link a /contatti con il pubblico di provenienza. Il nome del parametro è
// anche il nome interno della proprietà HubSpot che il form valorizza dalla
// query string: se in HubSpot la proprietà si chiama diversamente, va
// cambiato qui (e in CookieBanner.astro, che lo legge per il tracking).
export const CONTACT_AUDIENCE_PARAM = "profilo";

export function contactHref(audience?: string) {
  return audience
    ? `/contatti/?${CONTACT_AUDIENCE_PARAM}=${encodeURIComponent(audience)}`
    : "/contatti/";
}

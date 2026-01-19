export const locales = ['it', 'en'] as const
export const defaultLocale = 'it' as const

export type Locale = (typeof locales)[number]

export function getLocaleFromPathname(pathname: string): Locale {
  const segments = pathname.split('/')
  const potentialLocale = segments[1]

  if (locales.includes(potentialLocale as Locale) && potentialLocale !== defaultLocale) {
    return potentialLocale as Locale
  }

  return defaultLocale
}

export function getPathnameWithoutLocale(pathname: string): string {
  const segments = pathname.split('/')
  const potentialLocale = segments[1]

  if (locales.includes(potentialLocale as Locale) && potentialLocale !== defaultLocale) {
    return '/' + segments.slice(2).join('/') || '/'
  }

  return pathname
}

export function getLocalizedPathname(pathname: string, locale: Locale): string {
  const pathnameWithoutLocale = getPathnameWithoutLocale(pathname)

  if (locale === defaultLocale) {
    return pathnameWithoutLocale
  }

  return `/${locale}${pathnameWithoutLocale === '/' ? '' : pathnameWithoutLocale}`
}

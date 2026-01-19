import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { defaultLocale } from '@/lib/i18n'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Skip for static files, api routes, and Next.js internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/keystatic') ||
    pathname.includes('.') // static files
  ) {
    return NextResponse.next()
  }

  // If someone tries to access /it/*, redirect to /* (remove the prefix)
  if (pathname.startsWith('/it/') || pathname === '/it') {
    const newPathname = pathname.replace(/^\/it/, '') || '/'
    return NextResponse.redirect(new URL(newPathname, request.url))
  }

  // For /en/* routes, continue normally
  // For all other routes, they are IT by default
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except static files
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
}

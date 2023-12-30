import { NextResponse, type NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Redirect old website's urls to new
  if (request.nextUrl.pathname === '/cv.html') {
    return NextResponse.rewrite(new URL('/cv', request.url))
  }

  // @todo the rest
}

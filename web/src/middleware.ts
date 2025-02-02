import { NextResponse, userAgent } from 'next/server'
import type { NextRequest } from 'next/server'

// import authConfig from './configs/auth'

// export const authRoutes = ['/auth/login', '/auth/forgot-password', '/auth/change-password']
// const accessTokenName = authConfig.cookieTokenKeyName
// export const protectedRoutes = ['']

export function middleware(request: NextRequest) {
  // const accessToken = request.cookies.get(accessTokenName)?.value

  // if (protectedRoutes.includes(request.nextUrl.pathname) && !accessToken) {
  //   request.cookies.delete(accessTokenName)
  //   const response = NextResponse.redirect(new URL('/', request.url))

  //   response.cookies.delete(accessTokenName)

  //   return response
  // }

  // if (authRoutes.includes(request.nextUrl.pathname) && accessToken) {
  //   return NextResponse.redirect(new URL('/', request.url))
  // }
  const url = request.nextUrl
  const { device } = userAgent(request)
  const viewport = device.type === 'mobile' ? 'mobile' : 'desktop'
  url.searchParams.set('viewport', viewport)

  return NextResponse.rewrite(url)
}

import type { ReactElement, ReactNode } from 'react'
import type { NextComponentType, NextPageContext } from 'next/dist/shared/lib/utils'
import { HeaderType } from '@core/components/navbar'

declare module 'next' {
  export declare type NextPage<P = {}, IP = P> = NextComponentType<NextPageContext, IP, P> & {
    authGuard?: boolean
    guestGuard?: boolean
    pageTitle?: string
    pageDescription?: string
    contentHeightFixed?: boolean
    getLayout?: (page: ReactElement) => ReactNode
    headerType?: HeaderType
    hideFooter?: boolean
    isMobile?: boolean
  }
}

import type { ReactElement, ReactNode } from 'react'
import type { NextComponentType, NextPageContext } from 'next/dist/shared/lib/utils'

declare module 'next' {
  export declare type NextPage<P = {}, IP = P> = NextComponentType<NextPageContext, IP, P> & {
    authGuard?: boolean
    guestGuard?: boolean
    setConfig?: () => void
    pageTitle?: string
    contentHeightFixed?: boolean
    getLayout?: (page: ReactElement) => ReactNode
  }
}

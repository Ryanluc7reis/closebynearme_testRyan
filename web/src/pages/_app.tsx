import '@styles/globals.css'
import 'swiper/css'
import 'swiper/css/pagination'
import { Router } from 'next/router'
import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import NProgress from 'nprogress'
import { Toaster } from 'react-hot-toast'
import { useApollo } from '../apollo-client'
import { ApolloProvider } from '@apollo/client'
import Spinner from '@core/components/spinner'
import { ReactNode, useEffect, useState } from 'react'
import AuthGuard from '@core/components/auth/AuthGuard'
import GuestGuard from '@core/components/auth/GuestGuard'
import UserLayout from '@layouts/UserLayout'
import themeConfig from '@configs/themeConfig'
import CustomHead from '@components/CustomHead'
import MediaQueryProvider from 'src/hooks/useMediaQuery'
import { GoogleTagManager } from '@next/third-parties/google'
import { gtmPageView } from 'src/utils/gtm'
import 'src/iconify-bundle/icons-bundle-react'
import { AuthProvider } from 'src/context/AuthContext'

type ExtendedAppProps = AppProps & {
  Component: NextPage
}

type GuardProps = {
  authGuard: boolean
  guestGuard: boolean
  children: ReactNode
}

// ** Pace Loader
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeError', () => NProgress.done())
Router.events.on('routeChangeComplete', () => NProgress.done())

const Guard = ({ children, authGuard, guestGuard }: GuardProps) => {
  if (guestGuard) {
    return <GuestGuard fallback={<Spinner />}>{children}</GuestGuard>
  } else if (!guestGuard && !authGuard) {
    return <>{children}</>
  } else {
    return <AuthGuard fallback={<Spinner />}>{children}</AuthGuard>
  }
}

export default function App(props: ExtendedAppProps) {
  const { Component, pageProps } = props
  const apolloClient = useApollo(pageProps.initialApolloState, pageProps.token)

  // Verifica se o cliente já montou (Solução 3)
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  const isClient = typeof window !== 'undefined'

  useEffect(() => {
    if (isClient) {
      const props = {
        page_title: pageProps.pageTitle || Component.pageTitle || null
      }
      gtmPageView(props)
    }
  }, [Component.pageTitle, pageProps, isClient])

  // Evita renderizar até que o cliente esteja montado
  if (!mounted) return <Spinner />

  // Verifica se está no cliente para evitar SSR acessando window/document (Solução 4)

  const contentHeightFixed = Component.contentHeightFixed ?? false
  const getLayout =
    Component.getLayout ??
    ((page) => (
      <UserLayout
        hideFooter={Component.hideFooter || pageProps.hideFooter || false}
        headerType={Component.headerType || pageProps.headerType || 'hidden'}
        contentHeightFixed={contentHeightFixed}
      >
        {page}
      </UserLayout>
    ))

  const authGuard = Component.authGuard ?? true
  const guestGuard = Component.guestGuard ?? false
  const title = `${pageProps.pageTitle || Component.pageTitle || themeConfig.templateName}`

  return (
    <>
      <CustomHead
        title={title}
        description={pageProps.pageDescription || Component.pageDescription || themeConfig.templateName}
        data={pageProps.data}
      />
      <ApolloProvider client={apolloClient}>
        <AuthProvider>
          <MediaQueryProvider initialValues={{ isMobile: pageProps.isMobile || false }}>
            <Guard authGuard={authGuard} guestGuard={guestGuard}>
              {getLayout(<Component {...pageProps} />)}
            </Guard>
            <GoogleTagManager gtmId={'GTM-PPH36QQT'} />
            <Toaster position={themeConfig.toastPosition} toastOptions={{ className: 'react-hot-toast' }} />
          </MediaQueryProvider>
        </AuthProvider>
      </ApolloProvider>
    </>
  )
}

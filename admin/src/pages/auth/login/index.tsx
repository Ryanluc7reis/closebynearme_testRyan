// ** React Imports
import dynamic from 'next/dynamic'
import { ReactNode } from 'react'
import { getCookie } from 'cookies-next'
import { GetServerSideProps } from 'next/types'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'
import authConfig from 'src/configs/auth'

// import LoginComponent from '@views/auth/Login'

const LoginComponent = dynamic(() => import('@views/auth/Login'), {
  ssr: true
})

const LoginPage = () => {
  return <LoginComponent />
}

LoginPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

LoginPage.guestGuard = true

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const token = getCookie(authConfig.cookieTokenKeyName, { req, res })

  return {
    props: {
      token: token ?? ''
    }
  }
}

export default LoginPage

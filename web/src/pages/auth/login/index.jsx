import dynamic from 'next/dynamic'
import React from 'react'
import authConfig from '@configs/auth'
import { getCookie } from 'cookies-next'

//import  LoginComponent  from '@views/auth/Login'

const LoginComponent = dynamic(() => import('@views/auth/Login'), {
  ssr: true
})
const LoginPage = () => {
  return <LoginComponent />
}

LoginPage.hideFooter = true

export const getServerSideProps = async ({ req, res }) => {
  const token = getCookie(authConfig.cookieTokenKeyName, { req, res })

  return {
    props: {
      token: token ?? ''
    }
  }
}

export default LoginPage

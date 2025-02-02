import React from 'react'
import authConfig from '@configs/auth'
import { getCookie } from 'cookies-next'

import  LoginComponent  from '@views/auth/Login'


const LoginPage = () => {
  return <LoginComponent />
}



export const getServerSideProps = async ({ req, res }) => {
  const token = getCookie(authConfig.cookieTokenKeyName, { req, res })

  return {
    props: {
      token: token ?? ''
    }
  }
}

export default LoginPage

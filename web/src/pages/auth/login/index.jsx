import React from 'react'
import authConfig from '@configs/auth'
import { getCookie } from 'cookies-next'
import client from '@apollo-client'

import  LoginComponent  from '@views/auth'

function LoginPage() {
  return <LoginComponent />
}

LoginPage.guestGuard = true

export const getServerSideProps = async ({ req, res, query }) => {
  const token = getCookie(authConfig.cookieTokenKeyName, { req, res })

  await client(token)

  return {
    props: {
      token: token ?? '',
      isMobile: query.viewport === 'mobile'
    }
  }
}

export default LoginPage

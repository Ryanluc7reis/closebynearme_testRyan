import React from 'react'
import authConfig from '@configs/auth'
import { getCookie } from 'cookies-next'
import client from '@apollo-client'

import { OnBoardingSellerComponent } from '@views/onboarding_seller'

function OnBoardingSellerPage() {
  return <OnBoardingSellerComponent />
}

OnBoardingSellerPage.guestGuard = true

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

export default OnBoardingSellerPage

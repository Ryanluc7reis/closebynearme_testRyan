import React from 'react'
import dynamic from 'next/dynamic'
import authConfig from '@configs/auth'
import { getCookie } from 'cookies-next'
import client from '@apollo-client'
import { useMediaQueryContext } from 'src/hooks/useMediaQuery'

import { OnBoardingSellerComponent } from '@views/onboarding_seller'

const FooterSection = dynamic(() => import('@views/city/sections/FooterSection'), {
  ssr: false
})

function OnBoardingSellerPage() {
  const { isMobile } = useMediaQueryContext()
  
return (
    
    <>
    <OnBoardingSellerComponent />
    <FooterSection isMobile={isMobile} />
    </>
    )
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

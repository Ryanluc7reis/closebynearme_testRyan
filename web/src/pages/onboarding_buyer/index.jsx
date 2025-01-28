import React from 'react'
import authConfig from '@configs/auth'
import { getCookie } from 'cookies-next'
import client from '@apollo-client'

import { MultiStepFormComponent } from '@views/onboarding_buyer'

function MultiStepFormPage() {
  return <MultiStepFormComponent />
}

MultiStepFormPage.guestGuard = true

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

export default MultiStepFormPage

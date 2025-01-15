import client from '@apollo-client'
import authConfig from '@configs/auth'
import { FindLocationsDocument, FindLocationsQuery, FindLocationsQueryResult, StatusAllowed } from '@graphql'
import { HeaderType } from '@styles/interfaces'
import CitiesPageComponent from '@views/cities'
import FooterSection from '@views/city/sections/FooterSection'
import { getCookie } from 'cookies-next'
import { GetServerSideProps } from 'next/types'
import React from 'react'
import { useMediaQueryContext } from 'src/hooks/useMediaQuery'

interface Props {
  data: FindLocationsQuery['findLocations']['docs']
}

function CitiesPage({ data }: Props) {
  const { isMobile } = useMediaQueryContext()

  return (
    <div className=''>
      <CitiesPageComponent data={data} className='container mx-auto px-8 mb-16' />
      <FooterSection isMobile={isMobile} />
    </div>
  )
}

CitiesPage.guestGuard = true
CitiesPage.headerType = 'ProductHeader' as HeaderType
CitiesPage.pageTitle = 'Cities'
CitiesPage.hideFooter = true

export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  const token = getCookie(authConfig.cookieTokenKeyName, { req, res })

  let document: FindLocationsQueryResult['data']
  try {
    const { data } = (await client(token).query({
      query: FindLocationsDocument,
      variables: {
        search: {
          all: true,
          status: StatusAllowed.Active
        }
      },
      fetchPolicy: 'no-cache'
    })) as FindLocationsQueryResult

    document = data
  } catch (e) {
    return {
      notFound: true
    }
  }

  if (!document) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      token: token ?? '',
      isMobile: query.viewport === 'mobile',
      data: document.findLocations.docs
    }
  }
}

export default CitiesPage

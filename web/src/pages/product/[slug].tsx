import client from '@apollo-client'
import authConfig from '@configs/auth'
import themeConfig from '@configs/themeConfig'
import { FindProductDetailsDocument, FindProductDetailsQuery, FindProductDetailsQueryResult } from '@graphql'
import ProductDetails from '@views/product'
import { getCookie } from 'cookies-next'
import { GetServerSideProps } from 'next/types'
import React from 'react'

interface Props {
  data: FindProductDetailsQuery['findOneProductPopulate']
}

function Page({ data }: Props) {
  return <ProductDetails data={data} className='container mx-auto px-5 xl:px-0 relative' />
}

Page.headerType = 'ProductHeader'
Page.guestGuard = true
Page.hideFooter = true

export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  const token = getCookie(authConfig.cookieTokenKeyName, { req, res })

  const slug = query.slug as string

  let document: FindProductDetailsQueryResult['data']
  try {
    const { data } = (await client(token).query({
      query: FindProductDetailsDocument,
      variables: {
        slug
      },
      fetchPolicy: 'no-cache'
    })) as FindProductDetailsQueryResult

    document = data
  } catch (e) {
    console.log(e)

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
      pageTitle: `${document.findOneProductPopulate.name} in ${document.findOneProductPopulate.locationId.name} | ${themeConfig.templateName}`,
      token: token ?? '',
      data: document.findOneProductPopulate,
      isMobile: query.viewport === 'mobile'
    }
  }
}

export default Page

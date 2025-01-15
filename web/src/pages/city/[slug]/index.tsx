import client from '@apollo-client'
import authConfig from '@configs/auth'
import themeConfig from '@configs/themeConfig'
import {
  FindCategoriesByLocationBySlugDocument,
  FindCategoriesByLocationBySlugQuery,
  FindCategoriesByLocationBySlugQueryResult
} from '@graphql'
import CategoriesComponent from '@views/categories'
import { getCookie } from 'cookies-next'
import dynamic from 'next/dynamic'
import { GetServerSideProps } from 'next/types'
import React from 'react'
import { useMediaQueryContext } from 'src/hooks/useMediaQuery'

const FooterSection = dynamic(() => import('@views/city/sections/FooterSection'), {
  ssr: false
})

interface Props {
  data: FindCategoriesByLocationBySlugQuery['findCategoriesByLocationBySlug']
}

function CityCategoriesPage({ data }: Props) {
  const { isMobile } = useMediaQueryContext()

  return (
    <>
      <CategoriesComponent data={data} className='container mx-auto px-8 mb-16' />
      <FooterSection isMobile={isMobile} />
    </>
  )
}

CityCategoriesPage.guestGuard = true
CityCategoriesPage.hideFooter = true
CityCategoriesPage.headerType = 'ProductHeader'

export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  const token = getCookie(authConfig.cookieTokenKeyName, { req, res })

  const slug = query.slug as string
  let document: FindCategoriesByLocationBySlugQueryResult['data']
  try {
    const { data } = (await client(token).query({
      query: FindCategoriesByLocationBySlugDocument,
      variables: {
        slug
      },
      fetchPolicy: 'no-cache'
    })) as FindCategoriesByLocationBySlugQueryResult

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
      pageTitle: `${document.findCategoriesByLocationBySlug.name} | ${themeConfig.templateName}`,
      token: token ?? '',
      data: document.findCategoriesByLocationBySlug,
      isMobile: query.viewport === 'mobile'
    }
  }
}

export default CityCategoriesPage

import client from '@apollo-client'
import authConfig from '@configs/auth'
import {
  FindCompaniesByLocationSlugQuery,
  FindCompaniesInLocationAndCategorySlugDocument,
  FindCompaniesInLocationAndCategorySlugQueryResult,
  FindLocationBySlugQuery
} from '@graphql'
import { HeaderType } from '@styles/interfaces'
import CompaniesPageComponent from '@views/companies'
import FooterSection from '@views/city/sections/FooterSection'
import { getCookie } from 'cookies-next'
import { GetServerSideProps } from 'next/types'
import React from 'react'
import { useMediaQueryContext } from 'src/hooks/useMediaQuery'
import themeConfig from '@configs/themeConfig'

interface Props {
  dataRes: {
    companies: FindCompaniesByLocationSlugQuery['findOneLocationBySlug']['companies']['docs']
    location: FindLocationBySlugQuery['findOneLocationBySlug']['location']
    category: FindLocationBySlugQuery['findOneLocationBySlug']['category']
  }
}

function CompaniesPage({ dataRes }: Props) {
  const { isMobile } = useMediaQueryContext()

  return (
    <div className=''>
      <CompaniesPageComponent data={dataRes} className='container mx-auto px-8 mb-16' />
      <FooterSection isMobile={isMobile} />
    </div>
  )
}

CompaniesPage.guestGuard = true
CompaniesPage.headerType = 'ProductHeader' as HeaderType
CompaniesPage.pageTitle = 'Companies'
CompaniesPage.hideFooter = true

export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  const token = getCookie(authConfig.cookieTokenKeyName, { req, res })

  const slug = query.slug as string
  const categorySlug = query.categorySlug as string
  let document: FindCompaniesInLocationAndCategorySlugQueryResult['data']
  try {
    const { data } = (await client(token).query({
      query: FindCompaniesInLocationAndCategorySlugDocument,
      variables: {
        slug,
        categorySlug,
        search: {
          all: true
        }
      },
      fetchPolicy: 'no-cache'
    })) as FindCompaniesInLocationAndCategorySlugQueryResult

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
      pageTitle: `${document.findOneLocationBySlug.category.name} ${document.findOneLocationBySlug.location.name} | ${themeConfig.templateName}`,
      token: token ?? '',
      dataRes: {
        location: document.findOneLocationBySlug.location,
        category: document.findOneLocationBySlug.category,
        companies: document.findOneLocationBySlug.companies.docs
      },
      isMobile: query.viewport === 'mobile'
    }
  }
}
export default CompaniesPage

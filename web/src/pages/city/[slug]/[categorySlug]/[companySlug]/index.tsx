import client from '@apollo-client'
import authConfig from '@configs/auth'
import themeConfig from '@configs/themeConfig'
import {
  FindOneCompanyBySlugDocument,
  FindOneCompanyBySlugQuery,
  FindOneCompanyBySlugQueryResult,
  StatusAllowed
} from '@graphql'
import { HeaderType } from '@styles/interfaces'
import CompanyLanding from '@views/company'
import { getCookie } from 'cookies-next'
import { GetServerSideProps } from 'next/types'

interface Props {
  data: {
    location: FindOneCompanyBySlugQuery['findOneLocationBySlug']['location']
    category: FindOneCompanyBySlugQuery['findOneLocationBySlug']['category']
    company: FindOneCompanyBySlugQuery['findOneCompanyBySlug']['company']
    companies: FindOneCompanyBySlugQuery['findOneLocationBySlug']['companies']['docs']
    products: FindOneCompanyBySlugQuery['findOneCompanyBySlug']['products']['docs']
  }
}

function CityCompanyPage({ data }: Props) {
  return <CompanyLanding data={data} className='container mx-auto px-5 xl:px-0 relative' />
}

CityCompanyPage.guestGuard = true
CityCompanyPage.hideFooter = true
CityCompanyPage.headerType = 'ProductHeader' as HeaderType

export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  const token = getCookie(authConfig.cookieTokenKeyName, { req, res })

  const slug = query.slug as string
  const companySlug = query.companySlug as string
  const categorySlug = query.categorySlug as string
  let document: FindOneCompanyBySlugQueryResult['data']
  try {
    const { data } = (await client(token).query({
      query: FindOneCompanyBySlugDocument,
      variables: {
        slug,
        categorySlug,
        companySlug,
        search: {
          all: true,
          status: StatusAllowed.Active
        }
      },
      fetchPolicy: 'no-cache'
    })) as FindOneCompanyBySlugQueryResult

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
      pageTitle: `${document.findOneCompanyBySlug.company.name} ${document.findOneLocationBySlug.category.name} in ${document.findOneLocationBySlug.location.name} | ${themeConfig.templateName}`,
      pageDescription: `Find ${document.findOneCompanyBySlug.company.name} in ${document.findOneLocationBySlug.location.name} with ${themeConfig.templateName} for the best deals for you!`,
      token: token ?? '',
      data: {
        location: document.findOneLocationBySlug.location,
        category: document.findOneLocationBySlug.category,
        company: document.findOneCompanyBySlug.company,
        companies: document.findOneLocationBySlug.companies.docs,
        products: document.findOneCompanyBySlug.products.docs,
        urlPath: `/city/${slug}/${categorySlug}/${companySlug}`
      },
      isMobile: query.viewport === 'mobile'
    }
  }
}

export default CityCompanyPage

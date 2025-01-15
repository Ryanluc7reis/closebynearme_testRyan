import client from '@apollo-client'
import authConfig from '@configs/auth'
import themeConfig from '@configs/themeConfig'
import { FindLocationBySlugDocument, FindLocationBySlugQuery, FindLocationBySlugQueryResult } from '@graphql'
import CityComponentView from '@views/city'
import { getCookie } from 'cookies-next'
import { GetServerSideProps } from 'next/types'

interface Props {
  data: {
    location: FindLocationBySlugQuery['findOneLocationBySlug']['location']
    category: FindLocationBySlugQuery['findOneLocationBySlug']['category']
  }
}

function CityPage({ data }: Props) {
  return <CityComponentView data={data} />
}

CityPage.guestGuard = true
CityPage.hideFooter = true
CityPage.headerType = 'ProductHeader'

export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  const token = getCookie(authConfig.cookieTokenKeyName, { req, res })

  const slug = query.slug as string
  const categorySlug = query.categorySlug as string
  let document: FindLocationBySlugQueryResult['data']
  try {
    const { data } = (await client(token).query({
      query: FindLocationBySlugDocument,
      variables: {
        slug,
        categorySlug,
        search: {
          all: true
        }
      },
      fetchPolicy: 'no-cache'
    })) as FindLocationBySlugQueryResult

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
      pageDescription: `Find ${document.findOneLocationBySlug.category.name} in ${document.findOneLocationBySlug.location.name} with ${themeConfig.templateName} for the best results around you!`,
      token: token ?? '',
      data: {
        location: document.findOneLocationBySlug.location,
        category: document.findOneLocationBySlug.category,
        faqs: document.findOneLocationBySlug.faqs,
        urlPath: `/city/${slug}/${categorySlug}`
      },
      isMobile: query.viewport === 'mobile'
    }
  }
}

export default CityPage

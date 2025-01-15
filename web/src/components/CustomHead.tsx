import { FindLocationBySlugQuery, FindOneCompanyBySlugQuery } from '@graphql'
import Head from 'next/head'
import React from 'react'
import { structuredDataGen } from './StructuredDataGen'

interface Props {
  title: string
  data?: {
    location?: FindLocationBySlugQuery['findOneLocationBySlug']['location']
    category?: FindLocationBySlugQuery['findOneLocationBySlug']['category']
    faqs?: FindLocationBySlugQuery['findOneLocationBySlug']['faqs']
    company?: FindOneCompanyBySlugQuery['findOneCompanyBySlug']['company']
    urlPath?: string
  }
  description: string
}

const CustomHead: React.FC<Props> = ({ title, data, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        {/* <meta name='keywords' content='' /> */}
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <meta property='og:title' content={title} key='title' />

        <meta name='description' content={description} key='description' />

        <meta property='og:description' content={description} key='og:description' />

        <meta property='og:url' content={process.env.NEXT_PUBLIC_WEB} key='og:url' />
        {/* <meta
          property="og:image"
          content=""
          key="og:image"
        /> */}
        <meta property='og:locale' content='en' />

        {data && (
          <>
            <meta property='og:url' content={`${process.env.NEXT_PUBLIC_WEB}${data.urlPath}`} key='og:url' />
            {/* <meta
              property='og:image'
              content={`https://cdn.discordapp.com/avatars/${player?.id}/${player?.avatar}.png?size=1024&quality=lossless`}
              key='og:image'
            /> */}
            {/* <meta property='og:image:width' content='1200' /> */}
            {/* <meta property='og:image:height' content='675' /> */}
            {/* <meta name='twitter:card' content='summary_large_image' /> */}

            {data.urlPath && (
              <script
                id='breadcrumb-list-schema'
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(
                    structuredDataGen('breadcrumb', {
                      path: process.env.NEXT_PUBLIC_WEB || '',
                      urlPath: data.urlPath || '',
                      title
                    })
                  )
                }}
              />
            )}

            {data.faqs && data.faqs.docs.length && (
              <script
                id='faq-schema'
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(
                    structuredDataGen('faq', {
                      faqs: data.faqs
                    })
                  )
                }}
              />
            )}

            {data.category && data.location && (
              <script
                id='organization-schema'
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(
                    structuredDataGen('organization', {
                      category: data.category,
                      location: data.location,
                      path: process.env.NEXT_PUBLIC_WEB || '',
                      urlPath: data.urlPath || '',
                      title
                    })
                  )
                }}
              />
            )}
          </>
        )}
      </Head>
    </>
  )
}

export default CustomHead

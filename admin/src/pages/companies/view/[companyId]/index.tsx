import { getCookie } from 'cookies-next'
import { GetServerSideProps } from 'next/types'
import React, { SyntheticEvent } from 'react'
import authConfig from 'src/configs/auth'
import { FindOneCompanyDocument, FindOneCompanyQuery, FindOneCompanyQueryResult } from '@graphql'
import client from 'src/apollo-client'
import SettingsComponent from '@views/companies/settings'
import { Grid, Tab } from '@mui/material'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import TabPanel from '@mui/lab/TabPanel'
import TabList from '@mui/lab/TabList'
import TabContext from '@mui/lab/TabContext'

const TabProductsComponent = dynamic(() => import('@views/products/list'), {
  ssr: false
})

const TabReviewsComponent = dynamic(() => import('@views/reviews/list'), {
  ssr: false
})

interface Props {
  companyId: string
  data: FindOneCompanyQuery['findOneCompany']
  tab: 'products' | 'reviews'
}

const ViewPage = ({ companyId, data, tab }: Props) => {
  const router = useRouter()

  const tabContentRender = () => {
    switch (tab) {
      case 'products':
        return <TabProductsComponent companyId={companyId} />

      case 'reviews':
        return (
          <TabReviewsComponent companyId={companyId} locationId={data.locationId} locationName={data.locationName} />
        )

      default:
        return <TabProductsComponent companyId={companyId} />
    }
  }

  const handleChange = (event: SyntheticEvent, value: string) => {
    router.push(`/companies/view/${companyId}/?type=${value.toLowerCase()}`)
  }

  return (
    <Grid container spacing={2} gap={10}>
      <Grid item xs={12}>
        <SettingsComponent data={data} />
      </Grid>
      <TabContext value={tab}>
        <Grid item xs={12}>
          <Grid item xs={12}>
            <TabList variant='scrollable' scrollButtons='auto' onChange={handleChange} aria-label='tabs settings'>
              <Tab value={'products'} label={'Products'} />
              <Tab value={'reviews'} label={'Reviews'} />
            </TabList>
          </Grid>
          <TabPanel sx={{ p: 0 }} value={tab}>
            {tabContentRender()}
          </TabPanel>
        </Grid>
      </TabContext>
    </Grid>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  const token = getCookie(authConfig.cookieTokenKeyName, { req, res })

  const companyId = query.companyId as string

  let document: FindOneCompanyQueryResult['data']

  try {
    const res = (await client(token).query({
      query: FindOneCompanyDocument,
      variables: {
        id: companyId
      },
      fetchPolicy: 'no-cache'
    })) as FindOneCompanyQueryResult

    if (!res.data) {
      return {
        notFound: true
      }
    }

    document = res.data
  } catch (e) {
    return {
      redirect: {
        permanent: false,
        destination: '/companies/list/'
      }
    }
  }

  const { findOneCompany } = document
  const tab = query?.type || 'products'

  return {
    props: {
      token: token ?? '',
      pageTitle: 'Company View',
      companyId,
      data: findOneCompany,
      tab
    }
  }
}

export default ViewPage

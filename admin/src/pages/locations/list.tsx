import { getCookie } from 'cookies-next'

import { GetServerSideProps } from 'next/types'
import authConfig from '../../configs/auth'
import PageComponent from '@views/locations'

const ListPage = ({}) => {
  return <PageComponent />
}

ListPage.pageTitle = 'Locations'

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const token = getCookie(authConfig.cookieTokenKeyName, { req, res })

  return {
    props: {
      token: token ?? ''
    }
  }
}

export default ListPage

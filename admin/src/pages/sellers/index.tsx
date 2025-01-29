import { getCookie } from 'cookies-next'
import { GetServerSideProps } from 'next/types'
import authConfig from '../../configs/auth'
import { ListSellersComponent } from '@views/sellers'

const ListSellersPage = ({}) => {
  return <ListSellersComponent />
}

ListSellersPage.pageTitle = 'Sellers'

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const token = getCookie(authConfig.cookieTokenKeyName, { req, res })

  return {
    props: {
      token: token ?? ''
    }
  }
}

export default ListSellersPage

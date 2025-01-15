import { getCookie } from 'cookies-next'
import { GetServerSideProps } from 'next/types'
import authConfig from '../../configs/auth'
import { ListBuyersComponent } from '@views/buyers'

const ListBuyersPage = ({}) => {
  return <ListBuyersComponent />
}

ListBuyersPage.pageTitle = 'Buyers'

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const token = getCookie(authConfig.cookieTokenKeyName, { req, res })

  return {
    props: {
      token: token ?? ''
    }
  }
}

export default ListBuyersPage

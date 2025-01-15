import { getCookie } from 'cookies-next'

import { GetServerSideProps } from 'next/types'
import authConfig from '../../configs/auth'
import AdminComponent from '@views/admin/list'

const AdminListPage = ({}) => {
  return <AdminComponent />
}

AdminListPage.pageTitle = 'Admins'

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const token = getCookie(authConfig.cookieTokenKeyName, { req, res })

  return {
    props: {
      token: token ?? ''
    }
  }
}

export default AdminListPage

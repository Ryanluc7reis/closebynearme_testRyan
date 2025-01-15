import { getCookie } from 'cookies-next'

import { GetServerSideProps } from 'next/types'
import authConfig from '../../configs/auth'
import dynamic from 'next/dynamic'

const UploadCSVComponent = dynamic(() => import('@views/categories/upload-csv/index'), {
  ssr: false
})

interface Props {
  categoryId: string
}

const ListPage = ({ categoryId }: Props) => {
  return <UploadCSVComponent categoryId={categoryId} />
}

ListPage.pageTitle = 'CSV Upload'

export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  const token = getCookie(authConfig.cookieTokenKeyName, { req, res })

  if (!query.categoryId) {
    return {
      redirect: {
        destination: '/categories/list/',
        permanent: false
      }
    }
  }

  return {
    props: {
      token: token ?? '',
      categoryId: query.categoryId
    }
  }
}

export default ListPage

import { getCookie } from 'cookies-next'

import { GetServerSideProps } from 'next/types'
import authConfig from '../../../configs/auth'
import dynamic from 'next/dynamic'
import { ArticleFormDefaultValues } from '@views/articles/studio/schema'

const PageComponent = dynamic(() => import('@views/articles/studio/index'), {
  ssr: false
})

const ListPage = ({}) => {
  return (
    <PageComponent
      data={{
        articleId: null,
        editMode: false,
        defaultValues: ArticleFormDefaultValues
      }}
    />
  )
}

ListPage.pageTitle = 'Create Article'

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const token = getCookie(authConfig.cookieTokenKeyName, { req, res })

  return {
    props: {
      token: token ?? ''
    }
  }
}

export default ListPage

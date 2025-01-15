import { getCookie } from 'cookies-next'

import { GetServerSideProps } from 'next/types'
import authConfig from '../../../../../configs/auth'
import dynamic from 'next/dynamic'
import { ArticleFormUpdateDefaultValues } from '@views/articles/studio/schema'
import client from 'src/apollo-client'
import { FindOneArticleDocument, FindOneArticleQueryResult } from '@graphql'
import { EditProps } from '@views/articles/studio/index'

const PageComponent = dynamic(() => import('@views/articles/studio/index'), {
  ssr: false
})

interface Props {
  data: EditProps
}

const EditStudioPage = ({ data }: Props) => {
  return <PageComponent data={data} />
}

EditStudioPage.pageTitle = 'Edit Article'

export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  const token = getCookie(authConfig.cookieTokenKeyName, { req, res })
  const articleId = query.id as string

  const { data } = (await client(token).query({
    query: FindOneArticleDocument,
    variables: {
      id: articleId
    },
    fetchPolicy: 'no-cache'
  })) as FindOneArticleQueryResult

  const document = data?.findOneArticle

  return {
    props: {
      token: token ?? '',
      data: {
        editMode: true,
        articleId,
        defaultValues: ArticleFormUpdateDefaultValues(articleId, {
          categoryId: document?.categoryId,
          categoryName: document?.categoryName,
          description: document?.description,
          locationId: document?.locationId,
          locationName: document?.locationName,
          title: document?.title,
          type: document?.type,
          image: document?.image
        })
      }
    }
  }
}

export default EditStudioPage

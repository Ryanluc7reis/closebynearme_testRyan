import { getCookie } from 'cookies-next'

import { GetServerSideProps } from 'next/types'
import authConfig from '../../../../../configs/auth'
import PageComponent, { CreateProductProps } from '@views/products/studio'
import { CreateProductFormDefaultValues } from '@views/products/studio/schema'
import client from 'src/apollo-client'
import { FindOneCompanyDocument, FindOneCompanyQueryResult } from '@graphql'

interface Props {
  data: CreateProductProps
}

const StudioPage = ({ data }: Props) => {
  return <PageComponent data={data} />
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

  return {
    props: {
      token: token ?? '',
      companyId,
      pageTitle: 'Create Product',
      data: {
        companyId,
        productId: null,
        editMode: false,
        defaultValues: CreateProductFormDefaultValues({
          companyId,
          locationId: findOneCompany.locationId,
          categoryId: findOneCompany.categoriesId[0]
        })
      }
    }
  }
}

export default StudioPage

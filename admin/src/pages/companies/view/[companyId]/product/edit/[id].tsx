import { getCookie } from 'cookies-next'
import { GetServerSideProps } from 'next/types'
import React from 'react'
import authConfig from 'src/configs/auth'
import PageComponent, { EditProductProps } from '@views/products/studio'
import { UpdateProductFormDefaultValues } from '@views/products/studio/schema'
import { FindOneProductDocument, FindOneProductQueryResult } from '@graphql'
import client from 'src/apollo-client'

interface Props {
  data: EditProductProps
}

const StudioPage = ({ data }: Props) => {
  return <PageComponent data={data} />
}
export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  const token = getCookie(authConfig.cookieTokenKeyName, { req, res })

  const companyId = query.companyId as string
  const productId = query.id as string
  let document: FindOneProductQueryResult['data']

  try {
    const res = (await client(token).query({
      query: FindOneProductDocument,
      variables: {
        id: productId
      },
      fetchPolicy: 'no-cache'
    })) as FindOneProductQueryResult

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
        destination: `/companies/view/${companyId}/`
      }
    }
  }

  const { findOneProduct } = document

  return {
    props: {
      token: token ?? '',
      pageTitle: 'Edit Product',
      data: {
        editMode: true,
        companyId,
        productId,
        defaultValues: UpdateProductFormDefaultValues(productId, {
          amenities: findOneProduct.amenities,
          categoryId: findOneProduct.categoryId,
          full_price: findOneProduct.full_price,
          companyId: findOneProduct.companyId,
          description: findOneProduct.description,
          images: findOneProduct.images,
          serviceFee: findOneProduct.serviceFee,
          priceType: findOneProduct.priceType,
          price: findOneProduct.price,
          locationId: findOneProduct.locationId,
          minimunDays: findOneProduct.minimunDays,
          name: findOneProduct.name,
          spaceRequirements: findOneProduct.spaceRequirements,
          safety: findOneProduct.safety,
          insurancePlan: findOneProduct.insurancePlan,
          notification: findOneProduct.notification,
          supervision: findOneProduct.supervision
        })
      }
    }
  }
}

export default StudioPage

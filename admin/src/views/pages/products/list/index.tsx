import React from 'react'
import CustomTable from '@components/Table'
import {
  ListCategoriesPaginatedQueryVariables,
  StatusAllowed,
  useListProductsPaginatedQuery,
  useRemoveProductMutation,
  useToggleProductStatusMutation
} from '@graphql'
import toast from 'react-hot-toast'
import { handleCatchError, onErrorFormat } from 'src/configs/errorResponse'
import { TableColumnsOptionsAction, fallBackTable } from 'src/interfaces'
import { ListProductsItem, ProductsColumns } from './columns'
import { useRouter } from 'next/router'

const variables = {
  search: {
    page: 1,
    q: '',
    perPage: 10,
    status: StatusAllowed.Empty
  }
} satisfies ListCategoriesPaginatedQueryVariables

interface Props {
  companyId: string
}

const ProductsListPageComponent = ({ companyId }: Props) => {
  const router = useRouter()
  const { data, loading, refetch, error } = useListProductsPaginatedQuery({
    variables: {
      search: {
        ...variables.search,
        companyId
      }
    }
  })
  const [handleToggleStatus] = useToggleProductStatusMutation()
  const [handleRemove] = useRemoveProductMutation()

  const handleStatusToggle = (row: ListProductsItem) => {
    toast
      .promise(
        handleToggleStatus({
          variables: {
            id: row._id
          },
          onError: onErrorFormat
        }),
        {
          error: 'Something is wrong',
          loading: 'Loading...',
          success: 'Success!'
        }
      )
      .then(() => {
        refetch()
      })
      .catch(handleCatchError)
  }

  const handleAction = (action: TableColumnsOptionsAction, row: ListProductsItem) => {
    if (action === TableColumnsOptionsAction.UPDATE) {
      handleUpdate(row)
    }
    if (action === TableColumnsOptionsAction.TOGGLE_STATUS) {
      handleStatusToggle(row)
    }
    if (action === TableColumnsOptionsAction.REMOVE) {
      _handleRemove(row)
    }
  }

  const _handleRemove = (row: ListProductsItem) => {
    toast
      .promise(
        handleRemove({
          variables: {
            id: row._id
          },
          onError: onErrorFormat
        }),
        {
          error: 'Something is wrong',
          loading: 'Loading...',
          success: 'Success!'
        }
      )
      .then(() => {
        refetch()
      })
      .catch(handleCatchError)
  }

  const handleUpdate = (row: ListProductsItem) => {
    router.push(`/companies/view/${companyId}/product/edit/${row._id}/`)
  }

  if (error) {
    return null
  }

  return (
    <CustomTable
      columns={ProductsColumns({ handleAction })}
      rows={data?.listProductsPaginated.docs ?? []}
      data={!loading ? { ...(data?.listProductsPaginated || fallBackTable), docs: undefined } : fallBackTable}
      loading={loading}
      variables={{
        search: {
          ...variables.search,
          companyId
        }
      }}
      headerOptions={{
        type: 'add',
        name: 'Create',
        icon: '',
        handle: () => {
          router.push(`/companies/view/${companyId}/product/`)
        }
      }}
      filterOptions={{
        types: [
          {
            id: 'select-product-status-id',
            name: 'status',
            type: 'select',
            nameOptions: 'statusOptions'
          }
        ]
      }}
      refetch={refetch}
    />
  )
}

export default ProductsListPageComponent

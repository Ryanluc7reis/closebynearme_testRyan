import React from 'react'
import CustomTable from '@components/Table'
import { ArticlesColumns, ListArticlesItem } from './columns'

import {
  ArticlesTypeAllowed,
  ListArticlesPaginatedQueryVariables,
  StatusAllowed,
  useListArticlesPaginatedQuery,
  useRemoveArticleMutation,
  useToggleArticleStatusMutation
} from '@graphql'

import toast from 'react-hot-toast'
import { handleCatchError, onErrorFormat } from 'src/configs/errorResponse'
import { TableColumnsOptionsAction, fallBackTable } from 'src/interfaces'
import { useRouter } from 'next/router'

const variables = {
  search: {
    page: 1,
    q: '',
    perPage: 10,
    status: StatusAllowed.Empty,
    type: ArticlesTypeAllowed.Empty
  }
} satisfies ListArticlesPaginatedQueryVariables

const ArticlesListPageComponent = () => {
  const router = useRouter()
  const { data, loading, refetch, error } = useListArticlesPaginatedQuery({
    variables
  })
  const [handleToggleStatus] = useToggleArticleStatusMutation()
  const [handleRemove] = useRemoveArticleMutation()

  const handleStatusToggle = (row: ListArticlesItem) => {
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

  const handleAction = (action: TableColumnsOptionsAction, row: ListArticlesItem) => {
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

  const _handleRemove = (row: ListArticlesItem) => {
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

  const handleUpdate = (row: ListArticlesItem) => {
    const uri = `/articles/studio-creation/edit/${row._id}`
    router.push(uri, uri, { shallow: true })
  }

  if (error) {
    return null
  }

  return (
    <CustomTable
      columns={ArticlesColumns({ handleAction })}
      rows={data?.listArticlesPaginated.docs ?? []}
      data={!loading ? { ...(data?.listArticlesPaginated || fallBackTable), docs: undefined } : fallBackTable}
      loading={loading}
      variables={variables}
      headerOptions={{
        type: 'add',
        name: 'Create',
        icon: '',
        handle: () => {
          router.push('/articles/studio-creation')
        }
      }}
      filterOptions={{
        types: [
          {
            id: 'select-admin-status-id',
            name: 'status',
            type: 'select',
            nameOptions: 'statusOptions'
          },
          {
            id: 'select-article-type-id',
            name: 'type',
            type: 'select',
            nameOptions: 'articlesTypeAllowedOptions'
          }
        ]
      }}
      refetch={refetch}
    />
  )
}

export default ArticlesListPageComponent

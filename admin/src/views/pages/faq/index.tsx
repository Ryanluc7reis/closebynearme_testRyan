import React, { useState } from 'react'
import CustomTable from '@components/Table'
import { FaqsColumns, ListFaqsItem } from './columns'

import {
  ListFaqsPaginatedQueryVariables,
  StatusAllowed,
  useListFaqsPaginatedQuery,
  useRemoveFaqMutation,
  useToggleFaqStatusMutation
} from '@graphql'

import toast from 'react-hot-toast'
import { handleCatchError, onErrorFormat } from 'src/configs/errorResponse'
import { TableColumnsOptionsAction, fallBackTable } from 'src/interfaces'

import dynamic from 'next/dynamic'
import {
  CreateFaqDefaultValues,
  CreateFaqFormDefaultValues,
  UpdateFaqDefaultValues,
  UpdateFaqFormDefaultValues
} from '@components/Sidebar/schemas/faq.schema'

const SidebarComponent = dynamic(() => import('@components/Sidebar/Sidebar'), { ssr: false })

const variables = {
  search: {
    page: 1,
    q: '',
    perPage: 10,
    status: StatusAllowed.Empty
  }
} satisfies ListFaqsPaginatedQueryVariables

const FaqsListPageComponent = () => {
  const { data, loading, refetch, error } = useListFaqsPaginatedQuery({
    variables
  })
  const [handleToggleStatus] = useToggleFaqStatusMutation()
  const [handleRemove] = useRemoveFaqMutation()
  const [isReady, setIsReady] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [valuesForm, setValuesForm] = useState<CreateFaqDefaultValues | UpdateFaqDefaultValues>(
    CreateFaqFormDefaultValues
  )

  const handleStatusToggle = (row: ListFaqsItem) => {
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

  const handleAction = (action: TableColumnsOptionsAction, row: ListFaqsItem) => {
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

  const _handleRemove = (row: ListFaqsItem) => {
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

  const handleUpdate = (row: ListFaqsItem) => {
    setIsReady(false)

    setTimeout(() => {
      setValuesForm(
        UpdateFaqFormDefaultValues(row._id, {
          answer: row.answer,
          question: row.question,
          categoryId: row.categoryId,
          categoryName: row.categoryName,
          locationId: row.locationId,
          locationName: row.locationName
        })
      )

      setIsReady(true)
    }, 300)
    setSidebarOpen(true)
  }

  if (error) {
    return null
  }

  return (
    <CustomTable
      columns={FaqsColumns({ handleAction })}
      rows={data?.listFaqsPaginated.docs ?? []}
      data={!loading ? { ...(data?.listFaqsPaginated || fallBackTable), docs: undefined } : fallBackTable}
      loading={loading}
      variables={variables}
      headerOptions={{
        type: 'add',
        name: 'Create',
        icon: '',
        handle: () => {
          setIsReady(false)
          setTimeout(() => {
            setValuesForm(CreateFaqFormDefaultValues)
            setIsReady(true)
          }, 300)
          setSidebarOpen(true)
        }
      }}
      filterOptions={{
        types: [
          {
            id: 'select-admin-status-id',
            name: 'status',
            type: 'select',
            nameOptions: 'statusOptions'
          }
        ]
      }}
      refetch={refetch}
      sidebar={
        isReady && (
          <SidebarComponent
            open={sidebarOpen}
            toggle={() => {
              setTimeout(() => {
                setIsReady(false)
              }, 300)
              setSidebarOpen(false)
            }}
            refetch={refetch}
            defaultValues={valuesForm}
            formType='faq'
          />
        )
      }
    />
  )
}

export default FaqsListPageComponent

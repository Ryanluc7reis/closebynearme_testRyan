import React, { useState } from 'react'
import CustomTable from '@components/Table'
import { ReviewsColumns, ListReviewsItem } from './columns'

import {
  ListReviewsForCompanyPaginatedQueryVariables,
  StatusAllowed,
  useListReviewsForCompanyPaginatedQuery,
  useRemoveReviewMutation,
  useToggleReviewStatusMutation
} from '@graphql'

import toast from 'react-hot-toast'
import { handleCatchError, onErrorFormat } from 'src/configs/errorResponse'
import { TableColumnsOptionsAction, fallBackTable } from 'src/interfaces'

import SidebarComponent from '@components/Sidebar/Sidebar'
import {
  CreateReviewDefaultValues,
  CreateReviewFormDefaultValues,
  UpdateReviewDefaultValues,
  UpdateReviewFormDefaultValues
} from '@components/Sidebar/schemas/reviews.schema'

const variables = {
  search: {
    page: 1,
    q: '',
    perPage: 10,
    status: StatusAllowed.Empty
  },
  companyId: ''
} satisfies ListReviewsForCompanyPaginatedQueryVariables

interface Props {
  companyId: string
  locationId: string
  locationName: string
}

const ReviewsListPageComponent = ({ companyId, locationId, locationName }: Props) => {
  const { data, loading, refetch, error } = useListReviewsForCompanyPaginatedQuery({
    variables: {
      search: variables.search,
      companyId
    }
  })
  const [handleToggleStatus] = useToggleReviewStatusMutation()
  const [handleRemove] = useRemoveReviewMutation()
  const [isReady, setIsReady] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [valuesForm, setValuesForm] = useState<CreateReviewDefaultValues | UpdateReviewDefaultValues>(
    CreateReviewFormDefaultValues
  )

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const handleStatusToggle = (row: ListReviewsItem) => {
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

  const handleAction = (action: TableColumnsOptionsAction, row: ListReviewsItem) => {
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

  const _handleRemove = (row: ListReviewsItem) => {
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

  const handleUpdate = (row: ListReviewsItem) => {
    setIsReady(false)

    setTimeout(() => {
      setValuesForm(
        UpdateReviewFormDefaultValues(row._id, {
          fullName: row.fullName,
          description: row.description,
          amount: row.amount,
          companyId,
          locationId,
          locationName
        })
      )

      setIsReady(true)
    }, 300)
    toggleSidebar()
  }

  if (error) {
    return null
  }

  return (
    <CustomTable
      columns={ReviewsColumns({ handleAction })}
      rows={data?.listReviewsForCompany.docs ?? []}
      data={!loading ? { ...(data?.listReviewsForCompany || fallBackTable), docs: undefined } : fallBackTable}
      loading={loading}
      variables={variables}
      headerOptions={{
        type: 'add',
        name: 'Create',
        icon: '',
        handle: () => {
          setIsReady(false)
          setTimeout(() => {
            setValuesForm({
              ...CreateReviewFormDefaultValues,
              locationId,
              companyId,
              locationName
            })
            setIsReady(true)
          }, 300)
          toggleSidebar()
        }
      }}
      filterOptions={{
        types: [
          {
            id: 'select-reviews-status-id',
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
            toggle={toggleSidebar}
            refetch={refetch}
            defaultValues={valuesForm}
            formType='review'
          />
        )
      }
    />
  )
}

export default ReviewsListPageComponent

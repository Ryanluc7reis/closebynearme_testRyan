import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import CustomTable from '@components/Table'
import { CategoriesColumns, ListCategoriesItem } from './columns'

import {
  ListCategoriesPaginatedQueryVariables,
  StatusAllowed,
  useListCategoriesPaginatedQuery,
  useRemoveCategoryMutation,
  useToggleCategoryStatusMutation
} from '@graphql'

import toast from 'react-hot-toast'
import { handleCatchError, onErrorFormat } from 'src/configs/errorResponse'
import { TableColumnsOptionsAction, fallBackTable } from 'src/interfaces'
import {
  CreateCategoryDefaultValues,
  CreateCategoryFormDefaultValues,
  UpdateCategoryDefaultValues,
  UpdateCategoryFormDefaultValues
} from '@components/Sidebar/schemas/categories.schema'
import { useFilters } from 'src/hooks/useFilters'

const SidebarComponent = dynamic(() => import('@components/Sidebar/Sidebar'), { ssr: false })

const variables = {
  search: {
    page: 1,
    q: '',
    perPage: 10,
    status: StatusAllowed.Empty
  }
} satisfies ListCategoriesPaginatedQueryVariables

const CategoriesListPageComponent = () => {
  const { data, loading, refetch, error } = useListCategoriesPaginatedQuery({
    variables
  })
  const { refetchQuery } = useFilters()
  const [handleToggleStatus] = useToggleCategoryStatusMutation()
  const [handleRemove] = useRemoveCategoryMutation()
  const [isReady, setIsReady] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [valuesForm, setValuesForm] = useState<CreateCategoryDefaultValues | UpdateCategoryDefaultValues>(
    CreateCategoryFormDefaultValues
  )

  const handleStatusToggle = (row: ListCategoriesItem) => {
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
        refetchQuery(['categoriesOptions'])
      })
      .catch(handleCatchError)
  }

  const handleAction = (action: TableColumnsOptionsAction, row: ListCategoriesItem) => {
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

  const _handleRemove = (row: ListCategoriesItem) => {
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
        refetchQuery(['categoriesOptions'])
      })
      .catch(handleCatchError)
  }

  const handleUpdate = (row: ListCategoriesItem) => {
    setIsReady(false)

    setTimeout(() => {
      setValuesForm(
        UpdateCategoryFormDefaultValues(row._id, {
          name: row.name,
          insurancePlan: row.insurancePlan,
          notification: row.notification,
          safety: row.safety,
          spaceRequirements: row.spaceRequirements,
          supervision: row.supervision
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
      columns={CategoriesColumns({ handleAction })}
      rows={data?.listCategoriesPaginated.docs ?? []}
      data={!loading ? { ...(data?.listCategoriesPaginated || fallBackTable), docs: undefined } : fallBackTable}
      loading={loading}
      variables={variables}
      headerOptions={{
        type: 'add',
        name: 'Create',
        icon: '',
        handle: () => {
          setIsReady(false)
          setTimeout(() => {
            setValuesForm(CreateCategoryFormDefaultValues)
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
            redirect={{
              href: `/categories/csv-upload?categoryId=#REPLACE_HERE`,
              wildcard: '#REPLACE_HERE',
              path: 'createCategory'
            }}
            refetchQueries={['categoriesOptions']}
            defaultValues={valuesForm}
            formType='category'
          />
        )
      }
    />
  )
}

export default CategoriesListPageComponent

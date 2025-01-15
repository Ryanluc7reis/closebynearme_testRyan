import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import CustomTable from '@components/Table'
import { LocationsColumns, ListLocationsItem } from './columns'

import {
  ListLocationsPaginatedQueryVariables,
  StatusAllowed,
  useListLocationsPaginatedQuery,
  useRemoveLocationMutation,
  useToggleLocationStatusMutation
} from '@graphql'

import toast from 'react-hot-toast'
import { handleCatchError, onErrorFormat } from 'src/configs/errorResponse'
import { TableColumnsOptionsAction, fallBackTable } from 'src/interfaces'

import DialogCategories from './DialogCategories'
import {
  CreateLocationDefaultValues,
  CreateLocationFormDefaultValues,
  UpdateLocationDefaultValues,
  UpdateLocationFormDefaultValues
} from '@components/Sidebar/schemas/locations.schema'
import { useFilters } from 'src/hooks/useFilters'

const SidebarComponent = dynamic(() => import('@components/Sidebar/Sidebar'), { ssr: false })

const variables = {
  search: {
    page: 1,
    q: '',
    perPage: 10,
    status: StatusAllowed.Empty
  }
} satisfies ListLocationsPaginatedQueryVariables

const LocationsListPageComponent = () => {
  const { data, loading, refetch, error } = useListLocationsPaginatedQuery({
    variables
  })
  const { refetchQuery } = useFilters()
  const [handleToggleStatus] = useToggleLocationStatusMutation()
  const [handleRemove] = useRemoveLocationMutation()
  const [isReady, setIsReady] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [valuesForm, setValuesForm] = useState<CreateLocationDefaultValues | UpdateLocationDefaultValues>(
    CreateLocationFormDefaultValues
  )
  const [dialogData, setDialogData] = useState<ListLocationsItem | null>(null)
  const [showDialog, setShowDialog] = useState(false)

  const handleStatusToggle = (row: ListLocationsItem) => {
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
        refetchQuery(['locationsOptions'])
      })
      .catch(handleCatchError)
  }

  const handleAction = (action: TableColumnsOptionsAction, row: ListLocationsItem) => {
    if (action === TableColumnsOptionsAction.UPDATE) {
      handleUpdate(row)
    }
    if (action === TableColumnsOptionsAction.TOGGLE_STATUS) {
      handleStatusToggle(row)
    }
    if (action === TableColumnsOptionsAction.REMOVE) {
      _handleRemove(row)
    }
    if (action === TableColumnsOptionsAction.SHOW_DIALOG) {
      setDialogData(row)
      setShowDialog(true)
    }
  }

  const _handleRemove = (row: ListLocationsItem) => {
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
        refetchQuery(['locationsOptions'])
      })
      .catch(handleCatchError)
  }

  const handleUpdate = (row: ListLocationsItem) => {
    setIsReady(false)

    setTimeout(() => {
      setValuesForm(
        UpdateLocationFormDefaultValues(row._id, {
          name: row.name,
          categories: row.categories,
          categoriesId: row.categoriesId,
          image: row.image
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
    <>
      <CustomTable
        columns={LocationsColumns({ handleAction })}
        rows={data?.listLocationsPaginated.docs ?? []}
        data={!loading ? { ...(data?.listLocationsPaginated || fallBackTable), docs: undefined } : fallBackTable}
        loading={loading}
        variables={variables}
        headerOptions={{
          type: 'add',
          name: 'Create',
          icon: '',
          handle: () => {
            setIsReady(false)
            setTimeout(() => {
              setValuesForm(CreateLocationFormDefaultValues)
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
              formType='location'
              refetchQueries={['locationsOptions']}
              populateValues={[
                {
                  filterName: 'categoriesOptions',
                  from: 'categoriesId',
                  key: 'categories',
                  resolve: (item: any) => ({ name: item.label, slug: item.data.slug })
                }
              ]}
            />
          )
        }
      />
      {dialogData && (
        <DialogCategories
          setShow={(status) => {
            setShowDialog(status)
            setDialogData(null)
          }}
          show={showDialog}
          data={dialogData}
        />
      )}
    </>
  )
}

export default LocationsListPageComponent

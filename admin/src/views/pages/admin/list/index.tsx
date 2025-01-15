import React from 'react'
import CustomTable from '../../../../components/Table'
import { AdminColumns, ListAdminItem } from './columns'
import { useState } from 'react'
import {
  ListAdminQueryVariables,
  RolesAllowed,
  StatusAllowed,
  useListAdminQuery,
  useToggleAdminStatusMutation
} from '@graphql'
import toast from 'react-hot-toast'
import { handleCatchError, onErrorFormat } from 'src/configs/errorResponse'
import { TableColumnsOptionsAction, fallBackTable } from 'src/interfaces'
import {
  CreateAdminDefaultValues,
  UpdateAdminDefaultValues,
  CreateAdminFormDefaultValues,
  UpdateAdminFormDefaultValues
} from '@components/Sidebar/schemas/admin_schema'
import dynamic from 'next/dynamic'

const SidebarComponent = dynamic(() => import('@components/Sidebar/Sidebar'), { ssr: true })

const variables = {
  search: {
    page: 1,
    q: '',
    perPage: 10,
    status: StatusAllowed.Empty,
    role: RolesAllowed.Empty
  }
} satisfies ListAdminQueryVariables

const AdminListPageComponent = () => {
  const { data, loading, refetch, error } = useListAdminQuery({
    variables
  })
  const [handleToggleStatus] = useToggleAdminStatusMutation()

  const [valuesForm, setValuesForm] = useState<CreateAdminDefaultValues | UpdateAdminDefaultValues>(
    CreateAdminFormDefaultValues
  )
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isReady, setIsReady] = useState(false)

  const handleStatusToggle = (row: ListAdminItem) => {
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

  const handleAction = (action: TableColumnsOptionsAction, row: ListAdminItem) => {
    if (action === TableColumnsOptionsAction.UPDATE) {
      handleUpdate(row)
    }
    if (action === TableColumnsOptionsAction.TOGGLE_STATUS) {
      handleStatusToggle(row)
    }
  }

  const handleUpdate = (row: ListAdminItem) => {
    setIsReady(false)

    setTimeout(() => {
      setValuesForm(
        UpdateAdminFormDefaultValues(row._id, {
          email: row.email,
          fullName: row.fullName,
          permissions: row.permissions,

          profile: row.profile,
          status: row.status,

          avatar: row.avatar
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
      columns={AdminColumns({ handleAction })}
      rows={data?.listAdmin.docs ?? []}
      data={!loading ? { ...(data?.listAdmin || fallBackTable), docs: undefined } : fallBackTable}
      loading={loading}
      variables={variables}
      headerOptions={{
        type: 'add',
        name: 'Add',
        icon: '',
        handle: () => {
          setIsReady(false)
          setTimeout(() => {
            setValuesForm(CreateAdminFormDefaultValues)
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
            formType='admin'
            resetValues={['confirmPassword']}
          />
        )
      }
      refetch={refetch}
    />
  )
}

export default AdminListPageComponent

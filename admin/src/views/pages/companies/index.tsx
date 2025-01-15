import React, { useState } from 'react'
import CustomTable from '@components/Table'
import { CompaniesColumns, ListCompaniesItem } from './columns'
import {
  ListCompaniesPaginatedQueryVariables,
  MerchantPublishedStatus,
  StatusAllowed,
  useListCompaniesPaginatedQuery,
  useRemoveCompanyMutation,
  useToggleCompanyStatusMutation
} from '@graphql'
import toast from 'react-hot-toast'
import { handleCatchError, onErrorFormat } from 'src/configs/errorResponse'
import { TableColumnsOptionsAction, fallBackTable } from 'src/interfaces'
import dynamic from 'next/dynamic'
import {
  CreateCompanyDefaultValues,
  CreateCompanyFormDefaultValues,
  UpdateCompanyDefaultValues,
  UpdateCompanyFormDefaultValues
} from '@components/Sidebar/schemas/company_schema'

const SidebarComponent = dynamic(() => import('@components/Sidebar/Sidebar'), { ssr: false })

const variables = {
  search: {
    page: 1,
    q: '',
    perPage: 10,
    status: StatusAllowed.Empty,
    merchantListingStatus: [MerchantPublishedStatus.NotListing, MerchantPublishedStatus.Published]
  }
} satisfies ListCompaniesPaginatedQueryVariables

const CompaniesListPageComponent = () => {
  const { data, loading, refetch, error } = useListCompaniesPaginatedQuery({
    variables
  })
  const [handleToggleStatus] = useToggleCompanyStatusMutation()
  const [handleRemove] = useRemoveCompanyMutation()
  const [isReady, setIsReady] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [valuesForm, setValuesForm] = useState<CreateCompanyDefaultValues | UpdateCompanyDefaultValues>(
    CreateCompanyFormDefaultValues
  )

  const handleStatusToggle = (row: ListCompaniesItem) => {
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

  const handleAction = (action: TableColumnsOptionsAction, row: ListCompaniesItem) => {
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

  const _handleRemove = (row: ListCompaniesItem) => {
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

  const handleUpdate = (row: ListCompaniesItem) => {
    setIsReady(false)

    setTimeout(() => {
      setValuesForm(
        UpdateCompanyFormDefaultValues(row._id, {
          name: row.name,
          address: row.address,
          categoriesId: row.categoriesId,
          categories: row.categories,
          googleMapsLink: row.googleMapsLink,
          locationId: row.locationId,
          locationName: row.locationName,
          phoneNumber: row.phoneNumber,
          websiteUrl: row.websiteUrl
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
      columns={CompaniesColumns({ handleAction })}
      rows={data?.listCompaniesPaginated.docs ?? []}
      data={!loading ? { ...(data?.listCompaniesPaginated || fallBackTable), docs: undefined } : fallBackTable}
      loading={loading}
      variables={variables}
      headerOptions={{
        type: 'add',
        name: 'Create',
        icon: '',
        handle: () => {
          setIsReady(false)
          setTimeout(() => {
            setValuesForm(CreateCompanyFormDefaultValues)
            setIsReady(true)
          }, 300)
          setSidebarOpen(true)
        }
      }}
      filterOptions={{
        types: [
          {
            id: 'select-company-status-id',
            name: 'status',
            type: 'select',
            nameOptions: 'statusOptions'
          },
          {
            id: 'select-company-merchant-status-id',
            name: 'merchantListingStatus',
            type: 'multiselect',
            nameOptions: 'merchantListingStatus'
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
            formType='company'
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
  )
}

export default CompaniesListPageComponent

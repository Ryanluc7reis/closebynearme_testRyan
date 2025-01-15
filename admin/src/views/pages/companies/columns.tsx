import { GridColDef } from '@mui/x-data-grid'
import { ListCompaniesPaginatedQuery } from '@graphql'
import { ColumnExtraProps, CellType } from '@components/Table/columns_components/interfaces'
import dynamic from 'next/dynamic'
import { RenderChip } from '@components/Table/columns_components'

const RenderStatusChip = dynamic(() => import('@components/Table/columns_components/RenderStatusChip'), {
  ssr: false
})

const RenderChipsWithLabelLink = dynamic(
  () => import('@components/Table/columns_components/RenderChipsWithLabelLink'),
  {
    ssr: false
  }
)

const RowActionsOptions = dynamic(() => import('@components/Table/columns_components/RowActionsOptions'), {
  ssr: false
})

export type ListCompaniesItem = ListCompaniesPaginatedQuery['listCompaniesPaginated']['docs'][0]
type CellItemType = CellType<ListCompaniesItem>

export const CompaniesColumns = ({ handleAction }: ColumnExtraProps<ListCompaniesItem>): GridColDef[] => [
  {
    flex: 0.25,
    minWidth: 280,
    field: 'name',
    sortable: false,
    filterable: false,
    hideable: false,
    headerName: 'Name'
  },
  {
    flex: 0.1,
    minWidth: 200,
    field: 'locationName',
    sortable: false,
    filterable: false,
    hideable: false,
    headerName: 'Location'
  },
  {
    flex: 0.1,
    field: 'categories',
    minWidth: 100,
    disableExport: true,
    headerName: 'Categories',
    sortable: false,
    filterable: false,
    renderCell: ({ row }: CellItemType) => {
      return row.categories.map((item) => (
        <RenderChipsWithLabelLink
          key={`${row._id}_${item.slug}`}
          name={item.name}
          href={`${process.env.NEXT_PUBLIC_WEB}/city/${row.locationSlug}/${item.slug}/${row.slug}`}
        />
      ))
    }
  },
  {
    flex: 0.1,
    minWidth: 110,
    sortable: false,
    filterable: false,
    field: 'merchantListingStatus',
    headerName: 'Listing Status',
    renderCell: ({ row }: CellItemType) => <RenderChip label={row.merchantListingStatus} />
  },
  {
    flex: 0.1,
    minWidth: 110,
    sortable: false,
    filterable: false,
    field: 'status',
    headerName: 'Status',
    renderCell: ({ row }: CellItemType) => <RenderStatusChip row={row} />
  },
  {
    flex: 0.1,
    minWidth: 100,
    sortable: false,
    filterable: false,
    hideable: false,
    field: 'actions',
    headerName: 'Actions',
    renderCell: ({ row }: CellItemType) => (
      <RowActionsOptions
        handleAction={handleAction}
        row={row}
        extraOptions={[
          {
            _id: `row-action-listing-${row._id}`,
            icon: 'tabler:eye',
            isLink: true,
            href: `/companies/view/${row._id}/`,
            disabled: false,
            iconSize: 20,
            label: 'View Listing'
          }
        ]}
      />
    )
  }
]

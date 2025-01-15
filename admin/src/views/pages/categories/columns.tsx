import { GridColDef } from '@mui/x-data-grid'
import { ListCategoriesPaginatedQuery, Status } from '@graphql'
import { ColumnExtraProps, CellType } from '@components/Table/columns_components/interfaces'
import dynamic from 'next/dynamic'

const RenderStatusChip = dynamic(() => import('@components/Table/columns_components/RenderStatusChip'), {
  ssr: false
})

const RowActionsOptions = dynamic(() => import('@components/Table/columns_components/RowActionsOptions'), {
  ssr: false
})

export type ListCategoriesItem = ListCategoriesPaginatedQuery['listCategoriesPaginated']['docs'][0]
type CellItemType = CellType<ListCategoriesItem>

export const CategoriesColumns = ({ handleAction }: ColumnExtraProps<ListCategoriesItem>): GridColDef[] => [
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
            _id: `upload-csv-action-column-${row._id}`,
            disabled: row.status === Status.Inactive,
            label: 'Upload CSV',
            isLink: true,
            href: `/categories/csv-upload/?categoryId=${row._id}`,
            icon: 'tabler:upload',
            iconSize: 20
          }
        ]}
      />
    )
  }
]

import { GridColDef } from '@mui/x-data-grid'
import Button from '@mui/material/Button'
import { ListLocationsPaginatedQuery } from '@graphql'
import { TableColumnsOptionsAction } from 'src/interfaces'
import { ColumnExtraProps, CellType } from '@components/Table/columns_components/interfaces'
import dynamic from 'next/dynamic'

const RenderStatusChip = dynamic(() => import('@components/Table/columns_components/RenderStatusChip'), {
  ssr: false
})

const RowActionsOptions = dynamic(() => import('@components/Table/columns_components/RowActionsOptions'), {
  ssr: false
})

export type ListLocationsItem = ListLocationsPaginatedQuery['listLocationsPaginated']['docs'][0]
type CellItemType = CellType<ListLocationsItem>

export const LocationsColumns = ({ handleAction }: ColumnExtraProps<ListLocationsItem>): GridColDef[] => [
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
    flex: 0.4,
    field: 'categories',
    minWidth: 100,
    disableExport: true,
    headerName: 'Categories',
    sortable: false,
    filterable: false,
    renderCell: ({ row }: CellItemType) => {
      return (
        <Button
          variant='contained'
          onClick={() => {
            handleAction(TableColumnsOptionsAction.SHOW_DIALOG, row)
          }}
        >
          Show {row.categories.length} {row.categories.length === 1 ? 'Category' : 'Categories'}
        </Button>
      )
    }
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
    renderCell: ({ row }: CellItemType) => <RowActionsOptions handleAction={handleAction} row={row} />
  }
]

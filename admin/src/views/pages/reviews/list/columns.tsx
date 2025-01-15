import { GridColDef } from '@mui/x-data-grid'
import { ListReviewsForCompanyPaginatedQuery } from '@graphql'
import { CellType, ColumnExtraProps } from '@components/Table/columns_components/interfaces'
import dynamic from 'next/dynamic'

const RenderStatusChip = dynamic(() => import('@components/Table/columns_components/RenderStatusChip'), {
  ssr: false
})

const RowActionsOptions = dynamic(() => import('@components/Table/columns_components/RowActionsOptions'), {
  ssr: false
})

export type ListReviewsItem = ListReviewsForCompanyPaginatedQuery['listReviewsForCompany']['docs'][0]
type CellItemType = CellType<ListReviewsItem>

export const ReviewsColumns = ({ handleAction }: ColumnExtraProps<ListReviewsItem>): GridColDef[] => [
  {
    flex: 0.25,
    minWidth: 280,
    field: 'fullName',
    sortable: false,
    filterable: false,
    hideable: false,
    headerName: 'Full Name'
  },
  {
    flex: 0.25,
    minWidth: 280,
    field: 'description',
    sortable: false,
    filterable: false,
    hideable: false,
    headerName: 'Description'
  },
  {
    flex: 0.25,
    minWidth: 280,
    field: 'amount',
    sortable: false,
    filterable: false,
    hideable: false,
    headerName: 'Amount'
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

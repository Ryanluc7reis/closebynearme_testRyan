import { GridColDef } from '@mui/x-data-grid'
import { ListProductsPaginatedQuery } from '@graphql'
import { ColumnExtraProps, CellType } from '@components/Table/columns_components/interfaces'
import dynamic from 'next/dynamic'

const RenderStatusChip = dynamic(() => import('@components/Table/columns_components/RenderStatusChip'), {
  ssr: false
})

const RowActionsOptions = dynamic(() => import('@components/Table/columns_components/RowActionsOptions'), {
  ssr: false
})

export type ListProductsItem = ListProductsPaginatedQuery['listProductsPaginated']['docs'][0]
type CellItemType = CellType<ListProductsItem>

export const ProductsColumns = ({ handleAction }: ColumnExtraProps<ListProductsItem>): GridColDef[] => [
  {
    flex: 0.15,
    minWidth: 280,
    field: 'name',
    sortable: false,
    filterable: false,
    hideable: false,
    headerName: 'Name'
  },
  {
    flex: 0.1,
    minWidth: 280,
    field: 'price',
    sortable: false,
    filterable: false,
    hideable: false,
    headerName: 'Price',
    renderCell: ({ row }: CellItemType) => <>{row.price} USD</>
  },
  {
    flex: 0.1,
    minWidth: 280,
    field: 'priceType',
    sortable: false,
    filterable: false,
    hideable: false,
    headerName: 'Type'
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
        viewPath={`${process.env.NEXT_PUBLIC_WEB}/product/${row.slug}`}
        showView
        handleAction={handleAction}
        row={row}
      />
    )
  }
]

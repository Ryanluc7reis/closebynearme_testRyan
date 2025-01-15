import { GridColDef } from '@mui/x-data-grid'
import { ListFaqsPaginatedQuery } from '@graphql'
import { ColumnExtraProps, CellType } from '@components/Table/columns_components/interfaces'
import dynamic from 'next/dynamic'

const RenderStatusChip = dynamic(() => import('@components/Table/columns_components/RenderStatusChip'), {
  ssr: false
})

const RowActionsOptions = dynamic(() => import('@components/Table/columns_components/RowActionsOptions'), {
  ssr: false
})

export type ListFaqsItem = ListFaqsPaginatedQuery['listFaqsPaginated']['docs'][0]
type CellItemType = CellType<ListFaqsItem>

export const FaqsColumns = ({ handleAction }: ColumnExtraProps<ListFaqsItem>): GridColDef[] => [
  {
    flex: 0.25,
    minWidth: 280,
    field: 'question',
    sortable: false,
    filterable: false,
    hideable: false,
    headerName: 'Question'
  },
  {
    flex: 0.25,
    minWidth: 280,
    field: 'answer',
    sortable: false,
    filterable: false,
    hideable: false,
    headerName: 'Answer',
    renderCell: ({ row }) => (
      <span
        dangerouslySetInnerHTML={{
          __html: row.answer
        }}
        className='text-row-format'
      />
    )
  },
  {
    flex: 0.15,
    minWidth: 100,
    field: 'categoryName',
    sortable: false,
    filterable: false,
    hideable: false,
    headerName: 'Category'
  },
  {
    flex: 0.15,
    minWidth: 100,
    field: 'locationName',
    sortable: false,
    filterable: false,
    hideable: false,
    headerName: 'Location'
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

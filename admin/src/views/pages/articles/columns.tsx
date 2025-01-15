import { GridColDef } from '@mui/x-data-grid'
import { ListArticlesPaginatedQuery } from '@graphql'
import { ColumnExtraProps, CellType } from '@components/Table/columns_components/interfaces'
import dynamic from 'next/dynamic'

const RenderStatusChip = dynamic(() => import('@components/Table/columns_components/RenderStatusChip'), {
  ssr: false
})

const RenderChip = dynamic(() => import('@components/Table/columns_components/RenderChip'), {
  ssr: false
})

const RowActionsOptions = dynamic(() => import('@components/Table/columns_components/RowActionsOptions'), {
  ssr: false
})

export type ListArticlesItem = ListArticlesPaginatedQuery['listArticlesPaginated']['docs'][0]
type CellItemType = CellType<ListArticlesItem>

export const ArticlesColumns = ({
  handleAction
}: ColumnExtraProps<ListArticlesItem>): GridColDef<ListArticlesItem>[] => [
  {
    flex: 0.25,
    minWidth: 280,
    field: 'title',
    sortable: false,
    filterable: false,
    hideable: false,
    headerName: 'Title'
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
    flex: 0.15,
    minWidth: 100,
    field: 'type',
    sortable: false,
    filterable: false,
    hideable: false,
    headerName: 'Type',
    renderCell: ({ row }) => {
      return <RenderChip label={row.type} />
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

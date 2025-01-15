import { GridColDef } from '@mui/x-data-grid'
import { ListAdminQuery } from '@graphql'
import { ColumnExtraProps, CellType } from '@components/Table/columns_components/interfaces'
import dynamic from 'next/dynamic'

const RenderPermissionRowFormated = dynamic(
  () => import('@components/Table/columns_components/RenderPermissionRowFormated'),
  {
    ssr: true
  }
)

const RenderStatusChip = dynamic(() => import('@components/Table/columns_components/RenderStatusChip'), {
  ssr: true
})

const RenderUserAvatarEmailFullName = dynamic(
  () => import('@components/Table/columns_components/RenderUserAvatarEmailFullName'),
  {
    ssr: true
  }
)

const RowActionsOptions = dynamic(() => import('@components/Table/columns_components/RowActionsOptions'), {
  ssr: true
})

export type ListAdminItem = ListAdminQuery['listAdmin']['docs'][0]
type CellItemType = CellType<ListAdminItem>

export const AdminColumns = ({ handleAction }: ColumnExtraProps<ListAdminItem>): GridColDef[] => [
  {
    flex: 0.25,
    minWidth: 280,
    field: 'fullName',
    sortable: false,
    filterable: false,
    hideable: false,
    headerName: 'Name',
    renderCell: ({ row }: CellItemType) => <RenderUserAvatarEmailFullName row={row} />
  },
  {
    flex: 0.4,
    field: 'permissions',
    minWidth: 170,
    disableExport: true,
    headerName: 'Permissions',
    sortable: false,
    filterable: false,
    renderCell: ({ row }: CellItemType) => <RenderPermissionRowFormated row={row} />
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

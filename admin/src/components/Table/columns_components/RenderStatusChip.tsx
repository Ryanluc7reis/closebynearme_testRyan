import CustomChip from 'src/@core/components/mui/chip'
import { CellType, ColumnDefaultData, ColumnUserStatusType } from './interfaces'

const userStatusObj: ColumnUserStatusType = {
  ACTIVE: {
    name: 'Active',
    color: 'success'
  },
  INACTIVE: {
    name: 'Inactive',
    color: 'secondary'
  }
}

export default function RenderStatusChip<V extends ColumnDefaultData>({ row }: CellType<V>) {
  return (
    <CustomChip
      rounded
      skin='light'
      size='small'
      label={userStatusObj[row.status].name}
      color={userStatusObj[row.status].color}
      sx={{ textTransform: 'capitalize' }}
    />
  )
}

import CustomChip from 'src/@core/components/mui/chip'
import { permissionsOptions } from 'src/configs/options'
import { CellType, ColumnDefaultData } from './interfaces'

function formatColummnPermission(data: any[]): string[] {
  const _data: string[] = []

  data.forEach((item) => {
    const f_item = permissionsOptions.find((_item) => _item.value === item)
    if (f_item) _data.push(f_item.label)
  })

  return _data
}

export default function RenderPermissionRowFormated<V extends ColumnDefaultData>({ row }: CellType<V>) {
  return formatColummnPermission(row?.permissions || []).map((item) => (
    <CustomChip key={`${row._id}_${item}`} label={item} sx={{ m: 0.75 }} skin='light' color='primary' />
  ))
}

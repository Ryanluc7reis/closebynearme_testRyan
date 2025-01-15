import CustomChip from 'src/@core/components/mui/chip'
import { CellType, ColumnDefaultData } from './interfaces'

export default function RenderChipsWithLabel<V extends ColumnDefaultData>({
  row,
  labels
}: CellType<V> & {
  labels: string[]
}) {
  return labels.map((item) => (
    <CustomChip key={`${row._id}_${item}`} label={item} sx={{ m: 0.75 }} skin='light' color='primary' />
  ))
}

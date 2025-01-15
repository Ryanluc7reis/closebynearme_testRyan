import CustomChip from 'src/@core/components/mui/chip'

export default function RenderChip({ label }: { label: string }) {
  return (
    <CustomChip rounded skin='light' size='small' label={label} color='primary' sx={{ textTransform: 'capitalize' }} />
  )
}

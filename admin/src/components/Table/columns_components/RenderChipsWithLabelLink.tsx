import Link from 'next/link'
import CustomChip from 'src/@core/components/mui/chip'

export default function RenderChipsWithLabelLink({ href, name }: { name: string; href: string }) {
  return (
    <Link rel='noopener noreferrer' target='_blank' href={href}>
      <CustomChip label={name} sx={{ m: 0.75 }} skin='light' color='primary' />
    </Link>
  )
}

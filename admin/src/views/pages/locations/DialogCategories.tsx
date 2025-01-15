import { ListLocationsPaginatedQuery } from '@graphql'
import Link from 'next/link'
import CustomChip from 'src/@core/components/mui/chip'

// ** React Imports
import { Ref, forwardRef, ReactElement } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Fade, { FadeProps } from '@mui/material/Fade'
import DialogContent from '@mui/material/DialogContent'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import Icon from 'src/@core/components/icon'

export type ListLocationsItem = ListLocationsPaginatedQuery['listLocationsPaginated']['docs'][0]

interface Props {
  data: ListLocationsItem
  show: boolean
  setShow: (status: boolean) => void
}

const CustomCloseButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  top: 0,
  right: 0,
  color: 'grey.500',
  position: 'absolute',
  boxShadow: theme.shadows[2],
  transform: 'translate(10px, -10px)',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: `${theme.palette.background.paper} !important`,
  transition: 'transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out',
  '&:hover': {
    transform: 'translate(7px, -5px)'
  }
}))

const Transition = forwardRef(function Transition(
  props: FadeProps & { children?: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Fade ref={ref} {...props} />
})

function DialogCategories({ data, show, setShow }: Props) {
  return (
    <Dialog
      fullWidth
      open={show}
      maxWidth='md'
      scroll='body'
      onClose={() => setShow(false)}
      TransitionComponent={Transition}
      sx={{ '& .MuiDialog-paper': { overflow: 'visible' } }}
    >
      <DialogContent
        sx={{
          px: (theme) => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
          py: (theme) => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
        }}
      >
        <CustomCloseButton onClick={() => setShow(false)}>
          <Icon icon='tabler:x' fontSize='1.25rem' />
        </CustomCloseButton>
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Typography variant='h3' sx={{ mb: 3 }}>
            {data.categories.length === 1 ? 'Category' : 'Categories'} in {data.name}
          </Typography>
        </Box>

        <Typography variant='h4'>{`${data.categories.length} Categories`}</Typography>
        <Box mt={10}>
          {data.categories.map((item, idx) => (
            <Link
              key={`${data._id}_${item.slug}_${idx}`}
              href={`${process.env.NEXT_PUBLIC_WEB}/city/${data.slug}/${item.slug}`}
              rel='noopener noreferrer'
              target='_blank'
            >
              <CustomChip label={item.name} sx={{ m: 0.75 }} skin='light' color='primary' />
            </Link>
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default DialogCategories

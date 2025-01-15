import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import RenderClientAvatar from './RenderClientAvatar'
import { CellType, ColumnDefaultData } from './interfaces'

export default function RenderUserAvatarEmailFullName<V extends ColumnDefaultData>({ row }: CellType<V>) {
  const { fullName, email } = row

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <RenderClientAvatar row={row} />
      <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
        <Typography
          noWrap
          sx={{
            fontWeight: 500,
            textDecoration: 'none',
            color: 'text.secondary',
            '&:hover': { color: 'primary.main' }
          }}
        >
          {fullName}
        </Typography>
        <Typography noWrap variant='body2' sx={{ color: 'text.disabled' }}>
          {email}
        </Typography>
      </Box>
    </Box>
  )
}

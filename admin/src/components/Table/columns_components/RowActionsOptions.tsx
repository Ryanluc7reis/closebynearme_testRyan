'use client'

import { useState, MouseEvent } from 'react'
import { TableColumnsOptionsAction } from 'src/interfaces'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import Icon from 'src/@core/components/icon'
import { Status } from '@graphql'

import Link from 'next/link'
import { CellType, ColumnDefaultData, ColumnExtraProps } from './interfaces'

export default function RowActionsOptions<V extends ColumnDefaultData>({
  handleAction,
  row,
  viewPath = '',
  showView,
  extraOptions = []
}: ColumnExtraProps<V> & CellType<V>) {
  // ** State
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const rowOptionsOpen = Boolean(anchorEl)

  const handleRowOptionsClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleRowUpdate = () => {
    handleRowOptionsClose()
    handleAction(TableColumnsOptionsAction.UPDATE, row)
  }
  const handleRowOptionsClose = () => {
    setAnchorEl(null)
  }

  const handleToggleInactive = () => {
    handleRowOptionsClose()
    handleAction(TableColumnsOptionsAction.TOGGLE_STATUS, row)
  }

  const handleRemove = () => {
    handleRowOptionsClose()
    handleAction(TableColumnsOptionsAction.REMOVE, row)
  }

  return (
    <>
      <IconButton size='small' onClick={handleRowOptionsClick}>
        <Icon icon='tabler:dots-vertical' />
      </IconButton>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={rowOptionsOpen}
        onClose={handleRowOptionsClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        slotProps={{
          paper: {
            style: { minWidth: '8rem' }
          }
        }}
      >
        {showView && (
          <MenuItem
            component={Link}
            sx={{ '& svg': { mr: 2 } }}
            href={viewPath}
            target='_blank'
            referrerPolicy='no-referrer'
            onClick={handleRowOptionsClose}
          >
            <Icon icon='tabler:eye' fontSize={20} />
            View
          </MenuItem>
        )}
        {extraOptions.map((item) => (
          <MenuItem
            key={item._id}
            component={Link}
            sx={{ '& svg': { mr: 2 } }}
            disabled={item.disabled}
            href={item.href}
            onClick={handleRowOptionsClose}
          >
            <Icon icon={item.icon} fontSize={item.iconSize} />
            {item.label}
          </MenuItem>
        ))}
        <MenuItem onClick={handleRowUpdate} sx={{ '& svg': { mr: 2 } }}>
          <Icon icon='tabler:edit' fontSize={20} />
          Edit
        </MenuItem>
        <MenuItem onClick={handleToggleInactive} sx={{ '& svg': { mr: 2 } }}>
          <Icon icon={`${row.status === Status.Active ? 'tabler:eye-off' : 'tabler:eye'}`} fontSize={20} />
          {row.status === Status.Active ? 'Inactivate' : 'Activate'}
        </MenuItem>
        <MenuItem onClick={handleRemove} sx={{ '& svg': { mr: 2 } }}>
          <Icon icon='tabler:trash' fontSize={20} />
          Delete
        </MenuItem>
      </Menu>
    </>
  )
}

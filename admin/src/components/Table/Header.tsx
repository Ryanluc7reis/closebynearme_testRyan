import React from 'react'
import { Control, FieldValues } from 'react-hook-form'
import { IHeaderOptions } from './interfaces'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Icon } from '@iconify/react'
import TextInput from '../Inputs/TextInput'

interface Props<V extends FieldValues> {
  headerOptions?: IHeaderOptions
  control: Control<V>
}

function CustomHeader<V extends FieldValues>({ headerOptions, control }: Props<V>) {
  return (
    <Box
      sx={{
        py: 4,
        px: 6,
        rowGap: 2,
        columnGap: 4,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <div />
      <Box sx={{ rowGap: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        {!headerOptions?.hideSearch && (
          <TextInput id='text-search-table' control={control} name='q' placeholder='Search...' />
        )}
        {headerOptions && headerOptions.name && (
          <Button onClick={headerOptions.handle} variant='contained' sx={{ '& svg': { mr: 2 } }}>
            {headerOptions.icon && <Icon fontSize='1.125rem' icon={headerOptions.icon} />}
            {headerOptions.name}
          </Button>
        )}
      </Box>
    </Box>
  )
}

export default CustomHeader

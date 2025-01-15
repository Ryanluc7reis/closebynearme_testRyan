import { Button, FormLabel } from '@mui/material'
import React, { useState } from 'react'
import { Control, FieldValues } from 'react-hook-form'
import AmeSidebar from './Attributes/sidebar'

interface Props<V extends FieldValues> {
  control: Control<V>
}

function AmenitiesComponent<V extends FieldValues>({ control }: Props<V>) {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(!open)
  }

  return (
    <>
      <FormLabel required>Add Attributes</FormLabel>
      <Button color='primary' variant='contained' fullWidth onClick={handleClose}>
        Add Essential Information
      </Button>
      <AmeSidebar control={control} open={open} name='amenities' handleClose={handleClose} />
    </>
  )
}

export default AmenitiesComponent

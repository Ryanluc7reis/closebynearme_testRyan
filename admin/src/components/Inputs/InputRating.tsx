import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
import React from 'react'
import { Control, FieldValues, Path, useController } from 'react-hook-form'

interface Props<V extends FieldValues> {
  control: Control<V>
  name: Path<V> | any
  mb?: number
  label?: string
}

function InputRating<V extends FieldValues>({ control, name, mb = 4, label }: Props<V>) {
  const { field } = useController({
    control,
    name
  })

  return (
    <Box>
      <Typography sx={{ fontWeight: 500 }}>{label}</Typography>

      <Rating
        size='large'
        sx={{ mb }}
        value={field.value}
        name={name}
        onChange={(event, newValue) => field.onChange(newValue)}
      />
    </Box>
  )
}

export default InputRating

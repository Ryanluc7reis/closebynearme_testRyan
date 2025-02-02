import React, { useState } from 'react'
import { Control, FieldValues, Path, useController } from 'react-hook-form'
import { IconButton, InputAdornment } from '@mui/material'
import Icon from '@core/components/icon'
import CustomTextField from '@core/components/mui/text-field'

interface Props<V extends FieldValues> {
  control: Control<V>
  name: Path<V> | any
  fullWidth?: boolean
  autoFocus?: boolean
  placeholder?: string
  required?: boolean
  mb?: number
  autoComplete?: string
  label?: string
  id?: string
}

function TextInputPassword<V extends FieldValues>({
  control,
  autoFocus,
  fullWidth,
  name,
  placeholder = '',
  required,
  mb = 0,
  autoComplete = '',
  label,
  id = ''
}: Props<V>) {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const {
    field,
    fieldState: { error }
  } = useController({ control, name })

  return (
    <CustomTextField
      {...field}
      InputLabelProps={{
        htmlFor: id
      }}
      inputProps={{
        id
      }}
      fullWidth={fullWidth}
      autoFocus={autoFocus}
      sx={{ mr: 4, mb }}
      placeholder={placeholder}
      label={label}
      required={required}
      autoComplete={autoComplete}
      error={!!error}
      {...(error?.message && { helperText: error.message })}
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <IconButton
              edge='end'
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setShowPassword(!showPassword)}
            >
              <Icon fontSize='1.25rem' icon={showPassword ? 'tabler:eye' : 'tabler:eye-off'} />
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  )
}

export default TextInputPassword

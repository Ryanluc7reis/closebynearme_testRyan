import React from 'react'
import { Control, FieldValues, Path, useController } from 'react-hook-form'
import CustomTextField from '@core/components/mui/text-field'

interface Props<V extends FieldValues> {
  control: Control<V>
  name: Path<V> | any
  fullWidth?: boolean
  autoFocus?: boolean
  placeholder?: string
  required?: boolean
  mb?: number
  type?: React.InputHTMLAttributes<unknown>['type']
  label?: string
  autoComplete?: string
  multiline?: boolean
  rows?: number
  minRows?: number
  maxRows?: number
  id?: string
}

function TextInput<V extends FieldValues>({
  control,
  autoFocus,
  fullWidth,
  name,
  placeholder = '',
  required,
  mb = 0,
  type = 'text',
  label,
  autoComplete = 'no',
  multiline = false,
  rows = 0,
  minRows = 0,
  maxRows = 0,
  id = ''
}: Props<V>) {
  const {
    field,
    fieldState: { error }
  } = useController({ control, name, shouldUnregister: true })

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
      multiline={multiline}
      rows={rows}
      minRows={minRows}
      maxRows={maxRows}
      label={label}
      required={required}
      autoComplete={autoComplete}
      type={type}
      placeholder={placeholder}
      error={!!error}
      {...(error?.message && { helperText: error.message })}
    />
  )
}

export default TextInput

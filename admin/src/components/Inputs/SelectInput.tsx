import React from 'react'
import MenuItem from '@mui/material/MenuItem'
import { Control, FieldValues, Path, useController } from 'react-hook-form'
import { IOption } from '../../configs/options'
import CustomTextField from '../../@core/components/mui/text-field'

interface Props<V extends FieldValues> {
  control: Control<V>
  name: Path<V> | any
  options: IOption[]
  required?: boolean
  loading: boolean
  disabled?: boolean
  setValue?: (value: any) => void
  mb?: number
  label?: string
  id?: string
}

function SelectInput<V extends FieldValues>({
  name,
  control,
  options,
  loading,
  mb = 0,
  label,
  required,
  setValue,
  disabled = false,
  id = ''
}: Props<V>) {
  const {
    field,
    fieldState: { error }
  } = useController({
    control,
    name
  })

  return (
    <CustomTextField
      select
      InputLabelProps={{
        htmlFor: id
      }}
      inputProps={{
        id
      }}
      fullWidth
      required={required}
      label={label}
      sx={{ mb }}
      defaultValue=''
      SelectProps={{
        value: field.value,
        disabled,
        name,
        displayEmpty: true,
        onChange: (e) => {
          if (setValue) {
            const selectedId = e.target.value

            const currentSelected = options.find((item) => item.value === selectedId)
            if (currentSelected) {
              setValue(currentSelected.label)
            }
          }
          field.onChange(e)
        },
        onBlur: field.onBlur
      }}
      disabled={loading}
      error={!!error}
      {...(error?.message && { helperText: error.message })}
    >
      {options.map((item, idx) => (
        <MenuItem key={Date.now() + idx} value={item.value} disabled={!!item.disabled}>
          {item.label}{' '}
        </MenuItem>
      ))}
    </CustomTextField>
  )
}

export default SelectInput

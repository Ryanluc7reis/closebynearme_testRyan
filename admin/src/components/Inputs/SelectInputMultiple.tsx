import React from 'react'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import MenuItem from '@mui/material/MenuItem'
import { Control, FieldValues, Path, useController } from 'react-hook-form'
import { IOption } from '../../configs/options'
import CustomChip from 'src/@core/components/mui/chip'
import CustomTextField from '../../@core/components/mui/text-field'

interface Props<V extends FieldValues> {
  control: Control<V>
  name: Path<V> | any
  options: IOption[]
  required?: boolean
  loading: boolean
  setValue?: (value: any) => void
  mb?: number
  label?: string
  id?: string
}

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      width: 250,
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
    }
  }
}

function SelectInputMultiple<V extends FieldValues>({
  name,
  control,
  options,
  loading,
  mb = 0,
  label,
  required,
  setValue,
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
      required={required}
      fullWidth
      label={label}
      sx={{ mb }}
      error={!!error}
      {...(error?.message && { helperText: error.message })}
      SelectProps={{
        MenuProps,
        multiple: true,
        name,
        value: field.value,
        displayEmpty: true,
        onChange: (e) => {
          field.onChange(e)
          if (setValue) {
            const values = e.target.value as any[]

            const currentSelected = options.filter((item) => values.indexOf(item.value) > -1).map((item) => item.label)

            setValue(currentSelected)
          }
        },
        renderValue: (selected) => {
          const _options = selected as unknown as string[]

          return (
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              {options
                .filter((item) => _options?.indexOf(item.value) > -1)
                .map((item) => (
                  <CustomChip key={item.value} label={item.label} sx={{ m: 0.75 }} skin='light' color='primary' />
                ))}
            </Box>
          )
        }
      }}
      disabled={loading}
    >
      {options.map((item, idx) => (
        <MenuItem key={Date.now() + idx} value={item.value} aria-label={item.label} disabled={!!item.disabled}>
          <Checkbox checked={field?.value?.indexOf(item.value) > -1} />
          {item.label}
        </MenuItem>
      ))}
    </CustomTextField>
  )
}

export default SelectInputMultiple

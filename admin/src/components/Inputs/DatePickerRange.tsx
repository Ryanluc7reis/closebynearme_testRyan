import CustomTextField from '@core/components/mui/text-field'
import { format } from 'date-fns'
import React, { forwardRef } from 'react'
import { Control, FieldValues, Path, useController } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

interface Props<V extends FieldValues> {
  control: Control<V>
  startName: Path<V> | any
  endName: Path<V> | any
  mb: number
  required?: boolean
  label?: string
}

interface PickerProps {
  label?: string
  end: Date | number
  start: Date | number
}

function DatePickerRange<V extends FieldValues>({ control, endName, startName, mb, label, required }: Props<V>) {
  const {
    field: fieldStart,
    fieldState: { error }
  } = useController({
    control,
    name: startName
  })

  const {
    field: fieldEnd

    // fieldState: { error: EndError }
  } = useController({
    control,
    name: endName
  })

  const CustomInput = forwardRef((props: PickerProps, ref) => {
    const startDate = format(props.start, 'MM/dd/yyyy')
    const endDate = props.end !== null ? ` - ${format(props.end, 'MM/dd/yyyy')}` : null

    const value = `${startDate}${endDate !== null ? endDate : ''}`

    return (
      <CustomTextField
        inputRef={ref}
        label={props.label || ''}
        {...props}
        value={value}
        required={required}
        fullWidth
        sx={{ mr: 4, mb }}
        error={!!error}
        {...(error?.message && { helperText: error.message })}
      />
    )
  })

  return (
    <DatePickerWrapper>
      <DatePicker
        selectsRange
        endDate={fieldEnd.value}
        selected={fieldStart.value}
        startDate={fieldStart.value}
        id='date-range-picker'
        onChange={(dates) => {
          const [start, end] = dates
          fieldStart.onChange(start)
          fieldEnd.onChange(end)
        }}
        shouldCloseOnSelect={false}
        popperPlacement='bottom-start'
        customInput={
          <CustomInput label={label} start={fieldStart.value as Date | number} end={fieldEnd.value as Date | number} />
        }
      />
    </DatePickerWrapper>
  )
}

export default DatePickerRange

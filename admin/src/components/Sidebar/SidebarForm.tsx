import React from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { Control, FieldValues } from 'react-hook-form'

import TextInput from 'src/components/Inputs/TextInput'
import TextInputPassword from 'src/components/Inputs/TextInputPassword'
import CustomSidebar from '@components/Sidebar'
import { SideFormValue, SideFormValues } from './interfaces'
import SelectInputMultiple from '@components/Inputs/SelectInputMultiple'
import SelectInput from '@components/Inputs/SelectInput'

// import DatePickerRange from '@components/Inputs/DatePickerRange'
import FileUploaderSingleAws from '@components/Dropzone/FileUploaderSingleAws'
import InputRating from '@components/Inputs/InputRating'

import TextEditor from '@components/Inputs/TextEditor'

interface Props<V extends FieldValues> {
  open: boolean
  handleClose: () => void
  values: SideFormValues<V>[]
  control: Control<V>
  title: string
  editMode?: boolean
  loading: boolean
  handleSubmit: (data: any) => void
  extraComponents?: React.ReactNode
}

function SidebarForm<V extends FieldValues>(props: Props<V>) {
  const { open, handleClose, editMode = false, loading, handleSubmit, control, values, title, extraComponents } = props

  const RenderSwitch = (item: SideFormValue<V>) => {
    const mb = item.mb || 4

    switch (item.inputType) {
      case 'datepickerrange':
        return null

      // <DatePickerRange
      //   label={item.label}
      //   control={control}
      //   required={item.required}
      //   startName='startDate'
      //   endName='endDate'
      //   mb={4}
      // />

      case 'textEditor':
        return <TextEditor control={control} name={item.name} />
      case 'textInput':
        return (
          <TextInput
            id={item.id}
            control={control}
            name={item.name}
            type={item.type}
            required={item.required}
            autoFocus={item.autoFocus}
            multiline={item.multiline}
            fullWidth={item.fullWidth}
            rows={item.rows}
            maxRows={item.maxRows}
            minRows={item.minRows}
            label={item.label}
            placeholder={item.placeholder}
            mb={mb}
          />
        )

      case 'image-upload':
        return (
          <FileUploaderSingleAws
            path={item.image_upload_path || 'default'}
            mb={mb}
            control={control}
            subFix={item.image_upload_subFix || 'default'}
            name={item.name}
            fileType={{
              'image/*': ['.png', '.jpg', '.jpeg', '.gif']
            }}
          />
        )

      case 'ranking':
        return <InputRating control={control} name={item.name} mb={item.mb} label={item.label} />

      case 'selectInput':
        return (
          <SelectInput
            id={item.id}
            control={control}
            mb={mb}
            loading={!item.options || loading}
            required={item.required}
            label={item.label}
            name={item.name}
            setValue={item.setValue}
            options={item.options || []}
          />
        )
      case 'selectMultipleInput':
        return (
          <SelectInputMultiple
            id={item.id}
            control={control}
            mb={mb}
            loading={!item.options || loading}
            required={item.required}
            setValue={item.setValue}
            label={item.label}
            name={item.name}
            options={item.options || []}
          />
        )
      case 'passwordInput':
        return (
          <TextInputPassword
            id={item.id}
            control={control}
            required={item.required}
            name={item.name}
            label={item.label}
            placeholder={item.placeholder}
            mb={mb}
            autoFocus={item.autoFocus}
            fullWidth={item.fullWidth}
            autoComplete={item.autoComplete}
          />
        )
    }
  }

  return (
    <CustomSidebar open={open} handleClose={handleClose} title={title}>
      <form autoComplete='off' onSubmit={handleSubmit}>
        {values.map((_item) => (
          <Box key={_item.id} sx={{ display: 'flex', alignItems: 'center' }}>
            {_item.values.map((item) => (
              <RenderSwitch key={item.id} {...item} />
            ))}
          </Box>
        ))}

        {extraComponents ?? <Box sx={{ display: 'flex', alignItems: 'center' }}>{extraComponents}</Box>}
        <Box sx={{ display: 'flex', alignItems: 'center', mt: extraComponents ? 4 : 0 }}>
          <Button type='submit' variant='contained' sx={{ mr: 3 }} disabled={loading}>
            {loading ? 'Loading' : editMode ? 'Save' : 'Create'}
          </Button>
          <Button variant='tonal' color='secondary' onClick={handleClose}>
            Cancel
          </Button>
        </Box>
      </form>
    </CustomSidebar>
  )
}

export default SidebarForm

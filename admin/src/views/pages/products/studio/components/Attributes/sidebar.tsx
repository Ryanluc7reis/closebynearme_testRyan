import CustomSidebar from '@components/Sidebar'
import { Divider } from '@mui/material'
import AmeForm, { CreateAmenitiesProps, EditAmenitiesProps } from './form'
import AmeList from './list'
import { Control, FieldValues, useController } from 'react-hook-form'
import { useState } from 'react'
import { CreateAmenitiesFormDefaultValues } from './amenities.schema'
import AmeSearch from './search'

interface SidebarProps<V extends FieldValues> {
  open: boolean
  handleClose: () => void
  control: Control<V>
  name: any
}

function AmeSidebar<V extends FieldValues>({ open, handleClose, control, name }: SidebarProps<V>) {
  const { field } = useController({ control, name })
  const [defaultValues] = useState<CreateAmenitiesProps | EditAmenitiesProps>({
    editMode: false,
    defaultValues: CreateAmenitiesFormDefaultValues
  })

  const setAmenities = (action: string, amend: string) => {
    if (action === 'add') {
      const unique = [...new Set([...field.value, amend])]

      field.onChange(unique)
    } else if (action === 'remove') {
      const unique = [...new Set([...field.value, amend].filter((item) => item !== amend))]

      field.onChange(unique)
    }
  }

  return (
    <CustomSidebar title='Attributes' open={open} handleClose={handleClose}>
      <AmeSearch setAmenities={setAmenities} />
      <Divider sx={{ my: 5 }} />
      <AmeForm data={defaultValues} setAmenities={setAmenities} />
      <Divider sx={{ my: 5 }} />
      <AmeList control={control} setAmenities={setAmenities} />
    </CustomSidebar>
  )
}
export default AmeSidebar

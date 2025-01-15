import Divider from '@mui/material/Divider'
import React from 'react'
import { Control, FieldValues } from 'react-hook-form'
import ProductStudioHeader from './Header'
import ProductStudioBodyContent from './Content'
import InfoText from './InfoText'

interface Props<V extends FieldValues> {
  control: Control<V>
  editMode: boolean
  setValue: (name: any, value: any) => void
  setDeleteImages: (images: string[]) => void
}

function ProductStudioComponent<V extends FieldValues>(props: Props<V>) {
  return (
    <>
      <ProductStudioHeader {...props} />
      <Divider />
      <ProductStudioBodyContent {...props} />
      <Divider />
      <InfoText {...props} />
    </>
  )
}

export default ProductStudioComponent

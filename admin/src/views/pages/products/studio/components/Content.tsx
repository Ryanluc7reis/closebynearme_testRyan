import { Alert, CardContent, FormLabel, Grid } from '@mui/material'
import React from 'react'
import { Control, FieldValues } from 'react-hook-form'
import FileUploaderMultipleAws from '@components/Dropzone/FileUploaderMultipleAWS'
import ProductStudioImagesComponent from './Images'
import TextInput from '@components/Inputs/TextInput'

interface Props<V extends FieldValues> {
  control: Control<V>
  setValue: (name: any, value: any) => void
  setDeleteImages: (images: string[]) => void
}

function ProductStudioBodyContent<V extends FieldValues>({ control, setDeleteImages }: Props<V>) {
  return (
    <CardContent>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormLabel required>Images</FormLabel>
          <ProductStudioImagesComponent control={control} name='images' setDeleteImages={setDeleteImages} />
        </Grid>
        <Grid item xs={12} md={12} lg={8} xl={8}>
          <TextInput
            control={control}
            name='description'
            id='text-description-input-01'
            label='Description'
            multiline
            required
            rows={13}
            fullWidth
          />
          <Alert severity='info' sx={{ mt: 5 }}>
            Only plain text format available
          </Alert>
        </Grid>
        <Grid item xs={12} md={12} lg={4} xl={4}>
          <FormLabel required>Images Upload</FormLabel>
          <FileUploaderMultipleAws
            name='images'
            control={control}
            subFix='product_image'
            path='products/images'
            fileType={{
              'image/*': ['.png', '.webp', '.jpg', '.jpeg']
            }}
          />
        </Grid>
      </Grid>
    </CardContent>
  )
}

export default ProductStudioBodyContent

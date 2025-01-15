import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import {
  CreateProductDefaultValues,
  CreateProductSchema,
  UpdateProductDefaultValues,
  UpdateProductSchema
} from './schema'
import ProductStudioComponent from './components'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { handleToastPromise } from 'src/configs/handleToast'
import { CreateProductDocument, CreateProductInput, UpdateProductDocument, UpdateProductInput } from '@graphql'
import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client'
import { handleDeleteObjects } from '@core/utils/s3'

export interface EditProductProps {
  editMode: true
  companyId: string
  productId: string
  defaultValues: UpdateProductDefaultValues
}

export interface CreateProductProps {
  editMode: false
  companyId: string
  productId: null
  defaultValues: CreateProductDefaultValues
}

interface Props {
  data: CreateProductProps | EditProductProps
}

function ProductStudio({ data: { defaultValues, editMode, companyId } }: Props) {
  const router = useRouter()
  const [handle] = useMutation(editMode ? UpdateProductDocument : CreateProductDocument)
  const [deleteImages, setDeleteImages] = useState<string[]>([])
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: editMode ? defaultValues.data : defaultValues,
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(editMode ? UpdateProductSchema : CreateProductSchema)
  })

  const onSubmit = async (data: any) => {
    const sendData = {
      ...data
    } satisfies CreateProductInput

    let variables = {
      input: sendData
    } as any

    if (editMode) {
      const updateData = {
        _id: defaultValues._id,
        data: sendData
      } satisfies UpdateProductInput
      variables = {
        input: updateData
      } as any
    }

    await handleToastPromise({
      prev: deleteImages.length > 0 ? () => handleDeleteObjects(deleteImages) : undefined,
      cb: () => {
        router.push(`/companies/view/${companyId}/`)
      },
      editMode,
      handle,
      variables
    })
  }

  return (
    <Grid container spacing={6.5}>
      <Grid item xs={12}>
        <Card>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ProductStudioComponent
              control={control}
              editMode={editMode}
              setValue={setValue}
              setDeleteImages={(images: string[]) => setDeleteImages([...deleteImages, ...images])}
            />
          </form>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ProductStudio

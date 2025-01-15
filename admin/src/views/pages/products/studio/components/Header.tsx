import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import React from 'react'
import { Control, FieldValues } from 'react-hook-form'
import TextInput from '@components/Inputs/TextInput'
import SelectInput from '@components/Inputs/SelectInput'
import { useFilters } from 'src/hooks/useFilters'
import { Alert } from '@mui/material'
import AmenitiesComponent from './AmenitiesSidebar'

interface Props<V extends FieldValues> {
  control: Control<V>
  editMode: boolean
  setValue: (name: any, value: any) => void
}

function ProductStudioHeader<V extends FieldValues>({ control, editMode, setValue }: Props<V>) {
  const { filterOptions, loadingOptions, defaultOptions } = useFilters()

  return (
    <>
      <CardHeader
        title='Product info'
        action={
          <Button type='submit' variant='contained' sx={{ mr: 3 }} disabled={loadingOptions}>
            {editMode ? 'Save' : 'Create'}
          </Button>
        }
      />

      <CardContent>
        <Grid container gap={2} spacing={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={4} md={8} sm={8}>
              <TextInput control={control} name='name' id='text-name-input-01' mb={4} required label='Name' fullWidth />
            </Grid>
            <Grid item xs={12} lg={2} md={4} sm={4}>
              <SelectInput
                mb={4}
                control={control}
                loading={loadingOptions}
                name='priceType'
                id='select-price-type-input-01'
                options={defaultOptions['priceTypeOptions']}
                required
                label='Service Type'
              />
            </Grid>
            <Grid item xs={12} lg={3} md={6} sm={6}>
              <SelectInput
                mb={4}
                control={control}
                loading={loadingOptions}
                name='locationId'
                id='select-location-input-01'
                disabled
                setValue={(value) => setValue('locationName', value)}
                options={filterOptions['locationsOptions']}
                required
                label='Location'
              />
            </Grid>
            <Grid item xs={12} lg={3} md={6} sm={6}>
              <SelectInput
                mb={4}
                control={control}
                loading={loadingOptions}
                setValue={(value) => setValue('categoryName', value)}
                id='select-category-input-01'
                name='categoryId'
                disabled
                options={filterOptions['categoriesOptions']}
                required
                label='Category'
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} xl={12}>
            <Grid item xs={12} lg={4} md={4} sm={12}>
              <TextInput
                control={control}
                id='text-price-input-01'
                name='price'
                required
                placeholder='49.99'
                label='Rental Price USD'
                fullWidth
              />
              <Alert severity='info' sx={{ mt: 2 }}>
                Price in NUMBER example: 49.99
              </Alert>
            </Grid>

            <Grid item xs={12} lg={4} md={4} sm={12}>
              <TextInput
                control={control}
                id='text-full-price-input-01'
                name='full_price'
                required
                placeholder='49.99'
                label='Purchase Price USD'
                fullWidth
              />
              <Alert severity='info' sx={{ mt: 2 }}>
                Price in NUMBER example: 49.99
              </Alert>
            </Grid>
            <Grid item xs={12} lg={4} md={4} sm={12} display='flex' flexDirection='column'>
              <AmenitiesComponent control={control} />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </>
  )
}

export default ProductStudioHeader

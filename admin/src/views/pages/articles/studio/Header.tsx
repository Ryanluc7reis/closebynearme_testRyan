import SelectInput from '@components/Inputs/SelectInput'
import TextInput from '@components/Inputs/TextInput'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import React from 'react'
import { Control, FieldValues } from 'react-hook-form'
import { useFilters } from 'src/hooks/useFilters'

interface Props<V extends FieldValues> {
  control: Control<V>
  editMode: boolean
  setValue: (name: any, value: any) => void
}

function StudioHeaderComponent<V extends FieldValues>({ control, editMode, setValue }: Props<V>) {
  const { filterOptions, defaultOptions, loadingOptions } = useFilters()

  return (
    <>
      <CardHeader
        title='Article info'
        action={
          <Button type='submit' variant='contained' sx={{ mr: 3 }} disabled={loadingOptions}>
            {editMode ? 'Save' : 'Create'}
          </Button>
        }
      />

      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={4} md={8} sm={8}>
            <TextInput control={control} id='text-title-01' name='title' mb={4} required label='Title' fullWidth />
          </Grid>
          <Grid item xs={12} lg={2} md={4} sm={4}>
            <SelectInput
              mb={4}
              control={control}
              loading={loadingOptions}
              name='type'
              id='select-type-01'
              options={defaultOptions['articlesTypeOptions']}
              required
              label='Type'
            />
          </Grid>
          <Grid item xs={12} lg={3} md={6} sm={6}>
            <SelectInput
              mb={4}
              control={control}
              loading={loadingOptions}
              id='select-locationId-01'
              name='locationId'
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
              id='select-categoryId-01'
              name='categoryId'
              options={filterOptions['categoriesOptions']}
              required
              label='Category'
            />
          </Grid>
        </Grid>
      </CardContent>
    </>
  )
}

export default StudioHeaderComponent

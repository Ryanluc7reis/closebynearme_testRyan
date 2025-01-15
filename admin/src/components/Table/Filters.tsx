import { CardContent, CardHeader, Grid } from '@mui/material'
import React from 'react'
import { Control, FieldValues } from 'react-hook-form'
import { IFilterTypes } from './interfaces'
import SelectInput from '../Inputs/SelectInput'
import { useFilters } from 'src/hooks/useFilters'
import SelectInputMultiple from '@components/Inputs/SelectInputMultiple'

interface Props<V extends FieldValues> {
  control: Control<V>
  filterOptions: IFilterTypes
}

function Filters<V extends FieldValues>({ control, filterOptions }: Props<V>) {
  const { defaultOptions, loadingOptions } = useFilters()

  return (
    <>
      <CardHeader title='Search Filters' />

      <CardContent>
        <Grid container spacing={6}>
          {filterOptions.types.map((item) => {
            switch (item.type) {
              case 'select':
                return (
                  <Grid key={item.id} item sm={4} xs={12}>
                    <SelectInput
                      control={control}
                      required={false}
                      id={item.id}
                      name={item.name}
                      loading={loadingOptions}
                      options={item?.customOptions ? item.customOptions : defaultOptions[item.nameOptions]}
                    />
                  </Grid>
                )

              case 'multiselect':
                return (
                  <Grid key={item.id} item sm={4} xs={12}>
                    <SelectInputMultiple
                      control={control}
                      id={item.id}
                      required={false}
                      name={item.name}
                      loading={loadingOptions}
                      options={item?.customOptions ? item.customOptions : defaultOptions[item.nameOptions]}
                    />
                  </Grid>
                )
              default:
                return null
            }
          })}
        </Grid>
      </CardContent>
    </>
  )
}

export default Filters

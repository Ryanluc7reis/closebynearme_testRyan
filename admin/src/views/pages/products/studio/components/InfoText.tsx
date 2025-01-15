import TextInput from '@components/Inputs/TextInput'
import { CardContent, Grid } from '@mui/material'
import React from 'react'
import { Control, FieldValues } from 'react-hook-form'

interface Props<V extends FieldValues> {
  control: Control<V>
}

function InfoText<V extends FieldValues>({ control }: Props<V>) {
  return (
    <CardContent>
      <Grid container spacing={10}>
        <Grid item xs={4}>
          <TextInput
            name='spaceRequirements'
            label='Space requirements'
            id='text-spaceRequirements-input-01'
            fullWidth
            control={control}
            multiline
            rows={5}
          />
        </Grid>
        <Grid item xs={4}>
          <TextInput
            name='supervision'
            id='text-supervision-input-01'
            label='Supervision'
            fullWidth
            control={control}
            multiline
            rows={5}
          />
        </Grid>
        <Grid item xs={4}>
          <TextInput
            name='safety'
            id='text-safety-input-01'
            label='Safety'
            multiline
            fullWidth
            control={control}
            rows={5}
          />
        </Grid>
        <Grid item xs={4}>
          <TextInput
            name='insurancePlan'
            id='text-insurancePlan-input-01'
            label='Cancellation/Returns/Refunds'
            fullWidth
            control={control}
            multiline
            rows={5}
          />
        </Grid>
        <Grid item xs={4}>
          <TextInput
            name='notification'
            id='text-notification-input-01'
            label='Additional information'
            fullWidth
            control={control}
            multiline
            rows={5}
          />
        </Grid>
      </Grid>
    </CardContent>
  )
}

export default InfoText

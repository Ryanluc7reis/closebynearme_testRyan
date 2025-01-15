import { useMutation } from '@apollo/client'
import SelectInput from '@components/Inputs/SelectInput'
import TextInput from '@components/Inputs/TextInput'
import {
  FindOneCompanyQuery,
  MerchantPublishedStatus,
  UpdateCompanyDocument,
  UpdateCompanyMutationVariables
} from '@graphql'
import { Alert, Button, Card, CardContent, CardHeader, Grid } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { handleToastPromise } from 'src/configs/handleToast'
import { useFilters } from 'src/hooks/useFilters'

interface Props {
  data: FindOneCompanyQuery['findOneCompany']
}

interface Values {
  reviewsRating: string
  reviewsAmount: string
  merchantListingStatus: MerchantPublishedStatus
}

function SettingsComponent({ data }: Props) {
  const router = useRouter()
  const { loadingOptions, defaultOptions } = useFilters()
  const { handleSubmit, control } = useForm<Values>({
    defaultValues: {
      reviewsRating: data.reviewsRating.toString(),
      reviewsAmount: data.reviewsAmount.toString(),
      merchantListingStatus: data.merchantListingStatus
    }
  })
  const [handle, { loading }] = useMutation(UpdateCompanyDocument)

  const onSubmit = (_data: Values) => {
    const variables = {
      input: {
        _id: data._id,
        data: {
          reviewsAmount: parseInt(_data.reviewsAmount),
          reviewsRating: parseFloat(_data.reviewsRating),
          merchantListingStatus: _data.merchantListingStatus,
          name: data.name
        }
      }
    } satisfies UpdateCompanyMutationVariables

    handleToastPromise({
      handle,
      cb: () => {
        router.reload()
      },
      variables,
      editMode: true
    })
  }

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardHeader
          title={`${data.name}`}
          action={
            <Button type='submit' variant='contained' sx={{ mr: 3 }} disabled={loading}>
              Save
            </Button>
          }
        />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <TextInput control={control} name='reviewsRating' fullWidth label='Reviews Rating' required={true} />
              <Alert severity='info' sx={{ mt: 5 }}>
                Example: 5
              </Alert>
            </Grid>
            <Grid item xs={2}>
              <TextInput control={control} name='reviewsAmount' fullWidth label='Reviews Amount' required={true} />
              <Alert severity='info' sx={{ mt: 5 }}>
                Example: 49
              </Alert>
            </Grid>
            <Grid item xs={4}>
              <SelectInput
                control={control}
                name='merchantListingStatus'
                loading={loadingOptions}
                label='Merchant status'
                required
                options={defaultOptions['merchantListingStatus']}
              />
              <Alert severity='info' sx={{ mt: 5 }}>
                Only Published status will be included on feed
              </Alert>
            </Grid>
          </Grid>
        </CardContent>
      </form>
    </Card>
  )
}

export default SettingsComponent

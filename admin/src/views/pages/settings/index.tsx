import { useMutation } from '@apollo/client'
import TextInput from '@components/Inputs/TextInput'
import { GetSetttingsQuery, UpdateSettingsDocument, UpdateSettingsMutationVariables } from '@graphql'
import { Alert, Button, Card, CardContent, CardHeader, Grid } from '@mui/material'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { handleToastPromise } from 'src/configs/handleToast'

interface Props {
  data: GetSetttingsQuery['getSettings']
}

interface Values {
  serviceFee: string
}

const patternTwoDigisAfterComma = /^[0-9]*(\.[0-9]{0,2})?$/

function SettingsView({ data }: Props) {
  const {
    control,
    handleSubmit,
    setError,
    watch,
    clearErrors,
    setValue,
    formState: { errors }
  } = useForm<Values>({
    defaultValues: {
      serviceFee: data.serviceFee.toString()
    },
    mode: 'onSubmit'
  })
  const [handle, { loading }] = useMutation(UpdateSettingsDocument)

  const onSubmit = async (data: Values) => {
    const serviceFee = parseFloat(parseFloat(data.serviceFee).toFixed(2))

    if (errors.serviceFee) {
      return
    } else if (isNaN(serviceFee)) {
      return
    }

    const variables = {
      input: {
        data: {
          serviceFee
        }
      }
    } satisfies UpdateSettingsMutationVariables

    await handleToastPromise({
      cb: () => {
        setValue('serviceFee', serviceFee.toString())
      },
      handle,
      editMode: true,
      variables
    })
  }

  useEffect(() => {
    const subscription = watch(({ serviceFee }) => {
      if (serviceFee) {
        const pass = patternTwoDigisAfterComma.test(serviceFee)
        if (!pass) {
          setError('serviceFee', {
            message: 'Bad number format'
          })
        } else {
          clearErrors('serviceFee')
        }
      }
    })

    return () => subscription.unsubscribe()
  }, [clearErrors, setError, watch, errors])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardHeader
          title='Global Settings'
          action={
            <Button disabled={loading} type='submit' variant='contained' color='primary'>
              Save
            </Button>
          }
        />

        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <TextInput
                control={control}
                name='serviceFee'
                fullWidth
                required
                mb={4}
                autoFocus
                label='Service Fee'
                placeholder='49.99'
                autoComplete='no'
              />
              <Alert color='info'>Price in NUMBER example: 49.99</Alert>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </form>
  )
}

export default SettingsView

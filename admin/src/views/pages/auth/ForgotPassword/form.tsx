import Link from 'next/link'
import Button from '@mui/material/Button'
import Icon from 'src/@core/components/icon'
import { useForm } from 'react-hook-form'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { yupResolver } from '@hookform/resolvers/yup'
import { ForgotPasswordSchema, ForgotPasswordValues } from '../schema'
import { RecoverPasswordAdminMutationVariables, useRecoverPasswordAdminMutation } from '@graphql'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import TextInput from '@components/Inputs/TextInput'
import { handleCatchError, onErrorFormat } from 'src/configs/errorResponse'

const LinkStyled = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  justifyContent: 'center',
  color: theme.palette.primary.main,
  fontSize: theme.typography.body1.fontSize
}))

const defaultValues = {
  email: ''
}

export const ForgotPasswordFormComponent = () => {
  const router = useRouter()
  const [handle] = useRecoverPasswordAdminMutation()
  const { control, handleSubmit } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(ForgotPasswordSchema)
  })

  const onSubmit = (values: ForgotPasswordValues) => {
    const variables = {
      input: {
        ...values
      }
    } satisfies RecoverPasswordAdminMutationVariables

    toast
      .promise(
        handle({
          variables,
          onError: onErrorFormat
        }),
        {
          loading: 'Loading...',
          success: <b>Reset link sended!</b>,
          error: <b>Something is wrong...</b>
        }
      )
      .then(() => {
        router.push('/auth/login')
      })
      .catch(handleCatchError)
  }

  return (
    <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        control={control}
        autoFocus
        fullWidth
        name='email'
        type='email'
        autoComplete='new-email-user'
        label='Email'
        placeholder='john@doe.com'
        required
        mb={4}
      />
      <Button fullWidth type='submit' variant='contained' sx={{ mb: 4 }}>
        Send reset link
      </Button>
      <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', '& svg': { mr: 1 } }}>
        <LinkStyled href='/auth/login'>
          <Icon fontSize='1.25rem' icon='tabler:chevron-left' />
          <span>Back to login</span>
        </LinkStyled>
      </Typography>
    </form>
  )
}

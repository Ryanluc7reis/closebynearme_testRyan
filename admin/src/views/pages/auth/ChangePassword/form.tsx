import { ChangePasswordAdminMutationVariables, useChangePasswordAdminMutation } from '@graphql'
import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { ChangePasswordSchema, ChangePasswordValues } from '../schema'
import TextInputPassword from '@components/Inputs/TextInputPassword'
import toast from 'react-hot-toast'
import { handleCatchError, onErrorFormat } from 'src/configs/errorResponse'
import { Button } from '@mui/material'
import { useRouter } from 'next/router'

const defaultValues = {
  password: '',
  confirmPassword: ''
}

interface ChangePasswordComponentProps {
  secureId: string
}

function ChangePasswordFormComponent({ secureId }: ChangePasswordComponentProps) {
  const router = useRouter()

  const { control, handleSubmit } = useForm({
    defaultValues,
    resolver: yupResolver(ChangePasswordSchema)
  })

  const [handle] = useChangePasswordAdminMutation()

  const onSubmit = (values: ChangePasswordValues) => {
    const variables = {
      input: {
        password: values.password,
        secureId
      }
    } satisfies ChangePasswordAdminMutationVariables
    toast
      .promise(handle({ variables, onError: onErrorFormat }), {
        error: 'Something is wrong!',
        loading: 'Loading..',
        success: 'Success!'
      })
      .then(() => {
        router.push('/auth/login')
      })
      .catch(handleCatchError)
  }

  return (
    <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
      <TextInputPassword
        name='password'
        control={control}
        autoComplete='new-password'
        fullWidth
        autoFocus
        label=''
        required
        mb={4}
        placeholder='********'
      />
      <TextInputPassword
        name='confirmPassword'
        control={control}
        autoComplete='new-merge-password'
        fullWidth
        autoFocus
        label=''
        required
        mb={4}
        placeholder='********'
      />

      <Button fullWidth type='submit' variant='contained' sx={{ mb: 4 }}>
        Set New Password
      </Button>
    </form>
  )
}

export default ChangePasswordFormComponent

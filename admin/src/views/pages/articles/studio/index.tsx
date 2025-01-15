import { Card, Divider, Grid } from '@mui/material'
import React from 'react'
import StudioHeaderComponent from './Header'
import StudioContentComponent from './Content'
import { useForm } from 'react-hook-form'
import { ArticleDefaultValues, ArticleSchema, ArticleUpdateDefaultValues, UpdateArticleSchema } from './schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import {
  ArticlesType,
  CreateArticleDocument,
  CreateArticleInput,
  UpdateArticleDocument,
  UpdateArticleInput
} from '@graphql'
import { handleCatchError, onErrorFormat } from 'src/configs/errorResponse'
import { useMutation } from '@apollo/client'

export interface EditProps {
  editMode: true
  articleId: string
  defaultValues: ArticleUpdateDefaultValues
}

interface CreateProps {
  editMode: false
  articleId: null
  defaultValues: ArticleDefaultValues
}

interface Props {
  data: CreateProps | EditProps
}

function ArticleStudioManager({ data: { defaultValues, editMode } }: Props) {
  const router = useRouter()
  const [handle] = useMutation(editMode ? UpdateArticleDocument : CreateArticleDocument)
  const { control, handleSubmit, setValue, watch, setError, clearErrors } = useForm({
    defaultValues: editMode ? defaultValues.data : defaultValues,
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(editMode ? UpdateArticleSchema : ArticleSchema)
  })

  const onSubmit = (data: any) => {
    const sendData = {
      ...data
    } satisfies CreateArticleInput

    if (data.type === ArticlesType.Guide) {
      if (!sendData.image) {
        setError('image', {
          message: 'Image is required'
        })

        return
      }
    } else {
      clearErrors('image')
    }

    let variables = {
      input: sendData
    } as any

    if (editMode) {
      const updateData = {
        _id: defaultValues._id,
        data: sendData
      } satisfies UpdateArticleInput
      variables = {
        input: updateData
      } as any
    }

    toast
      .promise(
        handle({
          variables,
          onError: onErrorFormat
        }),
        {
          loading: editMode ? 'Updating...' : 'Adding...',
          success: <b>{`${editMode ? 'Updated' : 'Added'} with success`}!</b>,
          error: <b>Can't not be {editMode ? 'updated' : 'added'}.</b>
        }
      )
      .then(() => {
        router.push('/articles/list')
      })
      .catch(handleCatchError)
  }

  return (
    <Grid container spacing={6.5}>
      <Grid item xs={12}>
        <Card>
          <form onSubmit={handleSubmit(onSubmit)}>
            <StudioHeaderComponent setValue={setValue} control={control} editMode={editMode} />
            <Divider />
            <StudioContentComponent control={control} type={watch('type')} name='description' />
          </form>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ArticleStudioManager

import { CardContent, Grid } from '@mui/material'
import React from 'react'
import { Control, FieldValues, Path, useController } from 'react-hook-form'
import { ArticlesType } from '@graphql'
import FileUploaderSingleAws from '@components/Dropzone/FileUploaderSingleAws'
import EditorComponent from '@components/Editor'
import { ContentState, convertFromHTML } from 'draft-js'

interface Props<V extends FieldValues> {
  control: Control<V>
  type: ArticlesType
  name: Path<V>
}

function StudioContentComponent<V extends FieldValues>({ control, type, name }: Props<V>) {
  const showUpload = type === ArticlesType.Guide
  const { field } = useController({ control, name })

  const handleParse = (): ContentState => {
    if (field.value) {
      const contentState = convertFromHTML(field.value)

      return ContentState.createFromBlockArray(contentState.contentBlocks, contentState.entityMap)
    } else {
      return ContentState.createFromText('')
    }
  }

  return (
    <CardContent>
      <Grid container spacing={2}>
        <Grid item xs={showUpload ? 8 : 12}>
          <EditorComponent onChange={field.onChange} contentState={handleParse()} />
        </Grid>
        {showUpload && (
          <Grid item xs={4}>
            <FileUploaderSingleAws
              name='image'
              control={control}
              subFix='article_image'
              path='locations/images'
              fileType={{
                'image/*': ['.png', '.jpg', '.jpeg', '.gif']
              }}
            />
          </Grid>
        )}
      </Grid>
    </CardContent>
  )
}

export default StudioContentComponent

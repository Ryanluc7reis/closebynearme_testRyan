import { Alert, IconButton, ImageList, ImageListItem, ImageListItemBar, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Control, FieldValues, useController } from 'react-hook-form'
import Icon from 'src/@core/components/icon'
import { Theme } from '@mui/material/styles'

interface Props<V extends FieldValues> {
  control: Control<V>
  name: any
  setDeleteImages: (images: string[]) => void
}

function ProductStudioImagesComponent<V extends FieldValues>({ control, name, setDeleteImages }: Props<V>) {
  const {
    field,
    fieldState: { error }
  } = useController({ control, name })

  const handleRemoveFile = (image: string) => {
    const currentImages = field.value
    const filtered = currentImages.filter((item: string) => item !== image)
    const filteredImages = currentImages.filter((item: string) => item === image)
    field.onChange(filtered)
    setDeleteImages(filteredImages)
  }

  const colsMd = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  return (
    <>
      {error?.message && <Alert severity='error'>{error.message}</Alert>}
      {field.value.length ? (
        <ImageList
          sx={{
            width: '100%',
            height: 250
          }}
          rowHeight={250}
          gap={20}
          cols={colsMd ? 1 : 5}
        >
          {field.value.map((item: string, idx: number) => (
            <ImageListItem cols={1} rows={1} key={`${name}_${idx + 1}`}>
              <Image
                width={250}
                height={250}
                src={`${item}`}
                alt='product image'
                priority
                draggable={false}
                style={{
                  width: '100%',
                  height: 250,
                  userSelect: 'none',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
              <ImageListItemBar
                sx={{
                  background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' + 'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
                }}
                title={'Remove'}
                position='top'
                actionIcon={
                  <IconButton sx={{ color: 'white' }} onClick={() => handleRemoveFile(item)}>
                    <Icon icon='tabler:x' fontSize={20} />
                  </IconButton>
                }
                actionPosition='right'
              />
            </ImageListItem>
          ))}
        </ImageList>
      ) : null}
    </>
  )
}

export default ProductStudioImagesComponent

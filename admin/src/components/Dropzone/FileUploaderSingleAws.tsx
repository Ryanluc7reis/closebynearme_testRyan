import { Fragment, useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import Icon from 'src/@core/components/icon'
import { useDropzone } from 'react-dropzone'
import DropzoneWrapper from '@core/styles/libs/react-dropzone'
import { handleUpload, handleDeleteObject } from '@core/utils/s3'
import { slugify } from '@core/utils/slugify'
import toast from 'react-hot-toast'
import { Control, FieldValues, Path, useController } from 'react-hook-form'
import Alert from '@mui/material/Alert'

interface Props<V extends FieldValues> {
  control: Control<V>
  name: Path<V> | any
  fileType: Record<string, string[]>
  path: string
  subFix: string
  mb?: number
}

// Type example 'image/*': ['.png', '.jpg', '.jpeg', '.gif']

function FileUploaderSingleAws<V extends FieldValues>({ fileType, control, path, name, subFix, mb = 0 }: Props<V>) {
  const {
    field,
    fieldState: { error }
  } = useController({ name, control })

  // ** State
  const [file, setFile] = useState<File | string | undefined>(field.value)
  const [uploaded, setUploaded] = useState(false)

  // ** Hooks
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: fileType,
    maxFiles: 1,
    onDrop: (acceptedFiles: File[]) => {
      setFile(Object.assign(acceptedFiles[0]))
      setUploaded(true)
    }
  })

  const handleRemoveFile = () => {
    toast
      .promise(handleDeleteObject(file), {
        error: 'Something is wrong removing image',
        loading: 'Removing...',
        success: 'Removed success!'
      })
      .then(() => {
        field.onChange('')
        setFile(undefined)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const handleUploadAWS = (file: any) => {
    toast
      .promise(handleUpload(file, `${path}/${slugify(subFix + Date.now().toString())}`), {
        error: 'Something is wrong uploading image',
        loading: 'Uploading...',
        success: 'Upload success!'
      })
      .then((url) => {
        field.onChange(url)
        setUploaded(false)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <DropzoneWrapper>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        {file ? (
          <Image
            src={typeof file === 'string' ? file : URL.createObjectURL(file)}
            width={500}
            height={500}
            alt='file preview'
            style={{
              width: '100%',
              height: '100%'
            }}
          />
        ) : (
          <Box sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Box
              sx={{
                mb: 8.75,
                width: 48,
                height: 48,
                display: 'flex',
                borderRadius: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: (theme) => `rgba(${theme.palette.customColors.main}, 0.08)`
              }}
            >
              <Icon icon='tabler:upload' fontSize='1.75rem' />
            </Box>
            <Typography variant='h4' sx={{ mb: 2.5 }}>
              Drop file here or click to upload.
            </Typography>
          </Box>
        )}
      </div>
      <Fragment>
        <Box justifyContent='space-between' alignItems='center' display='flex' mt={4} mb={mb} flexWrap='wrap'>
          {file && (
            <Button color='error' variant='outlined' onClick={handleRemoveFile}>
              Remove
            </Button>
          )}
          {uploaded && (
            <Button
              variant='contained'
              onClick={() => {
                handleUploadAWS(file)
              }}
            >
              Upload
            </Button>
          )}

          {error?.message && <Alert severity='error'>{error.message}</Alert>}
        </Box>
      </Fragment>
    </DropzoneWrapper>
  )
}

export default FileUploaderSingleAws

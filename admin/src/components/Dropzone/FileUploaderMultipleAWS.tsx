import { Fragment, useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Icon from 'src/@core/components/icon'
import { useDropzone } from 'react-dropzone'
import DropzoneWrapper from '@core/styles/libs/react-dropzone'
import { handleUpload } from '@core/utils/s3'
import { slugify } from '@core/utils/slugify'
import toast from 'react-hot-toast'
import { Control, FieldValues, Path, useController } from 'react-hook-form'
import Alert from '@mui/material/Alert'
import { Grid, IconButton } from '@mui/material'

interface Props<V extends FieldValues> {
  control: Control<V>
  name: Path<V> | any
  fileType: Record<string, string[]>
  path: string
  subFix: string
  mb?: number
}

// Type example 'image/*': ['.png', '.jpg', '.jpeg', '.gif']

interface FileProp {
  name: string
  type: string
  size: number
}

function FileUploaderMultipleAws<V extends FieldValues>({ fileType, control, path, name, subFix, mb = 0 }: Props<V>) {
  const {
    field,
    fieldState: { error }
  } = useController({ name, control })

  // ** State
  const [files, setFiles] = useState<File[]>([])
  const [uploaded, setUploaded] = useState(false)
  const [isUploading, setIsUploading] = useState(false)

  // ** Hooks
  const { getRootProps, getInputProps } = useDropzone({
    multiple: true,
    accept: fileType,
    maxFiles: 5,
    onDrop: (acceptedFiles: File[]) => {
      setFiles(Object.assign(acceptedFiles))
      setUploaded(true)
    }
  })

  const handleRemoveFile = (file: FileProp) => {
    const uploadedFiles = files
    const filtered = uploadedFiles.filter((i: FileProp) => i.name !== file.name)
    setFiles([...filtered])
    if (filtered.length === 0) {
      setUploaded(false)
    }
  }

  const handleRemoveAllFiles = () => {
    setFiles([])
    setUploaded(false)
  }

  const handleUploadAWS = async (files: File[]) => {
    const urls: string[] = [...field.value]
    setIsUploading(true)
    toast
      .promise(
        new Promise(async (resolve, reject) => {
          try {
            for await (const file of files) {
              const url = await handleUpload(file, `${path}/${slugify(subFix + Date.now().toString())}`)

              urls.push(url)
            }
            resolve(true)
          } catch (e) {
            reject(e)
          }
        }),
        {
          error: 'Something is wrong uploading image',
          loading: 'Uploading...',
          success: 'Upload success!'
        }
      )
      .then(() => {
        field.onChange(urls)
        handleRemoveAllFiles()
        setUploaded(false)
        setIsUploading(false)
      })
      .catch((e) => {
        console.log(e)
        setIsUploading(false)
      })
  }

  return (
    <DropzoneWrapper>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
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
            Drop files here or click to upload.
          </Typography>
        </Box>
      </div>
      <Fragment>
        <Box justifyContent='space-between' alignItems='center' display='flex' mt={4} mb={mb} flexWrap='wrap'>
          {uploaded && (
            <Grid container spacing={2} gap={5}>
              {files.map((file: FileProp) => (
                <Grid item xs={12} key={file.name}>
                  <Box display='flex' alignItems='center' justifyContent='start' gap={20}>
                    <Box display='flex' alignItems='center' justifyContent='start' gap={20}>
                      <div className='file-preview'>
                        <img width={40} height={40} alt={file.name} src={URL.createObjectURL(file as any)} />
                      </div>
                      <div>
                        <Typography className='file-name'>{file.name}</Typography>
                        <Typography className='file-size' variant='body2'>
                          {Math.round(file.size / 100) / 10 > 1000
                            ? `${(Math.round(file.size / 100) / 10000).toFixed(1)} mb`
                            : `${(Math.round(file.size / 100) / 10).toFixed(1)} kb`}
                        </Typography>
                      </div>
                    </Box>
                    <IconButton onClick={() => handleRemoveFile(file)}>
                      <Icon icon='tabler:x' fontSize={20} />
                    </IconButton>
                  </Box>
                </Grid>
              ))}

              <Grid item xs={12}>
                <Box display='flex' gap={5}>
                  <Button color='error' variant='outlined' onClick={handleRemoveAllFiles}>
                    Remove All
                  </Button>
                  <Button
                    variant='contained'
                    disabled={isUploading}
                    onClick={() => {
                      handleUploadAWS(files)
                    }}
                  >
                    Upload Files
                  </Button>
                </Box>
              </Grid>
            </Grid>
          )}

          <Alert severity='info' sx={{ width: '100%' }}>
            Recommend size example: 1000x1000
          </Alert>
          {error?.message && <Alert severity='error'>{error.message}</Alert>}
        </Box>
      </Fragment>
    </DropzoneWrapper>
  )
}

export default FileUploaderMultipleAws

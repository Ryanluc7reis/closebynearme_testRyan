// ** React Imports
import { Fragment, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Button from '@mui/material/Button'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import { useDropzone } from 'react-dropzone'
import DropzoneWrapper from '@core/styles/libs/react-dropzone'

interface FileProp {
  name: string
  type: string
  size: number
}

interface Props {
  fileType: Record<string, string[]>
  handleSubmit: (data: any) => void
}

// Type example 'image/*': ['.png', '.jpg', '.jpeg', '.gif']

const FileUploaderSingle = ({ fileType, handleSubmit }: Props) => {
  // ** State
  const [files, setFiles] = useState<File[]>([])

  // ** Hooks
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: fileType,
    maxFiles: 1,
    onDrop: (acceptedFiles: File[]) => {
      setFiles(acceptedFiles.map((file: File) => Object.assign(file)))
    }
  })

  const renderFilePreview = () => {
    return <Icon icon='tabler:file-description' />
  }

  const handleRemoveFile = (file: FileProp) => {
    const uploadedFiles = files
    const filtered = uploadedFiles.filter((i: FileProp) => i.name !== file.name)
    setFiles([...filtered])
  }

  const fileList = files.map((file: FileProp) => (
    <ListItem key={file.name}>
      <div className='file-details'>
        <div className='file-preview'>{renderFilePreview()}</div>
        <div>
          <Typography className='file-name'>{file.name}</Typography>
        </div>
      </div>
      <IconButton onClick={() => handleRemoveFile(file)}>
        <Icon icon='tabler:x' fontSize={20} />
      </IconButton>
    </ListItem>
  ))

  const handleRemoveAllFiles = () => {
    setFiles([])
  }

  return (
    <DropzoneWrapper>
      <Card>
        <CardContent>
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
                Drop file here or click to upload.
              </Typography>
            </Box>
          </div>
          {files.length ? (
            <Fragment>
              <List>{fileList}</List>
              <div className='buttons'>
                <Button color='error' variant='outlined' onClick={handleRemoveAllFiles}>
                  Remove All
                </Button>
                <Button
                  variant='contained'
                  onClick={() => {
                    handleSubmit(files)
                  }}
                >
                  Upload File
                </Button>
              </div>
            </Fragment>
          ) : null}
        </CardContent>
      </Card>
    </DropzoneWrapper>
  )
}

export default FileUploaderSingle

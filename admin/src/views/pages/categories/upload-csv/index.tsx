import React from 'react'
import FileUploaderMultiple from '@components/Dropzone/FileUploaderSingle'
import api from 'src/graphql/api'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'

interface Props {
  categoryId: string
}

function UploadCSVComponent({ categoryId }: Props) {
  const router = useRouter()

  const handleSubmit = (files: any[]) => {
    const form = new FormData()
    form.append('categoryId', categoryId)
    form.append('csv', files[0])

    toast
      .promise(api.post(`/categories/upload-csv`, form), {
        error: 'Something is wrong',
        loading: 'Uploading..',
        success: 'Upload Success!'
      })
      .then(() => {
        router.push('/companies/list/')
      })
      .catch(() => {})
  }

  return (
    <div>
      <FileUploaderMultiple
        handleSubmit={handleSubmit}
        fileType={{
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx', '.csv']
        }}
      />
    </div>
  )
}

export default UploadCSVComponent

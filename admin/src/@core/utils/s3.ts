import axios from 'axios'

// @ts-ignore
import S3 from 'react-aws-s3'

const config = {
  bucketName: process.env.NEXT_PUBLIC_S3_BUCKET_NAME,
  region: process.env.NEXT_PUBLIC_S3_REGION,
  accessKeyId: process.env.NEXT_PUBLIC_S3_ACCESS_KEY,
  secretAccessKey: process.env.NEXT_PUBLIC_S3_SECRET_KEY,
  s3Url: process.env.NEXT_PUBLIC_S3_URL || '' /* optional */
}

const ReactS3Client = new S3(config)

/**
 * {
 *   Response: {
 *     bucket: "myBucket",
 *     key: "image/test-image.jpg",
 *     location: "https://myBucket.s3.amazonaws.com/media/test-file.jpg"
 *   }
 * }
 */
export const handleUpload = async (file: File, fileName: string): Promise<string> => {
  return await new Promise((resolve) => {
    ReactS3Client.uploadFile(file, fileName)
      .then((data: any) => {
        resolve(data.location)
      })
      .catch((err: any) => console.log(err))
  })
}

/**
   * {
   *   Response: {
   *      ok: true,
          status: 204,
          message: 'File deleted',
          fileName: 'hello-world.docx'
   *   }
   * }
   */
export const handleDeleteObject = async (file: any) => {
  const startWith = typeof file === 'string' ? file?.startsWith(config.s3Url) : null
  let filename = ''
  if (startWith) {
    filename = file?.replace(config.s3Url, '')
  } else {
    return
  }

  return await new Promise((resolve, reject) => {
    axios
      .delete(config.s3Url + filename)
      .then((response) => resolve(response))
      .catch((err) => reject(err))
  })
}

export const handleDeleteObjects = async (images: string[]) => {
  for await (const image of images) {
    await handleDeleteObject(image)
  }
}

export const s3Url = config.s3Url

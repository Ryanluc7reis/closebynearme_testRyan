import { GetServerSideProps } from 'next/types'

const Sitemap = () => {
  return <></>
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // Get sitemap.xml from S3 bucket
  const response = await fetch('https://closebynearme.s3.us-east-2.amazonaws.com/sitemap/sitemap.xml')
  const text = await response.text()
  res.setHeader('Content-Type', 'text/xml')
  res.write(text)
  res.end()

  return {
    props: {}
  }
}
export default Sitemap

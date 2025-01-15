import { GetSetttingsDocument, GetSetttingsQuery, GetSetttingsQueryResult } from '@graphql'
import SettingsView from '@views/settings'
import { getCookie } from 'cookies-next'
import { GetServerSideProps } from 'next/types'
import client from 'src/apollo-client'
import authConfig from 'src/configs/auth'

interface Props {
  data: GetSetttingsQuery['getSettings']
}

function SettingsPage({ data }: Props) {
  return <SettingsView data={data} />
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const token = getCookie(authConfig.cookieTokenKeyName, { req, res })

  let document: GetSetttingsQueryResult['data']

  try {
    const res = (await client(token).query({
      query: GetSetttingsDocument,
      fetchPolicy: 'no-cache'
    })) as GetSetttingsQueryResult

    if (!res.data) {
      return {
        notFound: true
      }
    }

    document = res.data
  } catch (e) {
    return {
      redirect: {
        permanent: false,
        destination: '/'
      }
    }
  }

  const { getSettings } = document

  return {
    props: {
      token: token ?? '',
      data: getSettings
    }
  }
}

export default SettingsPage

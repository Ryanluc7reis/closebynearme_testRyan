import BlankLayout from '@core/layouts/BlankLayout'
import { CheckRecoverSecureIdValidDocument } from '@graphql'
import dynamic from 'next/dynamic'
import { GetServerSideProps } from 'next/types'
import { ReactNode } from 'react'
import client from 'src/apollo-client'

const ChangePasswordComponent = dynamic(() => import('@views/auth/ChangePassword'), {
  ssr: false
})

interface Props {
  secureId: string
  expired: boolean
}

export default function NewPassword({ expired, secureId }: Props) {
  return <ChangePasswordComponent secureId={secureId} expired={expired} />
}

NewPassword.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

NewPassword.guestGuard = true

NewPassword.pageTitle = 'Cambiar contraseña'

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const secureId = query.secureId as string

  if (!secureId) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  try {
    await client().query({
      query: CheckRecoverSecureIdValidDocument,
      variables: {
        input: {
          secureId: secureId
        }
      }
    })

    return {
      props: {
        secureId,
        expired: false
      }
    }
  } catch (e) {
    return {
      props: {
        secureId,
        expired: true
      }
    }
  }
}

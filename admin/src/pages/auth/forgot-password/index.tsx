import dynamic from 'next/dynamic'
import { ReactNode } from 'react'

import BlankLayout from 'src/@core/layouts/BlankLayout'

const ForgotPasswordComponent = dynamic(() => import('@views/auth/ForgotPassword'), {
  ssr: true
})

export default function ForgotPassword() {
  return <ForgotPasswordComponent />
}

ForgotPassword.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

ForgotPassword.guestGuard = true
ForgotPassword.pageTitle = 'Olvido contraseña'

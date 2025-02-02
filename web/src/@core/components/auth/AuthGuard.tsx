import { ReactNode, ReactElement, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from 'src/hooks/useAuth'

interface AuthGuardProps {
  children: ReactNode
  fallback: ReactElement | null
}

const AuthGuard = ({ children, fallback }: AuthGuardProps) => {
  const auth = useAuth()
  const router = useRouter()
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    if (!router.isReady) return

    const storedUser = window.localStorage.getItem('userData')

    if (auth.user === null && !storedUser) {
      setChecked(true)
    } else {
      setChecked(true)
    }
  }, [router.isReady, auth.user])

  if (!checked || auth.loading) return fallback

  return <>{children}</>
}

export default AuthGuard

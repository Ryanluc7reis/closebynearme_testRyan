// ** React Imports
import { ReactNode } from 'react'

// ** Types
import { NavGroup } from 'src/@core/layouts/types'
import { useAuth } from 'src/hooks/useAuth'

interface Props {
  navGroup?: NavGroup
  children: ReactNode
}

const CanViewNavGroup = (props: Props) => {
  const { children, navGroup } = props

  const auth = useAuth()

  if (auth.user || (navGroup && navGroup.auth === false)) {
    return <>{children}</>
  } else {
    return null
  }
}

export default CanViewNavGroup

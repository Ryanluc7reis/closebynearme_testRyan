import { HeaderType } from '@styles/interfaces'
import { ReactNode } from 'react'
import NavbarHeaderComponent from '@core/components/navbar'
import FooterComponent from '@core/components/footer'
import { useMediaQueryContext } from 'src/hooks/useMediaQuery'

interface Props {
  children: ReactNode
  contentHeightFixed?: boolean
  headerType: HeaderType
  hideFooter: boolean
}

const UserLayout = ({ children, headerType, hideFooter }: Props) => {
  const { isMobile } = useMediaQueryContext()

  return (
    <>
      {headerType !== 'hidden' && <NavbarHeaderComponent type={headerType} isMobile={isMobile} />}
      {children}
      {!hideFooter && <FooterComponent isMobile={isMobile} />}
    </>
  )
}

export default UserLayout

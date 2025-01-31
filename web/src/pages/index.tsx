import authConfig from '@configs/auth'
import { getCookie } from 'cookies-next'
import { GetServerSideProps } from 'next/types'
import { HeaderType } from '@styles/interfaces'
import { useMediaQueryContext } from 'src/hooks/useMediaQuery'
import dynamic from 'next/dynamic'

const HomePage = dynamic(() => import('@views/home'), {
  ssr: false
})
const FooterSection = dynamic(() => import('@views/city/sections/FooterSection'), {
  ssr: false
})

function Home() {
  const { isMobile } = useMediaQueryContext()

  return (
    <div className=''>
      <HomePage isMobile={isMobile} type='ProductHeaderWithSeller' className='' />
      <FooterSection isMobile={isMobile} />
    </div>
  )
}

Home.guestGuard = true
Home.headerType = 'ProductHeader' as HeaderType
Home.pageTitle = 'Close By Near Me'
Home.hideFooter = true

export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  const token = getCookie(authConfig.cookieTokenKeyName, { req, res })

  return {
    props: {
      token: token ?? '',
      isMobile: query.viewport === 'mobile'
    }
  }
}
export default Home

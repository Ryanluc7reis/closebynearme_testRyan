import React from 'react'
import Button from '../button'
import Image from 'next/image'
import Link from 'next/link'
import { DefaultStylesBase, HeaderType } from '@styles/interfaces'

//import LoginFormComponent from '../../../components/LoginFormComponent'

interface Props {
  type?: HeaderType
  isMobile: boolean
}

const HeaderStyles = (
  isMobile: boolean
): Record<HeaderType, Omit<DefaultStylesBase, 'color' | 'fontSize' | 'fontWeight'>> => {
  return {
    DefaultHeader: {
      justifyContent: isMobile ? 'justify-between' : 'justify-center',
      mdJustifyContent: 'md:justify-between'
    },
    CompanyHeader: {
      justifyContent: 'justify-between',
      mdJustifyContent: 'md:justify-center'
    },
    ProductHeader: {
      justifyContent: 'justify-between',
      mdJustifyContent: 'md:justify-between'
    },
    hidden: {
      justifyContent: 'justify-between',
      mdJustifyContent: ''
    },
    ProductHeaderWithSeller: {
      justifyContent: 'justify-between',
      mdJustifyContent: 'md:justify-between'
    }
  }
}

function NavbarHeader({ type = 'DefaultHeader', isMobile }: Props) {
  const styles = HeaderStyles(isMobile)[type]

  //const [modalLogin, setModalLogin] = useState(false)

  return (
    <nav className='container mx-auto px-5 sm:px-0'>
      <div className={`flex flex-wrap ${styles.justifyContent} ${styles.mdJustifyContent} items-center`}>
        {isMobile && <div />}
        <>
          <Link href='/'>
            <Image
              src='/assets/logo.png'
              alt='logo asset'
              width={233}
              height={132}
              draggable={false}
              className='select-none w-[140px] h-[79px] sm:w-[233px] sm:h-[132px]'
              priority
            />
          </Link>
        </>
        {!isMobile && type === 'DefaultHeader' && (
          <div>
            <Button
              label='Join'
              color='bg-primary'
              weight='font-semibold'
              onClick={() => {}}
              textSize={'text-2xl'}
              className='mx-2'
              textClassName='text-lg md:text-2xl'
            />
            <Button
              label='Login'
              color='bg-background'
              weight='font-semibold'
              onClick={() => {}}
              textSize={'text-2xl'}
              className='mx-2'
              textClassName='text-lg md:text-2xl'
            />
          </div>
        )}
        {!isMobile && type === 'ProductHeader' && (
          <div className='flex flex-col items-start justify-center font-inter font-bold text-[20px] leading-[19.45px]'>
            <div>phone - (424) 216-6633</div>
            <a href='mailto:hello@closebynearme.com'>email - hello@closebynearme.com</a>
            <div className='flex items-center gap=[6]'>
              <h3>Are you already a seller? </h3>
              <Link href='/auth/login/'>
                <button className='flex flex-col items-start justify-center font-inter font-bold text-[20px] bg-[#0BC9B4] text-white px-4 py-2 rounded-lg mb-[10px] ml-[5px]'>
                  Sign in as seller
                </button>
              </Link>
            </div>
          </div>
        )}
        {!isMobile && type === 'ProductHeaderWithSeller' && (
          <div className='flex flex-col items-start justify-center font-inter font-bold text-[20px] leading-[19.45px]'>
            {/* <Link >
             <a
              href='/dashboard-seller'
              className='flex flex-col items-start justify-center font-inter font-bold text-[20px] bg-[#0BC9B4] text-white px-4 py-2 rounded-lg mb-[10px]'
            >
              My dashboard seller
            </a>

            </Link> */}

            <div>phone - (424) 216-6633</div>
            <a href='mailto:hello@closebynearme.com'>email - hello@closebynearme.com</a>
          </div>
        )}
        {isMobile && (
          <Image
            src={`/assets/icons/${type === 'DefaultHeader' ? 'burger_green' : 'burger'}.svg`}
            alt='logo asset'
            width={32}
            height={21}
            draggable={false}
            className='select-none'
            priority
          />
        )}
      </div>
    </nav>
  )
}

export default NavbarHeader

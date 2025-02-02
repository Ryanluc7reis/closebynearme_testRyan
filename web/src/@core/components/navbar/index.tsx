import React, { useContext } from 'react'
import Button from '../button'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { DefaultStylesBase, HeaderType } from '@styles/interfaces'
import { AuthContext } from '../../../context/AuthContext'

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
const StyledFlexButtonSeller = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  margin: 7px 0;
` 
function NavbarHeader({ type = 'DefaultHeader', isMobile }: Props) {
  const styles = HeaderStyles(isMobile)[type]
  const { user } = useContext(AuthContext)

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
              {user && user.isApproved === true && (
                <StyledFlexButtonSeller>
                  <h3>Hi {user.contactPersonName}, </h3>
                  <Link href='/dashboard-seller'>
                    <button className='flex flex-col items-start justify-center font-inter font-bold text-[20px] bg-[#0BC9B4] text-white px-4 py-2 rounded-lg mb-[10px] ml-[5px]'>
                      Dashboard Seller
                    </button>
                  </Link>
                </StyledFlexButtonSeller>
              )}
               {user && user.isApproved === false && (
                <StyledFlexButtonSeller>
                <h3>Hi {user.contactPersonName},</h3>
                  <h2 style={{color: 'red', fontWeight: '400'}}>your profile is under review..</h2>
                
                </StyledFlexButtonSeller>
              )}
               {!user  && (
                <StyledFlexButtonSeller>
                  <h3>Are you already a seller? </h3>
                  <Link href='/auth/login/'>
                    <button className='flex flex-col items-start justify-center font-inter font-bold text-[20px] bg-[#0BC9B4] text-white px-4 py-2 rounded-lg mb-[10px] ml-[5px]'>
                      Sign in as seller
                    </button>
                  </Link>
                </StyledFlexButtonSeller>
              )}
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

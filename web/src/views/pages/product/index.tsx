import React, { HTMLProps, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useMediaQueryContext } from 'src/hooks/useMediaQuery'
import OtherRentalsInLocation from './sections/OtherRentalsIn'
import { FindProductDetailsQuery } from '@graphql'
import OtherRentalsSameCompany from './sections/OtherRentalsSameCompany'
import TrustedBySection from '@views/city/sections/TrustedBySection'
import ProductInfo2 from './sections/ProductInfo2'
import Reviews from './sections/Reviews'
import ProductInfo from './sections/ProductInfo'
import HowItWorksSection from './sections/HowItWorks'
import FixedBottomBar from './sections/components/FixedBottomBar'

const FooterSection = dynamic(() => import('@views/city/sections/FooterSection'), {
  ssr: false
})

interface Props {
  data: FindProductDetailsQuery['findOneProductPopulate']
  className?: HTMLProps<HTMLElement>['className']
}

function ProductDetails({ data, className }: Props) {
  const { isMobile } = useMediaQueryContext()

  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY)

    // clean up code
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className={`${className}`}>
        <ProductInfo data={data} className='mb-8 sm:mb-20' isMobile={isMobile} />
        <hr />
        <HowItWorksSection isMobile={isMobile} className='my-8 sm:my-20' />
        <hr />
        <Reviews data={data} className='my-8 sm:my-20' />
        <hr />
        <TrustedBySection isMobile={false} className='container mx-auto my-2 sm:my-16 px-5 xl:px-0' />
        <hr />
        <ProductInfo2 data={data} className='my-8 sm:my-20' />
        <hr />
        <OtherRentalsSameCompany data={data} className='my-8 sm:my-20' />
        <hr />
        <OtherRentalsInLocation
          data={{
            location: data.locationId
          }}
          className='my-8 sm:my-20'
        />
      </div>
      {isMobile && offset >= 200 && (
        <FixedBottomBar data={data} className='z-20  bg-white  shrink-0 fixed bottom-0 w-[100%] ' />
      )}
      <FooterSection isMobile={isMobile} />
    </>
  )
}

export default ProductDetails

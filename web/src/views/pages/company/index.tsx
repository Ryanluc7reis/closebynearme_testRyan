import React, { HTMLProps } from 'react'
import CompanyHeader from './sections/CompanyHeaderSection'
import { FindOneCompanyBySlugQuery } from '@graphql'
import { useMediaQueryContext } from 'src/hooks/useMediaQuery'
import FooterSection from '@views/city/sections/FooterSection'
import ProductsSection from './sections/ProductsSection'
import YouMayAlsoLikeSection from './sections/YouMayAlsoLike'
import OtherRentalsInLocation from './sections/OtherRentalsInLocation'

interface Props {
  data: {
    location: FindOneCompanyBySlugQuery['findOneLocationBySlug']['location']
    category: FindOneCompanyBySlugQuery['findOneLocationBySlug']['category']
    companies: FindOneCompanyBySlugQuery['findOneLocationBySlug']['companies']['docs']
    company: FindOneCompanyBySlugQuery['findOneCompanyBySlug']['company']
    products: FindOneCompanyBySlugQuery['findOneCompanyBySlug']['products']['docs']
  }
  className?: HTMLProps<HTMLElement>['className']
}

function CompanyLanding({ data, className }: Props) {
  const { isMobile } = useMediaQueryContext()

  return (
    <>
      <div className={className}>
        <CompanyHeader isMobile={isMobile} data={data} className='my-5 sm:my-10' />
        <hr />
        <ProductsSection data={data} className='my-8 sm:my-20' />
        <hr />
        <YouMayAlsoLikeSection data={data} className='my-8 sm:my-20' />
        <hr />
        <OtherRentalsInLocation data={data} className='my-8 sm:my-20' />
      </div>
      <FooterSection isMobile={isMobile} />
    </>
  )
}

export default CompanyLanding

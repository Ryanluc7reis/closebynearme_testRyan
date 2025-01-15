import SidebarFloatBuy, { TopBarBuy } from './components/SidebarFloatBuy'
import { FindProductDetailsQuery } from '@graphql'
import React, { HTMLProps } from 'react'
import GoodPrice from './components/GoodPrice'
import ReportListing from './components/ReportListing'
import InfoColumn from './components/InfoColumn'
import EssentialInformation from './components/EssentialInformation'
import AboutThis from './components/AboutThis'
import TitleComponent from '@core/components/title'
import CompanyInfoBar from './components/CompanyInfo'
import CompanyInfoProfile from './components/CompanyInfoProfile'
import GalleryImages from './components/ImagesNew'
import HowItWorkVersion2 from './components/HowItWorkVersion2'
import Sticky from 'react-stickynode'

interface Props {
  data: FindProductDetailsQuery['findOneProductPopulate']
  className?: HTMLProps<HTMLElement>['className']
  isMobile: boolean
}

function ProductInfo({ data, className, isMobile }: Props) {
  return (
    <div id='content' className={`flex-col items-center justify-center gap-4 ${className}`}>
      <TopBarBuy data={data} className='sm:hidden mb-4 sm:mb-0' />
      <div className='mb-10 sm:mb-20'>
        <TitleComponent
          title={data.name}
          className='text-[20px] leading-[24.20px] sm:text-[40px] sm:leading-[48.41px] mb-6'
          textSize=''
          weight='font-bold'
        />
        <GalleryImages data={data} />
        <TitleComponent
          title={`${data.categoryId.name.replace(/Rentals|RENTALS|rentals/g, '')} in ${data.locationId.name}, United States`}
          weight='font-semibold'
          textSize=''
          className='text-[15px] leading-[18.15px] sm:text-[20px] sm:leading-[24.2px] mt-3 sm:mt-6'
        />
      </div>
      <div id='#header' className='flex items-start justify-between gap-40'>
        <div className='w-full sm:w-7/12'>
          <CompanyInfoBar className='mb-10 sm:mb-24' data={data} isMobile={isMobile} />
          <CompanyInfoProfile className='mb-8' data={data} />
          <hr />
          <AboutThis data={data} className='my-4 sm:my-8' />
          <hr />
          <HowItWorkVersion2 className='my-4 sm:my-8' />
          <hr />
          <EssentialInformation data={data} className='my-4 sm:my-8' />
          <hr />
          <InfoColumn data={data} className='mt-4 sm:mt-8' />
        </div>
        <div className='hidden sm:block w-2/6'>
          <Sticky top='#header' enabled bottomBoundary='#content'>
            <SidebarFloatBuy data={data} className='mb-10 select-none' />
            <GoodPrice className='mb-6 select-none' />
            <ReportListing className='select-none' />
          </Sticky>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo

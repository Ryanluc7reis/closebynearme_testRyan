import { FindOneCompanyBySlugQuery } from '@graphql'
import React, { HTMLProps } from 'react'
import CardComponent from '@core/components/card'
import TitleComponent from '@core/components/title'
import Image from 'next/image'
import Button from '@core/components/button'

interface Props {
  data: {
    location: FindOneCompanyBySlugQuery['findOneLocationBySlug']['location']
    category: FindOneCompanyBySlugQuery['findOneLocationBySlug']['category']
    company: FindOneCompanyBySlugQuery['findOneCompanyBySlug']['company']
  }
  className?: HTMLProps<HTMLElement>['className']
  isMobile: boolean
}

function CompanyStatsSection({ className, data, isMobile }: Props) {
  return (
    <CardComponent className={`${className} pb-0`}>
      <div className='flex justify-center items-center'>
        <Image
          src='/assets/icons/eye.svg'
          alt='asset eye'
          width={35}
          draggable={false}
          height={24}
          className='select-none w-[20px] h-[20px] md:w-[35px] md:h-[24px]'
        />
        <TitleComponent textSize='text-lg' weight='font-black' title={'4561 views'} className='md:text-2xl mx-4' />
      </div>
      <div className='flex sm:flex-none justify-center items-center'>
        <TitleComponent
          textSize='text-sm'
          weight={isMobile ? 'font-normal' : 'font-semibold'}
          title={`From people seeking ${data.category.name} in ${data.location.name}`}
          className='md:text-xl text-center mx-4 w-[200px] sm:w-[100%]'
        />
      </div>

      <div className='flex justify-center items-center flex-wrap mt-6 xl:mt-14'>
        <div className='flex flex-col justify-center items-center lg:justify-start lg:items-start lg:w-[500px] h-[100%] mr-0 lg:mr-20'>
          <Button
            onClick={() => {}}
            className='px-0 mb-4 sm:mb-8 border border-primary rounded-md w-[100%] hover:border-secondary'
            weight='font-bold'
            textColor='text-primary'
            textSize='text-sm'
            textClassName='sm:text-xl'
            label='View Sample Listing'
          />
          <Button
            onClick={() => {}}
            className='px-0 mb-4 sm:mb-8 border border-primary rounded-md w-[100%] hover:border-secondary'
            weight='font-bold'
            textClassName='sm:text-xl'
            textColor='text-primary'
            textSize='text-sm'
            label='View Dashboard'
          />
          {!isMobile && (
            <Button
              onClick={() => {}}
              className='mb-8 text-text border border-primary rounded-md w-[100%] hover:border-secondary'
              weight='font-bold'
              color='bg-primary'
              textSize='text-xl'
              textColor='text-primary'
              label='Activate'
              iconLeft={
                <Image
                  src='/assets/icons/heart_black.svg'
                  alt='icon heart black'
                  height={30}
                  draggable={false}
                  width={30}
                  className='select-none w-[20px] h-[20px] lg:w-[25px] lg:h-[25px] xl:w-[30px] xl:h-[30px]  mx-2'
                />
              }
            />
          )}
        </div>
        <Image
          src='/assets/images/company_dashboard_asset_1.svg'
          alt='asset company 1'
          width={512}
          height={445}
          className='select-none'
          draggable={false}
        />
      </div>
    </CardComponent>
  )
}

export default CompanyStatsSection

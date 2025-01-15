import TitleComponent from '@core/components/title'
import { FindOneCompanyBySlugQuery } from '@graphql'
import React, { HTMLProps } from 'react'

interface Props {
  data: {
    location: FindOneCompanyBySlugQuery['findOneLocationBySlug']['location']
    category: FindOneCompanyBySlugQuery['findOneLocationBySlug']['category']
    company: FindOneCompanyBySlugQuery['findOneCompanyBySlug']['company']
  }
  className?: HTMLProps<HTMLElement>['className']
  isMobile: boolean
}

function CompanyHeaderSection({ className, data, isMobile }: Props) {
  return (
    <div className={className}>
      <div className='flex justify-center lg:justify-between items-start flex-wrap'>
        <div className='flex justify-center items-center flex-wrap'>
          <div className='flex flex-col items-center justify-center mb-4 mr-4 lg:mr-20'>
            <div
              className={`w-[105px] h-[105px] sm:w-[200px] sm:h-[200px] rounded-full text-center bg-[#0088D5] relative`}
            >
              <TitleComponent
                textSize='text-4xl'
                weight='font-black'
                color='text-background'
                className='sm:text-8xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'
                title={data.company.initialLetter.toUpperCase()}
              />
            </div>
          </div>

          <div className='flex flex-col justify-center items-center sm:justify-start sm:items-start'>
            <TitleComponent
              textSize='text-xl'
              weight='font-black'
              className='sm:text-4xl text-center'
              title={data.company.name}
            />
            <div className='flex justify-center items-center mt-4 sm:mt-8 xl:mt-32'>
              <TitleComponent
                weight='font-light'
                textSize='text-base'
                title={`${data.category.name} in`}
                className='sm:text-xl mr-2'
              />
              <TitleComponent
                weight={isMobile ? 'font-light' : 'font-bold'}
                textSize='text-base'
                title={data.location.name}
                className='sm:text-xl mr-2'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyHeaderSection

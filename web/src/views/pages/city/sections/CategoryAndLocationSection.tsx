import Button from '@core/components/button'
import TitleComponent from '@core/components/title'
import { FindLocationBySlugQuery } from '@graphql'
import Image from 'next/image'
import React, { HTMLProps } from 'react'

const FallbackImage = '/assets/images/asset_1.svg'

interface Props {
  data: {
    location: FindLocationBySlugQuery['findOneLocationBySlug']['location']
    category: FindLocationBySlugQuery['findOneLocationBySlug']['category']
  }
  className?: HTMLProps<HTMLElement>['className']
  isMobile: boolean
}

function CategoryAndLocationSection({ data, className, isMobile }: Props) {
  const classNameMobile = 'items-center justify-center w-[100%]'
  const classNameDesktop = 'flex flex-wrap items-center justify-around'

  return (
    <div className={className}>
      <div className={isMobile ? classNameMobile : classNameDesktop}>
        <div className='flex flex-col justify-start items-start'>
          <TitleComponent
            weight='font-black'
            textSize='text-xl'
            title={data.category.name}
            className='text-center lg:text-left lg:text-5xl'
          />
          <TitleComponent
            weight='font-black'
            textSize='text-xl'
            title={data.location.name}
            className='text-center mb-2 lg:text-left lg:text-5xl'
          />
          {!isMobile && (
            <TitleComponent
              weight='font-normal'
              textSize='text-3xl'
              title='Starting at 100/day'
              className='text-left mb-5'
            />
          )}
          <input className='border rounded-full w-full py-3 px-3 text-gray-700 leading-tight my-2' />
          <Button
            label='Find Near Me'
            onClick={() => {}}
            color='bg-primary'
            className='mt-2 py-[10px] lg:py-[20px] rounded-xl w-[100%] lg:w-auto'
            textClassName='lg:text-3xl'
            textSize='text-lg'
            weight='font-black'
          />
        </div>
        {!isMobile && (
          <div className='hidden sm:block mt-5 lg:mt-0 w-[500px] h-[500px]'>
            <Image
              width={500}
              draggable={false}
              height={500}
              className='select-none'
              alt='location asset'
              src={data.location.image || FallbackImage}
              style={{
                width: '100%',
                height: '100%'
              }}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default CategoryAndLocationSection

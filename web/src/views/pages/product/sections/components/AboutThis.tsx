import TitleComponent from '@core/components/title'
import { FindProductDetailsQuery } from '@graphql'

// import Image from 'next/image'
import React, { HTMLProps } from 'react'

interface Props {
  data: FindProductDetailsQuery['findOneProductPopulate']
  className?: HTMLProps<HTMLElement>['className']
}

function AboutThis({ data, className }: Props) {
  return (
    <div className={`${className}`}>
      <div className='flex flex-col gap-2 items-start justify-start'>
        <TitleComponent
          title={`About this ${data.categoryId.name.replace(/Rentals|RENTALS|rentals/g, '')}`}
          weight='font-semibold'
          textSize=''
          className='text-left text-[20px] leading-[24.2px] sm:text-[30px] sm:leading-[36.31px]'
        />
        <TitleComponent
          title={`${data.description}`}
          weight='font-light'
          textSize=''
          className='text-left text-[15px] leading-[18.15px] sm:text-[22px] sm:leading-[26.63px] max-w-[820px]'
        />
      </div>
      {/* <div className='flex items-center justify-start mt-5 select-none cursor-pointer' draggable={false}>
        <TitleComponent
          title={'Show More'}
          weight='font-normal'
          textSize=''
          className='text-left text-[20px] leading-[24.20px] sm:text-[22px] sm:leading-[26.63px]'
        />
        <Image
          src='/assets/icons/arrow_right_blank.svg'
          alt='arrow right'
          width={41}
          height={44}
          className='select-none'
          draggable={false}
        />
      </div> */}
    </div>
  )
}

export default AboutThis

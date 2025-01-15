import TitleComponent from '@core/components/title'
import Image from 'next/image'
import React, { HTMLProps } from 'react'

interface Props {
  className?: HTMLProps<HTMLElement>['className']
}

function GoodPrice({ className }: Props) {
  return (
    <div className={`border border-[#CBCBCB] py-4 px-10 rounded-xl ${className}`}>
      <div className='flex items-center justify-start gap-6'>
        <Image
          height={52}
          width={52}
          src={'/assets/icons/price-tag.svg'}
          draggable={false}
          className='select-none'
          alt='price tag icon'
        />
        <div className='flex flex-col items-start justify-center'>
          <TitleComponent
            title='Good price'
            weight='font-semibold'
            textSize=''
            className='text-[22px] leading-[26.63px]'
          />
          <div>
            <TitleComponent
              title='Your dates are $5 less than the avg. daily'
              textSize=''
              weight='font-normal'
              className='text-[15px] leading-[18.15px]'
            />
            <TitleComponent
              title='rate over the last 3 months.'
              textSize=''
              weight='font-normal'
              className='text-[15px] leading-[18.15px]'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GoodPrice

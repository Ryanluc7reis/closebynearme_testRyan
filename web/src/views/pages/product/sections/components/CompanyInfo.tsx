import TitleComponent from '@core/components/title'
import { FindProductDetailsQuery } from '@graphql'
import Image from 'next/image'
import React, { HTMLProps } from 'react'

interface Props {
  data: FindProductDetailsQuery['findOneProductPopulate']
  className?: HTMLProps<HTMLElement>['className']
  isMobile: boolean
}

function CompanyInfoBar({ data, className, isMobile }: Props) {
  if (isMobile) {
    return (
      <div
        className={`border rounded-xl border-[#CBCBCB] flex items-center justify-center gap-4 px-6 py-4 ${className}`}
      >
        <div>
          <TitleComponent
            title={`${data.companyId.reviewsRating}`}
            textSize=''
            className='text-[20px] leading-[24.2px] text-center'
            weight='font-bold'
          />
          <Image
            src='/assets/icons/stars.svg'
            alt='stars'
            width={76}
            height={11}
            className='select-none'
            draggable={false}
          />
        </div>
        <div className='border-l border-[#CBCBCB] h-[45px]'></div>
        <div className='flex items-center justify-center gap-2'>
          <Image
            src='/assets/icons/crown.svg'
            width={34}
            height={34}
            alt='crown'
            className='select-none'
            draggable={false}
          />
          <TitleComponent
            title='Local favorite'
            textSize=''
            className='text-[15px] leading-[18.15px] text-center'
            weight='font-semibold'
          />
        </div>

        <div className='border-l border-[#CBCBCB] h-[45px]'></div>

        <div className='flex flex-col items-center justify-center'>
          <TitleComponent
            title={`${data.companyId.reviewsAmount}`}
            textSize=''
            className='text-[20px] leading-[24.20px] text-center'
            weight='font-semibold'
          />
          <TitleComponent
            title='Reviews'
            textSize=''
            className='text-[12px] leading-[14.52px] text-center'
            weight='font-normal'
          />
        </div>
      </div>
    )
  }

  return (
    <div
      className={`border rounded-lg border-[#CBCBCB] flex items-center justify-center gap-10 px-6 py-4 ${className}`}
    >
      <Image
        src='/assets/icons/crown.svg'
        width={63}
        height={63}
        alt='crown'
        className='select-none'
        draggable={false}
      />
      <TitleComponent
        title='Local favorite'
        textSize=''
        className='text-[22px] leading-[26.63px] text-left'
        weight='font-semibold'
      />

      <TitleComponent
        title={`One of the most loved ${data.categoryId.name.toLowerCase().replace(/Rentals|RENTALS|rentals/g, '')} company`}
        textSize=''
        className='text-[20px] leading-[24.20px] text-left'
        weight='font-light'
      />
      <div>
        <TitleComponent
          title={`${data.companyId.reviewsRating}`}
          textSize=''
          className='text-[30px] leading-[36.31px] text-center'
          weight='font-bold'
        />
        <Image
          src='/assets/icons/stars.svg'
          alt='stars'
          width={76}
          height={11}
          className='select-none'
          draggable={false}
        />
      </div>
      <div className='border-l border-[#CBCBCB] h-[45px]'></div>

      <div>
        <TitleComponent
          title={`${data.companyId.reviewsAmount}`}
          textSize=''
          className='text-[30px] leading-[36.31px] text-center'
          weight='font-semibold'
        />
        <TitleComponent
          title='Reviews'
          textSize=''
          className='text-[15px] leading-[18.15px] text-center'
          weight='font-normal'
        />
      </div>
    </div>
  )
}

export default CompanyInfoBar

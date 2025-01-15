import IconifyIcon from '@core/components/icon'
import TitleComponent from '@core/components/title'
import { FindProductDetailsQuery } from '@graphql'
import React, { HTMLProps } from 'react'

interface Props {
  data: FindProductDetailsQuery['findOneProductPopulate']
  className?: HTMLProps<HTMLElement>['className']
}

interface InfoProps {
  data: Props['data']['amenities']
  className: Props['className']
}

function InfoComponent({ className, data }: InfoProps) {
  return (
    <div className={`${className}`}>
      {data.map((item) => (
        <div key={`product-detail-amenities-${item._id}`} className='flex items-center justify-start gap-10 sm:gap-4'>
          <IconifyIcon icon={item.icon} width={70} height={70} />
          <div className='flex flex-col gap-1'>
            <TitleComponent
              title={item.name}
              weight='font-medium'
              textSize=''
              className='text-left text-[20px] leading-[24.20px] sm:text-[22px] sm:leading-[26.63px]'
            />
            <TitleComponent
              title={item.description}
              weight='font-normal'
              color='text-[#848484]'
              textSize=''
              className='text-left text-[15px] leading-[18.15px] max-w-[170px]'
            />
          </div>
        </div>
      ))}
    </div>
  )
}

function EssentialInformation({ className, data }: Props) {
  return (
    <div className={`${className}`}>
      <TitleComponent
        title='Essential Information'
        weight='font-semibold'
        textSize=''
        className='text-left text-[30px] leading-[36.31px]'
      />
      <InfoComponent data={data.amenities} className='grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8' />
    </div>
  )
}

export default EssentialInformation

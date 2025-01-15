import React, { HTMLProps } from 'react'
import CheckoutButton from '../../../../../components/CheckoutButton'
import { FindProductDetailsQuery } from '@graphql'
import TitleComponent from '@core/components/title'

interface Props {
  data: FindProductDetailsQuery['findOneProductPopulate']
  className?: HTMLProps<HTMLElement>['className']
}

export const TopBarBuy = ({ data, className }: Props) => {
  return (
    <div className={`border border-[#CBCBCB] py-4 px-6 rounded-2xl ${className}`}>
      <div className='flex flex-col items-start justify-center gap-1.5'>
        <div className='w-full flex items-center justify-between'>
          <TitleComponent
            title={`$${data.full_price}`}
            weight='font-bold'
            className='text-[17px] leading-[20.6px]'
            textSize=''
          />
          <TitleComponent
            title='Free shipping'
            weight='font-semibold'
            className='text-[17px] leading-[20.57px]'
            textSize=''
            color='text-primary'
          />
        </div>
        <TitleComponent
          title='Ships in 2-3 business days'
          weight='font-normal'
          className='text-[11px] leading-[13.33px]'
          textSize=''
        />

        <CheckoutButton data={data} />
      </div>
    </div>
  )
}

function SidebarFloatBuy({ data, className }: Props) {
  return (
    <div className={`border border-[#CBCBCB] p-10 rounded-3xl ${className}`}>
      <div className='flex flex-col items-start justify-center gap-1.5'>
        <TitleComponent
          title={`$${data.full_price}`}
          weight='font-medium'
          className='text-[24px] leading-[29.05px]'
          textSize=''
        />
        <TitleComponent
          title='Ships in 2-3 business days'
          weight='font-normal'
          className='text-[15px] leading-[18.15px]'
          textSize=''
        />
        <TitleComponent
          title='Free shipping'
          weight='font-semibold'
          className='text-[17px] leading-[20.57px] mb-7'
          textSize=''
          color='text-primary'
        />

        <CheckoutButton data={data} />
      </div>
    </div>
  )
}

export default SidebarFloatBuy

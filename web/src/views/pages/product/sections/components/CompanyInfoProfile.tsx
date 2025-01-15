import TitleComponent from '@core/components/title'
import { FindProductDetailsQuery } from '@graphql'
import React, { HTMLProps } from 'react'

interface Props {
  data: FindProductDetailsQuery['findOneProductPopulate']
  className?: HTMLProps<HTMLElement>['className']
}

function CompanyInfoProfile({ className, data }: Props) {
  return (
    <div className={`flex items-center justify-start gap-5 ${className}`}>
      <div className={`w-[72px] h-[72px] rounded-full text-center bg-[#EEEEEE] text-black relative`}>
        <TitleComponent
          textSize=''
          weight='font-semibold'
          className='text-[34px] leading-[41.16px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'
          title={data.companyId.initialLetter.toUpperCase()}
        />
      </div>
      <div className=''>
        <TitleComponent
          title={data.companyId.name}
          textSize=''
          weight='font-light'
          className='text-[20px] leading-[24.20px] mb-1'
        />
        <hr />
        <TitleComponent
          title='1 year of hosting'
          textSize=''
          weight='font-normal'
          color='text-[#949494]'
          className='text-[15px] leading-[18.15px] mt-1'
        />
      </div>
    </div>
  )
}

export default CompanyInfoProfile

import TitleComponent from '@core/components/title'
import Image from 'next/image'
import React, { HTMLProps } from 'react'

interface Props {
  className?: HTMLProps<HTMLElement>['className']
}

function ReportListing({ className }: Props) {
  return (
    <div className={`flex items-center justify-center gap-5 ${className}`} draggable={false}>
      <Image src='/assets/icons/report.svg' width={20} height={20} alt='report icon' draggable={false} />
      <TitleComponent
        title='Report this listing'
        textSize=''
        weight='font-bold'
        color='text-[#939393]'
        className='underline underline-offset-4 text-center text-[15px] leading-[18.15px] hover:cursor-pointer'
      />
    </div>
  )
}

export default ReportListing

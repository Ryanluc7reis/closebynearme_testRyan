import TitleComponent from '@core/components/title'
import { FindFaqsByLocationSlugQuery } from '@graphql'
import Image from 'next/image'
import React, { useState } from 'react'
import { MarkdownRenderComponent } from './MarkdownRenderComponent'

interface Props {
  data: FindFaqsByLocationSlugQuery['findOneLocationBySlug']['faqs']['docs'][0]
  show: boolean
  lastItem: boolean
  isMobile: boolean
}

function FaqComponent({ data, show, isMobile, lastItem }: Props) {
  const [visible, setVisible] = useState(show)

  return (
    <div
      className={`container mx-auto flex flex-col ${lastItem ? (isMobile ? 'my-4' : 'my-4 sm:my-10') : 'my-4 sm:my-10'}`}
      onClick={() => setVisible(!visible)}
    >
      <span className='flex flex-nowrap justify-between items-center'>
        <TitleComponent
          color='text-text'
          textSize='text-sm'
          weight='font-bold'
          title={data.question}
          className='sm:text-lg lg:text-3xl text-left select-none cursor-pointer '
        />

        {visible ? (
          <Image
            src={'/assets/icons/minus.svg'}
            width={30}
            height={30}
            alt='icon asset'
            draggable={false}
            className='w-[14px] sm:w-[20px] lg:w-[30px] select-none cursor-pointer'
          />
        ) : (
          <Image
            src={'/assets/icons/plus.svg'}
            width={30}
            height={30}
            draggable={false}
            className='w-[14px] sm:w-[20px] lg:w-[30px] select-none cursor-pointer'
            alt='icon asset'
          />
        )}
      </span>
      {visible && (
        <MarkdownRenderComponent
          text={data.answer}
          className='text-text font-inter font-light text-xs sm:text-base lg:text-2xl select-none mt-3'
        />
      )}
    </div>
  )
}

export default FaqComponent

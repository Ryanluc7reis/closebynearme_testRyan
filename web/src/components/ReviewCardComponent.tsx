import TitleComponent from '@core/components/title'
import Image from 'next/image'
import React from 'react'

export interface IReview {
  _id: string
  avatar: string
  name: string
  location: string
  review: number
  description: string
}

interface Props {
  item: IReview
  lastItem: boolean
}

function ReviewCardComponent({ item, lastItem }: Props) {
  return (
    <div
      className={`border border-[#939393] rounded-2xl flex flex-col items-start justify-center p-5 lg:p-10 ${lastItem ? '' : 'mb-5'} xl:mt-0`}
    >
      <div className='flex items-start justify-center'>
        <Image
          src={item.avatar}
          width={87}
          height={87}
          alt='customer review avatar'
          className='w-[61px] h-[61px] sm:w-[87px] sm:h-[87px] select-none'
          draggable={false}
        />
        <div className='flex flex-col justify-start items-start ml-8'>
          <TitleComponent
            textSize='text-base'
            weight='font-black'
            className='sm:text-xl text-center'
            title={item.name}
          />
          <TitleComponent
            textSize='text-sm'
            weight='font-thin'
            fontFamily='font-roboto'
            className=' text-[#989898] italic text-center'
            title={`Location: ${item.location}`}
          />
          <div className='flex flex-row justify-center items-center'>
            {Array(item.review)
              .fill(item.review)
              .map((value, idx) => (
                <Image
                  key={`review-star-${idx}`}
                  src='/assets/icons/star.svg'
                  width={15}
                  draggable={false}
                  className='select-none mx-0.5 mt-1'
                  height={15}
                  alt='star reviews count'
                />
              ))}
          </div>
        </div>
      </div>
      <TitleComponent
        title={item.description}
        weight='font-medium'
        textSize='text-sm'
        className='breaks-word sm:text-xl lg:w-[350px] mt-5'
      />
    </div>
  )
}

export default ReviewCardComponent

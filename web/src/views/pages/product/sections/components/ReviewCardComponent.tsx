import TitleComponent from '@core/components/title'
import { ListReviewsForCompanyQuery } from '@graphql'
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
  item: ListReviewsForCompanyQuery['listReviewsForCompany']['docs'][0]
}

function ReviewCardComponent({ item }: Props) {
  return (
    <div className={`border border-[#939393] rounded-2xl flex flex-col items-start justify-center p-5 lg:p-10`}>
      <div className='flex items-start justify-center'>
        <div>
          <div className={`w-[61px] h-[61px] sm:w-[66px] sm:h-[66px] rounded-full text-center bg-[#EDF6FF] relative`}>
            <TitleComponent
              textSize=''
              weight='font-bold'
              className='text-[30px] sm:text-[40px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'
              title={item.fullName[0].toUpperCase()}
            />
          </div>
          <div className='flex flex-row justify-center items-center gap-1'>
            {Array(item.amount)
              .fill(item.amount)
              .map((value, idx) => (
                <Image
                  key={`review-star-${idx}`}
                  src='/assets/icons/star.svg'
                  width={12}
                  draggable={false}
                  className='select-none mt-1'
                  height={11}
                  alt='star reviews count'
                />
              ))}
          </div>
        </div>
        <div className='flex flex-col justify-center items-start ml-6 gap-3'>
          <TitleComponent
            textSize=''
            weight='font-bold'
            className='text-[19.95px] leading-[24.15px] text-left'
            title={item.fullName}
          />
          <TitleComponent
            textSize=''
            weight='font-normal'
            fontFamily='font-roboto'
            color='text-[#989898]'
            className='text-[15px] leading-[17.58px] text-center'
            title={`Location: ${item.locationName}`}
          />
        </div>
      </div>
      <TitleComponent
        title={item.description}
        weight='font-light'
        className='breaks-word text-[15px] leading-[18.15px] sm:text-[18px] sm:leading-[21.78px]  mt-5'
      />
    </div>
  )
}

export default ReviewCardComponent

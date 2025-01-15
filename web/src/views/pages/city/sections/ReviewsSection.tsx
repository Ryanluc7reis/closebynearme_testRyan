import PaginationComponent from '@components/PaginationComponent'
import ReviewCardComponent, { IReview } from '@components/ReviewCardComponent'
import Button from '@core/components/button'
import TitleComponent from '@core/components/title'
import Image from 'next/image'
import React, { HTMLProps } from 'react'

const docs: IReview[] = [
  {
    _id: 'fake-review-01',
    avatar: '/assets/images/review_customer.svg',
    name: 'Catty S.',
    location: 'Los Angeles.',
    review: 5,
    description: '"Great service! The bounce house was clean and set up on time. Kids had a blast!"'
  },
  {
    _id: 'fake-review-02',
    avatar: '/assets/images/review_customer.svg',
    name: 'Catty S.',
    location: 'Los Angeles.',
    review: 5,
    description: '"Great service! The bounce house was clean and set up on time. Kids had a blast!"'
  },
  {
    _id: 'fake-review-03',
    avatar: '/assets/images/review_customer.svg',
    name: 'Catty S.',
    location: 'Los Angeles.',
    review: 5,
    description: '"Great service! The bounce house was clean and set up on time. Kids had a blast!"'
  }
]

interface Props {
  className?: HTMLProps<HTMLElement>['className']
  isMobile: boolean
}

function ReviewsComponent({ className, isMobile }: Props) {
  const _docs = docs.slice(0, isMobile ? 2 : 3)
  const handlePagination = () => {}

  return (
    <>
      <div className={className}>
        {_docs.map((item, idx) => (
          <ReviewCardComponent key={item._id} item={item} lastItem={idx + 1 === _docs.length} />
        ))}
        {isMobile && (
          <Button
            label='Read More Reviews'
            onClick={() => {}}
            textSize='text-base'
            weight='font-bold'
            color='bg-background'
            className='container mx-auto mt-3 px-3 py-[5px]'
            textClassName='lg:text-xl'
            textColor='text-primary'
            iconRight={
              <Image
                src='/assets/icons/arrow_right_empty.svg'
                alt='icon arrow right'
                height={11}
                draggable={false}
                width={11}
                className='select-none mx-2'
              />
            }
          />
        )}
      </div>

      <PaginationComponent data={{}} onPress={handlePagination} isMobile={isMobile} />
    </>
  )
}

function ReviewsSection({ className, isMobile }: Props) {
  return (
    <div className={className}>
      <div className='flex flex-col justify-center items-start lg:justify-between mb-2 xl:mb-16'>
        <TitleComponent
          title={`Our Customers Say It Best`}
          textSize='text-2xl'
          weight='font-black'
          className='lg:text-5xl'
        />
        {!isMobile && (
          <div className='flex justify-between items-center w-[100%]'>
            <TitleComponent
              title={`Thousands of Bounce Houses Provided`}
              textSize='text-base'
              weight='font-normal'
              className='lg:text-3xl'
            />
            <Button
              label='Read More Reviews'
              onClick={() => {}}
              textSize='text-base'
              weight='font-bold'
              color='bg-background'
              className='px-3 py-0'
              textClassName='lg:text-2xl'
              textColor='text-primary'
            />
          </div>
        )}
      </div>
      <ReviewsComponent
        isMobile={isMobile}
        className='flex flex-col lg:flex-row justify-center lg:justify-between items-center flex-wrap '
      />
    </div>
  )
}

export default ReviewsSection

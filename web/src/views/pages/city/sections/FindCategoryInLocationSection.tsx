import PaginationComponent from '@components/PaginationComponent'
import RentItemComponent, { IRentItem } from '@components/RentItemComponent'
import Button from '@core/components/button'
import TitleComponent from '@core/components/title'
import { FindLocationBySlugQuery } from '@graphql'
import Image from 'next/image'
import React, { HTMLProps } from 'react'

interface Props {
  data: {
    location: FindLocationBySlugQuery['findOneLocationBySlug']['location']
    category: FindLocationBySlugQuery['findOneLocationBySlug']['category']
  }
  className?: HTMLProps<HTMLElement>['className']
  isMobile: boolean
}

const docs: IRentItem[] = [
  {
    _id: 'fake-rent-01',
    mainImage: '/assets/images/rent_item_1/1.png',
    images: [
      '/assets/images/rent_item_1/2.png',
      '/assets/images/rent_item_1/3.png',
      '/assets/images/rent_item_1/4.png'
    ],
    name: 'Axe Challenge Game',
    delivery_time: '36h',
    price: '$174'
  },
  {
    _id: 'fake-rent-02',
    mainImage: '/assets/images/rent_item_2/1.png',
    images: [
      '/assets/images/rent_item_2/2.png',
      '/assets/images/rent_item_2/3.png',
      '/assets/images/rent_item_2/4.png'
    ],
    name: 'Baseball Game',
    delivery_time: '24h',
    price: '$174'
  },
  {
    _id: 'fake-rent-03',
    mainImage: '/assets/images/rent_item_3/1.png',
    images: [
      '/assets/images/rent_item_3/2.png',
      '/assets/images/rent_item_3/3.png',
      '/assets/images/rent_item_3/4.png'
    ],
    name: 'Basketball Game',
    delivery_time: '24h',
    price: '$182'
  }
]

function ListComponent({ className, isMobile }: Props) {
  const defaultStyle =
    'border border-[#939393] rounded-2xl flex flex-col items-start justify-center p-4 lg:p-10 mt-5 xl:mt-0'
  const defaultStyleMobile = (lastItem: boolean) => `p-5 rounded-2xl bg-[#F9F9F9] ${lastItem ? '' : 'mb-7'} w-[100%]`

  const handlePagination = () => {}

  return (
    <>
      <div className={className}>
        {docs.map((item, idx) => (
          <RentItemComponent
            key={item._id}
            item={item}
            className={isMobile ? defaultStyleMobile(idx + 1 === docs.length) : defaultStyle}
            isMobile={isMobile}
          />
        ))}
        {isMobile && (
          <Button
            label='Find Closest Location'
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
      <PaginationComponent isMobile={isMobile} data={{}} onPress={handlePagination} />
    </>
  )
}

function FindCategoryInLocationSection({ className, data, isMobile }: Props) {
  return (
    <div className={className}>
      <div className='flex flex-col justify-center items-start lg:justify-between xl:mb-16'>
        {isMobile ? (
          <>
            <TitleComponent
              title={`Find ${data.category.name} In`}
              textSize='text-xl'
              weight='font-black'
              className='sm:text-2xl lg:text-5xl'
            />
            <TitleComponent
              title={data.location.name}
              textSize='text-xl'
              weight='font-black'
              className='sm:text-2xl lg:text-5xl'
            />
          </>
        ) : (
          <TitleComponent
            title={`Find ${data.category.name} In ${data.location.name}`}
            textSize='text-xl'
            weight='font-black'
            className='sm:text-2xl lg:text-5xl'
          />
        )}
        {!isMobile && (
          <div className='flex justify-between items-center w-[100%]'>
            <TitleComponent
              title={`Most Popular ${data.category.name} in ${data.location.name}`}
              textSize='text-xl'
              weight='font-normal'
              className='lg:text-3xl'
            />
            <Button
              label={`Popular ${data.category.name}`}
              onClick={() => {}}
              textSize='text-lg'
              weight='font-bold'
              color='bg-background'
              textClassName='lg:text-2xl'
              className='px-3 py-0'
              textColor='text-primary'
            />
          </div>
        )}
      </div>

      <ListComponent
        data={data}
        isMobile={isMobile}
        className='flex flex-col lg:flex-row justify-center lg:justify-between items-center flex-wrap '
      />
    </div>
  )
}

export default FindCategoryInLocationSection

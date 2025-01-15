import CardComponent from '@core/components/card'
import TitleComponent from '@core/components/title'
import { FindOneCompanyBySlugQuery } from '@graphql'
import Image from 'next/image'
import React, { HTMLProps } from 'react'

interface Props {
  data: {
    location: FindOneCompanyBySlugQuery['findOneLocationBySlug']['location']
    category: FindOneCompanyBySlugQuery['findOneLocationBySlug']['category']
    company: FindOneCompanyBySlugQuery['findOneCompanyBySlug']['company']
  }
  className?: HTMLProps<HTMLElement>['className']
}

interface Item {
  _id: string
  name: string
  icon: string
  review: number
}

const docs: Item[] = [
  {
    _id: 'item-review-01',
    name: 'Safety',
    review: 4.7,
    icon: '/assets/icons/safety.svg'
  },
  {
    _id: 'item-review-02',
    name: 'Installation',
    review: 4.6,
    icon: '/assets/icons/box.svg'
  },
  {
    _id: 'item-review-03',
    name: 'Service',
    review: 4.6,
    icon: '/assets/icons/heart_siluete.svg'
  }
]
interface IReviewProps {
  item: Item
}

function ReviewItemStatusComponent({ item }: IReviewProps) {
  return (
    <div className='flex flex-col justify-between items-center mb-10 lg:mr-0 lg:mb-0 relative'>
      <div className='flex justify-between items-center w-[100%] mb-10'>
        <div className='flex justify-between items-center'>
          <Image
            src={item.icon}
            alt='image stats'
            width={22}
            height={34}
            draggable={false}
            className='select-none mr-6'
          />
          <TitleComponent title={item.name} weight='font-bold' textSize='text-lg' className='sm:text-xl' />
        </div>
        <TitleComponent title={`${item.review}`} weight='font-black' fontFamily='font-roboto' textSize='text-xl' />
      </div>
      <hr className='border absolute top-12 w-[100%]' />
      <Image
        src={'/assets/images/reviews_stats.svg'}
        alt='image stats'
        width={300}
        height={68}
        draggable={false}
        className='select-none'
      />
    </div>
  )
}

function CompanyReviewsSection({ className, data }: Props) {
  return (
    <CardComponent className={className}>
      <TitleComponent
        textSize='text-lg'
        weight='font-black'
        title={`${data.category.name} Reviews`}
        className='md:text-2xl lg:text-3xl text-center'
      />
      <TitleComponent
        textSize='text-sm'
        weight='font-normal'
        title='Cumulative Scores generated using AI from publicly available data'
        className='md:text-lg lg:text-lg text-center mt-2'
      />

      <div className='flex justify-center lg:justify-between items-center flex-wrap mt-10 relative'>
        <hr className='border absolute top-12 xl:w-[100%]' />
        {docs.map((item) => (
          <ReviewItemStatusComponent key={item._id} item={item} />
        ))}
      </div>
    </CardComponent>
  )
}

export default CompanyReviewsSection

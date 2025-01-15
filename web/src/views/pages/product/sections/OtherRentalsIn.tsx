import Button from '@core/components/button'
import TitleComponent from '@core/components/title'
import { FindOneCompanyBySlugQuery } from '@graphql'
import Link from 'next/link'
import React, { HTMLProps, useMemo, useState } from 'react'

interface Props {
  data: {
    location: FindOneCompanyBySlugQuery['findOneLocationBySlug']['location']
  }
  className?: HTMLProps<HTMLElement>['className']
}

function OtherRentalsInLocation({ data: { location }, className }: Props) {
  const [showAll, setShowAll] = useState(location.categories.length >= 8)
  const _data = useMemo(() => {
    if (showAll) {
      return location.categories.slice(0, 8)
    } else {
      return location.categories
    }
  }, [location.categories, showAll])

  return (
    <div className={`${className}`}>
      <TitleComponent
        title={`Other listings in ${location.name}`}
        textSize=''
        className='text-[20px] leading-[24.20px] text-left sm:text-[30px] sm:leading-[36.31px] mb-8 sm:mb-16'
        weight='font-semibold'
      />
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-10'>
        {_data.map((item) => (
          <Link
            href={`/city/${location.slug}/${item.slug}`}
            key={`company-page-item-${location._id}-${item.slug}`}
            className='border rounded-md border-[#CBCBCB] py-4 sm:py-8 hover:bg-secondary hover:border-none'
          >
            <TitleComponent
              title={item.name.replace(/Rentals|RENTALS|rentals/g, '')}
              className='leading-[16.94px] text-[14px] sm:leading-[36.31px] text-center sm:text-[30px]'
              weight='font-semibold'
              textSize=''
            />
          </Link>
        ))}
      </div>

      {showAll && (
        <div className='flex flex-col items-center justify-center gap-5 my-10 sm:my-16'>
          <TitleComponent
            title={`Explore listing in ${location.name}`}
            textSize=''
            weight='font-medium'
            className='leading-[18.15px] text-[15px] sm:leading-[29.05px] text-center sm:text-[24px]'
          />
          <Button
            onClick={() => {
              setShowAll(false)
            }}
            label='Show more'
            textSize=''
            color='bg-text'
            className='rounded-md'
            textColor='text-background'
            textClassName='leading-[18.15px] text-[15px] sm:text-[22px] sm:leading-[26.63px]'
            weight='font-semibold'
          />
        </div>
      )}
    </div>
  )
}

export default OtherRentalsInLocation

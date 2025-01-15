import Button from '@core/components/button'
import TitleComponent from '@core/components/title'
import { FindOneCompanyBySlugQuery } from '@graphql'
import Link from 'next/link'
import React, { HTMLProps, useMemo, useState } from 'react'

interface Props {
  data: {
    location: FindOneCompanyBySlugQuery['findOneLocationBySlug']['location']
    category: FindOneCompanyBySlugQuery['findOneLocationBySlug']['category']
    company: FindOneCompanyBySlugQuery['findOneCompanyBySlug']['company']
    companies: FindOneCompanyBySlugQuery['findOneLocationBySlug']['companies']['docs']
    products: FindOneCompanyBySlugQuery['findOneCompanyBySlug']['products']['docs']
  }
  className?: HTMLProps<HTMLElement>['className']
}

function YouMayAlsoLikeSection({ data: { category, companies, location }, className }: Props) {
  const [showAll, setShowAll] = useState(companies.length >= 8)
  const _data = useMemo(() => {
    if (showAll) {
      return companies.slice(0, 8)
    } else {
      return companies
    }
  }, [companies, showAll])

  return (
    <div className={`${className}`}>
      <TitleComponent
        title={`You may also like`}
        textSize=''
        className='text-[20px] leading-[24.20px] text-center sm:text-[45px] sm:leading-[54.46px]'
        weight='font-semibold'
      />

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 mt-10'>
        {_data.map((item) => (
          <Link
            href={`/city/${location.slug}/${category.slug}/${item.slug}`}
            key={`company-page-item-${item._id}-${item.slug}`}
            className='border rounded-md border-[#CBCBCB] py-4 sm:py-8 hover:bg-secondary hover:border-none'
          >
            <TitleComponent
              title={item.name}
              className='text-center leading-[24.20px] text-[20px] sm:leading-[29.04px] sm:text-[24px]'
              weight='font-semibold'
              textSize=''
            />
          </Link>
        ))}
      </div>
      {showAll && (
        <div className='flex flex-col items-center justify-center gap-5 my-10 sm:my-16'>
          <TitleComponent
            title={`Other rental companies in ${location.name}`}
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

export default YouMayAlsoLikeSection
